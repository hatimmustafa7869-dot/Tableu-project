<?php
// Universal Router for Hostinger / LiteSpeed / Apache PHP environments

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$path = trim($uri, '/');

// Default home
if (empty($path) || $path === 'index.php') {
    include __DIR__ . '/index.html';
    exit;
}

// If exact file exists (css, js, etc.)
if (file_exists(__DIR__ . '/' . $path)) {
    return false;
}

// Clean URL match: /about -> about.html
if (file_exists(__DIR__ . '/' . $path . '.html')) {
    include __DIR__ . '/' . $path . '.html';
    exit;
}

// Fallback to index.html
include __DIR__ . '/index.html';
