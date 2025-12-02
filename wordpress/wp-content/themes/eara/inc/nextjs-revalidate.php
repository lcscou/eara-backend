<?php 

add_action('save_post', 'nextjs_revalidate_on_save', 10, 3);
add_action('delete_post', 'nextjs_revalidate_on_delete');

function nextjs_revalidate_on_save($post_id, $post, $update) {
    if (wp_is_post_revision($post_id) || $post->post_status !== 'publish') {
        return;
    }
    
    $path = '/' . $post->post_name;
    $type = $post->post_type;
    
    nextjs_trigger_revalidation($path, $type);
}

function nextjs_revalidate_on_delete($post_id) {
    $post = get_post($post_id);
    if (!$post) return;
    
    $path = '/' . $post->post_name;
    nextjs_trigger_revalidation($path, $post->post_type);
}

function nextjs_trigger_revalidation($path, $type) {
    $url = getenv('NEXTJS_REVALIDATE_URL') ?: 'https://eara-frontend.vercel.app/api/revalidate';
    $secret = getenv('NEXTJS_REVALIDATE_SECRET');
    
    if (empty($secret)) {
        error_log('NextJS: Secret not configured!');
        return;
    }

    wp_remote_post($url, [
        'headers' => [
            'Content-Type' => 'application/json',
            'x-revalidate-secret' => $secret
        ],
        'body' => json_encode([
            'path' => $path,
            'type' => $type,
            'tag' => $type
        ]),
        'timeout' => 10,
        'blocking' => false
    ]);
}