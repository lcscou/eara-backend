<?php
/**
 * Algolia Search Configuration
 * 
 * Configura o plugin Algolia Search for WordPress para indexação automática
 * de conteúdo em um CMS headless.
 * 
 * Plugin requerido: Algolia Search for WordPress
 * Link: https://wordpress.org/plugins/wp-search-with-algolia/
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Define as credenciais do Algolia
 * 
 * Adicione estas constantes no wp-config.php:
 * define('ALGOLIA_APPLICATION_ID', 'seu-app-id');
 * define('ALGOLIA_ADMIN_API_KEY', 'sua-admin-api-key');
 * define('ALGOLIA_SEARCH_API_KEY', 'sua-search-only-api-key');
 */

/**
 * Configura o índice principal do Algolia
 */
add_filter('algolia_index_name', function ($index_name) {
    return 'eara_global'; // Nome do índice único no Algolia
});

/**
 * Define quais post types devem ser indexados
 * 
 * Por padrão, indexa todos os post types públicos.
 * Customize conforme necessário.
 */
add_filter('algolia_post_types_blacklist', function ($blacklist) {
    // Remove post types que você NÃO quer indexar
    // Exemplo: return ['attachment', 'revision', 'nav_menu_item'];
    return ['attachment', 'revision', 'nav_menu_item', 'wp_block'];
});

/**
 * Garante que apenas posts com status 'publish' sejam indexados
 */
add_filter('algolia_should_index_post', function ($should_index, $post) {
    // Só indexa posts publicados
    if ($post->post_status !== 'publish') {
        return false;
    }
    
    // Só indexa post types públicos
    $post_type_object = get_post_type_object($post->post_type);
    if (!$post_type_object || !$post_type_object->public) {
        return false;
    }
    
    return $should_index;
}, 10, 2);

/**
 * Customiza os dados que são enviados para o Algolia
 * 
 * Garante que o permalink seja absoluto e utilizável pelo frontend headless
 */
add_filter('algolia_post_shared_attributes', function ($shared_attributes, $post) {
    // Garante permalink absoluto
    $shared_attributes['permalink'] = get_permalink($post);
    
    // Adiciona o post type para facilitar filtragem no frontend
    $shared_attributes['post_type'] = $post->post_type;
    $shared_attributes['post_type_label'] = get_post_type_object($post->post_type)->labels->singular_name;
    
    // Adiciona data de publicação para ordenação
    $shared_attributes['post_date'] = get_post_time('U', false, $post);
    $shared_attributes['post_date_formatted'] = get_the_date('', $post);
    
    // Adiciona imagem destacada se existir
    if (has_post_thumbnail($post)) {
        $thumbnail_id = get_post_thumbnail_id($post);
        $shared_attributes['featured_image'] = [
            'url' => get_the_post_thumbnail_url($post, 'medium'),
            'alt' => get_post_meta($thumbnail_id, '_wp_attachment_image_alt', true),
        ];
    }
    
    // Adiciona excerpt
    $shared_attributes['excerpt'] = get_the_excerpt($post);
    
    return $shared_attributes;
}, 10, 2);

/**
 * Customiza atributos searchable do Algolia
 */
add_filter('algolia_searchable_post_shared_attributes', function ($attributes, $post) {
    // Define quais campos devem ser buscáveis
    // O plugin já inclui post_title e post_content por padrão
    
    // Adiciona taxonomias como buscáveis
    $taxonomies = get_object_taxonomies($post->post_type, 'objects');
    foreach ($taxonomies as $taxonomy) {
        if ($taxonomy->public) {
            $terms = wp_get_post_terms($post->ID, $taxonomy->name, ['fields' => 'names']);
            if (!is_wp_error($terms) && !empty($terms)) {
                $attributes[$taxonomy->name] = $terms;
            }
        }
    }
    
    return $attributes;
}, 10, 2);

/**
 * Configura os atributos para faceting (filtragem)
 */
add_filter('algolia_posts_index_settings', function ($settings) {
    // Define atributos que podem ser usados para filtros no frontend
    $settings['attributesForFaceting'] = [
        'searchable(post_type)',
        'searchable(post_type_label)',
    ];
    
    // Define a ordem de importância dos atributos na busca
    $settings['searchableAttributes'] = [
        'unordered(post_title)',
        'unordered(post_content)',
        'unordered(excerpt)',
    ];
    
    // Define atributos customizados de ranking
    $settings['customRanking'] = [
        'desc(post_date)',
    ];
    
    // Remove highlight nos resultados (já que não vamos usar no frontend WP)
    $settings['attributesToHighlight'] = [];
    
    return $settings;
}, 10);

/**
 * Desabilita a interface de busca do plugin no WordPress admin
 * (mantém apenas a funcionalidade de indexação)
 */
add_filter('algolia_instantsearch_enabled', '__return_false');
add_filter('algolia_autocomplete_enabled', '__return_false');

/**
 * Logging para debug (opcional - comente em produção)
 */
add_action('algolia_posts_index_post_updated', function ($post_id) {
    if (defined('WP_DEBUG') && WP_DEBUG) {
        error_log("Algolia: Post {$post_id} indexado/atualizado");
    }
});

add_action('algolia_posts_index_post_deleted', function ($post_id) {
    if (defined('WP_DEBUG') && WP_DEBUG) {
        error_log("Algolia: Post {$post_id} removido do índice");
    }
});

/**
 * Força sincronização automática em tempo real
 */
add_filter('algolia_should_index_post_async', '__return_false'); // Indexa imediatamente ao invés de async

/**
 * Remove funcionalidades frontend do plugin que não vamos usar
 */
add_action('wp_enqueue_scripts', function () {
    // Remove todos os scripts e estilos do Algolia no frontend
    wp_dequeue_script('algolia-instantsearch');
    wp_dequeue_script('algolia-autocomplete');
    wp_dequeue_style('algolia-instantsearch');
    wp_dequeue_style('algolia-autocomplete');
}, 100);
