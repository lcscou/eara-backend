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
});
add_filter('graphql_post_object_connection_query_args', function ($query_args, $source, $args, $context, $info) {
    
    if (isset($args['where']['organizer'])) {
        $query_args['meta_query'][] = [
            'key' => 'organizer',
            'value' => $args['where']['organizer'],
            'compare' => '=',
        ];
    }
   
  
    if (isset($args['where']['category'])) {
        $query_args['meta_query'][] = [
            'key' => 'category',
            'value' => $args['where']['category'],
            'compare' => '=',
        ];
    }
    return $query_args;
}, 10, 5);