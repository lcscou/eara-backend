<?php

if (!defined('ABSPATH')) {
    exit;
}

function eara_ap_get_private_base_dir()
{
    return wp_normalize_path(trailingslashit(WP_CONTENT_DIR) . 'private-uploads');
}

function eara_ap_get_private_base_url()
{
    return trailingslashit(content_url('private-uploads'));
}

function eara_ap_get_private_htaccess_contents()
{
    return "Options -Indexes\n\n<IfModule mod_rewrite.c>\nRewriteEngine On\n\n\nRewriteRule ^(.+)$ /wp-content/private-gate.php?file=$1 [QSA,L,NC,B]\n</IfModule>\n";
}

function eara_ap_get_private_gate_template_path()
{
    return wp_normalize_path(get_template_directory() . '/inc/private-gate-template.php');
}

function eara_ap_get_wp_content_private_gate_path()
{
    return wp_normalize_path(trailingslashit(WP_CONTENT_DIR) . 'private-gate.php');
}

function eara_ap_ensure_required_private_htaccess()
{
    $private_dir = wp_normalize_path(trailingslashit(WP_CONTENT_DIR) . 'private');

    if (!is_dir($private_dir)) {
        wp_mkdir_p($private_dir);
    }

    if (!is_dir($private_dir) || !is_writable($private_dir)) {
        return false;
    }

    $htaccess_file = trailingslashit($private_dir) . '.htaccess';
    $required = eara_ap_get_private_htaccess_contents();
    $current = file_exists($htaccess_file) ? (string) file_get_contents($htaccess_file) : '';

    if ($current !== $required) {
        file_put_contents($htaccess_file, $required);
    }

    return true;
}

function eara_ap_sync_private_gate_file()
{
    $template = eara_ap_get_private_gate_template_path();
    $target = eara_ap_get_wp_content_private_gate_path();

    if (!file_exists($template) || !is_readable($template)) {
        return false;
    }

    $template_contents = (string) file_get_contents($template);
    $current_contents = file_exists($target) ? (string) file_get_contents($target) : '';

    if ($template_contents !== $current_contents) {
        file_put_contents($target, $template_contents);
    }

    return true;
}

function eara_ap_remove_private_gate_file()
{
    $target = eara_ap_get_wp_content_private_gate_path();

    if (file_exists($target)) {
        @unlink($target);
    }
}

function eara_ap_ensure_private_base_dir()
{
    $private_dir = eara_ap_get_private_base_dir();

    if (!is_dir($private_dir)) {
        wp_mkdir_p($private_dir);
    }

    if (!is_dir($private_dir) || !is_writable($private_dir)) {
        return false;
    }

    $index_file = trailingslashit($private_dir) . 'index.php';
    if (!file_exists($index_file)) {
        file_put_contents($index_file, "<?php\n");
    }

    $htaccess_file = trailingslashit($private_dir) . '.htaccess';
    $required_htaccess = eara_ap_get_private_htaccess_contents();
    $current_htaccess = file_exists($htaccess_file) ? (string) file_get_contents($htaccess_file) : '';
    if ($current_htaccess !== $required_htaccess) {
        file_put_contents($htaccess_file, $required_htaccess);
    }

    return true;
}

add_action('init', function () {
    eara_ap_ensure_required_private_htaccess();
    eara_ap_sync_private_gate_file();
});

add_action('after_switch_theme', function () {
    eara_ap_ensure_required_private_htaccess();
    eara_ap_sync_private_gate_file();
});

add_action('switch_theme', function ($new_name, $new_theme, $old_theme) {
    unset($new_name, $new_theme);

    if (!($old_theme instanceof WP_Theme)) {
        return;
    }

    $this_theme_slug = basename(dirname(dirname(__FILE__)));
    $old_stylesheet = (string) $old_theme->get_stylesheet();
    $old_template = (string) $old_theme->get_template();

    if ($old_stylesheet === $this_theme_slug || $old_template === $this_theme_slug) {
        eara_ap_remove_private_gate_file();
    }
}, 10, 3);

function eara_ap_get_attachment_id_from_acf_post_id($post_id)
{
    if (is_numeric($post_id)) {
        return absint($post_id);
    }

    if (is_string($post_id) && strpos($post_id, 'post_') === 0) {
        return absint(substr($post_id, 5));
    }

    return 0;
}

function eara_ap_is_attachment_protected($attachment_id)
{
    $value = get_post_meta($attachment_id, 'is_protected', true);
    return !empty($value);
}

function eara_ap_normalize_relative_path($path)
{
    $path = ltrim((string) $path, '/\\');
    $path = wp_normalize_path($path);

    if ($path === '' || strpos($path, '..') !== false) {
        return '';
    }

    return $path;
}

function eara_ap_relative_from_absolute_upload_path($absolute_path)
{
    $upload_dir = wp_upload_dir();
    $base_dir = wp_normalize_path($upload_dir['basedir']);
    $absolute_path = wp_normalize_path((string) $absolute_path);

    if ($absolute_path === '' || strpos($absolute_path, $base_dir . '/') !== 0) {
        return '';
    }

    return eara_ap_normalize_relative_path(substr($absolute_path, strlen($base_dir) + 1));
}

function eara_ap_collect_attachment_relative_files($attachment_id)
{
    $files = [];

    $main_relative = eara_ap_normalize_relative_path(get_post_meta($attachment_id, '_wp_attached_file', true));

    if ($main_relative === '') {
        $main_relative = eara_ap_relative_from_absolute_upload_path(get_attached_file($attachment_id, true));
    }

    if ($main_relative !== '') {
        $files[] = $main_relative;
    }

    $metadata = wp_get_attachment_metadata($attachment_id);
    if (!is_array($metadata)) {
        return array_values(array_unique($files));
    }

    $metadata_main = isset($metadata['file']) ? eara_ap_normalize_relative_path($metadata['file']) : '';
    if ($metadata_main !== '') {
        $files[] = $metadata_main;
    }

    $base_relative_dir = '';
    if ($main_relative !== '') {
        $main_dir = dirname($main_relative);
        $base_relative_dir = ($main_dir === '.') ? '' : $main_dir;
    } elseif ($metadata_main !== '') {
        $main_dir = dirname($metadata_main);
        $base_relative_dir = ($main_dir === '.') ? '' : $main_dir;
    }

    if (!empty($metadata['sizes']) && is_array($metadata['sizes'])) {
        foreach ($metadata['sizes'] as $size_data) {
            if (empty($size_data['file'])) {
                continue;
            }

            $size_file = eara_ap_normalize_relative_path($size_data['file']);
            if ($size_file === '') {
                continue;
            }

            $relative_size = $base_relative_dir !== ''
                ? eara_ap_normalize_relative_path($base_relative_dir . '/' . $size_file)
                : $size_file;

            if ($relative_size !== '') {
                $files[] = $relative_size;

                $relative_webp = eara_ap_normalize_relative_path(preg_replace('/\.[^.]+$/', '.webp', $relative_size));
                if ($relative_webp !== '') {
                    $files[] = $relative_webp;
                }
            }
        }
    }

    if (!empty($metadata['webp']['file'])) {
        $webp_file = eara_ap_normalize_relative_path($metadata['webp']['file']);
        if ($webp_file !== '') {
            $relative_webp = $base_relative_dir !== ''
                ? eara_ap_normalize_relative_path($base_relative_dir . '/' . $webp_file)
                : $webp_file;

            if ($relative_webp !== '') {
                $files[] = $relative_webp;
            }
        }
    }

    return array_values(array_unique(array_filter($files)));
}

function eara_ap_cleanup_empty_dirs($start_dir, $base_dir)
{
    $start_dir = wp_normalize_path($start_dir);
    $base_dir = wp_normalize_path($base_dir);

    while ($start_dir !== '' && $start_dir !== $base_dir && strpos($start_dir, $base_dir . '/') === 0) {
        if (!is_dir($start_dir)) {
            $start_dir = dirname($start_dir);
            continue;
        }

        $entries = @scandir($start_dir);
        if (!is_array($entries)) {
            break;
        }

        if (count($entries) > 2) {
            break;
        }

        @rmdir($start_dir);
        $start_dir = dirname($start_dir);
    }
}

function eara_ap_move_attachment_files($attachment_id, $to_private)
{
    if (get_post_type($attachment_id) !== 'attachment') {
        return false;
    }

    $upload_dir = wp_upload_dir();
    $uploads_base = wp_normalize_path($upload_dir['basedir']);
    $private_base = eara_ap_get_private_base_dir();

    if ($to_private && !eara_ap_ensure_private_base_dir()) {
        return false;
    }

    $source_base = $to_private ? $uploads_base : $private_base;
    $target_base = $to_private ? $private_base : $uploads_base;

    $relative_files = eara_ap_collect_attachment_relative_files($attachment_id);

    $processed_any = false;
    foreach ($relative_files as $relative_file) {
        $source = wp_normalize_path($source_base . '/' . $relative_file);
        $target = wp_normalize_path($target_base . '/' . $relative_file);

        if (!file_exists($source)) {
            if (file_exists($target)) {
                $processed_any = true;
            }
            continue;
        }

        $target_dir = dirname($target);
        if (!is_dir($target_dir)) {
            wp_mkdir_p($target_dir);
        }

        $moved = @rename($source, $target);
        if (!$moved) {
            $moved = @copy($source, $target);
            if ($moved) {
                @unlink($source);
            }
        }

        if ($moved) {
            $processed_any = true;
            eara_ap_cleanup_empty_dirs(dirname($source), $source_base);
        }
    }

    return $processed_any;
}

function eara_ap_filter_attached_file($file, $attachment_id)
{
    if (!eara_ap_is_attachment_protected($attachment_id)) {
        return $file;
    }

    $relative = eara_ap_normalize_relative_path(get_post_meta($attachment_id, '_wp_attached_file', true));
    if ($relative === '') {
        return $file;
    }

    $private_file = wp_normalize_path(eara_ap_get_private_base_dir() . '/' . $relative);
    if (file_exists($private_file)) {
        return $private_file;
    }

    return $file;
}
add_filter('get_attached_file', 'eara_ap_filter_attached_file', 20, 2);

function eara_ap_filter_attachment_url($url, $attachment_id)
{
    if (!eara_ap_is_attachment_protected($attachment_id)) {
        return $url;
    }

    $relative = eara_ap_normalize_relative_path(get_post_meta($attachment_id, '_wp_attached_file', true));
    if ($relative === '') {
        return $url;
    }

    return eara_ap_get_private_base_url() . ltrim($relative, '/');
}
add_filter('wp_get_attachment_url', 'eara_ap_filter_attachment_url', 20, 2);

function eara_ap_handle_is_protected_toggle($value, $post_id, $field)
{
    $attachment_id = eara_ap_get_attachment_id_from_acf_post_id($post_id);
    if (!$attachment_id || get_post_type($attachment_id) !== 'attachment') {
        return $value;
    }

    $new_state = !empty($value);
    $old_state = eara_ap_is_attachment_protected($attachment_id);

    if ($new_state === $old_state) {
        return $new_state ? 1 : 0;
    }

    $moved = eara_ap_move_attachment_files($attachment_id, $new_state);
    if (!$moved) {
        error_log('Attachment protection toggle failed for attachment ID ' . $attachment_id);
        return $old_state ? 1 : 0;
    }

    return $new_state ? 1 : 0;
}
add_filter('acf/update_value/name=is_protected', 'eara_ap_handle_is_protected_toggle', 20, 3);

function eara_ap_cleanup_private_files_on_delete($attachment_id)
{
    if (get_post_type($attachment_id) !== 'attachment') {
        return;
    }

    $private_base = eara_ap_get_private_base_dir();
    $relative_files = eara_ap_collect_attachment_relative_files($attachment_id);

    foreach ($relative_files as $relative_file) {
        $private_file = wp_normalize_path($private_base . '/' . $relative_file);
        if (!file_exists($private_file)) {
            continue;
        }

        @unlink($private_file);
        eara_ap_cleanup_empty_dirs(dirname($private_file), $private_base);
    }
}
add_action('delete_attachment', 'eara_ap_cleanup_private_files_on_delete');
