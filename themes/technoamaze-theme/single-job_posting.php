<?php
/**
 * TechnoAmaze Corporate IT Theme - Single Job Posting Template
 *
 * @package TechnoAmaze
 * @version 1.0.0
 */

get_header();

while (have_posts()) : the_post();
    $post_id     = get_the_ID();
    $dept        = html_entity_decode(get_post_meta($post_id, '_job_department', true) ?: 'Engineering', ENT_QUOTES | ENT_HTML5, 'UTF-8');
    $location    = html_entity_decode(get_post_meta($post_id, '_job_location', true) ?: 'Remote / Pune', ENT_QUOTES | ENT_HTML5, 'UTF-8');
    $type        = html_entity_decode(get_post_meta($post_id, '_job_type', true) ?: 'Full Time', ENT_QUOTES | ENT_HTML5, 'UTF-8');
    $exp         = html_entity_decode(get_post_meta($post_id, '_job_experience', true) ?: '1–2 Years', ENT_QUOTES | ENT_HTML5, 'UTF-8');
    $salary      = get_post_meta($post_id, '_job_salary', true);
    $deadline    = get_post_meta($post_id, '_job_deadline', true);
    $status      = get_post_meta($post_id, '_job_status', true) ?: 'open';
    $resp        = array_filter(array_map('trim', explode("\n", get_post_meta($post_id, '_job_responsibilities', true))));
    $reqs        = array_filter(array_map('trim', explode("\n", get_post_meta($post_id, '_job_requirements', true))));
    $benefits    = array_filter(array_map('trim', explode("\n", get_post_meta($post_id, '_job_benefits', true))));

    $is_closed   = ($status === 'closed');
    if (!empty($deadline) && strtotime($deadline) < strtotime('today')) {
        $is_closed = true;
    }
    $job_title   = wp_specialchars_decode(get_the_title(), ENT_QUOTES);
    $apply_url   = esc_url(home_url('/apply/?job=' . get_post_field('post_name', $post_id)));
    $current_url = esc_url(get_permalink());
?>

  <!-- BREADCRUMB / HERO BANNER -->
  <section class="ta-careers-hero ta-jd-hero" style="background:linear-gradient(180deg, var(--ta-surface) 0%, rgba(200, 0, 110, 0.04) 100%);padding:clamp(44px, 6vw, 70px) 0 clamp(32px, 4vw, 50px);border-bottom:1px solid var(--ta-border);text-align:center;">
    <div class="ta-careers-hero-inner ta-jd-hero-inner" style="max-width:860px;margin:0 auto;padding:0 20px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;">
      <nav class="ta-breadcrumb ta-careers-breadcrumb" aria-label="Breadcrumb" style="display:inline-flex;align-items:center;justify-content:center;gap:8px;font-size:13.5px;color:var(--ta-muted);margin:0 auto 16px;text-align:center;flex-wrap:wrap;">
        <a href="<?php echo esc_url(home_url('/')); ?>" style="color:var(--ta-muted);text-decoration:none;"><i class="fa-solid fa-house" style="margin-right:4px;"></i> Home</a>
        <i class="fa-solid fa-chevron-right ta-breadcrumb-sep" style="font-size:10px;opacity:0.6;"></i>
        <a href="<?php echo esc_url(home_url('/careers/')); ?>" style="color:var(--ta-muted);text-decoration:none;">Careers</a>
        <i class="fa-solid fa-chevron-right ta-breadcrumb-sep" style="font-size:10px;opacity:0.6;"></i>
        <span class="ta-breadcrumb-current" style="color:var(--ta-accent);font-weight:600;"><?php echo esc_html($job_title); ?></span>
      </nav>
      <h1 class="ta-careers-hero-title ta-jd-hero-title" style="font-family:var(--ta-font-head);font-size:clamp(24px, 3.6vw, 38px);font-weight:800;line-height:1.25;color:var(--ta-ink);margin:0 auto 12px;text-align:center;width:100%;">
        Career Opportunity at Techno Amaze
      </h1>
      <p class="ta-careers-hero-desc ta-jd-hero-desc" style="max-width:640px;margin:0 auto;font-size:clamp(14.5px, 1.15vw, 16.5px);line-height:1.65;color:var(--ta-muted);text-align:center;width:100%;">
        Review role specifications, requirements, and submit your application online.
      </p>
    </div>
  </section>

  <!-- JOB DETAILS CONTAINER ROOT -->
  <main id="main-content" class="ta-job-details-page">
    <div class="ta-job-details-inner">

      <!-- Status Notification Alert (Closed / Deadline Expired) -->
      <?php if ($is_closed): ?>
        <div class="ta-alert-danger" style="margin-bottom:24px;">
          <i class="fa-solid fa-triangle-exclamation"></i>
          <div><strong>Position Closed:</strong> This job opening has been filled or temporarily closed. You can explore other active positions on our Careers page.</div>
        </div>
      <?php endif; ?>

      <!-- JOB HEADER CARD -->
      <div class="ta-job-details-header">
        <div class="ta-job-header-top">
          <span class="ta-job-tag ta-job-tag--dept"><?php echo esc_html($dept); ?></span>
          <?php if ($is_closed): ?>
            <span class="ta-job-tag ta-job-tag--status-closed"><i class="fa-solid fa-circle-exclamation"></i> Closed</span>
          <?php else: ?>
            <span class="ta-job-tag ta-job-tag--status-open"><i class="fa-solid fa-circle-check"></i> Actively Hiring</span>
          <?php endif; ?>
        </div>

        <h2 class="ta-job-details-title"><?php echo esc_html($job_title); ?></h2>

        <div class="ta-job-meta-list">
          <div class="ta-job-meta-item">
            <i class="fa-solid fa-location-dot"></i> <span><?php echo esc_html($location); ?></span>
          </div>
          <div class="ta-job-meta-item">
            <i class="fa-solid fa-briefcase"></i> <span><?php echo esc_html($type); ?></span>
          </div>
          <div class="ta-job-meta-item">
            <i class="fa-solid fa-user-graduate"></i> <span><?php echo esc_html($exp); ?></span>
          </div>
          <?php if (!empty($salary)): ?>
            <div class="ta-job-meta-item">
              <i class="fa-solid fa-indian-rupee-sign"></i> <span><?php echo esc_html($salary); ?></span>
            </div>
          <?php else: ?>
            <div class="ta-job-meta-item">
              <i class="fa-solid fa-indian-rupee-sign"></i> <span>Competitive</span>
            </div>
          <?php endif; ?>
          <?php if (!empty($deadline)): ?>
            <div class="ta-job-meta-item">
              <i class="fa-regular fa-clock"></i> Apply by <span><?php echo esc_html($deadline); ?></span>
            </div>
          <?php else: ?>
            <div class="ta-job-meta-item">
              <i class="fa-regular fa-clock"></i> Apply by <span>Rolling</span>
            </div>
          <?php endif; ?>
        </div>

        <div class="ta-job-header-actions">
          <?php if ($is_closed): ?>
            <button class="ta-btn-apply disabled" disabled style="opacity:0.6;cursor:not-allowed;">Position Closed</button>
          <?php else: ?>
            <a href="<?php echo $apply_url; ?>" class="ta-btn-apply">
              Apply Now <i class="fa-solid fa-arrow-right" style="margin-left:8px;"></i>
            </a>
          <?php endif; ?>
          <a href="<?php echo esc_url(home_url('/careers/')); ?>" class="ta-btn-details">
            <i class="fa-solid fa-arrow-left" style="margin-right:8px;"></i> Back to Careers
          </a>
        </div>
      </div>

      <!-- TWO COLUMN DETAILS GRID -->
      <div class="ta-job-details-grid">

        <!-- MAIN CONTENT (LEFT) -->
        <div class="ta-job-main-content">

          <!-- Card 1: Role Overview -->
          <article class="ta-job-content-card">
            <h2 class="ta-job-content-title">
              <i class="fa-solid fa-file-lines"></i> Role Overview
            </h2>
            <div style="line-height:1.75;font-size:15px;color:var(--ta-ink);opacity:0.9;">
              <?php the_content(); ?>
            </div>
          </article>

          <!-- Card 2: Responsibilities -->
          <?php if (!empty($resp)): ?>
            <article class="ta-job-content-card">
              <h2 class="ta-job-content-title">
                <i class="fa-solid fa-list-check"></i> Key Responsibilities
              </h2>
              <ul class="ta-job-checklist">
                <?php foreach ($resp as $r): ?>
                  <li>
                    <i class="fa-solid fa-circle-check"></i>
                    <span><?php echo esc_html($r); ?></span>
                  </li>
                <?php endforeach; ?>
              </ul>
            </article>
          <?php endif; ?>

          <!-- Card 3: Requirements & Skills -->
          <?php if (!empty($reqs)): ?>
            <article class="ta-job-content-card">
              <h2 class="ta-job-content-title">
                <i class="fa-solid fa-circle-check"></i> Required Qualifications &amp; Skills
              </h2>
              <ul class="ta-job-checklist">
                <?php foreach ($reqs as $rq): ?>
                  <li>
                    <i class="fa-solid fa-circle-dot"></i>
                    <span><?php echo esc_html($rq); ?></span>
                  </li>
                <?php endforeach; ?>
              </ul>
            </article>
          <?php endif; ?>

          <!-- Card 4: Perks & Benefits -->
          <?php if (!empty($benefits)): ?>
            <article class="ta-job-content-card">
              <h2 class="ta-job-content-title">
                <i class="fa-solid fa-gift"></i> What We Offer
              </h2>
              <ul class="ta-job-checklist">
                <?php foreach ($benefits as $b): ?>
                  <li>
                    <i class="fa-solid fa-star"></i>
                    <span><?php echo esc_html($b); ?></span>
                  </li>
                <?php endforeach; ?>
              </ul>
            </article>
          <?php endif; ?>

        </div>

        <!-- SIDEBAR (RIGHT) -->
        <aside class="ta-job-sidebar">

          <!-- Summary Table Card -->
          <div class="ta-job-sidebar-card">
            <h3 class="ta-sidebar-title">
              <i class="fa-solid fa-briefcase" style="color:var(--ta-accent);margin-right:6px;"></i> Job Overview
            </h3>
            <div class="ta-overview-table">
              <div class="ta-overview-row">
                <span class="ta-overview-label"><i class="fa-solid fa-sitemap"></i> Department</span>
                <span class="ta-overview-val"><?php echo esc_html($dept); ?></span>
              </div>
              <div class="ta-overview-row">
                <span class="ta-overview-label"><i class="fa-solid fa-location-dot"></i> Location</span>
                <span class="ta-overview-val"><?php echo esc_html($location); ?></span>
              </div>
              <div class="ta-overview-row">
                <span class="ta-overview-label"><i class="fa-solid fa-business-time"></i> Job Type</span>
                <span class="ta-overview-val"><?php echo esc_html($type); ?></span>
              </div>
              <div class="ta-overview-row">
                <span class="ta-overview-label"><i class="fa-solid fa-user-graduate"></i> Experience</span>
                <span class="ta-overview-val"><?php echo esc_html($exp); ?></span>
              </div>
              <div class="ta-overview-row">
                <span class="ta-overview-label"><i class="fa-solid fa-indian-rupee-sign"></i> Compensation</span>
                <span class="ta-overview-val"><?php echo !empty($salary) ? esc_html($salary) : 'Best in Industry'; ?></span>
              </div>
              <div class="ta-overview-row">
                <span class="ta-overview-label"><i class="fa-regular fa-calendar-check"></i> Deadline</span>
                <span class="ta-overview-val"><?php echo !empty($deadline) ? esc_html($deadline) : 'Open until filled'; ?></span>
              </div>
              <div class="ta-overview-row">
                <span class="ta-overview-label"><i class="fa-regular fa-clock"></i> Posted</span>
                <span class="ta-overview-val"><?php echo esc_html(get_the_date('Y-m-d')); ?></span>
              </div>
            </div>
            <div class="ta-sidebar-actions">
              <?php if (!$is_closed): ?>
                <a href="<?php echo $apply_url; ?>" class="ta-btn-apply" style="display:block;text-align:center;padding:12px;font-size:14.5px;">
                  Apply for this Position
                </a>
              <?php endif; ?>
            </div>
          </div>

          <!-- Share Card -->
          <div class="ta-job-sidebar-card">
            <h3 class="ta-sidebar-title">
              <i class="fa-solid fa-share-nodes" style="color:var(--ta-accent);margin-right:6px;"></i> Share Opportunity
            </h3>
            <p style="font-size:13px;color:var(--ta-muted);margin-bottom:12px;line-height:1.5;">
              Know someone who would thrive in this role? Share this position with your network:
            </p>
            <div class="ta-share-links">
              <a href="https://www.linkedin.com/sharing/share-offsite/?url=<?php echo urlencode($current_url); ?>" class="ta-share-btn" target="_blank" rel="noopener" aria-label="Share on LinkedIn">
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://twitter.com/intent/tweet?url=<?php echo urlencode($current_url); ?>&text=<?php echo urlencode('Career Opportunity: ' . $job_title); ?>" class="ta-share-btn" target="_blank" rel="noopener" aria-label="Share on X">
                <i class="fa-brands fa-x-twitter"></i>
              </a>
              <a href="https://api.whatsapp.com/send?text=<?php echo urlencode($job_title . ' at Techno Amaze: ' . $current_url); ?>" class="ta-share-btn" target="_blank" rel="noopener" aria-label="Share on WhatsApp">
                <i class="fa-brands fa-whatsapp"></i>
              </a>
              <button type="button" class="ta-share-btn" onclick="navigator.clipboard.writeText(window.location.href);alert('Job link copied to clipboard!');" aria-label="Copy Job URL" title="Copy link to clipboard">
                <i class="fa-solid fa-link"></i>
              </button>
            </div>
          </div>

          <!-- Equal Opportunity Card -->
          <div class="ta-job-sidebar-card" style="background:var(--ta-surface);">
            <h4 style="font-size:15px;font-weight:700;margin-bottom:8px;color:var(--ta-ink);display:flex;align-items:center;gap:8px;">
              <i class="fa-solid fa-shield-halved" style="color:var(--ta-accent);"></i> Equal Opportunity
            </h4>
            <p style="font-size:13px;color:var(--ta-muted);line-height:1.6;margin:0;">
              Techno Amaze is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive, empowering environment for all innovators.
            </p>
          </div>

        </aside>

      </div>

      <!-- BOTTOM CALL TO ACTION -->
      <div class="ta-careers-resume-cta">
        <div class="ta-resume-cta-text">
          <h4>Ready to shape future software innovations?</h4>
          <p>Our recruitment team reviews every profile with diligence and will be in touch shortly.</p>
        </div>
        <?php if (!$is_closed): ?>
          <a href="<?php echo $apply_url; ?>" class="ta-btn-apply" style="padding:14px 28px;font-size:15px;">
            Apply Now <i class="fa-solid fa-arrow-right" style="margin-left:6px;"></i>
          </a>
        <?php endif; ?>
      </div>

    </div>
  </main>

<?php
endwhile;

get_footer();
