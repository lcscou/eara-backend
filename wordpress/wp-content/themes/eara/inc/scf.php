<?php
function eara_to_float($value)
{
    if (is_numeric($value)) {
        return (float) $value;
    }

    if (is_string($value)) {
        $normalized = str_replace(',', '.', trim($value));
        return is_numeric($normalized) ? (float) $normalized : 0;
    }

    return 0;
}

function eara_get_data_chart_source($post_id)
{
    $data_key = get_field('data_key', $post_id);
    if (!is_string($data_key) || trim($data_key) === '') {
        $data_key = 'label';
    }

    $raw_series = get_field('series', $post_id);
    $raw_rows = get_field('rows', $post_id);

    if (!is_array($raw_series)) {
        $raw_series = [];
    }

    if (!is_array($raw_rows)) {
        $raw_rows = [];
    }

    $series = array_map(function ($series_item) {
        $name = '';
        $color = '';

        if (is_array($series_item)) {
            $name = isset($series_item['name']) ? sanitize_text_field((string) $series_item['name']) : '';
            $color = isset($series_item['color']) ? sanitize_text_field((string) $series_item['color']) : '';
        }

        return [
            'name' => $name,
            'color' => $color,
        ];
    }, $raw_series);

    $series = array_values(array_filter($series, function ($item) {
        return !empty($item['name']);
    }));

    $rows = array_map(function ($row_item) {
        $label = '';
        $values = [];

        if (is_array($row_item)) {
            $label = isset($row_item['label']) ? sanitize_text_field((string) $row_item['label']) : '';
            $row_values = isset($row_item['values']) && is_array($row_item['values']) ? $row_item['values'] : [];

            $values = array_map(function ($value_item) {
                $series_name = '';
                $value = 0;

                if (is_array($value_item)) {
                    $series_name = isset($value_item['series_name']) ? sanitize_text_field((string) $value_item['series_name']) : '';
                    $value = isset($value_item['value']) ? eara_to_float($value_item['value']) : 0;
                }

                return [
                    'series_name' => $series_name,
                    'value' => $value,
                ];
            }, $row_values);

            $values = array_values(array_filter($values, function ($item) {
                return !empty($item['series_name']);
            }));
        }

        return [
            'label' => $label,
            'values' => $values,
        ];
    }, $raw_rows);

    return [
        'dataKey' => $data_key,
        'series' => $series,
        'rows' => $rows,
        'chartLabel' => get_the_title($post_id),
    ];
}

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

    register_rest_field(
        'data-chart',
        'eara_chart_source',
        [
            'get_callback' => function ($object) {
                return eara_get_data_chart_source($object['id']);
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





