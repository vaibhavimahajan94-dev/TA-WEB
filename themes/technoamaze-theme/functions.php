<?php
/**
 * TechnoAmaze Corporate IT Theme Functions & Definitions
 *
 * @package TechnoAmaze
 * @version 1.0.0
 */

defined('ABSPATH') || exit;

// -----------------------------------------------------------------------------
// 1. THEME SETUP
// -----------------------------------------------------------------------------
function technoamaze_theme_setup() {
    add_theme_support('automatic-feed-links');
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');

    register_nav_menus(array(
        'primary' => __('Primary Navigation', 'technoamaze'),
        'footer'  => __('Footer Navigation', 'technoamaze'),
    ));

    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script'
    ));

    add_theme_support('custom-logo', array(
        'height'      => 80,
        'width'       => 280,
        'flex-height' => true,
        'flex-width'  => true,
    ));

    add_theme_support('align-wide');
    add_theme_support('responsive-embeds');
}
add_action('after_setup_theme', 'technoamaze_theme_setup');

// -----------------------------------------------------------------------------
// 2. ENQUEUE SCRIPTS & ALL MASTER STYLES (High Performance & Conditional Loading)
// -----------------------------------------------------------------------------
if (!defined('TECHNOAMAZE_VERSION')) {
    define('TECHNOAMAZE_VERSION', '1.0.4');
}

function technoamaze_enqueue_assets() {
    $theme_uri = get_template_directory_uri();
    $ver = TECHNOAMAZE_VERSION;

    // 1. Google Fonts
    wp_enqueue_style(
        'technoamaze-fonts',
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@400;500;600;700;800;900&display=swap',
        array(),
        null
    );

    // 2. Font Awesome Icons
    wp_enqueue_style(
        'font-awesome-6',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
        array(),
        '6.5.1'
    );

    // 3. Master Stylesheet
    wp_enqueue_style(
        'technoamaze-master-style',
        $theme_uri . '/assets/css/style.css',
        array('technoamaze-fonts', 'font-awesome-6'),
        $ver
    );

    $cur_id = get_queried_object_id();
    $parent_id = wp_get_post_parent_id($cur_id);

    // 4. Services Overview Styles
    if (is_page('services') || is_page_template('page-services.php')) {
        wp_enqueue_style('technoamaze-services-style', $theme_uri . '/assets/css/services.css', array('technoamaze-master-style'), $ver);
    }

    // 5. Individual Service Subpage Styles
    if (is_page() && ($parent_id == 8 || strpos(get_page_uri($cur_id), 'services/') !== false)) {
        wp_enqueue_style('technoamaze-service-page-style', $theme_uri . '/assets/css/service-page.css', array('technoamaze-master-style'), $ver);
    }

    // 6. Industries Styles
    if (is_page('industries') || is_page_template('page-industries.php') || ($parent_id == 9) || strpos(get_page_uri($cur_id), 'industries/') !== false) {
        wp_enqueue_style('technoamaze-industries-style', $theme_uri . '/assets/css/industries.css', array('technoamaze-master-style'), $ver);
    }

    // 7. Dynamic Blogs & Insights Styles
    if (is_front_page() || is_page('blogs') || is_page_template('page-blogs.php') || is_singular('post') || is_home() || is_category() || is_tag() || is_archive()) {
        wp_enqueue_style('technoamaze-blogs-style', $theme_uri . '/assets/css/blogs.css', array('technoamaze-master-style'), $ver);
    }

    // 8. Careers & Jobs Styles & Script
    if (is_page(array('careers', 'job-details', 'apply', 'application-success')) || is_singular('job_posting') || is_post_type_archive('job_posting')) {
        wp_enqueue_style('technoamaze-careers-style', $theme_uri . '/assets/css/careers.css', array('technoamaze-master-style'), $ver);
        wp_enqueue_script('technoamaze-careers-js', $theme_uri . '/assets/js/careers.js', array('technoamaze-main-js'), $ver, true);
    }

    // 9. Root Theme Metadata Style
    wp_enqueue_style('technoamaze-theme-style', get_stylesheet_uri(), array('technoamaze-master-style'), $ver);

    // 10. Main Interactive JS
    wp_enqueue_script('technoamaze-main-js', $theme_uri . '/assets/js/main.js', array(), $ver, true);

    // 11. Localize REST API & Site Config
    $ta_config = array(
        'siteUrl'    => esc_url(home_url('')),
        'restUrl'    => esc_url(rest_url('technoamaze/v1/')),
        'ajaxUrl'    => esc_url(admin_url('admin-ajax.php')),
        'nonce'      => wp_create_nonce('wp_rest'),
        'isLoggedIn' => is_user_logged_in(),
        'isAdmin'    => current_user_can('manage_options')
    );
    wp_localize_script('technoamaze-main-js', 'TechnoAmazeWP', $ta_config);
    if (wp_script_is('technoamaze-careers-js', 'enqueued')) {
        wp_localize_script('technoamaze-careers-js', 'TechnoAmazeWP', $ta_config);
    }
}
add_action('wp_enqueue_scripts', 'technoamaze_enqueue_assets');

// Add defer attribute to theme scripts for faster first paint
add_filter('script_loader_tag', function($tag, $handle) {
    if (in_array($handle, array('technoamaze-main-js', 'technoamaze-careers-js'))) {
        return str_replace(' src', ' defer src', $tag);
    }
    return $tag;
}, 10, 2);

// Remove unnecessary WordPress head bloat & emojis
add_action('init', function() {
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('admin_print_scripts', 'print_emoji_detection_script');
    remove_action('wp_print_styles', 'print_emoji_styles');
    remove_action('admin_print_styles', 'print_emoji_styles');
    remove_action('wp_head', 'rsd_link');
    remove_action('wp_head', 'wlwmanifest_link');
    remove_action('wp_head', 'wp_generator');
});

// -----------------------------------------------------------------------------
// 3. TEMPLATE HIERARCHY FILTER (Dynamic Subpage Templates)
// -----------------------------------------------------------------------------
add_filter('page_template_hierarchy', function ($templates) {
    $post_id = get_queried_object_id();
    if ($post_id) {
        $path = get_page_uri($post_id);
        if ($path) {
            array_unshift($templates, 'page-' . str_replace('/', '-', $path) . '.php');
        }
    }
    return $templates;
});

// -----------------------------------------------------------------------------
// 4. ESTIMATED READING TIME HELPER FOR BLOGS
// -----------------------------------------------------------------------------
function technoamaze_reading_time($post_id = null) {
    $content = get_post_field('post_content', $post_id ?: get_the_ID());
    $word_count = str_word_count(strip_tags($content));
    $reading_time = ceil($word_count / 200);
    return max(1, $reading_time) . ' min read';
}

// -----------------------------------------------------------------------------
// 5. DYNAMIC BLOG THUMBNAIL HELPER
// -----------------------------------------------------------------------------
function technoamaze_get_blog_thumbnail($post_id = null, $size = 'medium_large') {
    $pid = $post_id ?: get_the_ID();
    if (!$pid) {
        return 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=500&fit=crop&q=80';
    }
    if (has_post_thumbnail($pid)) {
        $url = get_the_post_thumbnail_url($pid, $size);
        if (!empty($url)) {
            return $url;
        }
    }
    $meta_img = get_post_meta($pid, '_ta_blog_image', true);
    if (!empty($meta_img)) {
        return $meta_img;
    }
    $slug = get_post_field('post_name', $pid);
    $fallbacks = array(
        'the-rise-of-ai-in-modern-tech-infrastructure' => 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=500&fit=crop&q=80',
        'the-complete-guide-to-cloud-computing-migration' => 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop&q=80',
        'top-cybersecurity-trends-every-business-must-watch' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop&q=80',
        'building-scalable-web-mobile-apps' => 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop&q=80',
        'devops-automation-ci-cd-pipelines' => 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=500&fit=crop&q=80'
    );
    if (isset($fallbacks[$slug])) {
        return $fallbacks[$slug];
    }
    $list = array_values($fallbacks);
    return $list[$pid % count($list)];
}

