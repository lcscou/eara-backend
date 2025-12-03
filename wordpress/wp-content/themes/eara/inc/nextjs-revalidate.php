<?php 

add_action('admin_bar_menu','eara_add_clear_cache_button',100);
function eara_add_clear_cache_button($wp_admin_bar){
    if (!is_admin() && !is_admin_bar_showing()) return;
    if (!current_user_can('manage_options')) return;
    $wp_admin_bar->add_node(array('id'=>'eara-clear-cache','title'=>'Clear Cache','href'=>'#','meta'=>array('class'=>'eara-clear-cache-button')));
}
add_action('admin_enqueue_scripts','eara_enqueue_admin_scripts');
function eara_enqueue_admin_scripts(){
    if (!current_user_can('manage_options')) return;
    wp_register_script('eara-clear-cache-handle','',array('jquery'),null,true);
    wp_enqueue_script('eara-clear-cache-handle');
    wp_localize_script('eara-clear-cache-handle','earaClearCache',array(
        'ajax_url'=>admin_url('admin-ajax.php'),
        'nonce'=>wp_create_nonce('eara_clear_cache_nonce'),
        'endpoint'=>'https://eara-frontend.vercel.app/api/clear-cache'
    ));
    $js = "(function(){document.addEventListener('click',function(e){var t=e.target;if(t.closest&&t.closest('#wp-admin-bar-eara-clear-cache')){e.preventDefault();var btn=document.querySelector('#wp-admin-bar-eara-clear-cache a');if(!btn)return;btn.classList.add('eara-loading');fetch(earaClearCache.ajax_url,{method:'POST',credentials:'same-origin',body:new URLSearchParams({action:'eara_clear_cache_manual',_ajax_nonce:earaClearCache.nonce})}).then(function(r){return r.json();}).then(function(json){btn.classList.remove('eara-loading');var message='Something went wrong at clearing cache try manually: https://eara-frontend.vercel.app/api/clear-cache';var type='notice-error';if(json.success){message='All Caches cleared successfully';type='notice-success'}var existing=document.getElementById('eara-cache-notice');if(existing)existing.remove();var notice=document.createElement('div');notice.id='eara-cache-notice';notice.className='notice '+type+' is-dismissible';var p=document.createElement('p');p.textContent=message;notice.appendChild(p);var wrap=document.querySelector('#wpbody-content')||document.body;if(wrap)wrap.insertBefore(notice,wrap.firstChild);var dismiss=notice.querySelector('.notice-dismiss');if(dismiss)dismiss.addEventListener('click',function(){notice.remove();});}).catch(function(){btn.classList.remove('eara-loading');var existing=document.getElementById('eara-cache-notice');if(existing)existing.remove();var notice=document.createElement('div');notice.id='eara-cache-notice';notice.className='notice notice-error is-dismissible';var p=document.createElement('p');p.textContent='Something went wrong at clearing cache try manually: https://eara-frontend.vercel.app/api/clear-cache';notice.appendChild(p);var wrap=document.querySelector('#wpbody-content')||document.body;if(wrap)wrap.insertBefore(notice,wrap.firstChild);var dismiss=notice.querySelector('.notice-dismiss');if(dismiss)dismiss.addEventListener('click',function(){notice.remove();});});}});})();";
    wp_add_inline_script('eara-clear-cache-handle',$js);
}
add_action('wp_ajax_eara_clear_cache_manual','eara_handle_clear_cache_manual');
function eara_handle_clear_cache_manual(){
    if (!current_user_can('manage_options')) wp_send_json_error(array('message'=>'forbidden'),403);
    check_ajax_referer('eara_clear_cache_nonce');
    $endpoint='https://eara-frontend.vercel.app/api/clear-cache';
    $response=wp_remote_get($endpoint,array('timeout'=>10));
    if (is_wp_error($response)) wp_send_json_error(array('message'=>'request_error'));
    $code=wp_remote_retrieve_response_code($response);
    $body=wp_remote_retrieve_body($response);
    $decoded=json_decode($body,true);
    if ($code===200 && isset($decoded['success']) && $decoded['success']===true) wp_send_json_success(array('message'=>'All Caches cleared successfully'));
    wp_send_json_error(array('message'=>'Something went wrong at clearing cache try manually: https://eara-frontend.vercel.app/api/clear-cache'));
}


