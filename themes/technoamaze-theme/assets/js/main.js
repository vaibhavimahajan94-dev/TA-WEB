/* ==========================================================================
   TECHNO AMAZE - MAIN JAVASCRIPT ENGINE
   Handles Navigation, Sliders, Scroll Reveal, Case Study Tabs, Form Dispatch & Modals
   ========================================================================== */

(function () {
  'use strict';

  var wpSiteUrl = (window.TechnoAmazeWP && window.TechnoAmazeWP.siteUrl) ? window.TechnoAmazeWP.siteUrl : '';

  /* --------------------------------------------------------------------------
     SERVICES DATA
     -------------------------------------------------------------------------- */
  var TA_SERVICES = [
    { slug: 'custom-software-development', title: 'Custom Software Development', cardTitle: 'Custom<br>Software Development', icon: 'fa-code', category: 'development', desc: 'Tailored software solutions built from the ground up to match your unique business workflows and growth goals.', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80&auto=format&fit=crop' },
    { slug: 'website-development', title: 'Website Development', cardTitle: 'Website<br>Development', icon: 'fa-globe', category: 'development', desc: 'Responsive, high-performance websites that captivate visitors and convert them into loyal customers.', img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80&auto=format&fit=crop' },
    { slug: 'mobile-app-development', title: 'Mobile App Development', cardTitle: 'Mobile App<br>Development', icon: 'fa-mobile-screen', category: 'development', desc: 'Native and cross-platform mobile apps with seamless UX for iOS and Android devices.', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80&auto=format&fit=crop' },
    { slug: 'ecommerce-development', title: 'E-commerce Development', cardTitle: 'E-commerce<br>Development', icon: 'fa-cart-shopping', category: 'development', desc: 'Scalable online stores with secure payments, inventory management, and conversion-optimized checkout flows.', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80&auto=format&fit=crop' },
    { slug: 'saas-product-development', title: 'SaaS Product Development', cardTitle: 'SaaS Product<br>Development', icon: 'fa-cloud-arrow-up', category: 'development', desc: 'End-to-end SaaS platforms from MVP to enterprise scale with subscription billing and multi-tenancy.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&auto=format&fit=crop' },
    { slug: 'erp-crm-development', title: 'ERP and CRM Development', cardTitle: 'ERP &amp; CRM<br>Development', icon: 'fa-sitemap', category: 'development', desc: 'Integrated ERP and CRM systems that streamline operations, sales pipelines, and customer relationships.', img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80&auto=format&fit=crop' },
    { slug: 'ui-ux-design', title: 'UI/UX Design', cardTitle: 'UI/UX<br>Design', icon: 'fa-pen-nib', category: 'design', desc: 'User-centered interfaces and experiences that are intuitive, accessible, and visually stunning.', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80&auto=format&fit=crop' },
    { slug: 'api-development-integration', title: 'API Development and Integration', cardTitle: 'API Development<br>&amp; Integration', icon: 'fa-plug', category: 'development', desc: 'Robust REST and GraphQL APIs with seamless third-party integrations for connected ecosystems.', img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80&auto=format&fit=crop' },
    { slug: 'software-testing-qa', title: 'Software Testing and Quality Assurance', cardTitle: 'Software Testing<br>&amp; QA', icon: 'fa-vial-circle-check', category: 'development', desc: 'Comprehensive manual and automated testing to ensure bug-free, reliable software delivery.', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80&auto=format&fit=crop' },
    { slug: 'cloud-services', title: 'Cloud Services', cardTitle: 'Cloud<br>Services', icon: 'fa-cloud', category: 'cloud', desc: 'Cloud migrations, architecture design, and managed services on AWS, Azure, and Google Cloud.', img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80&auto=format&fit=crop' },
    { slug: 'devops-services', title: 'DevOps Services', cardTitle: 'DevOps<br>Services', icon: 'fa-gears', category: 'cloud', desc: 'CI/CD pipelines, infrastructure as code, and automated deployments for faster release cycles.', img: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&q=80&auto=format&fit=crop' },
    { slug: 'cybersecurity-services', title: 'Cybersecurity Services', cardTitle: 'Cybersecurity<br>Services', icon: 'fa-shield-halved', category: 'cloud', desc: 'Threat assessments, penetration testing, and hardened security architectures to protect your assets.', img: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&q=80&auto=format&fit=crop' },
    { slug: 'data-analytics', title: 'Data Analytics', cardTitle: 'Data<br>Analytics', icon: 'fa-chart-bar', category: 'data', desc: 'Transform raw data into actionable insights with dashboards, reporting, and predictive analytics.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&auto=format&fit=crop' },
    { slug: 'ai-machine-learning', title: 'Artificial Intelligence and Machine Learning', cardTitle: 'AI &amp; Machine<br>Learning', icon: 'fa-brain', category: 'data', desc: 'Custom AI models, NLP, computer vision, and ML pipelines that automate and intelligently scale operations.', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80&auto=format&fit=crop' },
    { slug: 'software-maintenance-support', title: 'Software Maintenance and Support', cardTitle: 'Software Maintenance<br>&amp; Support', icon: 'fa-screwdriver-wrench', category: 'development', desc: 'Ongoing updates, bug fixes, performance tuning, and 24/7 support to keep your systems running smoothly.', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80&auto=format&fit=crop' },
    { slug: 'it-consulting', title: 'IT Consulting', cardTitle: 'IT<br>Consulting', icon: 'fa-briefcase', category: 'consulting', desc: 'Strategic technology advisory to align your IT roadmap with business objectives and market demands.', img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80&auto=format&fit=crop' },
    { slug: 'digital-marketing', title: 'Digital Marketing', cardTitle: 'Digital<br>Marketing', icon: 'fa-chart-line', category: 'marketing', desc: 'Full-funnel digital strategies across channels to grow brand awareness and drive measurable ROI.', img: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&q=80&auto=format&fit=crop' },
    { slug: 'search-engine-optimization', title: 'Search Engine Optimization (SEO)', cardTitle: 'Search Engine<br>Optimization', icon: 'fa-magnifying-glass-chart', category: 'marketing', desc: 'Technical and content SEO to improve rankings, organic traffic, and long-term search visibility.', img: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80&auto=format&fit=crop' },
    { slug: 'social-media-marketing', title: 'Social Media Marketing', cardTitle: 'Social Media<br>Marketing', icon: 'fa-hashtag', category: 'marketing', desc: 'Engaging social campaigns on Facebook, Instagram, LinkedIn, and more to build community and leads.', img: 'https://images.unsplash.com/photo-1611162617474-5b21e939e113?w=600&q=80&auto=format&fit=crop' },
    { slug: 'google-meta-ads', title: 'Google Ads and Meta Ads', cardTitle: 'Google &amp; Meta<br>Ads', icon: 'fa-bullhorn', category: 'marketing', desc: 'Performance-driven paid campaigns on Google, Facebook, and Instagram with optimized ad spend.', img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&q=80&auto=format&fit=crop' },
    { slug: 'content-marketing', title: 'Content Marketing', cardTitle: 'Content<br>Marketing', icon: 'fa-file-lines', category: 'marketing', desc: 'Strategic content creation — blogs, videos, and guides — that educates audiences and builds authority.', img: 'https://images.unsplash.com/photo-1455393570892-651bb0227b02?w=600&q=80&auto=format&fit=crop' },
    { slug: 'email-marketing', title: 'Email Marketing', cardTitle: 'Email<br>Marketing', icon: 'fa-envelope-open-text', category: 'marketing', desc: 'Automated email sequences and newsletters that nurture leads and drive repeat conversions.', img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80&auto=format&fit=crop' },
    { slug: 'lead-generation', title: 'Lead Generation', cardTitle: 'Lead<br>Generation', icon: 'fa-user-plus', category: 'marketing', desc: 'Targeted lead capture funnels and campaigns that fill your pipeline with qualified prospects.', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80&auto=format&fit=crop' },
    { slug: 'online-reputation-management', title: 'Online Reputation Management', cardTitle: 'Online Reputation<br>Management', icon: 'fa-star-half-stroke', category: 'marketing', desc: 'Monitor, protect, and enhance your brand reputation across review platforms and social channels.', img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80&auto=format&fit=crop' },
    { slug: 'graphic-design-branding', title: 'Graphic Designing and Branding', cardTitle: 'Graphic Design<br>&amp; Branding', icon: 'fa-palette', category: 'design', desc: 'Logo design, brand identity systems, and visual assets that make your business stand out.', img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80&auto=format&fit=crop' }
  ];

  var TA_SERVICE_CATEGORIES = [
    { id: 'development', label: 'Software Development', icon: 'fa-code' },
    { id: 'design', label: 'Design & Branding', icon: 'fa-pen-nib' },
    { id: 'cloud', label: 'Cloud & Security', icon: 'fa-cloud' },
    { id: 'data', label: 'Data & AI', icon: 'fa-brain' },
    { id: 'consulting', label: 'IT Consulting', icon: 'fa-briefcase' },
    { id: 'marketing', label: 'Digital Marketing', icon: 'fa-chart-line' }
  ];

  function renderHomeServiceCards() {
    var track = document.getElementById('ta-svc-track');
    if (!track || track.dataset.rendered === 'true') return;
    var featured = TA_SERVICES.slice(0, 12);
    track.innerHTML = featured.map(function (s) {
      var serviceUrl = (window.wpSiteUrl || '') + '/services/' + s.slug + '/';
      return '<div class="ta-svc-card">' +
        '<div class="ta-svc-card-imgwrap"><img class="ta-svc-card-img" src="' + s.img + '" alt="' + s.title + '" loading="lazy"></div>' +
        '<div class="ta-svc-card-body">' +
        '<div class="ta-svc-card-head">' +
        '<div class="ta-svc-card-iconbox"><i class="fa-solid ' + s.icon + '"></i></div>' +
        '<h3 class="ta-svc-card-title">' + s.cardTitle + '</h3>' +
        '</div>' +
        '<div class="ta-svc-card-content">' +
        '<p class="ta-svc-card-text">' + s.desc + '</p>' +
        '<a href="' + serviceUrl + '" class="ta-svc-card-link">Explore Service <i class="fa-solid fa-arrow-right"></i></a>' +
        '</div></div></div>';
    }).join('');
    track.dataset.rendered = 'true';
  }

  function renderServicesPage() {
    var grid = document.getElementById('ta-services-page-grid');
    if (!grid) return;
    TA_SERVICE_CATEGORIES.forEach(function (cat) {
      var items = TA_SERVICES.filter(function (s) { return s.category === cat.id; });
      if (!items.length) return;
      var section = document.createElement('div');
      section.className = 'ta-svc-page-category';
      section.innerHTML =
        '<div class="ta-svc-page-cat-header" data-reveal>' +
        '<div class="ta-svc-page-cat-icon"><i class="fa-solid ' + cat.icon + '"></i></div>' +
        '<h2 class="ta-svc-page-cat-title">' + cat.label + '</h2>' +
        '</div>' +
        '<div class="ta-svc-page-grid" data-reveal-group></div>';
      var innerGrid = section.querySelector('.ta-svc-page-grid');
      items.forEach(function (s) {
        var card = document.createElement('article');
        card.className = 'ta-svc-page-card';
        card.innerHTML =
          '<div class="ta-svc-page-card-icon"><i class="fa-solid ' + s.icon + '"></i></div>' +
          '<h3 class="ta-svc-page-card-title">' + s.title + '</h3>' +
          '<p class="ta-svc-page-card-desc">' + s.desc + '</p>' +
          '<a href="' + (window.wpSiteUrl || '') + '/services/' + s.slug + '/" class="ta-svc-page-card-link">Explore Service <i class="fa-solid fa-arrow-right"></i></a>';
        innerGrid.appendChild(card);
      });
      grid.appendChild(section);
    });
  }

  /* --------------------------------------------------------------------------
     POPULATE SERVICES DROPDOWN (ALL 25 SERVICES)
     -------------------------------------------------------------------------- */
  function populateServicesDropdown() {
    var allDropdowns = document.querySelectorAll('.ta-nav-menu li.ta-has-dropdown');
    var servicesDropdown = null;

    allDropdowns.forEach(function (li) {
      var a = li.querySelector(':scope > a');
      if (a && a.textContent.toLowerCase().indexOf('services') !== -1) {
        servicesDropdown = li.querySelector('.ta-dropdown-menu');
      }
    });

    if (!servicesDropdown) return;

    var baseServices = (wpSiteUrl || '') + '/services/';
    var html = TA_SERVICES.map(function (s) {
      return '<li><a href="' + baseServices + s.slug + '/"><i class="fa-solid ' + s.icon + '"></i> ' + s.title + '</a></li>';
    }).join('');

    html += '<li class="ta-dropdown-full"><a href="' + baseServices + '" style="font-weight:700;color:var(--ta-accent);border-top:1px solid var(--ta-border);margin-top:4px;padding-top:10px;"><i class="fa-solid fa-arrow-right"></i> View All 25 Services Overview</a></li>';

    servicesDropdown.innerHTML = html;
    servicesDropdown.classList.add('ta-dropdown-grid');
  }

  /* --------------------------------------------------------------------------
     DROPDOWN MENU CLICK & HOVER INTERACTION CONTROLLER
     -------------------------------------------------------------------------- */
  function initDropdownControllers() {
    var dropdownItems = document.querySelectorAll('.ta-nav-menu li.ta-has-dropdown');

    dropdownItems.forEach(function (item) {
      var triggerLink = item.querySelector(':scope > a');
      if (!triggerLink) return;

      // Handle CLICK on menu items
      triggerLink.addEventListener('click', function (e) {
        // On mobile screen (<= 900px), clicking the chevron arrow toggles the sub-menu accordion
        if (window.innerWidth <= 900 && e.target.closest('.ta-dropdown-arrow')) {
          e.preventDefault();
          e.stopPropagation();
          item.classList.toggle('is-open');
          return;
        }

        // Allow natural redirect to services.html or industries.html
        return;
      });

      // Desktop Hover Support: keep open while hovering
      item.addEventListener('mouseenter', function () {
        if (window.innerWidth > 900) {
          item.classList.add('is-open');
          triggerLink.setAttribute('aria-expanded', 'true');
        }
      });

      item.addEventListener('mouseleave', function () {
        if (window.innerWidth > 900) {
          item.classList.remove('is-open');
          triggerLink.setAttribute('aria-expanded', 'false');
        }
      });
    });

    // Close open dropdowns when clicking outside
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.ta-has-dropdown')) {
        dropdownItems.forEach(function (item) {
          item.classList.remove('is-open');
          var link = item.querySelector(':scope > a');
          if (link) link.setAttribute('aria-expanded', 'false');
        });
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        dropdownItems.forEach(function (item) {
          item.classList.remove('is-open');
          var link = item.querySelector(':scope > a');
          if (link) link.setAttribute('aria-expanded', 'false');
        });
      }
    });
  }

  renderHomeServiceCards();
  renderServicesPage();
  populateServicesDropdown();
  initDropdownControllers();

  /* --------------------------------------------------------------------------
     1. MOBILE NAVIGATION DRAWER
     -------------------------------------------------------------------------- */
  var toggle = document.getElementById('ta-menu-toggle');
  var navInner = document.getElementById('ta-nav-inner');
  var overlay = document.getElementById('ta-nav-overlay');
  var closeBtn = document.getElementById('ta-nav-close');

  function openMenu() {
    if (!navInner) return;
    navInner.classList.add('is-open');
    if (toggle) toggle.setAttribute('aria-expanded', 'true');
    if (overlay) overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    if (!navInner) return;
    navInner.classList.remove('is-open');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
    if (overlay) overlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (toggle) toggle.addEventListener('click', function () { navInner.classList.contains('is-open') ? closeMenu() : openMenu(); });
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (overlay) overlay.addEventListener('click', closeMenu);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navInner && navInner.classList.contains('is-open')) {
      closeMenu();
    }
  });

  /* --------------------------------------------------------------------------
     2. SEARCH OVERLAY PANEL
     -------------------------------------------------------------------------- */
  var sToggles = document.querySelectorAll('.ta-search-toggle');
  var sPanel = document.getElementById('ta-search-panel');
  var sInput = document.getElementById('ta-search-input');

  function openSearch() {
    if (!sPanel) return;
    sPanel.classList.add('is-open');
    sToggles.forEach(function (t) { t.setAttribute('aria-expanded', 'true'); });
    setTimeout(function () { if (sInput) sInput.focus(); }, 150);
  }

  function closeSearch() {
    if (!sPanel) return;
    sPanel.classList.remove('is-open');
    sToggles.forEach(function (t) { t.setAttribute('aria-expanded', 'false'); });
  }

  sToggles.forEach(function (t) {
    t.addEventListener('click', function (e) {
      e.stopPropagation();
      sPanel && sPanel.classList.contains('is-open') ? closeSearch() : openSearch();
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && sPanel && sPanel.classList.contains('is-open')) {
      closeSearch();
    }
  });

  document.addEventListener('click', function (e) {
    if (sPanel && sPanel.classList.contains('is-open') && !sPanel.contains(e.target)) {
      var isToggle = false;
      sToggles.forEach(function (t) { if (t.contains(e.target)) isToggle = true; });
      if (!isToggle) closeSearch();
    }
  });

  /* --------------------------------------------------------------------------
     3. HERO PARTICLES GENERATOR
     -------------------------------------------------------------------------- */
  ['ta-hero-particles', 'ta-about-hero-particles'].forEach(function (containerId) {
    var pContainer = document.getElementById(containerId);
    if (!pContainer) return;
    for (var i = 0; i < 14; i++) {
      (function () {
        var p = document.createElement('div');
        p.className = containerId === 'ta-about-hero-particles' ? 'ta-hero-particle' : 'ta-hero-particle';
        var s = Math.random() * 60 + 20;
        p.style.cssText = 'width:' + s + 'px;height:' + s + 'px;left:' + (Math.random() * 100) + '%;animation-duration:' + (Math.random() * 18 + 12) + 's;animation-delay:' + (-Math.random() * 20) + 's;';
        pContainer.appendChild(p);
      })();
    }
  });

  /* --------------------------------------------------------------------------
     4. SCROLL REVEAL ENGINE (High Performance & Positive Pre-Trigger RootMargin)
     -------------------------------------------------------------------------- */
  document.querySelectorAll('.ta-section-reveal').forEach(function (el) {
    el.classList.add('is-visible');
  });

  if ('IntersectionObserver' in window) {
    var revealObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          revealObs.unobserve(e.target);
        }
      });
    }, { threshold: 0, rootMargin: '150px 0px 150px 0px' });

    document.querySelectorAll('[data-reveal], [data-reveal-group]').forEach(function (el) {
      revealObs.observe(el);
    });

    var tWrap = document.getElementById('ta-testi-wrap');
    if (tWrap) {
      var tObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            tObs.unobserve(e.target);
          }
        });
      }, { threshold: 0.1 });
      tObs.observe(tWrap);
    }

    // Force immediate reveal for elements within first 2 screens
    var winH = window.innerHeight || 800;
    document.querySelectorAll('[data-reveal], [data-reveal-group]').forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < winH * 1.5) {
        el.classList.add('is-visible');
      }
    });
  } else {
    document.querySelectorAll('[data-reveal],[data-reveal-group],.ta-section-reveal,#ta-testi-wrap').forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  /* --------------------------------------------------------------------------
     4b. ANIMATED COUNTERS (About Page)
     -------------------------------------------------------------------------- */
  function animateCounter(el) {
    if (el.getAttribute('data-counted') === 'true') return;
    el.setAttribute('data-counted', 'true');
    var target = parseInt(el.getAttribute('data-count'), 10);
    var suffix = el.getAttribute('data-suffix') || '';
    if (isNaN(target)) return;
    var duration = 1800;
    var start = performance.now();
    function step(now) {
      var progress = Math.min((now - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = Math.round(target * eased);
      el.textContent = current + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  if ('IntersectionObserver' in window) {
    var countObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          animateCounter(e.target);
          countObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    document.querySelectorAll('[data-count]').forEach(function (el) { countObs.observe(el); });
  } else {
    document.querySelectorAll('[data-count]').forEach(animateCounter);
  }

  /* --------------------------------------------------------------------------
     4c. ABOUT TIMELINE LINE ANIMATION
     -------------------------------------------------------------------------- */
  var timeline = document.getElementById('ta-about-timeline');
  if (timeline && 'IntersectionObserver' in window) {
    var tlObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-active');
          tlObs.unobserve(e.target);
        }
      });
    }, { threshold: 0.2 });
    tlObs.observe(timeline);
  } else if (timeline) {
    timeline.classList.add('is-active');
  }

  /* About hero nav scroll buttons */
  var aboutHeroPrev = document.getElementById('ta-about-hero-prev');
  var aboutHeroNext = document.getElementById('ta-about-hero-next');
  if (aboutHeroPrev) {
    aboutHeroPrev.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  if (aboutHeroNext) {
    aboutHeroNext.addEventListener('click', function () {
      var story = document.getElementById('ta-about-story');
      if (story) story.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  /* --------------------------------------------------------------------------
     5. SERVICES SLIDER
     -------------------------------------------------------------------------- */
  (function () {
    var track = document.getElementById('ta-svc-track');
    var prev = document.getElementById('ta-svc-prev');
    var next = document.getElementById('ta-svc-next');
    var dotsEl = document.getElementById('ta-svc-dots');
    var curEl = document.getElementById('ta-svc-cur');
    var totEl = document.getElementById('ta-svc-tot');
    if (!track) return;

    var cards = track.querySelectorAll('.ta-svc-card');
    var total = cards.length;
    var curPage = 0;
    var vis = 4;

    function getVis() {
      var w = window.innerWidth;
      return w <= 700 ? 1 : w <= 1100 ? 2 : 4;
    }
    function getTotalPages() {
      return Math.max(1, Math.ceil(total / vis));
    }
    function cw() {
      var gap = 24;
      var tw = track.offsetWidth;
      return (tw - gap * (vis - 1)) / vis + gap;
    }
    function makeDots() {
      if (!dotsEl) return;
      dotsEl.innerHTML = '';
      var numPages = getTotalPages();
      if (totEl) totEl.textContent = numPages;
      for (var i = 0; i < numPages; i++) {
        var d = document.createElement('button');
        d.className = 'ta-svc-dot' + (i === 0 ? ' ta-svc-dot--active' : '');
        d.setAttribute('aria-label', 'Page ' + (i + 1));
        d.dataset.i = i;
        d.addEventListener('click', function () { goToPage(+this.dataset.i); });
        dotsEl.appendChild(d);
      }
    }
    function syncDots() {
      if (!dotsEl) return;
      dotsEl.querySelectorAll('.ta-svc-dot').forEach(function (d, i) {
        d.classList.toggle('ta-svc-dot--active', i === curPage);
      });
    }
    function goToPage(pageIdx) {
      var numPages = getTotalPages();
      curPage = Math.max(0, Math.min(pageIdx, numPages - 1));
      var maxCardShift = Math.max(0, total - vis);
      var cardShift = Math.min(curPage * vis, maxCardShift);

      track.style.transform = 'translateX(-' + (cardShift * cw()) + 'px)';
      if (curEl) curEl.textContent = curPage + 1;
      syncDots();
      if (prev) prev.disabled = (curPage === 0);
      if (next) next.disabled = (curPage >= numPages - 1);
    }

    if (prev) prev.addEventListener('click', function () { goToPage(curPage - 1); });
    if (next) next.addEventListener('click', function () { goToPage(curPage + 1); });

    var tx = 0;
    track.addEventListener('touchstart', function (e) { tx = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', function (e) {
      var d = tx - e.changedTouches[0].clientX;
      if (Math.abs(d) > 48) d > 0 ? goToPage(curPage + 1) : goToPage(curPage - 1);
    }, { passive: true });

    function init() {
      cards = track.querySelectorAll('.ta-svc-card');
      total = cards.length;
      vis = getVis();
      makeDots();
      goToPage(0);
    }
    window.addEventListener('resize', init);
    init();
  })();

  /* --------------------------------------------------------------------------
     6. CASE STUDY CATEGORY TAB SWITCHER
     -------------------------------------------------------------------------- */
  (function () {
    var tabs = document.querySelectorAll('.ta-cs-tab');
    var panes = document.querySelectorAll('.ta-cs-pane');
    if (!tabs.length || !panes.length) return;

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var targetId = tab.getAttribute('data-target');
        tabs.forEach(function (t) { t.classList.remove('active'); });
        panes.forEach(function (p) { p.classList.remove('active'); });

        tab.classList.add('active');
        var targetPane = document.getElementById(targetId);
        if (targetPane) {
          targetPane.classList.add('active');
        }
      });
    });
  })();

  /* --------------------------------------------------------------------------
     7. INDUSTRIES WE SERVE SLIDER
     -------------------------------------------------------------------------- */
  (function () {
    var track = document.getElementById('ta-ind-track');
    var prev = document.getElementById('ta-ind-prev');
    var next = document.getElementById('ta-ind-next');
    var dotsEl = document.getElementById('ta-ind-dots');
    var curEl = document.getElementById('ta-ind-cur');
    var totEl = document.getElementById('ta-ind-tot');
    if (!track) return;

    var cards = track.querySelectorAll('.ta-ind-card');
    var total = cards.length;
    var cur = 0;
    var vis = 4;

    function getVis() {
      var w = window.innerWidth;
      return w <= 700 ? 1 : w <= 1100 ? 2 : 4;
    }
    function maxI() { return Math.max(0, total - vis); }
    function cw() {
      var gap = 20;
      var tw = track.offsetWidth;
      return (tw - gap * (vis - 1)) / vis + gap;
    }
    function makeDots() {
      if (!dotsEl) return;
      dotsEl.innerHTML = '';
      var steps = maxI() + 1;
      if (totEl) totEl.textContent = steps;
      for (var i = 0; i < steps; i++) {
        var d = document.createElement('button');
        d.className = 'ta-ind-dot' + (i === 0 ? ' ta-ind-dot--active' : '');
        d.setAttribute('aria-label', 'Industry slide ' + (i + 1));
        d.dataset.i = i;
        d.addEventListener('click', function () { goTo(+this.dataset.i); });
        dotsEl.appendChild(d);
      }
    }
    function syncDots() {
      if (!dotsEl) return;
      dotsEl.querySelectorAll('.ta-ind-dot').forEach(function (d, i) {
        d.classList.toggle('ta-ind-dot--active', i === cur);
      });
    }
    function goTo(idx) {
      cur = Math.max(0, Math.min(idx, maxI()));
      track.style.transform = 'translateX(-' + (cur * cw()) + 'px)';
      if (curEl) curEl.textContent = cur + 1;
      syncDots();
      if (prev) prev.disabled = (cur === 0);
      if (next) next.disabled = (cur >= maxI());
    }

    if (prev) prev.addEventListener('click', function () { goTo(cur - 1); });
    if (next) next.addEventListener('click', function () { goTo(cur + 1); });

    var tx = 0;
    track.addEventListener('touchstart', function (e) { tx = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', function (e) {
      var d = tx - e.changedTouches[0].clientX;
      if (Math.abs(d) > 48) d > 0 ? goTo(cur + 1) : goTo(cur - 1);
    }, { passive: true });

    function init() { vis = getVis(); makeDots(); goTo(0); }
    window.addEventListener('resize', init);
    init();
  })();

  /* --------------------------------------------------------------------------
     8. TECH STACK MARQUEE GENERATOR
     -------------------------------------------------------------------------- */
  (function () {
    var rows = [
      [{ name: 'React', icon: 'https://cdn.simpleicons.org/react' }, { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs' }, { name: 'AWS', icon: 'https://cdn.simpleicons.org/amazonaws' }, { name: 'Python', icon: 'https://cdn.simpleicons.org/python' }, { name: 'Vue.js', icon: 'https://cdn.simpleicons.org/vuedotjs' }, { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker' }, { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript' }, { name: 'Salesforce', icon: 'https://cdn.simpleicons.org/salesforce' }],
      [{ name: 'Angular', icon: 'https://cdn.simpleicons.org/angular' }, { name: 'Kubernetes', icon: 'https://cdn.simpleicons.org/kubernetes' }, { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb' }, { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql' }, { name: 'GraphQL', icon: 'https://cdn.simpleicons.org/graphql' }, { name: 'Terraform', icon: 'https://cdn.simpleicons.org/terraform' }, { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github' }, { name: 'VS Code', icon: 'https://cdn.simpleicons.org/visualstudiocode' }],
      [{ name: 'Figma', icon: 'https://cdn.simpleicons.org/figma' }, { name: 'Postman', icon: 'https://cdn.simpleicons.org/postman' }, { name: 'Jenkins', icon: 'https://cdn.simpleicons.org/jenkins' }, { name: 'Slack', icon: 'https://cdn.simpleicons.org/slack' }, { name: 'GCP', icon: 'https://cdn.simpleicons.org/googlecloud' }, { name: 'Redis', icon: 'https://cdn.simpleicons.org/redis' }, { name: 'Nginx', icon: 'https://cdn.simpleicons.org/nginx' }, { name: 'Git', icon: 'https://cdn.simpleicons.org/git' }]
    ];
    ['ta-row1', 'ta-row2', 'ta-row3'].forEach(function (id, idx) {
      var el = document.getElementById(id);
      if (!el) return;
      var data = rows[idx], doubled = data.concat(data);
      el.innerHTML = doubled.map(function (item) {
        return '<div class="ta-tech-card"><div class="ta-tech-icon"><img src="' + item.icon + '" alt="' + item.name + '" loading="lazy"></div><span>' + item.name + '</span></div>';
      }).join('');
    });
  })();

  /* --------------------------------------------------------------------------
     9. TESTIMONIALS CAROUSEL
     -------------------------------------------------------------------------- */
  (function () {
    var data = [
      { text: "Techno Amaze transformed our entire digital infrastructure in record time. Their expertise in cloud migration and cybersecurity gave us complete confidence. We could not have asked for a better technology partner.", name: "James Carter", role: "Founder, Nimbus Labs" },
      { text: "Working with Techno Amaze was the best technology decision we have made. Their UI/UX team redesigned our platform and we saw a 42% increase in user engagement within the first month. Simply outstanding.", name: "Theresa Webb", role: "CEO, CloudVentures Inc." },
      { text: "The cybersecurity audit and hardening project they delivered exceeded every expectation. Professional, thorough, and genuinely invested in our success. Highly recommended for any organization.", name: "Marcus Reed", role: "CTO, DataShield Corp" }
    ];
    var cur = 1, autoTimer;
    var textEl = document.getElementById('ta-testi-text');
    var nameEl = document.getElementById('ta-testi-name');
    var roleEl = document.getElementById('ta-testi-role');
    var avs = document.querySelectorAll('#ta-testi-avatars .ta-testi-avatar');
    var prevBtn = document.getElementById('ta-testi-prev');
    var nextBtn = document.getElementById('ta-testi-next');
    var wrap = document.getElementById('ta-testi-wrap');

    if (!textEl) return;

    function render(idx) {
      textEl.classList.add('fading');
      setTimeout(function () {
        textEl.textContent = data[idx].text;
        nameEl.textContent = data[idx].name;
        roleEl.textContent = data[idx].role;
        textEl.classList.remove('fading');
      }, 220);
      avs.forEach(function (av) {
        av.classList.toggle('active', parseInt(av.getAttribute('data-index'), 10) === idx);
      });
      cur = idx;
    }
    function goNext() { render((cur + 1) % data.length); }
    function goPrev() { render((cur - 1 + data.length) % data.length); }
    function startAuto() { autoTimer = setInterval(goNext, 5000); }
    function stopAuto() { clearInterval(autoTimer); }

    avs.forEach(function (av) {
      av.addEventListener('click', function () {
        render(parseInt(av.getAttribute('data-index'), 10));
        stopAuto(); startAuto();
      });
    });
    if (nextBtn) nextBtn.addEventListener('click', function () { goNext(); stopAuto(); startAuto(); });
    if (prevBtn) prevBtn.addEventListener('click', function () { goPrev(); stopAuto(); startAuto(); });
    if (wrap) {
      wrap.addEventListener('mouseenter', stopAuto);
      wrap.addEventListener('mouseleave', startAuto);
    }
    render(cur); startAuto();
  })();

  /* --------------------------------------------------------------------------
     10. FAQ ACCORDION
     -------------------------------------------------------------------------- */
  (function () {
    var items = document.querySelectorAll('.ta-faq-item');
    items.forEach(function (item) {
      var btn = item.querySelector('.ta-faq-q');
      if (!btn) return;
      btn.addEventListener('click', function () {
        var isOpen = item.classList.contains('open');
        items.forEach(function (i) {
          i.classList.remove('open');
          var b = i.querySelector('.ta-faq-q');
          if (b) b.setAttribute('aria-expanded', 'false');
          var ic = i.querySelector('.ta-faq-q-icon');
          if (ic) ic.innerHTML = '&plus;';
        });
        if (!isOpen) {
          item.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
          var icon = item.querySelector('.ta-faq-q-icon');
          if (icon) icon.innerHTML = '&minus;';
        }
      });
    });
    if (items.length > 0) {
      items[0].classList.add('open');
      var fb = items[0].querySelector('.ta-faq-q');
      if (fb) fb.setAttribute('aria-expanded', 'true');
      var fi = items[0].querySelector('.ta-faq-q-icon');
      if (fi) fi.innerHTML = '&minus;';
    }
  })();

  /* --------------------------------------------------------------------------
     11. BACK TO TOP BUTTON & STICKY SHADOW
     -------------------------------------------------------------------------- */
  var bt = document.getElementById('ta-back-top');
  if (bt) {
    window.addEventListener('scroll', function () {
      bt.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    bt.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  var hdr = document.getElementById('ta-header');
  if (hdr) {
    window.addEventListener('scroll', function () {
      hdr.style.boxShadow = window.scrollY > 10 ? '0 4px 20px rgba(0,0,0,.12)' : '0 2px 12px rgba(0,0,0,.06)';
    }, { passive: true });
  }

  /* Smooth scroll for anchor links */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var href = link.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        var t = document.querySelector(href);
        if (t) {
          e.preventDefault();
          closeMenu();
          t.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  /* --------------------------------------------------------------------------
     12. MODAL NOTIFICATION ENGINE
     -------------------------------------------------------------------------- */
  var modal = document.getElementById('ta-modal');
  var mTitle = document.getElementById('ta-modal-title');
  var mMsg = document.getElementById('ta-modal-msg');
  var mClose = document.getElementById('ta-modal-close');
  var mIcon = document.getElementById('ta-modal-icon');

  window.showTAModal = function (title, msg, type) {
    if (!modal) {
      alert(title + '\n\n' + msg);
      return;
    }
    if (mTitle) mTitle.textContent = title;
    if (mMsg) mMsg.textContent = msg;
    if (mIcon) {
      if (type === 'error') {
        mIcon.style.background = '#fde8e8';
        mIcon.style.color = '#e53e3e';
        mIcon.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i>';
      } else {
        mIcon.style.background = 'var(--ta-accent-light)';
        mIcon.style.color = 'var(--ta-accent)';
        mIcon.innerHTML = '<i class="fa-solid fa-check"></i>';
      }
    }
    modal.classList.add('is-active');
  };

  if (mClose) mClose.addEventListener('click', function () { modal.classList.remove('is-active'); });
  if (modal) modal.addEventListener('click', function (e) { if (e.target === modal) modal.classList.remove('is-active'); });

  /* --------------------------------------------------------------------------
     13. CONTACT FORM HANDLER (JavaScript — Web3Forms API)
     -------------------------------------------------------------------------- */
  var WEB3FORMS_ACCESS_KEYS = [
    '98dee22f-601e-457e-99f7-ede90ebede6f', // Vaibhavi
    'e4faf3c4-b015-464d-ba7a-6b8bfb285401'  // Ashutosh
  ];
  var FORM_ENDPOINT = 'https://api.web3forms.com/submit';
  var SUBMIT_COOLDOWN_MS = 60000;
  var lastClientSubmission = { fingerprint: '', time: 0 };
  var isSubmitting = false;

  function isSpamSubmission(form) {
    var honey = form.querySelector('[name="_honey"]') || form.querySelector('[name="botcheck"]');
    return honey && trim(honey.value) !== '';
  }

  function buildWeb3FormsPayload(payload, accessKey) {
    return {
      access_key: accessKey,
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      subject: 'Techno Amaze — ' + payload.subject,
      message: payload.message,
      form_source: payload.source,
      submitted_on: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      replyto: payload.email,
      botcheck: ''
    };
  }

  function submitToWeb3Forms(payload) {
    return Promise.all(WEB3FORMS_ACCESS_KEYS.map(function (accessKey) {
      return fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(buildWeb3FormsPayload(payload, accessKey))
      })
        .then(function (res) {
          return res.json().then(function (body) {
            return { response: res, body: body };
          }).catch(function () {
            return { response: res, body: {} };
          });
        });
    }));
  }

  function isSubmitSuccess(body) {
    return body && body.success === true;
  }

  function trim(value) {
    return String(value || '').trim();
  }

  function validateContactFields(data) {
    var errors = {};
    if (!data.name || data.name.length < 2 || data.name.length > 100) {
      errors.name = 'Please enter your name (2–100 characters).';
    }
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!data.phone || data.phone.length < 7 || data.phone.length > 20 || !/^[+\d\s().-]+$/.test(data.phone)) {
      errors.phone = 'Please enter a valid phone number (7–20 digits).';
    }
    if (!data.subject || data.subject.length < 2 || data.subject.length > 200) {
      errors.subject = 'Please enter a subject (2–200 characters).';
    }
    if (!data.message || data.message.length < 10 || data.message.length > 5000) {
      errors.message = 'Message must be between 10 and 5000 characters.';
    }
    return errors;
  }

  function getFormPayload(form) {
    var formData = new FormData(form);
    return {
      name: trim(formData.get('name')),
      email: trim(formData.get('email')),
      phone: trim(formData.get('phone')),
      subject: trim(formData.get('subject')),
      message: trim(formData.get('message')),
      source: trim(formData.get('source')) || 'Website'
    };
  }

  function getSubmissionFingerprint(payload) {
    return payload.email.toLowerCase() + '|' + payload.message.slice(0, 120);
  }

  function clearFieldErrors(form) {
    form.querySelectorAll('.ta-contact-field').forEach(function (field) {
      field.classList.remove('is-invalid');
      field.removeAttribute('aria-invalid');
    });
    form.querySelectorAll('.ta-field-error').forEach(function (el) {
      el.textContent = '';
    });
  }

  function showFieldErrors(form, errors) {
    Object.keys(errors).forEach(function (fieldName) {
      var field = form.querySelector('[name="' + fieldName + '"]');
      var errorEl = form.querySelector('#contact-' + fieldName + '-error') ||
        form.querySelector('[data-error-for="' + fieldName + '"]');
      if (field) {
        field.classList.add('is-invalid');
        field.setAttribute('aria-invalid', 'true');
      }
      if (errorEl) {
        errorEl.textContent = errors[fieldName];
      }
    });
    var firstInvalid = form.querySelector('.is-invalid');
    if (firstInvalid) {
      firstInvalid.focus();
    }
  }

  function setupFormHandling(formId, submitBtnId) {
    var form = document.getElementById(formId);
    var submitBtn = document.getElementById(submitBtnId);
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (isSubmitting) return;

      if (isSpamSubmission(form)) return;

      clearFieldErrors(form);
      var payload = getFormPayload(form);
      var errors = validateContactFields(payload);

      if (Object.keys(errors).length > 0) {
        showFieldErrors(form, errors);
        window.showTAModal('Validation Error', 'Please fix the highlighted fields and try again.', 'error');
        return;
      }

      var fingerprint = getSubmissionFingerprint(payload);
      var now = Date.now();
      if (fingerprint === lastClientSubmission.fingerprint &&
        now - lastClientSubmission.time < SUBMIT_COOLDOWN_MS) {
        window.showTAModal('Already Sent', 'This message was already submitted. Please wait a minute before sending again.', 'error');
        return;
      }

      var origContent = submitBtn ? submitBtn.innerHTML : 'Submit';
      isSubmitting = true;
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
      }

      submitToWeb3Forms(payload)
        .then(function (results) {
          var allSucceeded = results.every(function (result) {
            return isSubmitSuccess(result.body);
          });

          if (allSucceeded) {
            lastClientSubmission = { fingerprint: fingerprint, time: Date.now() };
            window.showTAModal(
              'Thank You!',
              'Your message has been sent successfully. Our team will get back to you shortly.',
              'success'
            );
            form.reset();
            clearFieldErrors(form);
            return;
          }

          var failedResult = results.find(function (result) {
            return !isSubmitSuccess(result.body);
          });
          var errMsg = (failedResult && failedResult.body && failedResult.body.message) ||
            (failedResult && failedResult.body && failedResult.body.body && failedResult.body.body.message) ||
            'Something went wrong while sending your message. Please try again in a few minutes.';
          window.showTAModal('Unable to Send', errMsg, 'error');
        })
        .catch(function () {
          window.showTAModal(
            'Connection Error',
            'Could not send your message. Please check your internet connection and try again.',
            'error'
          );
        })
        .finally(function () {
          isSubmitting = false;
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = origContent;
          }
        });
    });

    form.querySelectorAll('.ta-contact-field').forEach(function (field) {
      field.addEventListener('input', function () {
        field.classList.remove('is-invalid');
        field.removeAttribute('aria-invalid');
        var errorEl = form.querySelector('#contact-' + field.name + '-error');
        if (errorEl) errorEl.textContent = '';
      });
    });
  }

  setupFormHandling('ta-contact-form', 'ta-submit-btn');
  setupFormHandling('ta-home-contact-form', 'ta-home-submit-btn');

  /* --------------------------------------------------------------------------
     LIGHT / DARK THEME ENGINE
     -------------------------------------------------------------------------- */
  function getCurrentTheme() {
    var stored = localStorage.getItem('ta-theme') || localStorage.getItem('ta_theme');
    if (stored) return stored;
    return 'light';
  }

  function updateThemeUI(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    var toggles = document.querySelectorAll('.ta-theme-toggle, #ta-dock-theme-toggle');
    toggles.forEach(function (btn) {
      var icon = btn.querySelector('i');
      var tooltip = btn.querySelector('.ta-dock-tooltip');
      if (theme === 'dark') {
        if (icon) icon.className = 'fa-solid fa-sun';
        if (tooltip) tooltip.textContent = 'Light Mode';
        btn.setAttribute('aria-label', 'Switch to Light Mode');
      } else {
        if (icon) icon.className = 'fa-solid fa-moon';
        if (tooltip) tooltip.textContent = 'Dark Mode';
        btn.setAttribute('aria-label', 'Switch to Dark Mode');
      }
    });
  }

  function toggleTheme() {
    var current = getCurrentTheme();
    var next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem('ta-theme', next);
    updateThemeUI(next);
  }

  // Initialize Theme
  updateThemeUI(getCurrentTheme());

  /* --------------------------------------------------------------------------
     FLOATING SIDE ACTION DOCK AUTO-INJECTION
     -------------------------------------------------------------------------- */
  function injectFloatingDock() {
    if (document.getElementById('ta-floating-dock')) return;
    var dock = document.createElement('div');
    dock.id = 'ta-floating-dock';
    dock.setAttribute('role', 'region');
    dock.setAttribute('aria-label', 'Quick Actions');
    dock.innerHTML =
      '<button id="ta-dock-theme-toggle" class="ta-dock-btn" aria-label="Toggle Theme">' +
      '<i class="fa-solid fa-moon"></i><span class="ta-dock-tooltip">Switch Theme</span></button>' +
      '<a href="https://wa.me/917020995651" target="_blank" rel="noopener" class="ta-dock-btn ta-dock-whatsapp" aria-label="WhatsApp">' +
      '<i class="fa-brands fa-whatsapp"></i><span class="ta-dock-tooltip">WhatsApp Us</span></a>' +
      '<a href="contact.html#ta-contact" class="ta-dock-btn" aria-label="Book Meeting">' +
      '<i class="fa-solid fa-calendar-days"></i><span class="ta-dock-tooltip">Book Meeting</span></a>' +
      '<a href="mailto:info@technoamaze.in" class="ta-dock-btn" aria-label="Email Us">' +
      '<i class="fa-solid fa-envelope"></i><span class="ta-dock-tooltip">Email Us</span></a>' +
      '<a href="tel:+917020995651" class="ta-dock-btn" aria-label="Call Us">' +
      '<i class="fa-solid fa-phone"></i><span class="ta-dock-tooltip">Call Us</span></a>';
    document.body.appendChild(dock);

    var dockThemeBtn = document.getElementById('ta-dock-theme-toggle');
    if (dockThemeBtn) {
      dockThemeBtn.addEventListener('click', toggleTheme);
    }
    updateThemeUI(getCurrentTheme());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectFloatingDock);
  } else {
    injectFloatingDock();
  }

  // Header theme toggle button listener
  document.addEventListener('click', function (e) {
    var themeBtn = e.target.closest('.ta-theme-toggle');
    if (themeBtn) {
      toggleTheme();
    }
  });

  /* --------------------------------------------------------------------------
     LIVE SEARCH SYSTEM
     -------------------------------------------------------------------------- */
  var SEARCH_DATABASE = [
    // Core Pages
    {
      title: 'Home Page',
      type: 'Page',
      category: 'Main',
      icon: 'fa-house',
      url: 'index.html',
      desc: 'Techno Amaze — Premier IT consulting, custom software development, cloud infrastructure, AI solutions, and digital growth agency.',
      keywords: 'home homepage techno amaze software company it services tech agency solutions'
    },
    {
      title: 'About Techno Amaze',
      type: 'Page',
      category: 'Main',
      icon: 'fa-building',
      url: 'about.html',
      desc: 'Learn about our engineering philosophy, mission, executive leadership, global team, and client-first delivery track record.',
      keywords: 'about us company vision mission founders team leadership culture history values'
    },
    {
      title: 'All Services Catalog',
      type: 'Page',
      category: 'Main',
      icon: 'fa-gears',
      url: 'services.html',
      desc: 'Explore our comprehensive directory of 25+ specialized engineering, design, cloud, AI, and digital marketing services.',
      keywords: 'services all services solutions catalog software dev design cloud data marketing consulting'
    },
    {
      title: 'Industries We Empower',
      type: 'Page',
      category: 'Main',
      icon: 'fa-industry',
      url: 'industries.html',
      desc: 'Discover tailored software architectures built specifically for healthcare, fintech, edtech, retail, gaming, and enterprise sectors.',
      keywords: 'industries sectors domains business verticals solutions healthcare fintech ecommerce edtech'
    },
    {
      title: 'Proprietary Software Products',
      type: 'Page',
      category: 'Main',
      icon: 'fa-box-open',
      url: 'products.html',
      desc: 'Explore high-performance SaaS tools, mobile apps, and enterprise applications developed in-house by Techno Amaze.',
      keywords: 'products software tools platforms apps saas seatopro academy medpulse'
    },
    {
      title: 'Contact Techno Amaze',
      type: 'Page',
      category: 'Main',
      icon: 'fa-envelope',
      url: 'contact.html',
      desc: 'Reach out to our engineering consultants for project estimates, free architecture reviews, RFP discussions, or 24/7 technical support.',
      keywords: 'contact talk quote rfp consultation support email phone address hire us call'
    },
    {
      title: 'Careers & Open Positions',
      type: 'Careers',
      category: 'Careers',
      icon: 'fa-briefcase',
      url: 'careers.html',
      desc: 'Explore career opportunities at Techno Amaze. View open roles across engineering, design, AI, cloud, and digital marketing.',
      keywords: 'careers jobs hiring vacancies work with us recruitment openings apply employment developer engineer roles'
    },
    {
      title: 'Job: WordPress Developer',
      type: 'Job Opening',
      category: 'Careers',
      icon: 'fa-brands fa-wordpress',
      url: 'job-details.html?job=wordpress-developer',
      desc: 'Full-time opening for WordPress Developer (Remote / Pune). Custom theme, WooCommerce, ACF, and REST API development.',
      keywords: 'wordpress developer jobs careers hiring php woocommerce acf elementor full time pune remote'
    },
    {
      title: 'Job: Full Stack Developer (Node & React)',
      type: 'Job Opening',
      category: 'Careers',
      icon: 'fa-code',
      url: 'job-details.html?job=fullstack-developer',
      desc: 'Full-time opening for Full Stack Developer (Node.js, Express, React, TypeScript). Enterprise web applications and SaaS.',
      keywords: 'fullstack developer full stack node react typescript backend frontend express jobs careers hiring'
    },
    {
      title: 'Job: AI & Machine Learning Engineer',
      type: 'Job Opening',
      category: 'Careers',
      icon: 'fa-brain',
      url: 'job-details.html?job=ai-ml-engineer',
      desc: 'Full-time opening for AI & Machine Learning Engineer. LLMs, RAG architectures, LangChain, vector DBs, and Python ML pipelines.',
      keywords: 'ai ml machine learning engineer artificial intelligence langchain rag llm python deep learning careers hiring'
    },
    {
      title: 'Job: Mobile App Developer (Flutter & React Native)',
      type: 'Job Opening',
      category: 'Careers',
      icon: 'fa-mobile-screen',
      url: 'job-details.html?job=mobile-app-developer',
      desc: 'Full-time opening for Mobile App Developer. Build cross-platform Android and iOS apps using Flutter or React Native.',
      keywords: 'mobile app developer flutter react native ios android application dart careers hiring'
    },
    {
      title: 'Job: UI/UX & Product Designer',
      type: 'Job Opening',
      category: 'Careers',
      icon: 'fa-pen-nib',
      url: 'job-details.html?job=ui-ux-designer',
      desc: 'Full-time opening for UI/UX & Product Designer. Figma, interactive prototypes, design systems, and wireframing.',
      keywords: 'ui ux designer product design figma wireframes user interface experience careers hiring'
    },
    {
      title: 'Job: Cloud & DevOps Engineer',
      type: 'Job Opening',
      category: 'Careers',
      icon: 'fa-cloud',
      url: 'job-details.html?job=cloud-devops-engineer',
      desc: 'Full-time opening for Cloud & DevOps Engineer. AWS, Docker, Kubernetes, CI/CD pipelines, and Terraform.',
      keywords: 'cloud devops engineer aws docker kubernetes cicd terraform infrastructure careers hiring'
    },
    {
      title: 'Job: SEO & Digital Marketing Specialist',
      type: 'Job Opening',
      category: 'Careers',
      icon: 'fa-chart-line',
      url: 'job-details.html?job=seo-digital-marketing-specialist',
      desc: 'Full-time opening for SEO & Digital Marketing Specialist. On-page SEO, technical audits, Google Ads, and analytics.',
      keywords: 'seo digital marketing specialist search engine optimization google ads meta semrush careers hiring'
    },
    {
      title: 'Job: QA Automation & Testing Engineer',
      type: 'Job Opening',
      category: 'Careers',
      icon: 'fa-bug-slash',
      url: 'job-details.html?job=qa-automation-engineer',
      desc: 'Full-time opening for QA Automation & Testing Engineer. Cypress, Selenium, Postman, Jest, and regression pipelines.',
      keywords: 'qa automation testing engineer quality assurance cypress selenium postman test cases careers hiring'
    },

    // All 25 Services (linking directly to services/*.html)
    {
      title: 'Custom Software Development',
      type: 'Service',
      category: 'Development',
      icon: 'fa-code',
      url: 'services/custom-software-development.html',
      desc: 'Bespoke enterprise software, web portals, microservices, and backend engines tailored to your specific business workflows and scalability goals.',
      keywords: 'custom software bespoke web development backend frontend java python c# node.js react angular microservices database architecture enterprise'
    },
    {
      title: 'Website Development',
      type: 'Service',
      category: 'Development',
      icon: 'fa-globe',
      url: 'services/website-development.html',
      desc: 'High-performance, responsive corporate websites, CMS integrations, and conversion-focused landing pages engineered for speed and SEO rankings.',
      keywords: 'website web development responsive design html css javascript react vue next.js wordpress cms corporate landing page frontend'
    },
    {
      title: 'Mobile App Development',
      type: 'Service',
      category: 'Development',
      icon: 'fa-mobile-screen',
      url: 'services/mobile-app-development.html',
      desc: 'Cross-platform and native iOS & Android applications with slick animations, offline data sync, secure authentication, and App Store optimization.',
      keywords: 'mobile app android ios flutter react native swift kotlin iphone ipad play store application smartphone hybrid'
    },
    {
      title: 'E-commerce Development',
      type: 'Service',
      category: 'Development',
      icon: 'fa-cart-shopping',
      url: 'services/ecommerce-development.html',
      desc: 'Custom online shopping portals, Shopify/WooCommerce architectures, multi-currency checkout, and seamless payment gateway integrations.',
      keywords: 'ecommerce e-commerce online store shopify woocommerce magento shopping cart payment gateway stripe paypal checkout retail marketplace'
    },
    {
      title: 'SaaS Product Development',
      type: 'Service',
      category: 'Development',
      icon: 'fa-cloud-arrow-up',
      url: 'services/saas-product-development.html',
      desc: 'From MVP validation to multi-tenant cloud platforms: subscription billing, automated provisioning, tenant isolation, and scalable APIs.',
      keywords: 'saas software as a service multi-tenant subscription billing stripe b2b product mvp cloud software scalable platform'
    },
    {
      title: 'ERP & CRM Development',
      type: 'Service',
      category: 'Development',
      icon: 'fa-sitemap',
      url: 'services/erp-crm-development.html',
      desc: 'Enterprise resource planning and customer relationship systems that automate sales pipelines, inventory, invoices, and organizational workflows.',
      keywords: 'erp crm enterprise resource planning customer relationship management sales pipeline inventory invoicing hr operations automation'
    },
    {
      title: 'UI/UX Design',
      type: 'Service',
      category: 'Design',
      icon: 'fa-pen-nib',
      url: 'services/ui-ux-design.html',
      desc: 'Human-centered user experiences, wireframes, high-fidelity Figma prototypes, design systems, and responsive interfaces that maximize conversion.',
      keywords: 'ui ux user interface user experience design figma wireframe prototype design system usability interaction mockup visual design'
    },
    {
      title: 'API Development & Integration',
      type: 'Service',
      category: 'Development',
      icon: 'fa-plug',
      url: 'services/api-development-integration.html',
      desc: 'Secure REST and GraphQL API engineering, third-party payment/CRM integrations, webhooks, microservices connectivity, and Swagger documentation.',
      keywords: 'api rest api graphql integration webhook microservices swagger postman backend endpoints json payment gateways connectivity'
    },
    {
      title: 'Software Testing & Quality Assurance (QA)',
      type: 'Service',
      category: 'Development',
      icon: 'fa-vial-circle-check',
      url: 'services/software-testing-qa.html',
      desc: 'Automated CI/CD test suites, manual functional testing, regression, load testing, security audits, and bug prevention for flawless delivery.',
      keywords: 'testing qa quality assurance automated testing selenium cypress unit test regression testing performance test load testing bug audit'
    },
    {
      title: 'Cloud Services & Migration',
      type: 'Service',
      category: 'Cloud',
      icon: 'fa-cloud',
      url: 'services/cloud-services.html',
      desc: 'Cloud migrations, multi-cloud architecture, serverless backends, and managed cloud infrastructure engineering on AWS, Microsoft Azure, and GCP.',
      keywords: 'cloud aws azure google cloud gcp cloud migration serverless lambda hosting infrastructure docker kubernetes devops elasticity'
    },
    {
      title: 'DevOps Services & CI/CD',
      type: 'Service',
      category: 'Cloud',
      icon: 'fa-gears',
      url: 'services/devops-services.html',
      desc: 'Automated deployment pipelines, Docker containerization, Kubernetes orchestration, Infrastructure as Code (Terraform), and zero-downtime releases.',
      keywords: 'devops ci cd pipeline docker kubernetes terraform ansible continuous integration deployment automation github actions monitoring'
    },
    {
      title: 'Cybersecurity Services & Compliance',
      type: 'Service',
      category: 'Cloud',
      icon: 'fa-shield-halved',
      url: 'services/cybersecurity-services.html',
      desc: 'Vulnerability assessments, penetration testing, Zero Trust network architectures, data encryption, and HIPAA / GDPR / ISO security compliance.',
      keywords: 'cybersecurity security pen testing penetration vulnerability firewall zero trust encryption compliance hipaa gdpr ssl threat audit'
    },
    {
      title: 'Data Analytics & Business Intelligence',
      type: 'Service',
      category: 'Data & AI',
      icon: 'fa-chart-pie',
      url: 'services/data-analytics.html',
      desc: 'Transform raw data into strategic business value with interactive BI dashboards, real-time data pipelines, data warehousing, and forecasting.',
      keywords: 'data analytics business intelligence bi dashboards power bi tableau sql big data data warehouse reporting predictive insights'
    },
    {
      title: 'AI & Machine Learning',
      type: 'Service',
      category: 'Data & AI',
      icon: 'fa-brain',
      url: 'services/ai-machine-learning.html',
      desc: 'Custom artificial intelligence models, LLM agents, natural language processing (NLP), computer vision, and intelligent process automation.',
      keywords: 'ai artificial intelligence machine learning ml deep learning llm nlp computer vision automation neural network gpt chatbot'
    },
    {
      title: 'Software Maintenance & 24/7 Support',
      type: 'Service',
      category: 'Development',
      icon: 'fa-screwdriver-wrench',
      url: 'services/software-maintenance-support.html',
      desc: 'Continuous uptime monitoring, urgent bug fixes, regular security patching, performance tuning, and SLA-backed 24/7 ongoing software support.',
      keywords: 'software maintenance support 24/7 bug fixes patch security update uptime monitoring sla troubleshooting tech support'
    },
    {
      title: 'IT Consulting & Technology Advisory',
      type: 'Service',
      category: 'Consulting',
      icon: 'fa-briefcase',
      url: 'services/it-consulting.html',
      desc: 'Strategic technology consulting, software architecture reviews, digital transformation roadmaps, CTO advisory, and cost optimization.',
      keywords: 'it consulting tech consulting advisory digital transformation cto strategy roadmap modernization enterprise architecture'
    },
    {
      title: 'Digital Marketing & Growth Strategy',
      type: 'Service',
      category: 'Marketing',
      icon: 'fa-chart-line',
      url: 'services/digital-marketing.html',
      desc: 'Full-funnel digital marketing campaigns, performance advertising, brand positioning, conversion rate optimization, and measurable ROI growth.',
      keywords: 'digital marketing online marketing growth marketing roi traffic conversions brand awareness marketing strategy advertising'
    },
    {
      title: 'Search Engine Optimization (SEO)',
      type: 'Service',
      category: 'Marketing',
      icon: 'fa-magnifying-glass-chart',
      url: 'services/search-engine-optimization.html',
      desc: 'Technical SEO audits, keyword research, on-page optimization, content strategy, and quality backlinks to achieve top rankings on Google.',
      keywords: 'seo search engine optimization google ranking organic search keywords backlinks technical seo local seo traffic google search'
    },
    {
      title: 'Social Media Marketing (SMM)',
      type: 'Service',
      category: 'Marketing',
      icon: 'fa-hashtag',
      url: 'services/social-media-marketing.html',
      desc: 'Strategic organic campaigns, community engagement, reels/creative content, and influencer partnerships across LinkedIn, Instagram, and Facebook.',
      keywords: 'social media smm instagram facebook linkedin twitter reels content creation community engagement social ads viral'
    },
    {
      title: 'Google Ads & Meta Paid Advertising',
      type: 'Service',
      category: 'Marketing',
      icon: 'fa-bullhorn',
      url: 'services/google-meta-ads.html',
      desc: 'High-converting Pay-Per-Click (PPC) campaigns on Google Search, YouTube, Instagram, and Facebook with real-time bid and audience optimization.',
      keywords: 'google ads meta ads ppc pay per click facebook ads instagram ads youtube ads adwords paid campaigns paid marketing roas'
    },
    {
      title: 'Content Marketing & Copywriting',
      type: 'Service',
      category: 'Marketing',
      icon: 'fa-file-lines',
      url: 'services/content-marketing.html',
      desc: 'SEO-driven articles, industry whitepapers, case studies, and brand copy that engage prospects, establish domain authority, and boost search rankings.',
      keywords: 'content marketing copywriting blogging articles whitepapers case studies brand storytelling content writing seo content'
    },
    {
      title: 'Email Marketing & Drip Automation',
      type: 'Service',
      category: 'Marketing',
      icon: 'fa-envelope-open-text',
      url: 'services/email-marketing.html',
      desc: 'Targeted email sequences, automated lead nurturing drips, promotional newsletters, and retention workflows with high deliverability and open rates.',
      keywords: 'email marketing newsletter drip campaigns lead nurturing mailchimp klaviyo cold email automated emails subscriber retention'
    },
    {
      title: 'B2B Lead Generation & Outbound Sales',
      type: 'Service',
      category: 'Marketing',
      icon: 'fa-user-plus',
      url: 'services/lead-generation.html',
      desc: 'Multi-channel prospect identification, verified email discovery, automated outreach funnels, and appointment setting that fill your sales pipeline.',
      keywords: 'lead generation b2b leads sales pipeline customer acquisition prospecting sales funnel qualified leads outreach booking'
    },
    {
      title: 'Online Reputation Management (ORM)',
      type: 'Service',
      category: 'Marketing',
      icon: 'fa-star-half-stroke',
      url: 'services/online-reputation-management.html',
      desc: 'Comprehensive brand sentiment tracking, positive review generation on Google & Trustpilot, negative search suppression, and executive PR defense.',
      keywords: 'reputation management orm brand reviews google reviews trustpilot rating brand defense sentiment crisis pr feedback'
    },
    {
      title: 'Graphic Design & Brand Identity',
      type: 'Service',
      category: 'Design',
      icon: 'fa-palette',
      url: 'services/graphic-design-branding.html',
      desc: 'Memorable brand logos, complete identity guidelines, marketing collateral, social media design kits, and print graphics that elevate your visual presence.',
      keywords: 'graphic design branding logo identity typography visual design brand guidelines brochure banner social graphics photoshop'
    },

    // Products
    {
      title: 'Seato Pro — Smart Library SaaS (Google Play App)',
      type: 'Product',
      category: 'Product',
      icon: 'fa-chair',
      url: 'products/seatopro.html',
      desc: 'Smart cloud-based library seat reservation system, QR/barcode attendance, shift management, and automated fee collections available on Google Play.',
      keywords: 'seato pro library management seat booking attendance app study center saas google play app qr code mobile app'
    },
    {
      title: 'Techno Amaze Academy — Smart EdTech App',
      type: 'Product',
      category: 'Product',
      icon: 'fa-graduation-cap',
      url: 'products/academy.html',
      desc: 'All-in-one learning platform with live video classes, interactive practice quizzes, notes, test series, and student analytics on Google Play.',
      keywords: 'academy edtech app learning app live classes online courses quizzes study notes mock tests education student app google play'
    },
    {
      title: 'MedPulse — Healthcare EHR & Telemedicine',
      type: 'Product',
      category: 'Product',
      icon: 'fa-heart-pulse',
      url: 'products.html#medpulse',
      desc: 'HIPAA-compliant electronic health records (EHR), integrated patient portal, lab test management, and HD telemedicine video consultations for clinics.',
      keywords: 'medpulse healthcare ehr electronic health records hospital software clinic telemedicine doctor app medical records'
    },
    {
      title: 'FinEngine — Neobanking & Core Banking Suite',
      type: 'Product',
      category: 'Product',
      icon: 'fa-landmark',
      url: 'products.html#finengine',
      desc: 'High-throughput core transaction engine, digital multi-currency wallets, automated fraud detection, and open banking payment rails.',
      keywords: 'finengine fintech neobanking core banking digital wallet payment gateway transaction engine banking api fraud detection money currency transfer'
    },
    {
      title: 'EduSphere — AI-Powered LMS',
      type: 'Product',
      category: 'Product',
      icon: 'fa-graduation-cap',
      url: 'products.html#edusphere',
      desc: 'Enterprise learning management system featuring AI-driven automated assignment grading, adaptive course curricula, and student engagement telemetry.',
      keywords: 'edusphere lms ai learning school management university software elearning course portal grading automated student'
    },
    {
      title: 'PropTech Suite — Real Estate Portal',
      type: 'Product',
      category: 'Product',
      icon: 'fa-city',
      url: 'products.html#proptech',
      desc: 'Virtual 3D property tours, automated digital leases, tenant KYC screening, and integrated real estate CRM for brokers and property managers.',
      keywords: 'proptech real estate property portal rental management tenant screening virtual tour broker crm leases apartments'
    },
    {
      title: 'CloudShield — Enterprise Security & Compliance',
      type: 'Product',
      category: 'Product',
      icon: 'fa-shield-halved',
      url: 'products.html#cloudshield',
      desc: 'Continuous cloud vulnerability scanning, automated DDoS mitigation, threat intelligence, and compliance audit reporting for SOC2 and ISO standards.',
      keywords: 'cloudshield cybersecurity vulnerability scanning ddos threat intelligence compliance audit soc2 iso protection cloud security'
    },

    // Industries
    {
      title: 'Healthcare & MedTech Solutions',
      type: 'Industry',
      category: 'Industry',
      icon: 'fa-stethoscope',
      url: 'industries/healthcare.html',
      desc: 'Custom medical software: HIPAA-compliant electronic health records, telemedicine video consultation, hospital ERP, and medical IoT connectivity.',
      keywords: 'healthcare medtech hospital clinic doctor medicine medical telemedicine ehr patient pharmacy health biotech'
    },
    {
      title: 'FinTech & Banking Apps',
      type: 'Industry',
      category: 'Industry',
      icon: 'fa-landmark',
      url: 'industries/fintech.html',
      desc: 'PCI-DSS compliant payment rails, mobile neobanking applications, algorithmic lending platforms, fraud detection, and digital wallets.',
      keywords: 'fintech banking finance payments digital wallet neobank crypto trading lending loans credit cards pci dss money currency financial'
    },
    {
      title: 'E-Commerce & Retail Systems',
      type: 'Industry',
      category: 'Industry',
      icon: 'fa-bag-shopping',
      url: 'industries/ecommerce.html',
      desc: 'Omnichannel commerce platforms with automated inventory sync, personalized AI recommendation engines, and high-speed checkout flows.',
      keywords: 'ecommerce retail shopping store marketplace inventory supply chain pos point of sale cart merchant'
    },
    {
      title: 'EdTech & eLearning Platforms',
      type: 'Industry',
      category: 'Industry',
      icon: 'fa-graduation-cap',
      url: 'industries/edtech.html',
      desc: 'Interactive virtual classrooms, real-time live video streaming, student information systems (SIS), exam proctoring, and automated grading.',
      keywords: 'edtech education elearning online learning courses live classes school university college teacher student exams'
    },
    {
      title: 'Manufacturing & Smart Factory IoT',
      type: 'Industry',
      category: 'Industry',
      icon: 'fa-industry',
      url: 'industries/manufacturing.html',
      desc: 'Industry 4.0 digital manufacturing: Industrial IoT sensor networks, machine telemetry, predictive maintenance, and assembly line analytics.',
      keywords: 'manufacturing smart factory iot iiot industry 4.0 predictive maintenance production line assembly machinery supply chain'
    },
    {
      title: 'Real Estate & PropTech Solutions',
      type: 'Industry',
      category: 'Industry',
      icon: 'fa-building',
      url: 'industries/realestate.html',
      desc: 'Next-generation property listing portals, interactive 3D virtual floorplans, automated tenant agreements, and property CRM management.',
      keywords: 'real estate proptech property apartments housing rentals leasing broker tenant landlord homes architecture'
    },
    {
      title: 'Gaming & Entertainment Software',
      type: 'Industry',
      category: 'Industry',
      icon: 'fa-gamepad',
      url: 'industries/gaming.html',
      desc: 'Multiplayer game matchmaking servers, low-latency WebRTC streaming, in-game economy microtransactions, and interactive digital entertainment.',
      keywords: 'gaming entertainment games multiplayer video games streaming esports twitch unreal unity gameplay'
    },
    {
      title: 'Logistics & Supply Chain Software',
      type: 'Industry',
      category: 'Industry',
      icon: 'fa-truck',
      url: 'industries/logistics.html',
      desc: 'GPS-enabled real-time fleet tracking, dynamic route optimization, warehouse inventory management (WMS), and dispatch automation.',
      keywords: 'logistics supply chain fleet tracking gps route optimization shipping delivery freight warehouse wms dispatch cargo'
    },
    {
      title: 'Travel & Hospitality Booking Tech',
      type: 'Industry',
      category: 'Industry',
      icon: 'fa-plane',
      url: 'industries/travel.html',
      desc: 'Hotel reservation systems, airline flight booking engines, dynamic seasonal pricing algorithms, and mobile guest concierge apps.',
      keywords: 'travel hospitality hotel booking flights tourism vacation airline reservations concierge tour resorts'
    },
    {
      title: 'Legal & Compliance Tech',
      type: 'Industry',
      category: 'Industry',
      icon: 'fa-scale-balanced',
      url: 'industries/legal.html',
      desc: 'AI contract drafting, digital signatures, legal document repositories, automated discovery, and regulatory compliance monitoring.',
      keywords: 'legal legaltech law compliance regulatory contracts lawyer court litigation gdpr audit law firm'
    },

    // Blogs & Thought Leadership
    {
      title: 'The Rise of AI in Modern Tech Infrastructure',
      type: 'Blog',
      category: 'Article',
      icon: 'fa-brain',
      url: 'blogs/ai-in-tech.html',
      desc: 'An in-depth analysis of autonomous AI agents, large language models, enterprise retrieval-augmented generation (RAG), and modern tech pipelines.',
      keywords: 'ai artificial intelligence llm machine learning tech infrastructure agents neural networks article blog thought leadership'
    },
    {
      title: 'Top Cybersecurity Trends Every Business Should Know',
      type: 'Blog',
      category: 'Article',
      icon: 'fa-shield-halved',
      url: 'blogs/cybersecurity-trends.html',
      desc: 'Crucial cybersecurity insights covering Zero Trust architecture, ransomware mitigation, cloud posture management, and proactive vulnerability audits.',
      keywords: 'cybersecurity security trends zero trust ransomware firewall hacking protection audit compliance article blog'
    },
    {
      title: "A Beginner's Guide to Cloud Computing & Migration",
      type: 'Blog',
      category: 'Article',
      icon: 'fa-cloud',
      url: 'blogs/cloud-computing-guide.html',
      desc: 'Step-by-step primer explaining cloud adoption, comparing AWS vs Azure vs GCP, Docker containerization, serverless architectures, and cost management.',
      keywords: 'cloud computing cloud migration aws azure gcp serverless docker kubernetes devops guide tutorial article blog'
    }
  ];

  var searchPanelInner = document.querySelector('.ta-search-panel-inner');
  var searchInput = document.getElementById('ta-search-input');
  var searchForm = document.querySelector('.ta-search-form');

  if (searchPanelInner && searchInput) {
    // Reuse existing results container if present in DOM, else create one
    var resultsBox = searchPanelInner.querySelector('.ta-search-results');
    if (!resultsBox) {
      resultsBox = document.createElement('div');
      resultsBox.className = 'ta-search-results';
      resultsBox.id = 'ta-search-results';
      searchPanelInner.appendChild(resultsBox);
    }

    function escapeHtml(str) {
      return String(str || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }

    function highlightMatches(text, terms) {
      if (!text) return '';
      var safeText = escapeHtml(text);
      if (!terms || !terms.length) return safeText;
      var escaped = terms.map(function (t) {
        return t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      }).filter(Boolean);
      if (!escaped.length) return safeText;
      var regex = new RegExp('(' + escaped.join('|') + ')', 'gi');
      return safeText.replace(regex, '<mark class="ta-search-match">$1</mark>');
    }

    function getBasePrefix() {
      var path = window.location.pathname.replace(/\\/g, '/').toLowerCase();
      if (/\/(services|industries|products|blogs)\//.test(path)) {
        return '../';
      }
      var relScript = document.querySelector('script[src^="../"]');
      var relLink = document.querySelector('link[href^="../"]');
      if (relScript || relLink) {
        return '../';
      }
      return '';
    }

    function performSearch(query) {
      var q = (query || '').trim();
      resultsBox.innerHTML = '';
      if (!q) return;

      var terms = q.toLowerCase().split(/\s+/).filter(Boolean);
      if (!terms.length) return;

      var scoredMatches = [];
      var qLower = q.toLowerCase();

      SEARCH_DATABASE.forEach(function (item) {
        var titleLower = item.title.toLowerCase();
        var descLower = (item.desc || '').toLowerCase();
        var kwLower = (item.keywords || '').toLowerCase();
        var typeLower = (item.type || '').toLowerCase();
        var catLower = (item.category || '').toLowerCase();

        var score = 0;
        var matchedTerms = 0;

        var fullWordRegex = new RegExp('\\b' + qLower.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i');

        if (titleLower === qLower) {
          score += 250;
        } else if (fullWordRegex.test(titleLower)) {
          score += 160;
        } else if (titleLower.indexOf(qLower) !== -1) {
          score += 70;
        }

        if (fullWordRegex.test(kwLower)) {
          score += 90;
        } else if (kwLower.indexOf(qLower) !== -1) {
          score += 35;
        }

        if (fullWordRegex.test(descLower)) {
          score += 70;
        } else if (descLower.indexOf(qLower) !== -1) {
          score += 25;
        }

        // Check individual search terms
        terms.forEach(function (t) {
          var termMatched = false;
          var wordRegex = new RegExp('\\b' + t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i');

          if (wordRegex.test(titleLower)) {
            score += 60;
            termMatched = true;
          } else if (titleLower.indexOf(t) !== -1) {
            score += 20;
            termMatched = true;
          }

          if (wordRegex.test(kwLower)) {
            score += 50;
            termMatched = true;
          } else if (kwLower.indexOf(t) !== -1) {
            score += 15;
            termMatched = true;
          }

          if (wordRegex.test(descLower)) {
            score += 35;
            termMatched = true;
          } else if (descLower.indexOf(t) !== -1) {
            score += 12;
            termMatched = true;
          }

          if (wordRegex.test(typeLower) || wordRegex.test(catLower)) {
            score += 25;
            termMatched = true;
          }

          if (termMatched) matchedTerms++;
        });

        if (score > 0) {
          // Bonus if all terms matched
          if (matchedTerms === terms.length) score += 30;
          scoredMatches.push({ item: item, score: score });
        }
      });

      scoredMatches.sort(function (a, b) {
        return b.score - a.score;
      });

      if (!scoredMatches.length) {
        var emptyHtml =
          '<div class="ta-search-empty">' +
            '<p>No results found for "<strong>' + escapeHtml(q) + '</strong>"</p>' +
            '<div class="ta-search-suggestions">' +
              '<span>Popular searches:</span>' +
              '<button type="button" class="ta-search-sug-btn" data-query="Custom Software">Custom Software</button>' +
              '<button type="button" class="ta-search-sug-btn" data-query="Web Development">Web Development</button>' +
              '<button type="button" class="ta-search-sug-btn" data-query="AI">AI &amp; ML</button>' +
              '<button type="button" class="ta-search-sug-btn" data-query="Cloud">Cloud Services</button>' +
              '<button type="button" class="ta-search-sug-btn" data-query="Mobile App">Mobile App</button>' +
              '<button type="button" class="ta-search-sug-btn" data-query="Healthcare">Healthcare</button>' +
            '</div>' +
          '</div>';
        resultsBox.innerHTML = emptyHtml;

        resultsBox.querySelectorAll('.ta-search-sug-btn').forEach(function (btn) {
          btn.addEventListener('click', function () {
            var sq = this.getAttribute('data-query');
            if (searchInput) {
              searchInput.value = sq;
              performSearch(sq);
              searchInput.focus();
            }
          });
        });
        return;
      }

      var meta = document.createElement('div');
      meta.className = 'ta-search-meta';
      meta.innerHTML = '<span>Found ' + scoredMatches.length + ' result' + (scoredMatches.length > 1 ? 's' : '') + '</span>' +
                       '<span>Press [ESC] to close</span>';
      resultsBox.appendChild(meta);

      var basePrefix = getBasePrefix();

      function normalizeWpUrl(rawUrl) {
        if (!rawUrl) return (wpSiteUrl || '') + '/';
        var clean = rawUrl.replace(/\.html(\b|#)/, '/$1').replace(/\.html$/, '/');
        if (clean.charAt(0) !== '/') clean = '/' + clean;
        return (wpSiteUrl || '') + clean;
      }

      scoredMatches.forEach(function (matchObj) {
        var m = matchObj.item;
        var a = document.createElement('a');
        a.className = 'ta-search-item';
        a.href = normalizeWpUrl(m.url);

        var highlightedTitle = highlightMatches(m.title, terms);
        var highlightedDesc = highlightMatches(m.desc, terms);

        a.innerHTML =
          '<div class="ta-search-item-icon">' +
            '<i class="fa-solid ' + m.icon + '"></i>' +
          '</div>' +
          '<div class="ta-search-item-info">' +
            '<div class="ta-search-item-top">' +
              '<div class="ta-search-item-title">' + highlightedTitle + '</div>' +
              '<span class="ta-search-item-type">' + escapeHtml(m.type) + '</span>' +
            '</div>' +
            '<div class="ta-search-item-desc">' + highlightedDesc + '</div>' +
          '</div>';

        a.addEventListener('click', function () {
          closeSearch();
        });

        resultsBox.appendChild(a);
      });
    }

    searchInput.addEventListener('input', function () {
      performSearch(this.value);
    });

    if (searchForm) {
      searchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        var firstItem = resultsBox.querySelector('.ta-search-item');
        if (firstItem) {
          firstItem.click();
        }
      });
    }
  }

  /* --------------------------------------------------------------------------
     11. SERVICE PAGE FAQ ACCORDION ENGINE
     -------------------------------------------------------------------------- */
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.sp-faq-btn');
    if (!btn) return;
    var item = btn.closest('.sp-faq-item');
    if (!item) return;
    
    var wasOpen = item.classList.contains('is-open');
    var parent = item.parentElement;
    if (parent) {
      parent.querySelectorAll('.sp-faq-item').forEach(function (el) {
        el.classList.remove('is-open');
      });
    }
    if (!wasOpen) {
      item.classList.add('is-open');
    }
  });

})();

