<?php
/**
 * Template Name: About Us
 * Description: Custom template for About Us page.
 *
 * @package TechnoAmaze
 * @version 1.0.0
 */

get_header();
?>


  <!-- ABOUT PAGE HERO SECTION -->
  <section id="ta-about-page-hero" class="ta-about-hero-v2" aria-labelledby="about-page-title">
    <div class="ta-about-hero-v2-inner">
      <div class="ta-about-hero-v2-content">
        <nav class="ta-about-breadcrumb" aria-label="Breadcrumb">
          <a href="<?php echo esc_url(home_url('/')); ?>">Home</a>
          <span class="ta-about-breadcrumb-sep"><i class="fa-solid fa-chevron-right"></i></span>
          <span aria-current="page">About Us</span>
        </nav>
        
        <h1 class="ta-about-hero-v2-title" id="about-page-title">
          Architecting The Future Of <span class="ta-gradient-text">Digital Excellence</span>
        </h1>
        
        <p class="ta-about-hero-v2-desc">
          Techno Amaze is a premier technology partner crafting high-impact custom software, human-centered UI/UX design, and resilient cloud architectures for forward-thinking enterprises worldwide.
        </p>


        <div class="ta-about-hero-v2-actions">
          <a href="#ta-about-story" class="ta-btn ta-btn-primary ta-btn-hero-glow">
            Discover Our Story <i class="fa-solid fa-arrow-down"></i>
          </a>
          <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="ta-btn ta-btn-secondary">
            Get In Touch <i class="fa-solid fa-paper-plane"></i>
          </a>
        </div>
      </div>

      <div class="ta-about-hero-v2-visual">
        <div class="ta-about-hero-card-stack">
          <div class="ta-about-hero-main-card">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80" alt="Techno Amaze Engineering Team" loading="eager">
          </div>

          <!-- Floating Badge 1: Industry Leadership -->
          <div class="ta-about-float-badge ta-about-float-badge--top">
            <div class="ta-float-icon ta-float-icon--pink">
              <i class="fa-solid fa-trophy"></i>
            </div>
            <div class="ta-float-info">
              <strong>10+ Years</strong>
              <span>Industry Excellence</span>
            </div>
          </div>

          <!-- Floating Badge 2: Global Footprint -->
          <div class="ta-about-float-badge ta-about-float-badge--bottom">
            <div class="ta-float-icon ta-float-icon--purple">
              <i class="fa-solid fa-globe"></i>
            </div>
            <div class="ta-float-info">
              <strong>30+ Countries</strong>
              <span>Global Client Footprint</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- OUR STORY -->
  <section id="ta-about-story" class="ta-section-reveal" aria-labelledby="story-heading">
    <div class="ta-about-inner">
      <div class="ta-about-media" data-reveal>
        <div class="ta-about-frame"></div>
        <div class="ta-about-img-top">
          <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=600&q=80"
            alt="Team collaboration" loading="lazy">
        </div>
        <div class="ta-about-badge">
          <div class="ta-about-badge-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" width="22" height="22">
              <path d="M12 2l3.1 6.6 7.2.9-5.3 5 1.4 7.2L12 18l-6.4 3.7 1.4-7.2-5.3-5 7.2-.9L12 2z" />
            </svg>
          </div>
          <div class="ta-about-badge-text">
            <p>Trusted by</p><strong>120K+ Clients</strong>
          </div>
        </div>
        <div class="ta-about-img-bot">
          <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=700&q=80"
            alt="Creative workspace" loading="lazy">
        </div>
      </div>
      <div class="ta-about-content" data-reveal>
        <div class="ta-eyebrow">Our Story</div>
        <h2 class="ta-section-title" id="story-heading">Turning Bold Ideas Into Powerful Digital Solutions</h2>
        <p class="ta-section-desc">Founded in 2016, Techno Amaze began with a simple belief: technology should empower
          people, not overwhelm them. What started as a small team of developers has grown into a full-service digital
          agency serving clients across 30+ countries.</p>
        <p class="ta-section-desc">Today, we combine deep technical expertise with creative vision to deliver software,
          design, and cloud solutions that drive measurable business growth. Every line of code we write and every
          interface we craft is built with your success in mind.</p>
        <ul class="ta-about-list">
          <li><span class="ta-about-check"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3"
                stroke-linecap="round">
                <polyline points="20 6 9 17 4 12" />
              </svg></span>Award-winning design &amp; development team</li>
          <li><span class="ta-about-check"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3"
                stroke-linecap="round">
                <polyline points="20 6 9 17 4 12" />
              </svg></span>500+ successful projects delivered globally</li>
          <li><span class="ta-about-check"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3"
                stroke-linecap="round">
                <polyline points="20 6 9 17 4 12" />
              </svg></span>24/7 support &amp; dedicated account managers</li>
        </ul>
        <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="ta-btn ta-btn-dark">Work With Us</a>
      </div>
    </div>
  </section>

  <!-- TICKER (after About Us story section) -->
  <div id="ta-ticker" aria-hidden="true">
    <div class="ta-ticker-track">
      <span class="ta-ticker-item">Innovation First <span class="ta-ticker-sep">&#10022;</span></span>
      <span class="ta-ticker-item">Client-Centric Approach <span class="ta-ticker-sep">&#10022;</span></span>
      <span class="ta-ticker-item">Award-Winning Team <span class="ta-ticker-sep">&#10022;</span></span>
      <span class="ta-ticker-item">Global Delivery <span class="ta-ticker-sep">&#10022;</span></span>
      <span class="ta-ticker-item">Agile Methodology <span class="ta-ticker-sep">&#10022;</span></span>
      <span class="ta-ticker-item">24/7 Support <span class="ta-ticker-sep">&#10022;</span></span>
      <span class="ta-ticker-item">Innovation First <span class="ta-ticker-sep">&#10022;</span></span>
      <span class="ta-ticker-item">Client-Centric Approach <span class="ta-ticker-sep">&#10022;</span></span>
      <span class="ta-ticker-item">Award-Winning Team <span class="ta-ticker-sep">&#10022;</span></span>
      <span class="ta-ticker-item">Global Delivery <span class="ta-ticker-sep">&#10022;</span></span>
      <span class="ta-ticker-item">Agile Methodology <span class="ta-ticker-sep">&#10022;</span></span>
      <span class="ta-ticker-item">24/7 Support <span class="ta-ticker-sep">&#10022;</span></span>
    </div>
  </div>

  <!-- MISSION VISION VALUES -->
  <section id="ta-about-mvv" class="ta-section-reveal" aria-labelledby="mvv-heading">
    <div class="ta-about-mvv-inner">
      <div class="ta-about-mvv-header" data-reveal>
        <div class="ta-eyebrow ta-eyebrow--center">Our Foundation</div>
        <h2 class="ta-section-title ta-section-title--center" id="mvv-heading">Mission, Vision &amp; Values</h2>
        <p class="ta-section-desc ta-section-desc--center">The principles that guide every decision we make and every
          solution we build.</p>
      </div>
      <div class="ta-about-mvv-grid" data-reveal-group>
        <article class="ta-about-mvv-card">
          <div class="ta-about-mvv-icon">
            <i class="fa-solid fa-bullseye"></i>
            <span class="ta-about-mvv-ring" aria-hidden="true"></span>
          </div>
          <h3>Our Mission</h3>
          <p>To deliver secure, scalable, and human-centered technology solutions that help businesses thrive in the
            digital age — with precision, passion, and integrity.</p>
          <span class="ta-about-mvv-num">01</span>
        </article>
        <article class="ta-about-mvv-card ta-about-mvv-card--featured">
          <div class="ta-about-mvv-icon">
            <i class="fa-solid fa-eye"></i>
            <span class="ta-about-mvv-ring" aria-hidden="true"></span>
          </div>
          <h3>Our Vision</h3>
          <p>To be the most trusted technology partner for businesses worldwide — recognized for innovation,
            reliability, and the measurable impact we create for every client we serve.</p>
          <span class="ta-about-mvv-num">02</span>
        </article>
        <article class="ta-about-mvv-card">
          <div class="ta-about-mvv-icon">
            <i class="fa-solid fa-heart"></i>
            <span class="ta-about-mvv-ring" aria-hidden="true"></span>
          </div>
          <h3>Our Values</h3>
          <p>Excellence in craft, transparency in communication, agility in delivery, and a relentless focus on client
            success — these values define who we are at our core.</p>
          <span class="ta-about-mvv-num">03</span>
        </article>
      </div>
    </div>
  </section>

  <!-- STATS -->
  <section id="ta-about-stats" class="ta-section-reveal" aria-label="Company statistics">
    <div class="ta-about-stats-inner">
      <div class="ta-about-stats-grid" data-reveal-group>
        <div class="ta-about-stat-card">
          <div class="ta-about-stat-icon"><i class="fa-solid fa-users"></i></div>
          <p class="ta-about-stat-num" data-count="120" data-suffix="K+">0K+</p>
          <p class="ta-about-stat-label">Happy Clients</p>
        </div>
        <div class="ta-about-stat-card">
          <div class="ta-about-stat-icon"><i class="fa-solid fa-laptop-code"></i></div>
          <p class="ta-about-stat-num" data-count="500" data-suffix="+">0+</p>
          <p class="ta-about-stat-label">Projects Completed</p>
        </div>
        <div class="ta-about-stat-card">
          <div class="ta-about-stat-icon"><i class="fa-solid fa-globe"></i></div>
          <p class="ta-about-stat-num" data-count="30" data-suffix="+">0+</p>
          <p class="ta-about-stat-label">Countries Served</p>
        </div>
        <div class="ta-about-stat-card">
          <div class="ta-about-stat-icon"><i class="fa-solid fa-star"></i></div>
          <p class="ta-about-stat-num" data-count="98" data-suffix="%">0%</p>
          <p class="ta-about-stat-label">Client Satisfaction</p>
        </div>
      </div>
    </div>
  </section>

  <!-- JOURNEY TIMELINE -->
  <section id="ta-about-journey" class="ta-section-reveal" aria-labelledby="journey-heading">
    <div class="ta-about-journey-inner">
      <div class="ta-about-journey-header" data-reveal>
        <div class="ta-eyebrow ta-eyebrow--center">Our Journey</div>
        <h2 class="ta-section-title ta-section-title--center" id="journey-heading">A Decade of Digital Innovation</h2>
      </div>
      <div class="ta-about-timeline" id="ta-about-timeline">
        <div class="ta-about-timeline-line" aria-hidden="true"></div>
        <div class="ta-about-timeline-items" data-reveal-group>
          <div class="ta-about-timeline-item">
            <div class="ta-about-timeline-dot"><span>2016</span></div>
            <div class="ta-about-timeline-content">
              <h3>Company Founded</h3>
              <p>Techno Amaze was born with a mission to make enterprise-grade technology accessible to businesses of
                all sizes.</p>
            </div>
          </div>
          <div class="ta-about-timeline-item ta-about-timeline-item--right">
            <div class="ta-about-timeline-dot"><span>2018</span></div>
            <div class="ta-about-timeline-content">
              <h3>100+ Projects Milestone</h3>
              <p>Crossed our first major milestone, delivering solutions across fintech, healthcare, and e-commerce
                sectors.</p>
            </div>
          </div>
          <div class="ta-about-timeline-item">
            <div class="ta-about-timeline-dot"><span>2020</span></div>
            <div class="ta-about-timeline-content">
              <h3>Global Expansion</h3>
              <p>Opened delivery centers and began serving clients across Europe, Asia-Pacific, and North America.</p>
            </div>
          </div>
          <div class="ta-about-timeline-item ta-about-timeline-item--right">
            <div class="ta-about-timeline-dot"><span>2022</span></div>
            <div class="ta-about-timeline-content">
              <h3>SeaToPro Platform Launch</h3>
              <p>Launched our flagship SeaToPro platform, revolutionizing maritime workforce management worldwide.</p>
            </div>
          </div>
          <div class="ta-about-timeline-item">
            <div class="ta-about-timeline-dot"><span>2024</span></div>
            <div class="ta-about-timeline-content">
              <h3>AI &amp; Cloud Division</h3>
              <p>Expanded into AI-powered solutions and cloud-native architectures, helping clients future-proof their
                operations.</p>
            </div>
          </div>
          <div class="ta-about-timeline-item ta-about-timeline-item--right">
            <div class="ta-about-timeline-dot"><span>2026</span></div>
            <div class="ta-about-timeline-content">
              <h3>500+ Projects &amp; Growing</h3>
              <p>Today we continue pushing boundaries — building the next generation of digital products for a connected
                world.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>



  <!-- CORE VALUES -->
  <section id="ta-about-values" class="ta-section-reveal" aria-labelledby="values-heading">
    <div class="ta-about-values-inner">
      <div class="ta-about-values-left" data-reveal>
        <div class="ta-eyebrow">Why We Exist</div>
        <h2 class="ta-section-title ta-section-title--white" id="values-heading">What Sets Techno Amaze Apart</h2>
        <p class="ta-section-desc ta-section-desc--light">We don&rsquo;t just build software — we build partnerships.
          Our approach combines technical mastery with genuine care for your business outcomes.</p>
        <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="ta-btn ta-btn-primary">Start a Project</a>
      </div>
      <div class="ta-about-values-grid" data-reveal-group>
        <div class="ta-about-value-item">
          <div class="ta-about-value-icon"><i class="fa-solid fa-shield-halved"></i></div>
          <h3>Security First</h3>
          <p>Enterprise-grade security baked into every layer of our solutions.</p>
        </div>
        <div class="ta-about-value-item">
          <div class="ta-about-value-icon"><i class="fa-solid fa-rocket"></i></div>
          <h3>Agile Delivery</h3>
          <p>Fast iterations, transparent sprints, and on-time delivery every time.</p>
        </div>
        <div class="ta-about-value-item">
          <div class="ta-about-value-icon"><i class="fa-solid fa-lightbulb"></i></div>
          <h3>Innovation Driven</h3>
          <p>Cutting-edge tech stacks and forward-thinking architecture choices.</p>
        </div>
        <div class="ta-about-value-item">
          <div class="ta-about-value-icon"><i class="fa-solid fa-handshake"></i></div>
          <h3>True Partnership</h3>
          <p>We invest in your success as if it were our own — because it is.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section id="ta-about-cta" class="ta-section-reveal" aria-labelledby="about-cta-heading">
    <div class="ta-about-cta-inner" data-reveal="scale">
      <div class="ta-about-cta-glow" aria-hidden="true"></div>
      <h2 class="ta-section-title ta-section-title--white" id="about-cta-heading">Ready to Build Something Amazing?</h2>
      <p class="ta-section-desc ta-section-desc--center ta-section-desc--light">Let&rsquo;s turn your vision into a
        powerful digital reality. Our team is ready when you are.</p>
      <div class="ta-about-cta-btns">
        <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="ta-btn ta-btn-primary">Get In Touch &#8594;</a>
        <a href="<?php echo esc_url(home_url('/services/')); ?>" class="ta-btn ta-btn-outline-light">Explore Services</a>
      </div>
    </div>
  </section>

  <!-- CONTACT FORM SECTION -->
  <section id="ta-about-contact" class="ta-section-reveal" aria-labelledby="about-contact-heading">
    <div class="ta-contact-page-grid" style="max-width:var(--ta-container);margin:0 auto;padding:clamp(60px,8vw,90px) clamp(16px,3vw,48px);">
      <div class="ta-contact-info-wrap" data-reveal>
        <div class="ta-eyebrow">Get In Touch</div>
        <h2 class="ta-section-title" id="about-contact-heading">Let's Discuss Your Next Project</h2>
        <p class="ta-section-desc">Have a question or ready to kick off your digital transformation? Reach out to our team today for a free technical consultation.</p>
        <div class="ta-contact-info-list">
          <div class="ta-contact-info-item">
            <div class="ta-contact-info-icon"><i class="fa-solid fa-location-dot"></i></div>
            <div>
              <strong>Head Office Address</strong>
              <span>Chh. Sambhajinagar, Maharashtra, India</span>
            </div>
          </div>
          <div class="ta-contact-info-item">
            <div class="ta-contact-info-icon"><i class="fa-solid fa-phone"></i></div>
            <div>
              <strong>Call Us Directly</strong>
              <a href="tel:+917020995651">+91 70209 95651</a>
            </div>
          </div>
          <div class="ta-contact-info-item">
            <div class="ta-contact-info-icon"><i class="fa-solid fa-envelope"></i></div>
            <div>
              <strong>Email Inquiries</strong>
              <a href="mailto:info@technoamaze.in">info@technoamaze.in</a>
            </div>
          </div>
          <div class="ta-contact-info-item">
            <div class="ta-contact-info-icon"><i class="fa-solid fa-clock"></i></div>
            <div>
              <strong>Working Hours</strong>
              <span>Mon-Fri 9:00 AM - 6:00 PM | Sat 10:00 AM - 4:00 PM</span>
            </div>
          </div>
        </div>
      </div>
      <div class="ta-contact-page-card" data-reveal>
        <h3 class="ta-contact-page-form-title">Send Us a Message</h3>
        <form id="ta-contact-form" class="ta-contact-form" novalidate>
          <div class="ta-form-group">
            <label class="ta-form-label" for="contact-name">Full Name <span>*</span></label>
            <input type="text" id="contact-name" name="name" class="ta-contact-field" placeholder="John Doe" required>
            <div class="ta-field-error" id="err-name"></div>
          </div>
          <div class="ta-form-group">
            <label class="ta-form-label" for="contact-email">Email Address <span>*</span></label>
            <input type="email" id="contact-email" name="email" class="ta-contact-field" placeholder="john@company.com" required>
            <div class="ta-field-error" id="err-email"></div>
          </div>
          <div class="ta-form-group">
            <label class="ta-form-label" for="contact-phone">Phone Number</label>
            <input type="tel" id="contact-phone" name="phone" class="ta-contact-field" placeholder="+91 98765 43210">
            <div class="ta-field-error" id="err-phone"></div>
          </div>
          <div class="ta-form-group">
            <label class="ta-form-label" for="contact-service">Service Interested In</label>
            <select id="contact-service" name="service" class="ta-contact-field">
              <option value="">Select a Service...</option>
              <option value="custom-software">Custom Software Development</option>
              <option value="web-development">Website Development</option>
              <option value="mobile-apps">Mobile App Development</option>
              <option value="cloud-devops">Cloud &amp; DevOps Services</option>
              <option value="ai-ml">AI &amp; Machine Learning</option>
              <option value="ui-ux">UI/UX &amp; Branding Design</option>
              <option value="digital-marketing">Digital Marketing &amp; SEO</option>
            </select>
          </div>
          <div class="ta-form-group">
            <label class="ta-form-label" for="contact-msg">Your Message <span>*</span></label>
            <textarea id="contact-msg" name="message" class="ta-contact-field" rows="4" placeholder="Tell us about your project or inquiry..." required></textarea>
            <div class="ta-field-error" id="err-msg"></div>
          </div>
          <button type="submit" id="ta-submit-btn" class="ta-btn ta-btn-primary ta-contact-submit--full">Submit Inquiry <i class="fa-solid fa-paper-plane"></i></button>
        </form>
      </div>
    </div>
  </section>

<?php
get_footer();
