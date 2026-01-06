<?php
// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Helper: Get all featured media-bank posts
 *
 * @return array WP_Post[]
 */
function eara_get_featured_media_bank_posts() {
    $q = new WP_Query([
        'post_type'      => 'media-bank',
        'post_status'    => 'publish',
        'posts_per_page' => -1,
        'no_found_rows'  => true,
        'meta_query'     => [
            [
                'key'     => 'is_featured',
                'value'   => '1',
                'compare' => '=',
            ],
        ],
        'fields' => 'ids',
    ]);

    return $q->posts ?: [];
}

/**
 * Helper: Deterministic daily pick based on date
 *
 * @param int[] $ids
 * @return int|null Post ID
 */
function eara_pick_daily_media_id($ids) {
    if (empty($ids)) {
        return null;
    }
    // Use UTC date for stability across environments
    $dayKey = gmdate('Ymd');
    $hash   = crc32((string) $dayKey);
    $index  = $hash % count($ids);
    return (int) $ids[$index];
}

/**
 * Helper: Build metadata for a media-bank post
 *
 * @param int $post_id
 * @return array|null
 */
function eara_build_media_bank_metadata($post_id) {
    if (!$post_id) {
        return null;
    }

    $title = get_the_title($post_id);
    $slug  = basename(get_permalink($post_id));

    // ACF fields
    $credits           = get_field('credits', $post_id) ?: '';
    $creditWebsite     = get_field('credit_website', $post_id) ?: '';
    $creditsMoreInfo   = get_field('credits_more_info', $post_id) ?: '';

    // Prefer ACF field 'image' from Media Bank (can be array or ID)
    $imageField = get_field('image', $post_id);
    $imageUrl = '';
    if (is_array($imageField)) {
        if (!empty($imageField['url'])) {
            $imageUrl = $imageField['url'];
        } elseif (!empty($imageField['ID'])) {
            $imageUrl = wp_get_attachment_url((int) $imageField['ID']) ?: '';
        }
    } elseif (is_numeric($imageField)) {
        $imageUrl = wp_get_attachment_url((int) $imageField) ?: '';
    } elseif (is_string($imageField) && filter_var($imageField, FILTER_VALIDATE_URL)) {
        // In case field stores a direct URL
        $imageUrl = $imageField;
    } else {
        // Fallback to featured image only if ACF image is missing
        $thumb_id = get_post_thumbnail_id($post_id);
        $imageUrl = $thumb_id ? wp_get_attachment_image_url($thumb_id, 'full') : '';
    }

    return [
        'id'                => (int) $post_id,
        'slug'              => (string) $slug,
        'title'             => (string) $title,
        'credits'           => (string) $credits,
        'creditWebsite'     => (string) $creditWebsite,
        'creditsMoreInfo'   => (string) $creditsMoreInfo,
        // Kept key name for backward compatibility, but now sourced from ACF 'image'
        'featuredImageUrl'  => (string) $imageUrl,
    ];
}

/**
 * GraphQL: Register `HeroHomeMetadata` type and `heroHomeOfTheDay` field
 */
add_action('graphql_register_types', function () {
    if (!function_exists('register_graphql_object_type')) {
        return;
    }

    register_graphql_object_type('HeroHomeMetadata', [
        'description' => __('Daily featured media-bank metadata for HeroHome', 'eara'),
        'fields'      => [
            'id' => [ 'type' => 'Int' ],
            'slug' => [ 'type' => 'String' ],
            'title' => [ 'type' => 'String' ],
            'credits' => [ 'type' => 'String' ],
            'creditWebsite' => [ 'type' => 'String' ],
            'creditsMoreInfo' => [ 'type' => 'String' ],
            'featuredImageUrl' => [ 'type' => 'String' ],
        ],
    ]);

    register_graphql_field('RootQuery', 'heroHomeOfTheDay', [
        'type'        => 'HeroHomeMetadata',
        'description' => __('Daily pick among media-bank posts with is_featured = true', 'eara'),
        'resolve'     => function () {
            $ids = eara_get_featured_media_bank_posts();
            $picked = eara_pick_daily_media_id($ids);
            return eara_build_media_bank_metadata($picked);
        },
    ]);

    // Expose heroMetadata on Gutenberg blocks of type eara/hero-home so
    // WPGraphQL Blocks consumers can get the daily pick alongside blocks.
    register_graphql_field('Block', 'heroMetadata', [
        'type'        => 'HeroHomeMetadata',
        'description' => __('HeroHome metadata resolved server-side for eara/hero-home blocks', 'eara'),
        'resolve'     => function ($block) {
            // Ensure this field only resolves for our block type
            $name = isset($block['name']) ? $block['name'] : (is_object($block) && isset($block->name) ? $block->name : '');
            if ($name !== 'eara/hero-home') {
                return null;
            }
            $ids = eara_get_featured_media_bank_posts();
            $picked = eara_pick_daily_media_id($ids);
            return eara_build_media_bank_metadata($picked);
        },
    ]);
});
