/**
 * TECHNO AMAZE - CAREERS & APPLICATION SYSTEM
 * Dynamic Jobs Management, Filtering, Details Rendering & Application Dispatch
 */

(function () {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. EMBEDDED FALLBACK DATA (Guarantees local file:/// compatibility)
  // --------------------------------------------------------------------------
  var EMBEDDED_JOBS = [
    {
      id: "wordpress-developer",
      title: "WordPress Developer",
      department: "Engineering",
      location: "Remote / Pune",
      employmentType: "Full Time",
      experience: "1–2 Years",
      salary: "₹4,00,000 - ₹6,50,000 P.A.",
      description: "We are seeking a talented and motivated WordPress Developer to design, customize, and maintain high-performance WordPress websites, WooCommerce portals, and custom themes for global clients. You will collaborate closely with our design and digital marketing teams to deliver responsive, secure, and SEO-optimized web solutions.",
      responsibilities: [
        "Design and build customized, responsive WordPress websites, custom themes, and page builder templates (Elementor/Gutenberg/Bricks).",
        "Develop and customize WooCommerce stores, custom post types, taxonomies, and advanced custom fields (ACF).",
        "Integrate third-party REST APIs, payment gateways (Stripe, Razorpay, PayPal), CRM systems, and marketing automation tools.",
        "Optimize website loading speed, Core Web Vitals, performance caching, and database queries.",
        "Implement robust security protocols, SSL configurations, automated backups, and malware protection.",
        "Collaborate with UI/UX designers to translate Figma/Adobe XD designs into pixel-perfect web experiences."
      ],
      requirements: [
        "1 to 2 years of proven hands-on experience in WordPress theme and plugin development.",
        "Strong proficiency in PHP, HTML5, CSS3/SCSS, JavaScript, jQuery, and MySQL.",
        "Experience building and customizing WooCommerce e-commerce stores and custom checkout flows.",
        "Solid understanding of Advanced Custom Fields (ACF), custom post types, and REST APIs in WordPress.",
        "Knowledge of website speed optimization tools (WP Rocket, LiteSpeed, Cloudflare, WebPageTest).",
        "Familiarity with Git version control and modern deployment workflows."
      ],
      preferred: [
        "Experience with headless WordPress using React/Next.js.",
        "Familiarity with technical SEO best practices and schema markup.",
        "Prior experience working in an IT agency or fast-paced software environment."
      ],
      benefits: [
        "Competitive salary package with annual performance bonuses.",
        "Flexible working arrangement (Remote / Hybrid / Pune office).",
        "Comprehensive health insurance coverage for self and family.",
        "Learning and certification stipend for career advancement.",
        "Collaborative, high-growth engineering culture with regular hackathons.",
        "Paid time off, festive holidays, and wellness leaves."
      ],
      deadline: "2026-12-31",
      status: "open",
      postedDate: "2026-10-01"
    },
    {
      id: "fullstack-developer",
      title: "Full Stack Developer (Node.js & React)",
      department: "Engineering",
      location: "Remote / Hybrid (Pune)",
      employmentType: "Full Time",
      experience: "2–4 Years",
      salary: "₹7,50,000 - ₹12,00,000 P.A.",
      description: "Techno Amaze is looking for an experienced Full Stack Developer skilled in Node.js, Express, React.js, and TypeScript. You will build scalable enterprise web applications, microservices architectures, and SaaS products for high-growth startups and enterprise clients worldwide.",
      responsibilities: [
        "Architect and implement scalable RESTful and GraphQL APIs using Node.js, Express, and TypeScript.",
        "Develop high-performance, modular frontend applications using React.js, Next.js, and state management libraries.",
        "Design and optimize relational (PostgreSQL, MySQL) and NoSQL (MongoDB, Redis) databases.",
        "Work with DevOps engineers to configure CI/CD pipelines, Docker containers, and AWS cloud deployments.",
        "Write clean, unit-tested, and well-documented code following modern SOLID principles.",
        "Participate in code reviews, sprint planning, and architectural discussions."
      ],
      requirements: [
        "2 to 4 years of hands-on experience in full stack software engineering.",
        "Strong expertise in JavaScript/TypeScript, Node.js, React.js, and modern CSS frameworks (Tailwind/SCSS).",
        "Solid understanding of asynchronous programming, event loop, and RESTful API architecture.",
        "Proficiency with relational databases (PostgreSQL/MySQL) and ORMs (Prisma/TypeORM/Sequelize).",
        "Experience with automated testing (Jest, Cypress, Supertest) and Git workflows."
      ],
      preferred: [
        "Experience with Next.js App Router and server-side rendering (SSR).",
        "Knowledge of AWS services (ECS, S3, RDS, Lambda) and Docker containerization.",
        "Experience building multi-tenant SaaS architectures."
      ],
      benefits: [
        "Industry-leading remuneration and stock options for high performers.",
        "Remote-first work flexibility with home office setup reimbursement.",
        "Health & wellness benefits with annual health checkups.",
        "Sponsorship for AWS / Cloud certifications.",
        "Generous vacation policy and mental health days."
      ],
      deadline: "2026-11-30",
      status: "open",
      postedDate: "2026-10-02"
    },
    {
      id: "ai-ml-engineer",
      title: "AI & Machine Learning Engineer",
      department: "AI & Data",
      location: "Remote / Pune",
      employmentType: "Full Time",
      experience: "2–5 Years",
      salary: "₹10,00,000 - ₹18,00,000 P.A.",
      description: "Join our AI research and development team to build cutting-edge Generative AI solutions, LLM agent workflows, fine-tuned foundational models, and intelligent automation systems that solve complex business challenges.",
      responsibilities: [
        "Build, evaluate, and deploy LLM applications using LangChain, LlamaIndex, OpenAI, Anthropic, and open-source models.",
        "Implement Retrieval-Augmented Generation (RAG) pipelines using vector databases (Pinecone, Qdrant, Milvus, pgvector).",
        "Fine-tune pre-trained models on domain-specific datasets and optimize inference latency.",
        "Deploy production ML pipelines with FastAPI, Docker, and Kubernetes on AWS/GCP.",
        "Collaborate with product teams to design AI features that deliver tangible business value and high ROI."
      ],
      requirements: [
        "2 to 5 years of experience in Python software engineering and Applied Machine Learning.",
        "Strong understanding of transformer architectures, embeddings, tokenization, and prompt engineering.",
        "Hands-on experience with vector stores, semantic search, and RAG architectures.",
        "Proficiency in PyTorch, Scikit-learn, HuggingFace transformers, and FastAPI.",
        "Experience deploying AI/ML models as scalable microservices."
      ],
      preferred: [
        "Published papers or open-source contributions in GenAI / NLP.",
        "Experience with autonomous agent frameworks (CrewAI, AutoGen, LangGraph).",
        "Familiarity with model quantization (vLLM, Ollama, TensorRT)."
      ],
      benefits: [
        "Top-tier compensation with quarterly performance incentives.",
        "Budget for GPU computing clusters and experimental AI models.",
        "Full support for attending top tech conferences and AI symposiums.",
        "Flexible working hours and remote flexibility.",
        "Premium health and life insurance."
      ],
      deadline: "2026-12-15",
      status: "open",
      postedDate: "2026-10-03"
    },
    {
      id: "mobile-app-developer",
      title: "Mobile App Developer (Flutter & React Native)",
      department: "Engineering",
      location: "Remote / Pune",
      employmentType: "Full Time",
      experience: "2–4 Years",
      salary: "₹6,00,000 - ₹10,50,000 P.A.",
      description: "We are looking for an innovative Mobile App Developer to build fluid, high-performance cross-platform mobile apps for Android and iOS devices. You will work on proprietary applications like Seato Pro and Techno Amaze Academy as well as custom client solutions.",
      responsibilities: [
        "Develop slick, cross-platform mobile applications using Flutter or React Native for iOS and Android.",
        "Integrate mobile apps with RESTful backend APIs, Firebase services, and push notification systems.",
        "Implement secure offline data storage, biometric authentication, and local SQLite/Hive databases.",
        "Ensure smooth animations, 60fps UI performance, and pixel-perfect design fidelity.",
        "Publish, maintain, and optimize apps on Google Play Store and Apple App Store."
      ],
      requirements: [
        "2 to 4 years of proven mobile application development experience.",
        "Strong portfolio of published apps on Google Play Store or Apple App Store.",
        "Proficiency in Dart/Flutter or React Native with TypeScript.",
        "Experience with state management solutions (Bloc, Provider, Redux, or Zustand).",
        "Understanding of platform-specific APIs, mobile security, and camera/location integrations."
      ],
      preferred: [
        "Experience with native Android (Kotlin) or iOS (Swift) bridges.",
        "Familiarity with in-app purchases, subscription billing, and mobile analytics.",
        "Knowledge of CI/CD for mobile (Fastlane, Codemagic, GitHub Actions)."
      ],
      benefits: [
        "Competitive salary package with project milestone bonuses.",
        "Latest mobile test devices and hardware setup.",
        "Health insurance and annual fitness allowance.",
        "Paid annual vacation and flexible hours.",
        "Continuous skill upgrading through workshops."
      ],
      deadline: "2026-12-20",
      status: "open",
      postedDate: "2026-10-04"
    },
    {
      id: "ui-ux-designer",
      title: "UI/UX Product Designer",
      department: "Design",
      location: "Remote / Hybrid (Pune)",
      employmentType: "Full Time",
      experience: "2–3 Years",
      salary: "₹5,50,000 - ₹9,00,000 P.A.",
      description: "We are seeking a creative and user-focused UI/UX Designer to craft intuitive, engaging, and accessible digital products. You will turn complex requirements into elegant wireframes, high-fidelity prototypes, and comprehensive design systems.",
      responsibilities: [
        "Conduct user research, competitor benchmarks, user personas, and customer journey mapping.",
        "Create wireframes, user task flows, interactive prototypes, and high-fidelity mockups in Figma.",
        "Maintain and evolve our scalable design system and component libraries.",
        "Collaborate closely with frontend engineers to ensure design implementation fidelity.",
        "Run usability tests, analyze heatmaps, and iterate based on quantitative and qualitative user feedback."
      ],
      requirements: [
        "2 to 3 years of UI/UX design experience for SaaS, web apps, or mobile applications.",
        "Impressive portfolio demonstrating UX process, problem solving, visual aesthetics, and micro-interactions.",
        "Mastery of Figma, including auto-layout, variables, interactive components, and prototyping.",
        "Deep understanding of accessibility (WCAG), responsive design, and modern typography.",
        "Strong communication skills to articulate design decisions to stakeholders."
      ],
      preferred: [
        "Knowledge of HTML5, CSS3, and design tokens.",
        "Experience designing for B2B dashboards, enterprise software, or fintech platforms.",
        "Motion design skills with After Effects, Lottie, or Rive."
      ],
      benefits: [
        "Competitive compensation with annual salary reviews.",
        "Top-tier design hardware and Figma / Adobe suite licenses.",
        "Health insurance covering medical and dental expenses.",
        "Flexible hybrid/remote schedule.",
        "Creative and supportive team environment."
      ],
      deadline: "2026-12-10",
      status: "open",
      postedDate: "2026-10-04"
    },
    {
      id: "cloud-devops-engineer",
      title: "Cloud & DevOps Engineer",
      department: "Cloud & Security",
      location: "Remote / Pune",
      employmentType: "Full Time",
      experience: "3–5 Years",
      salary: "₹9,00,000 - ₹15,00,000 P.A.",
      description: "Join our cloud infrastructure team to design, automate, and maintain resilient, highly available multi-cloud architectures. You will drive CI/CD automation, Infrastructure as Code, Kubernetes deployments, and cloud security compliance.",
      responsibilities: [
        "Architect and manage automated cloud environments on AWS, Azure, and Google Cloud Platform.",
        "Write and maintain Infrastructure as Code using Terraform, CloudFormation, and Ansible.",
        "Implement and optimize CI/CD pipelines using GitHub Actions, GitLab CI, and Jenkins.",
        "Manage Kubernetes clusters (EKS/GKE), Helm charts, container registries, and microservice meshes.",
        "Configure centralized monitoring, logging, and alerting using Prometheus, Grafana, and ELK/Datadog.",
        "Enforce cloud security standards, Zero Trust postures, and automated vulnerability scanning."
      ],
      requirements: [
        "3 to 5 years of DevOps, SRE, or Cloud Engineering experience.",
        "Strong hands-on experience with AWS or Azure core services.",
        "Extensive experience with Docker, Kubernetes, and container orchestration.",
        "Proficiency in Terraform for infrastructure automation.",
        "Strong Linux administration skills and scripting in Bash or Python."
      ],
      preferred: [
        "AWS Certified Solutions Architect or CKA (Certified Kubernetes Administrator).",
        "Experience with SOC2, ISO 27001, or HIPAA compliance implementation.",
        "Knowledge of GitOps methodologies with ArgoCD."
      ],
      benefits: [
        "Excellent pay package with performance bonuses.",
        "Remote work flexibility with flexible working hours.",
        "Certification voucher support for AWS, Kubernetes, and HashiCorp.",
        "Family health insurance and annual wellness benefits.",
        "Generous paid time off and sabbatical opportunities."
      ],
      deadline: "2026-12-31",
      status: "open",
      postedDate: "2026-10-05"
    },
    {
      id: "seo-digital-marketing-specialist",
      title: "SEO & Digital Marketing Specialist",
      department: "Marketing",
      location: "Pune / Remote",
      employmentType: "Full Time",
      experience: "1–3 Years",
      salary: "₹4,00,000 - ₹7,00,000 P.A.",
      description: "We are seeking a results-driven SEO & Digital Marketing Specialist to execute high-impact organic search strategies, technical audits, Google & Meta advertising campaigns, and content promotion that boost traffic, brand authority, and client lead generation.",
      responsibilities: [
        "Conduct comprehensive keyword research, competitor gap analysis, and on-page optimization.",
        "Perform technical SEO audits, site speed assessments, schema markup checks, and indexation fixes.",
        "Manage paid PPC advertising campaigns on Google Ads, Meta Ads, and LinkedIn.",
        "Collaborate with content writers to formulate SEO-driven topic clusters and blog strategies.",
        "Track keyword rankings, organic traffic, and conversion goals using Google Analytics 4, Search Console, and Ahrefs/SEMrush.",
        "Deliver monthly performance reports with actionable insights and ROI attribution."
      ],
      requirements: [
        "1 to 3 years of digital marketing and SEO experience in an agency or tech company.",
        "Hands-on expertise with Google Analytics 4, Google Search Console, Ahrefs, SEMrush, and Screaming Frog.",
        "Demonstrated track record of improving organic rankings and driving qualified inbound traffic.",
        "Experience creating and optimizing Google Ads (Search & Performance Max) and Meta Ad campaigns.",
        "Solid understanding of technical SEO, canonical tags, XML sitemaps, and Core Web Vitals."
      ],
      preferred: [
        "Google Ads and Google Analytics certifications.",
        "Experience in B2B SaaS or technology services lead generation.",
        "Basic understanding of HTML, CSS, and CMS platforms."
      ],
      benefits: [
        "Competitive salary plus campaign performance bonuses.",
        "Hybrid/Remote working flexibility.",
        "Marketing tools allowance and course subscriptions.",
        "Comprehensive health insurance.",
        "Friendly and energetic marketing team culture."
      ],
      deadline: "2026-11-25",
      status: "open",
      postedDate: "2026-10-05"
    },
    {
      id: "qa-automation-engineer",
      title: "QA Automation Engineer",
      department: "Engineering",
      location: "Remote / Pune",
      employmentType: "Full Time",
      experience: "2–4 Years",
      salary: "₹6,00,000 - ₹9,50,000 P.A.",
      description: "We are hiring a QA Automation Engineer to build reliable automated end-to-end and API testing suites. You will ensure the quality, security, and performance of mission-critical software releases across our web and mobile applications.",
      responsibilities: [
        "Develop and maintain automated test suites using Cypress, Playwright, or Selenium.",
        "Write and execute API automation tests using Postman, RestAssured, or Supertest.",
        "Integrate automated test runs into CI/CD pipelines for continuous regression testing.",
        "Collaborate with developers to reproduce, document, and verify bug fixes in Jira.",
        "Perform load and performance testing with JMeter or k6 for high-traffic applications."
      ],
      requirements: [
        "2 to 4 years of QA automation testing experience.",
        "Strong coding skills in JavaScript/TypeScript, Python, or Java.",
        "Hands-on experience with modern testing frameworks (Cypress, Playwright, Selenium).",
        "Solid knowledge of API testing, HTTP protocols, JSON, and database validation.",
        "Experience working in an Agile/Scrum development environment."
      ],
      preferred: [
        "Experience in mobile testing automation with Appium.",
        "Understanding of security testing basics and OWASP Top 10.",
        "Familiarity with Docker and GitHub Actions."
      ],
      benefits: [
        "Competitive pay scale with annual increments.",
        "Remote work flexibility.",
        "Health insurance coverage.",
        "Continuous learning and ISTQB certification support.",
        "Open and supportive engineering culture."
      ],
      deadline: "2026-12-05",
      status: "open",
      postedDate: "2026-10-06"
    }
  ];

  // --------------------------------------------------------------------------
  // 2. CENTRALIZED CAREER DATA SERVICE
  // --------------------------------------------------------------------------
  var CareerAPI = {
    // Easily change this URL later to your PHP API (e.g., 'api/get-jobs.php')
    endpoint: 'data/jobs.json',

    /**
     * Fetch all jobs from jobs.json (or API)
     * Automatically falls back to embedded data if running via file://
     */
    getJobs: function () {
      return new Promise(function (resolve) {
        // If loaded via file:// protocol, avoid CORS block and use embedded data
        if (window.location.protocol === 'file:') {
          resolve(EMBEDDED_JOBS);
          return;
        }

        fetch('data/jobs.json', { cache: 'no-cache' })
          .then(function (res) {
            if (!res.ok) throw new Error('HTTP ' + res.status);
            return res.json();
          })
          .then(function (data) {
            var list = (data && data.jobs) ? data.jobs : EMBEDDED_JOBS;
            resolve(list);
          })
          .catch(function () {
            // Graceful fallback to embedded jobs
            resolve(EMBEDDED_JOBS);
          });
      });
    },

    /**
     * Get a single job by its ID
     */
    getJobById: function (id) {
      return this.getJobs().then(function (jobs) {
        if (!id) return null;
        var found = jobs.find(function (j) {
          return j.id.toLowerCase() === id.toLowerCase();
        });
        return found || null;
      });
    },

    /**
     * Check if a job's application deadline has passed
     */
    isDeadlinePassed: function (deadlineStr) {
      if (!deadlineStr) return false;
      var deadline = new Date(deadlineStr);
      if (isNaN(deadline.getTime())) return false;
      // Set to end of deadline day
      deadline.setHours(23, 59, 59, 999);
      return new Date() > deadline;
    },

    /**
     * Submit candidate application (POST FormData to PHP/API endpoint)
     */
    submitApplication: function (formData) {
      return new Promise(function (resolve, reject) {
        // If on static file:// preview, simulate realistic submission and persist to localStorage
        if (window.location.protocol === 'file:') {
          setTimeout(function () {
            var refId = 'TA-APP-' + new Date().getFullYear() + '-' + Math.floor(100000 + Math.random() * 900000);
            var appData = {
              refId: refId,
              jobId: formData.get('job_id'),
              jobTitle: formData.get('job_title'),
              candidateName: formData.get('name'),
              email: formData.get('email'),
              phone: formData.get('phone'),
              location: formData.get('location') || '',
              experience: formData.get('experience') || '',
              date: new Date().toISOString()
            };
            try {
              var list = JSON.parse(localStorage.getItem('ta_demo_applications') || '[]');
              list.push(appData);
              localStorage.setItem('ta_demo_applications', JSON.stringify(list));
            } catch (e) {}

            resolve({
              success: true,
              refId: refId,
              jobTitle: appData.jobTitle,
              candidateName: appData.candidateName,
              isLocalPreview: true
            });
          }, 600);
          return;
        }

        // Live backend endpoint
        fetch('api/apply.php', {
          method: 'POST',
          body: formData
        })
          .then(function (res) {
            return res.json().catch(function () {
              throw new Error('Server returned invalid response');
            });
          })
          .then(function (result) {
            if (result && result.success) {
              resolve(result);
            } else {
              reject(new Error((result && result.message) ? result.message : 'Application submission failed.'));
            }
          })
          .catch(function (err) {
            reject(err);
          });
      });
    }
  };

  // Expose to window for external or debugging use
  window.CareerAPI = CareerAPI;

  // --------------------------------------------------------------------------
  // 3. UTILITY HELPERS
  // --------------------------------------------------------------------------
  function decodeEntities(str) {
    if (!str) return '';
    var txt = document.createElement('textarea');
    txt.innerHTML = str;
    return txt.value;
  }

  function escapeHtml(str) {
    return String(decodeEntities(str) || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function getQueryParam(name) {
    var search = window.location.search;
    if (!search) return null;
    var params = new URLSearchParams(search);
    return params.get(name);
  }

  // --------------------------------------------------------------------------
  // 4. CONTROLLER: CAREERS PAGE (/careers.html)
  // --------------------------------------------------------------------------
  function initCareersPage() {
    var container = document.getElementById('ta-jobs-list');
    if (!container) return;

    var filterTabs = document.getElementById('ta-filter-tabs');
    var searchInput = document.getElementById('ta-job-search');
    var statusInfo = document.getElementById('ta-jobs-count-info');
    var emptyState = document.getElementById('ta-jobs-empty-state');

    var allOpenJobs = [];
    var currentDept = 'all';
    var currentQuery = '';

    function renderJobs() {
      var filtered = allOpenJobs.filter(function (job) {
        var matchDept = (currentDept === 'all') || (job.department && job.department.toLowerCase() === currentDept.toLowerCase());
        var matchQuery = true;
        if (currentQuery) {
          var q = currentQuery.toLowerCase();
          var titleMatch = job.title.toLowerCase().indexOf(q) !== -1;
          var descMatch = (job.description || '').toLowerCase().indexOf(q) !== -1;
          var locMatch = (job.location || '').toLowerCase().indexOf(q) !== -1;
          var deptMatch = (job.department || '').toLowerCase().indexOf(q) !== -1;
          matchQuery = titleMatch || descMatch || locMatch || deptMatch;
        }
        return matchDept && matchQuery;
      });

      // Update count info
      if (statusInfo) {
        statusInfo.innerHTML = 'Showing <strong>' + filtered.length + '</strong> active opening' + (filtered.length === 1 ? '' : 's');
      }

      // Empty state
      if (!filtered.length) {
        container.innerHTML = '';
        if (emptyState) emptyState.style.display = 'block';
        return;
      }

      if (emptyState) emptyState.style.display = 'none';

      var html = '';
      filtered.forEach(function (job) {
        var isExpired = CareerAPI.isDeadlinePassed(job.deadline);
        var deadlineHtml = job.deadline ? '<div class="ta-job-meta-item"><i class="fa-regular fa-clock"></i> Apply by ' + escapeHtml(job.deadline) + '</div>' : '';
        var salaryHtml = job.salary ? '<div class="ta-job-meta-item"><i class="fa-solid fa-indian-rupee-sign"></i> ' + escapeHtml(job.salary) + '</div>' : '';

        html +=
          '<article class="ta-job-card">' +
            '<div class="ta-job-card-top">' +
              '<div class="ta-job-card-tags">' +
                '<span class="ta-job-tag ta-job-tag--dept">' + escapeHtml(job.department || 'Engineering') + '</span>' +
                (isExpired
                  ? '<span class="ta-job-tag ta-job-tag--status-closed"><i class="fa-solid fa-circle-exclamation"></i> Deadline Closed</span>'
                  : '<span class="ta-job-tag ta-job-tag--status-open"><i class="fa-solid fa-circle-check"></i> Actively Hiring</span>') +
              '</div>' +
              '<h3 class="ta-job-card-title">' +
                '<a href="job-details.html?job=' + encodeURIComponent(job.id) + '">' + escapeHtml(job.title) + '</a>' +
              '</h3>' +
              '<div class="ta-job-meta-list">' +
                '<div class="ta-job-meta-item"><i class="fa-solid fa-location-dot"></i> ' + escapeHtml(job.location) + '</div>' +
                '<div class="ta-job-meta-item"><i class="fa-solid fa-briefcase"></i> ' + escapeHtml(job.employmentType) + '</div>' +
                '<div class="ta-job-meta-item"><i class="fa-solid fa-user-graduate"></i> ' + escapeHtml(job.experience) + '</div>' +
                salaryHtml +
                deadlineHtml +
              '</div>' +
              '<p class="ta-job-card-desc">' + escapeHtml(job.description) + '</p>' +
            '</div>' +
            '<div class="ta-job-card-actions">' +
              '<a href="job-details.html?job=' + encodeURIComponent(job.id) + '" class="ta-btn-details">View Details</a>' +
              (isExpired
                ? '<button type="button" class="ta-btn-apply" disabled style="opacity:0.5;cursor:not-allowed;">Closed</button>'
                : '<a href="apply.html?job=' + encodeURIComponent(job.id) + '" class="ta-btn-apply">Apply Now <i class="fa-solid fa-arrow-right" style="font-size:11px;margin-left:4px;"></i></a>') +
            '</div>' +
          '</article>';
      });

      container.innerHTML = html;
    }

    // Load jobs
    CareerAPI.getJobs().then(function (jobs) {
      // Only display jobs with status === "open"
      allOpenJobs = jobs.filter(function (j) {
        return (j.status || '').toLowerCase() === 'open';
      });

      // Build department tabs dynamically
      if (filterTabs) {
        var deptCounts = {};
        allOpenJobs.forEach(function (j) {
          var d = j.department || 'Engineering';
          deptCounts[d] = (deptCounts[d] || 0) + 1;
        });

        var tabsHtml = '<button type="button" class="ta-filter-btn active" data-dept="all">All Roles (' + allOpenJobs.length + ')</button>';
        Object.keys(deptCounts).forEach(function (d) {
          tabsHtml += '<button type="button" class="ta-filter-btn" data-dept="' + escapeHtml(d) + '">' + escapeHtml(d) + ' (' + deptCounts[d] + ')</button>';
        });
        filterTabs.innerHTML = tabsHtml;

        filterTabs.querySelectorAll('.ta-filter-btn').forEach(function (btn) {
          btn.addEventListener('click', function () {
            filterTabs.querySelectorAll('.ta-filter-btn').forEach(function (b) { b.classList.remove('active'); });
            this.classList.add('active');
            currentDept = this.getAttribute('data-dept');
            renderJobs();
          });
        });
      }

      // Search input listener
      if (searchInput) {
        searchInput.addEventListener('input', function () {
          currentQuery = this.value.trim();
          renderJobs();
        });
      }

      renderJobs();
    });
  }

  // --------------------------------------------------------------------------
  // 5. CONTROLLER: JOB DETAILS PAGE (/job-details.html?job=...)
  // --------------------------------------------------------------------------
  function initJobDetailsPage() {
    var detailsRoot = document.getElementById('ta-job-details-root');
    if (!detailsRoot) return;

    var jobId = getQueryParam('job');
    var notFoundBox = document.getElementById('ta-job-not-found');
    var contentBox = document.getElementById('ta-job-content-wrap');

    if (!jobId) {
      if (contentBox) contentBox.style.display = 'none';
      if (notFoundBox) notFoundBox.style.display = 'block';
      return;
    }

    CareerAPI.getJobById(jobId).then(function (job) {
      if (!job) {
        if (contentBox) contentBox.style.display = 'none';
        if (notFoundBox) notFoundBox.style.display = 'block';
        return;
      }

      if (notFoundBox) notFoundBox.style.display = 'none';
      if (contentBox) contentBox.style.display = 'block';

      job.title = decodeEntities(job.title);
      job.department = decodeEntities(job.department || 'Engineering');
      job.location = decodeEntities(job.location || 'Remote / Pune');
      job.employmentType = decodeEntities(job.employmentType || 'Full Time');
      job.description = decodeEntities(job.description || '');
      if (Array.isArray(job.responsibilities)) {
        job.responsibilities = job.responsibilities.map(decodeEntities);
      }
      if (Array.isArray(job.requirements)) {
        job.requirements = job.requirements.map(decodeEntities);
      }
      if (Array.isArray(job.preferred)) {
        job.preferred = job.preferred.map(decodeEntities);
      }
      if (Array.isArray(job.benefits)) {
        job.benefits = job.benefits.map(decodeEntities);
      }

      // Update page title
      document.title = job.title + ' | Careers at Techno Amaze';

      // Breadcrumb job title
      var bcJobTitle = document.getElementById('ta-bc-job-title');
      if (bcJobTitle) bcJobTitle.textContent = job.title;

      // Status checks
      var isClosed = (job.status || '').toLowerCase() !== 'open';
      var isExpired = CareerAPI.isDeadlinePassed(job.deadline);
      var canApply = !isClosed && !isExpired;

      // Notice alerts
      var alertNotice = document.getElementById('ta-job-status-alert');
      if (alertNotice) {
        if (isClosed) {
          alertNotice.className = 'ta-alert-danger';
          alertNotice.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> <strong>Position Closed:</strong> This job opening has been filled or temporarily closed. You can explore other active positions on our Careers page.';
          alertNotice.style.display = 'flex';
        } else if (isExpired) {
          alertNotice.className = 'ta-alert-warning';
          alertNotice.innerHTML = '<i class="fa-solid fa-clock-rotate-left"></i> <strong>Deadline Expired:</strong> The application deadline for this position has passed. Applications are no longer being accepted.';
          alertNotice.style.display = 'flex';
        } else {
          alertNotice.style.display = 'none';
        }
      }

      // Title & Tags
      var titleEl = document.getElementById('ta-detail-title');
      if (titleEl) titleEl.textContent = job.title;

      var deptEl = document.getElementById('ta-detail-dept');
      if (deptEl) deptEl.textContent = job.department || 'Engineering';

      var statusTag = document.getElementById('ta-detail-status-tag');
      if (statusTag) {
        if (!canApply) {
          statusTag.className = 'ta-job-tag ta-job-tag--status-closed';
          statusTag.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Closed';
        } else {
          statusTag.className = 'ta-job-tag ta-job-tag--status-open';
          statusTag.innerHTML = '<i class="fa-solid fa-circle-check"></i> Actively Hiring';
        }
      }

      // Meta Pills
      var locEl = document.getElementById('ta-detail-location');
      if (locEl) locEl.textContent = job.location;

      var typeEl = document.getElementById('ta-detail-type');
      if (typeEl) typeEl.textContent = job.employmentType;

      var expEl = document.getElementById('ta-detail-exp');
      if (expEl) expEl.textContent = job.experience;

      var salEl = document.getElementById('ta-detail-salary');
      if (salEl) salEl.textContent = job.salary || 'Competitive / Best in Industry';

      var deadEl = document.getElementById('ta-detail-deadline');
      if (deadEl) deadEl.textContent = job.deadline ? job.deadline : 'Rolling Basis';

      // Description
      var descEl = document.getElementById('ta-detail-desc');
      if (descEl) descEl.textContent = job.description;

      // Responsibilities
      var respWrap = document.getElementById('ta-detail-responsibilities-wrap');
      var respList = document.getElementById('ta-detail-responsibilities');
      if (respList) {
        if (job.responsibilities && job.responsibilities.length) {
          respList.innerHTML = job.responsibilities.map(function (r) {
            return '<li><i class="fa-solid fa-check-circle"></i> <span>' + escapeHtml(r) + '</span></li>';
          }).join('');
        } else if (respWrap) {
          respWrap.style.display = 'none';
        }
      }

      // Requirements
      var reqWrap = document.getElementById('ta-detail-requirements-wrap');
      var reqList = document.getElementById('ta-detail-requirements');
      if (reqList) {
        if (job.requirements && job.requirements.length) {
          reqList.innerHTML = job.requirements.map(function (rq) {
            return '<li><i class="fa-solid fa-circle-dot"></i> <span>' + escapeHtml(rq) + '</span></li>';
          }).join('');
        } else if (reqWrap) {
          reqWrap.style.display = 'none';
        }
      }

      // Preferred Qualifications
      var prefWrap = document.getElementById('ta-detail-preferred-wrap');
      var prefList = document.getElementById('ta-detail-preferred');
      if (prefList) {
        if (job.preferred && job.preferred.length) {
          prefList.innerHTML = job.preferred.map(function (p) {
            return '<li><i class="fa-solid fa-star"></i> <span>' + escapeHtml(p) + '</span></li>';
          }).join('');
          if (prefWrap) prefWrap.style.display = 'block';
        } else if (prefWrap) {
          prefWrap.style.display = 'none';
        }
      }

      // Benefits
      var benWrap = document.getElementById('ta-detail-benefits-wrap');
      var benList = document.getElementById('ta-detail-benefits');
      if (benList) {
        if (job.benefits && job.benefits.length) {
          benList.innerHTML = job.benefits.map(function (b) {
            return '<li><i class="fa-solid fa-gift"></i> <span>' + escapeHtml(b) + '</span></li>';
          }).join('');
        } else if (benWrap) {
          benWrap.style.display = 'none';
        }
      }

      // Sidebar Overview Values
      var sbDept = document.getElementById('ta-sb-dept');
      if (sbDept) sbDept.textContent = job.department || 'Engineering';

      var sbLoc = document.getElementById('ta-sb-loc');
      if (sbLoc) sbLoc.textContent = job.location;

      var sbType = document.getElementById('ta-sb-type');
      if (sbType) sbType.textContent = job.employmentType;

      var sbExp = document.getElementById('ta-sb-exp');
      if (sbExp) sbExp.textContent = job.experience;

      var sbSal = document.getElementById('ta-sb-sal');
      if (sbSal) sbSal.textContent = job.salary || 'Best in Industry';

      var sbDead = document.getElementById('ta-sb-dead');
      if (sbDead) sbDead.textContent = job.deadline || 'Open until filled';

      var sbDate = document.getElementById('ta-sb-date');
      if (sbDate) sbDate.textContent = job.postedDate || 'Recent';

      // Apply Buttons (Hero, Sidebar, Bottom CTA)
      var applyButtons = document.querySelectorAll('.ta-trigger-apply-btn');
      applyButtons.forEach(function (btn) {
        if (!canApply) {
          btn.setAttribute('disabled', 'disabled');
          btn.style.opacity = '0.5';
          btn.style.pointerEvents = 'none';
          btn.textContent = isClosed ? 'Position Closed' : 'Deadline Expired';
        } else {
          btn.removeAttribute('disabled');
          btn.style.opacity = '1';
          btn.style.pointerEvents = 'auto';
          btn.href = 'apply.html?job=' + encodeURIComponent(job.id);
        }
      });

      // Share links
      var shareUrl = encodeURIComponent(window.location.href);
      var shareTitle = encodeURIComponent('Hiring: ' + job.title + ' at Techno Amaze');

      var shareLi = document.getElementById('ta-share-linkedin');
      if (shareLi) shareLi.href = 'https://www.linkedin.com/sharing/share-offsite/?url=' + shareUrl;

      var shareTw = document.getElementById('ta-share-twitter');
      if (shareTw) shareTw.href = 'https://twitter.com/intent/tweet?text=' + shareTitle + '&url=' + shareUrl;

      var shareWa = document.getElementById('ta-share-whatsapp');
      if (shareWa) shareWa.href = 'https://api.whatsapp.com/send?text=' + shareTitle + '%20' + shareUrl;

      var shareCopy = document.getElementById('ta-share-copy');
      if (shareCopy) {
        shareCopy.addEventListener('click', function () {
          navigator.clipboard.writeText(window.location.href).then(function () {
            shareCopy.innerHTML = '<i class="fa-solid fa-check" style="color:#10b981;"></i>';
            setTimeout(function () {
              shareCopy.innerHTML = '<i class="fa-solid fa-link"></i>';
            }, 2000);
          });
        });
      }
    });
  }

  // --------------------------------------------------------------------------
  // 6. CONTROLLER: APPLY PAGE (/apply.html?job=...)
  // --------------------------------------------------------------------------
  function initApplyPage() {
    var form = document.getElementById('ta-apply-form');
    if (!form) return;

    var jobId = getQueryParam('job');
    var jobTitleDisplay = document.getElementById('ta-apply-job-title');
    var jobMetaDisplay = document.getElementById('ta-apply-job-meta');
    var hiddenJobId = document.getElementById('ta-input-job-id');
    var hiddenJobTitle = document.getElementById('ta-input-job-title');
    var formAlert = document.getElementById('ta-apply-alert');
    var submitBtn = document.getElementById('ta-submit-app-btn');

    // Resume drag & drop elements
    var fileZone = document.getElementById('ta-resume-zone');
    var fileInput = document.getElementById('ta-resume-file');
    var fileSelectedInfo = document.getElementById('ta-file-selected-name');
    var fileClearBtn = document.getElementById('ta-file-clear-btn');

    // Setup drag & drop for file zone
    if (fileZone && fileInput) {
      ['dragenter', 'dragover'].forEach(function (eventName) {
        fileZone.addEventListener(eventName, function (e) {
          e.preventDefault();
          fileZone.classList.add('dragover');
        });
      });

      ['dragleave', 'drop'].forEach(function (eventName) {
        fileZone.addEventListener(eventName, function (e) {
          e.preventDefault();
          fileZone.classList.remove('dragover');
        });
      });

      fileZone.addEventListener('drop', function (e) {
        if (e.dataTransfer && e.dataTransfer.files.length) {
          fileInput.files = e.dataTransfer.files;
          handleFileSelect(fileInput.files[0]);
        }
      });

      fileInput.addEventListener('change', function () {
        if (fileInput.files.length) {
          handleFileSelect(fileInput.files[0]);
        }
      });

      if (fileClearBtn) {
        fileClearBtn.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          fileInput.value = '';
          if (fileSelectedInfo) fileSelectedInfo.parentElement.style.display = 'none';
        });
      }
    }

    function handleFileSelect(file) {
      if (!file) return;
      // Size check (5MB)
      if (file.size > 5 * 1024 * 1024) {
        showFormAlert('File size exceeds the 5MB limit. Please upload a smaller resume file.', 'danger');
        fileInput.value = '';
        if (fileSelectedInfo) fileSelectedInfo.parentElement.style.display = 'none';
        return;
      }
      // Extension check
      var allowed = /\.(pdf|doc|docx)$/i;
      if (!allowed.test(file.name)) {
        showFormAlert('Invalid file format. Please upload a PDF, DOC, or DOCX document.', 'danger');
        fileInput.value = '';
        if (fileSelectedInfo) fileSelectedInfo.parentElement.style.display = 'none';
        return;
      }

      hideFormAlert();
      if (fileSelectedInfo) {
        fileSelectedInfo.textContent = file.name + ' (' + (file.size / (1024 * 1024)).toFixed(2) + ' MB)';
        fileSelectedInfo.parentElement.style.display = 'inline-flex';
      }
    }

    function showFormAlert(msg, type) {
      if (!formAlert) return;
      formAlert.className = type === 'danger' ? 'ta-alert-danger' : 'ta-alert-warning';
      formAlert.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> <span>' + escapeHtml(msg) + '</span>';
      formAlert.style.display = 'flex';
      formAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function hideFormAlert() {
      if (formAlert) formAlert.style.display = 'none';
    }

    // Load and associate job
    if (jobId) {
      CareerAPI.getJobById(jobId).then(function (job) {
        if (job) {
          var isClosed = (job.status || '').toLowerCase() !== 'open';
          var isExpired = CareerAPI.isDeadlinePassed(job.deadline);

          if (isClosed || isExpired) {
            showFormAlert('Notice: This position is currently closed or the deadline has passed. Applications submitted may be held for future consideration.', 'warning');
          }

          if (jobTitleDisplay) jobTitleDisplay.textContent = 'Apply for ' + job.title;
          if (jobMetaDisplay) jobMetaDisplay.textContent = job.location + ' • ' + job.employmentType + ' • ' + job.experience;
          if (hiddenJobId) hiddenJobId.value = job.id;
          if (hiddenJobTitle) hiddenJobTitle.value = job.title;
        } else {
          if (jobTitleDisplay) jobTitleDisplay.textContent = 'Apply for ' + jobId.replace(/-/g, ' ');
          if (hiddenJobId) hiddenJobId.value = jobId;
          if (hiddenJobTitle) hiddenJobTitle.value = jobId.replace(/-/g, ' ');
        }
      });
    } else {
      if (jobTitleDisplay) jobTitleDisplay.textContent = 'General Career Application';
      if (jobMetaDisplay) jobMetaDisplay.textContent = 'Techno Amaze Talent Network';
      if (hiddenJobId) hiddenJobId.value = 'general-application';
      if (hiddenJobTitle) hiddenJobTitle.value = 'General Career Application';
    }

    // Form submission
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      hideFormAlert();

      // Basic field validation
      var nameVal = (form.elements['name'] ? form.elements['name'].value : '').trim();
      var emailVal = (form.elements['email'] ? form.elements['email'].value : '').trim();
      var phoneVal = (form.elements['phone'] ? form.elements['phone'].value : '').trim();
      var expVal = (form.elements['experience'] ? form.elements['experience'].value : '').trim();
      var consentVal = form.elements['consent'] ? form.elements['consent'].checked : false;

      if (!nameVal) {
        showFormAlert('Please enter your full name.', 'danger');
        return;
      }
      if (!emailVal || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
        showFormAlert('Please enter a valid email address.', 'danger');
        return;
      }
      if (!phoneVal || phoneVal.length < 8) {
        showFormAlert('Please enter a valid phone number.', 'danger');
        return;
      }
      if (!expVal) {
        showFormAlert('Please specify your total experience.', 'danger');
        return;
      }
      if (!fileInput || !fileInput.files.length) {
        showFormAlert('Please upload your resume (PDF, DOC, DOCX up to 5MB).', 'danger');
        return;
      }
      if (!consentVal) {
        showFormAlert('Please accept the consent terms to proceed with your application.', 'danger');
        return;
      }

      // Prepare submission
      if (submitBtn) {
        submitBtn.setAttribute('disabled', 'disabled');
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Submitting Application...';
      }

      var formData = new FormData(form);

      CareerAPI.submitApplication(formData)
        .then(function (res) {
          // Store successful application details in sessionStorage for the success page
          var successPayload = {
            refId: res.refId || ('TA-APP-' + Math.floor(100000 + Math.random() * 900000)),
            jobTitle: formData.get('job_title') || 'Position',
            candidateName: nameVal,
            email: emailVal,
            submittedAt: new Date().toLocaleString()
          };
          try {
            sessionStorage.setItem('ta_last_application', JSON.stringify(successPayload));
          } catch (err) {}

          // Redirect to success page
          window.location.href = 'application-success.html?ref=' + encodeURIComponent(successPayload.refId) +
                                 '&job=' + encodeURIComponent(successPayload.jobTitle) +
                                 '&name=' + encodeURIComponent(successPayload.candidateName);
        })
        .catch(function (err) {
          if (submitBtn) {
            submitBtn.removeAttribute('disabled');
            submitBtn.innerHTML = 'Submit Application <i class="fa-solid fa-paper-plane" style="font-size:13px;margin-left:6px;"></i>';
          }
          showFormAlert(err.message || 'An error occurred while submitting your application. Please try again.', 'danger');
        });
    });
  }

  // --------------------------------------------------------------------------
  // 7. CONTROLLER: APPLICATION SUCCESS PAGE (/application-success.html)
  // --------------------------------------------------------------------------
  function initSuccessPage() {
    var successRoot = document.getElementById('ta-success-root');
    if (!successRoot) return;

    // Retrieve from query parameters or sessionStorage
    var refFromUrl = getQueryParam('ref');
    var jobFromUrl = getQueryParam('job');
    var nameFromUrl = getQueryParam('name');

    var storedData = null;
    try {
      storedData = JSON.parse(sessionStorage.getItem('ta_last_application') || 'null');
    } catch (e) {}

    var refId = refFromUrl || (storedData ? storedData.refId : 'TA-APP-2026-REC');
    var jobTitle = jobFromUrl || (storedData ? storedData.jobTitle : 'Role at Techno Amaze');
    var candidateName = nameFromUrl || (storedData ? storedData.candidateName : 'Candidate');
    var timestamp = (storedData && storedData.submittedAt) ? storedData.submittedAt : new Date().toLocaleString();

    var refEl = document.getElementById('ta-success-ref');
    if (refEl) refEl.textContent = refId;

    var jobEl = document.getElementById('ta-success-job');
    if (jobEl) jobEl.textContent = jobTitle;

    var nameEl = document.getElementById('ta-success-name');
    if (nameEl) nameEl.textContent = candidateName;

    var timeEl = document.getElementById('ta-success-time');
    if (timeEl) timeEl.textContent = timestamp;
  }

  // --------------------------------------------------------------------------
  // 8. DOM INITIALIZATION ROUTER
  // --------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', function () {
    initCareersPage();
    initJobDetailsPage();
    initApplyPage();
    initSuccessPage();
  });

})();
