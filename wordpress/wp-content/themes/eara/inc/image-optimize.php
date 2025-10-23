<?php
/**
 * Função para otimizar e converter imagens para WebP no upload
 * Ignora imagens SVG
 */
function otimizar_e_converter_para_webp_no_upload($metadata, $attachment_id)
{
    if (!wp_attachment_is_image($attachment_id)) {
        return $metadata;
    }
    $file_path = get_attached_file($attachment_id);
    if (!file_exists($file_path)) {
        return $metadata;
    }
    $file_info = wp_check_filetype($file_path);
    $mime_type = $file_info['type'];
    if ($mime_type === 'image/svg+xml') {
        return $metadata;
    }
    $supported_types = array(
        'image/jpeg',
        'image/png',
        'image/gif'
    );
    if (!in_array($mime_type, $supported_types)) {
        return $metadata;
    }
    switch ($mime_type) {
        case 'image/jpeg':
            $image = imagecreatefromjpeg($file_path);
            break;
        case 'image/png':
            $image = imagecreatefrompng($file_path);
            imagepalettetotruecolor($image);
            imagealphablending($image, true);
            imagesavealpha($image, true);
            break;
        case 'image/gif':
            $image = imagecreatefromgif($file_path);
            break;
        default:
            return $metadata;
    }
    if (!$image) {
        return $metadata;
    }
    $webp_path = preg_replace('/\.[^.]+$/', '.webp', $file_path);
    $quality = 80;
    $webp_success = imagewebp($image, $webp_path, $quality);
    imagedestroy($image);
    if ($webp_success) {
        otimizar_imagem_original($file_path, $mime_type);
        $metadata['webp'] = array(
            'file' => basename($webp_path),
            'width' => $metadata['width'],
            'height' => $metadata['height'],
            'mime-type' => 'image/webp'
        );
        error_log('Imagem convertida para WebP: ' . $file_path);
    }
    return $metadata;
}
add_filter('wp_generate_attachment_metadata', 'otimizar_e_converter_para_webp_no_upload', 10, 2);
/**
 * Função para otimizar a imagem original
 */
function otimizar_imagem_original($file_path, $mime_type)
{
    $quality = 85; 
    switch ($mime_type) {
        case 'image/jpeg':
            $image = imagecreatefromjpeg($file_path);
            if ($image) {
                imagejpeg($image, $file_path, $quality);
                imagedestroy($image);
            }
            break;
        case 'image/png':
            if (function_exists('shell_exec') && is_callable('shell_exec')) {
                $pngquant_check = shell_exec('which pngquant');
                if ($pngquant_check) {
                    shell_exec("pngquant --force --quality=65-80 --output " . escapeshellarg($file_path) . " " . escapeshellarg($file_path));
                }
            }
            break;
    }
}
/**
 * Adicionar suporte para WebP no WordPress
 */
function adicionar_suporte_webp($mimes)
{
    $mimes['webp'] = 'image/webp';
    return $mimes;
}
add_filter('mime_types', 'adicionar_suporte_webp');
/**
 * Verificar WebP no upload
 */
function verificar_webp_no_upload($checked, $file, $filename, $mimes)
{
    if (!$checked['type']) {
        $file_info = wp_check_filetype($filename, $mimes);
        $ext = $file_info['ext'];
        $type = $file_info['type'];
        if ($type && in_array($type, array('image/webp'))) {
            $checked = array('ext' => $ext, 'type' => $type);
        }
    }
    return $checked;
}
add_filter('wp_check_filetype_and_ext', 'verificar_webp_no_upload', 10, 4);
/**
 * MODIFICAÇÃO PRINCIPAL: Adicionar URL WebP na resposta da API REST
 */
function adicionar_webp_na_api_rest($response, $post, $request)
{
    if ($post->post_type === 'attachment') {
        $metadata = wp_get_attachment_metadata($post->ID);
        if (isset($metadata['webp'])) {
            $upload_dir = wp_upload_dir();
            $webp_filename = $metadata['webp']['file'];
            $webp_url = $upload_dir['baseurl'] . '/' . dirname($metadata['file']) . '/' . $webp_filename;
            $response->data['webp_url'] = $webp_url;
            $response->data['webp_sources'] = array(
                'full' => $webp_url
            );
            if (isset($metadata['sizes'])) {
                foreach ($metadata['sizes'] as $size_name => $size_data) {
                    $size_webp_url = $upload_dir['baseurl'] . '/' . dirname($metadata['file']) . '/' . preg_replace('/\.[^.]+$/', '.webp', $size_data['file']);
                    $size_webp_path = $upload_dir['basedir'] . '/' . dirname($metadata['file']) . '/' . preg_replace('/\.[^.]+$/', '.webp', $size_data['file']);
                    if (file_exists($size_webp_path)) {
                        $response->data['webp_sources'][$size_name] = $size_webp_url;
                    }
                }
            }
        }
        $accept = isset($_SERVER['HTTP_ACCEPT']) ? $_SERVER['HTTP_ACCEPT'] : '';
        if (strpos($accept, 'image/webp') !== false && isset($response->data['webp_url'])) {
            $response->data['optimized_url'] = $response->data['webp_url'];
            $response->data['optimized_format'] = 'webp';
        } else {
            $response->data['optimized_url'] = $response->data['source_url'];
            $response->data['optimized_format'] = pathinfo($response->data['source_url'], PATHINFO_EXTENSION);
        }
    }
    return $response;
}
add_filter('rest_prepare_attachment', 'adicionar_webp_na_api_rest', 10, 3);
/**
 * Adicionar campos WebP no schema da API
 */
function adicionar_webp_api_schema($schema)
{
    $schema['properties']['webp_url'] = array(
        'description' => 'URL da imagem WebP',
        'type' => 'string',
        'context' => array('view', 'edit'),
        'readonly' => true,
    );
    $schema['properties']['webp_sources'] = array(
        'description' => 'URLs WebP para todos os tamanhos',
        'type' => 'object',
        'context' => array('view', 'edit'),
        'readonly' => true,
    );
    $schema['properties']['optimized_url'] = array(
        'description' => 'URL otimizada (WebP quando disponível)',
        'type' => 'string',
        'context' => array('view', 'edit'),
        'readonly' => true,
    );
    $schema['properties']['optimized_format'] = array(
        'description' => 'Formato da imagem otimizada',
        'type' => 'string',
        'context' => array('view', 'edit'),
        'readonly' => true,
    );
    return $schema;
}
add_filter('rest_attachment_collection_params', 'adicionar_webp_api_schema');
add_filter('rest_attachment_schema', 'adicionar_webp_api_schema');
/**
 * Criar versões WebP para todos os sizes da imagem
 */
function criar_webp_para_todos_sizes($metadata, $attachment_id)
{
    if (empty($metadata['sizes']) || !wp_attachment_is_image($attachment_id)) {
        return $metadata;
    }
    $upload_dir = wp_upload_dir();
    $file_path = get_attached_file($attachment_id);
    $file_info = wp_check_filetype($file_path);
    $mime_type = $file_info['type'];
    if ($mime_type === 'image/svg+xml') {
        return $metadata;
    }
    foreach ($metadata['sizes'] as $size_name => $size_data) {
        $size_path = $upload_dir['basedir'] . '/' . dirname($metadata['file']) . '/' . $size_data['file'];
        $webp_path = preg_replace('/\.[^.]+$/', '.webp', $size_path);
        if (file_exists($size_path)) {
            $size_info = wp_check_filetype($size_path);
            $size_mime_type = $size_info['type'];
            switch ($size_mime_type) {
                case 'image/jpeg':
                    $image = imagecreatefromjpeg($size_path);
                    break;
                case 'image/png':
                    $image = imagecreatefrompng($size_path);
                    imagepalettetotruecolor($image);
                    imagealphablending($image, true);
                    imagesavealpha($image, true);
                    break;
                default:
                    continue 2; 
            }
            if ($image) {
                imagewebp($image, $webp_path, 80);
                imagedestroy($image);
            }
        }
    }
    return $metadata;
}
add_filter('wp_generate_attachment_metadata', 'criar_webp_para_todos_sizes', 15, 2);