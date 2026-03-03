<?php
function eara_parse_value($value)
{
    if (is_int($value)) {
        return $value;
    }

    if (is_float($value)) {
        return (int) $value;
    }

    if (is_string($value)) {
        $normalized = trim($value);
        if ($normalized === '') {
            return '';
        }

        $numeric = str_replace(',', '.', $normalized);
        if (is_numeric($numeric)) {
            return (int) $numeric;
        }

        return sanitize_text_field($normalized);
    }

    return '';
}

function eara_get_data_chart_source($post_id)
{
    $chart_type = get_field('chart_type', $post_id);
    if (!in_array($chart_type, ['bar', 'donut'], true)) {
        $chart_type = 'bar';
    }

    $data_key = get_field('data_key', $post_id);
    if (!is_string($data_key) || trim($data_key) === '') {
        $data_key = 'label';
    }
    $data_key = sanitize_text_field($data_key);

    $raw_series = get_field('series', $post_id);
    $raw_rows = get_field('data_bar_chart', $post_id);
    $raw_donut = get_field('data_donut_chart', $post_id);

    if (!is_array($raw_rows)) {
        $legacy_rows = get_field('rows', $post_id);
        $raw_rows = is_array($legacy_rows) ? $legacy_rows : [];
    }

    if (!is_array($raw_donut)) {
        $raw_donut = [];
    }

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
                $value = '';

                if (is_array($value_item)) {
                    $value = isset($value_item['value']) ? eara_parse_value($value_item['value']) : '';
                }

                return [
                    'value' => $value,
                ];
            }, $row_values);
        }

        return [
            'label' => $label,
            'values' => $values,
        ];
    }, $raw_rows);

    $donut_data = array_map(function ($donut_item) {
        $name = '';
        $value = 0;
        $color = '';

        if (is_array($donut_item)) {
            $name = isset($donut_item['name']) ? sanitize_text_field((string) $donut_item['name']) : '';
            $value = isset($donut_item['value']) ? (int) eara_parse_value($donut_item['value']) : 0;
            $color = isset($donut_item['color']) ? sanitize_text_field((string) $donut_item['color']) : '';
        }

        return [
            'name' => $name,
            'value' => $value,
            'color' => $color,
        ];
    }, $raw_donut);

    $donut_data = array_values(array_filter($donut_data, function ($item) {
        return !empty($item['name']);
    }));

    return [
        'chartType' => $chart_type,
        'dataKey' => $data_key,
        'series' => $series,
        'rows' => $rows,
        'donutData' => $donut_data,
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





