<?php
/**
 * TechnoAmaze Corporate IT Theme - Header Template
 * Pixel-perfect integration of the master site navigation and responsiveness.
 *
 * @package TechnoAmaze
 * @version 1.0.0
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preconnect" href="https://cdnjs.cloudflare.com">
  <link rel="preconnect" href="https://images.unsplash.com">
  <link rel="dns-prefetch" href="https://fonts.googleapis.com">
  <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com">
  <link rel="dns-prefetch" href="https://images.unsplash.com">
  <script>
    (function() {
      var theme = localStorage.getItem('ta-theme') || localStorage.getItem('ta_theme') || 'light';
      document.documentElement.setAttribute('data-theme', theme);
    })();
  </script>
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

  <!-- TOPBAR -->
  <div id="ta-topbar">
    <div class="ta-topbar-inner">
      <div class="ta-topbar-left">
        <span class="ta-topbar-item">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11z" />
            <circle cx="12" cy="10" r="2.5" />
          </svg>
          Chh. Sambhajinagar, Maharashtra, India
        </span>
        <a href="mailto:info@technoamaze.in" class="ta-topbar-item">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 5h18v14H3z" />
            <path d="M3 6l9 7 9-7" />
          </svg>
          info@technoamaze.in
        </a>
      </div>
      <div class="ta-topbar-right">
        <p class="ta-topbar-hours">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="9" />
            <polyline points="12 7 12 12 15.5 15.5" />
          </svg>
          Mon-Fri 9:00-6:00 | Sat 10:00-4:00
        </p>
        <div class="ta-topbar-social">
          <a href="https://facebook.com/" aria-label="Facebook" target="_blank" rel="noopener"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="https://twitter.com/" aria-label="Twitter" target="_blank" rel="noopener"><i class="fa-brands fa-x-twitter"></i></a>
          <a href="https://linkedin.com/" aria-label="LinkedIn" target="_blank" rel="noopener"><i class="fa-brands fa-linkedin-in"></i></a>
          <a href="https://youtube.com/" aria-label="YouTube" target="_blank" rel="noopener"><i class="fa-brands fa-youtube"></i></a>
        </div>
      </div>
    </div>
  </div>

  <!-- HEADER -->
  <header id="ta-header">
    <div class="ta-nav-inner" id="ta-nav-inner">
      <a href="<?php echo esc_url(home_url('/')); ?>" class="ta-logo" aria-label="Techno Amaze home">
        <?php if (has_custom_logo()) : ?>
          <?php the_custom_logo(); ?>
        <?php else : ?>
          <img
            src="https://technoamaze.technoamaze.in/wp-content/uploads/2026/07/cropped-01-1-300x214-removebg-preview-1.png"
            alt="<?php bloginfo('name'); ?>"
            onerror="this.onerror=null;this.style.display='none';this.parentElement.insertAdjacentHTML('beforeend','<span style=&quot;font-family:Poppins,sans-serif;font-weight:900;font-size:22px;color:#C8006E&quot;>Techno<span style=&quot;color:#151726&quot;>Amaze</span></span>')">
        <?php endif; ?>
      </a>
      <nav aria-label="Primary navigation">
        <button class="ta-nav-close" id="ta-nav-close" aria-label="Close menu">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        <?php
          $ta_cur_id = get_queried_object_id();
          $ta_parent_id = wp_get_post_parent_id($ta_cur_id);
          $ta_uri = is_page() ? get_page_uri($ta_cur_id) : '';
        ?>
        <div class="ta-nav-menu-wrap">
          <ul class="ta-nav-menu" id="ta-primary-menu">
            <li><a href="<?php echo esc_url(home_url('/')); ?>" <?php if (is_front_page()) echo 'aria-current="page"'; ?>>Home</a></li>
            <li><a href="<?php echo esc_url(home_url('/about/')); ?>" <?php if (is_page('about')) echo 'aria-current="page"'; ?>>About</a></li>
            <li class="ta-has-dropdown">
              <a href="<?php echo esc_url(home_url('/services/')); ?>" <?php if (is_page('services') || $ta_parent_id == 8 || strpos($ta_uri, 'services') !== false) echo 'aria-current="page"'; ?>>Services <i class="fa-solid fa-chevron-down ta-dropdown-arrow"></i></a>
              <ul class="ta-dropdown-menu ta-dropdown-grid">
                <li><a href="<?php echo esc_url(home_url('/services/custom-software-development/')); ?>"><i class="fa-solid fa-code"></i> Custom Software Development</a></li>
                <li><a href="<?php echo esc_url(home_url('/services/website-development/')); ?>"><i class="fa-solid fa-globe"></i> Website Development</a></li>
                <li><a href="<?php echo esc_url(home_url('/services/mobile-app-development/')); ?>"><i class="fa-solid fa-mobile-screen"></i> Mobile App Development</a></li>
                <li><a href="<?php echo esc_url(home_url('/services/ecommerce-development/')); ?>"><i class="fa-solid fa-cart-shopping"></i> E-commerce Development</a></li>
                <li><a href="<?php echo esc_url(home_url('/services/saas-product-development/')); ?>"><i class="fa-solid fa-cloud-arrow-up"></i> SaaS Product Development</a></li>
                <li><a href="<?php echo esc_url(home_url('/services/erp-crm-development/')); ?>"><i class="fa-solid fa-sitemap"></i> ERP &amp; CRM Development</a></li>
                <li><a href="<?php echo esc_url(home_url('/services/ui-ux-design/')); ?>"><i class="fa-solid fa-pen-nib"></i> UI/UX Design</a></li>
                <li><a href="<?php echo esc_url(home_url('/services/api-development-integration/')); ?>"><i class="fa-solid fa-plug"></i> API Development &amp; Integration</a></li>
                <li><a href="<?php echo esc_url(home_url('/services/software-testing-qa/')); ?>"><i class="fa-solid fa-bug-slash"></i> Software Testing &amp; QA</a></li>
                <li><a href="<?php echo esc_url(home_url('/services/cloud-services/')); ?>"><i class="fa-solid fa-cloud"></i> Cloud Services</a></li>
                <li><a href="<?php echo esc_url(home_url('/services/devops-services/')); ?>"><i class="fa-solid fa-gears"></i> DevOps Services</a></li>
                <li><a href="<?php echo esc_url(home_url('/services/cybersecurity-services/')); ?>"><i class="fa-solid fa-shield-halved"></i> Cybersecurity Services</a></li>
                <li><a href="<?php echo esc_url(home_url('/services/data-analytics/')); ?>"><i class="fa-solid fa-chart-bar"></i> Data Analytics &amp; BI</a></li>
                <li><a href="<?php echo esc_url(home_url('/services/ai-machine-learning/')); ?>"><i class="fa-solid fa-brain"></i> AI &amp; Machine Learning</a></li>
                <li><a href="<?php echo esc_url(home_url('/services/software-maintenance-support/')); ?>"><i class="fa-solid fa-screwdriver-wrench"></i> Software Maintenance</a></li>
                <li><a href="<?php echo esc_url(home_url('/services/it-consulting/')); ?>"><i class="fa-solid fa-lightbulb"></i> IT Consulting</a></li>
                <li><a href="<?php echo esc_url(home_url('/services/digital-marketing/')); ?>"><i class="fa-solid fa-chart-line"></i> Digital Marketing</a></li>
                <li><a href="<?php echo esc_url(home_url('/services/search-engine-optimization/')); ?>"><i class="fa-solid fa-magnifying-glass-chart"></i> Search Engine Optimization</a></li>
                <li><a href="<?php echo esc_url(home_url('/services/social-media-marketing/')); ?>"><i class="fa-brands fa-instagram"></i> Social Media Marketing</a></li>
                <li><a href="<?php echo esc_url(home_url('/services/google-meta-ads/')); ?>"><i class="fa-brands fa-google"></i> Google &amp; Meta Ads</a></li>
                <li><a href="<?php echo esc_url(home_url('/services/content-marketing/')); ?>"><i class="fa-solid fa-file-lines"></i> Content Marketing</a></li>
                <li><a href="<?php echo esc_url(home_url('/services/email-marketing/')); ?>"><i class="fa-solid fa-envelope-open-text"></i> Email Marketing</a></li>
                <li><a href="<?php echo esc_url(home_url('/services/lead-generation/')); ?>"><i class="fa-solid fa-user-plus"></i> Lead Generation</a></li>
                <li><a href="<?php echo esc_url(home_url('/services/online-reputation-management/')); ?>"><i class="fa-solid fa-star-half-stroke"></i> Online Reputation Mgmt</a></li>
                <li><a href="<?php echo esc_url(home_url('/services/graphic-design-branding/')); ?>"><i class="fa-solid fa-palette"></i> Graphic Design &amp; Branding</a></li>
                <li class="ta-dropdown-full"><a href="<?php echo esc_url(home_url('/services/')); ?>" style="font-weight:700;color:var(--ta-accent);border-top:1px solid var(--ta-border);margin-top:4px;padding-top:10px;"><i class="fa-solid fa-arrow-right"></i> View All 25 Services Overview</a></li>
              </ul>
            </li>
            <li class="ta-has-dropdown">
              <a href="<?php echo esc_url(home_url('/industries/')); ?>" <?php if (is_page('industries') || $ta_parent_id == 9 || strpos($ta_uri, 'industries') !== false) echo 'aria-current="page"'; ?>>Industries <i class="fa-solid fa-chevron-down ta-dropdown-arrow"></i></a>
              <ul class="ta-dropdown-menu">
                <li><a href="<?php echo esc_url(home_url('/industries/healthcare/')); ?>"><i class="fa-solid fa-stethoscope"></i> Healthcare &amp; MedTech</a></li>
                <li><a href="<?php echo esc_url(home_url('/industries/fintech/')); ?>"><i class="fa-solid fa-landmark"></i> FinTech &amp; Banking</a></li>
                <li><a href="<?php echo esc_url(home_url('/industries/ecommerce/')); ?>"><i class="fa-solid fa-cart-shopping"></i> E-Commerce &amp; Retail</a></li>
                <li><a href="<?php echo esc_url(home_url('/industries/edtech/')); ?>"><i class="fa-solid fa-graduation-cap"></i> Education &amp; EdTech</a></li>
                <li><a href="<?php echo esc_url(home_url('/industries/manufacturing/')); ?>"><i class="fa-solid fa-industry"></i> Manufacturing &amp; IoT</a></li>
                <li><a href="<?php echo esc_url(home_url('/industries/realestate/')); ?>"><i class="fa-solid fa-building"></i> Real Estate &amp; PropTech</a></li>
                <li><a href="<?php echo esc_url(home_url('/industries/gaming/')); ?>"><i class="fa-solid fa-gamepad"></i> Gaming &amp; Entertainment</a></li>
                <li><a href="<?php echo esc_url(home_url('/industries/logistics/')); ?>"><i class="fa-solid fa-truck-fast"></i> Logistics &amp; Supply Chain</a></li>
                <li><a href="<?php echo esc_url(home_url('/industries/travel/')); ?>"><i class="fa-solid fa-plane"></i> Travel &amp; Hospitality</a></li>
                <li><a href="<?php echo esc_url(home_url('/industries/legal/')); ?>"><i class="fa-solid fa-scale-balanced"></i> Legal &amp; Compliance</a></li>
              </ul>
            </li>
            <li><a href="<?php echo esc_url(home_url('/products/')); ?>" <?php if (is_page('products') || strpos($ta_uri, 'products') !== false) echo 'aria-current="page"'; ?>>Products</a></li>
            <li><a href="<?php echo esc_url(home_url('/blogs/')); ?>" <?php if (is_page('blogs') || is_singular('post') || is_home() || is_category() || is_tag()) echo 'aria-current="page"'; ?>>Blogs</a></li>
            <li><a href="<?php echo esc_url(home_url('/careers/')); ?>" <?php if (is_page(array('careers', 'job-details', 'apply', 'application-success')) || is_singular('job_posting') || is_post_type_archive('job_posting')) echo 'aria-current="page"'; ?>>Careers</a></li>
            <li><a href="<?php echo esc_url(home_url('/contact/')); ?>" <?php if (is_page('contact')) echo 'aria-current="page"'; ?>>Contact</a></li>
          </ul>
        </div>
      </nav>
      <div class="ta-nav-actions">
        <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="ta-btn-cta">Get Solution</a>
        <button class="ta-search-toggle" id="ta-search-toggle" aria-label="Search" aria-expanded="false" aria-controls="ta-search-panel">
          <svg class="icon-search" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <svg class="icon-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        <span class="ta-nav-divider" aria-hidden="true"></span>
      </div>
      <button class="ta-menu-toggle" id="ta-menu-toggle" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
      <div class="ta-call-block">
        <span class="ta-call-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.8 21 3 13.2 3 3c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
          </svg>
        </span>
        <span class="ta-call-text">
          <p>Call Anytime</p>
          <a href="tel:+917020995651">+91 70209 95651</a>
        </span>
      </div>
    </div>
    <div class="ta-nav-overlay" id="ta-nav-overlay"></div>
    <div class="ta-search-panel" id="ta-search-panel">
      <div class="ta-search-panel-inner">
        <form class="ta-search-form" role="search" method="get" action="<?php echo esc_url(home_url('/')); ?>">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <input type="text" id="ta-search-input" name="s" placeholder="Search for products, services..." value="<?php echo get_search_query(); ?>">
          <button type="submit" class="ta-search-submit">Search</button>
        </form>
      </div>
    </div>
  </header>
