<?php
/**
 * Template Name: Application Success
 * Description: Custom template for Application Success page.
 *
 * @package TechnoAmaze
 * @version 1.0.0
 */

get_header();
?>


  <!-- APPLICATION SUCCESS MAIN CONTENT -->
  <main id="ta-success-root" class="ta-success-page">
    <div class="ta-success-inner">
      <div class="ta-success-card">

        <!-- Checkmark Badge -->
        <div class="ta-success-badge" aria-hidden="true">
          <i class="fa-solid fa-check"></i>
        </div>

        <h1 class="ta-success-title">Application Submitted Successfully</h1>
        <p class="ta-success-subtitle">
          Thank you for applying to Techno Amaze! We have safely received your profile, credentials, and resume. Our recruitment and technical squad is currently reviewing your details.
        </p>

        <!-- Application Confirmation Details Box -->
        <div class="ta-success-details-box">
          <div class="ta-success-detail-row">
            <span>Application Reference</span>
            <span id="ta-success-ref" style="font-family:monospace;letter-spacing:1px;color:var(--ta-accent);">TA-APP-LOADING</span>
          </div>
          <div class="ta-success-detail-row">
            <span>Applied Position</span>
            <span id="ta-success-job">—</span>
          </div>
          <div class="ta-success-detail-row">
            <span>Candidate Name</span>
            <span id="ta-success-name">—</span>
          </div>
          <div class="ta-success-detail-row">
            <span>Submission Time</span>
            <span id="ta-success-time">—</span>
          </div>
          <div class="ta-success-detail-row">
            <span>Recruiting Notification</span>
            <span style="color:#10b981;"><i class="fa-solid fa-circle-check" style="margin-right:4px;"></i> Dispatched to HR</span>
          </div>
        </div>

        <div style="background:rgba(200, 0, 110, 0.04);border:1px solid rgba(200, 0, 110, 0.15);border-radius:12px;padding:16px 20px;margin-bottom:28px;text-align:left;font-size:13.5px;line-height:1.6;color:var(--ta-muted);">
          <strong style="color:var(--ta-ink);display:block;margin-bottom:4px;"><i class="fa-solid fa-circle-info" style="color:var(--ta-accent);margin-right:6px;"></i> What happens next?</strong>
          Our hiring team reviews applications within 2 to 3 business days. If your profile matches our requirements, our recruiter will reach out via email or phone to schedule an introductory conversation.
        </div>

        <!-- Action Navigation Buttons -->
        <div class="ta-success-actions">
          <a href="<?php echo esc_url(home_url('/careers/')); ?>" class="ta-btn-apply" style="padding:14px 28px;font-size:14.5px;display:inline-flex;align-items:center;justify-content:center;gap:8px;">
            <i class="fa-solid fa-briefcase"></i> Back to Careers
          </a>
          <a href="<?php echo esc_url(home_url('/')); ?>" class="ta-btn-details" style="padding:14px 28px;font-size:14.5px;display:inline-flex;align-items:center;justify-content:center;gap:8px;">
            <i class="fa-solid fa-house"></i> Back to Home
          </a>
        </div>

      </div>
    </div>
  </main>

<?php
get_footer();
