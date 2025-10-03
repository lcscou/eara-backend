<?php
add_action('rest_api_init', function() {
    register_rest_field(
        ['post','page'],
        'scf',
        [
            'get_callback' => function($object) {
                return get_post_meta($object['id']);
            },
            'schema' => null,
        ]
    );
});
