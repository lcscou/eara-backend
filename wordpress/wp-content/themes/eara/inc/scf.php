<?php
add_action('rest_api_init', function () {
    register_rest_field(
        ['post', 'page'],
        'scf',
        [
            'get_callback' => function ($object) {
                return get_post_meta($object['id']);
            },
            'schema' => null,
        ]
    );
});
/** options page acf */
if (function_exists('acf_add_options_page')) {
    acf_add_options_page(array(
        'page_title' => 'Eara Settings',
        'menu_title' => 'Eara Settings',
    ));
}
add_filter('acf/settings/save_json', 'my_acf_json_save_point');
function my_acf_json_save_point($path)
{
    $path = get_stylesheet_directory() . '/acf-data';
    return $path;
}
add_filter('acf/settings/load_json', 'my_acf_json_load_point');
function my_acf_json_load_point($paths)
{
    unset($paths[0]);
    $paths[] = get_stylesheet_directory() . '/acf-data';
    return $paths;
}