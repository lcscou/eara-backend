<?php

if (!defined('ABSPATH')) {
    exit;
}

function eara_send_form_handle_payload(array $payload)
{
    $email = isset($payload['email']) ? sanitize_email((string) $payload['email']) : '';
    $subject = isset($payload['subject']) ? sanitize_text_field((string) $payload['subject']) : '';
    $message = isset($payload['message']) ? sanitize_textarea_field((string) $payload['message']) : '';

    if (empty($email) || !is_email($email)) {
        return new WP_Error('eara_invalid_email', __('Invalid email.', 'eara'), ['status' => 400]);
    }

    if (empty($subject)) {
        return new WP_Error('eara_missing_subject', __('Subject is required.', 'eara'), ['status' => 400]);
    }

    if (empty($message)) {
        return new WP_Error('eara_missing_message', __('Message is required.', 'eara'), ['status' => 400]);
    }

    $to = get_field('receipt_form', 'option');
    if (empty($to) || !is_email($to)) {
        return new WP_Error('eara_missing_recipient', __('Recipient email is not configured.', 'eara'), ['status' => 500]);
    }

    $headers = [
        'Content-Type: text/plain; charset=UTF-8',
        'Reply-To: ' . $email,
    ];

    $full_message = "{$message}";
    $sent_to_admin = wp_mail($to, $subject, $full_message, $headers);

    if (!$sent_to_admin) {
        return new WP_Error('eara_email_send_failed', __('Failed to send email.', 'eara'), ['status' => 500]);
    }

    $user_headers = [
        'Content-Type: text/plain; charset=UTF-8',
    ];

    $user_subject = 'EARA | We received your request';
    $user_message = 'Thank you for your interest, we will contact you soon.';

    wp_mail($email, $user_subject, $user_message, $user_headers);

    return [
        'success' => true,
        'message' => __('Email sent successfully.', 'eara'),
    ];
}

function eara_get_send_form_payload($request)
{
    $json_params = $request->get_json_params();
    if (is_array($json_params) && !empty($json_params)) {
        return $json_params;
    }

    $body_params = $request->get_body_params();
    if (is_array($body_params)) {
        return $body_params;
    }

    return [];
}

function eara_get_send_form_payload_from_raw_request()
{
    $raw_input = file_get_contents('php://input');
    if (is_string($raw_input) && $raw_input !== '') {
        $decoded = json_decode($raw_input, true);
        if (is_array($decoded)) {
            return $decoded;
        }
    }

    if (!empty($_POST) && is_array($_POST)) {
        return wp_unslash($_POST);
    }

    return [];
}

add_filter('query_vars', function ($vars) {
    $vars[] = 'eara_send_form';
    return $vars;
});

add_action('init', function () {
    add_rewrite_rule('^send-form/?$', 'index.php?eara_send_form=1', 'top');
});

add_action('template_redirect', function () {
    if ((int) get_query_var('eara_send_form') !== 1) {
        return;
    }

    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        header('Allow: POST');
        wp_send_json_error([
            'code' => 'eara_method_not_allowed',
            'message' => __('Method not allowed. Use POST.', 'eara'),
        ], 405);
    }

    $payload = eara_get_send_form_payload_from_raw_request();
    $result = eara_send_form_handle_payload($payload);

    if (is_wp_error($result)) {
        $status = (int) $result->get_error_data('status');
        if ($status <= 0) {
            $status = 500;
        }

        wp_send_json_error([
            'code' => $result->get_error_code(),
            'message' => $result->get_error_message(),
        ], $status);
    }

    wp_send_json($result, 200);
});

add_action('after_switch_theme', function () {
    add_rewrite_rule('^send-form/?$', 'index.php?eara_send_form=1', 'top');
    flush_rewrite_rules(false);
});

add_action('admin_init', function () {
    $rewrite_version = get_option('eara_send_form_rewrite_version');
    if ($rewrite_version === '1') {
        return;
    }

    add_rewrite_rule('^send-form/?$', 'index.php?eara_send_form=1', 'top');
    flush_rewrite_rules(false);
    update_option('eara_send_form_rewrite_version', '1', false);
});

add_action('rest_api_init', function () {
    register_rest_route('eara/v1', '/send-form', [
        'methods' => 'POST',
        'permission_callback' => '__return_true',
        'callback' => function ($request) {
            $payload = eara_get_send_form_payload($request);
            $result = eara_send_form_handle_payload($payload);

            if (is_wp_error($result)) {
                return $result;
            }

            return rest_ensure_response($result);
        },
    ]);
});
