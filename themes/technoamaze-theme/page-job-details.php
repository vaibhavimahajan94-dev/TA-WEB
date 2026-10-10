<?php
/**
 * Template Name: Job Details
 * Description: Custom template for Job Details page.
 *
 * @package TechnoAmaze
 * @version 1.0.0
 */

get_header();
?>


  <!-- BREADCRUMB / HERO BANNER -->
  <section class="ta-careers-hero ta-jd-hero" style="background:linear-gradient(180deg, var(--ta-surface) 0%, rgba(200, 0, 110, 0.04) 100%);padding:clamp(44px, 6vw, 70px) 0 clamp(32px, 4vw, 50px);border-bottom:1px solid var(--ta-border);text-align:center;">
    <div class="ta-careers-hero-inner ta-jd-hero-inner" style="max-width:860px;margin:0 auto;padding:0 20px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;">
      <nav class="ta-breadcrumb ta-careers-breadcrumb" aria-label="Breadcrumb" style="display:inline-flex;align-items:center;justify-content:center;gap:8px;font-size:13.5px;color:var(--ta-muted);margin:0 auto 16px;text-align:center;flex-wrap:wrap;">
        <a href="<?php echo esc_url(home_url('/')); ?>" style="color:var(--ta-muted);text-decoration:none;"><i class="fa-solid fa-house" style="margin-right:4px;"></i> Home</a>
        <i class="fa-solid fa-chevron-right ta-breadcrumb-sep" style="font-size:10px;opacity:0.6;"></i>
        <a href="<?php echo esc_url(home_url('/careers/')); ?>" style="color:var(--ta-muted);text-decoration:none;">Careers</a>
        <i class="fa-solid fa-chevron-right ta-breadcrumb-sep" style="font-size:10px;opacity:0.6;"></i>
        <span id="ta-bc-job-title" class="ta-breadcrumb-current" style="color:var(--ta-accent);font-weight:600;">Job Opening</span>
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
  <main id="ta-job-details-root" class="ta-job-details-page">
    <div class="ta-job-details-inner">

      <!-- JOB NOT FOUND STATE -->
      <div id="ta-job-not-found" class="ta-jobs-empty" style="display:none;margin:30px 0 60px;">
        <div class="ta-jobs-empty-icon">
          <i class="fa-solid fa-magnifying-glass-chart"></i>
        </div>
        <h2 class="ta-jobs-empty-title">Job Position Not Found</h2>
        <p class="ta-jobs-empty-text">
          The position you are looking for may have been filled, removed, or the link may be outdated. Please explore our active vacancies on the Careers page.
        </p>
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
          <a href="<?php echo esc_url(home_url('/careers/')); ?>" class="ta-btn-apply" style="display:inline-flex;align-items:center;padding:12px 24px;">
            <i class="fa-solid fa-briefcase" style="margin-right:8px;"></i> View All Openings
          </a>
          <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="ta-btn-details" style="display:inline-flex;align-items:center;padding:12px 24px;">
            <i class="fa-solid fa-envelope" style="margin-right:8px;"></i> Contact Recruiting
          </a>
        </div>
      </div>

      <!-- JOB CONTENT WRAP -->
      <div id="ta-job-content-wrap">

        <!-- Status Notification Alert (Closed / Deadline Expired) -->
        <div id="ta-job-status-alert" style="display:none;"></div>

        <!-- JOB HEADER CARD -->
        <div class="ta-job-details-header">
          <div class="ta-job-header-top">
            <span id="ta-detail-dept" class="ta-job-tag ta-job-tag--dept">Department</span>
            <span id="ta-detail-status-tag" class="ta-job-tag ta-job-tag--status-open">
              <i class="fa-solid fa-circle-check"></i> Actively Hiring
            </span>
          </div>

          <h2 id="ta-detail-title" class="ta-job-details-title">Loading Job Title...</h2>

          <div class="ta-job-meta-list">
            <div class="ta-job-meta-item">
              <i class="fa-solid fa-location-dot"></i> <span id="ta-detail-location">Location</span>
            </div>
            <div class="ta-job-meta-item">
              <i class="fa-solid fa-briefcase"></i> <span id="ta-detail-type">Employment Type</span>
            </div>
            <div class="ta-job-meta-item">
              <i class="fa-solid fa-user-graduate"></i> <span id="ta-detail-exp">Experience</span>
            </div>
            <div class="ta-job-meta-item">
              <i class="fa-solid fa-indian-rupee-sign"></i> <span id="ta-detail-salary">Competitive</span>
            </div>
            <div class="ta-job-meta-item">
              <i class="fa-regular fa-clock"></i> Apply by <span id="ta-detail-deadline">Rolling</span>
            </div>
          </div>

          <div class="ta-job-header-actions">
            <a href="#" class="ta-trigger-apply-btn ta-btn-apply">
              Apply Now <i class="fa-solid fa-arrow-right" style="margin-left:8px;"></i>
            </a>
            <a href="<?php echo esc_url(home_url('/careers/')); ?>" class="ta-btn-details">
              <i class="fa-solid fa-arrow-left" style="margin-right:8px;"></i> Back to Careers
            </a>
          </div>
        </div>

        <!-- TWO COLUMN DETAILS GRID -->
        <div class="ta-job-details-grid">

          <!-- MAIN CONTENT (LEFT) -->
          <div class="ta-job-main-content">

            <!-- Card 1: Description -->
            <article class="ta-job-content-card">
              <h2 class="ta-job-content-title">
                <i class="fa-solid fa-file-lines"></i> Role Overview
              </h2>
              <p id="ta-detail-desc" style="white-space:pre-line;">
                Loading role overview...
              </p>
            </article>

            <!-- Card 2: Responsibilities -->
            <article id="ta-detail-responsibilities-wrap" class="ta-job-content-card">
              <h2 class="ta-job-content-title">
                <i class="fa-solid fa-list-check"></i> Key Responsibilities
              </h2>
              <ul id="ta-detail-responsibilities" class="ta-job-checklist"></ul>
            </article>

            <!-- Card 3: Requirements & Skills -->
            <article id="ta-detail-requirements-wrap" class="ta-job-content-card">
              <h2 class="ta-job-content-title">
                <i class="fa-solid fa-circle-check"></i> Required Qualifications &amp; Skills
              </h2>
              <ul id="ta-detail-requirements" class="ta-job-checklist"></ul>
            </article>

            <!-- Card 4: Preferred Qualifications -->
            <article id="ta-detail-preferred-wrap" class="ta-job-content-card">
              <h2 class="ta-job-content-title">
                <i class="fa-solid fa-star"></i> Preferred Qualifications
              </h2>
              <ul id="ta-detail-preferred" class="ta-job-checklist"></ul>
            </article>

            <!-- Card 5: Perks & Benefits -->
            <article id="ta-detail-benefits-wrap" class="ta-job-content-card">
              <h2 class="ta-job-content-title">
                <i class="fa-solid fa-gift"></i> What We Offer
              </h2>
              <ul id="ta-detail-benefits" class="ta-job-checklist"></ul>
            </article>

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
                  <span id="ta-sb-dept" class="ta-overview-val">—</span>
                </div>
                <div class="ta-overview-row">
                  <span class="ta-overview-label"><i class="fa-solid fa-location-dot"></i> Location</span>
                  <span id="ta-sb-loc" class="ta-overview-val">—</span>
                </div>
                <div class="ta-overview-row">
                  <span class="ta-overview-label"><i class="fa-solid fa-business-time"></i> Job Type</span>
                  <span id="ta-sb-type" class="ta-overview-val">—</span>
                </div>
                <div class="ta-overview-row">
                  <span class="ta-overview-label"><i class="fa-solid fa-user-graduate"></i> Experience</span>
                  <span id="ta-sb-exp" class="ta-overview-val">—</span>
                </div>
                <div class="ta-overview-row">
                  <span class="ta-overview-label"><i class="fa-solid fa-indian-rupee-sign"></i> Compensation</span>
                  <span id="ta-sb-sal" class="ta-overview-val">—</span>
                </div>
                <div class="ta-overview-row">
                  <span class="ta-overview-label"><i class="fa-regular fa-calendar-check"></i> Deadline</span>
                  <span id="ta-sb-dead" class="ta-overview-val">—</span>
                </div>
                <div class="ta-overview-row">
                  <span class="ta-overview-label"><i class="fa-regular fa-clock"></i> Posted</span>
                  <span id="ta-sb-date" class="ta-overview-val">—</span>
                </div>
              </div>
              <div class="ta-sidebar-actions">
                <a href="#" class="ta-trigger-apply-btn ta-btn-apply" style="display:block;text-align:center;padding:12px;font-size:14.5px;">
                  Apply for this Position
                </a>
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
                <a id="ta-share-linkedin" class="ta-share-btn" target="_blank" rel="noopener" aria-label="Share on LinkedIn">
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
                <a id="ta-share-twitter" class="ta-share-btn" target="_blank" rel="noopener" aria-label="Share on X">
                  <i class="fa-brands fa-x-twitter"></i>
                </a>
                <a id="ta-share-whatsapp" class="ta-share-btn" target="_blank" rel="noopener" aria-label="Share on WhatsApp">
                  <i class="fa-brands fa-whatsapp"></i>
                </a>
                <button type="button" id="ta-share-copy" class="ta-share-btn" aria-label="Copy Job URL" title="Copy link to clipboard">
                  <i class="fa-solid fa-link"></i>
                </button>
              </div>
            </div>

            <!-- Hiring Process Info Card -->
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
          <a href="#" class="ta-trigger-apply-btn ta-btn-apply" style="padding:14px 28px;font-size:15px;">
            Apply Now <i class="fa-solid fa-arrow-right" style="margin-left:6px;"></i>
          </a>
        </div>

      </div>

    </div>
  </main>

<?php
get_footer();
