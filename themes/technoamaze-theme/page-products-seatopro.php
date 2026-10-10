<?php
/**
 * Template Name: Seatopro (PRODUCTS)
 * Description: Custom template for Seatopro (PRODUCTS) page.
 *
 * @package TechnoAmaze
 * @version 1.0.0
 */

get_header();
?>

<!-- ══════════════════════════ SEATOPRO HERO ══════════════════════════ -->
  <section class="sp-hero">
    <div class="sp-hero-grid">
      <div>
        <span class="ta-eyebrow" style="margin-bottom:18px;">
          <i class="fa-solid fa-fire"></i> Flagship SaaS Product by Techno Amaze
        </span>
        <h1 class="ta-section-title" style="font-size:clamp(32px,4vw,54px);margin-bottom:20px;">
          Seato Pro — Smart <span class="ta-highlight-text">Library &amp; Reading Room</span> Platform
        </h1>
        <p class="ta-section-desc" style="font-size:clamp(15px,1.1vw,17px);margin-bottom:32px;max-width:560px;">
          Eliminate paper registers, seat disputes, and fee delays. Seato Pro is the #1 cloud ecosystem for modern libraries and study centers — offering real-time seat matrix allocation, student QR attendance, automated WhatsApp fee receipts, and locker tracking.
        </p>

        <!-- Standardized CTA Button Group -->
        <div class="sp-btn-group" style="margin-bottom:36px;">
          <a href="https://play.google.com/store/apps/details?id=com.technoamaze.seato_pro&hl=en_IN" target="_blank"
            rel="noopener" class="ta-btn ta-btn-primary" style="padding:16px 28px;">
            <i class="fa-brands fa-google-play" style="font-size:18px;"></i> Download Android App
          </a>
          <a href="https://seatopro.technoamaze.in/" target="_blank" rel="noopener" class="ta-btn ta-btn-dark"
            style="padding:16px 28px;">
            <i class="fa-solid fa-laptop"></i> Open Web Dashboard
          </a>
          <a href="contact.html?product=seatopro" class="ta-btn ta-btn-ghost" style="padding:16px 24px;">
            <i class="fa-solid fa-headset"></i> Request Demo
          </a>
        </div>

        <div style="display:flex;align-items:center;gap:20px;padding-top:20px;border-top:1px solid var(--ta-border);">
          <div style="display:flex;align-items:center;gap:8px;">
            <i class="fa-solid fa-star" style="color:#f59e0b;font-size:18px;"></i>
            <strong style="font-size:16px;color:var(--ta-ink);">4.8 / 5.0 Rating</strong>
            <span style="font-size:13px;color:var(--ta-muted);">(Google Play Store)</span>
          </div>
          <div style="height:20px;width:1px;background:var(--ta-border);"></div>
          <div style="font-size:13px;color:var(--ta-muted);">
            <strong style="color:var(--ta-ink);font-size:15px;">500+</strong> Libraries Active
          </div>
        </div>
      </div>

      <!-- Live Seat Grid Visual Demo Box -->
      <div class="sp-seat-box">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;padding-bottom:14px;border-bottom:1px solid var(--ta-border);flex-wrap:wrap;gap:10px;">
          <div>
            <h3 style="font-size:16px;font-weight:700;color:var(--ta-ink);margin:0;">Reading Hall A — Live Seat Matrix</h3>
            <span style="font-size:12px;color:var(--ta-muted);">Shift: Morning (06:00 AM - 02:00 PM)</span>
          </div>
          <span style="padding:4px 12px;background:rgba(6,214,160,0.14);color:#06d6a0;border-radius:20px;font-size:11px;font-weight:700;">88% Occupied</span>
        </div>

        <!-- Seat Grid Simulation -->
        <div class="sp-seat-matrix-grid" style="margin-bottom:20px;">
          <div style="background:rgba(200,0,110,0.12);border:1.5px solid var(--ta-accent);border-radius:10px;padding:12px 8px;text-align:center;">
            <i class="fa-solid fa-chair" style="color:var(--ta-accent);font-size:16px;"></i>
            <div style="font-size:11px;font-weight:700;color:var(--ta-ink);margin-top:4px;">A-01</div>
            <span style="font-size:9px;color:var(--ta-accent);font-weight:600;">Full Day</span>
          </div>
          <div style="background:rgba(6,214,160,0.12);border:1.5px solid #06d6a0;border-radius:10px;padding:12px 8px;text-align:center;">
            <i class="fa-solid fa-chair" style="color:#06d6a0;font-size:16px;"></i>
            <div style="font-size:11px;font-weight:700;color:var(--ta-ink);margin-top:4px;">A-02</div>
            <span style="font-size:9px;color:#06d6a0;font-weight:600;">Occupied</span>
          </div>
          <div style="background:rgba(0,180,216,0.12);border:1.5px solid #00b4d8;border-radius:10px;padding:12px 8px;text-align:center;">
            <i class="fa-solid fa-chair" style="color:#00b4d8;font-size:16px;"></i>
            <div style="font-size:11px;font-weight:700;color:var(--ta-ink);margin-top:4px;">A-03</div>
            <span style="font-size:9px;color:#00b4d8;font-weight:600;">Available</span>
          </div>
          <div style="background:rgba(6,214,160,0.12);border:1.5px solid #06d6a0;border-radius:10px;padding:12px 8px;text-align:center;">
            <i class="fa-solid fa-chair" style="color:#06d6a0;font-size:16px;"></i>
            <div style="font-size:11px;font-weight:700;color:var(--ta-ink);margin-top:4px;">A-04</div>
            <span style="font-size:9px;color:#06d6a0;font-weight:600;">Occupied</span>
          </div>
          <div style="background:rgba(200,0,110,0.12);border:1.5px solid var(--ta-accent);border-radius:10px;padding:12px 8px;text-align:center;">
            <i class="fa-solid fa-chair" style="color:var(--ta-accent);font-size:16px;"></i>
            <div style="font-size:11px;font-weight:700;color:var(--ta-ink);margin-top:4px;">A-05</div>
            <span style="font-size:9px;color:var(--ta-accent);font-weight:600;">Reserved</span>
          </div>
        </div>

        <div style="display:flex;align-items:center;justify-content:space-around;padding:12px;background:var(--ta-surface);border-radius:12px;font-size:12px;color:var(--ta-muted);flex-wrap:wrap;gap:8px;">
          <div><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#06d6a0;margin-right:6px;"></span> Occupied (42)</div>
          <div><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#00b4d8;margin-right:6px;"></span> Available (6)</div>
          <div><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#C8006E;margin-right:6px;"></span> Reserved (12)</div>
        </div>
      </div>
    </div>
  </section>

  <!-- STATS TICKER -->
  <section style="background:var(--ta-accent);padding:32px 20px;color:#ffffff;">
    <div class="sp-grid-4" style="max-width:var(--ta-container);margin:0 auto;text-align:center;">
      <div>
        <div style="font-family:var(--ta-font-head);font-size:32px;font-weight:900;">500+</div>
        <div style="font-size:13px;opacity:0.9;">Libraries &amp; Reading Halls</div>
      </div>
      <div>
        <div style="font-family:var(--ta-font-head);font-size:32px;font-weight:900;">50,000+</div>
        <div style="font-size:13px;opacity:0.9;">Students Managed Daily</div>
      </div>
      <div>
        <div style="font-family:var(--ta-font-head);font-size:32px;font-weight:900;">99.9%</div>
        <div style="font-size:13px;opacity:0.9;">Fee Recovery Rate</div>
      </div>
      <div>
        <div style="font-family:var(--ta-font-head);font-size:32px;font-weight:900;">4.8 ★</div>
        <div style="font-size:13px;opacity:0.9;">Google Play Store Rating</div>
      </div>
    </div>
  </section>

  <!-- CORE FEATURES SECTION -->
  <section style="padding:clamp(60px,8vw,100px) clamp(16px,4vw,60px);background:var(--ta-card-bg);">
    <div style="max-width:var(--ta-container);margin:0 auto;">
      <div style="text-align:center;max-width:720px;margin:0 auto 60px;">
        <span class="ta-eyebrow">Everything In One SaaS Platform</span>
        <h2 class="ta-section-title" style="margin-top:10px;">Powerful Features Designed For Library Owners</h2>
        <p class="ta-section-desc" style="margin-top:12px;">Seato Pro replaces manual notebooks, fee registers, and whatsapp groups with one intelligent cloud system.</p>
      </div>

      <div class="sp-grid-3">
        <!-- Feature 1 -->
        <div class="sp-feature-card">
          <div style="width:54px;height:54px;border-radius:14px;background:rgba(200,0,110,0.12);color:var(--ta-accent);display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:20px;">
            <i class="fa-solid fa-border-all"></i>
          </div>
          <h3 style="font-family:var(--ta-font-head);font-size:20px;font-weight:700;color:var(--ta-ink);margin-bottom:12px;">Real-Time Seat Matrix</h3>
          <p style="color:var(--ta-muted);font-size:14px;line-height:1.7;">Visual floorplan grid of your reading hall. Instantly allocate seats by shift (Morning, Evening, Full Day) without double-booking.</p>
        </div>

        <!-- Feature 2 -->
        <div class="sp-feature-card">
          <div style="width:54px;height:54px;border-radius:14px;background:rgba(6,214,160,0.14);color:#06d6a0;display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:20px;">
            <i class="fa-solid fa-qrcode"></i>
          </div>
          <h3 style="font-family:var(--ta-font-head);font-size:20px;font-weight:700;color:var(--ta-ink);margin-bottom:12px;">QR &amp; Biometric Attendance</h3>
          <p style="color:var(--ta-muted);font-size:14px;line-height:1.7;">Instant mobile QR scanning or biometric integration for student entry and exit tracking with timestamped logs.</p>
        </div>

        <!-- Feature 3 -->
        <div class="sp-feature-card">
          <div style="width:54px;height:54px;border-radius:14px;background:rgba(0,180,216,0.14);color:#00b4d8;display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:20px;">
            <i class="fa-brands fa-whatsapp"></i>
          </div>
          <h3 style="font-family:var(--ta-font-head);font-size:20px;font-weight:700;color:var(--ta-ink);margin-bottom:12px;">WhatsApp Auto Alerts</h3>
          <p style="color:var(--ta-muted);font-size:14px;line-height:1.7;">Automated fee due notifications, payment receipts, late checkout alerts to parents, and library announcements sent directly to WhatsApp.</p>
        </div>

        <!-- Feature 4 -->
        <div class="sp-feature-card">
          <div style="width:54px;height:54px;border-radius:14px;background:rgba(247,127,0,0.14);color:#f77f00;display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:20px;">
            <i class="fa-solid fa-receipt"></i>
          </div>
          <h3 style="font-family:var(--ta-font-head);font-size:20px;font-weight:700;color:var(--ta-ink);margin-bottom:12px;">GST Receipts &amp; UPI Collection</h3>
          <p style="color:var(--ta-muted);font-size:14px;line-height:1.7;">Generate digital GST invoices, collect monthly fees via dynamic UPI QR codes, and auto-lock seats when fees are overdue.</p>
        </div>

        <!-- Feature 5 -->
        <div class="sp-feature-card">
          <div style="width:54px;height:54px;border-radius:14px;background:rgba(123,45,139,0.14);color:#7b2d8b;display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:20px;">
            <i class="fa-solid fa-key"></i>
          </div>
          <h3 style="font-family:var(--ta-font-head);font-size:20px;font-weight:700;color:var(--ta-ink);margin-bottom:12px;">Shift &amp; Locker Management</h3>
          <p style="color:var(--ta-muted);font-size:14px;line-height:1.7;">Assign study lockers, track security deposit refunds, and handle multi-shift seat scheduling effortlessly.</p>
        </div>

        <!-- Feature 6 -->
        <div class="sp-feature-card">
          <div style="width:54px;height:54px;border-radius:14px;background:rgba(46,196,182,0.14);color:#2ec4b6;display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:20px;">
            <i class="fa-solid fa-chart-pie"></i>
          </div>
          <h3 style="font-family:var(--ta-font-head);font-size:20px;font-weight:700;color:var(--ta-ink);margin-bottom:12px;">Analytics &amp; Revenue Reports</h3>
          <p style="color:var(--ta-muted);font-size:14px;line-height:1.7;">Comprehensive daily revenue analytics, active vs expired student rosters, peak occupancy charts, and profit tracking.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CLOUD DASHBOARD SHOWCASE SECTION -->
  <section style="padding:clamp(50px,6vw,80px) clamp(16px,4vw,60px);background:var(--ta-bg);border-top:1px solid var(--ta-border);border-bottom:1px solid var(--ta-border);">
    <div style="max-width:var(--ta-container);margin:0 auto;text-align:center;">
      <span class="ta-eyebrow">Cloud Web App &amp; Admin Panel</span>
      <h2 class="ta-section-title" style="margin-top:10px;margin-bottom:16px;">
        Next-Generation Seato Pro Admin Dashboard
      </h2>
      <p class="ta-section-desc" style="max-width:700px;margin:0 auto 36px;">
        Gain 360-degree real-time visibility over seat reservations, active student admissions, recurring fees, and shifts from any web browser or tablet.
      </p>
      <div style="max-width:1050px;margin:0 auto;border-radius:18px;overflow:hidden;box-shadow:0 24px 60px rgba(0,0,0,0.18);border:1px solid var(--ta-border);background:var(--ta-card-bg);">
        <div style="background:#1e293b;padding:12px 18px;display:flex;align-items:center;gap:8px;">
          <span style="width:11px;height:11px;border-radius:50%;background:#ef4444;display:inline-block;"></span>
          <span style="width:11px;height:11px;border-radius:50%;background:#f59e0b;display:inline-block;"></span>
          <span style="width:11px;height:11px;border-radius:50%;background:#10b981;display:inline-block;"></span>
          <span style="color:#94a3b8;font-size:12px;margin-left:12px;font-family:monospace;">https://seatopro.technoamaze.in/dashboard</span>
        </div>
        <img src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/seatopro_dashboard.png?v=' . filemtime(get_template_directory() . '/assets/images/seatopro_dashboard.png')); ?>" alt="Seato Pro Cloud Web Dashboard" style="width:100%;height:auto;display:block;">
      </div>
    </div>
  </section>

  <!-- MOBILE APP SHOWCASE SECTION -->
  <section style="padding:clamp(60px,8vw,100px) clamp(16px,4vw,60px);background:var(--ta-surface);">
    <div class="sp-grid-2" style="max-width:var(--ta-container);margin:0 auto;">
      <div>
        <span class="ta-eyebrow">Official Android App</span>
        <h2 class="ta-section-title" style="margin-top:10px;line-height:1.2;">
          Manage Your Entire Library From Your Mobile Phone
        </h2>
        <p class="ta-section-desc" style="margin:20px 0 30px;">
          The official Seato Pro Android app empowers library owners, staff, and students with real-time seat tracking, instant QR check-ins, fee collections, and push notifications directly from your smartphone.
        </p>
        <div class="sp-btn-group">
          <a href="https://play.google.com/store/apps/details?id=com.technoamaze.seato_pro&hl=en_IN" target="_blank"
            rel="noopener" class="ta-btn ta-btn-primary" style="padding:16px 32px;font-size:16px;">
            <i class="fa-brands fa-google-play" style="font-size:22px;"></i> Install From Play Store
          </a>
          <a href="https://seatopro.technoamaze.in/" target="_blank" rel="noopener" class="ta-btn ta-btn-dark"
            style="padding:16px 28px;font-size:15px;">
            <i class="fa-solid fa-laptop"></i> Web Dashboard
          </a>
        </div>
      </div>

      <div>
        <div style="background:var(--ta-card-bg);border:1px solid var(--ta-border);border-radius:24px;padding:36px 28px;box-shadow:0 16px 40px rgba(0,0,0,0.08);text-align:center;">
          <i class="fa-brands fa-google-play" style="font-size:64px;color:var(--ta-accent);margin-bottom:16px;"></i>
          <h3 style="font-family:var(--ta-font-head);font-size:22px;font-weight:800;color:var(--ta-ink);margin-bottom:8px;">Seato Pro on Google Play</h3>
          <p style="color:var(--ta-muted);font-size:14px;margin-bottom:24px;">Package ID: <code style="background:var(--ta-surface);padding:4px 10px;border-radius:6px;color:var(--ta-accent);font-weight:600;">com.technoamaze.seato_pro</code></p>
          <a href="https://play.google.com/store/apps/details?id=com.technoamaze.seato_pro&hl=en_IN" target="_blank"
            rel="noopener" class="ta-btn ta-btn-primary" style="width:100%;justify-content:center;padding:14px 24px;">
            Download Play Store App <i class="fa-solid fa-download" style="margin-left:8px;"></i>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- CALL TO ACTION BANNER -->
  <section style="padding:80px 20px;background:linear-gradient(135deg, #151726 0%, #0a0b10 100%);color:#ffffff;text-align:center;">
    <div style="max-width:800px;margin:0 auto;">
      <h2 style="font-family:var(--ta-font-head);font-size:clamp(28px,4vw,46px);font-weight:900;margin-bottom:20px;color:#ffffff;">
        Ready To Transform Your Reading Room With Seato Pro?
      </h2>
      <p style="font-size:17px;color:#cbd5e1;line-height:1.8;margin-bottom:36px;">
        Join 500+ successful libraries and study halls across the country. Get started in less than 5 minutes.
      </p>
      <div class="sp-btn-group" style="justify-content:center;">
        <a href="https://play.google.com/store/apps/details?id=com.technoamaze.seato_pro&hl=en_IN" target="_blank"
          rel="noopener" class="ta-btn ta-btn-primary" style="padding:16px 36px;font-size:16px;">
          <i class="fa-brands fa-google-play"></i> Get Google Play App
        </a>
        <a href="contact.html?product=seatopro" class="ta-btn" style="background:#ffffff;color:#151726;padding:16px 32px;font-size:15px;font-weight:700;border-radius:8px;">
          <i class="fa-solid fa-headset"></i> Request Free Demo
        </a>
      </div>
    </div>
  </section>

<?php
get_footer();
