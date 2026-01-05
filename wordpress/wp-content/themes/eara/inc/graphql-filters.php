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
    register_graphql_field('RootQueryToCaseStudiesConnectionWhereArgs', 'institution', [
        'type' => 'String',
        'description' => 'Filter Case Studies by institution field',
    ]);

});

add_filter('graphql_post_object_connection_query_args', function ($query_args, $source, $args, $context, $info) {

    // Apply Team ordering from ACF Settings
    if ($info->fieldName === 'teams' || (isset($query_args['post_type']) && $query_args['post_type'][0] === 'team')) {
     
        $team_settings = get_field('team', 'option');
        
        if ($team_settings) {
            $orderby = isset($team_settings['orderby-team']) ? $team_settings['orderby-team'] : 'title';
            $order = isset($team_settings['order-team']) ? $team_settings['order-team'] : 'ASC';
            
            if ($orderby === 'order') {
                // Order by custom field 'order'
                $query_args['orderby'] = 'meta_value_num';
                $query_args['meta_key'] = 'order';
            } else {
                // Order by date or title
                $query_args['orderby'] = $orderby;
            }
            
            $query_args['order'] = $order;
        }
    }

    if ($info->fieldName === 'allNews' || (isset($query_args['post_type']) && $query_args['post_type'][0] === 'news')) {
        $news_settings = get_field('news', 'option');

        if ($news_settings) {
            $orderby = isset($news_settings['orderby-news']) ? $news_settings['orderby-news'] : 'date';
            $order = isset($news_settings['order-news']) ? $news_settings['order-news'] : 'DESC';

            if ($orderby === 'order') {
                $query_args['orderby'] = 'meta_value_num';
                $query_args['meta_key'] = 'order';
            } else {
                $query_args['orderby'] = $orderby;
            }

            $query_args['order'] = $order;
        }
    }

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
    if (isset($args['where']['speciesFeatured']) && $info->fieldName === 'mediasBank') {
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

    if (isset($args['where']['category']) && $info->fieldName === 'allNews') {
        $query_args['tax_query'][] = [
            'taxonomy' => 'categories-news',
            'field' => 'slug',
            'terms' => $args['where']['category'],
        ];
    }
    if (isset($args['where']['institution']) && $info->fieldName === 'allCaseStudies') {
        $query_args['tax_query'][] = [
            'taxonomy' => 'institution',
            'field' => 'slug',
            'terms' => $args['where']['institution'],
        ];
    }
    return $query_args;
}, 10, 5);