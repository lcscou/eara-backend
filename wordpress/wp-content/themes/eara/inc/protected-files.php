<?php

if (!defined('ABSPATH')) {
    exit;
}

function eara_get_protected_files_directory()
{
    $upload_dir = wp_upload_dir();

    $candidates = [
        trailingslashit($upload_dir['basedir']) . 'eara-protected-files',
        trailingslashit(dirname(ABSPATH)) . 'eara-protected-files',
    ];

    foreach ($candidates as $directory) {
        if (!is_dir($directory)) {
            wp_mkdir_p($directory);
        }

        if (!is_dir($directory) || !is_writable($directory)) {
            continue;
        }

        $index_file = trailingslashit($directory) . 'index.php';
        if (!file_exists($index_file)) {
            file_put_contents($index_file, "<?php\n");
        }

        $htaccess_file = trailingslashit($directory) . '.htaccess';
        if (!file_exists($htaccess_file)) {
            file_put_contents($htaccess_file, "Deny from all\n");
        }

        return $directory;
    }

    return new WP_Error('eara_protected_dir_unavailable', __('Protected files directory is not writable.', 'eara'));
}

function eara_get_protected_file_path($attachment_id)
{
    return get_post_meta($attachment_id, '_eara_protected_file_path', true);
}

function eara_build_protected_file_download_url($attachment_id, $ttl = 300)
{
    $expires = time() + absint($ttl);
    $payload = $attachment_id . '|' . $expires;
    $token = hash_hmac('sha256', $payload, wp_salt('auth'));

    return add_query_arg([
        'action' => 'eara_download_protected_file',
        'id' => (int) $attachment_id,
        'expires' => $expires,
        'token' => $token,
    ], admin_url('admin-post.php'));
}

function eara_is_valid_protected_download_signature($attachment_id, $expires, $token)
{
    if (empty($attachment_id) || empty($expires) || empty($token)) {
        return false;
    }

    if ((int) $expires < time()) {
        return false;
    }

    $expected = hash_hmac('sha256', $attachment_id . '|' . $expires, wp_salt('auth'));

    return hash_equals($expected, $token);
}

add_action('rest_api_init', function () {
    register_rest_route('eara/v1', '/protected-files', [
        'methods' => 'POST',
        'permission_callback' => function () {
            return current_user_can('upload_files');
        },
        'callback' => function ($request) {
            $files = $request->get_file_params();
            $file = $files['file'] ?? null;

            if (empty($file) || !is_array($file)) {
                return new WP_Error('eara_missing_file', __('No file was sent.', 'eara'), ['status' => 400]);
            }

            if (!empty($file['error'])) {
                return new WP_Error('eara_upload_error', __('Upload failed.', 'eara'), ['status' => 400]);
            }

            $directory = eara_get_protected_files_directory();
            if (is_wp_error($directory)) {
                return new WP_Error('eara_directory_unavailable', $directory->get_error_message(), ['status' => 500]);
            }

            $filename = wp_unique_filename($directory, sanitize_file_name($file['name']));
            $target = trailingslashit($directory) . $filename;

            $moved = move_uploaded_file($file['tmp_name'], $target);
            if (!$moved) {
                $moved = @rename($file['tmp_name'], $target);
            }

            if (!$moved && file_exists($file['tmp_name'])) {
                $moved = @copy($file['tmp_name'], $target);
                if ($moved) {
                    @unlink($file['tmp_name']);
                }
            }

            if (!$moved) {
                return new WP_Error('eara_move_failed', __('Could not store uploaded file.', 'eara'), ['status' => 500]);
            }

            if (function_exists('finfo_open')) {
                $finfo = finfo_open(FILEINFO_MIME_TYPE);
                $mime_type = $finfo ? finfo_file($finfo, $target) : '';
                if ($finfo) {
                    finfo_close($finfo);
                }
            }

            $mime_type = !empty($mime_type) ? $mime_type : ($file['type'] ?? 'application/octet-stream');
            $attachment_title = preg_replace('/\.[^.]+$/', '', basename($filename));

            $attachment_id = wp_insert_attachment([
                'post_title' => sanitize_text_field($attachment_title),
                'post_status' => 'private',
                'post_mime_type' => sanitize_text_field($mime_type),
                'post_type' => 'attachment',
                'guid' => '',
            ]);

            if (is_wp_error($attachment_id) || empty($attachment_id)) {
                @unlink($target);
                return new WP_Error('eara_attachment_failed', __('Could not create attachment.', 'eara'), ['status' => 500]);
            }

            update_post_meta($attachment_id, '_eara_protected_file', '1');
            update_post_meta($attachment_id, '_eara_protected_file_path', $target);
            update_post_meta($attachment_id, '_eara_protected_original_name', sanitize_file_name($file['name']));
            update_post_meta($attachment_id, '_eara_protected_mime_type', sanitize_text_field($mime_type));
            update_post_meta($attachment_id, '_eara_protected_size', filesize($target));

            return rest_ensure_response([
                'id' => (int) $attachment_id,
                'fileName' => get_post_meta($attachment_id, '_eara_protected_original_name', true),
                'mimeType' => get_post_meta($attachment_id, '_eara_protected_mime_type', true),
                'size' => (int) get_post_meta($attachment_id, '_eara_protected_size', true),
            ]);
        },
    ]);
});

add_action('admin_post_eara_download_protected_file', 'eara_download_protected_file');
add_action('admin_post_nopriv_eara_download_protected_file', 'eara_download_protected_file');

function eara_download_protected_file()
{
    $attachment_id = isset($_GET['id']) ? absint($_GET['id']) : 0;
    $expires = isset($_GET['expires']) ? absint($_GET['expires']) : 0;
    $token = isset($_GET['token']) ? sanitize_text_field(wp_unslash($_GET['token'])) : '';

    if (!eara_is_valid_protected_download_signature($attachment_id, $expires, $token)) {
        status_header(403);
        exit;
    }

    if (get_post_meta($attachment_id, '_eara_protected_file', true) !== '1') {
        status_header(404);
        exit;
    }

    $file_path = eara_get_protected_file_path($attachment_id);

    if (empty($file_path) || !file_exists($file_path) || !is_readable($file_path)) {
        status_header(404);
        exit;
    }

    $file_name = get_post_meta($attachment_id, '_eara_protected_original_name', true);
    $mime_type = get_post_meta($attachment_id, '_eara_protected_mime_type', true);

    if (empty($file_name)) {
        $file_name = basename($file_path);
    }

    if (empty($mime_type)) {
        $mime_type = 'application/octet-stream';
    }

    header('Content-Description: File Transfer');
    header('Content-Type: ' . $mime_type);
    header('Content-Disposition: attachment; filename="' . rawurlencode($file_name) . '"');
    header('Content-Length: ' . filesize($file_path));
    header('Cache-Control: private, no-store, no-cache, must-revalidate');
    header('Pragma: public');

    readfile($file_path);
    exit;
}

add_action('before_delete_post', function ($post_id) {
    if (get_post_type($post_id) !== 'attachment') {
        return;
    }

    if (get_post_meta($post_id, '_eara_protected_file', true) !== '1') {
        return;
    }

    $file_path = eara_get_protected_file_path($post_id);

    if (!empty($file_path) && file_exists($file_path)) {
        @unlink($file_path);
    }
});

add_action('graphql_register_types', function () {
    if (!function_exists('register_graphql_object_type') || !function_exists('register_graphql_field')) {
        return;
    }

    register_graphql_object_type('ProtectedFile', [
        'description' => __('Protected file accessible with signed URL only.', 'eara'),
        'fields' => [
            'id' => [
                'type' => 'Int',
                'description' => __('Attachment database ID.', 'eara'),
            ],
            'fileName' => [
                'type' => 'String',
                'description' => __('Original uploaded filename.', 'eara'),
            ],
            'mimeType' => [
                'type' => 'String',
                'description' => __('File MIME type.', 'eara'),
            ],
            'size' => [
                'type' => 'Int',
                'description' => __('File size in bytes.', 'eara'),
            ],
            'downloadUrl' => [
                'type' => 'String',
                'description' => __('Short-lived signed URL to download protected file.', 'eara'),
            ],
        ],
    ]);

    register_graphql_field('RootQuery', 'protectedFile', [
        'type' => 'ProtectedFile',
        'description' => __('Returns protected file metadata for authenticated users only.', 'eara'),
        'args' => [
            'id' => [
                'type' => 'Int',
                'description' => __('Attachment ID.', 'eara'),
            ],
        ],
        'resolve' => function ($root, $args, $context) {
            $viewer_id = isset($context->viewer) && isset($context->viewer->ID) ? (int) $context->viewer->ID : 0;

            if (!$viewer_id) {
                return null;
            }

            $attachment_id = isset($args['id']) ? absint($args['id']) : 0;
            if (!$attachment_id) {
                return null;
            }

            if (get_post_type($attachment_id) !== 'attachment') {
                return null;
            }

            if (get_post_meta($attachment_id, '_eara_protected_file', true) !== '1') {
                return null;
            }

            $file_path = eara_get_protected_file_path($attachment_id);
            if (empty($file_path) || !file_exists($file_path)) {
                return null;
            }

            return [
                'id' => $attachment_id,
                'fileName' => get_post_meta($attachment_id, '_eara_protected_original_name', true),
                'mimeType' => get_post_meta($attachment_id, '_eara_protected_mime_type', true),
                'size' => (int) get_post_meta($attachment_id, '_eara_protected_size', true),
                'downloadUrl' => eara_build_protected_file_download_url($attachment_id),
            ];
        },
    ]);

    register_graphql_field('MediaItem', 'protectedDownloadUrl', [
        'type' => 'String',
        'description' => __('Signed download URL for protected attachments (authenticated only).', 'eara'),
        'resolve' => function ($source, $args, $context) {
            $viewer_id = isset($context->viewer) && isset($context->viewer->ID) ? (int) $context->viewer->ID : 0;

            if (!$viewer_id) {
                return null;
            }

            $attachment_id = 0;

            if (isset($source->databaseId)) {
                $attachment_id = (int) $source->databaseId;
            } elseif (isset($source->ID)) {
                $attachment_id = (int) $source->ID;
            }

            if (!$attachment_id) {
                return null;
            }

            if (get_post_type($attachment_id) !== 'attachment') {
                return null;
            }

            if (get_post_meta($attachment_id, '_eara_protected_file', true) !== '1') {
                return null;
            }

            $file_path = eara_get_protected_file_path($attachment_id);
            if (empty($file_path) || !file_exists($file_path)) {
                return null;
            }

            return eara_build_protected_file_download_url($attachment_id);
        },
    ]);

    register_graphql_field('MediaItem', 'isProtectedFile', [
        'type' => 'Boolean',
        'description' => __('Whether this MediaItem is a protected file.', 'eara'),
        'resolve' => function ($source) {
            $attachment_id = 0;

            if (isset($source->databaseId)) {
                $attachment_id = (int) $source->databaseId;
            } elseif (isset($source->ID)) {
                $attachment_id = (int) $source->ID;
            }

            if (!$attachment_id) {
                return false;
            }

            if (get_post_type($attachment_id) !== 'attachment') {
                return false;
            }

            return get_post_meta($attachment_id, '_eara_protected_file', true) === '1';
        },
    ]);

    register_graphql_field('MediaItem', 'protectedFile', [
        'type' => 'ProtectedFile',
        'description' => __('Protected file metadata for this MediaItem (authenticated only).', 'eara'),
        'resolve' => function ($source, $args, $context) {
            $viewer_id = isset($context->viewer) && isset($context->viewer->ID) ? (int) $context->viewer->ID : 0;

            if (!$viewer_id) {
                return null;
            }

            $attachment_id = 0;

            if (isset($source->databaseId)) {
                $attachment_id = (int) $source->databaseId;
            } elseif (isset($source->ID)) {
                $attachment_id = (int) $source->ID;
            }

            if (!$attachment_id) {
                return null;
            }

            if (get_post_type($attachment_id) !== 'attachment') {
                return null;
            }

            if (get_post_meta($attachment_id, '_eara_protected_file', true) !== '1') {
                return null;
            }

            $file_path = eara_get_protected_file_path($attachment_id);
            if (empty($file_path) || !file_exists($file_path)) {
                return null;
            }

            return [
                'id' => $attachment_id,
                'fileName' => get_post_meta($attachment_id, '_eara_protected_original_name', true),
                'mimeType' => get_post_meta($attachment_id, '_eara_protected_mime_type', true),
                'size' => (int) get_post_meta($attachment_id, '_eara_protected_size', true),
                'downloadUrl' => eara_build_protected_file_download_url($attachment_id),
            ];
        },
    ]);
});
