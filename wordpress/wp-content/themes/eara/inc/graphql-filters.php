<?php
add_action('graphql_register_types', function () {
    register_graphql_field('RootQueryToEventsConnectionWhereArgs', 'organizer', [
        'type' => 'String',
        'description' => 'Filter events by organizer field',
    ]);
    register_graphql_field('RootQueryToEventsConnectionWhereArgs', 'category', [
        'type' => 'String',
        'description' => 'Filter events by category_events taxonomy slug',
    ]);
    register_graphql_field('RootQueryToEventsConnectionWhereArgs', 'locationType', [
        'type' => 'String',
        'description' => 'Filter events by location-type field',
    ]);
    register_graphql_field('RootQueryToMediaBankConnectionWhereArgs', 'speciesFeatured', [
        'type' => 'String',
        'description' => 'Filter media by species_featured field',
    ]);
    // Filter by ACF true/false field is_featured
    register_graphql_field('RootQueryToMediaBankConnectionWhereArgs', 'isFeatured', [
        'type' => 'Boolean',
        'description' => 'Filter media bank by ACF field is_featured (featured for homepage)',
    ]);
    register_graphql_field('RootQueryToMediaBankConnectionWhereArgs', 'country', [
        'type' => 'String',
        'description' => 'Filter media bank by country field',
    ]);
    register_graphql_field('RootQueryToNewsConnectionWhereArgs', 'category', [
        'type' => 'String',
        'description' => 'Filter News by category field',
    ]);
    register_graphql_field('RootQueryToNewsConnectionWhereArgs', 'country', [
        'type' => 'String',
        'description' => 'Filter News by country field',
    ]);
    register_graphql_field('RootQueryToNewsConnectionWhereArgs', 'animal', [
        'type' => 'String',
        'description' => 'Filter News by animal field',
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

    if (
        $info->fieldName === 'allMembers'
        || $info->fieldName === 'members'
        || (isset($query_args['post_type']) && ($query_args['post_type'][0] === 'members' || $query_args['post_type'][0] === 'member'))
    ) {
        $members_settings = get_field('members', 'option');

        if ($members_settings) {
            $orderby = isset($members_settings['orderby-members']) ? $members_settings['orderby-members'] : 'date';
            $order = isset($members_settings['order-members']) ? $members_settings['order-members'] : 'ASC';

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
        if (!isset($query_args['tax_query']) || !is_array($query_args['tax_query'])) {
            $query_args['tax_query'] = [];
        }

        $query_args['tax_query'][] = [
            'taxonomy' => 'category_events',
            'field' => 'slug',
            'terms' => $args['where']['category'],
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
    if (isset($args['where']['isFeatured']) && ($info->fieldName === 'mediasBank' || $info->fieldName === 'mediaBank' || $info->fieldName === 'allMediaBank')) {
        $query_args['meta_query'][] = [
            'key' => 'is_featured',
            'value' => $args['where']['isFeatured'] ? '1' : '0',
            'compare' => '=',
        ];
    }
    if (isset($args['where']['country']) && ($info->fieldName === 'mediasBank' || $info->fieldName === 'mediaBank' || $info->fieldName === 'allMediaBank')) {
        $query_args['meta_query'][] = [
            'key' => 'country',
            'value' => $args['where']['country'],
            'compare' => 'LIKE',
        ];
    }
    if (isset($args['where']['country']) && $info->fieldName === 'allNews') {
        $query_args['meta_query'][] = [
            'key' => 'country',
            'value' => $args['where']['country'],
            'compare' => 'LIKE',
        ];
    }
    if (isset($args['where']['animal']) && $info->fieldName === 'allNews') {
        $query_args['meta_query'][] = [
            'key' => 'animal',
            'value' => $args['where']['animal'],
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

/**
 * Register unique countries query for News posts
 */
add_action('graphql_register_types', function () {
    // Register the CountryOption type
    register_graphql_object_type('CountryOption', [
        'description' => __('Country option with value, label and count', 'eara'),
        'fields'      => [
            'value' => [
                'type'        => 'String',
                'description' => __('Country value', 'eara'),
            ],
            'label' => [
                'type'        => 'String',
                'description' => __('Country label', 'eara'),
            ],
            'count' => [
                'type'        => 'Int',
                'description' => __('Number of occurrences', 'eara'),
            ],
        ],
    ]);

    // Register the SpeciesFeaturedOption type
    register_graphql_object_type('SpeciesFeaturedOption', [
        'description' => __('Species featured option with value and count', 'eara'),
        'fields'      => [
            'value' => [
                'type'        => 'String',
                'description' => __('Species featured value', 'eara'),
            ],
            'count' => [
                'type'        => 'Int',
                'description' => __('Number of occurrences', 'eara'),
            ],
        ],
    ]);

    register_graphql_field('RootQuery', 'newsCountries', [
        'type'        => ['list_of' => 'CountryOption'],
        'description' => __('Get all unique country values from News posts', 'eara'),
        'resolve'     => function () {
            $args = [
                'post_type'      => 'news',
                'posts_per_page' => -1,
                'fields'         => 'ids',
            ];

            $query = new WP_Query($args);
            $country_count = [];

            if ($query->have_posts()) {
                foreach ($query->posts as $post_id) {
                    $country = get_field('country', $post_id);
                    if ($country) {
                        if (!isset($country_count[$country])) {
                            $country_count[$country] = 0;
                        }
                        $country_count[$country]++;
                    }
                }
            }

            // Sort by key alphabetically
            ksort($country_count);

            // Get countries map for labels
            $countries_map = my_get_countries();

            // Format as value/label/count triplets
            $result = array_map(function ($country, $count) use ($countries_map) {
                return [
                    'value' => $country,
                    'label' => isset($countries_map[$country]) ? $countries_map[$country] : $country,
                    'count' => $count,
                ];
            }, array_keys($country_count), array_values($country_count));

            return $result;
        },
    ]);

    register_graphql_field('RootQuery', 'mediabanksSpeciesFeatured', [
        'type'        => ['list_of' => 'SpeciesFeaturedOption'],
        'description' => __('Get all unique species_featured values from MediaBank posts with count', 'eara'),
        'resolve'     => function () {
            $args = [
                'post_type'      => 'media-bank',
                'posts_per_page' => -1,
                'fields'         => 'ids',
            ];

            $query = new WP_Query($args);
            $species_count = [];

            if ($query->have_posts()) {
                foreach ($query->posts as $post_id) {
                    $species_featured = get_field('species_featured', $post_id);
                    if ($species_featured) {
                        if (!isset($species_count[$species_featured])) {
                            $species_count[$species_featured] = 0;
                        }
                        $species_count[$species_featured]++;
                    }
                }
            }

            // Sort by key alphabetically
            ksort($species_count);

            // Format as value/count pairs
            $result = array_map(function ($species, $count) {
                return [
                    'value' => $species,
                    'count' => $count,
                ];
            }, array_keys($species_count), array_values($species_count));

            return $result;
        },
    ]);

    register_graphql_field('RootQuery', 'mediabanksCountries', [
        'type'        => ['list_of' => 'CountryOption'],
        'description' => __('Get all unique country values from MediaBank posts', 'eara'),
        'resolve'     => function () {
            $args = [
                'post_type'      => 'media-bank',
                'posts_per_page' => -1,
                'fields'         => 'ids',
            ];

            $query = new WP_Query($args);
            $country_count = [];

            if ($query->have_posts()) {
                foreach ($query->posts as $post_id) {
                    $country = get_field('country', $post_id);
                    if ($country) {
                        if (!isset($country_count[$country])) {
                            $country_count[$country] = 0;
                        }
                        $country_count[$country]++;
                    }
                }
            }

            // Sort by key alphabetically
            ksort($country_count);

            // Get countries map for labels
            $countries_map = my_get_countries();

            // Format as value/label/count triplets
            $result = array_map(function ($country, $count) use ($countries_map) {
                return [
                    'value' => $country,
                    'label' => isset($countries_map[$country]) ? $countries_map[$country] : $country,
                    'count' => $count,
                ];
            }, array_keys($country_count), array_values($country_count));

            return $result;
        },
    ]);

    register_graphql_field('RootQuery', 'getAllCountriesInMembers', [
        'type'        => ['list_of' => 'CountryOption'],
        'description' => __('Get all unique country values from Members posts', 'eara'),
        'resolve'     => function () {
            $members_post_type = post_type_exists('member') ? 'member' : 'members';

            $args = [
                'post_type'      => $members_post_type,
                'posts_per_page' => -1,
                'fields'         => 'ids',
            ];

            $query = new WP_Query($args);
            $country_count = [];

            if ($query->have_posts()) {
                foreach ($query->posts as $post_id) {
                    $country = get_field('country', $post_id);
                    if ($country) {
                        if (!isset($country_count[$country])) {
                            $country_count[$country] = 0;
                        }
                        $country_count[$country]++;
                    }
                }
            }

            // Sort by key alphabetically.
            ksort($country_count);

            // Get countries map for labels.
            $countries_map = my_get_countries();

            // Format as value/label/count triplets.
            $result = array_map(function ($country, $count) use ($countries_map) {
                return [
                    'value' => $country,
                    'label' => isset($countries_map[$country]) ? $countries_map[$country] : $country,
                    'count' => $count,
                ];
            }, array_keys($country_count), array_values($country_count));

            return $result;
        },
    ]);
});