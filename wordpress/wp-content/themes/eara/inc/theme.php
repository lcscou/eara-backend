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
    $frontend_url = 'https://eara-frontend.vercel.app/reset-password';
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


// add_action('enqueue_block_editor_assets', function () {
//     wp_enqueue_style(
//         'your-theme-or-plugin-editor-styles',
//         get_template_directory_uri() . '/build/editor.css',
//         filemtime(get_template_directory() . '/build/editor.css')
//     );
// });