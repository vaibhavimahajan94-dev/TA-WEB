<?php
/**
 * TechnoAmaze Blog Seeder
 * Imports initial blog articles into WordPress Posts from the HTML files.
 */

if (!defined('WP_CLI') && php_sapi_name() !== 'cli') {
    exit;
}

$blogs_dir = dirname(__DIR__) . '/blogs';

$blog_meta = array(
    'ai-in-tech.html' => array(
        'title'    => 'The Rise of AI in Modern Tech Infrastructure',
        'category' => 'Artificial Intelligence',
        'tags'     => array('AI', 'Machine Learning', 'DevOps', 'Automation'),
        'image'    => 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&h=600&fit=crop&q=85'
    ),
    'cloud-computing-guide.html' => array(
        'title'    => 'The Complete Guide to Cloud Computing Migration',
        'category' => 'Cloud & DevOps',
        'tags'     => array('Cloud', 'AWS', 'Azure', 'Kubernetes', 'Migration'),
        'image'    => 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1400&h=600&fit=crop&q=85'
    ),
    'cybersecurity-trends.html' => array(
        'title'    => 'Top Cybersecurity Trends Every Business Must Watch',
        'category' => 'Cybersecurity',
        'tags'     => array('Cybersecurity', 'Zero Trust', 'InfoSec', 'Compliance'),
        'image'    => 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1400&h=600&fit=crop&q=85'
    )
);

foreach ($blog_meta as $filename => $info) {
    $existing = get_page_by_title($info['title'], OBJECT, 'post');
    if ($existing) {
        echo "[EXISTS] Post: {$info['title']} (ID: {$existing->ID})\n";
        continue;
    }

    $filepath = $blogs_dir . '/' . $filename;
    $content = '';
    if (file_exists($filepath)) {
        $raw = file_get_contents($filepath);
        if (preg_match('/<article[^>]*class=["\'][^"\']*blog-article[^"\']*["\'][^>]*>([\s\S]*?)<\/article>/i', $raw, $m)) {
            $content = $m[1];
            // Remove back button
            $content = preg_replace('/<a[^>]*class=["\'][^"\']*blog-back-btn[^"\']*["\'][^>]*>[\s\S]*?<\/a>/i', '', $content);
            // Remove share block
            $content = preg_replace('/<div[^>]*class=["\'][^"\']*blog-share[^"\']*["\'][^>]*>[\s\S]*?<\/div>/i', '', $content);
            // Remove tags block
            $content = preg_replace('/<div[^>]*class=["\'][^"\']*blog-tags[^"\']*["\'][^>]*>[\s\S]*?<\/div>/i', '', $content);
        }
    }

    if (empty($content)) {
        $content = "<p>Discover the latest engineering insights, architectural patterns, and technological benchmarks in {$info['category']}.</p>";
    }

    // Ensure category exists
    $cat_id = 1;
    $term = term_exists($info['category'], 'category');
    if (!$term) {
        $t = wp_insert_term($info['category'], 'category');
        if (!is_wp_error($t)) $cat_id = $t['term_id'];
    } else {
        $cat_id = is_array($term) ? $term['term_id'] : $term;
    }

    $post_id = wp_insert_post(array(
        'post_title'    => $info['title'],
        'post_content'  => trim($content),
        'post_status'   => 'publish',
        'post_type'     => 'post',
        'post_category' => array($cat_id),
        'tags_input'    => $info['tags']
    ), true);

    if (is_wp_error($post_id)) {
        echo "[ERROR] Failed to insert {$info['title']}: " . $post_id->get_error_message() . "\n";
        continue;
    }

    echo "[CREATED] Post: {$info['title']} (ID: {$post_id})\n";
}

echo "=== Blog articles seeded successfully into WordPress! ===\n";
