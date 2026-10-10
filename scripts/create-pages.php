<?php
/**
 * Automated WordPress Pages & Setup Runner for TechnoAmaze
 * Creates pages in the WordPress database, sets Home as front page, and assigns templates.
 */

if (!defined('WP_CLI') && php_sapi_name() !== 'cli') {
    exit;
}

$manifest_path = __DIR__ . '/pages.json';
if (!file_exists($manifest_path)) {
    echo "Manifest file not found: $manifest_path\n";
    exit(1);
}

$pages = json_decode(file_get_contents($manifest_path), true);
if (!is_array($pages)) {
    echo "Invalid JSON in pages.json\n";
    exit(1);
}

// Sort: parents first, children second
usort($pages, function ($a, $b) {
    return (int)!empty($a['parent']) <=> (int)!empty($b['parent']);
});

$ids = array();
$home_id = 0;

foreach ($pages as $p) {
    $slug   = sanitize_title($p['slug']);
    $title  = $p['title'];
    $parent = !empty($p['parent']) && isset($ids[$p['parent']]) ? $ids[$p['parent']] : 0;

    $path = !empty($p['parent']) ? $p['parent'] . '/' . $slug : $slug;
    $existing = get_page_by_path($path, OBJECT, 'page');

    if ($existing) {
        $id = $existing->ID;
        echo "[EXISTS] Kept: {$path} (ID: {$id})\n";
    } else {
        $id = wp_insert_post(array(
            'post_type'    => 'page',
            'post_title'   => $title,
            'post_name'    => $slug,
            'post_parent'  => $parent,
            'post_status'  => 'publish',
            'post_content' => ''
        ), true);

        if (is_wp_error($id)) {
            echo "[ERROR] Failed to create {$path}: " . $id->get_error_message() . "\n";
            continue;
        }
        echo "[CREATED] Page: {$path} (ID: {$id})\n";
    }

    if (empty($p['parent'])) {
        $ids[$slug] = $id;
    }

    if ($slug === 'home') {
        $home_id = $id;
    }

    // Set page template if defined
    if (!empty($p['template'])) {
        update_post_meta($id, '_wp_page_template', $p['template']);
    }
}

// Configure Static Front Page
if ($home_id) {
    update_option('show_on_front', 'page');
    update_option('page_on_front', $home_id);
    echo "[CONFIGURED] Static front page set to 'Home' (ID: {$home_id})\n";
}

// Update Blog Name
update_option('blogname', 'Techno Amaze');
update_option('blogdescription', 'Building Digital Excellence');

echo "=== All TechnoAmaze WordPress pages created and configured successfully! ===\n";
