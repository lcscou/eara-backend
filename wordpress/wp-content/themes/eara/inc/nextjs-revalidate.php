<?php

// Triggers revalidation on post status transition (covers publish, trash, delete)
add_action('transition_post_status', 'nextjs_revalidate_on_status_change', 10, 3);

// Triggers revalidation when post is permanently deleted
add_action('before_delete_post', 'nextjs_revalidate_on_delete');

// Triggers revalidation when menus are updated
add_action('wp_update_nav_menu', 'nextjs_revalidate_menus');

// Global array to track revalidation calls and prevent duplicates in the same request
global $nextjs_revalidation_queue;
$nextjs_revalidation_queue = [];

function nextjs_revalidate_on_status_change($new_status, $old_status, $post)
{
    // Ignora se não houve mudança real de status
    if ($new_status === $old_status) {
        return;
    }

    // Ignora revisões, auto-saves, e tipos de post que não precisam de revalidação
    if (wp_is_post_revision($post->ID) || wp_is_post_autosave($post->ID)) {
        return;
    }

    // Ignora attachments e nav_menu_item
    if (in_array($post->post_type, ['attachment', 'nav_menu_item', 'revision'])) {
        return;
    }

    // Só revalida em transições relevantes
    $relevant_statuses = ['publish', 'trash', 'draft', 'pending'];
    if (!in_array($new_status, $relevant_statuses) && !in_array($old_status, $relevant_statuses)) {
        return;
    }

    // Agenda a revalidação ao invés de executar imediatamente
    nextjs_queue_revalidation($post->post_name, $post->post_type);
}

function nextjs_revalidate_on_delete($post_id)
{
    $post = get_post($post_id);
    if (!$post || in_array($post->post_type, ['attachment', 'nav_menu_item', 'revision'])) {
        return;
    }

    nextjs_queue_revalidation($post->post_name, $post->post_type);
}

function nextjs_revalidate_menus($menu_id = null)
{
    nextjs_queue_revalidation('menus', 'menus');
}

function nextjs_queue_revalidation($slug, $type)
{
    global $nextjs_revalidation_queue;

    // Cria uma chave única para este item
    $key = md5($slug . '|' . $type);

    // Se já está na fila, ignora
    if (isset($nextjs_revalidation_queue[$key])) {
        return;
    }

    // Adiciona à fila
    $nextjs_revalidation_queue[$key] = [
        'slug' => $slug,
        'type' => $type,
    ];

    // Agenda o processamento da fila no shutdown
    // Isso garante que todas as operações do WordPress terminem antes
    if (count($nextjs_revalidation_queue) === 1) {
        add_action('shutdown', 'nextjs_process_revalidation_queue', 999);
    }
}

function nextjs_process_revalidation_queue()
{
    global $nextjs_revalidation_queue;

    if (empty($nextjs_revalidation_queue)) {
        return;
    }

    $url = getenv('NEXTJS_REVALIDATE_URL') ?: 'https://eara-frontend.vercel.app/api/revalidate';
    $secret = getenv('NEXTJS_REVALIDATE_SECRET');

    if (empty($secret)) {
        error_log('NextJS: Secret not configured!');
        return;
    }

    // Agrupa os paths e types para enviar em batch
    $paths_to_revalidate = [];
    $types_set = [];

    foreach ($nextjs_revalidation_queue as $item) {
        $slug = $item['slug'];
        $type = $item['type'];

        // Adiciona o path específico
        if ($slug !== $type) {
            $paths_to_revalidate[] = '/' . $slug;
        }

        // Adiciona o type à lista (sem duplicatas)
        $types_set[$type] = true;
    }

    // Adiciona as páginas de listagem dos tipos
    foreach (array_keys($types_set) as $type) {
        if ($type === 'menus' || $type === 'tickers') {
            $paths_to_revalidate[] = '/';
        } else {
            $paths_to_revalidate[] = '/' . $type;
        }
    }

    // Envia uma única requisição com todos os paths
    wp_remote_post($url, [
        'headers' => [
            'Content-Type' => 'application/json',
            'x-revalidate-secret' => $secret
        ],
        'body' => json_encode([
            'paths' => array_unique($paths_to_revalidate),
            'types' => array_keys($types_set),
        ]),
        'timeout' => 5,
        'blocking' => false,
        'sslverify' => false,
    ]);

    // Limpa a fila
    $nextjs_revalidation_queue = [];
}