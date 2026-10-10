<?php
/**
 * Template Name: Services
 * Description: Custom template for Services page.
 *
 * @package TechnoAmaze
 * @version 1.0.0
 */

get_header();
?>


  <!-- ══════════════════════════ HERO ══════════════════════════ -->
  <section id="svp-hero" aria-labelledby="svp-hero-title">
    <!-- Background -->
    <div class="svp-hero-bg">
      <img class="svp-hero-bg-img"
        src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80"
        alt="">
      <div class="svp-hero-overlay"></div>
    </div>

    <!-- Animated elements -->
    <div class="svp-hero-grid"></div>
    <div class="svp-hero-orb svp-hero-orb--1"></div>
    <div class="svp-hero-orb svp-hero-orb--2"></div>
    <div class="svp-hero-particles" id="svp-hero-particles"></div>

    <!-- Content -->
    <div class="svp-hero-inner">
      <!-- Left -->
      <div class="svp-hero-left">
        <nav class="svp-breadcrumb" aria-label="Breadcrumb">
          <a href="<?php echo esc_url(home_url('/')); ?>">Home</a>
          <span class="sep"><i class="fa-solid fa-chevron-right"></i></span>
          <span aria-current="page">Services</span>
        </nav>

        <h1 class="svp-hero-heading" id="svp-hero-title">
          <span class="svp-hl"><span>Premium</span></span>
          <span class="svp-hl"><span class="accent-word">IT &amp;</span></span>
          <span class="svp-hl"><span>Digital Services</span></span>
          <em>Tailored For Your Success</em>
        </h1>

        <p class="svp-hero-desc">
          From custom software and cloud infrastructure to AI automation and digital marketing — Techno Amaze delivers
          <strong style="color:#fff;font-weight:700;">25+ specialized services</strong> designed to accelerate your business
          growth and digital transformation.
        </p>

        <div class="svp-hero-ctas">
          <a href="#svp-services-main" class="svp-btn-primary" id="svp-explore-btn">
            Explore All Services <i class="fa-solid fa-arrow-down"></i>
          </a>
          <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="svp-btn-outline">
            <i class="fa-solid fa-phone"></i> Talk to an Expert
          </a>
        </div>
      </div>

      <!-- Right — floating stat cards -->
      <div class="svp-hero-right" aria-hidden="true">
        <div class="svp-float-card">
          <div class="svp-float-card-icon"><i class="fa-solid fa-code"></i></div>
          <div class="svp-float-card-info">
            <strong>25+</strong>
            <span>Digital Services</span>
          </div>
          <div class="svp-float-card-badge">Full-Stack</div>
        </div>
        <div class="svp-float-card">
          <div class="svp-float-card-icon"><i class="fa-solid fa-trophy"></i></div>
          <div class="svp-float-card-info">
            <strong>500+</strong>
            <span>Projects Delivered</span>
          </div>
          <div class="svp-float-card-badge">Worldwide</div>
        </div>
        <div class="svp-float-card">
          <div class="svp-float-card-icon"><i class="fa-solid fa-star"></i></div>
          <div class="svp-float-card-info">
            <strong>4.9 / 5</strong>
            <span>Client Satisfaction</span>
          </div>
          <div class="svp-float-card-badge">Verified</div>
        </div>
        <div class="svp-float-card">
          <div class="svp-float-card-icon"><i class="fa-solid fa-building"></i></div>
          <div class="svp-float-card-info">
            <strong>12+</strong>
            <span>Industries Served</span>
          </div>
          <div class="svp-float-card-badge">Global</div>
        </div>
      </div>
    </div>

    <!-- Scroll hint -->
    <div class="svp-scroll-hint" aria-hidden="true">
      <div class="svp-scroll-mouse"></div>
      <span>Scroll to Explore</span>
    </div>
  </section>

  <!-- ══════════════════════════ STATS STRIP ══════════════════════════ -->
  <section id="svp-stats" aria-label="Key statistics">
    <div class="svp-stats-inner" data-reveal-group>
      <div class="svp-stat-item">
        <div class="svp-stat-icon"><i class="fa-solid fa-code-branch"></i></div>
        <div class="svp-stat-info">
          <strong>500+</strong>
          <span>Projects Delivered</span>
        </div>
      </div>
      <div class="svp-stat-item">
        <div class="svp-stat-icon"><i class="fa-solid fa-users"></i></div>
        <div class="svp-stat-info">
          <strong>300+</strong>
          <span>Happy Clients</span>
        </div>
      </div>
      <div class="svp-stat-item">
        <div class="svp-stat-icon"><i class="fa-solid fa-globe"></i></div>
        <div class="svp-stat-info">
          <strong>20+</strong>
          <span>Countries Served</span>
        </div>
      </div>
      <div class="svp-stat-item">
        <div class="svp-stat-icon"><i class="fa-solid fa-award"></i></div>
        <div class="svp-stat-info">
          <strong>8+</strong>
          <span>Years of Excellence</span>
        </div>
      </div>
    </div>
  </section>

  <!-- ══════════════════════════ TICKER ══════════════════════════ -->
  <div id="svp-ticker" aria-hidden="true">
    <div class="svp-ticker-track">
      <span class="svp-ticker-item">Custom Software <span class="svp-ticker-sep">&#10022;</span></span>
      <span class="svp-ticker-item">Web &amp; Mobile Apps <span class="svp-ticker-sep">&#10022;</span></span>
      <span class="svp-ticker-item">Cloud &amp; DevOps <span class="svp-ticker-sep">&#10022;</span></span>
      <span class="svp-ticker-item">AI &amp; Machine Learning <span class="svp-ticker-sep">&#10022;</span></span>
      <span class="svp-ticker-item">Digital Marketing <span class="svp-ticker-sep">&#10022;</span></span>
      <span class="svp-ticker-item">UI/UX Design <span class="svp-ticker-sep">&#10022;</span></span>
      <span class="svp-ticker-item">Cybersecurity <span class="svp-ticker-sep">&#10022;</span></span>
      <span class="svp-ticker-item">ERP &amp; CRM Systems <span class="svp-ticker-sep">&#10022;</span></span>
      <span class="svp-ticker-item">Custom Software <span class="svp-ticker-sep">&#10022;</span></span>
      <span class="svp-ticker-item">Web &amp; Mobile Apps <span class="svp-ticker-sep">&#10022;</span></span>
      <span class="svp-ticker-item">Cloud &amp; DevOps <span class="svp-ticker-sep">&#10022;</span></span>
      <span class="svp-ticker-item">AI &amp; Machine Learning <span class="svp-ticker-sep">&#10022;</span></span>
      <span class="svp-ticker-item">Digital Marketing <span class="svp-ticker-sep">&#10022;</span></span>
      <span class="svp-ticker-item">UI/UX Design <span class="svp-ticker-sep">&#10022;</span></span>
      <span class="svp-ticker-item">Cybersecurity <span class="svp-ticker-sep">&#10022;</span></span>
      <span class="svp-ticker-item">ERP &amp; CRM Systems <span class="svp-ticker-sep">&#10022;</span></span>
    </div>
  </div>

  <!-- ══════════════════════════ FILTER BAR ══════════════════════════ -->
  <div id="svp-filter-bar" role="navigation" aria-label="Service filters">
    <div class="svp-filter-inner">
      <!-- Search -->
      <div class="svp-search-wrap">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" />
        </svg>
        <input type="text" id="svp-search" placeholder="Search services..." aria-label="Search services">
      </div>

      <!-- Divider -->
      <div class="svp-filter-divider" aria-hidden="true"></div>

      <!-- Category tabs — rendered by JS -->
      <div class="svp-filter-tabs" id="svp-tabs" role="tablist" aria-label="Service categories"></div>

      <!-- Results count -->
      <p class="svp-results-info" id="svp-results-info" aria-live="polite"></p>
    </div>
  </div>

  <!-- ══════════════════════════ ALL SERVICES ══════════════════════════ -->
  <section id="svp-services-main" aria-labelledby="svp-services-title" class="ta-section-reveal">
    <div class="svp-main-inner">
      <div class="svp-section-header" data-reveal>
        <div class="svp-eyebrow">What We Offer</div>
        <h2 class="svp-section-title" id="svp-services-title">
          Complete IT &amp; Digital Services <span class="accent">Under One Roof</span>
        </h2>
        <p class="svp-section-desc">
          From software development and cloud infrastructure to digital marketing and AI automation — every service
          you need to build, scale, and dominate your market, all delivered by one expert team.
        </p>
      </div>

      <!-- Categories container — populated by JS -->
      <div id="svp-categories-container"></div>

      <!-- No results state -->
      <div class="svp-no-results" id="svp-no-results">
        <i class="fa-solid fa-magnifying-glass"></i>
        <h3>No services found</h3>
        <p>Try a different keyword or select "All" to see every service.</p>
      </div>
    </div>
  </section>

  <!-- ══════════════════════════ HIGHLIGHTS / WHY US ══════════════════════════ -->
  <section id="svp-highlights" aria-labelledby="svp-highlights-title" class="ta-section-reveal">
    <div class="svp-highlights-inner">
      <div class="svp-highlights-header" data-reveal>
        <div class="svp-eyebrow">Why Techno Amaze</div>
        <h2 class="svp-section-title" id="svp-highlights-title">
          The Advantage You Deserve
        </h2>
        <p class="svp-section-desc">We don't just build software — we build competitive advantages that compound over time.</p>
      </div>
      <div class="svp-highlights-grid" data-reveal-group>
        <div class="svp-highlight-card">
          <div class="svp-highlight-icon"><i class="fa-solid fa-bolt"></i></div>
          <div class="svp-highlight-num">3×</div>
          <div class="svp-highlight-label">Faster Delivery</div>
          <p class="svp-highlight-desc">Agile sprints and CI/CD pipelines reduce time-to-market by up to 3x.</p>
        </div>
        <div class="svp-highlight-card">
          <div class="svp-highlight-icon"><i class="fa-solid fa-shield-halved"></i></div>
          <div class="svp-highlight-num">99.9%</div>
          <div class="svp-highlight-label">Uptime Guarantee</div>
          <p class="svp-highlight-desc">Enterprise-grade infrastructure with 24/7 monitoring and instant failover.</p>
        </div>
        <div class="svp-highlight-card">
          <div class="svp-highlight-icon"><i class="fa-solid fa-hand-holding-dollar"></i></div>
          <div class="svp-highlight-num">40%</div>
          <div class="svp-highlight-label">Cost Reduction</div>
          <p class="svp-highlight-desc">Optimized architectures and smart automation slash operational expenses.</p>
        </div>
        <div class="svp-highlight-card">
          <div class="svp-highlight-icon"><i class="fa-solid fa-headset"></i></div>
          <div class="svp-highlight-num">24/7</div>
          <div class="svp-highlight-label">Expert Support</div>
          <p class="svp-highlight-desc">Dedicated account managers and round-the-clock technical support teams.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ══════════════════════════ INDUSTRIES ══════════════════════════ -->
  <section id="svp-industries" aria-labelledby="svp-industries-title" class="ta-section-reveal">
    <div class="svp-industries-inner">
      <div class="svp-industries-header" data-reveal>
        <div class="svp-industries-header-text">
          <div class="svp-eyebrow">Industries We Serve</div>
          <h2 class="svp-section-title" id="svp-industries-title">
            Powering Growth Across <span class="accent">Every Sector</span>
          </h2>
          <p class="svp-section-desc">
            Our domain-specific expertise and battle-tested frameworks help businesses across 12+ industries
            transform digitally, scale efficiently, and outpace the competition.
          </p>
        </div>
        <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="svp-btn-primary" style="align-self:flex-end; white-space:nowrap;">
          Get Industry Solution <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>

      <div class="svp-industries-grid" data-reveal-group>
        <!-- Card 1 (wide) -->
        <article class="svp-industry-card">
          <img class="svp-industry-bg"
            src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=900&q=80&auto=format&fit=crop"
            alt="Healthcare" loading="lazy">
          <div class="svp-industry-overlay"></div>
          <div class="svp-industry-content">
            <div class="svp-industry-tag"><i class="fa-solid fa-hospital"></i> Healthcare</div>
            <div class="svp-industry-icon"><i class="fa-solid fa-stethoscope"></i></div>
            <h3 class="svp-industry-name">Healthcare &amp; MedTech</h3>
            <p class="svp-industry-desc">HIPAA-compliant platforms, telemedicine apps, and EHR integrations that transform patient care.</p>
          </div>
        </article>

        <!-- Card 2 -->
        <article class="svp-industry-card">
          <img class="svp-industry-bg"
            src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=600&q=80&auto=format&fit=crop"
            alt="FinTech" loading="lazy">
          <div class="svp-industry-overlay"></div>
          <div class="svp-industry-content">
            <div class="svp-industry-tag"><i class="fa-solid fa-landmark"></i> Finance</div>
            <div class="svp-industry-icon"><i class="fa-solid fa-coins"></i></div>
            <h3 class="svp-industry-name">FinTech &amp; Banking</h3>
            <p class="svp-industry-desc">Secure payment gateways, lending platforms, and open-banking solutions.</p>
          </div>
        </article>

        <!-- Card 3 -->
        <article class="svp-industry-card">
          <img class="svp-industry-bg"
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80&auto=format&fit=crop"
            alt="E-commerce" loading="lazy">
          <div class="svp-industry-overlay"></div>
          <div class="svp-industry-content">
            <div class="svp-industry-tag"><i class="fa-solid fa-cart-shopping"></i> Retail</div>
            <div class="svp-industry-icon"><i class="fa-solid fa-store"></i></div>
            <h3 class="svp-industry-name">E-Commerce &amp; Retail</h3>
            <p class="svp-industry-desc">Conversion-optimized storefronts with AI recommendations and smart inventory.</p>
          </div>
        </article>

        <!-- Card 4 -->
        <article class="svp-industry-card">
          <img class="svp-industry-bg"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80&auto=format&fit=crop"
            alt="Education" loading="lazy">
          <div class="svp-industry-overlay"></div>
          <div class="svp-industry-content">
            <div class="svp-industry-tag"><i class="fa-solid fa-graduation-cap"></i> EdTech</div>
            <div class="svp-industry-icon"><i class="fa-solid fa-book-open"></i></div>
            <h3 class="svp-industry-name">Education &amp; eLearning</h3>
            <p class="svp-industry-desc">Interactive LMS, gamified courses, and AI-driven personalized learning paths.</p>
          </div>
        </article>

        <!-- Card 5 -->
        <article class="svp-industry-card">
          <img class="svp-industry-bg"
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80&auto=format&fit=crop"
            alt="Manufacturing" loading="lazy">
          <div class="svp-industry-overlay"></div>
          <div class="svp-industry-content">
            <div class="svp-industry-tag"><i class="fa-solid fa-industry"></i> Industry</div>
            <div class="svp-industry-icon"><i class="fa-solid fa-gears"></i></div>
            <h3 class="svp-industry-name">Manufacturing &amp; IoT</h3>
            <p class="svp-industry-desc">Smart factory dashboards, predictive maintenance, and supply-chain automation.</p>
          </div>
        </article>

        <!-- Card 6 (wide) -->
        <article class="svp-industry-card">
          <img class="svp-industry-bg"
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80&auto=format&fit=crop"
            alt="Real Estate" loading="lazy">
          <div class="svp-industry-overlay"></div>
          <div class="svp-industry-content">
            <div class="svp-industry-tag"><i class="fa-solid fa-building"></i> PropTech</div>
            <div class="svp-industry-icon"><i class="fa-solid fa-city"></i></div>
            <h3 class="svp-industry-name">Real Estate &amp; PropTech</h3>
            <p class="svp-industry-desc">Virtual tours, property management portals, and AI-powered valuation engines for real estate growth.</p>
          </div>
        </article>

        <!-- Card 7 -->
        <article class="svp-industry-card">
          <img class="svp-industry-bg"
            src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&q=80&auto=format&fit=crop"
            alt="Gaming" loading="lazy">
          <div class="svp-industry-overlay"></div>
          <div class="svp-industry-content">
            <div class="svp-industry-tag"><i class="fa-solid fa-gamepad"></i> Gaming</div>
            <div class="svp-industry-icon"><i class="fa-solid fa-dice"></i></div>
            <h3 class="svp-industry-name">Gaming &amp; Entertainment</h3>
            <p class="svp-industry-desc">Mobile games, streaming apps, and AR/VR experiences that captivate audiences.</p>
          </div>
        </article>

        <!-- Card 8 -->
        <article class="svp-industry-card">
          <img class="svp-industry-bg"
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80&auto=format&fit=crop"
            alt="Logistics" loading="lazy">
          <div class="svp-industry-overlay"></div>
          <div class="svp-industry-content">
            <div class="svp-industry-tag"><i class="fa-solid fa-truck"></i> Logistics</div>
            <div class="svp-industry-icon"><i class="fa-solid fa-map-location-dot"></i></div>
            <h3 class="svp-industry-name">Logistics &amp; Supply Chain</h3>
            <p class="svp-industry-desc">Real-time tracking, route optimization, and warehouse management solutions.</p>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- ══════════════════════════ PROCESS ══════════════════════════ -->
  <section id="svp-process" aria-labelledby="svp-process-title" class="ta-section-reveal">
    <div class="svp-process-inner">
      <div class="svp-process-header" data-reveal>
        <div class="svp-eyebrow">How We Work</div>
        <h2 class="svp-section-title" id="svp-process-title">
          Our Proven <span class="accent">5-Step Process</span>
        </h2>
        <p class="svp-section-desc">A structured, transparent, and agile workflow that ensures on-time delivery and exceptional quality at every stage.</p>
      </div>
      <div class="svp-process-steps" data-reveal-group>
        <div class="svp-step">
          <div class="svp-step-num">01</div>
          <h3 class="svp-step-title">Discovery &amp; Planning</h3>
          <p class="svp-step-desc">Deep-dive into your business goals, audience, and technical requirements to build a solid roadmap.</p>
        </div>
        <div class="svp-step">
          <div class="svp-step-num">02</div>
          <h3 class="svp-step-title">UI/UX Design</h3>
          <p class="svp-step-desc">Wireframes, prototypes, and stunning designs that align with your brand and convert users.</p>
        </div>
        <div class="svp-step">
          <div class="svp-step-num">03</div>
          <h3 class="svp-step-title">Development</h3>
          <p class="svp-step-desc">Agile sprints with clean, scalable code, peer reviews, and continuous integration pipelines.</p>
        </div>
        <div class="svp-step">
          <div class="svp-step-num">04</div>
          <h3 class="svp-step-title">QA &amp; Testing</h3>
          <p class="svp-step-desc">Rigorous manual and automated testing to squash bugs before they reach production.</p>
        </div>
        <div class="svp-step">
          <div class="svp-step-num">05</div>
          <h3 class="svp-step-title">Launch &amp; Support</h3>
          <p class="svp-step-desc">Zero-downtime deployments, performance monitoring, and ongoing support to keep you ahead.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ══════════════════════════ CTA ══════════════════════════ -->
  <section id="svp-cta" aria-labelledby="svp-cta-title" class="ta-section-reveal">
    <div class="svp-cta-inner" data-reveal="scale">
      <div class="svp-cta-tag"><i class="fa-solid fa-rocket"></i> Ready to Start?</div>
      <h2 class="svp-cta-title" id="svp-cta-title">
        Let's Build Something <span>Extraordinary</span> Together
      </h2>
      <p class="svp-cta-desc">
        Share your vision and our experts will craft the perfect service package — tailored to your goals, timeline, and budget.
        First consultation is absolutely free.
      </p>
      <div class="svp-cta-btns">
        <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="svp-btn-primary">
          Get a Free Quote <i class="fa-solid fa-arrow-right"></i>
        </a>
        <a href="<?php echo esc_url(home_url('/about/')); ?>" class="svp-btn-outline">Learn About Us</a>
      </div>
      <div class="svp-cta-trust">
        <div class="svp-trust-item"><i class="fa-solid fa-check-circle"></i> No commitment required</div>
        <div class="svp-trust-item"><i class="fa-solid fa-check-circle"></i> Response within 24 hours</div>
        <div class="svp-trust-item"><i class="fa-solid fa-check-circle"></i> NDA available</div>
        <div class="svp-trust-item"><i class="fa-solid fa-check-circle"></i> Fixed price contracts</div>
      </div>
    </div>
  </section>

  <!-- ══════════════════════════ FOOTER ══════════════════════════ -->

<?php
get_footer();
