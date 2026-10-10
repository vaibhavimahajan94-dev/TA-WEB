<?php
/**
 * Template Name: Fintech (INDUSTRIES)
 * Description: Custom template for Fintech (INDUSTRIES) page.
 *
 * @package TechnoAmaze
 * @version 1.0.0
 */

get_header();
?>

<!-- HERO SECTION -->
  <section class="sp-hero" style="background:linear-gradient(135deg, var(--ta-surface) 0%, var(--ta-card-bg) 100%);">
    <div class="sp-hero-grid">
      <div>
        <span class="ta-eyebrow" style="margin-bottom:18px;">
          <i class="fa-solid fa-landmark" style="color:#06d6a0;"></i> FinTech &amp; Financial Engineering
        </span>
        <h1 class="ta-section-title" style="font-size:clamp(32px,4vw,54px);margin-bottom:20px;">
          PCI-DSS Certified <span class="ta-highlight-text">FinTech &amp; Banking</span> Platforms
        </h1>
        <p class="ta-section-desc" style="font-size:clamp(15px,1.1vw,17px);margin-bottom:32px;max-width:580px;">
          We build high-frequency financial platforms � neobanking cores, multi-currency digital wallets, real-time ML fraud detection systems, algorithmic credit scoring, and open banking APIs.
        </p>
        <div class="sp-btn-group">
          <a href="contact.html?industry=fintech" class="ta-btn ta-btn-primary" style="padding:16px 32px;">
            <i class="fa-solid fa-calendar-check"></i> Book FinTech Consultation
          </a>
          <a href="products.html#finengine" class="ta-btn ta-btn-dark" style="padding:16px 28px;">
            <i class="fa-solid fa-bolt"></i> View FinEngine Product
          </a>
        </div>
      </div>

      <div>
        <div style="position:relative;border-radius:24px;overflow:hidden;box-shadow:0 20px 50px rgba(0,0,0,0.15);border:1px solid var(--ta-border);">
          <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&q=80" alt="FinTech Software Solutions" style="width:100%;height:380px;object-fit:cover;display:block;">
          <div style="position:absolute;inset:0;background:linear-gradient(to top, rgba(15,16,27,0.85) 0%, transparent 60%);"></div>
          <div style="position:absolute;bottom:24px;left:24px;right:24px;color:#ffffff;">
            <span style="padding:4px 12px;background:rgba(6,214,160,0.25);color:#06d6a0;border-radius:20px;font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">PCI-DSS Level 1 &amp; ISO 27001</span>
            <h3 style="font-size:20px;font-weight:700;margin:8px 0 4px;color:#ffffff;">FinEngine Core Banking Platform</h3>
            <p style="font-size:13px;opacity:0.85;margin:0;">Processing $500M+ in monthly transactions with sub-millisecond latency.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- STATS TICKER -->
  <section style="background:var(--ta-accent);padding:32px 20px;color:#ffffff;">
    <div class="sp-grid-4" style="max-width:var(--ta-container);margin:0 auto;text-align:center;">
      <div>
        <div style="font-family:var(--ta-font-head);font-size:32px;font-weight:900;">$2.5B+</div>
        <div style="font-size:13px;opacity:0.9;">Total Transactions Processed</div>
      </div>
      <div>
        <div style="font-family:var(--ta-font-head);font-size:32px;font-weight:900;">&lt; 50ms</div>
        <div style="font-size:13px;opacity:0.9;">API Latency Benchmark</div>
      </div>
      <div>
        <div style="font-family:var(--ta-font-head);font-size:32px;font-weight:900;">99.999%</div>
        <div style="font-size:13px;opacity:0.9;">Core Banking Availability</div>
      </div>
      <div>
        <div style="font-family:var(--ta-font-head);font-size:32px;font-weight:900;">0</div>
        <div style="font-size:13px;opacity:0.9;">Security Breaches Record</div>
      </div>
    </div>
  </section>

  <!-- SOLUTIONS GRID SECTION -->
  <section style="padding:clamp(60px,8vw,100px) clamp(16px,4vw,60px);background:var(--ta-card-bg);">
    <div style="max-width:var(--ta-container);margin:0 auto;">
      <div style="text-align:center;max-width:720px;margin:0 auto 60px;">
        <span class="ta-eyebrow">Financial Software Solutions</span>
        <h2 class="ta-section-title" style="margin-top:10px;">Engineering For Banks, Lenders &amp; Payments</h2>
        <p class="ta-section-desc" style="margin-top:12px;">High-concurrency microservices, automated compliance auditing, and bank-grade security protocols.</p>
      </div>

      <div class="sp-grid-3">
        <!-- Solution 1 -->
        <div class="sp-feature-card">
          <div style="width:54px;height:54px;border-radius:14px;background:rgba(6,214,160,0.14);color:#06d6a0;display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:20px;">
            <i class="fa-solid fa-building-columns"></i>
          </div>
          <h3 style="font-family:var(--ta-font-head);font-size:20px;font-weight:700;color:var(--ta-ink);margin-bottom:12px;">Neobanking Core</h3>
          <p style="color:var(--ta-muted);font-size:14px;line-height:1.7;">Cloud-native core banking with multi-currency ledgers, virtual card issuance, and IBAN/ACH wire routing.</p>
        </div>

        <!-- Solution 2 -->
        <div class="sp-feature-card">
          <div style="width:54px;height:54px;border-radius:14px;background:rgba(200,0,110,0.12);color:var(--ta-accent);display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:20px;">
            <i class="fa-solid fa-credit-card"></i>
          </div>
          <h3 style="font-family:var(--ta-font-head);font-size:20px;font-weight:700;color:var(--ta-ink);margin-bottom:12px;">Payment Gateways</h3>
          <p style="color:var(--ta-muted);font-size:14px;line-height:1.7;">PCI-DSS compliant payment processing with smart routing, instant payouts, dynamic 3D secure, and 100+ payment methods.</p>
        </div>

        <!-- Solution 3 -->
        <div class="sp-feature-card">
          <div style="width:54px;height:54px;border-radius:14px;background:rgba(0,180,216,0.14);color:#00b4d8;display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:20px;">
            <i class="fa-solid fa-shield-halved"></i>
          </div>
          <h3 style="font-family:var(--ta-font-head);font-size:20px;font-weight:700;color:var(--ta-ink);margin-bottom:12px;">AI Fraud Detection</h3>
          <p style="color:var(--ta-muted);font-size:14px;line-height:1.7;">Real-time transaction scoring using ML models to catch synthetic identity fraud, account takeovers, and AML violations.</p>
        </div>

        <!-- Solution 4 -->
        <div class="sp-feature-card">
          <div style="width:54px;height:54px;border-radius:14px;background:rgba(247,127,0,0.14);color:#f77f00;display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:20px;">
            <i class="fa-solid fa-hand-holding-dollar"></i>
          </div>
          <h3 style="font-family:var(--ta-font-head);font-size:20px;font-weight:700;color:var(--ta-ink);margin-bottom:12px;">Digital Lending Platforms</h3>
          <p style="color:var(--ta-muted);font-size:14px;line-height:1.7;">Automated credit decisioning engine, BNPL (Buy Now Pay Later) modules, loan origination, and automated debt collection flows.</p>
        </div>

        <!-- Solution 5 -->
        <div class="sp-feature-card">
          <div style="width:54px;height:54px;border-radius:14px;background:rgba(123,45,139,0.14);color:#7b2d8b;display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:20px;">
            <i class="fa-solid fa-wallet"></i>
          </div>
          <h3 style="font-family:var(--ta-font-head);font-size:20px;font-weight:700;color:var(--ta-ink);margin-bottom:12px;">Digital Wallet Apps</h3>
          <p style="color:var(--ta-muted);font-size:14px;line-height:1.7;">iOS &amp; Android wallet apps with QR payments, peer-to-peer transfers, biometric authorization, and loyalty integration.</p>
        </div>

        <!-- Solution 6 -->
        <div class="sp-feature-card">
          <div style="width:54px;height:54px;border-radius:14px;background:rgba(46,196,182,0.14);color:#2ec4b6;display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:20px;">
            <i class="fa-solid fa-chart-line"></i>
          </div>
          <h3 style="font-family:var(--ta-font-head);font-size:20px;font-weight:700;color:var(--ta-ink);margin-bottom:12px;">Algorithmic Trading &amp; Wealth</h3>
          <p style="color:var(--ta-muted);font-size:14px;line-height:1.7;">Robo-advisory platforms, portfolio rebalancing engines, and real-time market data streaming with WebSocket feeds.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CALL TO ACTION BANNER -->
  <section style="padding:80px 20px;background:linear-gradient(135deg, #151726 0%, #0a0b10 100%);color:#ffffff;text-align:center;">
    <div style="max-width:800px;margin:0 auto;">
      <h2 style="font-family:var(--ta-font-head);font-size:clamp(28px,4vw,46px);font-weight:900;margin-bottom:20px;color:#ffffff;">
        Accelerate Your FinTech Innovation
      </h2>
      <p style="font-size:17px;color:#cbd5e1;line-height:1.8;margin-bottom:36px;">
        Build bank-grade digital financial products with our specialized engineering squad.
      </p>
      <div class="sp-btn-group" style="justify-content:center;">
        <a href="contact.html?industry=fintech" class="ta-btn ta-btn-primary" style="padding:16px 36px;font-size:16px;">
          <i class="fa-solid fa-calendar-check"></i> Schedule FinTech Architecture Call
        </a>
      </div>
    </div>
  </section>

<?php
get_footer();
