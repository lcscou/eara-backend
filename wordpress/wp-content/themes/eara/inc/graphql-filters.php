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
    register_graphql_field('RootQueryToEventsConnectionWhereArgs', 'locationType', [
        'type' => 'String',
        'description' => 'Filter events by location-type field',
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

    if ($info->fieldName === 'allEvents' || (isset($query_args['post_type']) && $query_args['post_type'][0] === 'events')) {
        $events_settings = get_field('events', 'option');

        if ($events_settings) {
            $orderby = isset($events_settings['orderby-events']) ? $events_settings['orderby-events'] : 'date';
            $order = isset($events_settings['order-events']) ? $events_settings['order-events'] : 'ASC';

            if ($orderby === 'order') {
                $query_args['orderby'] = 'meta_value_num';
                $query_args['meta_key'] = 'order';
            } else {
                $query_args['orderby'] = $orderby;
            }

            $query_args['order'] = $order;
        }
    }

    if ($info->fieldName === 'animals' || $info->fieldName === 'allAnimals' || (isset($query_args['post_type']) && $query_args['post_type'][0] === 'animals')) {
        $animals_settings = get_field('animals', 'option');

        if ($animals_settings) {
            $orderby = isset($animals_settings['orderby-animals']) ? $animals_settings['orderby-animals'] : 'date';
            $order = isset($animals_settings['order-animals']) ? $animals_settings['order-animals'] : 'ASC';

            if ($orderby === 'order') {
                $query_args['orderby'] = 'meta_value_num';
                $query_args['meta_key'] = 'order';
            } else {
                $query_args['orderby'] = $orderby;
            }

            $query_args['order'] = $order;
        }
    }

    if ($info->fieldName === 'allCaseStudies' || $info->fieldName === 'caseStudies' || (isset($query_args['post_type']) && $query_args['post_type'][0] === 'case-studies')) {
        $case_studies_settings = get_field('case-studies', 'option');

        if ($case_studies_settings) {
            $orderby = isset($case_studies_settings['orderby-case-studies']) ? $case_studies_settings['orderby-case-studies'] : 'date';
            $order = isset($case_studies_settings['order-case-studies']) ? $case_studies_settings['order-case-studies'] : 'ASC';

            if ($orderby === 'order') {
                $query_args['orderby'] = 'meta_value_num';
                $query_args['meta_key'] = 'order';
            } else {
                $query_args['orderby'] = $orderby;
            }

            $query_args['order'] = $order;
        }
    }

    if ($info->fieldName === 'diseases' || $info->fieldName === 'allDiseases' || (isset($query_args['post_type']) && $query_args['post_type'][0] === 'diseases')) {
        $diseases_settings = get_field('diseases', 'option');

        if ($diseases_settings) {
            $orderby = isset($diseases_settings['orderby-diseases']) ? $diseases_settings['orderby-diseases'] : 'date';
            $order = isset($diseases_settings['order-diseases']) ? $diseases_settings['order-diseases'] : 'ASC';

            if ($orderby === 'order') {
                $query_args['orderby'] = 'meta_value_num';
                $query_args['meta_key'] = 'order';
            } else {
                $query_args['orderby'] = $orderby;
            }

            $query_args['order'] = $order;
        }
    }

    if ($info->fieldName === 'mediasBank' || $info->fieldName === 'mediaBank' || $info->fieldName === 'allMediaBank' || (isset($query_args['post_type']) && $query_args['post_type'][0] === 'media-bank')) {
        $media_bank_settings = get_field('media-bank', 'option');

        if ($media_bank_settings) {
            $orderby = isset($media_bank_settings['orderby-media-bank']) ? $media_bank_settings['orderby-media-bank'] : 'date';
            $order = isset($media_bank_settings['order-media-bank']) ? $media_bank_settings['order-media-bank'] : 'ASC';

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
    if (isset($args['where']['locationType']) && $info->fieldName === 'allEvents') {
        $query_args['meta_query'][] = [
            'key' => 'location_type',
            'value' => $args['where']['locationType'],
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