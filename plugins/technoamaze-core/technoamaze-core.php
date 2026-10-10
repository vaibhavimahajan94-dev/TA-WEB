<?php
/**
 * Plugin Name: TechnoAmaze Core Engine
 * Plugin URI: https://technoamaze.in
 * Description: Registers Job Openings, Candidate Applications, WP-Admin Recruiter screen, REST API endpoints, and Automated Email Alerts.
 * Version: 1.0.0
 * Author: TechnoAmaze Development Team
 * Author URI: https://technoamaze.in
 * Text Domain: technoamaze-core
 */

defined('ABSPATH') || exit;

class TechnoAmaze_Core {

    public function __construct() {
        add_action('init', array($this, 'register_post_types'));
        add_action('add_meta_boxes', array($this, 'register_meta_boxes'));
        add_action('save_post_job_posting', array($this, 'save_job_meta'));
        add_action('save_post_job_application', array($this, 'save_application_meta'));
        add_action('rest_api_init', array($this, 'register_rest_routes'));
        
        // Admin table columns for Job Postings
        add_filter('manage_job_posting_posts_columns', array($this, 'job_columns'));
        add_action('manage_job_posting_posts_custom_column', array($this, 'job_column_content'), 10, 2);

        // Admin table columns for Candidate Applications
        add_filter('manage_job_application_posts_columns', array($this, 'application_columns'));
        add_action('manage_job_application_posts_custom_column', array($this, 'application_column_content'), 10, 2);

        // Activation hook to seed jobs
        register_activation_hook(__FILE__, array($this, 'seed_initial_jobs'));
    }

    // -------------------------------------------------------------------------
    // 1. REGISTER CUSTOM POST TYPES
    // -------------------------------------------------------------------------
    public function register_post_types() {
        // Job Openings
        register_post_type('job_posting', array(
            'labels' => array(
                'name'               => __('Job Openings', 'technoamaze-core'),
                'singular_name'      => __('Job Opening', 'technoamaze-core'),
                'add_new'            => __('Add New Job', 'technoamaze-core'),
                'add_new_item'       => __('Post New Job Opening', 'technoamaze-core'),
                'edit_item'          => __('Edit Job Opening', 'technoamaze-core'),
                'all_items'          => __('All Job Openings', 'technoamaze-core'),
                'menu_name'          => __('Careers & Jobs', 'technoamaze-core'),
            ),
            'public'              => true,
            'has_archive'         => true,
            'rewrite'             => array('slug' => 'careers-jobs'),
            'menu_icon'           => 'dashicons-businessman',
            'supports'            => array('title', 'editor', 'excerpt', 'thumbnail'),
            'show_in_rest'        => true,
        ));

        // Candidate Applications
        register_post_type('job_application', array(
            'labels' => array(
                'name'               => __('Job Applications', 'technoamaze-core'),
                'singular_name'      => __('Job Application', 'technoamaze-core'),
                'all_items'          => __('All Received Applications', 'technoamaze-core'),
                'menu_name'          => __('Applications', 'technoamaze-core'),
            ),
            'public'              => false,
            'show_ui'             => true,
            'show_in_menu'        => 'edit.php?post_type=job_posting',
            'menu_icon'           => 'dashicons-id-alt',
            'supports'            => array('title'),
            'show_in_rest'        => false,
        ));
    }

    // -------------------------------------------------------------------------
    // 2. META BOXES IN WP-ADMIN
    // -------------------------------------------------------------------------
    public function register_meta_boxes() {
        add_meta_box('job_details_meta', __('Job Position Specifications', 'technoamaze-core'), array($this, 'render_job_meta_box'), 'job_posting', 'normal', 'high');
        add_meta_box('app_details_meta', __('Candidate Profile & Application Details', 'technoamaze-core'), array($this, 'render_application_meta_box'), 'job_application', 'normal', 'high');
    }

    public function render_job_meta_box($post) {
        wp_nonce_field('technoamaze_job_meta_nonce', 'job_meta_nonce');
        $dept     = get_post_meta($post->ID, '_job_department', true) ?: 'Engineering';
        $location = get_post_meta($post->ID, '_job_location', true) ?: 'Remote / Pune';
        $type     = get_post_meta($post->ID, '_job_type', true) ?: 'Full Time';
        $exp      = get_post_meta($post->ID, '_job_experience', true) ?: '1–2 Years';
        $salary   = get_post_meta($post->ID, '_job_salary', true);
        $deadline = get_post_meta($post->ID, '_job_deadline', true);
        $status   = get_post_meta($post->ID, '_job_status', true) ?: 'open';
        $resp     = get_post_meta($post->ID, '_job_responsibilities', true);
        $reqs     = get_post_meta($post->ID, '_job_requirements', true);
        $benefits = get_post_meta($post->ID, '_job_benefits', true);
        ?>
        <table class="form-table" style="width:100%;">
            <tr>
                <th style="width:200px;"><label for="job_department">Department</label></th>
                <td><input type="text" name="job_department" id="job_department" value="<?php echo esc_attr($dept); ?>" class="regular-text" placeholder="Engineering, Design, AI..."></td>
            </tr>
            <tr>
                <th><label for="job_location">Location</label></th>
                <td><input type="text" name="job_location" id="job_location" value="<?php echo esc_attr($location); ?>" class="regular-text" placeholder="Remote / Pune"></td>
            </tr>
            <tr>
                <th><label for="job_type">Employment Type</label></th>
                <td>
                    <select name="job_type" id="job_type">
                        <option value="Full Time" <?php selected($type, 'Full Time'); ?>>Full Time</option>
                        <option value="Part Time" <?php selected($type, 'Part Time'); ?>>Part Time</option>
                        <option value="Contract" <?php selected($type, 'Contract'); ?>>Contract</option>
                        <option value="Internship" <?php selected($type, 'Internship'); ?>>Internship</option>
                    </select>
                </td>
            </tr>
            <tr>
                <th><label for="job_experience">Experience Required</label></th>
                <td><input type="text" name="job_experience" id="job_experience" value="<?php echo esc_attr($exp); ?>" class="regular-text" placeholder="1–2 Years"></td>
            </tr>
            <tr>
                <th><label for="job_salary">Salary Range</label></th>
                <td><input type="text" name="job_salary" id="job_salary" value="<?php echo esc_attr($salary); ?>" class="regular-text" placeholder="₹5,00,000 - ₹8,00,000 P.A."></td>
            </tr>
            <tr>
                <th><label for="job_deadline">Application Deadline</label></th>
                <td><input type="date" name="job_deadline" id="job_deadline" value="<?php echo esc_attr($deadline); ?>"></td>
            </tr>
            <tr>
                <th><label for="job_status">Job Status</label></th>
                <td>
                    <select name="job_status" id="job_status" style="font-weight:bold;">
                        <option value="open" <?php selected($status, 'open'); ?>>Active (Open for Applications)</option>
                        <option value="closed" <?php selected($status, 'closed'); ?>>Closed (Hide Apply Button)</option>
                    </select>
                </td>
            </tr>
            <tr>
                <th><label for="job_responsibilities">Key Responsibilities<br><small style="color:#666;">(One bullet point per line)</small></label></th>
                <td><textarea name="job_responsibilities" id="job_responsibilities" rows="5" class="large-text"><?php echo esc_textarea($resp); ?></textarea></td>
            </tr>
            <tr>
                <th><label for="job_requirements">Requirements & Skills<br><small style="color:#666;">(One bullet point per line)</small></label></th>
                <td><textarea name="job_requirements" id="job_requirements" rows="5" class="large-text"><?php echo esc_textarea($reqs); ?></textarea></td>
            </tr>
            <tr>
                <th><label for="job_benefits">Perks & Benefits<br><small style="color:#666;">(One bullet point per line)</small></label></th>
                <td><textarea name="job_benefits" id="job_benefits" rows="4" class="large-text"><?php echo esc_textarea($benefits); ?></textarea></td>
            </tr>
        </table>
        <?php
    }

    public function render_application_meta_box($post) {
        $ref_id   = get_post_meta($post->ID, '_app_ref_id', true);
        $job_title= get_post_meta($post->ID, '_app_job_title', true);
        $name     = get_post_meta($post->ID, '_app_name', true);
        $email    = get_post_meta($post->ID, '_app_email', true);
        $phone    = get_post_meta($post->ID, '_app_phone', true);
        $loc      = get_post_meta($post->ID, '_app_location', true);
        $exp      = get_post_meta($post->ID, '_app_experience', true);
        $linkedin = get_post_meta($post->ID, '_app_linkedin', true);
        $portfolio= get_post_meta($post->ID, '_app_portfolio', true);
        $resume   = get_post_meta($post->ID, '_app_resume_url', true);
        $cover    = get_post_meta($post->ID, '_app_cover_letter', true);
        $status   = get_post_meta($post->ID, '_app_status', true) ?: 'New';
        ?>
        <table class="form-table">
            <tr><th>Application Ref ID:</th><td><strong style="color:#C8006E;font-size:1.1rem;"><?php echo esc_html($ref_id); ?></strong></td></tr>
            <tr><th>Position Applied:</th><td><strong><?php echo esc_html($job_title); ?></strong></td></tr>
            <tr><th>Candidate Name:</th><td><?php echo esc_html($name); ?></td></tr>
            <tr><th>Email:</th><td><a href="mailto:<?php echo esc_attr($email); ?>"><?php echo esc_html($email); ?></a></td></tr>
            <tr><th>Phone:</th><td><a href="tel:<?php echo esc_attr($phone); ?>"><?php echo esc_html($phone); ?></a></td></tr>
            <tr><th>Current Location:</th><td><?php echo esc_html($loc); ?></td></tr>
            <tr><th>Years Experience:</th><td><?php echo esc_html($exp); ?></td></tr>
            <?php if ($linkedin): ?><tr><th>LinkedIn:</th><td><a href="<?php echo esc_url($linkedin); ?>" target="_blank"><?php echo esc_html($linkedin); ?></a></td></tr><?php endif; ?>
            <?php if ($portfolio): ?><tr><th>Portfolio:</th><td><a href="<?php echo esc_url($portfolio); ?>" target="_blank"><?php echo esc_html($portfolio); ?></a></td></tr><?php endif; ?>
            <tr>
                <th>Resume:</th>
                <td>
                    <?php if ($resume): ?>
                        <a href="<?php echo esc_url($resume); ?>" target="_blank" class="button button-primary"><i class="dashicons dashicons-download"></i> Download / View Resume</a>
                    <?php else: ?>
                        <em style="color:#999;">No resume attached</em>
                    <?php endif; ?>
                </td>
            </tr>
            <tr><th>Cover Letter:</th><td><div style="background:#f9f9f9;padding:12px;border:1px solid #ddd;border-radius:6px;max-width:650px;white-space:pre-wrap;"><?php echo esc_html($cover ?: 'None provided.'); ?></div></td></tr>
            <tr>
                <th>Application Status:</th>
                <td>
                    <select name="app_status" id="app_status" style="font-weight:bold;font-size:14px;padding:4px 10px;">
                        <option value="New" <?php selected($status, 'New'); ?>>New Application</option>
                        <option value="Reviewing" <?php selected($status, 'Reviewing'); ?>>Reviewing</option>
                        <option value="Shortlisted" <?php selected($status, 'Shortlisted'); ?>>Shortlisted</option>
                        <option value="Interview" <?php selected($status, 'Interview'); ?>>Interview Scheduled</option>
                        <option value="Selected" <?php selected($status, 'Selected'); ?>>Selected</option>
                        <option value="Rejected" <?php selected($status, 'Rejected'); ?>>Rejected</option>
                    </select>
                </td>
            </tr>
        </table>
        <?php
    }

    public function save_job_meta($post_id) {
        if (!isset($_POST['job_meta_nonce']) || !wp_verify_nonce($_POST['job_meta_nonce'], 'technoamaze_job_meta_nonce')) return;
        if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;
        if (!current_user_can('edit_post', $post_id)) return;

        $fields = array('job_department', 'job_location', 'job_type', 'job_experience', 'job_salary', 'job_deadline', 'job_status', 'job_responsibilities', 'job_requirements', 'job_benefits');
        foreach ($fields as $field) {
            if (isset($_POST[$field])) {
                update_post_meta($post_id, '_' . $field, sanitize_textarea_field($_POST[$field]));
            }
        }
    }

    public function save_application_meta($post_id) {
        if (!current_user_can('edit_post', $post_id)) return;
        if (isset($_POST['app_status'])) {
            update_post_meta($post_id, '_app_status', sanitize_text_field($_POST['app_status']));
        }
    }

    // -------------------------------------------------------------------------
    // 3. ADMIN LIST COLUMNS
    // -------------------------------------------------------------------------
    public function job_columns($cols) {
        $new_cols = array(
            'cb'         => $cols['cb'],
            'title'      => __('Job Title', 'technoamaze-core'),
            'department' => __('Department', 'technoamaze-core'),
            'location'   => __('Location', 'technoamaze-core'),
            'type'       => __('Type', 'technoamaze-core'),
            'experience' => __('Experience', 'technoamaze-core'),
            'status'     => __('Status', 'technoamaze-core'),
            'date'       => $cols['date']
        );
        return $new_cols;
    }

    public function job_column_content($col, $post_id) {
        switch ($col) {
            case 'department':
                echo esc_html(get_post_meta($post_id, '_job_department', true) ?: 'Engineering');
                break;
            case 'location':
                echo esc_html(get_post_meta($post_id, '_job_location', true) ?: 'Remote / Pune');
                break;
            case 'type':
                echo esc_html(get_post_meta($post_id, '_job_type', true) ?: 'Full Time');
                break;
            case 'experience':
                echo esc_html(get_post_meta($post_id, '_job_experience', true) ?: '1–2 Years');
                break;
            case 'status':
                $st = get_post_meta($post_id, '_job_status', true) ?: 'open';
                if ($st === 'open') {
                    echo '<span style="color:#059669;font-weight:700;">● Active</span>';
                } else {
                    echo '<span style="color:#dc2626;font-weight:700;">● Closed</span>';
                }
                break;
        }
    }

    public function application_columns($cols) {
        return array(
            'cb'         => $cols['cb'],
            'ref_id'     => __('Reference ID', 'technoamaze-core'),
            'title'      => __('Candidate Name', 'technoamaze-core'),
            'job'        => __('Applied Position', 'technoamaze-core'),
            'contact'    => __('Contact', 'technoamaze-core'),
            'status'     => __('Status', 'technoamaze-core'),
            'resume'     => __('Resume', 'technoamaze-core'),
            'date'       => __('Applied Date', 'technoamaze-core')
        );
    }

    public function application_column_content($col, $post_id) {
        switch ($col) {
            case 'ref_id':
                echo '<strong>' . esc_html(get_post_meta($post_id, '_app_ref_id', true)) . '</strong>';
                break;
            case 'job':
                echo esc_html(get_post_meta($post_id, '_app_job_title', true));
                break;
            case 'contact':
                $email = get_post_meta($post_id, '_app_email', true);
                $phone = get_post_meta($post_id, '_app_phone', true);
                echo esc_html($email) . '<br><small>' . esc_html($phone) . '</small>';
                break;
            case 'status':
                $st = get_post_meta($post_id, '_app_status', true) ?: 'New';
                $colors = array(
                    'New' => '#2563eb',
                    'Reviewing' => '#d97706',
                    'Shortlisted' => '#7c3aed',
                    'Interview' => '#0891b2',
                    'Selected' => '#059669',
                    'Rejected' => '#dc2626'
                );
                $c = isset($colors[$st]) ? $colors[$st] : '#666';
                echo '<span style="display:inline-block;padding:2px 8px;border-radius:12px;font-size:11px;font-weight:700;color:#fff;background:' . $c . ';">' . esc_html($st) . '</span>';
                break;
            case 'resume':
                $url = get_post_meta($post_id, '_app_resume_url', true);
                if ($url) {
                    echo '<a href="' . esc_url($url) . '" target="_blank" class="button button-small"><i class="dashicons dashicons-media-document"></i> Resume</a>';
                } else {
                    echo '-';
                }
                break;
        }
    }

    // -------------------------------------------------------------------------
    // 4. REST API ROUTES
    // -------------------------------------------------------------------------
    public function register_rest_routes() {
        register_rest_route('technoamaze/v1', '/jobs', array(
            'methods'  => 'GET',
            'callback' => array($this, 'api_get_jobs'),
            'permission_callback' => '__return_true',
        ));

        register_rest_route('technoamaze/v1', '/apply', array(
            'methods'  => 'POST',
            'callback' => array($this, 'api_submit_application'),
            'permission_callback' => '__return_true',
        ));
    }

    public function api_get_jobs() {
        $posts = get_posts(array(
            'post_type'      => 'job_posting',
            'post_status'    => 'publish',
            'posts_per_page' => -1,
            'orderby'        => 'date',
            'order'          => 'DESC'
        ));

        $jobs = array();
        foreach ($posts as $p) {
            $resp_raw = get_post_meta($p->ID, '_job_responsibilities', true);
            $req_raw  = get_post_meta($p->ID, '_job_requirements', true);
            $ben_raw  = get_post_meta($p->ID, '_job_benefits', true);

            $jobs[] = array(
                'id'              => $p->post_name,
                'title'           => html_entity_decode($p->post_title, ENT_QUOTES | ENT_HTML5, 'UTF-8'),
                'department'      => html_entity_decode(get_post_meta($p->ID, '_job_department', true) ?: 'Engineering', ENT_QUOTES | ENT_HTML5, 'UTF-8'),
                'location'        => get_post_meta($p->ID, '_job_location', true) ?: 'Remote / Pune',
                'employmentType'  => get_post_meta($p->ID, '_job_type', true) ?: 'Full Time',
                'experience'      => get_post_meta($p->ID, '_job_experience', true) ?: '1–2 Years',
                'description'     => html_entity_decode(wp_strip_all_tags($p->post_content ?: $p->post_excerpt), ENT_QUOTES | ENT_HTML5, 'UTF-8'),
                'responsibilities'=> array_values(array_filter(array_map(function($line) {
                    return html_entity_decode(trim($line), ENT_QUOTES | ENT_HTML5, 'UTF-8');
                }, explode("\n", $resp_raw)))),
                'requirements'    => array_values(array_filter(array_map(function($line) {
                    return html_entity_decode(trim($line), ENT_QUOTES | ENT_HTML5, 'UTF-8');
                }, explode("\n", $req_raw)))),
                'benefits'        => array_values(array_filter(array_map(function($line) {
                    return html_entity_decode(trim($line), ENT_QUOTES | ENT_HTML5, 'UTF-8');
                }, explode("\n", $ben_raw)))),
                'deadline'        => get_post_meta($p->ID, '_job_deadline', true) ?: '',
                'status'          => get_post_meta($p->ID, '_job_status', true) ?: 'open',
                'postedDate'      => get_the_date('Y-m-d', $p->ID)
            );
        }

        return rest_ensure_response(array('success' => true, 'jobs' => $jobs));
    }

    public function api_submit_application($request) {
        $params = $request->get_params();

        $name       = sanitize_text_field(isset($params['name']) ? $params['name'] : '');
        $email      = sanitize_email(isset($params['email']) ? $params['email'] : '');
        $phone      = sanitize_text_field(isset($params['phone']) ? $params['phone'] : '');
        $location   = sanitize_text_field(isset($params['location']) ? $params['location'] : '');
        $experience = sanitize_text_field(isset($params['experience']) ? $params['experience'] : '');
        $job_id     = sanitize_text_field(isset($params['job_id']) ? $params['job_id'] : 'general');
        $job_title  = sanitize_text_field(isset($params['job_title']) ? $params['job_title'] : 'General Position');
        $linkedin   = esc_url_raw(isset($params['linkedin']) ? $params['linkedin'] : '');
        $portfolio  = esc_url_raw(isset($params['portfolio']) ? $params['portfolio'] : '');
        $cover      = sanitize_textarea_field(isset($params['cover_letter']) ? $params['cover_letter'] : '');

        if (empty($name) || empty($email) || empty($phone) || empty($experience)) {
            return new WP_Error('missing_fields', 'Please fill in all required fields.', array('status' => 400));
        }

        // Handle Resume Upload
        $resume_url = '';
        $files = $request->get_file_params();
        if (!empty($files['resume']) && !empty($files['resume']['name'])) {
            require_once(ABSPATH . 'wp-admin/includes/file.php');
            require_once(ABSPATH . 'wp-admin/includes/image.php');
            require_once(ABSPATH . 'wp-admin/includes/media.php');

            $upload_overrides = array('test_form' => false);
            $moved_file = wp_handle_upload($files['resume'], $upload_overrides);

            if ($moved_file && !isset($moved_file['error'])) {
                $resume_url = $moved_file['url'];
            }
        }

        // Create Application Reference ID
        $ref_id = 'TA-APP-' . date('Ymd') . '-' . wp_rand(1000, 9999);

        // Insert Job Application post
        $post_id = wp_insert_post(array(
            'post_title'   => $name . ' – ' . $job_title,
            'post_type'    => 'job_application',
            'post_status'  => 'publish',
        ));

        if (is_wp_error($post_id)) {
            return new WP_Error('save_failed', 'Could not save application in database.', array('status' => 500));
        }

        // Save Meta
        update_post_meta($post_id, '_app_ref_id', $ref_id);
        update_post_meta($post_id, '_app_job_id', $job_id);
        update_post_meta($post_id, '_app_job_title', $job_title);
        update_post_meta($post_id, '_app_name', $name);
        update_post_meta($post_id, '_app_email', $email);
        update_post_meta($post_id, '_app_phone', $phone);
        update_post_meta($post_id, '_app_location', $location);
        update_post_meta($post_id, '_app_experience', $experience);
        update_post_meta($post_id, '_app_linkedin', $linkedin);
        update_post_meta($post_id, '_app_portfolio', $portfolio);
        update_post_meta($post_id, '_app_cover_letter', $cover);
        update_post_meta($post_id, '_app_resume_url', $resume_url);
        update_post_meta($post_id, '_app_status', 'New');

        // Email Notification to info@technoamaze.in
        $to = 'info@technoamaze.in';
        $subject = 'New Job Application – ' . $job_title . ' – ' . $name;
        $headers = array('Content-Type: text/html; charset=UTF-8', 'From: TechnoAmaze Careers <noreply@technoamaze.in>');
        $body = "<h2>New Career Application Received</h2>" .
                "<p><strong>Ref ID:</strong> {$ref_id}</p>" .
                "<p><strong>Position:</strong> {$job_title}</p>" .
                "<p><strong>Candidate Name:</strong> {$name}</p>" .
                "<p><strong>Email:</strong> {$email}</p>" .
                "<p><strong>Phone:</strong> {$phone}</p>" .
                "<p><strong>Location:</strong> {$location}</p>" .
                "<p><strong>Experience:</strong> {$experience}</p>" .
                "<p><strong>LinkedIn:</strong> {$linkedin}</p>" .
                "<p><strong>Portfolio:</strong> {$portfolio}</p>" .
                "<p><strong>Resume:</strong> <a href='{$resume_url}'>{$resume_url}</a></p>" .
                "<p><strong>Cover Letter:</strong><br>" . nl2br($cover) . "</p>";

        wp_mail($to, $subject, $body, $headers);

        return rest_ensure_response(array(
            'success'       => true,
            'message'       => 'Application Submitted Successfully',
            'refId'         => $ref_id,
            'jobTitle'      => $job_title,
            'candidateName' => $name
        ));
    }

    // -------------------------------------------------------------------------
    // 5. SEED INITIAL JOBS
    // -------------------------------------------------------------------------
    public function seed_initial_jobs() {
        $json_file = dirname(dirname(__DIR__)) . '/data/jobs.json';
        if (!file_exists($json_file)) return;

        $data = json_decode(file_get_contents($json_file), true);
        if (empty($data['jobs'])) return;

        foreach ($data['jobs'] as $job) {
            $existing = get_page_by_path($job['id'], OBJECT, 'job_posting');
            if ($existing) continue;

            $post_id = wp_insert_post(array(
                'post_name'    => $job['id'],
                'post_title'   => $job['title'],
                'post_content' => $job['description'],
                'post_type'    => 'job_posting',
                'post_status'  => 'publish'
            ));

            if (!is_wp_error($post_id)) {
                update_post_meta($post_id, '_job_department', $job['department'] ?? 'Engineering');
                update_post_meta($post_id, '_job_location', $job['location'] ?? 'Remote / Pune');
                update_post_meta($post_id, '_job_type', $job['employmentType'] ?? 'Full Time');
                update_post_meta($post_id, '_job_experience', $job['experience'] ?? '1–2 Years');
                update_post_meta($post_id, '_job_salary', $job['salary'] ?? '');
                update_post_meta($post_id, '_job_deadline', $job['deadline'] ?? '');
                update_post_meta($post_id, '_job_status', $job['status'] ?? 'open');
                update_post_meta($post_id, '_job_responsibilities', implode("\n", (array)($job['responsibilities'] ?? array())));
                update_post_meta($post_id, '_job_requirements', implode("\n", (array)($job['requirements'] ?? array())));
                update_post_meta($post_id, '_job_benefits', implode("\n", (array)($job['benefits'] ?? array())));
            }
        }
    }
}

new TechnoAmaze_Core();
