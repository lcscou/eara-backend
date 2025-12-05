<?php
/**
 * Eara Theme - Blocks Configuration
 * 
 * Handles custom Gutenberg blocks registration and assets enqueuing
 * with improved performance, security, and error handling.
 */
// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}
/**
 * Add custom "Eara" block category
 * 
 * @param array $categories Existing block categories
 * @return array Modified categories array
 */
function adicionar_categoria_eara_blocos($categories)
{
    // Input validation
    if (!is_array($categories)) {
        return $categories;
    }
    // Check if category already exists
    $category_exists = array_filter($categories, function ($category) {
        return isset($category['slug']) && $category['slug'] === 'eara';
    });
    if (!empty($category_exists)) {
        return $categories;
    }
    // Add new category at the beginning
    array_unshift($categories, [
        'slug' => 'eara',
        'title' => __('Eara', 'eara'),
        'icon' => null
    ]);
    return $categories;
}
add_filter('block_categories_all', 'adicionar_categoria_eara_blocos');
/**
 * Get list of available blocks (with caching)
 * 
 * @return array Array of block paths
 */
function eara_get_blocks_list()
{
    static $blocks_cache = null;
    // Return cached value if available
    if ($blocks_cache !== null) {
        return $blocks_cache;
    }
    $blocks_dir = get_template_directory() . '/build/blocks/';
    // Validate directory exists and is readable
    if (!is_dir($blocks_dir) || !is_readable($blocks_dir)) {
        $blocks_cache = [];
        return $blocks_cache;
    }
    // Get blocks directories
    $blocks = glob($blocks_dir . '*', GLOB_ONLYDIR);
    // Validate glob result
    if ($blocks === false) {
        error_log('Eara Theme: Failed to read blocks directory');
        $blocks_cache = [];
        return $blocks_cache;
    }
    $blocks_cache = $blocks;
    return $blocks_cache;
}
/**
 * Register custom Gutenberg blocks automatically
 * 
 * Scans build/blocks directory and registers each block found with block.json
 * The block.json file handles all asset enqueuing automatically
 */
function eara_registrar_blocos()
{
    $blocks = eara_get_blocks_list();
    if (empty($blocks)) {
        return;
    }
    foreach ($blocks as $block_path) {
        // Validate block path
        if (!is_dir($block_path) || !is_readable($block_path)) {
            continue;
        }
        $block_json_path = $block_path . '/block.json';
        // Register block if block.json exists
        // WordPress will automatically handle asset enqueuing based on block.json properties
        if (file_exists($block_json_path) && is_readable($block_json_path)) {
            try {
                register_block_type($block_path);
            } catch (Exception $e) {
                error_log(sprintf(
                    'Eara Theme: Failed to register block at %s. Error: %s',
                    esc_html($block_path),
                    esc_html($e->getMessage())
                ));
            }
        }
    }
}
add_action('init', 'eara_registrar_blocos');
/**
 * Enqueue Mantine styles for block editor
 */
function eara_enqueue_mantine_styles()
{

    if (!is_admin()) {
        return;
    }
    $theme = wp_get_theme();
    $version = $theme->get('Version') ?: '1.0.0';
    // Enqueue main editor JavaScript
    $mantine_blocks_path = get_template_directory() . '/build/index.js';
    if (file_exists($mantine_blocks_path)) {
        wp_enqueue_script(
            'eara-mantine-blocks',
            esc_url(get_template_directory_uri() . '/build/index.js'),
            array('wp-blocks', 'wp-element', 'wp-block-editor'),
            $version,
            true
        );
    }
    // Enqueue Mantine CSS from CDN
    wp_enqueue_style(
        'eara-mantine-core',
        'https://cdn.jsdelivr.net/npm/@mantine/core@7.x.x/styles.css',
        array(),
        '7.0.0'
    );
}
add_action('enqueue_block_assets', 'eara_enqueue_mantine_styles');
/**
 * Set Mantine color scheme in admin head
 */
function eara_set_mantine_color_scheme()
{
    if (!is_admin()) {
        return;
    }
    echo '<script>document.documentElement.setAttribute("data-mantine-color-scheme", "light");</script>' . "\n";
}
add_action('admin_head', 'eara_set_mantine_color_scheme');
/**
 * Enqueue accordion frontend JavaScript
 */
function eara_enqueue_accordion_script()
{
    // Only load on frontend
    if (is_admin()) {
        return;
    }
    $accordion_js_path = get_template_directory() . '/build/blocks/Accordion/frontend.js';
    // Check if file exists before enqueuing
    if (!file_exists($accordion_js_path)) {
        return;
    }
    $theme = wp_get_theme();
    $version = $theme->get('Version') ?: '1.0.0';
    wp_enqueue_script(
        'eara-accordion-frontend',
        esc_url(get_template_directory_uri() . '/build/blocks/Accordion/frontend.js'),
        array(),
        $version,
        true
    );
}
add_action('wp_enqueue_scripts', 'eara_enqueue_accordion_script');
