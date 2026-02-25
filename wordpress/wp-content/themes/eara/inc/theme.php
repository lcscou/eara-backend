<?php
add_theme_support('post-thumbnails');
function add_file_types_to_uploads($file_types)
{
    $new_filetypes = array();
    $new_filetypes['svg'] = 'image/svg+xml';
    $file_types = array_merge($file_types, $new_filetypes);
    return $file_types;
}
add_filter('upload_mimes', 'add_file_types_to_uploads');
function eara_registrar_menus()
{
    register_nav_menus(array(
        'main-menu-left' => __('Main Menu - Left', 'eara'),
        'main-menu-right' => __('Main Menu - Right', 'eara'),
        'main-footer' => __('Main footer', 'eara'),
    ));
}
add_action('after_setup_theme', 'eara_registrar_menus');


add_theme_support('wp-block-styles');
add_theme_support('editor-styles');
add_theme_support('responsive-embeds');
add_theme_support('align-wide');


add_theme_support('editor-styles');
add_editor_style('/build/editor.css');

add_action('enqueue_block_editor_assets', function () {
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&display=swap', [], null);

    // Enqueue Tailwind CSS for editor
    // wp_enqueue_style(
    //     'eara-editor-styles',
    //     get_template_directory_uri() . '/build/editor.css',
    //     [],
    //     filemtime(get_template_directory() . '/build/editor.css')
    // );
});

add_filter('retrieve_password_message', function ($message, $key, $user_login, $user_data) {
    $frontend_url = wp_get_environment_type() === 'development' ? 'http://localhost:3000/reset-password' : 'https://eara-frontend.vercel.app/reset-password';
    $reset_link = add_query_arg(
        [
            'key' => $key,
            'login' => rawurlencode($user_login),
        ],
        $frontend_url
    );

    $message = "Someone has requested a password reset for your account.\r\n\r\n";
    $message .= "If this was not you, please ignore this email.\r\n\r\n";
    $message .= "To reset your password, please visit the link below:\r\n\r\n";
    $message .= $reset_link . "\r\n";

    return $message;
}, 10, 4);



add_action('init', function () {

    $role = get_role('member');
    if (!$role) {
        add_role('member', 'Member', [
            'read' => true,
            'read_private_pages' => true,
            'read_private_posts' => true,
        ]);
    }

    if (!empty($role)) {
        $role->add_cap('read');
        $role->add_cap('read_private_pages');
        $role->add_cap('edit_posts');
        $role->add_cap('edit_private_posts');
        $role->add_cap('edit_pages');
        $role->add_cap('edit_private_pages');
        $role->add_cap('read_private_posts');
    }
});

add_action('admin_init', function () {
    // if (is_user_logged_in() && current_user_can('member')) {
    //     wp_safe_redirect(home_url());
    //     exit;
    // }
});

// add_action('init', function () {
//     // header('Access-Control-Allow-Origin: http://localhost:3000');
//     // header('Access-Control-Allow-Credentials: true');
//     $data = [
//         'method' => $_SERVER['REQUEST_METHOD'] ?? null,
//         'uri' => $_SERVER['REQUEST_URI'] ?? null,
//         'query' => $_GET,
//         'origin' => $_SERVER,
//         'body' => file_get_contents('php://input'),
//         'headers' => getallheaders(),
//     ];

//     error_log(print_r($data, true));
// });

add_filter('manage_media-bank_posts_columns', function ($columns) {
    $updated_columns = [];

    foreach ($columns as $key => $label) {
        $updated_columns[$key] = $label;

        if ($key === 'title') {
            $updated_columns['media_preview'] = __('Preview', 'eara');
        }
    }

    if (!isset($updated_columns['media_preview'])) {
        $updated_columns['media_preview'] = __('Preview', 'eara');
    }

    return $updated_columns;
});

add_action('manage_media-bank_posts_custom_column', function ($column, $post_id) {
    if ($column !== 'media_preview') {
        return;
    }

    $media_type = get_field('media_type', $post_id);

    if ($media_type === 'video') {
        echo '<div class="eara-media-preview eara-media-preview--video" aria-hidden="true">';
        echo '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">';
        echo '<circle cx="12" cy="12" r="12" fill="#1d2327" opacity="0.85"/>';
        echo '<path d="M10 8.75V15.25L15.5 12L10 8.75Z" fill="#ffffff"/>';
        echo '</svg>';
        echo '</div>';
        return;
    }

    $image = get_field('image', $post_id);
    $image_url = '';

    if (is_array($image) && !empty($image['url'])) {
        $image_url = $image['url'];
    } elseif (is_numeric($image)) {
        $image_url = wp_get_attachment_image_url((int) $image, 'thumbnail') ?: '';
    } elseif (is_string($image)) {
        $image_url = $image;
    }

    if (!empty($image_url)) {
        echo '<img class="eara-media-preview" src="' . esc_url($image_url) . '" alt="" loading="lazy" />';
        return;
    }

    echo '<span aria-hidden="true">—</span>';
}, 10, 2);

add_action('admin_head-edit.php', function () {
    $screen = get_current_screen();

    if (!$screen || $screen->post_type !== 'media-bank') {
        return;
    }

    echo '<style>
        .column-media_preview { width: 88px; }
        .eara-media-preview {
            width: 64px;
            height: 64px;
            border-radius: 4px;
            object-fit: cover;
            display: inline-block;
            background: #f0f0f1;
        }
        .eara-media-preview--video {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: #dcdcde;
        }
    </style>';
});


add_action('add_attachment', function ($post_id) {
    wp_update_post([
        'ID' => $post_id,
        'post_parent' => 0
    ]);
});