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
add_editor_style('editor-style.css');

add_action('enqueue_block_editor_assets', function () {
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&display=swap', [], null);
});



// add_action('enqueue_block_editor_assets', function () {
//     wp_enqueue_style(
//         'your-theme-or-plugin-editor-styles',
//         get_template_directory_uri() . '/build/editor.css',
//         filemtime(get_template_directory() . '/build/editor.css')
//     );
// });