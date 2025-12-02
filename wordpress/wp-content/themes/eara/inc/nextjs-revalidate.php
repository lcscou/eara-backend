<?php 

// Triggers revalidation on post save/update
add_action('save_post', 'nextjs_revalidate_on_save', 10, 3);

// Triggers revalidation on post delete
add_action('delete_post', 'nextjs_revalidate_on_delete');

// Triggers revalidation on post status transition (draft to publish, etc)
add_action('transition_post_status', 'nextjs_revalidate_on_status_change', 10, 3);

// Triggers revalidation when post is trashed
add_action('trashed_post', 'nextjs_revalidate_on_trash');

// Triggers revalidation when post is restored from trash
add_action('untrashed_post', 'nextjs_revalidate_on_untrash');

// Triggers revalidation when menus are updated
add_action('wp_update_nav_menu', 'nextjs_revalidate_menus');
add_action('wp_create_nav_menu', 'nextjs_revalidate_menus');
add_action('wp_delete_nav_menu', 'nextjs_revalidate_menus');

function nextjs_revalidate_on_save($post_id, $post, $update) {
    // Ignora revisões e auto-saves
    if (wp_is_post_revision($post_id) || wp_is_post_autosave($post_id)) {
        return;
    }
    
    // Ignora posts não publicados (a menos que estejam sendo despublicados)
    if ($post->post_status !== 'publish' && $post->post_status !== 'trash') {
        return;
    }
    
    $path = '/' . $post->post_name;
    $type = $post->post_type;
    
    // Revalida tanto o conteúdo específico quanto a listagem
    nextjs_trigger_revalidation($path, $type);
    
    // Revalida a página de listagem do post type
    nextjs_trigger_revalidation('/' . $type, $type);
}

function nextjs_revalidate_on_delete($post_id) {
    $post = get_post($post_id);
    if (!$post) return;
    
    $path = '/' . $post->post_name;
    $type = $post->post_type;
    
    // Revalida o conteúdo deletado e a listagem
    nextjs_trigger_revalidation($path, $type);
    nextjs_trigger_revalidation('/' . $type, $type);
}

function nextjs_revalidate_on_status_change($new_status, $old_status, $post) {
    // Ignora se não houve mudança real de status
    if ($new_status === $old_status) {
        return;
    }
    
    // Ignora revisões e auto-saves
    if (wp_is_post_revision($post->ID) || wp_is_post_autosave($post->ID)) {
        return;
    }
    
    // Revalida quando publicar, despublicar ou mover para lixeira
    if ($new_status === 'publish' || $old_status === 'publish' || $new_status === 'trash' || $old_status === 'trash') {
        $path = '/' . $post->post_name;
        $type = $post->post_type;
        
        nextjs_trigger_revalidation($path, $type);
        nextjs_trigger_revalidation('/' . $type, $type);
    }
}

function nextjs_revalidate_on_trash($post_id) {
    $post = get_post($post_id);
    if (!$post) return;
    
    $path = '/' . $post->post_name;
    $type = $post->post_type;
    
    // Revalida quando o post vai para a lixeira
    nextjs_trigger_revalidation($path, $type);
    nextjs_trigger_revalidation('/' . $type, $type);
}

function nextjs_revalidate_on_untrash($post_id) {
    $post = get_post($post_id);
    if (!$post) return;
    
    $path = '/' . $post->post_name;
    $type = $post->post_type;
    
    // Revalida quando o post é restaurado da lixeira
    nextjs_trigger_revalidation($path, $type);
    nextjs_trigger_revalidation('/' . $type, $type);
}

function nextjs_revalidate_menus($menu_id = null) {
    // Revalida todos os menus
    nextjs_trigger_revalidation('/menus', 'menus');
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