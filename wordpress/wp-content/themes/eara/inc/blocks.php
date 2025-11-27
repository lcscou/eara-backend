<?php
function adicionar_categoria_eara_blocos($categories)
{
    $category_exists = array_filter($categories, function ($category) {
        return $category['slug'] === 'eara';
    });
    if (!empty($category_exists)) {
        return $categories;
    }
    array_unshift($categories, [
        'slug' => 'eara',
        'title' => 'Eara',
        'icon' => null
    ]);
    return $categories;
}
add_filter('block_categories_all', 'adicionar_categoria_eara_blocos');
function configurar_blocos_gutenberg_automaticos()
{
    $blocks_dir = get_template_directory() . '/build/blocks/';
    $blocks_dir_uri = get_template_directory_uri() . '/build/blocks/';
    if (!is_dir($blocks_dir)) {
        return;
    }
    $blocks = glob($blocks_dir . '*', GLOB_ONLYDIR);
    foreach ($blocks as $block_path) {
        $block_name = basename($block_path);
        if (file_exists($block_path . '/block.json')) {
            register_block_type($block_path);
        }
        $block_js_path = $block_path . '/index.js';
        $block_js_uri = $blocks_dir_uri . $block_name . '/index.js';

        if (file_exists($block_js_path)) {
            wp_enqueue_script(
                'bloco-' . $block_name . '-js',
                $block_js_uri,
                array('wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n'),
                '1.0.0',
                true
            );
        }
        $block_css_path = $block_path . '/index.css';
        $block_css_uri = $blocks_dir_uri . $block_name . '/index.css';
        if (file_exists($block_css_path)) {
            wp_enqueue_style(
                'bloco-' . $block_name . '-css',
                $block_css_uri,
                array(),
                '1.0.0',

            );
        }

    }
}
add_action('init', function () {
    configurar_blocos_gutenberg_automaticos();
});
add_action('enqueue_block_editor_assets', function () {
    configurar_blocos_gutenberg_automaticos();
});
function enqueue_mantine_styles()
{
    if (is_admin()) {
        wp_enqueue_script(
            'mantine-blocks',
            plugins_url('build/index.js', __FILE__),
            array('wp-blocks', 'wp-element', 'wp-block-editor'),
            '1.0.0'
        );
        wp_enqueue_style(
            'mantine-core',
            'https://cdn.jsdelivr.net/npm/@mantine/core@7.x.x/styles.css',
            array(),
            '5.0.0'
        );
    }
}
add_action('enqueue_block_assets', 'enqueue_mantine_styles');


add_action('admin_head', function () {
    echo "<script>
        document.documentElement.setAttribute('data-mantine-color-scheme', 'light');
    </script>";
});

// Enqueue accordion frontend JavaScript
function enqueue_accordion_script() {
    if (!is_admin()) {
        wp_enqueue_script(
            'eara-accordion-frontend',
            get_template_directory_uri() . '/build/blocks/Accordion/frontend.js',
            array(),
            '1.0.0',
            true
        );
    }
}
add_action('wp_enqueue_scripts', 'enqueue_accordion_script');


