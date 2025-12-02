<?php 

add_action('save_post', 'eara_clear_cache_hook', 10, 3);
add_action('deleted_post', 'eara_clear_cache_hook');
add_action('trashed_post', 'eara_clear_cache_hook');
add_action('wp_trash_post', 'eara_clear_cache_hook');
add_action('untrash_post', 'eara_clear_cache_hook');
add_action('transition_post_status', 'eara_clear_cache_transition', 10, 3);
add_action('wp_create_nav_menu', 'eara_clear_cache_hook');
add_action('wp_update_nav_menu', 'eara_clear_cache_hook');
add_action('delete_nav_menu', 'eara_clear_cache_hook');

function eara_clear_cache_hook() {
    if ( defined('DOING_AJAX') && DOING_AJAX ) {
        eara_perform_cache_request();
    } else {
        eara_perform_cache_request();
    }
}

function eara_clear_cache_transition($new_status, $old_status, $post) {
    if ($new_status !== $old_status) {
        eara_perform_cache_request();
    }
}

function eara_perform_cache_request() {
    $endpoint = 'https://eara-frontend.vercel.app/api/clear-cache';
    $response = wp_remote_get($endpoint, array('timeout' => 10));
    if (is_wp_error($response)) {
        $message = 'Something went wrong at clearing cache try manually: https://eara-frontend.vercel.app/api/clear-cache';
        set_transient('eara_clear_cache_notice', array('type' => 'error', 'text' => $message), 60);
        return;
    }
    $code = wp_remote_retrieve_response_code($response);
    $body = wp_remote_retrieve_body($response);
    $decoded = json_decode($body, true);
    if ($code === 200 && isset($decoded['success']) && $decoded['success'] === true) {
        set_transient('eara_clear_cache_notice', array('type' => 'success', 'text' => 'All Caches cleared successfully'), 60);
        return;
    }
    set_transient('eara_clear_cache_notice', array('type' => 'error', 'text' => 'Something went wrong at clearing cache try manually: https://eara-frontend.vercel.app/api/clear-cache'), 60);
}

add_action('admin_notices', 'eara_show_cache_notice');
function eara_show_cache_notice() {
    $n = get_transient('eara_clear_cache_notice');
    if (empty($n) || !is_array($n)) {
        return;
    }
    $type = $n['type'] === 'success' ? 'notice-success' : 'notice-error';
    $text = esc_html($n['text']);
    $nonce = wp_create_nonce('eara_dismiss_notice');
    echo '<div id="eara-cache-notice" class="notice ' . $type . ' is-dismissible" data-eara-nonce="' . $nonce . '"><p>' . $text . '</p></div>';
    add_action('admin_footer', 'eara_notice_dismiss_script');
}

add_action('wp_ajax_eara_dismiss_cache_notice', 'eara_dismiss_cache_ajax');
function eara_dismiss_cache_ajax() {
    check_ajax_referer('eara_dismiss_notice');
    delete_transient('eara_clear_cache_notice');
    wp_send_json_success();
}

function eara_notice_dismiss_script() {
    ?>
    <script>
    (function(){
        var el = document.getElementById('eara-cache-notice');
        if (!el) return;
        var nonce = el.getAttribute('data-eara-nonce');
        el.addEventListener('click', function(e){
            if (!e.target.classList.contains('notice-dismiss')) return;
            var fd = new FormData();
            fd.append('action', 'eara_dismiss_cache_notice');
            fd.append('_ajax_nonce', nonce);
            navigator.sendBeacon ? navigator.sendBeacon(ajaxurl, fd) : fetch(ajaxurl, {method:'POST', body:fd, credentials:'same-origin'});
        });
    })();
    </script>
    <?php
}

