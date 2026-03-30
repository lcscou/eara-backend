<?php

if (!defined('ABSPATH')) {
    exit;
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

add_action('rest_api_init', function () {
    register_rest_route('eara/v1', '/send-form', [
        'methods' => 'POST',
        'permission_callback' => '__return_true',
        'callback' => function ($request) {
            $payload = eara_get_send_form_payload($request);

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

            $to = get_option('admin_email');
            if (empty($to) || !is_email($to)) {
                return new WP_Error('eara_missing_recipient', __('Recipient email is not configured.', 'eara'), ['status' => 500]);
            }

            $headers = [
                'Content-Type: text/plain; charset=UTF-8',
                'Reply-To: ' . $email,
            ];

            $full_message = "Email: {$email}\n\nMessage:\n{$message}";

            $sent = wp_mail($to, $subject, $full_message, $headers);

            if (!$sent) {
                return new WP_Error('eara_email_send_failed', __('Failed to send email.', 'eara'), ['status' => 500]);
            }

            return rest_ensure_response([
                'success' => true,
                'message' => __('Email sent successfully.', 'eara'),
            ]);
        },
    ]);
});
