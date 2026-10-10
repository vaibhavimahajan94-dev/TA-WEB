<?php
/**
 * Template Name: Industries
 * Description: Custom template for Industries page.
 *
 * @package TechnoAmaze
 * @version 1.0.0
 */

get_header();
?>


<!-- ══════════════════════════ HERO ══════════════════════════ -->
<section id="ind-hero" aria-labelledby="ind-hero-title">
  <div class="ind-hero-glow-bg" aria-hidden="true">
    <div class="ind-hero-glow ind-hero-glow--pink"></div>
    <div class="ind-hero-glow ind-hero-glow--purple"></div>
  </div>

  <div class="ind-hero-inner ind-hero-inner--center">
    <div class="ind-hero-content ind-hero-content--center">
      <p class="ind-hero-eyebrow ind-hero-eyebrow--line">Domain-Specific Solutions</p>
      <h1 class="ind-hero-heading ind-hero-heading--center" id="ind-hero-title">
        Software Engineered<br>
        <span class="grad">For Your Industry</span>
      </h1>
      <p class="ind-hero-desc ind-hero-desc--center">
        We don't build one-size-fits-all software. Each solution is engineered to the exact workflows,
        compliance requirements, and growth challenges of your specific domain — from Healthcare to Gaming.
      </p>
      <div class="ind-hero-ctas ind-hero-ctas--center">
        <a href="#ind-grid-section" class="ind-btn-primary" id="ind-explore-btn">
          Explore Industries <i class="fa-solid fa-arrow-down"></i>
        </a>
        <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="ind-btn-ghost">
          Free Consultation
        </a>
      </div>
    </div>
  </div>

  <div class="ind-scroll-hint" aria-hidden="true">
    <div class="ind-scroll-mouse"></div>
    <span>Scroll to Explore</span>
  </div>
</section>

<!-- STATS -->
<section id="ind-stats" aria-label="Stats">
  <div class="ind-stats-inner">
    <div class="ind-stat"><div class="ind-stat-icon"><i class="fa-solid fa-industry"></i></div><div class="ind-stat-text"><strong>10+</strong><span>Industries Served</span></div></div>
    <div class="ind-stat"><div class="ind-stat-icon"><i class="fa-solid fa-code-branch"></i></div><div class="ind-stat-text"><strong>500+</strong><span>Projects Delivered</span></div></div>
    <div class="ind-stat"><div class="ind-stat-icon"><i class="fa-solid fa-globe"></i></div><div class="ind-stat-text"><strong>20+</strong><span>Countries Reached</span></div></div>
    <div class="ind-stat"><div class="ind-stat-icon"><i class="fa-solid fa-award"></i></div><div class="ind-stat-text"><strong>8+</strong><span>Years of Excellence</span></div></div>
  </div>
</section>

<!-- QUICK NAV -->
<div id="ind-quick-nav" role="navigation" aria-label="Jump to industry">
  <div class="ind-qnav-inner">
    <a href="#ind-healthcare" class="ind-qnav-item"><i class="fa-solid fa-stethoscope"></i><span>Healthcare</span></a>
    <a href="#ind-fintech" class="ind-qnav-item"><i class="fa-solid fa-landmark"></i><span>FinTech</span></a>
    <a href="#ind-ecommerce" class="ind-qnav-item"><i class="fa-solid fa-bag-shopping"></i><span>E-Commerce</span></a>
    <a href="#ind-edtech" class="ind-qnav-item"><i class="fa-solid fa-graduation-cap"></i><span>EdTech</span></a>
    <a href="#ind-manufacturing" class="ind-qnav-item"><i class="fa-solid fa-industry"></i><span>Manufacturing</span></a>
    <a href="#ind-realestate" class="ind-qnav-item"><i class="fa-solid fa-building"></i><span>Real Estate</span></a>
    <a href="#ind-gaming" class="ind-qnav-item"><i class="fa-solid fa-gamepad"></i><span>Gaming</span></a>
    <a href="#ind-logistics" class="ind-qnav-item"><i class="fa-solid fa-truck"></i><span>Logistics</span></a>
    <a href="#ind-travel" class="ind-qnav-item"><i class="fa-solid fa-plane"></i><span>Travel</span></a>
    <a href="#ind-legal" class="ind-qnav-item"><i class="fa-solid fa-scale-balanced"></i><span>Legal</span></a>
  </div>
</div>

<!-- ══════════════════════════ MAGAZINE GRID ══════════════════════════ -->
<section id="ind-grid-section" class="ind-sec-pad ta-section-reveal" aria-labelledby="ind-grid-title">
  <div class="ind-container">
    <div class="ind-grid-header" data-reveal>
      <div class="ind-eyebrow">What We Cover</div>
      <h2 class="ind-section-title" id="ind-grid-title">Industries We <span class="ind-accent-text">Transform</span></h2>
      <p class="ind-section-desc">Click any industry to jump to its dedicated section and explore every software solution we build for that domain.</p>
    </div>

    <div class="ind-magazine-grid" data-reveal-group>

      <!-- 1. Healthcare — large -->
      <a href="<?php echo esc_url(home_url('/industries/healthcare/')); ?>" class="ind-img-card" style="--ic-color:#00b4d8;">
        <div class="ind-card-line"></div>
        <img class="ind-card-img" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80" alt="Healthcare">
        <div class="ind-card-gradient"></div>
        <div class="ind-card-body">
          <div class="ind-card-icon-wrap"><i class="fa-solid fa-stethoscope"></i></div>
          <div class="ind-card-name">Healthcare &amp; MedTech</div>
          <div class="ind-card-desc">HIPAA-compliant platforms, EHR systems &amp; telemedicine solutions built for modern healthcare.</div>
          <div class="ind-card-meta">
            <span class="ind-card-count">9 Solutions</span>
            <div class="ind-card-arrow"><i class="fa-solid fa-arrow-right"></i></div>
          </div>
        </div>
      </a>

      <!-- 2. FinTech -->
      <a href="<?php echo esc_url(home_url('/industries/fintech/')); ?>" class="ind-img-card" style="--ic-color:#06d6a0;">
        <div class="ind-card-line"></div>
        <img class="ind-card-img" src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80" alt="FinTech">
        <div class="ind-card-gradient"></div>
        <div class="ind-card-body">
          <div class="ind-card-icon-wrap"><i class="fa-solid fa-landmark"></i></div>
          <div class="ind-card-name">FinTech &amp; Banking</div>
          <div class="ind-card-desc">Payment gateways, digital banking apps, lending platforms &amp; fraud detection.</div>
          <div class="ind-card-meta"><span class="ind-card-count">8 Solutions</span><div class="ind-card-arrow"><i class="fa-solid fa-arrow-right"></i></div></div>
        </div>
      </a>

      <!-- 3. E-Commerce -->
      <a href="<?php echo esc_url(home_url('/industries/ecommerce/')); ?>" class="ind-img-card" style="--ic-color:#f77f00;">
        <div class="ind-card-line"></div>
        <img class="ind-card-img" src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&q=80" alt="E-Commerce">
        <div class="ind-card-gradient"></div>
        <div class="ind-card-body">
          <div class="ind-card-icon-wrap"><i class="fa-solid fa-bag-shopping"></i></div>
          <div class="ind-card-name">E-Commerce &amp; Retail</div>
          <div class="ind-card-desc">Online stores, AI recommendation engines, POS &amp; marketplace platforms.</div>
          <div class="ind-card-meta"><span class="ind-card-count">9 Solutions</span><div class="ind-card-arrow"><i class="fa-solid fa-arrow-right"></i></div></div>
        </div>
      </a>

      <!-- 4. EdTech (small) -->
      <a href="<?php echo esc_url(home_url('/industries/edtech/')); ?>" class="ind-img-card" style="--ic-color:#7b2d8b;">
        <div class="ind-card-line"></div>
        <img class="ind-card-img" src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=600&q=80" alt="EdTech">
        <div class="ind-card-gradient"></div>
        <div class="ind-card-body">
          <div class="ind-card-icon-wrap"><i class="fa-solid fa-graduation-cap"></i></div>
          <div class="ind-card-name">Education &amp; eLearning</div>
          <div class="ind-card-desc">LMS, virtual classrooms &amp; AI personalized learning.</div>
          <div class="ind-card-meta"><span class="ind-card-count">8 Solutions</span><div class="ind-card-arrow"><i class="fa-solid fa-arrow-right"></i></div></div>
        </div>
      </a>

      <!-- 5. Manufacturing (small) -->
      <a href="<?php echo esc_url(home_url('/industries/manufacturing/')); ?>" class="ind-img-card" style="--ic-color:#e63946;">
        <div class="ind-card-line"></div>
        <img class="ind-card-img" src="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=600&q=80" alt="Manufacturing">
        <div class="ind-card-gradient"></div>
        <div class="ind-card-body">
          <div class="ind-card-icon-wrap"><i class="fa-solid fa-industry"></i></div>
          <div class="ind-card-name">Manufacturing &amp; IoT</div>
          <div class="ind-card-desc">Smart factory ERP &amp; predictive maintenance.</div>
          <div class="ind-card-meta"><span class="ind-card-count">8 Solutions</span><div class="ind-card-arrow"><i class="fa-solid fa-arrow-right"></i></div></div>
        </div>
      </a>

      <!-- 6. Real Estate -->
      <a href="<?php echo esc_url(home_url('/industries/realestate/')); ?>" class="ind-img-card" style="--ic-color:#f4a261;">
        <div class="ind-card-line"></div>
        <img class="ind-card-img" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80" alt="Real Estate">
        <div class="ind-card-gradient"></div>
        <div class="ind-card-body">
          <div class="ind-card-icon-wrap"><i class="fa-solid fa-building"></i></div>
          <div class="ind-card-name">Real Estate &amp; PropTech</div>
          <div class="ind-card-desc">Property portals, virtual tours &amp; AI valuation engines.</div>
          <div class="ind-card-meta"><span class="ind-card-count">8 Solutions</span><div class="ind-card-arrow"><i class="fa-solid fa-arrow-right"></i></div></div>
        </div>
      </a>

      <!-- 7. Gaming -->
      <a href="<?php echo esc_url(home_url('/industries/gaming/')); ?>" class="ind-img-card" style="--ic-color:#6a0dad;">
        <div class="ind-card-line"></div>
        <img class="ind-card-img" src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=700&q=80" alt="Gaming">
        <div class="ind-card-gradient"></div>
        <div class="ind-card-body">
          <div class="ind-card-icon-wrap"><i class="fa-solid fa-gamepad"></i></div>
          <div class="ind-card-name">Gaming &amp; Entertainment</div>
          <div class="ind-card-desc">Mobile games, AR/VR &amp; streaming platforms.</div>
          <div class="ind-card-meta"><span class="ind-card-count">7 Solutions</span><div class="ind-card-arrow"><i class="fa-solid fa-arrow-right"></i></div></div>
        </div>
      </a>

      <!-- 8. Logistics -->
      <a href="<?php echo esc_url(home_url('/industries/logistics/')); ?>" class="ind-img-card" style="--ic-color:#2ec4b6;">
        <div class="ind-card-line"></div>
        <img class="ind-card-img" src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=700&q=80" alt="Logistics">
        <div class="ind-card-gradient"></div>
        <div class="ind-card-body">
          <div class="ind-card-icon-wrap"><i class="fa-solid fa-truck"></i></div>
          <div class="ind-card-name">Logistics &amp; Supply Chain</div>
          <div class="ind-card-desc">Fleet management, route optimization &amp; tracking.</div>
          <div class="ind-card-meta"><span class="ind-card-count">8 Solutions</span><div class="ind-card-arrow"><i class="fa-solid fa-arrow-right"></i></div></div>
        </div>
      </a>

      <!-- 9. Travel -->
      <a href="<?php echo esc_url(home_url('/industries/travel/')); ?>" class="ind-img-card" style="--ic-color:#0096c7;">
        <div class="ind-card-line"></div>
        <img class="ind-card-img" src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=700&q=80" alt="Travel">
        <div class="ind-card-gradient"></div>
        <div class="ind-card-body">
          <div class="ind-card-icon-wrap"><i class="fa-solid fa-plane-departure"></i></div>
          <div class="ind-card-name">Travel &amp; Hospitality</div>
          <div class="ind-card-desc">Booking engines, hotel PMS &amp; AI concierge.</div>
          <div class="ind-card-meta"><span class="ind-card-count">8 Solutions</span><div class="ind-card-arrow"><i class="fa-solid fa-arrow-right"></i></div></div>
        </div>
      </a>

      <!-- 10. Legal -->
      <a href="<?php echo esc_url(home_url('/industries/legal/')); ?>" class="ind-img-card" style="--ic-color:#2d6a4f;">
        <div class="ind-card-line"></div>
        <img class="ind-card-img" src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=700&q=80" alt="Legal">
        <div class="ind-card-gradient"></div>
        <div class="ind-card-body">
          <div class="ind-card-icon-wrap"><i class="fa-solid fa-scale-balanced"></i></div>
          <div class="ind-card-name">Legal &amp; Compliance</div>
          <div class="ind-card-desc">Case management, contract automation &amp; e-signature.</div>
          <div class="ind-card-meta"><span class="ind-card-count">7 Solutions</span><div class="ind-card-arrow"><i class="fa-solid fa-arrow-right"></i></div></div>
        </div>
      </a>

    </div>
  </div>
</section>

<!-- ══ MACRO: industry section helper ══
     Each industry = split visual + solutions drawer
  ══════════════════════════════════════════════════════════════════ -->

<!-- ─── 1. HEALTHCARE ─── -->
<section id="ind-healthcare" class="ind-detail-section light ta-section-reveal" style="--sec-color:#00b4d8" aria-labelledby="ind-hc-h">
  <div class="ind-split">
    <!-- Visual -->
    <div class="ind-split-visual">
      <img class="ind-split-img" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80" alt="Healthcare">
      <div class="ind-split-overlay">
        <!-- ECG SVG Animation -->
        <svg class="ind-svg-anim" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="120" cy="120" r="100" stroke="rgba(0,180,216,.2)" stroke-width="1" class="svg-ring"/>
          <circle cx="120" cy="120" r="75" stroke="rgba(0,180,216,.15)" stroke-width="1"/>
          <path d="M20,120 L60,120 L75,80 L90,160 L105,100 L115,130 L125,110 L135,120 L220,120" stroke="#00b4d8" stroke-width="2.5" stroke-linecap="round" class="svg-ecg"/>
          <!-- Heart -->
          <path d="M120,145 C120,145 95,128 95,112 C95,103 103,97 112,100 C116,101 120,105 120,105 C120,105 124,101 128,100 C137,97 145,103 145,112 C145,128 120,145 120,145Z" fill="rgba(0,180,216,.3)" stroke="#00b4d8" stroke-width="1.5" class="svg-float"/>
          <!-- Dots -->
          <circle cx="60" cy="120" r="4" fill="#00b4d8" class="svg-pulse"/>
          <circle cx="180" cy="120" r="4" fill="#00b4d8" class="svg-pulse"/>
        </svg>
      </div>
    </div>
    <!-- Content -->
    <div class="ind-split-content">
      <div class="ind-split-eyebrow">Healthcare &amp; MedTech</div>
      <h2 class="ind-split-title" id="ind-hc-h">Secure, Compliant &amp; <span class="hl">Patient-Centered</span> Software</h2>
      <p class="ind-split-desc">HIPAA-compliant, HL7/FHIR-ready digital health platforms that improve patient outcomes, streamline clinical workflows, and power connected healthcare.</p>
      <div class="ind-sol-pills">
        <span class="ind-sol-pill"><i class="fa-solid fa-file-medical"></i>EHR / EMR Systems</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-video"></i>Telemedicine</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-person-walking"></i>Patient Portal</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-receipt"></i>Medical Billing</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-brain"></i>AI Diagnostics</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-pills"></i>Pharmacy Mgmt</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-heartbeat"></i>Remote Monitoring</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-hospital"></i>Hospital Management</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-shield-halved"></i>Healthcare Cybersecurity</span>
      </div>
      <div class="ind-split-cta">
        <a href="<?php echo esc_url(home_url('/industries/healthcare/')); ?>" class="ind-split-cta-btn"><i class="fa-solid fa-arrow-right"></i> Explore Healthcare Platform</a>
        <span class="ind-split-cta-count">9 specialized solutions</span>
      </div>
    </div>
  </div>
  <!-- Solutions drawer -->
  <div class="ind-solutions-drawer">
    <div class="ind-sol-grid">
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-file-medical"></i></div><h4>EHR / EMR Systems</h4><p>Patient timeline, clinical notes, lab integration and multi-provider access with HIPAA compliance.</p><ul><li><i class="fa-solid fa-check"></i>HIPAA &amp; HL7 Compliant</li><li><i class="fa-solid fa-check"></i>Lab Integration</li><li><i class="fa-solid fa-check"></i>Clinical Decision Support</li></ul></div>
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-video"></i></div><h4>Telemedicine Platform</h4><p>HD video consultations, appointment booking, digital prescriptions and insurance billing.</p><ul><li><i class="fa-solid fa-check"></i>HD Video &amp; Chat</li><li><i class="fa-solid fa-check"></i>e-Prescription</li><li><i class="fa-solid fa-check"></i>Insurance Integration</li></ul></div>
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-person-walking"></i></div><h4>Patient Portal App</h4><p>Self-service portals for appointments, reports, doctor communication and medication tracking.</p><ul><li><i class="fa-solid fa-check"></i>Self-Booking</li><li><i class="fa-solid fa-check"></i>Secure Messaging</li><li><i class="fa-solid fa-check"></i>Med Reminders</li></ul></div>
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-receipt"></i></div><h4>Medical Billing</h4><p>Automated insurance claim processing, revenue cycle management and denial tracking.</p><ul><li><i class="fa-solid fa-check"></i>ICD-10 Coding</li><li><i class="fa-solid fa-check"></i>Auto Claims</li><li><i class="fa-solid fa-check"></i>Revenue Analytics</li></ul></div>
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-brain"></i></div><h4>AI Diagnostics</h4><p>ML models for medical imaging analysis, disease risk prediction and population health management.</p><ul><li><i class="fa-solid fa-check"></i>Radiology AI</li><li><i class="fa-solid fa-check"></i>Risk Scoring</li><li><i class="fa-solid fa-check"></i>Population Analytics</li></ul></div>
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-hospital"></i></div><h4>Hospital Management</h4><p>All-in-one HMS covering OPD, IPD, OT, pharmacy, lab, HR and finance for multi-specialty hospitals.</p><ul><li><i class="fa-solid fa-check"></i>OPD / IPD Workflows</li><li><i class="fa-solid fa-check"></i>Bed Management</li><li><i class="fa-solid fa-check"></i>Integrated Finance</li></ul></div>
    </div>
  </div>
</section>

<!-- ─── 2. FINTECH ─── -->
<section id="ind-fintech" class="ind-detail-section alt ta-section-reveal" style="--sec-color:#06d6a0" aria-labelledby="ind-ft-h">
  <div class="ind-split reverse">
    <div class="ind-split-visual">
      <img class="ind-split-img" src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&q=80" alt="FinTech">
      <div class="ind-split-overlay">
        <!-- Rising bars animation -->
        <svg class="ind-svg-anim" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="120" cy="120" r="100" stroke="rgba(6,214,160,.15)" stroke-width="1"/>
          <!-- Bar chart -->
          <rect x="40" y="160" width="24" height="0" rx="4" fill="#06d6a0" class="svg-bar" style="--d:.2s" data-height="60"/>
          <rect x="72" y="100" width="24" height="0" rx="4" fill="#06d6a0" class="svg-bar" style="--d:.4s" data-height="120"/>
          <rect x="104" y="80" width="24" height="0" rx="4" fill="#06d6a0" class="svg-bar" style="--d:.6s" data-height="140"/>
          <rect x="136" y="120" width="24" height="0" rx="4" fill="#06d6a0" class="svg-bar" style="--d:.8s" data-height="100"/>
          <rect x="168" y="60" width="24" height="0" rx="4" fill="#06d6a0" class="svg-bar" style="--d:1s" data-height="160"/>
          <!-- Baseline -->
          <line x1="30" y1="200" x2="210" y2="200" stroke="rgba(6,214,160,.3)" stroke-width="1.5"/>
          <!-- Trend line -->
          <polyline points="52,155 84,120 116,95 148,130 180,75" stroke="#fff" stroke-width="1.5" stroke-dasharray="4 4" stroke-linecap="round"/>
          <!-- Dollar sign -->
          <text x="108" y="48" font-family="Arial" font-size="26" font-weight="bold" fill="rgba(6,214,160,.6)" text-anchor="middle" class="svg-float">$</text>
        </svg>
      </div>
    </div>
    <div class="ind-split-content">
      <div class="ind-split-eyebrow">FinTech &amp; Banking</div>
      <h2 class="ind-split-title" id="ind-ft-h">Secure, Scalable &amp; <span class="hl">Regulation-Ready</span> Finance Apps</h2>
      <p class="ind-split-desc">Enterprise-grade financial software that meets PCI-DSS, RBI, and global compliance standards — from payment gateways to AI-driven fraud detection systems.</p>
      <div class="ind-sol-pills">
        <span class="ind-sol-pill"><i class="fa-solid fa-credit-card"></i>Payment Gateway</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-mobile-screen"></i>Digital Banking</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-wallet"></i>Digital Wallet</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-hand-holding-dollar"></i>Loan Management</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-chart-line"></i>Trading Platform</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-user-shield"></i>KYC / AML</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-shield-virus"></i>Fraud Detection</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-file-invoice-dollar"></i>Insurance Platform</span>
      </div>
      <div class="ind-split-cta">
        <a href="<?php echo esc_url(home_url('/industries/fintech/')); ?>" class="ind-split-cta-btn"><i class="fa-solid fa-arrow-right"></i> Explore FinTech Platform</a>
        <span class="ind-split-cta-count">8 specialized solutions</span>
      </div>
    </div>
  </div>
  <div class="ind-solutions-drawer">
    <div class="ind-sol-grid">
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-credit-card"></i></div><h4>Payment Gateway</h4><p>Cards, UPI, wallets, BNPL and multi-currency processing with PCI-DSS compliance.</p><ul><li><i class="fa-solid fa-check"></i>PCI-DSS Compliant</li><li><i class="fa-solid fa-check"></i>Multi-currency</li><li><i class="fa-solid fa-check"></i>Instant Settlement</li></ul></div>
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-mobile-screen"></i></div><h4>Digital Banking App</h4><p>Neobank platforms with accounts, transfers, open banking APIs and biometric authentication.</p><ul><li><i class="fa-solid fa-check"></i>Open Banking APIs</li><li><i class="fa-solid fa-check"></i>Biometric Auth</li><li><i class="fa-solid fa-check"></i>Real-time Notifications</li></ul></div>
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-hand-holding-dollar"></i></div><h4>Loan Management</h4><p>Digital lending with AI credit scoring, auto disbursement and collections management.</p><ul><li><i class="fa-solid fa-check"></i>AI Credit Scoring</li><li><i class="fa-solid fa-check"></i>Auto Disbursement</li><li><i class="fa-solid fa-check"></i>Collections Module</li></ul></div>
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-chart-line"></i></div><h4>Trading Platform</h4><p>Low-latency trading for stocks, crypto, forex with real-time data feeds and algo support.</p><ul><li><i class="fa-solid fa-check"></i>Real-time Market Data</li><li><i class="fa-solid fa-check"></i>Algo Trading</li><li><i class="fa-solid fa-check"></i>Risk Management</li></ul></div>
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-user-shield"></i></div><h4>KYC / AML Compliance</h4><p>Automated identity verification, document OCR, liveness detection and AML monitoring.</p><ul><li><i class="fa-solid fa-check"></i>Document OCR</li><li><i class="fa-solid fa-check"></i>AML Screening</li><li><i class="fa-solid fa-check"></i>Audit Trail</li></ul></div>
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-shield-virus"></i></div><h4>Fraud Detection</h4><p>ML-powered real-time fraud detection, account takeover prevention and behavioral analytics.</p><ul><li><i class="fa-solid fa-check"></i>Real-time ML Scoring</li><li><i class="fa-solid fa-check"></i>Behavioral Analytics</li><li><i class="fa-solid fa-check"></i>Case Management</li></ul></div>
    </div>
  </div>
</section>

<!-- ─── 3. E-COMMERCE ─── -->
<section id="ind-ecommerce" class="ind-detail-section light ta-section-reveal" style="--sec-color:#f77f00" aria-labelledby="ind-ec-h">
  <div class="ind-split">
    <div class="ind-split-visual">
      <img class="ind-split-img" src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=900&q=80" alt="E-Commerce">
      <div class="ind-split-overlay">
        <!-- Shopping cart animation -->
        <svg class="ind-svg-anim" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="120" cy="120" r="100" stroke="rgba(247,127,0,.15)" stroke-width="1"/>
          <!-- Cart -->
          <path d="M60,80 L75,80 L95,150 L175,150 L185,100 L80,100" stroke="#f77f00" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="svg-bounce"/>
          <!-- Wheels -->
          <circle cx="105" cy="165" r="10" fill="none" stroke="#f77f00" stroke-width="2"/>
          <circle cx="165" cy="165" r="10" fill="none" stroke="#f77f00" stroke-width="2"/>
          <!-- Items in cart -->
          <rect x="110" y="108" width="22" height="30" rx="3" fill="rgba(247,127,0,.4)" class="svg-float"/>
          <rect x="140" y="112" width="18" height="26" rx="3" fill="rgba(247,127,0,.3)" class="svg-float" style="animation-delay:.5s"/>
          <!-- Stars -->
          <text x="185" y="85" font-size="16" fill="rgba(247,127,0,.8)" class="svg-star" style="--dur:1.5s;--d:0s">★</text>
          <text x="45" y="100" font-size="12" fill="rgba(247,127,0,.5)" class="svg-star" style="--dur:2s;--d:.5s">★</text>
          <text x="195" y="130" font-size="10" fill="rgba(247,127,0,.4)" class="svg-star" style="--dur:2.5s;--d:.3s">★</text>
        </svg>
      </div>
    </div>
    <div class="ind-split-content">
      <div class="ind-split-eyebrow">E-Commerce &amp; Retail</div>
      <h2 class="ind-split-title" id="ind-ec-h">Conversion-Optimized &amp; <span class="hl">AI-Powered</span> Retail Tech</h2>
      <p class="ind-split-desc">High-performance storefronts, marketplace platforms and retail management systems that drive sales, improve customer retention and scale with your business.</p>
      <div class="ind-sol-pills">
        <span class="ind-sol-pill"><i class="fa-solid fa-store"></i>Custom Online Store</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-shop"></i>Marketplace</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-box-open"></i>Inventory Mgmt</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-cash-register"></i>POS System</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-robot"></i>AI Recommendations</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-truck-fast"></i>Order Management</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-star-half-stroke"></i>Loyalty Platform</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-headset"></i>Retail CRM</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-chart-bar"></i>Analytics</span>
      </div>
      <div class="ind-split-cta">
        <a href="<?php echo esc_url(home_url('/industries/ecommerce/')); ?>" class="ind-split-cta-btn"><i class="fa-solid fa-arrow-right"></i> Explore E-Commerce Tech</a>
        <span class="ind-split-cta-count">9 specialized solutions</span>
      </div>
    </div>
  </div>
  <div class="ind-solutions-drawer">
    <div class="ind-sol-grid">
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-store"></i></div><h4>Custom Online Store</h4><p>Blazing-fast PWA with smooth checkout, SEO optimization and conversion-boosting UX.</p><ul><li><i class="fa-solid fa-check"></i>Lightning Fast PWA</li><li><i class="fa-solid fa-check"></i>One-Page Checkout</li><li><i class="fa-solid fa-check"></i>SEO-First</li></ul></div>
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-shop"></i></div><h4>Multi-Vendor Marketplace</h4><p>Amazon-style marketplace with seller onboarding, commission engine and dispute management.</p><ul><li><i class="fa-solid fa-check"></i>Seller Dashboard</li><li><i class="fa-solid fa-check"></i>Commission Engine</li><li><i class="fa-solid fa-check"></i>Dispute Management</li></ul></div>
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-robot"></i></div><h4>AI Recommendation Engine</h4><p>Personalized recommendations using collaborative filtering and ML to boost AOV.</p><ul><li><i class="fa-solid fa-check"></i>Personalization ML</li><li><i class="fa-solid fa-check"></i>Upsell &amp; Cross-sell</li><li><i class="fa-solid fa-check"></i>A/B Testing</li></ul></div>
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-cash-register"></i></div><h4>POS System</h4><p>Cloud-based POS with offline mode, staff management and loyalty programs.</p><ul><li><i class="fa-solid fa-check"></i>Offline Mode</li><li><i class="fa-solid fa-check"></i>Staff Permissions</li><li><i class="fa-solid fa-check"></i>Loyalty &amp; Rewards</li></ul></div>
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-truck-fast"></i></div><h4>Order &amp; Delivery</h4><p>Real-time shipment tracking, delivery partner integration and returns automation.</p><ul><li><i class="fa-solid fa-check"></i>Real-time Tracking</li><li><i class="fa-solid fa-check"></i>Courier Integration</li><li><i class="fa-solid fa-check"></i>Returns Automation</li></ul></div>
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-chart-bar"></i></div><h4>Retail Analytics</h4><p>Real-time sales analytics, customer segmentation and campaign ROI tracking.</p><ul><li><i class="fa-solid fa-check"></i>Real-time Sales</li><li><i class="fa-solid fa-check"></i>Segmentation</li><li><i class="fa-solid fa-check"></i>Campaign ROI</li></ul></div>
    </div>
  </div>
</section>

<!-- ─── 4. EDTECH ─── -->
<section id="ind-edtech" class="ind-detail-section alt ta-section-reveal" style="--sec-color:#7b2d8b" aria-labelledby="ind-ed-h">
  <div class="ind-split reverse">
    <div class="ind-split-visual">
      <img class="ind-split-img" src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=900&q=80" alt="EdTech">
      <div class="ind-split-overlay">
        <!-- Open book / learning animation -->
        <svg class="ind-svg-anim" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="120" cy="120" r="100" stroke="rgba(123,45,139,.2)" stroke-width="1"/>
          <!-- Book -->
          <path d="M60,70 L120,85 L180,70 L180,170 L120,185 L60,170Z" fill="rgba(123,45,139,.15)" stroke="#7b2d8b" stroke-width="1.5"/>
          <line x1="120" y1="85" x2="120" y2="185" stroke="#7b2d8b" stroke-width="1.5"/>
          <!-- Pages (left) -->
          <line x1="75" y1="100" x2="113" y2="108" stroke="rgba(123,45,139,.5)" stroke-width="1"/>
          <line x1="75" y1="115" x2="113" y2="122" stroke="rgba(123,45,139,.4)" stroke-width="1"/>
          <line x1="75" y1="130" x2="113" y2="136" stroke="rgba(123,45,139,.3)" stroke-width="1"/>
          <!-- Pages (right) -->
          <line x1="127" y1="108" x2="165" y2="100" stroke="rgba(123,45,139,.5)" stroke-width="1"/>
          <line x1="127" y1="122" x2="165" y2="115" stroke="rgba(123,45,139,.4)" stroke-width="1"/>
          <!-- Stars/sparkles -->
          <text x="95" y="68" font-size="14" fill="rgba(123,45,139,.8)" class="svg-star" style="--dur:2s;--d:0s">✦</text>
          <text x="140" y="62" font-size="10" fill="rgba(123,45,139,.6)" class="svg-star" style="--dur:2.5s;--d:.5s">✦</text>
          <text x="60" y="60" font-size="8" fill="rgba(123,45,139,.4)" class="svg-star" style="--dur:3s;--d:1s">✦</text>
          <!-- Percentage -->
          <text x="120" y="218" font-family="Arial" font-size="12" font-weight="bold" fill="rgba(123,45,139,.6)" text-anchor="middle" class="svg-bounce">100%</text>
        </svg>
      </div>
    </div>
    <div class="ind-split-content">
      <div class="ind-split-eyebrow">Education &amp; eLearning</div>
      <h2 class="ind-split-title" id="ind-ed-h">Smart, Engaging &amp; <span class="hl">Scalable</span> EdTech Platforms</h2>
      <p class="ind-split-desc">Interactive learning management systems, virtual classrooms and AI-driven personalized education platforms that transform how students learn and institutions teach.</p>
      <div class="ind-sol-pills">
        <span class="ind-sol-pill"><i class="fa-solid fa-layer-group"></i>LMS Platform</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-chalkboard-user"></i>Virtual Classroom</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-shop"></i>Course Marketplace</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-clipboard-question"></i>Assessment Tools</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-robot"></i>AI Learning Paths</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-school"></i>School ERP</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-mobile-screen"></i>EdTech Mobile App</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-chart-bar"></i>Learning Analytics</span>
      </div>
      <div class="ind-split-cta" style="flex-wrap:wrap;gap:12px;">
        <a href="https://play.google.com/store/apps/details?id=com.technoamaze.academy&hl=gu" target="_blank" rel="noopener" class="ind-split-cta-btn" style="background:var(--ta-accent);color:#ffffff;"><i class="fa-brands fa-google-play"></i> Download Academy App</a>
        <a href="<?php echo esc_url(home_url('/products/academy/')); ?>" class="ind-split-cta-btn"><i class="fa-solid fa-arrow-right"></i> Explore Academy Page</a>
        <span class="ind-split-cta-count">8 specialized solutions</span>
      </div>
    </div>
  </div>
  <div class="ind-solutions-drawer">
    <div class="ind-sol-grid">
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-layer-group"></i></div><h4>Learning Management System</h4><p>Course builder, video hosting, assessments, certificates and progress tracking with SCORM support.</p><ul><li><i class="fa-solid fa-check"></i>SCORM / xAPI</li><li><i class="fa-solid fa-check"></i>Video Hosting</li><li><i class="fa-solid fa-check"></i>Auto Certificates</li></ul></div>
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-chalkboard-user"></i></div><h4>Virtual Classroom</h4><p>Live class platform with whiteboard, breakout rooms, polls and real-time engagement analytics.</p><ul><li><i class="fa-solid fa-check"></i>Interactive Whiteboard</li><li><i class="fa-solid fa-check"></i>Breakout Rooms</li><li><i class="fa-solid fa-check"></i>Engagement Analytics</li></ul></div>
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-clipboard-question"></i></div><h4>Assessment Platform</h4><p>Adaptive online exams with AI proctoring, auto-grading and question bank management.</p><ul><li><i class="fa-solid fa-check"></i>AI Proctoring</li><li><i class="fa-solid fa-check"></i>Adaptive Questions</li><li><i class="fa-solid fa-check"></i>Auto-grading</li></ul></div>
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-robot"></i></div><h4>AI Personalized Learning</h4><p>ML-driven learning paths adapting to each student's pace, strengths and weaknesses.</p><ul><li><i class="fa-solid fa-check"></i>Adaptive Learning</li><li><i class="fa-solid fa-check"></i>Skill Gap Analysis</li><li><i class="fa-solid fa-check"></i>Smart Recommendations</li></ul></div>
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-school"></i></div><h4>School / College ERP</h4><p>Admissions, attendance, fee collection, timetable and parent communication system.</p><ul><li><i class="fa-solid fa-check"></i>Fee Management</li><li><i class="fa-solid fa-check"></i>Attendance Tracking</li><li><i class="fa-solid fa-check"></i>Parent Portal</li></ul></div>
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-mobile-screen"></i></div><h4>EdTech Mobile App</h4><p>Gamified iOS/Android apps with offline content, bite-sized lessons and leaderboards.</p><ul><li><i class="fa-solid fa-check"></i>Offline Content</li><li><i class="fa-solid fa-check"></i>Gamification</li><li><i class="fa-solid fa-check"></i>Leaderboards</li></ul></div>
    </div>
  </div>
</section>

<!-- ─── 5. MANUFACTURING ─── -->
<section id="ind-manufacturing" class="ind-detail-section light ta-section-reveal" style="--sec-color:#e63946" aria-labelledby="ind-mfg-h">
  <div class="ind-split">
    <div class="ind-split-visual">
      <img class="ind-split-img" src="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=900&q=80" alt="Manufacturing">
      <div class="ind-split-overlay">
        <!-- Gears animation -->
        <svg class="ind-svg-anim" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Large gear -->
          <g class="svg-rotate-slow" style="transform-origin:100px 120px">
            <circle cx="100" cy="120" r="40" stroke="#e63946" stroke-width="2"/>
            <circle cx="100" cy="120" r="16" fill="rgba(230,57,70,.2)" stroke="#e63946" stroke-width="1.5"/>
            <rect x="96" y="76" width="8" height="12" rx="2" fill="#e63946"/>
            <rect x="96" y="152" width="8" height="12" rx="2" fill="#e63946"/>
            <rect x="56" y="116" width="12" height="8" rx="2" fill="#e63946"/>
            <rect x="132" y="116" width="12" height="8" rx="2" fill="#e63946"/>
            <rect x="69" y="86" width="10" height="8" rx="2" fill="#e63946" transform="rotate(45 74 90)"/>
            <rect x="120" y="135" width="10" height="8" rx="2" fill="#e63946" transform="rotate(45 125 139)"/>
          </g>
          <!-- Small gear -->
          <g class="svg-rotate-rev" style="transform-origin:158px 90px">
            <circle cx="158" cy="90" r="25" stroke="#e63946" stroke-width="1.5"/>
            <circle cx="158" cy="90" r="10" fill="rgba(230,57,70,.2)" stroke="#e63946" stroke-width="1"/>
            <rect x="154" y="62" width="8" height="10" rx="2" fill="#e63946"/>
            <rect x="154" y="108" width="8" height="10" rx="2" fill="#e63946"/>
            <rect x="130" y="86" width="10" height="8" rx="2" fill="#e63946"/>
            <rect x="176" y="86" width="10" height="8" rx="2" fill="#e63946"/>
          </g>
          <!-- IoT dots -->
          <circle cx="185" cy="160" r="6" fill="rgba(230,57,70,.6)" class="svg-pulse"/>
          <circle cx="55" cy="170" r="4" fill="rgba(230,57,70,.4)" class="svg-pulse" style="animation-delay:.7s"/>
          <!-- Lines connecting -->
          <line x1="164" y1="113" x2="185" y2="154" stroke="rgba(230,57,70,.3)" stroke-width="1" stroke-dasharray="3 3"/>
        </svg>
      </div>
    </div>
    <div class="ind-split-content">
      <div class="ind-split-eyebrow">Manufacturing &amp; IoT</div>
      <h2 class="ind-split-title" id="ind-mfg-h">Smart Factory &amp; <span class="hl">Industry 4.0</span> Software Solutions</h2>
      <p class="ind-split-desc">IoT-connected manufacturing software that reduces downtime, optimizes production, automates quality control and delivers real-time visibility across your entire operation.</p>
      <div class="ind-sol-pills">
        <span class="ind-sol-pill"><i class="fa-solid fa-sitemap"></i>Manufacturing ERP</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-gauge-high"></i>IoT Dashboard</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-wrench"></i>Predictive Maintenance</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-microscope"></i>Quality Management</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-boxes-stacked"></i>Supply Chain</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-warehouse"></i>Warehouse Mgmt</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-hard-hat"></i>Worker Safety</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-chart-bar"></i>Production Analytics</span>
      </div>
      <div class="ind-split-cta">
        <a href="<?php echo esc_url(home_url('/industries/manufacturing/')); ?>" class="ind-split-cta-btn"><i class="fa-solid fa-arrow-right"></i> Explore Smart Factory IoT</a>
        <span class="ind-split-cta-count">8 specialized solutions</span>
      </div>
    </div>
  </div>
  <div class="ind-solutions-drawer">
    <div class="ind-sol-grid">
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-sitemap"></i></div><h4>Manufacturing ERP</h4><p>Production planning, BOM management, shop floor control, costing and financial consolidation.</p><ul><li><i class="fa-solid fa-check"></i>BOM &amp; Routing</li><li><i class="fa-solid fa-check"></i>Shop Floor Control</li><li><i class="fa-solid fa-check"></i>Cost Accounting</li></ul></div>
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-gauge-high"></i></div><h4>IoT Factory Dashboard</h4><p>Real-time machine monitoring connecting PLCs, SCADA and sensors for OEE visibility.</p><ul><li><i class="fa-solid fa-check"></i>PLC / SCADA</li><li><i class="fa-solid fa-check"></i>OEE Monitoring</li><li><i class="fa-solid fa-check"></i>Real-time Alerts</li></ul></div>
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-wrench"></i></div><h4>Predictive Maintenance</h4><p>AI failure prediction using sensor data and ML models to prevent unplanned downtime.</p><ul><li><i class="fa-solid fa-check"></i>Sensor Data ML</li><li><i class="fa-solid fa-check"></i>Failure Prediction</li><li><i class="fa-solid fa-check"></i>Work Order Automation</li></ul></div>
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-microscope"></i></div><h4>Quality Management</h4><p>Digital QMS for inspections, non-conformance tracking, CAPA and supplier audits.</p><ul><li><i class="fa-solid fa-check"></i>Digital Checklists</li><li><i class="fa-solid fa-check"></i>CAPA Management</li><li><i class="fa-solid fa-check"></i>Supplier Audits</li></ul></div>
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-warehouse"></i></div><h4>Warehouse Management</h4><p>WMS with bin management, pick-pack-ship workflows and RFID tracking.</p><ul><li><i class="fa-solid fa-check"></i>Bin Management</li><li><i class="fa-solid fa-check"></i>Pick-Pack-Ship</li><li><i class="fa-solid fa-check"></i>RFID Integration</li></ul></div>
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-chart-bar"></i></div><h4>Production Analytics</h4><p>KPI dashboards with shift reports, yield analysis, waste tracking and efficiency benchmarking.</p><ul><li><i class="fa-solid fa-check"></i>Shift Reporting</li><li><i class="fa-solid fa-check"></i>Yield Analysis</li><li><i class="fa-solid fa-check"></i>Waste Tracking</li></ul></div>
    </div>
  </div>
</section>

<!-- ─── 6. REAL ESTATE ─── -->
<section id="ind-realestate" class="ind-detail-section alt ta-section-reveal" style="--sec-color:#f4a261" aria-labelledby="ind-re-h">
  <div class="ind-split reverse">
    <div class="ind-split-visual">
      <img class="ind-split-img" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80" alt="Real Estate">
      <div class="ind-split-overlay">
        <!-- City building animation -->
        <svg class="ind-svg-anim" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="120" cy="120" r="100" stroke="rgba(244,162,97,.15)" stroke-width="1"/>
          <!-- Buildings -->
          <rect x="40" y="120" width="35" height="80" rx="2" fill="rgba(244,162,97,.2)" stroke="#f4a261" stroke-width="1.5"/>
          <rect x="80" y="90" width="45" height="110" rx="2" fill="rgba(244,162,97,.25)" stroke="#f4a261" stroke-width="1.5"/>
          <rect x="130" y="70" width="30" height="130" rx="2" fill="rgba(244,162,97,.3)" stroke="#f4a261" stroke-width="1.5"/>
          <rect x="165" y="110" width="35" height="90" rx="2" fill="rgba(244,162,97,.2)" stroke="#f4a261" stroke-width="1.5"/>
          <!-- Windows lit -->
          <rect x="48" y="130" width="7" height="7" rx="1" fill="#f4a261" class="svg-star" style="--dur:2s;--d:0s"/>
          <rect x="60" y="130" width="7" height="7" rx="1" fill="#f4a261" class="svg-star" style="--dur:2.5s;--d:.3s"/>
          <rect x="88" y="100" width="9" height="9" rx="1" fill="#f4a261" class="svg-star" style="--dur:1.8s;--d:.1s"/>
          <rect x="104" y="100" width="9" height="9" rx="1" fill="#f4a261" class="svg-star" style="--dur:2.2s;--d:.6s"/>
          <rect x="88" y="120" width="9" height="9" rx="1" fill="#f4a261" class="svg-star" style="--dur:3s;--d:.4s"/>
          <rect x="138" y="80" width="8" height="8" rx="1" fill="#f4a261" class="svg-star" style="--dur:1.5s;--d:.2s"/>
          <rect x="150" y="80" width="8" height="8" rx="1" fill="#f4a261" class="svg-star" style="--dur:2.8s;--d:.7s"/>
          <!-- Ground -->
          <line x1="30" y1="200" x2="210" y2="200" stroke="rgba(244,162,97,.4)" stroke-width="2"/>
          <!-- Location pin -->
          <path d="M145,55 C145,47 139,42 132,45 C125,42 119,47 119,55 C119,63 132,73 132,73 C132,73 145,63 145,55Z" fill="rgba(244,162,97,.6)" stroke="#f4a261" stroke-width="1.5" class="svg-bounce"/>
          <circle cx="132" cy="55" r="5" fill="#f4a261"/>
        </svg>
      </div>
    </div>
    <div class="ind-split-content">
      <div class="ind-split-eyebrow">Real Estate &amp; PropTech</div>
      <h2 class="ind-split-title" id="ind-re-h">Modern PropTech for <span class="hl">Smart Property</span> Businesses</h2>
      <p class="ind-split-desc">End-to-end real estate technology from virtual property tours to AI-powered valuation engines, helping agents, developers and property managers close deals faster.</p>
      <div class="ind-sol-pills">
        <span class="ind-sol-pill"><i class="fa-solid fa-house-chimney"></i>Property Portal</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-vr-cardboard"></i>Virtual Tours</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-briefcase"></i>Real Estate CRM</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-chart-area"></i>AI Valuation</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-key"></i>Rental Management</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-file-contract"></i>e-Signing</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-building-columns"></i>Investment Platform</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-city"></i>Builder Portal</span>
      </div>
      <div class="ind-split-cta">
        <a href="<?php echo esc_url(home_url('/industries/realestate/')); ?>" class="ind-split-cta-btn"><i class="fa-solid fa-arrow-right"></i> Explore PropTech Platform</a>
        <span class="ind-split-cta-count">8 specialized solutions</span>
      </div>
    </div>
  </div>
  <div class="ind-solutions-drawer">
    <div class="ind-sol-grid">
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-house-chimney"></i></div><h4>Property Listing Portal</h4><p>MLS-connected platforms with advanced search, map view, mortgage calculator and lead capture.</p><ul><li><i class="fa-solid fa-check"></i>MLS Integration</li><li><i class="fa-solid fa-check"></i>Map-based Search</li><li><i class="fa-solid fa-check"></i>Lead Capture</li></ul></div>
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-vr-cardboard"></i></div><h4>Virtual Tours &amp; 3D Viewer</h4><p>360° virtual tours, 3D floor plans and AR furniture staging for immersive buyer experiences.</p><ul><li><i class="fa-solid fa-check"></i>360° Tour Engine</li><li><i class="fa-solid fa-check"></i>3D Floor Plans</li><li><i class="fa-solid fa-check"></i>AR Staging</li></ul></div>
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-chart-area"></i></div><h4>AI Valuation Engine</h4><p>ML-powered AVM predicting property values using comparable sales and market trends.</p><ul><li><i class="fa-solid fa-check"></i>Automated Valuation</li><li><i class="fa-solid fa-check"></i>Comps Analysis</li><li><i class="fa-solid fa-check"></i>Market Trends</li></ul></div>
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-key"></i></div><h4>Rental Management</h4><p>Tenant onboarding, rent collection, maintenance requests and lease tracking all-in-one.</p><ul><li><i class="fa-solid fa-check"></i>Online Rent</li><li><i class="fa-solid fa-check"></i>Maintenance Tickets</li><li><i class="fa-solid fa-check"></i>Lease Tracking</li></ul></div>
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-briefcase"></i></div><h4>Real Estate CRM</h4><p>Lead scoring, pipeline management, automated follow-ups and drip campaign tools for agents.</p><ul><li><i class="fa-solid fa-check"></i>Lead Scoring</li><li><i class="fa-solid fa-check"></i>Pipeline Tracking</li><li><i class="fa-solid fa-check"></i>Drip Campaigns</li></ul></div>
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-building-columns"></i></div><h4>Investment Platform</h4><p>Real estate crowdfunding and fractional ownership with investor portals and ROI dashboards.</p><ul><li><i class="fa-solid fa-check"></i>Investor Portal</li><li><i class="fa-solid fa-check"></i>ROI Dashboard</li><li><i class="fa-solid fa-check"></i>Distribution Engine</li></ul></div>
    </div>
  </div>
</section>

<!-- ─── 7. GAMING ─── -->
<section id="ind-gaming" class="ind-detail-section light ta-section-reveal" style="--sec-color:#6a0dad" aria-labelledby="ind-gm-h">
  <div class="ind-split">
    <div class="ind-split-visual">
      <img class="ind-split-img" src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=900&q=80" alt="Gaming">
      <div class="ind-split-overlay">
        <!-- Controller + stars animation -->
        <svg class="ind-svg-anim" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="120" cy="120" r="100" stroke="rgba(106,13,173,.2)" stroke-width="1"/>
          <!-- Controller shape -->
          <path d="M60,100 C55,100 45,108 45,120 C45,145 65,160 80,155 L90,140 L150,140 L160,155 C175,160 195,145 195,120 C195,108 185,100 180,100 Z" fill="rgba(106,13,173,.25)" stroke="#6a0dad" stroke-width="2" class="svg-float"/>
          <!-- D-pad -->
          <rect x="72" y="113" width="8" height="24" rx="2" fill="#6a0dad"/>
          <rect x="64" y="121" width="24" height="8" rx="2" fill="#6a0dad"/>
          <!-- Buttons -->
          <circle cx="158" cy="113" r="7" fill="rgba(106,13,173,.5)" stroke="#6a0dad" stroke-width="1.5"/>
          <circle cx="172" cy="122" r="7" fill="rgba(106,13,173,.5)" stroke="#6a0dad" stroke-width="1.5"/>
          <circle cx="158" cy="131" r="7" fill="rgba(106,13,173,.5)" stroke="#6a0dad" stroke-width="1.5"/>
          <circle cx="144" cy="122" r="7" fill="rgba(106,13,173,.5)" stroke="#6a0dad" stroke-width="1.5"/>
          <!-- Stars -->
          <text x="50" y="75" font-size="18" fill="rgba(106,13,173,.7)" class="svg-star" style="--dur:1.5s;--d:0s">⭐</text>
          <text x="170" y="70" font-size="14" fill="rgba(106,13,173,.5)" class="svg-star" style="--dur:2s;--d:.4s">⭐</text>
          <text x="195" y="100" font-size="10" fill="rgba(106,13,173,.4)" class="svg-star" style="--dur:2.5s;--d:.7s">✦</text>
          <text x="30" y="140" font-size="12" fill="rgba(106,13,173,.4)" class="svg-star" style="--dur:1.8s;--d:.2s">✦</text>
          <!-- Score -->
          <text x="120" y="195" font-family="Arial" font-size="13" font-weight="bold" fill="rgba(106,13,173,.6)" text-anchor="middle" class="svg-bounce">SCORE: 99,999</text>
        </svg>
      </div>
    </div>
    <div class="ind-split-content">
      <div class="ind-split-eyebrow">Gaming &amp; Entertainment</div>
      <h2 class="ind-split-title" id="ind-gm-h">Immersive &amp; <span class="hl">Monetizable</span> Gaming Experiences</h2>
      <p class="ind-split-desc">From casual mobile games to multiplayer online worlds and AR/VR experiences — captivating entertainment applications engineered for player retention and revenue growth.</p>
      <div class="ind-sol-pills">
        <span class="ind-sol-pill"><i class="fa-solid fa-mobile-screen"></i>Mobile Game Dev</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-users"></i>Multiplayer Backend</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-vr-cardboard"></i>AR / VR</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-circle-play"></i>Video Streaming</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-coins"></i>Monetization Engine</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-chart-bar"></i>Game Analytics</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-comments"></i>Community Features</span>
      </div>
      <div class="ind-split-cta">
        <a href="<?php echo esc_url(home_url('/industries/gaming/')); ?>" class="ind-split-cta-btn"><i class="fa-solid fa-arrow-right"></i> Explore Gaming Software</a>
        <span class="ind-split-cta-count">7 specialized solutions</span>
      </div>
    </div>
  </div>
  <div class="ind-solutions-drawer">
    <div class="ind-sol-grid">
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-mobile-screen"></i></div><h4>Mobile Game Development</h4><p>iOS and Android games built with Unity and Unreal Engine with live ops support.</p><ul><li><i class="fa-solid fa-check"></i>Unity / Unreal Engine</li><li><i class="fa-solid fa-check"></i>Cross-platform</li><li><i class="fa-solid fa-check"></i>Live Ops Ready</li></ul></div>
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-users"></i></div><h4>Multiplayer Backend</h4><p>Scalable game servers with real-time matchmaking, anti-cheat and global leaderboards.</p><ul><li><i class="fa-solid fa-check"></i>Real-time Matchmaking</li><li><i class="fa-solid fa-check"></i>Anti-cheat System</li><li><i class="fa-solid fa-check"></i>Global Leaderboards</li></ul></div>
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-vr-cardboard"></i></div><h4>AR / VR Experiences</h4><p>VR games, training simulations for Meta Quest, ARKit and ARCore platforms.</p><ul><li><i class="fa-solid fa-check"></i>Meta Quest / ARKit</li><li><i class="fa-solid fa-check"></i>VR Simulations</li><li><i class="fa-solid fa-check"></i>Spatial Audio</li></ul></div>
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-circle-play"></i></div><h4>Video Streaming Platform</h4><p>OTT and gaming streams with adaptive bitrate, DRM protection and CDN integration.</p><ul><li><i class="fa-solid fa-check"></i>Adaptive Bitrate</li><li><i class="fa-solid fa-check"></i>DRM Protection</li><li><i class="fa-solid fa-check"></i>CDN Integration</li></ul></div>
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-coins"></i></div><h4>Monetization Engine</h4><p>IAP, virtual currency, battle pass, subscriptions and ad mediation for revenue maximization.</p><ul><li><i class="fa-solid fa-check"></i>IAP &amp; Virtual Currency</li><li><i class="fa-solid fa-check"></i>Battle Pass</li><li><i class="fa-solid fa-check"></i>Ad Mediation</li></ul></div>
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-chart-bar"></i></div><h4>Game Analytics</h4><p>Player behavior analytics, retention cohorts, funnel analysis and A/B testing dashboards.</p><ul><li><i class="fa-solid fa-check"></i>Retention Cohorts</li><li><i class="fa-solid fa-check"></i>Funnel Analysis</li><li><i class="fa-solid fa-check"></i>A/B Testing</li></ul></div>
    </div>
  </div>
</section>

<!-- ─── 8. LOGISTICS ─── -->
<section id="ind-logistics" class="ind-detail-section alt ta-section-reveal" style="--sec-color:#2ec4b6" aria-labelledby="ind-lg-h">
  <div class="ind-split reverse">
    <div class="ind-split-visual">
      <img class="ind-split-img" src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80" alt="Logistics">
      <div class="ind-split-overlay">
        <!-- Truck + map animation -->
        <svg class="ind-svg-anim" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="120" cy="120" r="100" stroke="rgba(46,196,182,.15)" stroke-width="1"/>
          <!-- Road/path -->
          <path d="M30,160 C60,150 90,180 120,160 C150,140 180,170 210,155" stroke="rgba(46,196,182,.3)" stroke-width="6" stroke-linecap="round"/>
          <path d="M30,160 C60,150 90,180 120,160 C150,140 180,170 210,155" stroke="rgba(46,196,182,.15)" stroke-width="10" stroke-linecap="round"/>
          <!-- Truck -->
          <g class="svg-truck">
            <rect x="60" y="135" width="50" height="28" rx="3" fill="rgba(46,196,182,.35)" stroke="#2ec4b6" stroke-width="1.5"/>
            <path d="M110,140 L130,140 L135,148 L130,163 L110,163Z" fill="rgba(46,196,182,.25)" stroke="#2ec4b6" stroke-width="1.5"/>
            <circle cx="75" cy="163" r="7" fill="rgba(46,196,182,.4)" stroke="#2ec4b6" stroke-width="1.5"/>
            <circle cx="105" cy="163" r="7" fill="rgba(46,196,182,.4)" stroke="#2ec4b6" stroke-width="1.5"/>
            <circle cx="125" cy="163" r="6" fill="rgba(46,196,182,.4)" stroke="#2ec4b6" stroke-width="1.5"/>
          </g>
          <!-- Location dots -->
          <circle cx="55" cy="130" r="6" fill="#2ec4b6" class="svg-pulse"/>
          <circle cx="120" cy="110" r="5" fill="rgba(46,196,182,.6)" class="svg-pulse" style="animation-delay:.5s"/>
          <circle cx="185" cy="125" r="6" fill="#2ec4b6" class="svg-pulse" style="animation-delay:1s"/>
          <!-- Connection lines -->
          <line x1="55" y1="130" x2="120" y2="110" stroke="rgba(46,196,182,.4)" stroke-dasharray="4 4" stroke-width="1"/>
          <line x1="120" y1="110" x2="185" y2="125" stroke="rgba(46,196,182,.4)" stroke-dasharray="4 4" stroke-width="1"/>
          <!-- Status bar -->
          <text x="120" y="90" font-family="Arial" font-size="10" fill="rgba(46,196,182,.7)" text-anchor="middle" class="svg-float">TRACKING: EN ROUTE ▶</text>
        </svg>
      </div>
    </div>
    <div class="ind-split-content">
      <div class="ind-split-eyebrow">Logistics &amp; Supply Chain</div>
      <h2 class="ind-split-title" id="ind-lg-h">Real-time Visibility &amp; <span class="hl">End-to-End</span> Supply Chain Control</h2>
      <p class="ind-split-desc">Logistics platforms that track every shipment in real time, optimize routes, automate dispatch and give complete supply chain transparency from warehouse to last mile.</p>
      <div class="ind-sol-pills">
        <span class="ind-sol-pill"><i class="fa-solid fa-truck-moving"></i>Fleet Management</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-route"></i>Route Optimization</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-warehouse"></i>Warehouse Mgmt</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-map-pin"></i>Last-Mile App</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-barcode"></i>Track &amp; Trace</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-file-invoice"></i>Freight Billing</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-chart-line"></i>Supply Chain Analytics</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-globe"></i>Customs Compliance</span>
      </div>
      <div class="ind-split-cta">
        <a href="<?php echo esc_url(home_url('/industries/logistics/')); ?>" class="ind-split-cta-btn"><i class="fa-solid fa-arrow-right"></i> Explore Logistics Tech</a>
        <span class="ind-split-cta-count">8 specialized solutions</span>
      </div>
    </div>
  </div>
  <div class="ind-solutions-drawer">
    <div class="ind-sol-grid">
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-truck-moving"></i></div><h4>Fleet Management</h4><p>Real-time GPS tracking, driver management, maintenance scheduling and fuel monitoring.</p><ul><li><i class="fa-solid fa-check"></i>GPS Tracking</li><li><i class="fa-solid fa-check"></i>Driver Scorecards</li><li><i class="fa-solid fa-check"></i>Fuel Monitoring</li></ul></div>
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-route"></i></div><h4>Route Optimization</h4><p>AI multi-stop route planning reducing delivery time and fuel costs with dynamic re-routing.</p><ul><li><i class="fa-solid fa-check"></i>Multi-stop Planning</li><li><i class="fa-solid fa-check"></i>Dynamic Re-routing</li><li><i class="fa-solid fa-check"></i>Cost Optimization</li></ul></div>
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-map-pin"></i></div><h4>Last-Mile Delivery</h4><p>Rider apps with digital proof-of-delivery, photo capture and customer notifications.</p><ul><li><i class="fa-solid fa-check"></i>Digital POD</li><li><i class="fa-solid fa-check"></i>Photo Capture</li><li><i class="fa-solid fa-check"></i>Customer Alerts</li></ul></div>
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-barcode"></i></div><h4>Track &amp; Trace</h4><p>End-to-end shipment tracking with carrier integration, milestone alerts and exception management.</p><ul><li><i class="fa-solid fa-check"></i>Carrier Integration</li><li><i class="fa-solid fa-check"></i>Milestone Alerts</li><li><i class="fa-solid fa-check"></i>Exception Mgmt</li></ul></div>
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-warehouse"></i></div><h4>Warehouse Management</h4><p>WMS with receiving, pick-pack-ship, cycle counting and 3PL billing.</p><ul><li><i class="fa-solid fa-check"></i>3PL Billing</li><li><i class="fa-solid fa-check"></i>Cycle Counting</li><li><i class="fa-solid fa-check"></i>Putaway Optimization</li></ul></div>
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-chart-line"></i></div><h4>Supply Chain Analytics</h4><p>Demand forecasting, inventory optimization, OTD KPIs and carbon footprint tracking.</p><ul><li><i class="fa-solid fa-check"></i>Demand Forecasting</li><li><i class="fa-solid fa-check"></i>OTD KPIs</li><li><i class="fa-solid fa-check"></i>Carbon Tracking</li></ul></div>
    </div>
  </div>
</section>

<!-- ─── 9. TRAVEL ─── -->
<section id="ind-travel" class="ind-detail-section light ta-section-reveal" style="--sec-color:#0096c7" aria-labelledby="ind-tr-h">
  <div class="ind-split">
    <div class="ind-split-visual">
      <img class="ind-split-img" src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=80" alt="Travel">
      <div class="ind-split-overlay">
        <!-- Plane path animation -->
        <svg class="ind-svg-anim" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="120" cy="120" r="100" stroke="rgba(0,150,199,.15)" stroke-width="1"/>
          <!-- Curved flight path -->
          <path d="M40,170 Q80,60 200,80" stroke="rgba(0,150,199,.4)" stroke-width="1.5" stroke-dasharray="6 4"/>
          <!-- Plane -->
          <g class="svg-plane">
            <path d="M155,90 L168,82 L166,90 L175,87 L170,94 L159,95Z" fill="#0096c7"/>
            <path d="M155,90 L148,96 L153,98Z" fill="rgba(0,150,199,.6)"/>
          </g>
          <!-- Departure city -->
          <circle cx="40" cy="170" r="8" fill="rgba(0,150,199,.5)" stroke="#0096c7" stroke-width="1.5" class="svg-pulse"/>
          <text x="22" y="188" font-family="Arial" font-size="10" fill="rgba(0,150,199,.7)">DEP</text>
          <!-- Arrival city -->
          <circle cx="200" cy="80" r="8" fill="rgba(0,150,199,.5)" stroke="#0096c7" stroke-width="1.5" class="svg-pulse" style="animation-delay:.6s"/>
          <text x="185" y="70" font-family="Arial" font-size="10" fill="rgba(0,150,199,.7)">ARR</text>
          <!-- Stars/clouds -->
          <text x="85" y="72" font-size="14" fill="rgba(0,150,199,.4)" class="svg-float">☁</text>
          <text x="55" y="120" font-size="10" fill="rgba(0,150,199,.3)" class="svg-float" style="animation-delay:1s">☁</text>
          <text x="175" y="140" font-size="8" fill="rgba(0,150,199,.3)" class="svg-float" style="animation-delay:.5s">☁</text>
          <!-- ETA -->
          <text x="120" y="200" font-family="Arial" font-size="11" font-weight="bold" fill="rgba(0,150,199,.6)" text-anchor="middle" class="svg-bounce">ETA: 3h 45m ✈</text>
        </svg>
      </div>
    </div>
    <div class="ind-split-content">
      <div class="ind-split-eyebrow">Travel &amp; Hospitality</div>
      <h2 class="ind-split-title" id="ind-tr-h">Seamless Journeys &amp; <span class="hl">Smart Hospitality</span> Technology</h2>
      <p class="ind-split-desc">Travel booking engines, hotel property management systems and AI concierge apps that delight travelers, maximize revenue and streamline operations for hospitality brands.</p>
      <div class="ind-sol-pills">
        <span class="ind-sol-pill"><i class="fa-solid fa-calendar-check"></i>Booking Engine</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-hotel"></i>Hotel PMS</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-mobile-screen"></i>Travel App</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-star"></i>Review Management</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-robot"></i>AI Concierge</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-tags"></i>Revenue Management</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-bus"></i>Tour Platform</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-utensils"></i>F&amp;B Management</span>
      </div>
      <div class="ind-split-cta">
        <a href="<?php echo esc_url(home_url('/industries/travel/')); ?>" class="ind-split-cta-btn"><i class="fa-solid fa-arrow-right"></i> Explore Travel Booking Tech</a>
        <span class="ind-split-cta-count">8 specialized solutions</span>
      </div>
    </div>
  </div>
  <div class="ind-solutions-drawer">
    <div class="ind-sol-grid">
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-calendar-check"></i></div><h4>Online Booking Engine</h4><p>Flights, hotels, packages with GDS integration, dynamic pricing and multi-currency checkout.</p><ul><li><i class="fa-solid fa-check"></i>GDS / OTA Integration</li><li><i class="fa-solid fa-check"></i>Dynamic Pricing</li><li><i class="fa-solid fa-check"></i>Multi-currency</li></ul></div>
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-hotel"></i></div><h4>Hotel PMS</h4><p>Reservations, front desk, housekeeping, POS, channel manager and revenue management.</p><ul><li><i class="fa-solid fa-check"></i>Channel Manager</li><li><i class="fa-solid fa-check"></i>Revenue Management</li><li><i class="fa-solid fa-check"></i>Housekeeping Module</li></ul></div>
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-robot"></i></div><h4>AI Travel Concierge</h4><p>24/7 chatbot for guest support, personalized recommendations and smart upselling.</p><ul><li><i class="fa-solid fa-check"></i>24/7 AI Chatbot</li><li><i class="fa-solid fa-check"></i>Smart Upselling</li><li><i class="fa-solid fa-check"></i>Personalized Trips</li></ul></div>
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-tags"></i></div><h4>Revenue Management</h4><p>AI-powered dynamic pricing, occupancy forecasting and competitor rate monitoring.</p><ul><li><i class="fa-solid fa-check"></i>Dynamic Pricing</li><li><i class="fa-solid fa-check"></i>Occupancy Forecast</li><li><i class="fa-solid fa-check"></i>Competitor Rates</li></ul></div>
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-mobile-screen"></i></div><h4>Travel Companion App</h4><p>Itinerary management, offline maps, local recommendations and group trip planning.</p><ul><li><i class="fa-solid fa-check"></i>Offline Maps</li><li><i class="fa-solid fa-check"></i>Itinerary Builder</li><li><i class="fa-solid fa-check"></i>Group Trip Tools</li></ul></div>
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-star"></i></div><h4>Reputation Management</h4><p>Automated review collection from Booking.com, TripAdvisor and Google with sentiment analysis.</p><ul><li><i class="fa-solid fa-check"></i>Multi-platform Reviews</li><li><i class="fa-solid fa-check"></i>Sentiment Analysis</li><li><i class="fa-solid fa-check"></i>Auto Response</li></ul></div>
    </div>
  </div>
</section>

<!-- ─── 10. LEGAL ─── -->
<section id="ind-legal" class="ind-detail-section alt ta-section-reveal" style="--sec-color:#2d6a4f" aria-labelledby="ind-le-h">
  <div class="ind-split reverse">
    <div class="ind-split-visual">
      <img class="ind-split-img" src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=900&q=80" alt="Legal">
      <div class="ind-split-overlay">
        <!-- Scales of justice animation -->
        <svg class="ind-svg-anim" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="120" cy="120" r="100" stroke="rgba(45,106,79,.15)" stroke-width="1"/>
          <!-- Scales pole -->
          <line x1="120" y1="50" x2="120" y2="180" stroke="#2d6a4f" stroke-width="2.5" stroke-linecap="round"/>
          <!-- Crossbar -->
          <line x1="60" y1="90" x2="180" y2="90" stroke="#2d6a4f" stroke-width="2" stroke-linecap="round"/>
          <!-- Top circle -->
          <circle cx="120" cy="50" r="8" fill="rgba(45,106,79,.3)" stroke="#2d6a4f" stroke-width="1.5"/>
          <!-- Left scale pan -->
          <g class="svg-scale-left">
            <line x1="60" y1="90" x2="65" y2="130" stroke="#2d6a4f" stroke-width="1.5"/>
            <line x1="60" y1="90" x2="55" y2="130" stroke="#2d6a4f" stroke-width="1.5"/>
            <path d="M50,130 C53,140 67,140 70,130 C67,120 53,120 50,130Z" fill="rgba(45,106,79,.3)" stroke="#2d6a4f" stroke-width="1.5"/>
          </g>
          <!-- Right scale pan -->
          <g class="svg-scale-right">
            <line x1="180" y1="90" x2="185" y2="130" stroke="#2d6a4f" stroke-width="1.5"/>
            <line x1="180" y1="90" x2="175" y2="130" stroke="#2d6a4f" stroke-width="1.5"/>
            <path d="M170,130 C173,140 187,140 190,130 C187,120 173,120 170,130Z" fill="rgba(45,106,79,.3)" stroke="#2d6a4f" stroke-width="1.5"/>
          </g>
          <!-- Base -->
          <rect x="105" y="178" width="30" height="8" rx="4" fill="rgba(45,106,79,.4)" stroke="#2d6a4f" stroke-width="1"/>
          <!-- Document lines (top) -->
          <line x1="55" y1="55" x2="95" y2="55" stroke="rgba(45,106,79,.4)" stroke-width="1.5" stroke-linecap="round"/>
          <line x1="55" y1="63" x2="85" y2="63" stroke="rgba(45,106,79,.3)" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </div>
    </div>
    <div class="ind-split-content">
      <div class="ind-split-eyebrow">Legal &amp; Compliance</div>
      <h2 class="ind-split-title" id="ind-le-h">Automated &amp; <span class="hl">Tamper-Proof</span> Legal Operations</h2>
      <p class="ind-split-desc">LegalTech software that automates contract workflows, streamlines case management, enables legally binding e-signatures and ensures continuous regulatory compliance.</p>
      <div class="ind-sol-pills">
        <span class="ind-sol-pill"><i class="fa-solid fa-briefcase"></i>Case Management</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-file-signature"></i>Contract Automation</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-brain"></i>AI Legal Research</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-shield-halved"></i>Compliance Mgmt</span>
        <span class="ind-sol-pill"><i class="fa-solid fa-file-pdf"></i>Document Management</span>
      </div>
      <div class="ind-split-cta">
        <a href="<?php echo esc_url(home_url('/industries/legal/')); ?>" class="ind-split-cta-btn"><i class="fa-solid fa-arrow-right"></i> Explore LegalTech Platform</a>
        <span class="ind-split-cta-count">7 specialized solutions</span>
      </div>
    </div>
  </div>
  <div class="ind-solutions-drawer">
    <div class="ind-sol-grid">
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-folder-open"></i></div><h4>Case Management</h4><p>Centralized case files with task assignment, deadline tracking and court date calendaring.</p><ul><li><i class="fa-solid fa-check"></i>Task Assignment</li><li><i class="fa-solid fa-check"></i>Court Calendaring</li><li><i class="fa-solid fa-check"></i>Document Linking</li></ul></div>
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-file-signature"></i></div><h4>Contract Automation</h4><p>Template-based contracts, clause library, AI risk flagging, e-signature and lifecycle tracking.</p><ul><li><i class="fa-solid fa-check"></i>Template Builder</li><li><i class="fa-solid fa-check"></i>AI Risk Flagging</li><li><i class="fa-solid fa-check"></i>e-Signature</li></ul></div>
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-brain"></i></div><h4>AI Legal Research</h4><p>NLP-powered research surfacing case laws, statutes and precedents from large databases.</p><ul><li><i class="fa-solid fa-check"></i>Case Law Search</li><li><i class="fa-solid fa-check"></i>Statute Analysis</li><li><i class="fa-solid fa-check"></i>Precedent Finder</li></ul></div>
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-clock"></i></div><h4>Time &amp; Billing</h4><p>Automated time tracking, matter billing, invoice generation and trust accounting.</p><ul><li><i class="fa-solid fa-check"></i>Time Tracking</li><li><i class="fa-solid fa-check"></i>Trust Accounting</li><li><i class="fa-solid fa-check"></i>Invoice Generator</li></ul></div>
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-person-chalkboard"></i></div><h4>Client Portal</h4><p>Secure portals for document sharing, case status, invoice payments and encrypted messaging.</p><ul><li><i class="fa-solid fa-check"></i>Document Sharing</li><li><i class="fa-solid fa-check"></i>Invoice Payments</li><li><i class="fa-solid fa-check"></i>Secure Messaging</li></ul></div>
      <div class="ind-sol-card"><div class="ind-sol-card-icon"><i class="fa-solid fa-shield-halved"></i></div><h4>Compliance Management</h4><p>Regulatory tracking, obligation registers, policy management and automated compliance reports.</p><ul><li><i class="fa-solid fa-check"></i>Obligation Register</li><li><i class="fa-solid fa-check"></i>Policy Management</li><li><i class="fa-solid fa-check"></i>Auto Reports</li></ul></div>
    </div>
  </div>
</section>

<!-- ══════════════════════════ WHY ══════════════════════════ -->
<section id="ind-why" class="ind-sec-pad ta-section-reveal" aria-labelledby="ind-why-title">
  <div class="ind-container">
    <div class="ind-section-header" style="text-align:center;max-width:680px;margin:0 auto 52px" data-reveal>
      <div class="ind-eyebrow" style="justify-content:center">Why Choose Us</div>
      <h2 class="ind-section-title ind-section-title-light" id="ind-why-title">Why Industry Leaders <span class="ind-accent-text">Trust Techno Amaze</span></h2>
      <p class="ind-section-desc ind-section-desc-light">Deep domain expertise meets cutting-edge engineering — software that fits perfectly into your industry's workflow, regulation, and ecosystem.</p>
    </div>
    <div class="ind-why-grid" data-reveal-group>
      <div class="ind-why-card"><div class="ind-why-icon"><i class="fa-solid fa-microscope"></i></div><h3>Domain Expertise</h3><p>Specialized squads with hands-on experience in your industry's specific tools, regulations and workflows.</p></div>
      <div class="ind-why-card"><div class="ind-why-icon"><i class="fa-solid fa-shield-halved"></i></div><h3>Compliance-First</h3><p>HIPAA, PCI-DSS, GDPR, ISO 27001 — compliance built into the architecture, not as an afterthought.</p></div>
      <div class="ind-why-card"><div class="ind-why-icon"><i class="fa-solid fa-rocket"></i></div><h3>Fast Time-to-Market</h3><p>Pre-built industry modules reduce development time by 40% — launch faster and earn revenue sooner.</p></div>
      <div class="ind-why-card"><div class="ind-why-icon"><i class="fa-solid fa-arrows-up-to-line"></i></div><h3>Built to Scale</h3><p>Cloud-native microservices designed to handle 10x growth without a rewrite — grow without limits.</p></div>
      <div class="ind-why-card"><div class="ind-why-icon"><i class="fa-solid fa-headset"></i></div><h3>24/7 Support</h3><p>Dedicated account managers and technical teams available round-the-clock keeping your platform at peak.</p></div>
      <div class="ind-why-card"><div class="ind-why-icon"><i class="fa-solid fa-plug"></i></div><h3>Deep Integrations</h3><p>Native integrations with 100+ industry-standard tools — EHR, payment gateways, logistics APIs and more.</p></div>
    </div>
  </div>
</section>

<!-- ══════════════════════════ CTA ══════════════════════════ -->
<section id="ind-cta" class="ind-sec-pad ta-section-reveal" aria-labelledby="ind-cta-title">
  <div class="ind-cta-inner" data-reveal="scale">
    <div class="ind-cta-badge"><i class="fa-solid fa-rocket"></i> Ready to Build?</div>
    <h2 class="ind-cta-title" id="ind-cta-title">Let's Build Your <span class="grad">Industry-Specific</span> Solution Together</h2>
    <p class="ind-cta-desc">Tell us your industry, your challenge, and your vision — our domain experts will craft the perfect digital solution. First consultation is completely free.</p>
    <div class="ind-cta-btns">
      <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="ind-btn-primary"><i class="fa-solid fa-calendar-check"></i> Get Free Industry Consultation</a>
      <a href="<?php echo esc_url(home_url('/services/')); ?>" class="ind-btn-outline">View All Services</a>
    </div>
    <div class="ind-cta-trust">
      <div class="ind-trust-item"><i class="fa-solid fa-circle-check"></i> No commitment required</div>
      <div class="ind-trust-item"><i class="fa-solid fa-circle-check"></i> Response within 24 hours</div>
      <div class="ind-trust-item"><i class="fa-solid fa-circle-check"></i> Domain expert assigned</div>
      <div class="ind-trust-item"><i class="fa-solid fa-circle-check"></i> NDA available</div>
    </div>
  </div>
</section>

<!-- ══════════════════════════ FOOTER ══════════════════════════ -->

<?php
get_footer();
