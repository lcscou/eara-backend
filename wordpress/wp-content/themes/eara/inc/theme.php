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
