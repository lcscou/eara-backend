<?php
add_action('graphql_register_types', function () {
    register_graphql_field('RootQueryToEventsConnectionWhereArgs', 'organizer', [
        'type' => 'String',
        'description' => 'Filter events by organizer field',
    ]);
    register_graphql_field('RootQueryToEventsConnectionWhereArgs', 'category', [
        'type' => 'String',
        'description' => 'Filter events by category field',
    ]);
    register_graphql_field('RootQueryToMediaBankConnectionWhereArgs', 'speciesFeatured', [
        'type' => 'String',
        'description' => 'Filter media by species_featured field',
    ]);
    register_graphql_field('RootQueryToNewsConnectionWhereArgs', 'category', [
        'type' => 'String',
        'description' => 'Filter News by category field',
    ]);
    register_graphql_field('RootQueryToNewsConnectionWhereArgs', 'country', [
        'type' => 'String',
        'description' => 'Filter News by country field',
    ]);
    register_graphql_field('RootQueryToMemberConnectionWhereArgs', 'country', [
        'type' => 'String',
        'description' => 'Filter Members by country field',
    ]);
});
add_filter('graphql_post_object_connection_query_args', function ($query_args, $source, $args, $context, $info) {
    if (isset($args['where']['organizer']) && $info->fieldName === 'allEvents') {
        $query_args['meta_query'][] = [
            'key' => 'organizer',
            'value' => $args['where']['organizer'],
            'compare' => '=',
        ];
    }
    if (isset($args['where']['category']) && $info->fieldName === 'allEvents') {
        $query_args['meta_query'][] = [
            'key' => 'category',
            'value' => $args['where']['category'],
            'compare' => '=',
        ];
    }
    if (isset($args['where']['speciesFeatured']) && $info->fieldName === 'mediaBank') {
        $query_args['meta_query'][] = [
            'key' => 'species_featured',
            'value' => $args['where']['speciesFeatured'],
            'compare' => '=',
        ];
    }
    if (isset($args['where']['country']) && $info->fieldName === 'allNews') {
        $query_args['meta_query'][] = [
            'key' => 'country',
            'value' => $args['where']['country'],
            'compare' => 'LIKE',
        ];
    }
    if (isset($args['where']['country']) && $info->fieldName === 'members') {
        $query_args['meta_query'][] = [
            'key' => 'country',
            'value' => $args['where']['country'],
            'compare' => 'LIKE',
        ];
    }
    // filtrar por taxonomia chamada category-news quando estiver na query news
    if (isset($args['where']['category']) && $info->fieldName === 'allNews') {
        $query_args['tax_query'][] = [
            'taxonomy' => 'categories-news',
            'field' => 'slug',
            'terms' => $args['where']['category'],
        ];
    }
    return $query_args;
}, 10, 5);