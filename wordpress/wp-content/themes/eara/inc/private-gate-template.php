<?php
// /wp-content/private-gate.php

define('ABSPATH', dirname(__FILE__) . '/../');
require_once ABSPATH . 'wp-load.php'; // carrega o WP para ter acesso às funções

error_log('Validating token for private file access');
function validate_token(): bool
{
    $token = null;

    // Aceita token via header Authorization: Bearer <token>
    $auth_header = $_SERVER['HTTP_AUTHORIZATION'] ?? '';
    if (preg_match('/Bearer\s+(.+)/i', $auth_header, $matches)) {
        $token = $matches[1];
    }

    // Fallback: token via header customizado X-Private-Token
    if (!$token) {
        $token = $_SERVER['HTTP_X_PRIVATE_TOKEN'] ?? null;
    }

    if (!$token) {
        return false;
    }

    // Exemplo 1: valida contra um token estático (bom pra server-to-server)
    $expected = defined('PRIVATE_FILES_TOKEN') ? PRIVATE_FILES_TOKEN : '';
    if (hash_equals($expected, $token)) {
        return true;
    }

    // Exemplo 2: valida como JWT do seu headless (decode manual ou biblioteca)
    // return validate_jwt($token);

    // Exemplo 3: valida como user token do WP
    // $user = wp_authenticate_application_password(null, null, $token);
    // return !is_wp_error($user);

    return false;
}

function serve_private_file(string $requested_file): void
{
    // Sanitiza o path para evitar path traversal
    $base_dir = realpath(__DIR__ . '/private-uploads');
    $file_path = realpath($base_dir . '/' . ltrim($requested_file, '/'));

    // Garante que o arquivo está dentro do diretório permitido
    if (!$file_path || strpos($file_path, $base_dir) !== 0) {
        http_response_code(400);
        exit('Invalid path');
    }

    if (!file_exists($file_path)) {
        http_response_code(404);
        exit('Not found');
    }

    // Detecta MIME type e serve o arquivo
    $mime = mime_content_type($file_path);
    header('Content-Type: ' . $mime);
    header('Content-Length: ' . filesize($file_path));
    header('X-Content-Type-Options: nosniff');

    // Evita que o arquivo fique em cache público
    header('Cache-Control: private, no-store');

    readfile($file_path);
    exit;
}

// --- Execução ---

if (!validate_token()) {
    http_response_code(401);
    header('WWW-Authenticate: Bearer realm="Private Files"');
    exit(json_encode(['error' => 'Unauthorized']));
}

// Pega o arquivo solicitado (vem da query string no Apache ou da rewrite rule)
$file = $_GET['file'] ?? $_SERVER['REQUEST_URI'] ?? '';
$file = str_replace('/wp-content/private-uploads/', '', $file);

serve_private_file($file);
