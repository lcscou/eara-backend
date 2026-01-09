<?php
/**
 * Debug file to test block registration
 * Access via: wp-admin/admin.php?page=eara-blocks-debug
 */

// Only show to admins
if (!current_user_can('manage_options')) {
    die('Access denied');
}

echo '<h1>Eara Blocks Debug</h1>';

// Check if blocks are registered
$registered_blocks = WP_Block_Type_Registry::get_instance()->get_all_registered();

echo '<h2>Total Registered Blocks: ' . count($registered_blocks) . '</h2>';

echo '<h2>Eara Blocks:</h2>';
echo '<ul>';
foreach ($registered_blocks as $block) {
    if (strpos($block->name, 'eara/') === 0) {
        echo '<li>' . $block->name . '</li>';
    }
}
echo '</ul>';

echo '<h2>GoogleMaps Block Details:</h2>';
$google_maps = WP_Block_Type_Registry::get_instance()->get_registered('eara/google-maps');
if ($google_maps) {
    echo '<pre>';
    print_r($google_maps);
    echo '</pre>';
} else {
    echo '<p style="color: red;"><strong>NOT REGISTERED</strong></p>';
}

echo '<h2>Button Block Details:</h2>';
$button = WP_Block_Type_Registry::get_instance()->get_registered('eara/button');
if ($button) {
    echo '<p style="color: green;"><strong>REGISTERED</strong></p>';
} else {
    echo '<p style="color: red;"><strong>NOT REGISTERED</strong></p>';
}
?>
