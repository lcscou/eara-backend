<?php
add_theme_support('post-thumbnails');
function add_file_types_to_uploads($file_types)
{
    $new_filetypes = array();
    $new_filetypes['svg'] = 'image/svg+xml';
    $file_types = array_merge($file_types, $new_filetypes);
    return $file_types;
}
add_filter('upload_mimes', 'add_file_types_to_uploads');
function eara_registrar_menus()
{
    register_nav_menus(array(
        'main-menu-left' => __('Main Menu - Left', 'eara'),
        'main-menu-right' => __('Main Menu - Right', 'eara'),
        'main-footer' => __('Main footer', 'eara'),
    ));
}
add_action('after_setup_theme', 'eara_registrar_menus');


add_theme_support('wp-block-styles');
add_theme_support('editor-styles');
add_theme_support('responsive-embeds');
add_theme_support('align-wide');


add_theme_support('editor-styles');
add_editor_style('/build/editor.css');

add_action('enqueue_block_editor_assets', function () {
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&display=swap', [], null);

    // Enqueue Tailwind CSS for editor
    // wp_enqueue_style(
    //     'eara-editor-styles',
    //     get_template_directory_uri() . '/build/editor.css',
    //     [],
    //     filemtime(get_template_directory() . '/build/editor.css')
    // );
});

add_filter('retrieve_password_message', function ($message, $key, $user_login, $user_data) {
    $frontend_url = wp_get_environment_type() === 'development' ? 'http://localhost:3000/reset-password' : 'https://lightskyblue-camel-505374.hostingersite.com/reset-password';
    $reset_link = add_query_arg(
        [
            'key' => $key,
            'login' => rawurlencode($user_login),
        ],
        $frontend_url
    );

    $message = "Someone has requested a password reset for your account.\r\n\r\n";
    $message .= "If this was not you, please ignore this email.\r\n\r\n";
    $message .= "To reset your password, please visit the link below:\r\n\r\n";
    $message .= $reset_link . "\r\n";

    return $message;
}, 10, 4);



add_action('init', function () {

    $role = get_role('member');
    if (!$role) {
        add_role('member', 'Member', [
            'read' => true,
            'read_private_pages' => true,
            'read_private_posts' => true,
        ]);
    }

    if (!empty($role)) {
        $role->add_cap('read');
        $role->add_cap('read_private_pages');
        $role->add_cap('edit_posts');
        $role->add_cap('edit_private_posts');
        $role->add_cap('edit_pages');
        $role->add_cap('edit_private_pages');
        $role->add_cap('read_private_posts');
    }
});

add_action('admin_init', function () {
    // if (is_user_logged_in() && current_user_can('member')) {
    //     wp_safe_redirect(home_url());
    //     exit;
    // }
});

// add_action('init', function () {
//     // header('Access-Control-Allow-Origin: http://localhost:3000');
//     // header('Access-Control-Allow-Credentials: true');
//     $data = [
//         'method' => $_SERVER['REQUEST_METHOD'] ?? null,
//         'uri' => $_SERVER['REQUEST_URI'] ?? null,
//         'query' => $_GET,
//         'origin' => $_SERVER,
//         'body' => file_get_contents('php://input'),
//         'headers' => getallheaders(),
//     ];

//     error_log(print_r($data, true));
// });

add_filter('manage_media-bank_posts_columns', function ($columns) {
    $updated_columns = [];

    foreach ($columns as $key => $label) {
        $updated_columns[$key] = $label;

        if ($key === 'title') {
            $updated_columns['media_preview'] = __('Preview', 'eara');
        }
    }

    if (!isset($updated_columns['media_preview'])) {
        $updated_columns['media_preview'] = __('Preview', 'eara');
    }

    return $updated_columns;
});

add_action('manage_media-bank_posts_custom_column', function ($column, $post_id) {
    if ($column !== 'media_preview') {
        return;
    }

    $media_type = get_field('media_type', $post_id);

    if ($media_type === 'video') {
        echo '<div class="eara-media-preview eara-media-preview--video" aria-hidden="true">';
        echo '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">';
        echo '<circle cx="12" cy="12" r="12" fill="#1d2327" opacity="0.85"/>';
        echo '<path d="M10 8.75V15.25L15.5 12L10 8.75Z" fill="#ffffff"/>';
        echo '</svg>';
        echo '</div>';
        return;
    }

    $image = get_field('image', $post_id);
    $image_url = '';

    if (is_array($image) && !empty($image['url'])) {
        $image_url = $image['url'];
    } elseif (is_numeric($image)) {
        $image_url = wp_get_attachment_image_url((int) $image, 'thumbnail') ?: '';
    } elseif (is_string($image)) {
        $image_url = $image;
    }

    if (!empty($image_url)) {
        echo '<img class="eara-media-preview" src="' . esc_url($image_url) . '" alt="" loading="lazy" />';
        return;
    }

    echo '<span aria-hidden="true">—</span>';
}, 10, 2);

add_filter('manage_members_posts_columns', function ($columns) {
    $updated_columns = [];

    foreach ($columns as $key => $label) {
        $updated_columns[$key] = $label;

        if ($key === 'title') {
            $updated_columns['country'] = __('Country', 'eara');
        }
    }

    if (!isset($updated_columns['country'])) {
        $updated_columns['country'] = __('Country', 'eara');
    }

    return $updated_columns;
});

add_action('manage_members_posts_custom_column', function ($column, $post_id) {
    if ($column !== 'country') {
        return;
    }

    $country = get_field('country', $post_id);

    if (empty($country)) {
        echo '<span aria-hidden="true">—</span>';
        return;
    }

    $field_object = get_field_object('country', $post_id);
    $label = $field_object['choices'][$country] ?? $country;

    echo esc_html($label);
}, 10, 2);

add_filter('manage_edit-members_sortable_columns', function ($columns) {
    $columns['country'] = 'country';

    return $columns;
});

add_action('pre_get_posts', function ($query) {
    if (!is_admin() || !$query->is_main_query()) {
        return;
    }

    if ($query->get('post_type') !== 'members' || $query->get('orderby') !== 'country') {
        return;
    }

    $query->set('meta_key', 'country');
    $query->set('orderby', 'meta_value');
});

add_action('admin_head-edit.php', function () {
    $screen = get_current_screen();

    if (!$screen || $screen->post_type !== 'media-bank') {
        return;
    }

    echo '<style>
        .column-media_preview { width: 88px; }
        .eara-media-preview {
            width: 64px;
            height: 64px;
            border-radius: 4px;
            object-fit: cover;
            display: inline-block;
            background: #f0f0f1;
        }
        .eara-media-preview--video {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: #dcdcde;
        }
    </style>';
});


add_action('add_attachment', function ($post_id) {
    wp_update_post([
        'ID' => $post_id,
        'post_parent' => 0
    ]);
});

function eara_is_sitemap_request()
{
    if (
        isset($_GET['sitemap'])
        || isset($_GET['sitemap_n'])
        || isset($_GET['yoast-sitemap'])
    ) {
        return true;
    }

    $request_uri = $_SERVER['REQUEST_URI'] ?? '';
    $path = wp_parse_url($request_uri, PHP_URL_PATH);

    if (!is_string($path) || $path === '') {
        return false;
    }

    $path = '/' . ltrim($path, '/');
    $normalized_path = trim($path, '/');

    if (
        $path === '/sitemap.xml'
        || $path === '/wp-sitemap.xml'
        || $path === '/sitemap_index.xml'
    ) {
        return true;
    }

    // WordPress core sitemap files (example: /wp-sitemap-posts-post-1.xml).
    if (preg_match('/^wp-sitemap-[^\/]+\.xml$/', $normalized_path)) {
        return true;
    }

    // SEO plugin sitemap files (example: /page-sitemap.xml, /post-sitemap2.xml).
    if (preg_match('/^[^\/]+-sitemap(?:\d+)?\.xml$/', $normalized_path)) {
        return true;
    }

    return false;
}

function eara_should_bypass_headless_lockdown()
{
    if (is_admin() || wp_doing_ajax() || wp_doing_cron()) {
        return true;
    }

    if (defined('WP_CLI') && WP_CLI) {
        return true;
    }

    if (defined('REST_REQUEST') && REST_REQUEST) {
        return true;
    }

    if (defined('XMLRPC_REQUEST') && XMLRPC_REQUEST) {
        return true;
    }

    return false;
}

function eara_host_matches_allowed_domain($request_host, $allowed_host)
{
    $request_host = strtolower(trim((string) $request_host));
    $allowed_host = strtolower(trim((string) $allowed_host));

    if ($request_host === '' || $allowed_host === '') {
        return false;
    }

    if ($request_host === $allowed_host) {
        return true;
    }

    // Exact match by default. Use "*.example.com" when wildcard is intentional.
    if (strpos($allowed_host, '*.') !== 0) {
        return false;
    }

    $base_domain = substr($allowed_host, 2);

    if ($base_domain === '') {
        return false;
    }

    $suffix = '.' . $base_domain;

    return substr($request_host, -strlen($suffix)) === $suffix;
}

function eara_is_authorized_sitemap_request()
{
    $default_token = defined('EARA_HEADLESS_SITEMAP_TOKEN') ? (string) EARA_HEADLESS_SITEMAP_TOKEN : '';
    $token = (string) apply_filters('eara_headless_sitemap_token', $default_token);
    $provided_token = (string) ($_SERVER['HTTP_X_EARA_SITEMAP_TOKEN'] ?? '');

    if ($token !== '' && hash_equals($token, $provided_token)) {
        return true;
    }

    $default_allowed_domains = [
        'eara.eu',
        'www.eara.eu',
    ];

    if (defined('EARA_HEADLESS_FRONTEND_HOST') && is_string(EARA_HEADLESS_FRONTEND_HOST) && EARA_HEADLESS_FRONTEND_HOST !== '') {
        $default_allowed_domains[] = EARA_HEADLESS_FRONTEND_HOST;
    }

    $allowed_domains = apply_filters('eara_headless_allowed_frontend_hosts', $default_allowed_domains);

    if (!is_array($allowed_domains) || empty($allowed_domains)) {
        return false;
    }

    $candidate_hosts = [];

    foreach (['HTTP_ORIGIN', 'HTTP_REFERER'] as $header) {
        $value = $_SERVER[$header] ?? '';

        if (!is_string($value) || $value === '') {
            continue;
        }

        $host = wp_parse_url($value, PHP_URL_HOST);

        if (is_string($host) && $host !== '') {
            $candidate_hosts[] = $host;
        }
    }

    foreach ($candidate_hosts as $candidate_host) {
        foreach ($allowed_domains as $allowed_domain) {
            if (eara_host_matches_allowed_domain($candidate_host, $allowed_domain)) {
                return true;
            }
        }
    }

    return false;
}

add_action('init', function () {
    if (eara_should_bypass_headless_lockdown()) {
        return;
    }

    if (!eara_is_sitemap_request()) {
        return;
    }

    if (eara_is_authorized_sitemap_request()) {
        return;
    }

    status_header(403);
    nocache_headers();
    wp_die('Forbidden', 'Forbidden', ['response' => 403]);
}, -9999);

add_action('template_redirect', function () {
    if (eara_should_bypass_headless_lockdown()) {
        return;
    }

    if (eara_is_sitemap_request()) {
        if (eara_is_authorized_sitemap_request()) {
            return;
        }

        status_header(403);
        nocache_headers();
        wp_die('Forbidden', 'Forbidden', ['response' => 403]);
    }

    global $wp_query;

    if ($wp_query instanceof WP_Query) {
        $wp_query->set_404();
    }

    status_header(404);
    nocache_headers();

    $template_404 = get_404_template();

    if (is_string($template_404) && $template_404 !== '') {
        include $template_404;
        exit;
    }

    wp_die('Not Found', 'Not Found', ['response' => 404]);
}, -1000);
