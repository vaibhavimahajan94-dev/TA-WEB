const fs = require('fs');
const path = require('path');

const servicesDir = path.join(__dirname, '..', 'services');
if (!fs.existsSync(servicesDir)) {
  fs.mkdirSync(servicesDir, { recursive: true });
}

// 25 Complete Service Definitions
const SERVICES = [
  // 1. Custom Software Development
  {
    slug: 'custom-software-development',
    title: 'Custom Software Development',
    category: 'Software Engineering',
    categoryIcon: 'fa-code',
    accentColor: '#C8006E',
    tagline: 'Bespoke Enterprise Software Engineered For Scale & Speed',
    metaDesc: 'Build tailor-made enterprise software solutions with Techno Amaze. Scalable microservices, secure backend systems, cloud architectures, and dedicated engineering teams.',
    heroImg: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1400&q=85&auto=format&fit=crop',
    kpis: [
      { num: '3.5x', label: 'Faster Time-to-Market' },
      { num: '99.99%', label: 'Architecture Reliability' },
      { num: '100%', label: 'IP Ownership Transfer' },
      { num: '250+', label: 'Custom Apps Delivered' }
    ],
    overview: {
      headline: 'Transforming Complex Business Workflows into Elegant Digital Systems',
      text: 'Off-the-shelf software rarely fits intricate business processes. Techno Amaze crafts purpose-built custom software applications that align perfectly with your organizational goals. We combine robust cloud-native architecture, enterprise-grade security, and agile development methodologies to deliver software that scales effortlessly with your growing user base.',
      challenges: [
        'Rigid legacy systems that cannot integrate with modern cloud APIs',
        'High licensing costs and redundant features in commercial SaaS packages',
        'Data silos preventing real-time analytics and cross-department collaboration',
        'Security vulnerabilities and compliance gaps in aging software architectures'
      ],
      solutions: [
        'Modular microservices architecture built with Golang, Node.js, and Python',
        'Tailor-made relational and NoSQL database schemas for ultra-fast queries',
        'Automated CI/CD pipelines with zero-downtime rolling updates',
        'Zero-trust security models with AES-256 encryption at rest and in transit'
      ]
    },
    capabilities: [
      {
        icon: 'fa-cubes',
        title: 'Enterprise Web Applications',
        desc: 'Full-stack enterprise platforms featuring real-time data sync, multi-tier permissioning, and high-concurrency throughput.',
        deliverable: 'Scalable multi-tenant architecture with REST/GraphQL APIs'
      },
      {
        icon: 'fa-network-wired',
        title: 'Microservices & Distributed Systems',
        desc: 'Decoupled services using Docker, Kubernetes, and event brokers for elastic scaling and fault-tolerant operations.',
        deliverable: 'Containerized services with automated service mesh & tracing'
      },
      {
        icon: 'fa-database',
        title: 'Legacy System Modernization',
        desc: 'Systematic refactoring and migration of monolithic applications into modular cloud environments without workflow disruption.',
        deliverable: 'Zero-data-loss database migration and API facades'
      },
      {
        icon: 'fa-arrows-split-up-and-left',
        title: 'Custom Workflow Automation',
        desc: 'Automating repetitive manual tasks, billing cycles, approval chains, and document generation with custom logic.',
        deliverable: 'Event-driven automation engines with audit log tracking'
      },
      {
        icon: 'fa-shield-halved',
        title: 'Enterprise Integration & Middleware',
        desc: 'Connecting proprietary software with third-party ERPs, payment gateways, CRM engines, and banking rails.',
        deliverable: 'Secure API gateways with rate limiting and webhook handlers'
      },
      {
        icon: 'fa-chart-line',
        title: 'Cloud-Native Backend Systems',
        desc: 'Serverless and containerized backends engineered on AWS, Azure, or GCP with automated horizontal scaling.',
        deliverable: 'Infrastructure-as-Code scripts with Terraform and monitoring dashboards'
      }
    ],
    techStack: [
      { cat: 'Backend Frameworks', items: ['Node.js / Express', 'Python / Django / FastAPI', 'Golang', 'Java / Spring Boot', '.NET Core'] },
      { cat: 'Frontend & UI', items: ['React.js', 'Next.js', 'Vue.js', 'TypeScript', 'TailwindCSS'] },
      { cat: 'Databases & Cache', items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Elasticsearch'] },
      { cat: 'Cloud & Infrastructure', items: ['AWS', 'Google Cloud', 'Microsoft Azure', 'Docker', 'Kubernetes', 'Terraform'] }
    ],
    methodology: [
      { step: '01', title: 'Architecture Discovery', desc: 'Conducting in-depth technical workshops, workflow mapping, and requirement scoping to design the target system blueprint.' },
      { step: '02', title: 'System Prototyping', desc: 'Developing database schemas, wireframes, and architectural PoCs for early validation of performance and usability.' },
      { step: '03', title: 'Agile Sprint Execution', desc: 'Two-week development sprints with bi-weekly client demos, continuous integration, and transparent Jira/GitHub tracking.' },
      { step: '04', title: 'QA & Security Hardening', desc: 'Automated unit, integration, and load testing coupled with OWASP top-10 vulnerability assessments.' },
      { step: '05', title: 'Deployment & Evolution', desc: 'Zero-downtime production deployment, SLA-backed 24/7 infrastructure monitoring, and continuous feature iterations.' }
    ],
    useCases: [
      { industry: 'Healthcare & Life Sciences', title: 'Clinical Trial Management Platform', desc: 'Built a HIPAA-compliant custom data capture platform tracking 50,000+ patient records with real-time adverse event triggers.' },
      { industry: 'FinTech & Banking', title: 'High-Volume Payment Gateway & Ledger', desc: 'Architected a sub-millisecond transaction processing engine handling $120M+ annual transaction volume with automated reconciliation.' },
      { industry: 'Logistics & Supply Chain', title: 'Autonomous Fleet Dispatching System', desc: 'Engineered an IoT-integrated routing engine that reduced route dispatch times by 42% across 1,200 commercial freight vehicles.' },
      { industry: 'Manufacturing & Industrial', title: 'Smart Factory ERP & Inventory Portal', desc: 'Developed a custom manufacturing control dashboard interfacing with PLC hardware for real-time downtime diagnostics.' }
    ],
    faqs: [
      { q: 'How long does a custom software project typically take?', a: 'Development timelines vary based on scope. An initial MVP typically takes 8 to 12 weeks, while full enterprise platforms range between 4 to 9 months with iterative bi-weekly milestone releases.' },
      { q: 'Who owns the intellectual property (IP) and source code?', a: 'You retain 100% ownership of all source code, architecture diagrams, database schemas, and intellectual property upon final project delivery and payment completion.' },
      { q: 'How do you handle post-launch maintenance and updates?', a: 'We offer flexible SLA-driven maintenance agreements covering 24/7 server monitoring, security patching, dependency upgrades, and ongoing feature development.' },
      { q: 'Can you integrate our custom software with our existing tools?', a: 'Yes. We specialize in building custom middleware and API connectors for Salesforce, SAP, QuickBooks, Stripe, Oracle, and any legacy database system.' }
    ]
  },

  // 2. Website Development
  {
    slug: 'website-development',
    title: 'Website Development',
    category: 'Web Engineering',
    categoryIcon: 'fa-globe',
    accentColor: '#00b4d8',
    tagline: 'High-Performance, Conversion-Focused Web Platforms',
    metaDesc: 'Professional custom website development by Techno Amaze. Ultra-fast loading speeds, responsive design, headless CMS architectures, and SEO optimization.',
    heroImg: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1400&q=85&auto=format&fit=crop',
    kpis: [
      { num: '98/100', label: 'Google PageSpeed Score' },
      { num: '< 1.2s', label: 'Average Page Load Time' },
      { num: '45%+', label: 'Conversion Rate Lift' },
      { num: '400+', label: 'Websites Launched' }
    ],
    overview: {
      headline: 'Architecting Digital Gateways That Engage, Impress & Convert',
      text: 'Your website is the primary digital face of your business. Techno Amaze builds lightning-fast, accessible, and conversion-optimized websites engineered with modern web standards. From corporate enterprise portals to interactive web applications, we focus on responsive aesthetics, search engine dominance, and seamless user experiences.',
      challenges: [
        'Slow page load times leading to high bounce rates and lost leads',
        'Non-responsive designs that break on mobile and tablet devices',
        'Complex, rigid CMS platforms that marketing teams cannot update easily',
        'Poor technical SEO foundations limiting search engine visibility'
      ],
      solutions: [
        'Jamstack and Next.js architectures with static site generation for sub-second speeds',
        'Fluid CSS design systems that look flawless across all screen sizes and resolutions',
        'Intuitive Headless CMS setups (Strapi, Sanity, WordPress) for easy content publishing',
        'Built-in structured data schema, semantic markup, and Core Web Vitals optimization'
      ]
    },
    capabilities: [
      { icon: 'fa-desktop', title: 'Corporate & Enterprise Portals', desc: 'Bespoke corporate websites that articulate your brand story, build investor trust, and generate high-intent leads.', deliverable: 'Fully custom responsive multi-page web platform' },
      { icon: 'fa-bolt', title: 'Headless CMS & Jamstack Sites', desc: 'Decoupled web architectures with Next.js, Sanity, or Strapi for unbeatable speed and enterprise security.', deliverable: 'Static + dynamic hybrid site with instant preview workflows' },
      { icon: 'fa-magnifying-glass-chart', title: 'Technical SEO & Performance Engineering', desc: 'Pre-rendering, asset minification, image WebP conversion, and schema tags to secure top Google rankings.', deliverable: 'Audited 95+ Core Web Vitals score across mobile & desktop' },
      { icon: 'fa-wand-magic-sparkles', title: 'Interactive Web Apps & Portals', desc: 'Web apps featuring real-time calculators, client dashboards, interactive booking engines, and member areas.', deliverable: 'Dynamic React/Vue applications with secure user authentication' },
      { icon: 'fa-universal-access', title: 'Accessibility (WCAG 2.1 Compliance)', desc: 'Screen-reader friendly markup, keyboard navigability, and high-contrast styling for full ADA compliance.', deliverable: 'WCAG 2.1 AA certified markup and accessibility report' },
      { icon: 'fa-chart-pie', title: 'Conversion Rate Optimization (CRO)', desc: 'Strategic heatmapping, A/B testing layouts, sticky CTAs, and frictionless lead capture forms.', deliverable: 'Data-backed UX optimizations with Google Tag Manager integrations' }
    ],
    techStack: [
      { cat: 'Modern Frontend', items: ['React.js', 'Next.js', 'HTML5 / Modern CSS', 'TypeScript', 'TailwindCSS'] },
      { cat: 'Content Management', items: ['Headless WordPress', 'Sanity.io', 'Strapi', 'Contentful', 'Shopify'] },
      { cat: 'Hosting & CDN', items: ['Vercel', 'AWS CloudFront', 'Netlify', 'Cloudflare CDN'] },
      { cat: 'Analytics & Tools', items: ['Google Analytics 4', 'Google Tag Manager', 'Hotjar', 'Lighthouse'] }
    ],
    methodology: [
      { step: '01', title: 'Strategy & Information Architecture', desc: 'User persona research, sitemap planning, and competitive benchmarking.' },
      { step: '02', title: 'High-Fidelity UI/UX Prototyping', desc: 'Interactive Figma wireframes and design mockups crafted to elevate your brand prestige.' },
      { step: '03', title: 'Clean Semantic Coding', desc: 'Pixel-perfect frontend development adhering to clean HTML5, CSS3, and modern JavaScript standards.' },
      { step: '04', title: 'Cross-Device & Browser Testing', desc: 'Rigorous validation on Chrome, Safari, Firefox, iOS, and Android to guarantee consistent rendering.' },
      { step: '05', title: 'Launch & SEO Indexing', desc: 'Zero-downtime DNS cutover, XML sitemap generation, Google Search Console submission, and analytics setup.' }
    ],
    useCases: [
      { industry: 'Financial Advisory', title: 'Global Wealth Management Portal', desc: 'Created an institutional investment portal with real-time portfolio dashboards, resulting in a 68% increase in client inquiries.' },
      { industry: 'SaaS & Technology', title: 'High-Converting Product Launch Site', desc: 'Engineered a dynamic marketing website for a B2B SaaS startup that scaled to 250,000 monthly visits with 99.9% uptime.' },
      { industry: 'Real Estate & Architecture', title: 'Luxury Property Showcase Platform', desc: 'Developed an interactive property catalogue featuring 360-degree virtual walkthroughs and floorplan downloads.' },
      { industry: 'Professional Services', title: 'Legal & Consulting Firm Website', desc: 'Crafted a fast-loading multilingual corporate website with practice area filtering and automated consultation booking.' }
    ],
    faqs: [
      { q: 'Will I be able to update content on my website without technical knowledge?', a: 'Yes! We configure user-friendly content management systems (CMS) with custom page blocks, allowing your marketing team to edit text, images, and publish new pages in minutes.' },
      { q: 'How do you ensure my website performs well on Google search?', a: 'Every website we build follows technical SEO best practices, including semantic HTML5 structure, schema markup, lightning-fast Core Web Vitals, and XML sitemaps.' },
      { q: 'Is the website mobile friendly?', a: 'Every website is developed with a mobile-first responsive approach, tested across 20+ mobile and tablet viewports for seamless touch usability.' },
      { q: 'What is the standard turnaround time for a corporate website?', a: 'A standard custom website usually takes between 4 to 8 weeks from initial discovery and wireframes to final production launch.' }
    ]
  },

  // 3. Mobile App Development
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    category: 'Mobile Engineering',
    categoryIcon: 'fa-mobile-screen',
    accentColor: '#7209b7',
    tagline: 'Native & Cross-Platform Mobile Apps Engineered For Viral Adoption',
    metaDesc: 'Custom iOS and Android mobile app development with Techno Amaze. Flutter, React Native, Swift, Kotlin, offline-first architectures, and frictionless in-app experiences.',
    heroImg: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&q=85&auto=format&fit=crop',
    kpis: [
      { num: '4.8 ★', label: 'Average App Store Rating' },
      { num: '10M+', label: 'Total App Downloads' },
      { num: '60fps', label: 'Fluid UI Animation Speed' },
      { num: '150+', label: 'Mobile Apps Published' }
    ],
    overview: {
      headline: 'Building Engaging Mobile Experiences That Users Love & Retain',
      text: 'In a mobile-first world, your application must deliver lightning-fast responsiveness, intuitive navigation, and flawless stability. Techno Amaze engineers high-performance iOS and Android applications utilizing native Swift/Kotlin and cross-platform Flutter/React Native frameworks. From initial UI prototype to Apple App Store and Google Play Store publication, we deliver end-to-end mobile excellence.',
      challenges: [
        'High development costs of building and maintaining separate iOS and Android codebases',
        'App crashes, sluggish UI frame rates, and poor battery consumption',
        'Complex device fragmentation across different screen sizes and OS versions',
        'Friction during App Store review and compliance validation'
      ],
      solutions: [
        'Single-codebase Flutter & React Native architectures reducing engineering costs by up to 40%',
        '60 FPS hardware-accelerated animations and optimized memory management',
        'Automated device cloud testing across 100+ real iPhone and Android devices',
        'Guaranteed App Store and Google Play Store approval with complete submission handling'
      ]
    },
    capabilities: [
      { icon: 'fa-apple', title: 'iOS Native Development', desc: 'Tailored Swift and SwiftUI applications built for iPhone, iPad, and Apple Watch with native iOS capabilities.', deliverable: 'Fully optimized iOS app with FaceID, Apple Pay, and Widgets' },
      { icon: 'fa-android', title: 'Android Native Development', desc: 'Robust Kotlin applications utilizing Material Design 3 and Android Jetpack libraries for maximum stability.', deliverable: 'Modern Android app with Google Play Billing and push services' },
      { icon: 'fa-cubes-stacked', title: 'Flutter Cross-Platform Apps', desc: 'Single codebase applications with native performance, custom rendering engines, and expressive UI.', deliverable: 'Universal iOS + Android build with unified business logic' },
      { icon: 'fa-react', title: 'React Native Development', desc: 'Modular mobile applications leveraging the React ecosystem for fast iterations and seamless OTA updates.', deliverable: 'Cross-platform app integrated with native device bridges' },
      { icon: 'fa-wifi', title: 'Offline-First & Data Sync', desc: 'Local SQLite and Realm databases with automated bi-directional background sync when internet reconnects.', deliverable: 'Resilient offline architecture with conflict resolution' },
      { icon: 'fa-bell', title: 'Push Notifications & Deep Linking', desc: 'Engaging user retention systems with Firebase Cloud Messaging, OneSignal, and segmented push workflows.', deliverable: 'Universal link routing and automated user lifecycle campaigns' }
    ],
    techStack: [
      { cat: 'Mobile Frameworks', items: ['Flutter / Dart', 'React Native', 'Swift / SwiftUI (iOS)', 'Kotlin / Jetpack (Android)'] },
      { cat: 'Backend & APIs', items: ['Node.js', 'FastAPI', 'GraphQL', 'Firebase', 'Supabase'] },
      { cat: 'Local Databases', items: ['SQLite', 'Realm', 'WatermelonDB', 'Hive'] },
      { cat: 'DevOps & App Store', items: ['Fastlane', 'GitHub Actions CI/CD', 'App Store Connect', 'Google Play Console'] }
    ],
    methodology: [
      { step: '01', title: 'Mobile Strategy & User Journeys', desc: 'Defining user archetypes, core app features, monetization flows, and device permission requirements.' },
      { step: '02', title: 'Interactive UX/UI Clickable Prototype', desc: 'Designing iOS and Android native design systems in Figma with real touch interactions.' },
      { step: '03', title: 'Sprint-Based App Engineering', desc: 'Building reusable UI components, local persistence layers, and API integration with continuous TestFlight builds.' },
      { step: '04', title: 'Device Lab & Stress Testing', desc: 'Testing network throttling, battery consumption, background tasks, and security vulnerabilities.' },
      { step: '05', title: 'Store Deployment & Post-Launch Ops', desc: 'Publishing to Apple App Store and Google Play Store with automated crash reporting via Sentry/Firebase.' }
    ],
    useCases: [
      { industry: 'Education & EdTech', title: 'Techno Amaze Academy Learning App', desc: 'Published high-performance video lecture streaming app with offline note downloads and real-time live quizzes.' },
      { industry: 'SaaS & Enterprise', title: 'Seato Pro Mobile Library Companion', desc: 'Engineered student seat reservation and QR attendance app serving 200,000+ monthly active reading room students.' },
      { industry: 'FinTech & Payments', title: 'Mobile Micro-Investment Wallet', desc: 'Built a biometric-secured investment app with instant UPI settlement and automated recurring deposits.' },
      { industry: 'Healthcare & Fitness', title: 'Telehealth & Remote Vitals Monitor', desc: 'Created a HIPAA-compliant patient consultation app with WebRTC video calling and Bluetooth vitals integration.' }
    ],
    faqs: [
      { q: 'Should I choose Native (Swift/Kotlin) or Cross-Platform (Flutter/React Native)?', a: 'For most business, e-commerce, and SaaS apps, Flutter or React Native provides 95%+ native performance with 40% lower cost and faster time-to-market. Native development is best for hardware-heavy apps like 3D gaming or BLE drivers.' },
      { q: 'Do you handle the App Store and Google Play submission process?', a: 'Yes, we manage the entire store submission process including screenshot generation, privacy policy compliance, app review guidelines, and launch approval.' },
      { q: 'How do you keep the app updated after release?', a: 'We provide ongoing maintenance plans to ensure compatibility with new iOS and Android OS releases, resolve bugs, and push feature enhancements.' },
      { q: 'Can my mobile app work without an internet connection?', a: 'Yes! We implement offline-first architectures using local caching and background database sync to ensure seamless user experiences in low-connectivity areas.' }
    ]
  },

  // 4. E-commerce Development
  {
    slug: 'ecommerce-development',
    title: 'E-commerce Development',
    category: 'E-commerce Solutions',
    categoryIcon: 'fa-cart-shopping',
    accentColor: '#f77f00',
    tagline: 'High-Converting Online Stores & Custom Marketplace Platforms',
    metaDesc: 'Scalable custom e-commerce web and mobile development with Techno Amaze. Shopify Plus, WooCommerce, custom headless commerce, multi-vendor marketplaces, and 1-click checkouts.',
    heroImg: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&q=85&auto=format&fit=crop',
    kpis: [
      { num: '38%+', label: 'Average Cart Conversion Rate Lift' },
      { num: '< 0.8s', label: 'Product Catalog Load Time' },
      { num: '$50M+', label: 'Client GMV Processed' },
      { num: '120+', label: 'Online Stores Launched' }
    ],
    overview: {
      headline: 'Engineered For High Order Volumes, Rapid Checkouts & Customer Loyalty',
      text: 'Modern e-commerce requires lightning speed, personalized recommendations, and frictionless checkout flows. Techno Amaze builds custom digital storefronts and multi-vendor marketplaces using Shopify Plus, Magento, WooCommerce, and modern Headless Commerce architectures. We turn casual visitors into loyal repeat buyers with seamless payment gateways, smart inventory management, and automated shipping workflows.',
      challenges: [
        'High cart abandonment rates caused by slow loading speeds and clunky multi-step checkouts',
        'Inventory desynchronization across multi-channel retail stores (Amazon, website, retail POS)',
        'Inability to handle extreme traffic spikes during Black Friday and flash sales',
        'Complex tax, currency, and international shipping calculations'
      ],
      solutions: [
        'Headless storefronts with 1-click accelerated checkout integrations (Apple Pay, Google Pay, Shop Pay)',
        'Automated multi-channel ERP inventory sync preventing stockouts and overselling',
        'Cloud-native autoscaling infrastructure engineered to withstand 100,000+ simultaneous shoppers',
        'Automated multi-currency conversions and global localized shipping engines'
      ]
    },
    capabilities: [
      { icon: 'fa-shopify', title: 'Shopify & Shopify Plus Development', desc: 'Custom Liquid themes, bespoke private apps, and enterprise headless Shopify setups.', deliverable: 'Fully branded, conversion-optimized Shopify storefront' },
      { icon: 'fa-store', title: 'Multi-Vendor Marketplace Portals', desc: 'Amazon-style multi-seller platforms with individual vendor dashboards, commission splits, and automated payouts.', deliverable: 'Complete marketplace ecosystem with seller onboardings' },
      { icon: 'fa-cubes', title: 'Headless Commerce Architectures', desc: 'Next.js frontend powered by Commercelayer, Medusa, or Shopify Storefront API for sub-second speeds.', deliverable: 'Blazing fast custom storefront with limitless UI freedom' },
      { icon: 'fa-credit-card', title: 'Payment Gateways & Localized Checkout', desc: 'Stripe, PayPal, Razorpay, Klarna BNPL, and cryptocurrency checkout integrations with PCI-DSS compliance.', deliverable: 'Frictionless checkout with fraud prevention rules' },
      { icon: 'fa-boxes-stacked', title: 'ERP, CRM & Warehouse Integration', desc: 'Real-time two-way synchronization with SAP, NetSuite, Zoho, ShipRocket, and FedEx APIs.', deliverable: 'Automated order fulfillment and tracking notification pipelines' },
      { icon: 'fa-robot', title: 'AI Recommendations & Search', desc: 'Personalized product carousels, instant search with typo-tolerance, and dynamic cross-sell bundles.', deliverable: 'Algolia/Elasticsearch product discovery engine' }
    ],
    techStack: [
      { cat: 'E-commerce Engines', items: ['Shopify / Shopify Plus', 'WooCommerce', 'Magento (Adobe Commerce)', 'MedusaJS', 'BigCommerce'] },
      { cat: 'Headless Frontend', items: ['Next.js Commerce', 'React.js', 'TailwindCSS', 'GraphQL'] },
      { cat: 'Payments & Shipping', items: ['Stripe', 'Razorpay', 'PayPal', 'ShipStation', 'ShipRocket', 'Twilio'] },
      { cat: 'Search & Personalization', items: ['Algolia', 'Elasticsearch', 'Klaviyo', 'Segment'] }
    ],
    methodology: [
      { step: '01', title: 'Product Catalog & Funnel Architecture', desc: 'Mapping product variants, categorization, tax rules, and user purchase pathways.' },
      { step: '02', title: 'Conversion-Centric UX Design', desc: 'Designing high-impact product pages, sticky cart drawers, and mobile-optimized checkout funnels.' },
      { step: '03', title: 'Storefront Engineering & Integrations', desc: 'Developing custom templates, payment gateways, and backend inventory automation hooks.' },
      { step: '04', title: 'Load Testing & Payment Verification', desc: 'Simulating peak traffic spikes and testing end-to-end sandbox payments across credit cards and wallets.' },
      { step: '05', title: 'Go-Live & Revenue Growth Monitoring', desc: 'Seamless DNS transition, conversion pixel tracking, and automated abandoned cart recovery setup.' }
    ],
    useCases: [
      { industry: 'Fashion & Apparel', title: 'Luxury Direct-to-Consumer (D2C) Store', desc: 'Launched a headless Shopify store with 3D model previews, achieving a 44% increase in average order value (AOV).' },
      { industry: 'Electronics & Gadgets', title: 'High-Volume Tech Retailer', desc: 'Migrated monolithic store to Next.js Commerce, supporting $1.2M in sales during a 3-hour flash sale with zero downtime.' },
      { industry: 'B2B Wholesale', title: 'Bulk Industrial Supply Marketplace', desc: 'Engineered a B2B ordering portal with tiered wholesale pricing, quote requests, and net-30 invoicing.' },
      { industry: 'Health & Supplements', title: 'Subscription-First Wellness Brand', desc: 'Integrated Recharge recurring billing with custom customer portal, reducing monthly subscriber churn by 22%.' }
    ],
    faqs: [
      { q: 'Which e-commerce platform is best for my business?', a: 'For fast-growing D2C brands, Shopify/Shopify Plus is the industry benchmark. For custom business logic or complex multi-vendor marketplaces, a Headless Commerce or WooCommerce setup offers maximum flexibility.' },
      { q: 'Can you migrate my existing store without losing SEO rankings or customer data?', a: 'Yes! We follow a strict zero-data-loss migration protocol, including 301 URL redirects, customer account migration, order history preservation, and SEO metadata transfer.' },
      { q: 'How do you handle security and payment compliance?', a: 'All our e-commerce platforms comply with PCI-DSS Level 1 security standards, tokenized payment handling, SSL encryption, and automated fraud detection systems.' },
      { q: 'Can you integrate shipping carriers and tax engines?', a: 'Yes, we integrate with global and local carriers (FedEx, DHL, ShipRocket) for automated label generation, live tracking, and automated GST/VAT tax calculation.' }
    ]
  },

  // 5. SaaS Product Development
  {
    slug: 'saas-product-development',
    title: 'SaaS Product Development',
    category: 'Cloud Software',
    categoryIcon: 'fa-cloud-arrow-up',
    accentColor: '#06d6a0',
    tagline: 'End-to-End Multi-Tenant SaaS Platforms Engineered For Scale & ARR Growth',
    metaDesc: 'Custom SaaS product development services by Techno Amaze. Multi-tenancy, subscription billing, RBAC security, API-first architecture, and rapid MVP engineering.',
    heroImg: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=85&auto=format&fit=crop',
    kpis: [
      { num: '8 Weeks', label: 'Average MVP Launch Timeline' },
      { num: '99.99%', label: 'SaaS Platform Uptime' },
      { num: '100k+', label: 'Concurrent Users Supported' },
      { num: '30+', label: 'Commercial SaaS Products Built' }
    ],
    overview: {
      headline: 'From Validated Concept to Scalable Subscription Platform',
      text: 'Building a successful software-as-a-service (SaaS) product requires more than clean code — it demands multi-tenant data isolation, automated billing, granular access controls, and self-serve onboarding. Techno Amaze is the technology partner behind top-tier SaaS platforms (including our flagship Seato Pro). We architect, engineer, and scale subscription software products designed to maximize Monthly Recurring Revenue (MRR).',
      challenges: [
        'High upfront infrastructure costs and complex multi-tenancy database partitioning',
        'Billing complexities including usage-based pricing, trials, upgrades, and churn mitigation',
        'Security compliance requirements (SOC2, GDPR, ISO 27001) demanded by enterprise buyers',
        'Slow feature release velocity hindering competitive market positioning'
      ],
      solutions: [
        'Elastic multi-tenant architectures with automated database schema separation and pooling',
        'Pre-built Stripe Billing and Paddle integration supporting tiered subscriptions and add-ons',
        'Enterprise-grade Role-Based Access Control (RBAC), SSO (SAML/OAuth), and audit logs',
        'CI/CD automated release pipelines ensuring daily, zero-downtime feature deployments'
      ]
    },
    capabilities: [
      { icon: 'fa-layer-group', title: 'Multi-Tenant Architecture', desc: 'Shared-application with isolated-database or pooled-schema multi-tenancy for bulletproof data segregation.', deliverable: 'Secure multi-tenant foundation with automated tenant provisioning' },
      { icon: 'fa-credit-card', title: 'Subscription & Metered Billing', desc: 'Integration with Stripe Billing, Paddle, or Chargebee for monthly/annual plans, proration, and dunning management.', deliverable: 'Automated invoice generation and payment failure recovery' },
      { icon: 'fa-user-lock', title: 'Enterprise SSO & RBAC', desc: 'Single Sign-On with Google, Microsoft, Okta, and SAML alongside granular role permissions.', deliverable: 'SOC2-ready authentication and access control suite' },
      { icon: 'fa-gauge-high', title: 'Interactive Analytics Dashboards', desc: 'Real-time telemetry, user activity feeds, custom data exports (CSV/PDF), and performance metrics.', deliverable: 'High-performance chart visualizers with sub-second queries' },
      { icon: 'fa-code-branch', title: 'Public REST & Webhook APIs', desc: 'Comprehensive API documentation (Swagger/Postman) enabling your SaaS customers to build custom integrations.', deliverable: 'Developer portal with API keys, rate limits, and webhook dispatchers' },
      { icon: 'fa-robot', title: 'AI Copilots & Automation Add-ons', desc: 'Integrating LLM workflows, automated report generators, and AI assistants to boost SaaS user retention.', deliverable: 'Embedded AI assistant tailored to your domain knowledge' }
    ],
    techStack: [
      { cat: 'Backend & APIs', items: ['Node.js / NestJS', 'Python / FastAPI', 'Golang', 'GraphQL', 'REST'] },
      { cat: 'Frontend & UI', items: ['React.js', 'Next.js', 'TypeScript', 'TailwindCSS', 'Shadcn UI'] },
      { cat: 'Databases & Cache', items: ['PostgreSQL (Multi-tenant)', 'Redis', 'TimescaleDB', 'ClickHouse'] },
      { cat: 'Cloud & Infrastructure', items: ['AWS (ECS / EKS)', 'Kubernetes', 'Docker', 'Stripe Billing', 'PostHog'] }
    ],
    methodology: [
      { step: '01', title: 'SaaS Product Blueprint & MVP Scope', desc: 'Refining your value proposition, customer personas, pricing matrix, and essential feature backlog.' },
      { step: '02', title: 'Frictionless UI/UX & Onboarding Flow', desc: 'Designing self-serve signup flows, interactive product tours, and modern workspace dashboards.' },
      { step: '03', title: 'Modular Multi-Tenant Engineering', desc: 'Developing the core business logic, tenant isolation layer, and billing webhooks in agile sprints.' },
      { step: '04', title: 'Security Auditing & Pen Testing', desc: 'Conducting tenant data leakage tests, privilege escalation checks, and vulnerability scans.' },
      { step: '05', title: 'Launch & Growth Analytics Setup', desc: 'Deploying to high-availability cloud infrastructure with product analytics (Mixpanel/PostHog) integrated.' }
    ],
    useCases: [
      { industry: 'Library & Facility Management', title: 'Seato Pro SaaS Ecosystem', desc: 'Engineered an end-to-end multi-tenant library seat management SaaS used by 500+ commercial facilities across 15+ cities.' },
      { industry: 'HR & Recruitment Tech', title: 'AI Talent Screening & ATS Platform', desc: 'Built a B2B subscription ATS platform automating candidate resume parsing and video interview scorecards.' },
      { industry: 'Supply Chain & Logistics', title: 'Fleet Tracking & Route Optimization SaaS', desc: 'Created an IoT-powered telemetry platform with automated fuel consumption reports and driver safety scoring.' },
      { industry: 'EdTech & Training', title: 'Interactive Corporate Training LMS', desc: 'Delivered an enterprise LMS with custom white-labeling, automated certificates, and SCORM course compliance.' }
    ],
    faqs: [
      { q: 'How long does it take to launch a SaaS MVP?', a: 'Our battle-tested SaaS starter boilerplate allows us to build and launch a fully functional, production-ready SaaS MVP in just 8 to 12 weeks.' },
      { q: 'How do you ensure data security between different tenants?', a: 'We employ strict tenant isolation mechanisms, including schema-based or row-level tenant key constraints (RLS) in PostgreSQL, along with encrypted JWT tokens and tenant-scoped database connections.' },
      { q: 'Can you handle enterprise features like SSO and custom domains?', a: 'Yes! We build enterprise-ready SaaS platforms with SAML/OAuth Single Sign-On (Okta, Azure AD), custom CNAME domain routing with automatic SSL provisioning, and audit logs.' },
      { q: 'Who owns the SaaS code and database?', a: 'You retain 100% full intellectual property and source code ownership. We hand over all repositories, deployment scripts, and credentials upon completion.' }
    ]
  },

  // 6. ERP & CRM Development
  {
    slug: 'erp-crm-development',
    title: 'ERP & CRM Development',
    category: 'Enterprise Solutions',
    categoryIcon: 'fa-sitemap',
    accentColor: '#1d3557',
    tagline: 'Custom Enterprise ERP & CRM Systems That Unify Operations & Drive Revenue',
    metaDesc: 'Custom ERP and CRM software development by Techno Amaze. Centralize sales, inventory, accounting, HR, and customer relationships in one secure platform.',
    heroImg: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1400&q=85&auto=format&fit=crop',
    kpis: [
      { num: '65%+', label: 'Operational Efficiency Gain' },
      { num: '100%', label: 'Data Centralization' },
      { num: '30%+', label: 'Sales Pipeline Velocity Increase' },
      { num: '80+', label: 'Enterprise Deployments' }
    ],
    overview: {
      headline: 'Unifying Fragmented Business Units Into a Single Source of Truth',
      text: 'Generic ERP and CRM systems often force your business to change its workflows to fit the software. Techno Amaze builds custom ERP and CRM solutions engineered around your exact operational processes. From multi-location inventory and automated financial reconciliation to lead scoring and customer support ticketing, we streamline cross-departmental operations.',
      challenges: [
        'Disconnected spreadsheets causing duplicate data entry and human reporting errors',
        'Exorbitant annual per-user licensing fees from traditional ERP vendors (SAP, Salesforce)',
        'Lack of real-time visibility into company-wide supply chain, sales pipelines, and cash flow',
        'Difficult user adoption caused by bloated, unintuitive legacy interfaces'
      ],
      solutions: [
        'Single unified platform connecting Sales, Inventory, Accounting, Manufacturing, and HR',
        'Zero per-seat licensing fees with unlimited users on a fully owned enterprise software asset',
        'Real-time executive dashboards with drill-down reporting and predictive analytics',
        'Modern, intuitive user interfaces designed for rapid team onboarding and high adoption'
      ]
    },
    capabilities: [
      { icon: 'fa-users-gear', title: 'Custom CRM & Sales Pipeline', desc: 'Lead tracking, deal stage visualization, automated follow-up sequences, and customer communication histories.', deliverable: 'Intuitive CRM dashboard with email & WhatsApp integrations' },
      { icon: 'fa-warehouse', title: 'Inventory & Supply Chain ERP', desc: 'Multi-warehouse stock tracking, automated reorder triggers, barcode scanning, and supplier purchase orders.', deliverable: 'Real-time stock ledger with FIFO/LIFO valuation models' },
      { icon: 'fa-file-invoice-dollar', title: 'Financial & Invoicing Automation', desc: 'Automated billing, GST/VAT tax calculation, accounts payable/receivable, and bank reconciliation.', deliverable: 'Complete accounting module with P&L and Balance Sheet reports' },
      { icon: 'fa-id-card-clip', title: 'Human Resources & Payroll (HRMS)', desc: 'Employee onboarding, attendance tracking with biometric integration, leave management, and automated payroll runs.', deliverable: 'Self-service employee portal and payroll processing engine' },
      { icon: 'fa-headset', title: 'Customer Support & Ticketing Suite', desc: 'Multi-channel support inbox, SLA tracking, automated ticket routing, and customer satisfaction surveys.', deliverable: 'Helpdesk portal with internal knowledge base' },
      { icon: 'fa-chart-pie', title: 'Executive BI & Reporting Dashboards', desc: 'Consolidated KPI dashboards, revenue forecasting, inventory turnover metrics, and automated PDF export.', deliverable: 'Interactive business intelligence suite with role-based visibility' }
    ],
    techStack: [
      { cat: 'Backend & Logic', items: ['Node.js', 'Python / Django', 'Java / Spring Boot', 'PostgreSQL', 'Redis'] },
      { cat: 'Frontend & Portals', items: ['React.js', 'Next.js', 'TypeScript', 'TailwindCSS'] },
      { cat: 'Integrations & Auth', items: ['OAuth2 / SAML', 'QuickBooks API', 'Tally API', 'Twilio', 'WhatsApp Business API'] },
      { cat: 'Infrastructure', items: ['AWS VPC', 'Docker', 'Kubernetes', 'Automated Daily Backups'] }
    ],
    methodology: [
      { step: '01', title: 'Business Process Mapping', desc: 'Shadowing departmental workflows to document exact business logic, approval hierarchies, and reporting needs.' },
      { step: '02', title: 'Database Schema & Architecture Design', desc: 'Structuring relational database models to ensure ACID transaction compliance and high data integrity.' },
      { step: '03', title: 'Modular Agile Development', desc: 'Building and rolling out ERP/CRM modules sequentially (CRM first, followed by Inventory, Invoicing, etc.).' },
      { step: '04', title: 'Legacy Data Migration & QA', desc: 'Sanitizing, mapping, and migrating legacy spreadsheet/Tally/SAP data into the new centralized database.' },
      { step: '05', title: 'Team Training & Phased Cutover', desc: 'Conducting comprehensive user training workshops, followed by parallel runs and seamless final switchover.' }
    ],
    useCases: [
      { industry: 'Manufacturing & Distribution', title: 'Multi-Plant Manufacturing ERP', desc: 'Centralized raw material procurement, bill of materials (BOM), and finished goods across 4 factories.' },
      { industry: 'Real Estate & Construction', title: 'PropTech CRM & Project Billing', desc: 'Delivered a custom CRM tracking 12,000+ property buyer leads with automated milestone-based payment schedules.' },
      { industry: 'Wholesale & Trading', title: 'Multi-Branch Inventory & POS System', desc: 'Unified 18 wholesale distribution hubs with barcode scanning and instant inter-branch stock transfers.' },
      { industry: 'Professional Consulting', title: 'Client Project Accounting & Timesheets', desc: 'Integrated project task tracking with automated client retainers and profitability reporting.' }
    ],
    faqs: [
      { q: 'Why should we build a custom ERP/CRM instead of buying Salesforce or SAP?', a: 'Custom systems are tailored 100% to your unique workflows, carry zero recurring per-user license fees, and eliminate feature bloat, saving hundreds of thousands of dollars as your team scales.' },
      { q: 'Can we migrate all our existing data from Excel / Tally / old software?', a: 'Yes. Our data engineering team extracts, cleanses, deduplicates, and migrates all historical records, customer files, and financial transaction histories with zero loss.' },
      { q: 'Can different departments have restricted access to sensitive data?', a: 'Yes, our systems include comprehensive Role-Based Access Control (RBAC). Sales representatives only see their assigned leads, while financials and payroll remain restricted to authorized executives.' },
      { q: 'How long does a custom ERP implementation take?', a: 'A modular ERP rollout typically delivers its first functional module (e.g. CRM or Inventory) in 8 to 10 weeks, with the complete enterprise suite deployed within 4 to 6 months.' }
    ]
  },

  // 7. API Development & Integration
  {
    slug: 'api-development-integration',
    title: 'API Development & Integration',
    category: 'Backend Engineering',
    categoryIcon: 'fa-plug',
    accentColor: '#4361ee',
    tagline: 'High-Throughput REST & GraphQL APIs That Power Connected Ecosystems',
    metaDesc: 'Custom API development and third-party software integration by Techno Amaze. RESTful, GraphQL, gRPC, microservices middleware, and secure API gateways.',
    heroImg: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1400&q=85&auto=format&fit=crop',
    kpis: [
      { num: '< 45ms', label: 'Average API Response Latency' },
      { num: '99.99%', label: 'Gateway Availability' },
      { num: '100M+', label: 'Daily API Calls Processed' },
      { num: '300+', label: 'Custom APIs Built & Connected' }
    ],
    overview: {
      headline: 'Connecting Applications, Data & Third-Party Platforms Seamlessly',
      text: 'Modern digital ecosystems rely on robust, well-documented, and secure Application Programming Interfaces (APIs). Techno Amaze designs and engineers high-concurrency RESTful, GraphQL, and gRPC APIs that allow your mobile apps, web portals, and enterprise software to communicate effortlessly. We also build custom connectors to integrate third-party SaaS services, payment rails, and legacy databases.',
      challenges: [
        'Slow, unoptimized API endpoints causing mobile app and web frontend latency',
        'Disparate software tools operating in silos with no automated data exchange',
        'Lack of standardized API documentation, versioning, and developer tooling',
        'Security vulnerabilities such as broken object-level authorization and DDoS exposure'
      ],
      solutions: [
        'High-performance asynchronous API architectures built with Golang, Node.js, and Redis caching',
        'Custom bidirectional middleware synchronizing data in real time between your tools',
        'Automated OpenAPI / Swagger interactive documentation and Postman collections',
        'Enterprise API gateways featuring rate limiting, JWT token validation, and OAuth2 security'
      ]
    },
    capabilities: [
      { icon: 'fa-code-branch', title: 'RESTful API Engineering', desc: 'Stateless, standards-compliant JSON APIs with semantic HTTP status codes, pagination, and filtering.', deliverable: 'Fully documented REST API with Swagger / Postman suites' },
      { icon: 'fa-cubes', title: 'GraphQL API Architectures', desc: 'Flexible schema definitions allowing client apps to query exact data fields in a single roundtrip request.', deliverable: 'Type-safe GraphQL server with automated schema caching' },
      { icon: 'fa-bolt', title: 'gRPC & Microservice Communication', desc: 'Ultra-fast binary protocol buffer communications engineered for internal microservices throughput.', deliverable: 'High-efficiency gRPC services with sub-10ms inter-service latency' },
      { icon: 'fa-shield-halved', title: 'API Gateways & Rate Limiting', desc: 'Centralized authentication, SSL termination, request throttling, and DDoS mitigation.', deliverable: 'Hardened Kong / AWS API Gateway deployment' },
      { icon: 'fa-plug-circle-check', title: 'Third-Party SaaS Integrations', desc: 'Seamless API connectors for Stripe, PayPal, Salesforce, HubSpot, Twilio, QuickBooks, and Shopify.', deliverable: 'Resilient webhook listener queues with automated retry logic' },
      { icon: 'fa-tower-broadcast', title: 'Real-Time WebSockets & Webhooks', desc: 'Bidirectional real-time communication for live chat, IoT telemetry, and instant order notifications.', deliverable: 'Socket.io / AWS API Gateway WebSocket cluster' }
    ],
    techStack: [
      { cat: 'API Frameworks', items: ['Node.js / Express / Fastify', 'Golang', 'Python / FastAPI', 'GraphQL / Apollo', 'gRPC'] },
      { cat: 'Gateway & Cache', items: ['Kong API Gateway', 'AWS API Gateway', 'Redis', 'Nginx', 'Cloudflare'] },
      { cat: 'Databases & Brokers', items: ['PostgreSQL', 'MongoDB', 'Apache Kafka', 'RabbitMQ'] },
      { cat: 'Docs & Testing', items: ['Swagger / OpenAPI', 'Postman', 'K6 Load Testing', 'JMeter'] }
    ],
    methodology: [
      { step: '01', title: 'API Design & Contract Specification', desc: 'Defining request/response schemas, authentication mechanisms, and data contracts using OpenAPI 3.0.' },
      { step: '02', title: 'Rapid Mocking & Client Alignment', desc: 'Deploying interactive mock servers so frontend and mobile teams can build in parallel.' },
      { step: '03', title: 'Core Implementation & Caching', desc: 'Writing performant backend business logic, SQL query optimization, and distributed Redis caching layers.' },
      { step: '04', title: 'Security & High-Concurrency Load Testing', desc: 'Simulating thousands of concurrent requests to identify and eliminate latency bottlenecks.' },
      { step: '05', title: 'Gateway Deployment & Live Telemetry', desc: 'Deploying to cloud infrastructure with real-time latency monitoring via Datadog/Prometheus.' }
    ],
    useCases: [
      { industry: 'FinTech & Banking', title: 'Open Banking & Credit Verification API', desc: 'Engineered secure REST APIs interfacing with credit bureaus and banking rails for instant loan approvals.' },
      { industry: 'E-Commerce & Logistics', title: 'Universal Multi-Carrier Shipping API', desc: 'Built a unified API aggregating rates and tracking numbers from FedEx, DHL, and Blue Dart.' },
      { industry: 'Healthcare & MedTech', title: 'HL7 / FHIR Interoperability Gateway', desc: 'Created a HIPAA-compliant API gateway translating legacy hospital records into modern JSON standards.' },
      { industry: 'Smart Cities & IoT', title: 'Real-Time Device Telemetry Ingestion', desc: 'Architected high-throughput ingestion API handling 5,000 requests/sec from smart energy meters.' }
    ],
    faqs: [
      { q: 'How do you secure custom APIs against unauthorized access and attacks?', a: 'We implement industry-standard OAuth2, JWT authentication, API key rotation, TLS 1.3 encryption, rate limiting, and input sanitization to protect against OWASP API Security Top 10 risks.' },
      { q: 'Can you build APIs that scale to millions of requests daily?', a: 'Yes. By utilizing asynchronous frameworks (Go / Node.js), Redis caching, database connection pooling, and autoscaling container clusters, our APIs handle tens of millions of daily calls effortlessly.' },
      { q: 'Do you provide documentation for third-party developers?', a: 'Every API comes with automated, interactive Swagger/OpenAPI documentation, Postman collections, and code examples in JavaScript, Python, and cURL.' },
      { q: 'How do you handle breaking changes in APIs?', a: 'We implement strict semantic versioning (e.g. `/v1/`, `/v2/`) and backward-compatible schema evolutions so existing client apps never break when new features are added.' }
    ]
  },

  // 8. Software Testing & QA
  {
    slug: 'software-testing-qa',
    title: 'Software Testing & QA',
    category: 'Quality Assurance',
    categoryIcon: 'fa-vial-circle-check',
    accentColor: '#2ec4b6',
    tagline: 'Comprehensive Manual & Automated QA That Guarantees Flawless Software',
    metaDesc: 'Independent software testing and QA services by Techno Amaze. Automated test suites, manual functional testing, performance load testing, and security vulnerability audits.',
    heroImg: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1400&q=85&auto=format&fit=crop',
    kpis: [
      { num: '99.8%', label: 'Defect-Free Release Rate' },
      { num: '85%+', label: 'Test Automation Coverage' },
      { num: '4x', label: 'Faster Regression Testing Cycles' },
      { num: '500+', label: 'Applications QA-Certified' }
    ],
    overview: {
      headline: 'Eliminating Bugs, Security Vulnerabilities & Performance Bottlenecks',
      text: 'Software glitches destroy user trust, harm brand credibility, and lead to costly downtime. Techno Amaze provides end-to-end quality assurance (QA) and software testing services to ensure your web, mobile, and enterprise applications perform reliably under all real-world conditions. We combine comprehensive manual testing with continuous test automation frameworks integrated directly into your CI/CD pipelines.',
      challenges: [
        'Undetected critical bugs reaching production and frustrating paying users',
        'Time-consuming manual regression testing slowing down weekly deployment cycles',
        'Applications crashing unexpectedly during sudden marketing traffic surges',
        'Cross-browser and cross-device rendering inconsistencies'
      ],
      solutions: [
        'Continuous automated regression test suites executing with every pull request',
        'End-to-end functional testing covering all edge cases, validations, and user journeys',
        'Stress and load testing simulating up to 100,000 concurrent users to verify breaking points',
        'Device-cloud validation across 50+ real iOS, Android, macOS, and Windows environments'
      ]
    },
    capabilities: [
      { icon: 'fa-robot', title: 'Automated Test Engineering', desc: 'End-to-end test automation using Cypress, Playwright, and Selenium for regression and smoke testing.', deliverable: 'Fully maintainable CI/CD automated test suite' },
      { icon: 'fa-list-check', title: 'Manual Functional & Exploratory QA', desc: 'Methodical verification of all business logic, user onboarding flows, edge cases, and UI validations.', deliverable: 'Detailed defect logs with video repro steps and Jira tickets' },
      { icon: 'fa-gauge-high', title: 'Performance & Load Stress Testing', desc: 'Benchmarking response times, memory leaks, and server throughput under simulated traffic surges with JMeter & K6.', deliverable: 'Comprehensive performance bottleneck analysis report' },
      { icon: 'fa-shield-halved', title: 'Security & Vulnerability Audits', desc: 'OWASP Top 10 security scanning, SQL injection checks, XSS testing, and authorization flaw detection.', deliverable: 'Vulnerability remediation guide and security compliance certificate' },
      { icon: 'fa-mobile-screen', title: 'Mobile App Testing (iOS & Android)', desc: 'Validating device permissions, offline sync, push notifications, and battery drainage on physical hardware.', deliverable: 'Cross-device compatibility matrix and crash logs' },
      { icon: 'fa-network-wired', title: 'API & Integration Testing', desc: 'Automated testing of REST and GraphQL endpoints verifying status codes, payloads, and schema contracts.', deliverable: 'Postman / Newman automated API test collection' }
    ],
    techStack: [
      { cat: 'Automation Frameworks', items: ['Playwright', 'Cypress', 'Selenium', 'Appium', 'Puppeteer'] },
      { cat: 'Performance Testing', items: ['Apache JMeter', 'K6', 'Gatling', 'Locust'] },
      { cat: 'API & Security', items: ['Postman / Newman', 'OWASP ZAP', 'Burp Suite', 'SonarQube'] },
      { cat: 'CI/CD & Management', items: ['GitHub Actions', 'Jenkins', 'Jira', 'TestRail', 'BrowserStack'] }
    ],
    methodology: [
      { step: '01', title: 'Test Strategy & Planning', desc: 'Analyzing requirements, identifying high-risk workflows, and authoring the master QA test plan.' },
      { step: '02', title: 'Test Case Authoring & Matrix Design', desc: 'Writing comprehensive positive, negative, and boundary-condition test cases across all modules.' },
      { step: '03', title: 'Automation Suite Development', desc: 'Scripting maintainable end-to-end automated tests with Page Object Models (POM) for regression testing.' },
      { step: '04', title: 'Execution & Defect Reporting', desc: 'Executing tests, logging prioritized bug reports in Jira with clear reproduction steps and network logs.' },
      { step: '05', title: 'Sign-Off & Continuous CI/CD Integration', desc: 'Conducting final verification passes, issuing QA Sign-Off certificates, and integrating tests into Git hooks.' }
    ],
    useCases: [
      { industry: 'FinTech & Banking', title: 'Core Banking Ledger Testing', desc: 'Automated 1,200+ financial transaction test scenarios, ensuring zero rounding errors and 100% audit compliance.' },
      { industry: 'Healthcare & Telemedicine', title: 'HIPAA Video Consultation Platform', desc: 'Conducted load and functional testing on WebRTC video streams under 10,000 concurrent patient sessions.' },
      { industry: 'E-Commerce & Retail', title: 'Black Friday Readiness Testing', desc: 'Simulated 50,000 concurrent checkout attempts to optimize database queries and prevent checkout crashes.' },
      { industry: 'SaaS Platforms', title: 'Continuous Regression Automation', desc: 'Reduced client deployment verification time from 3 days to 18 minutes by automating 450+ browser test cases.' }
    ],
    faqs: [
      { q: 'Can you test an existing software application built by another agency?', a: 'Yes! We frequently conduct independent third-party audits, code quality assessments, and comprehensive QA testing on applications developed by internal teams or external vendors.' },
      { q: 'What is the difference between manual and automated testing?', a: 'Manual testing is essential for exploratory testing, UX validation, and new features. Automated testing is ideal for repetitive regression testing, API checks, and performance load tests, running automatically in minutes.' },
      { q: 'How do you report bugs and defects to our developers?', a: 'We log issues directly into your preferred project management tool (Jira, GitHub, ClickUp, Trello) complete with screenshots, screen recordings, network logs, and step-by-step reproduction instructions.' },
      { q: 'Can you help set up automated testing inside our CI/CD pipeline?', a: 'Yes. We integrate automated test suites with GitHub Actions, GitLab CI, or Jenkins so tests run automatically on every pull request before code reaches staging or production.' }
    ]
  },

  // 9. Software Maintenance & Support
  {
    slug: 'software-maintenance-support',
    title: 'Software Maintenance & Support',
    category: 'Application Management',
    categoryIcon: 'fa-screwdriver-wrench',
    accentColor: '#9c0857',
    tagline: '24/7 SLA-Backed Maintenance, Security Hardening & Continuous Evolution',
    metaDesc: 'Reliable software maintenance and 24/7 support services by Techno Amaze. Bug fixes, server monitoring, security patching, cloud optimization, and continuous feature updates.',
    heroImg: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1400&q=85&auto=format&fit=crop',
    kpis: [
      { num: '< 15 Mins', label: 'Emergency Incident Response' },
      { num: '99.99%', label: 'Target Uptime SLA' },
      { num: '24/7/365', label: 'Continuous Monitoring' },
      { num: '200+', label: 'Live Systems Maintained' }
    ],
    overview: {
      headline: 'Keeping Your Critical Business Software Fast, Secure & Always-On',
      text: 'Deploying software is just the beginning. Without ongoing maintenance, applications suffer from security vulnerabilities, software rot, performance degradation, and library obsolescence. Techno Amaze provides dedicated, SLA-backed software maintenance and 24/7 technical support. We act as your extended engineering team, proactively monitoring servers, applying security patches, and rolling out continuous improvements.',
      challenges: [
        'Unexpected downtime and server outages causing revenue and reputational loss',
        'Outdated open-source dependencies exposing systems to critical zero-day vulnerabilities',
        'Database bloat leading to slow query speeds and sluggish user interfaces',
        'Lack of in-house technical resources to resolve urgent production emergencies'
      ],
      solutions: [
        '24/7 proactive cloud monitoring with automated alerts and 15-minute response times',
        'Regular security patching, dependency upgrades, and database indexing optimization',
        'Automated daily encrypted offsite backups with verified disaster recovery drills',
        'Dedicated monthly developer hours for ongoing feature enhancements and UI updates'
      ]
    },
    capabilities: [
      { icon: 'fa-shield-heart', title: '24/7 Proactive Server Monitoring', desc: 'Real-time monitoring of CPU, RAM, disk, and application errors with automated incident escalation.', deliverable: '24/7 uptime monitoring with instant on-call engineer dispatch' },
      { icon: 'fa-bug', title: 'Rapid Bug Fixing & Patching', desc: 'Triage, reproduction, and hotfixing of production bugs backed by strict SLA resolution windows.', deliverable: 'Dedicated ticketing system with guaranteed resolution SLAs' },
      { icon: 'fa-lock', title: 'Security Patches & Dependency Audits', desc: 'Scanning and upgrading third-party NPM, Python, and OS packages to prevent vulnerability exploits.', deliverable: 'Monthly security compliance and vulnerability audit reports' },
      { icon: 'fa-database', title: 'Database Optimization & Backups', desc: 'Query profiling, index tuning, vacuuming, and automated daily geo-redundant backups.', deliverable: 'Optimized database performance with 1-click restore capability' },
      { icon: 'fa-cloud-arrow-down', title: 'Cloud Infrastructure & Cost Tuning', desc: 'Right-sizing cloud resources on AWS/GCP to eliminate waste and reduce monthly cloud bills.', deliverable: 'Monthly cloud cost optimization and infrastructure reports' },
      { icon: 'fa-code', title: 'Continuous Feature Enhancements', desc: 'Implementing minor feature requests, layout tweaks, and API updates from your monthly hours.', deliverable: 'Monthly sprint delivery with transparent hours tracking' }
    ],
    techStack: [
      { cat: 'Monitoring & Alerting', items: ['Datadog', 'Prometheus & Grafana', 'Sentry', 'UptimeRobot', 'PagerDuty'] },
      { cat: 'Cloud Platforms', items: ['AWS', 'Google Cloud', 'Microsoft Azure', 'DigitalOcean', 'Cloudflare'] },
      { cat: 'Security Tools', items: ['Dependabot', 'Snyk', 'OWASP ZAP', 'AWS GuardDuty'] },
      { cat: 'Support Helpdesk', items: ['Jira Service Desk', 'Zendesk', 'Slack Connect', 'GitHub Issues'] }
    ],
    methodology: [
      { step: '01', title: 'System Onboarding & Health Audit', desc: 'Auditing existing codebase, server architecture, dependencies, and establishing baseline health metrics.' },
      { step: '02', title: 'Monitoring & Alert Instrumentation', desc: 'Deploying Sentry error trackers, Datadog metrics, and configuring 24/7 on-call alert channels.' },
      { step: '03', title: 'Automated Backup & Disaster Recovery', desc: 'Setting up automated daily snapshots and validating backup restoration procedures.' },
      { step: '04', title: 'Continuous Maintenance & Patching', desc: 'Executing scheduled monthly maintenance sprints for security updates and performance tuning.' },
      { step: '05', title: 'Monthly Reporting & Strategic Review', desc: 'Delivering comprehensive uptime, security, and developer hours utilization reports.' }
    ],
    useCases: [
      { industry: 'E-Commerce Retailers', title: 'High-Volume Store 24/7 Support', desc: 'Maintained 99.99% uptime during peak holiday sales while resolving unexpected third-party payment gateway outages within 8 minutes.' },
      { industry: 'Enterprise SaaS', title: 'Continuous Cloud Infrastructure Tuning', desc: 'Reduced client AWS monthly spend by 38% through container right-sizing and automated cold-storage archiving.' },
      { industry: 'Healthcare Systems', title: 'HIPAA Server Maintenance & Backups', desc: 'Maintained hospital patient record databases with automated 4-hour encrypted backups and zero data loss.' },
      { industry: 'Financial Services', title: 'Zero-Downtime Microservice Upgrades', desc: 'Performed 40+ production backend dependency upgrades without a single minute of service disruption.' }
    ],
    faqs: [
      { q: 'What response times do you guarantee under your support SLAs?', a: 'For critical P1 production outages, our on-call engineers respond within 15 minutes. High-priority issues are addressed within 2 hours, and standard requests within 24 hours.' },
      { q: 'Can you maintain an application built by another development agency?', a: 'Yes. We conduct a thorough initial technical audit and code review to familiarize ourselves with your codebase before taking over full maintenance responsibility.' },
      { q: 'Do unused monthly developer hours roll over?', a: 'Depending on your SLA plan tier, up to 50% of unused development hours can roll over into the following month for larger feature sprint rollouts.' },
      { q: 'How do we communicate with your support engineers?', a: 'You will have access to a dedicated Slack/Teams channel, our 24/7 Jira Service Desk ticketing portal, and emergency direct phone hotline numbers.' }
    ]
  },

  // 10. UI/UX Design
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    category: 'Product Design',
    categoryIcon: 'fa-pen-nib',
    accentColor: '#C8006E',
    tagline: 'Human-Centered UI/UX Design That Captivates Users & Multiplies Conversions',
    metaDesc: 'Professional UI/UX design services by Techno Amaze. User research, Figma wireframes, clickable prototypes, design systems, and conversion-optimized digital interfaces.',
    heroImg: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1400&q=85&auto=format&fit=crop',
    kpis: [
      { num: '3.2x', label: 'User Engagement Increase' },
      { num: '40%+', label: 'Reduction in User Drop-Off' },
      { num: '100%', label: 'Pixel-Perfect Figma Files' },
      { num: '180+', label: 'Product Interfaces Designed' }
    ],
    overview: {
      headline: 'Merging Aesthetic Beauty with Frictionless User Psychology',
      text: 'Great software starts with exceptional user experience design. Techno Amaze crafts intuitive, elegant, and conversion-driven digital interfaces that delight users and drive business growth. Our design team combines deep user research, information architecture, and interactive prototyping in Figma to turn complex workflows into clear, effortless experiences.',
      challenges: [
        'Confusing user onboarding flows leading to high day-1 user churn',
        'Inconsistent design patterns across web and mobile platforms',
        'Complex dashboards that overwhelm users with visual clutter',
        'Disconnection between designers and developers leading to compromised end products'
      ],
      solutions: [
        'Data-backed user journey mapping and simplified onboarding funnels',
        'Comprehensive atomic design systems and reusable Figma component libraries',
        'Clean, hierarchy-driven dashboard designs with intuitive data visualization',
        'Developer-ready Figma handoffs with detailed design tokens, auto-layout, and assets'
      ]
    },
    capabilities: [
      { icon: 'fa-magnifying-glass-chart', title: 'User Research & Personas', desc: 'User interviews, competitive UX benchmarking, empathy mapping, and user journey flows.', deliverable: 'Comprehensive UX research report and persona profiles' },
      { icon: 'fa-sitemap', title: 'Information Architecture & Wireframing', desc: 'Structuring navigation hierarchies and low-fidelity wireframes to validate usability before styling.', deliverable: 'Interactive wireframes covering all screen states' },
      { icon: 'fa-palette', title: 'High-Fidelity UI Design', desc: 'Modern visual design with curated color palettes, typography systems, and micro-interactions.', deliverable: 'Pixel-perfect Figma designs for mobile, tablet, and desktop' },
      { icon: 'fa-mobile', title: 'Interactive Clickable Prototyping', desc: 'Realistic clickable Figma prototypes demonstrating animations, transitions, and user flows.', deliverable: 'Shareable prototype for stakeholder testing and user validation' },
      { icon: 'fa-cubes', title: 'Atomic Design Systems', desc: 'Comprehensive component libraries with variants, typography scales, auto-layout, and tokens.', deliverable: 'Scalable design system in Figma with documentation' },
      { icon: 'fa-arrow-right-arrow-left', title: 'Usability Testing & CRO Audits', desc: 'Heuristic evaluation, heatmapping analysis, and A/B test layout optimizations.', deliverable: 'Usability audit report with actionable redesign recommendations' }
    ],
    techStack: [
      { cat: 'Design & Prototyping', items: ['Figma', 'FigJam', 'Adobe XD', 'Sketch', 'Framer'] },
      { cat: 'UX Research & Testing', items: ['Hotjar', 'Maze', 'UserTesting', 'Google Analytics'] },
      { cat: 'Handoff & Collaboration', items: ['Zeplin', 'Lottie / JSON Animations', 'Storybook', 'Miro'] }
    ],
    methodology: [
      { step: '01', title: 'Discovery & Empathy Mapping', desc: 'Understanding business goals, target audience demographics, pain points, and product vision.' },
      { step: '02', title: 'Wireframing & User Flows', desc: 'Mapping user journeys and creating low-fidelity wireframes to finalize core layout structure.' },
      { step: '03', title: 'Visual Design & UI Exploration', desc: 'Exploring mood boards, color palettes, and typography to establish the design language.' },
      { step: '04', title: 'Interactive Prototyping & Testing', desc: 'Linking screens into clickable Figma prototypes and testing with real users for feedback.' },
      { step: '05', title: 'Design System & Developer Handoff', desc: 'Packaging all assets, components, design tokens, and documentation for seamless engineering.' }
    ],
    useCases: [
      { industry: 'EdTech & Learning', title: 'Techno Amaze Academy App UI/UX', desc: 'Designed modern student learning interface with gamified progress bars and clean lecture player.' },
      { industry: 'B2B SaaS Platforms', title: 'Seato Pro Library Management Dashboard', desc: 'Designed interactive library seat allocation map with real-time visual occupancy and analytics.' },
      { industry: 'FinTech & Banking', title: 'Crypto & Stock Trading Mobile App', desc: 'Engineered dark-mode-first trading interface with interactive candlestick charts and 1-tap buy orders.' },
      { industry: 'Healthcare & MedTech', title: 'Doctor Telemedicine Consultation Portal', desc: 'Streamlined patient medical history review and e-prescription generation into a single-screen layout.' }
    ],
    faqs: [
      { q: 'What deliverables will we receive at the end of the UI/UX design project?', a: 'You will receive full access to clean, organized Figma files containing high-fidelity screens, interactive prototypes, an atomic design system, exported SVG/PNG assets, and design token specifications.' },
      { q: 'How do you ensure the design can be realistically built by developers?', a: 'Our designers collaborate closely with our engineering team, using Figma Auto-Layout, standardized 8pt grid systems, and realistic CSS properties so designs translate directly into clean code.' },
      { q: 'Do you provide user testing before finalizing designs?', a: 'Yes! We conduct usability testing sessions using clickable Figma prototypes to observe real users navigating key flows and refine friction points before writing code.' },
      { q: 'How many design revision rounds are included?', a: 'Our agile design process includes structured feedback cycles at each stage (Wireframes, Style Concepts, and Final UI) ensuring full alignment before final sign-off.' }
    ]
  },

  // 11. Graphic Design & Branding
  {
    slug: 'graphic-design-branding',
    title: 'Graphic Design & Branding',
    category: 'Brand Strategy',
    categoryIcon: 'fa-palette',
    accentColor: '#e01e5a',
    tagline: 'Distinctive Visual Identity Systems That Command Authority & Recognition',
    metaDesc: 'Creative graphic design and corporate branding services by Techno Amaze. Logo design, brand guidelines, marketing collateral, social kits, and visual assets.',
    heroImg: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1400&q=85&auto=format&fit=crop',
    kpis: [
      { num: '100%', label: 'Vector Originality' },
      { num: '50+ Page', label: 'Brand Guidelines Manual' },
      { num: '300+', label: 'Brand Identities Created' },
      { num: '4.9 ★', label: 'Creative Satisfaction Rating' }
    ],
    overview: {
      headline: 'Crafting Memorable Brand Identities That Stand Out In Saturated Markets',
      text: 'A great brand is more than just a logo — it is the emotional and visual foundation of your entire company. Techno Amaze creates cohesive, modern, and memorable visual identity systems that communicate your values, build instant trust, and set you apart from competitors. From logo design and typography systems to pitch decks and marketing collateral, we bring your brand vision to life.',
      challenges: [
        'Outdated or generic logos that fail to communicate premium service quality',
        'Inconsistent visual presentation across digital websites, social media, and print collateral',
        'Lack of clear brand guideline documentation leading to off-brand marketing materials',
        'Low-resolution vector files and missing font licenses causing production delays'
      ],
      solutions: [
        'Strategic brand positioning and iconic vector logo marks crafted for digital-first use',
        'Comprehensive brand guideline books specifying typography, color systems, and iconography',
        'Complete suite of marketing assets, social media kits, and corporate stationery templates',
        'Full vector asset packages in SVG, AI, EPS, PDF, and WebP formats ready for any scale'
      ]
    },
    capabilities: [
      { icon: 'fa-shapes', title: 'Logo Design & Visual Identity', desc: 'Primary logos, secondary marks, favicons, and monochrome variants built with mathematical harmony.', deliverable: 'Complete vector logo suite in all industry-standard formats' },
      { icon: 'fa-book-open', title: 'Brand Guidelines & Design Systems', desc: 'Comprehensive brand manuals covering color palettes (HEX/RGB/CMYK), typography pairings, and usage rules.', deliverable: '50+ page corporate brand identity manual (PDF)' },
      { icon: 'fa-share-nodes', title: 'Social Media Branding Kits', desc: 'Custom templates for LinkedIn, Twitter, Instagram, and Facebook to maintain visual consistency.', deliverable: 'Editable Canva and Figma social media post/story templates' },
      { icon: 'fa-file-powerpoint', title: 'Investor Pitch Decks & Presentations', desc: 'High-impact PowerPoint and Keynote slide decks designed to impress venture capitalists and enterprise clients.', deliverable: 'Custom master slide decks with infographic assets' },
      { icon: 'fa-print', title: 'Print & Corporate Stationery', desc: 'Business cards, letterheads, email signatures, company brochures, and exhibition trade show banners.', deliverable: 'Print-ready CMYK PDFs with bleed marks and font embeds' },
      { icon: 'fa-wand-magic-sparkles', title: 'Custom 2D/3D Illustrations & Icons', desc: 'Bespoke icon sets and custom vector illustrations tailored to your technology and product narratives.', deliverable: 'Custom vector illustration and icon packs (SVG/PNG)' }
    ],
    techStack: [
      { cat: 'Design Suite', items: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma', 'Adobe InDesign', 'After Effects'] },
      { cat: '3D & Motion', items: ['Blender', 'Spline 3D', 'LottieFiles'] },
      { cat: 'Collaboration', items: ['Canva Pro (Team Templates)', 'Google Slides', 'Keynote'] }
    ],
    methodology: [
      { step: '01', title: 'Brand Discovery & Positioning', desc: 'Uncovering brand values, target audience psychology, competitive whitespace, and tone of voice.' },
      { step: '02', title: 'Concept Moodboards & Sketching', desc: 'Exploring 3 distinct visual directions, typography combinations, and geometric logo marks.' },
      { step: '03', title: 'Vector Refinement & Palette System', desc: 'Digitizing selected logo direction, establishing contrast ratios, and testing across dark/light backgrounds.' },
      { step: '04', title: 'Collateral & Template Design', desc: 'Creating business cards, social media kits, slide decks, and promotional marketing assets.' },
      { step: '05', title: 'Final Asset Export & Brand Book', desc: 'Exporting complete asset kits and publishing the master Brand Guideline Manual.' }
    ],
    useCases: [
      { industry: 'Tech & B2B SaaS', title: 'Enterprise Cloud Startup Rebrand', desc: 'Complete brand transformation resulting in a 52% increase in inbound enterprise demo requests.' },
      { industry: 'EdTech & Online Learning', title: 'Techno Amaze Academy Brand Suite', desc: 'Designed modern, energetic educational brand identity featuring custom mascot and course thumbnail systems.' },
      { industry: 'FinTech & WealthTech', title: 'Institutional Asset Management Branding', desc: 'Crafted sophisticated navy & gold visual identity for global investment firm managing $400M in AUM.' },
      { industry: 'Healthcare & BioTech', title: 'Digital Health Platform Identity', desc: 'Designed clean, trustworthy healthcare branding and clinical guideline collateral for telemedicine provider.' }
    ],
    faqs: [
      { q: 'How many logo design concepts do you provide?', a: 'We provide 3 to 4 distinctly unique design directions during the initial concept phase, followed by unlimited refinement rounds on your chosen direction.' },
      { q: 'What file formats will I receive for my logo and brand assets?', a: 'You will receive vector formats (AI, EPS, SVG, PDF) which can scale infinitely without pixelation, as well as high-resolution raster files (PNG with transparent backgrounds, JPEG, WebP) in RGB and CMYK.' },
      { q: 'Will I own the complete legal copyright to the designs?', a: 'Yes! Upon final project completion, full intellectual property and commercial copyright transfer to your business.' },
      { q: 'Can you provide editable templates for our internal marketing team?', a: 'Yes! We supply editable Canva and Figma templates for social media posts, pitch decks, and email newsletters so your team can create on-brand assets effortlessly.' }
    ]
  },

  // 12. Cloud Services
  {
    slug: 'cloud-services',
    title: 'Cloud Services',
    category: 'Cloud Engineering',
    categoryIcon: 'fa-cloud',
    accentColor: '#0077b6',
    tagline: 'Secure, Elastic Cloud Infrastructure Engineered On AWS, Azure & Google Cloud',
    metaDesc: 'Cloud consulting, migration, and management services by Techno Amaze. AWS, Microsoft Azure, Google Cloud, serverless architectures, and cost optimization.',
    heroImg: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1400&q=85&auto=format&fit=crop',
    kpis: [
      { num: '40%+', label: 'Average Cloud Cost Reduction' },
      { num: '99.999%', label: 'Target High-Availability Uptime' },
      { num: 'Zero', label: 'Data Loss Migration Track Record' },
      { num: '150+', label: 'Cloud Infrastructures Architected' }
    ],
    overview: {
      headline: 'Empowering Businesses with Scalable, Resilient & Cost-Optimized Cloud Platforms',
      text: 'Moving to the cloud is not just about hosting servers — it is about achieving elastic scalability, multi-region redundancy, and maximum cost efficiency. Techno Amaze is a trusted cloud engineering partner specializing in AWS, Microsoft Azure, and Google Cloud Platform (GCP). Whether migrating legacy workloads or architecting cloud-native serverless systems, we ensure your infrastructure is secure, performant, and cost-effective.',
      challenges: [
        'Skyrocketing monthly cloud bills caused by unoptimized compute instances and idle resources',
        'Complex, risky legacy server migrations with fear of data loss and extended downtime',
        'Single points of failure and lack of automated multi-region disaster recovery',
        'Security misconfigurations exposing cloud databases and S3 buckets to the public internet'
      ],
      solutions: [
        'FinOps cloud cost audits and automated auto-scaling reducing infrastructure expenses by 30-50%',
        'Proven zero-downtime database and workload migration methodologies',
        'Multi-Availability Zone (AZ) and multi-region failover architectures with automated backups',
        'Zero-trust cloud security hardening with IAM least-privilege policies and VPC isolation'
      ]
    },
    capabilities: [
      { icon: 'fa-cloud-arrow-up', title: 'Cloud Migration & Modernization', desc: 'Seamless lift-and-shift or refactored migration of databases, applications, and VMs to AWS, Azure, or GCP.', deliverable: 'Zero-downtime migration with verified data integrity audits' },
      { icon: 'fa-network-wired', title: 'Cloud-Native Architecture Design', desc: 'Microservices, serverless Lambdas, containerized ECS/EKS clusters, and event-driven backends.', deliverable: 'High-availability infrastructure blueprint with Terraform IaC' },
      { icon: 'fa-hand-holding-dollar', title: 'FinOps & Cloud Cost Optimization', desc: 'Deep infrastructure auditing, Reserved Instance planning, spot instances, and auto-scaling rules.', deliverable: 'Immediate 30%+ reduction in monthly AWS/Azure cloud spend' },
      { icon: 'fa-shield-halved', title: 'Cloud Security & Compliance Hardening', desc: 'VPC private subnets, WAF rules, IAM policy auditing, and SOC2 / HIPAA / ISO27001 cloud compliance.', deliverable: 'Hardened cloud environment with automated vulnerability alerting' },
      { icon: 'fa-database', title: 'Managed Cloud Databases', desc: 'Configuration and optimization of Amazon RDS, Aurora, DynamoDB, Cloud SQL, and MongoDB Atlas.', deliverable: 'Multi-AZ database clusters with automated replication & failover' },
      { icon: 'fa-life-ring', title: '24/7 Managed Cloud Operations', desc: 'Continuous infrastructure monitoring, OS patching, log aggregation, and on-call emergency response.', deliverable: 'SLA-backed 24/7 managed infrastructure support' }
    ],
    techStack: [
      { cat: 'Cloud Providers', items: ['Amazon Web Services (AWS)', 'Microsoft Azure', 'Google Cloud Platform (GCP)', 'DigitalOcean'] },
      { cat: 'Compute & Containers', items: ['AWS Lambda', 'Amazon ECS / EKS', 'Azure App Services', 'Google Cloud Run', 'Docker', 'Kubernetes'] },
      { cat: 'Infrastructure as Code', items: ['Terraform', 'AWS CloudFormation', 'Ansible', 'Pulumi'] },
      { cat: 'Databases & Storage', items: ['Amazon Aurora / RDS', 'Amazon S3', 'DynamoDB', 'Redis Elasticache', 'Cloud SQL'] }
    ],
    methodology: [
      { step: '01', title: 'Cloud Readiness Assessment', desc: 'Auditing existing on-premise or cloud workloads, dependencies, compliance needs, and bandwidth requirements.' },
      { step: '02', title: 'Target Architecture Blueprint', desc: 'Designing secure VPC networks, multi-AZ compute clusters, database replication, and Terraform IaC scripts.' },
      { step: '03', title: 'Pilot Migration & Proof of Concept', desc: 'Migrating staging workloads and conducting thorough performance, latency, and failover validation.' },
      { step: '04', title: 'Cutover & Production Synchronization', desc: 'Executing final database data sync and DNS cutover during scheduled maintenance windows with zero data loss.' },
      { step: '05', title: 'Post-Migration Optimization & Monitoring', desc: 'Instrumenting Datadog monitoring, configuring autoscaling triggers, and fine-tuning FinOps cost policies.' }
    ],
    useCases: [
      { industry: 'FinTech & Payments', title: 'PCI-DSS Compliant AWS Architecture', desc: 'Architected multi-region AWS environment with dedicated hardware security modules (HSM) for banking transactions.' },
      { industry: 'Healthcare & MedTech', title: 'HIPAA-Vaulted Cloud Migration', desc: 'Migrated 40TB of patient medical records from on-premise physical servers to encrypted AWS S3 & Aurora with zero downtime.' },
      { industry: 'E-Commerce & Retail', title: 'Autoscaling Cloud Infrastructure', desc: 'Engineered auto-scaling Kubernetes cluster on GCP handling 10x traffic surges during holiday flash sales.' },
      { industry: 'Enterprise SaaS', title: 'Cloud Cost Optimization Initiative', desc: 'Restructured legacy EC2 servers into AWS Fargate and Graviton instances, slashing monthly cloud bill by $14,000.' }
    ],
    faqs: [
      { q: 'Which cloud provider (AWS, Azure, GCP) is right for my company?', a: 'AWS offers the broadest ecosystem of tools and mature enterprise services. Azure is ideal for businesses deeply integrated with Microsoft 365 and Active Directory. GCP excels in AI/ML, data analytics, and Kubernetes. We help you choose the best fit.' },
      { q: 'How do you prevent downtime during cloud migrations?', a: 'We utilize database change data capture (CDC) and live continuous replication to keep the target cloud database in sync with your live system, allowing a near-instant DNS switchover with zero data loss.' },
      { q: 'Can you help us reduce our high monthly AWS or Azure bill?', a: 'Yes! Our FinOps audits typically identify 30% to 50% in immediate monthly savings through right-sizing compute instances, deleting unattached EBS volumes, implementing Savings Plans, and configuring auto-scaling.' },
      { q: 'Do you manage our cloud infrastructure after migration?', a: 'Yes, we offer comprehensive 24/7 Managed Cloud Services, handling uptime monitoring, security patching, backup verification, and incident response.' }
    ]
  },

  // 13. DevOps Services
  {
    slug: 'devops-services',
    title: 'DevOps Services',
    category: 'Cloud Engineering',
    categoryIcon: 'fa-gears',
    accentColor: '#f72585',
    tagline: 'Automated CI/CD Pipelines, Kubernetes & Infrastructure as Code (IaC)',
    metaDesc: 'DevOps consulting and engineering services by Techno Amaze. Automated CI/CD pipelines, Docker containerization, Kubernetes orchestration, and Infrastructure as Code with Terraform.',
    heroImg: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1400&q=85&auto=format&fit=crop',
    kpis: [
      { num: '10x', label: 'Faster Deployment Frequency' },
      { num: '< 5 Mins', label: 'Automated Build & Deploy Time' },
      { num: '99.9%', label: 'Deployment Success Rate' },
      { num: '120+', label: 'CI/CD Pipelines Configured' }
    ],
    overview: {
      headline: 'Accelerating Software Delivery with Automated, Reliable & Repeatable Pipelines',
      text: 'Slow manual deployments, broken releases, and environmental drift between staging and production hinder business agility. Techno Amaze provides end-to-end DevOps and Site Reliability Engineering (SRE) services. We implement automated CI/CD pipelines, container orchestration with Kubernetes, and Infrastructure as Code (IaC) with Terraform, empowering your developers to release code with confidence multiple times per day.',
      challenges: [
        'Manual deployment steps resulting in frequent production bugs and downtime',
        '"It works on my machine" inconsistencies between developer laptops and cloud servers',
        'Slow release cycles taking days or weeks to get new features into users hands',
        'Lack of automated rollback mechanisms when a bad build is deployed'
      ],
      solutions: [
        'Automated CI/CD pipelines that build, test, and deploy code within minutes',
        'Docker containerization ensuring 100% environment parity across dev, staging, and prod',
        'Blue-Green and Canary zero-downtime deployment strategies with instant automated rollbacks',
        'Version-controlled Infrastructure as Code (IaC) making server environments reproducible instantly'
      ]
    },
    capabilities: [
      { icon: 'fa-code-compare', title: 'Automated CI/CD Pipelines', desc: 'Building robust continuous integration and deployment workflows with GitHub Actions, GitLab CI, and Jenkins.', deliverable: 'Fully automated push-to-deploy pipeline with automated testing' },
      { icon: 'fa-cubes', title: 'Docker & Kubernetes Orchestration', desc: 'Containerizing applications and orchestrating elastic multi-node clusters with auto-healing and scaling.', deliverable: 'Production-ready Kubernetes (EKS / GKE) cluster setup' },
      { icon: 'fa-file-code', title: 'Infrastructure as Code (Terraform / Pulumi)', desc: 'Managing all cloud infrastructure (VPCs, clusters, databases, DNS) declaratively in version control.', deliverable: 'Modular, reusable Terraform repositories' },
      { icon: 'fa-shield-halved', title: 'DevSecOps & Automated Security', desc: 'Integrating static code analysis (SAST), container image vulnerability scanning, and secret management.', deliverable: 'Automated security gates embedded in CI/CD pipeline' },
      { icon: 'fa-rotate-left', title: 'Zero-Downtime Deployments', desc: 'Implementing Blue/Green, Canary, and Rolling deployment strategies with automated health checks.', deliverable: 'Zero-downtime release workflows with instant rollback hooks' },
      { icon: 'fa-chart-line', title: 'Observability & SRE (Prometheus/Grafana)', desc: 'Centralized log aggregation, distributed request tracing, and real-time performance dashboards.', deliverable: 'Prometheus, Grafana, and ELK stack observability suite' }
    ],
    techStack: [
      { cat: 'CI/CD Engines', items: ['GitHub Actions', 'GitLab CI', 'Jenkins', 'ArgoCD', 'CircleCI'] },
      { cat: 'Containers & Orchestration', items: ['Docker', 'Kubernetes', 'Helm', 'Amazon EKS', 'Google GKE'] },
      { cat: 'IaC & Configuration', items: ['Terraform', 'Ansible', 'Pulumi', 'AWS CloudFormation'] },
      { cat: 'Monitoring & Logs', items: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog', 'Jaeger'] }
    ],
    methodology: [
      { step: '01', title: 'DevOps Maturity Assessment', desc: 'Evaluating existing release workflows, deployment bottlenecks, pain points, and tooling architecture.' },
      { step: '02', title: 'Pipeline Architecture & Dockerization', desc: 'Containerizing applications and designing multi-stage build workflows with automated test execution.' },
      { step: '03', title: 'Infrastructure as Code (IaC) Provisioning', desc: 'Writing Terraform scripts to provision VPCs, Kubernetes clusters, and load balancers declaratively.' },
      { step: '04', title: 'GitOps & Zero-Downtime Deployment', desc: 'Implementing ArgoCD or GitHub Actions for automated, declarative GitOps deployments.' },
      { step: '05', title: 'Observability Instrumentation & Training', desc: 'Setting up Grafana dashboards, alerting channels, and training internal engineering teams.' }
    ],
    useCases: [
      { industry: 'B2B SaaS Platform', title: 'GitOps & Kubernetes Scaling', desc: 'Implemented ArgoCD and Amazon EKS, enabling engineering team to ship 15+ production deployments daily with zero outages.' },
      { industry: 'FinTech Banking App', title: 'DevSecOps & Compliance Automation', desc: 'Automated static security scanning and container audits in GitHub Actions, achieving SOC2 certification in record time.' },
      { industry: 'E-Commerce Storefront', title: 'Canary Deployments & Auto-Scaling', desc: 'Implemented Canary release routing, eliminating checkout downtime and automatically scaling server nodes during traffic surges.' },
      { industry: 'Healthcare Systems', title: 'Terraform Multi-Region IaC', desc: 'Replaced manual server setups with Terraform scripts, allowing complete disaster recovery site spinning in under 12 minutes.' }
    ],
    faqs: [
      { q: 'How does DevOps benefit our business beyond the development team?', a: 'DevOps shortens your time-to-market, reduces software bugs in production, ensures 99.99% system uptime, lowers operational costs, and allows you to respond rapidly to customer feedback.' },
      { q: 'What is Infrastructure as Code (IaC) and why do we need it?', a: 'IaC allows us to define your entire server infrastructure in code files (Terraform). This eliminates human configuration errors, tracks all changes in Git, and lets you recreate identical environments in minutes.' },
      { q: 'Can you work with our existing cloud setup without starting from scratch?', a: 'Yes! We audit your existing AWS, Azure, or GCP infrastructure and incrementally introduce Docker containerization, CI/CD automation, and monitoring without disrupting daily business.' },
      { q: 'What is a zero-downtime deployment?', a: 'Zero-downtime deployment (such as Blue-Green or Rolling updates) provisions the new version of your app alongside the old one, tests it, and switches traffic seamlessly so users never experience an outage.' }
    ]
  },

  // 14. Cybersecurity Services
  {
    slug: 'cybersecurity-services',
    title: 'Cybersecurity Services',
    category: 'Security & Compliance',
    categoryIcon: 'fa-shield-halved',
    accentColor: '#e63946',
    tagline: 'Enterprise-Grade Threat Defense, Penetration Testing & Compliance Hardening',
    metaDesc: 'Comprehensive cybersecurity and penetration testing services by Techno Amaze. VAPT, zero-trust network security, SOC2/HIPAA compliance, and 24/7 threat monitoring.',
    heroImg: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1400&q=85&auto=format&fit=crop',
    kpis: [
      { num: 'Zero', label: 'Security Breaches on Managed Systems' },
      { num: '100%', label: 'OWASP Top 10 Vulnerability Remediation' },
      { num: 'SOC2 & HIPAA', label: 'Compliance Audit Support' },
      { num: '100+', label: 'Security Audits & Pen Tests' }
    ],
    overview: {
      headline: 'Safeguarding Your Digital Assets, Customer Data & Brand Reputation',
      text: 'In an era of relentless cyber threats, ransomware, and strict data privacy regulations, reactive security is no longer enough. Techno Amaze provides end-to-end cybersecurity consulting, vulnerability assessments, penetration testing (VAPT), and zero-trust security architectures. We identify hidden security vulnerabilities before hackers can exploit them, ensuring your applications and customer data remain impenetrable.',
      challenges: [
        'Increasing frequency of sophisticated ransomware, phishing, and DDoS attacks',
        'Hidden code-level vulnerabilities (SQL injection, broken access controls, XSS)',
        'Complex regulatory compliance mandates (SOC2, HIPAA, GDPR, ISO 27001) required for enterprise deals',
        'Lack of 24/7 security visibility and automated threat incident response'
      ],
      solutions: [
        'Comprehensive Vulnerability Assessment & Penetration Testing (VAPT) across web, mobile, and cloud',
        'Zero-trust security architectures with multi-factor authentication (MFA) and least-privilege access',
        'End-to-end data encryption at rest and in transit using military-grade AES-256 and TLS 1.3',
        '24/7 security monitoring with automated Web Application Firewall (WAF) threat mitigation'
      ]
    },
    capabilities: [
      { icon: 'fa-user-secret', title: 'Web & Mobile Penetration Testing (VAPT)', desc: 'Simulated ethical hacker attacks identifying OWASP Top 10 vulnerabilities, API flaws, and business logic bugs.', deliverable: 'Executive VAPT report with CVSS severity scores and remediation code' },
      { icon: 'fa-cloud-shield', title: 'Cloud Security Posture Management', desc: 'Auditing AWS, Azure, and GCP configurations for exposed storage buckets, permissive IAM roles, and open ports.', deliverable: 'Hardened cloud configuration and CIS benchmark compliance' },
      { icon: 'fa-certificate', title: 'Compliance Advisory (SOC2, HIPAA, GDPR)', desc: 'Guiding your software architecture, policies, and evidence collection to achieve enterprise compliance audits.', deliverable: 'Audit-ready security policies, architecture reviews, and certification support' },
      { icon: 'fa-shield-virus', title: 'Web Application Firewall (WAF) & DDoS', desc: 'Deploying intelligent Cloudflare and AWS WAF rule sets to block malicious bot traffic, scrapers, and DDoS floods.', deliverable: 'Enterprise WAF implementation with rate limiting and geo-blocking' },
      { icon: 'fa-key', title: 'Identity & Access Management (IAM / MFA)', desc: 'Implementing Single Sign-On (SSO), biometric MFA, role-based access, and automated secret rotation.', deliverable: 'Zero-trust authentication infrastructure integrated with Okta / Azure AD' },
      { icon: 'fa-bell', title: '24/7 Threat Monitoring & Incident Response', desc: 'Real-time SIEM log analysis, intrusion detection alerts, and structured incident containment protocols.', deliverable: '24/7 security monitoring with rapid incident containment SLAs' }
    ],
    techStack: [
      { cat: 'Penetration Testing', items: ['Burp Suite Professional', 'OWASP ZAP', 'Metasploit', 'Nmap', 'Kali Linux'] },
      { cat: 'Cloud Security & WAF', items: ['Cloudflare Enterprise WAF', 'AWS WAF & Shield', 'AWS GuardDuty', 'Azure Defender'] },
      { cat: 'Code Analysis (SAST/DAST)', items: ['SonarQube', 'Snyk', 'Checkmarx', 'GitGuardian'] },
      { cat: 'Identity & SIEM', items: ['Okta', 'Auth0', 'Wazuh SIEM', 'Datadog Security'] }
    ],
    methodology: [
      { step: '01', title: 'Reconnaissance & Threat Modeling', desc: 'Mapping digital attack surfaces, identifying exposed assets, and defining high-risk threat vectors.' },
      { step: '02', title: 'Automated & Manual Penetration Testing', desc: 'Executing deep manual exploits and automated vulnerability scanners against web, API, and cloud assets.' },
      { step: '03', title: 'Vulnerability Analysis & Risk Scoring', desc: 'Categorizing findings according to CVSS v3.1 severity scores and documenting actionable reproduction steps.' },
      { step: '04', title: 'Remediation Support & Patch Verification', desc: 'Collaborating directly with your engineering team to implement code fixes and security configuration updates.' },
      { step: '05', title: 'Re-Testing & Certification Issuance', desc: 'Conducting verification scans to confirm all vulnerabilities are closed and issuing official VAPT certification.' }
    ],
    useCases: [
      { industry: 'FinTech & Banking', title: 'Pre-Launch VAPT for Payment App', desc: 'Identified and remediated 3 critical API authorization flaws before public launch, protecting $50M+ in daily transaction volume.' },
      { industry: 'Healthcare & EHR SaaS', title: 'HIPAA & SOC2 Security Certification', desc: 'Implemented end-to-end database encryption and IAM least-privilege policies, enabling client to pass SOC2 Type II audit.' },
      { industry: 'E-Commerce Platform', title: 'DDoS & Bot Mitigation Suite', desc: 'Deployed Cloudflare Enterprise WAF, stopping 120M malicious credential-stuffing bot attempts during flash sales.' },
      { industry: 'Enterprise SaaS', title: 'Cloud Infrastructure Hardening', desc: 'Remediated 42 misconfigured AWS S3 buckets and IAM roles, establishing zero-trust access across 15 engineering teams.' }
    ],
    faqs: [
      { q: 'How often should a business conduct a Penetration Test (VAPT)?', a: 'Industry best practice recommends conducting a comprehensive VAPT audit at least once per year, and after every major software release or major architectural update.' },
      { q: 'Will penetration testing disrupt our live application or cause downtime?', a: 'No. We perform tests with controlled payloads and can test either in a dedicated staging environment or during scheduled low-traffic production windows to ensure zero disruption.' },
      { q: 'Do you provide an official certificate after the security audit?', a: 'Yes! Upon successful re-testing and confirmation that all identified vulnerabilities have been remediated, we issue an official VAPT Security Certificate and Executive Summary for your clients, investors, and auditors.' },
      { q: 'Can you help our developers fix the security vulnerabilities you find?', a: 'Yes. Unlike firms that only hand over generic automated reports, our engineers provide exact code snippets, configuration guides, and direct developer consultations to ensure rapid remediation.' }
    ]
  },

  // 15. Data Analytics
  {
    slug: 'data-analytics',
    title: 'Data Analytics',
    category: 'Data & AI',
    categoryIcon: 'fa-chart-bar',
    accentColor: '#3a0ca3',
    tagline: 'Turn Complex Raw Data Into Actionable Business Intelligence & Predictive Insights',
    metaDesc: 'Enterprise data analytics and business intelligence services by Techno Amaze. Custom BI dashboards, data warehousing, ETL pipelines, Power BI, Tableau, and predictive analytics.',
    heroImg: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=85&auto=format&fit=crop',
    kpis: [
      { num: '10x', label: 'Faster Executive Decision Making' },
      { num: '100%', label: 'Single Source of Truth' },
      { num: '35%+', label: 'Identified Cost Reduction Opportunities' },
      { num: '90+', label: 'BI & Data Warehouses Deployed' }
    ],
    overview: {
      headline: 'Transforming Disconnected Data Silos Into Clear, Profitable Decisions',
      text: 'Every business generates vast amounts of data across CRM, ERP, e-commerce, and marketing platforms, but few turn it into competitive advantage. Techno Amaze builds custom data pipelines, cloud data warehouses, and interactive Business Intelligence (BI) dashboards. We clean, model, and visualize your data in real time, giving executives and managers the actionable insights needed to scale revenue and cut operational waste.',
      challenges: [
        'Data trapped in disconnected spreadsheets, databases, and third-party SaaS tools',
        'Manual reporting processes that waste hours of executive and analyst time each week',
        'Lack of real-time visibility into customer churn, sales velocity, and inventory turnover',
        'Inaccurate or dirty data leading to flawed business decisions'
      ],
      solutions: [
        'Automated ETL/ELT pipelines consolidating data into modern cloud warehouses (Snowflake, BigQuery)',
        'Interactive real-time dashboards in Power BI, Tableau, or custom React data portals',
        'Predictive machine learning models forecasting customer demand, revenue, and churn risk',
        'Robust data governance and automated cleansing ensuring 100% data reliability'
      ]
    },
    capabilities: [
      { icon: 'fa-database', title: 'Cloud Data Warehousing (Snowflake / BigQuery)', desc: 'Architecting high-performance cloud data warehouses that query billions of rows in seconds.', deliverable: 'Scalable data warehouse schema with optimized partitioning' },
      { icon: 'fa-arrows-split-up-and-left', title: 'Automated ETL / ELT Data Pipelines', desc: 'Extracting, transforming, and loading data automatically from Salesforce, databases, and APIs using dbt and Airflow.', deliverable: 'Fault-tolerant data pipelines with automated failure alerting' },
      { icon: 'fa-chart-pie', title: 'Executive BI Dashboards (Power BI & Tableau)', desc: 'Interactive visual reporting dashboards with drill-down filters, scheduled email reports, and role-based access.', deliverable: 'Fully custom Power BI / Tableau dashboards' },
      { icon: 'fa-code', title: 'Embedded Analytics & Custom Portals', desc: 'Embedding interactive charts directly into your customer-facing SaaS product using React and D3.js.', deliverable: 'White-labeled customer analytics dashboard' },
      { icon: 'fa-brain', title: 'Predictive Analytics & Customer Churn Modeling', desc: 'Applying statistical machine learning models to forecast future revenue, sales trends, and user churn probability.', deliverable: 'Predictive analytics engine with actionable scoring metrics' },
      { icon: 'fa-broom', title: 'Data Cleaning & Governance', desc: 'Automated deduplication, data validation rules, and cataloging to ensure complete data integrity.', deliverable: 'Clean, validated data assets with automated quality checks' }
    ],
    techStack: [
      { cat: 'Data Warehouses', items: ['Snowflake', 'Google BigQuery', 'Amazon Redshift', 'ClickHouse', 'PostgreSQL'] },
      { cat: 'ETL & Orchestration', items: ['Apache Airflow', 'dbt (Data Build Tool)', 'Fivetran', 'Python / Pandas'] },
      { cat: 'BI & Visualization', items: ['Power BI', 'Tableau', 'Metabase', 'Looker', 'React / Recharts / D3.js'] },
      { cat: 'Analytics Engines', items: ['Apache Spark', 'Databricks', 'AWS Glue'] }
    ],
    methodology: [
      { step: '01', title: 'Data Audit & KPI Strategy', desc: 'Auditing existing data sources, identifying metric definitions, and establishing key business questions.' },
      { step: '02', title: 'Data Warehouse & Schema Modeling', desc: 'Designing dimensional star/snowflake schemas optimized for fast analytical query performance.' },
      { step: '03', title: 'Automated Pipeline (ETL) Engineering', desc: 'Building automated data extraction pipelines connecting all your internal tools and APIs.' },
      { step: '04', title: 'Dashboard Design & Metric Validation', desc: 'Designing intuitive, high-impact visualization dashboards and reconciling numbers against source data.' },
      { step: '05', title: 'Deployment, User Training & Handover', desc: 'Deploying dashboards with automated refresh schedules and conducting team training sessions.' }
    ],
    useCases: [
      { industry: 'E-Commerce & Retail', title: 'Omnichannel Customer Lifetime Value BI', desc: 'Unified Shopify, Amazon, and Meta Ads data into a BigQuery warehouse, identifying 28% in ad spend waste.' },
      { industry: 'B2B SaaS Platforms', title: 'Embedded Customer Telemetry Portal', desc: 'Built a real-time analytics portal in React and ClickHouse handling 50M daily events for SaaS customers.' },
      { industry: 'Logistics & Supply Chain', title: 'Fleet Route Profitability Dashboard', desc: 'Created interactive Power BI dashboard tracking fuel efficiency, vehicle maintenance, and route margins across 400 trucks.' },
      { industry: 'Healthcare & Hospitals', title: 'Patient Admission & Bed Utilization BI', desc: 'Built real-time hospital occupancy dashboard that reduced emergency room wait times by 34%.' }
    ],
    faqs: [
      { q: 'How is a custom data warehouse better than reporting inside individual tools?', a: 'Individual tools only show siloed views (e.g. Google Ads doesn’t know your CRM customer revenue). A data warehouse unifies all sources into a single source of truth for holistic ROI analysis.' },
      { q: 'Can you embed interactive dashboards directly into our existing web application?', a: 'Yes! We build embedded customer analytics dashboards using React, D3.js, Chart.js, or embedded Power BI, providing your SaaS users with white-labeled reports.' },
      { q: 'How often does the data update on the dashboards?', a: 'We can configure pipelines for real-time streaming updates (via Kafka/WebSockets) or scheduled micro-batch updates (every 15 minutes, hourly, or daily) based on your needs.' },
      { q: 'Will our non-technical team members be able to use the dashboards?', a: 'Yes! We design intuitive dashboards with self-explanatory filters, date selectors, drill-down capabilities, and export options, accompanied by full team training.' }
    ]
  },

  // 16. AI & Machine Learning
  {
    slug: 'ai-machine-learning',
    title: 'AI & Machine Learning',
    category: 'Artificial Intelligence',
    categoryIcon: 'fa-brain',
    accentColor: '#C8006E',
    tagline: 'Custom AI Models, LLM Agents & Intelligent Process Automation',
    metaDesc: 'Custom AI and machine learning development by Techno Amaze. Generative AI copilots, custom LLM fine-tuning, computer vision, predictive algorithms, and intelligent workflow automation.',
    heroImg: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1400&q=85&auto=format&fit=crop',
    kpis: [
      { num: '80%+', label: 'Routine Task Automation' },
      { num: '98.5%', label: 'AI Model Accuracy' },
      { num: '< 200ms', label: 'Real-Time LLM Inference Latency' },
      { num: '40+', label: 'Enterprise AI Solutions Deployed' }
    ],
    overview: {
      headline: 'Harnessing Cutting-Edge Artificial Intelligence to Outpace Competitors',
      text: 'Artificial Intelligence is revolutionizing modern business operations. Techno Amaze helps forward-thinking companies integrate bespoke AI and Machine Learning capabilities into their software products and internal workflows. From Retrieval-Augmented Generation (RAG) knowledge copilots and fine-tuned LLMs to computer vision inspection and predictive recommendation engines, we build production-grade AI solutions.',
      challenges: [
        'Manual, repetitive data entry and document processing draining team productivity',
        'Generic public AI models that hallucinate and lack proprietary domain context',
        'High latency and unexpected API costs when deploying LLMs at enterprise scale',
        'Data privacy and security concerns when using third-party commercial AI services'
      ],
      solutions: [
        'Private enterprise RAG systems searching your internal documents with 100% data privacy',
        'Custom fine-tuned open-source LLMs (Llama 3, Mistral) hosted securely on your private cloud',
        'Automated document extraction pipelines parsing invoices, medical charts, and contracts in seconds',
        'Optimized model quantization (vLLM, Ollama) reducing AI infrastructure costs by up to 70%'
      ]
    },
    capabilities: [
      { icon: 'fa-robot', title: 'Enterprise Generative AI & RAG Copilots', desc: 'Intelligent AI copilots that answer questions, cite sources, and execute actions based on your internal documentation.', deliverable: 'Secure enterprise RAG system with Vector database integration' },
      { icon: 'fa-file-lines', title: 'Automated Document Intelligence & OCR', desc: 'AI models extracting structured data from unstructured PDFs, invoices, receipts, and medical scans.', deliverable: 'Automated document processing pipeline with 99% extraction accuracy' },
      { icon: 'fa-eye', title: 'Computer Vision & Object Detection', desc: 'YOLO and OpenCV models for industrial quality control, defect detection, facial recognition, and image classification.', deliverable: 'Real-time computer vision inference engine' },
      { icon: 'fa-comments', title: 'Intelligent Customer Support Chatbots', desc: 'Context-aware AI conversational agents that resolve customer support queries and book appointments autonomously.', deliverable: 'Omnichannel AI chatbot integrated with your CRM & WhatsApp' },
      { icon: 'fa-microchip', title: 'Custom Model Fine-Tuning & Training', desc: 'Fine-tuning open-source LLMs (Llama 3, Mistral, Gemma) on your proprietary datasets for superior domain performance.', deliverable: 'Fine-tuned model weights and private API deployment' },
      { icon: 'fa-chart-line', title: 'Predictive Analytics & Recommendation Engines', desc: 'Machine learning algorithms that predict customer churn, dynamic pricing, and personalized product suggestions.', deliverable: 'Production ML pipeline with automated model retraining' }
    ],
    techStack: [
      { cat: 'AI & LLM Frameworks', items: ['PyTorch', 'TensorFlow', 'LangChain', 'LlamaIndex', 'HuggingFace'] },
      { cat: 'LLMs & Foundation Models', items: ['OpenAI GPT-4o', 'Claude 3.5 Sonnet', 'Meta Llama 3', 'Mistral AI'] },
      { cat: 'Vector Databases', items: ['Pinecone', 'Qdrant', 'Milvus', 'pgvector (PostgreSQL)', 'Chroma'] },
      { cat: 'Inference & Deployment', items: ['vLLM', 'Ollama', 'Triton Inference Server', 'AWS SageMaker', 'RunPod'] }
    ],
    methodology: [
      { step: '01', title: 'AI Feasibility & Data Readiness Study', desc: 'Evaluating business use cases, dataset quality, latency targets, and compliance requirements.' },
      { step: '02', title: 'PoC & Model Architecture Selection', desc: 'Building a working proof of concept (PoC) to validate AI accuracy and speed with your real data.' },
      { step: '03', title: 'RAG Pipeline & Model Fine-Tuning', desc: 'Structuring chunking strategies, vector embeddings, fine-tuning hyperparameters, and prompt engineering.' },
      { step: '04', title: 'Guardrails & Accuracy Benchmarking', desc: 'Implementing hallucination guardrails, PII masking, and strict accuracy evaluation benchmarks.' },
      { step: '05', title: 'Production Deployment & Monitoring', desc: 'Deploying high-speed inference endpoints with token tracking and continuous feedback loops.' }
    ],
    useCases: [
      { industry: 'Legal & Compliance', title: 'AI Contract Analysis & Due Diligence', desc: 'Engineered a RAG copilot parsing 500-page commercial contracts in 4 seconds, highlighting liability risks.' },
      { industry: 'Healthcare & Clinics', title: 'Clinical Note Summarizer & ICD Coder', desc: 'Built HIPAA-compliant AI tool summarizing doctor-patient audio transcripts into structured clinical notes.' },
      { industry: 'E-Commerce & Retail', title: 'Personalized AI Product Recommendation', desc: 'Deployed deep learning recommendation algorithm increasing cross-sell revenue by 24% for online retailer.' },
      { industry: 'Manufacturing & Quality', title: 'Computer Vision Defect Inspection', desc: 'Trained real-time edge camera model detecting micro-cracks in manufactured aluminum parts on assembly lines.' }
    ],
    faqs: [
      { q: 'How do you ensure our proprietary company data remains secure when using AI?', a: 'We architect enterprise-grade zero-retention AI solutions. Your data is never used to train public models, and we can host open-source LLMs (such as Llama 3) entirely within your private VPC with zero external data transmission.' },
      { q: 'How do you prevent AI hallucinations?', a: 'We employ Retrieval-Augmented Generation (RAG) with strict semantic grounding, vector similarity thresholds, source citation mandates, and custom validation guardrails (such as NeMo Guardrails).' },
      { q: 'Can we integrate AI into our existing web or mobile app?', a: 'Yes! We package our AI solutions as standard REST and WebSocket APIs, making it effortless to add AI search, chatbots, or automated analysis into your current software.' },
      { q: 'What is the typical timeline to build and launch a custom AI solution?', a: 'A functional Proof of Concept (PoC) is typically delivered in 2 to 3 weeks, followed by full production deployment, integration, and guardrail testing within 6 to 10 weeks.' }
    ]
  },

  // 17. IT Consulting
  {
    slug: 'it-consulting',
    title: 'IT Consulting',
    category: 'Strategic Advisory',
    categoryIcon: 'fa-briefcase',
    accentColor: '#1d3557',
    tagline: 'Strategic Technology Advisory That Aligns IT Investments With Business Growth',
    metaDesc: 'Expert IT consulting and technology advisory services by Techno Amaze. Fractional CTO, digital transformation roadmaps, software architecture audits, and vendor evaluation.',
    heroImg: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&q=85&auto=format&fit=crop',
    kpis: [
      { num: '35%+', label: 'Average Tech Budget Optimization' },
      { num: '100%', label: 'Independent Vendor Neutrality' },
      { num: '8+ Years', label: 'Enterprise Advisory Experience' },
      { num: '120+', label: 'Companies Guided Strategically' }
    ],
    overview: {
      headline: 'Navigating Complex Technology Choices with Clarity, Experience & Precision',
      text: 'Choosing the wrong technology stack, vendor, or architecture can cost hundreds of thousands of dollars in technical debt and stalled growth. Techno Amaze provides senior-level IT consulting and strategic technology advisory services. We assist CEOs, CTOs, and founders in making sound architectural decisions, modernizing legacy infrastructure, optimizing IT budgets, and executing digital transformation roadmaps.',
      challenges: [
        'Uncertainty over which technology stack or cloud vendor best supports long-term growth',
        'Accumulated technical debt slowing down engineering velocity and bloating budgets',
        'Lack of senior technical leadership (CTO) to oversee complex software initiatives',
        'Failed software vendor implementations delivering incomplete or buggy deliverables'
      ],
      solutions: [
        'Comprehensive architectural audits and technology stack feasibility evaluations',
        'Actionable multi-year Digital Transformation Roadmaps with clear ROI milestones',
        'Fractional CTO and Virtual Chief Information Officer (vCIO) advisory services',
        'Rigorous vendor selection, RFP creation, and independent technical code reviews'
      ]
    },
    capabilities: [
      { icon: 'fa-user-tie', title: 'Fractional CTO & Strategic Advisory', desc: 'Senior technology leadership guiding your technical strategy, hiring, architecture, and board meetings.', deliverable: 'Dedicated CTO leadership on retainer or advisory basis' },
      { icon: 'fa-map-location-dot', title: 'Digital Transformation Roadmaps', desc: 'Structured multi-phase plans modernizing legacy workflows, adopting cloud infrastructure, and automating manual tasks.', deliverable: 'Comprehensive multi-year technology execution roadmap' },
      { icon: 'fa-magnifying-glass-chart', title: 'Software Architecture & Code Audits', desc: 'In-depth analysis of existing codebases, scalability bottlenecks, security vulnerabilities, and technical debt.', deliverable: 'Detailed code audit report with prioritized remediation steps' },
      { icon: 'fa-handshake', title: 'Vendor Evaluation & Due Diligence', desc: 'Authoring RFPs, vetting technical proposals, and evaluating commercial software vendors neutrally.', deliverable: 'Objective vendor comparison scorecard and risk assessment' },
      { icon: 'fa-scale-balanced', title: 'Technical Due Diligence for M&A', desc: 'Auditing target software companies for investors and acquirers to assess code quality and IP risks.', deliverable: 'M&A technical due diligence report for investors' },
      { icon: 'fa-shield-halved', title: 'IT Governance & Disaster Recovery', desc: 'Developing enterprise data governance frameworks, business continuity plans, and backup policies.', deliverable: 'Certified Business Continuity & Disaster Recovery Manual' }
    ],
    techStack: [
      { cat: 'Frameworks & Standards', items: ['TOGAF', 'Agile / Scrum', 'ITIL', 'ISO 27001', 'SOC2 Frameworks'] },
      { cat: 'Architecture Audits', items: ['SonarQube', 'AWS Well-Architected Framework', 'Jira', 'Lucidchart'] },
      { cat: 'Strategic Planning', items: ['Miro', 'Confluence', 'Notion Enterprise', 'Microsoft 365'] }
    ],
    methodology: [
      { step: '01', title: 'Stakeholder Interviews & Discovery', desc: 'Interviewing executive leadership and engineering teams to understand business goals, pain points, and budget.' },
      { step: '02', title: 'Comprehensive Technical Audit', desc: 'Deep-dive analysis into architecture diagrams, code repositories, cloud configurations, and operational workflows.' },
      { step: '03', title: 'Gap Analysis & Strategic Recommendations', desc: 'Identifying risks, inefficiencies, and formulating prioritized short-term and long-term recommendations.' },
      { step: '04', title: 'Roadmap & Implementation Blueprint', desc: 'Creating detailed project roadmaps with realistic timelines, resource allocation, and budget estimates.' },
      { step: '05', title: 'Ongoing Governance & Execution Oversight', desc: 'Providing regular strategic check-ins, sprint reviews, and course corrections to guarantee delivery.' }
    ],
    useCases: [
      { industry: 'FinTech Startup', title: 'Fractional CTO for Seed-Stage Startup', desc: 'Guided architecture selection and engineering hiring, leading to successful $4M Series A funding round.' },
      { industry: 'Traditional Manufacturing', title: 'Enterprise Digital Transformation', desc: 'Migrated 30-year legacy paper workflows to custom cloud ERP, saving 4,000+ staff hours annually.' },
      { industry: 'Private Equity Firm', title: 'M&A Technical Due Diligence Audit', desc: 'Audited target healthcare SaaS platform, uncovering $600k in hidden technical debt and renegotiating acquisition price.' },
      { industry: 'Professional Services', title: 'IT Infrastructure & Security Modernization', desc: 'Restructured decentralized IT setup into unified zero-trust Microsoft 365 cloud environment across 6 global offices.' }
    ],
    faqs: [
      { q: 'What is a Fractional CTO and when does a company need one?', a: 'A Fractional CTO provides executive-level technical leadership on a part-time or advisory basis. It is ideal for growing startups and mid-market companies that need senior architectural guidance without the cost of a full-time $300k+ executive salary.' },
      { q: 'How does an IT consulting engagement typically work?', a: 'Engagements can be project-based (such as a 3-week architecture audit or digital roadmap creation) or retainer-based (providing ongoing monthly strategic advisory and oversight).' },
      { q: 'Are your software and vendor recommendations completely unbiased?', a: 'Yes, 100%. We operate with strict vendor neutrality and do not accept commissions from software vendors, ensuring our recommendations are solely in your best business interest.' },
      { q: 'What is included in a software architecture code audit?', a: 'Our code audit evaluates code maintainability, security vulnerabilities, database query efficiency, test coverage, third-party dependency risks, and cloud scalability readiness.' }
    ]
  },

  // 18. Digital Marketing
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    category: 'Growth Marketing',
    categoryIcon: 'fa-chart-line',
    accentColor: '#C8006E',
    tagline: 'Full-Funnel Digital Marketing That Drives Qualified Leads & Revenue Growth',
    metaDesc: 'Results-driven digital marketing services by Techno Amaze. SEO, Google & Meta Ads, content marketing, social media, and conversion-optimized sales funnels.',
    heroImg: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1400&q=85&auto=format&fit=crop',
    kpis: [
      { num: '4.5x', label: 'Average Return on Ad Spend (ROAS)' },
      { num: '250%+', label: 'Organic Traffic Growth' },
      { num: '45%+', label: 'Lower Cost Per Acquisition (CPA)' },
      { num: '200+', label: 'Successful Marketing Campaigns' }
    ],
    overview: {
      headline: 'Scaling Your Revenue with Data-Driven, Performance-Focused Growth Strategies',
      text: 'Having a great product is only half the battle — your target customers must be able to discover, trust, and choose your brand. Techno Amaze provides full-funnel digital marketing services that combine creative storytelling with rigorous data analytics. From search engine optimization (SEO) and high-converting paid ads to social media community building, we generate measurable pipeline growth and ROI.',
      challenges: [
        'Wasted ad spend on low-intent clicks that never convert into paying customers',
        'Stagnant organic website traffic and low search rankings for high-value buyer keywords',
        'Disconnected marketing channels operating in silos without cohesive messaging',
        'Lack of clear attribution reporting to understand which channels drive actual revenue'
      ],
      solutions: [
        'Laser-targeted Google & Meta PPC ad campaigns with continuous A/B creative testing',
        'Comprehensive technical & content SEO driving sustainable top-tier Google rankings',
        'Omnichannel marketing funnels guiding prospects from initial awareness to closed sales',
        'Transparent multi-touch attribution dashboards tracking every marketing dollar to revenue'
      ]
    },
    capabilities: [
      { icon: 'fa-magnifying-glass-chart', title: 'Search Engine Optimization (SEO)', desc: 'Technical SEO, high-authority backlink acquisition, on-page content optimization, and local search dominance.', deliverable: 'Top Google search rankings for high-intent buyer keywords' },
      { icon: 'fa-bullhorn', title: 'Pay-Per-Click Advertising (Google & Meta Ads)', desc: 'High-converting paid search, display, remarketing, and social ad campaigns with optimized ad spend.', deliverable: 'Maximized ROAS and lowered Cost Per Lead (CPL)' },
      { icon: 'fa-hashtag', title: 'Social Media Management & Growth', desc: 'Organic community building, viral content creation, and executive thought leadership on LinkedIn & Instagram.', deliverable: 'Consistent high-engagement social presence and brand authority' },
      { icon: 'fa-envelope-open-text', title: 'Email & Marketing Automation', desc: 'Behavioral email sequences, automated lead nurturing funnels, and customer retention newsletters.', deliverable: 'High-converting automated lifecycle email campaigns' },
      { icon: 'fa-filter', title: 'Conversion Rate Optimization (CRO)', desc: 'Landing page heatmapping, A/B testing, and frictionless form optimization to maximize conversion rates.', deliverable: 'Data-backed landing page redesigns that boost conversion lift' },
      { icon: 'fa-chart-pie', title: 'Performance Analytics & Attribution', desc: 'Google Analytics 4, Tag Manager, and custom attribution dashboards tracking exact cost per acquisition.', deliverable: 'Real-time marketing ROI dashboard' }
    ],
    techStack: [
      { cat: 'Advertising Platforms', items: ['Google Ads', 'Meta Ads Manager (FB/IG)', 'LinkedIn Campaign Manager', 'YouTube Ads'] },
      { cat: 'SEO & Content Tools', items: ['SEMrush', 'Ahrefs', 'Google Search Console', 'SurferSEO', 'Screaming Frog'] },
      { cat: 'Automation & Email', items: ['HubSpot', 'Klaviyo', 'ActiveCampaign', 'Mailchimp'] },
      { cat: 'Analytics & CRO', items: ['Google Analytics 4', 'Google Tag Manager', 'Hotjar', 'Looker Studio'] }
    ],
    methodology: [
      { step: '01', title: 'Market Research & Audience Profiling', desc: 'Analyzing customer personas, competitor advertising strategies, and high-value search queries.' },
      { step: '02', title: 'Full-Funnel Campaign Architecture', desc: 'Designing dedicated landing pages, ad creatives, compelling copy, and tracking pixels.' },
      { step: '03', title: 'Multi-Channel Campaign Launch', desc: 'Launching targeted Google search ads, Meta social campaigns, and technical on-page SEO.' },
      { step: '04', title: 'A/B Testing & Conversion Optimization', desc: 'Testing ad copy, audiences, bidding strategies, and landing page headlines to lower CPA.' },
      { step: '05', title: 'Scaling & Transparent Monthly Reporting', desc: 'Reinvesting in winning channels, expanding audience targeting, and delivering weekly ROI reports.' }
    ],
    useCases: [
      { industry: 'B2B SaaS & Tech', title: 'SaaS Inbound Lead Generation', desc: 'Generated 420+ qualified enterprise demo bookings in 90 days via targeted LinkedIn Ads and SEO content.' },
      { industry: 'E-Commerce & D2C', title: 'Multi-Channel E-Commerce Growth', desc: 'Scaled an apparel brand from $20k to $150k monthly revenue with 4.8x ROAS across Meta and Google Shopping.' },
      { industry: 'Healthcare & Clinics', title: 'Local Patient Acquisition Campaign', desc: 'Dominated local Google Maps search, resulting in a 74% increase in appointment calls for regional medical center.' },
      { industry: 'Professional Services', title: 'Executive Thought Leadership & PR', desc: 'Grew consulting firm founders LinkedIn following to 45,000+, driving $250k in organic high-ticket client deals.' }
    ],
    faqs: [
      { q: 'How quickly can we expect to see results from digital marketing?', a: 'Paid advertising campaigns (Google Ads, Meta Ads) start generating qualified leads within the first week of launch. Search Engine Optimization (SEO) builds compounding organic traffic over a 3 to 6-month timeframe.' },
      { q: 'How do you measure and report marketing success?', a: 'We focus on bottom-line business metrics: Qualified Leads, Customer Acquisition Cost (CAC), Return on Ad Spend (ROAS), and Revenue. You will receive a real-time Looker Studio dashboard and weekly video walk-throughs.' },
      { q: 'Do you create the ad creatives and landing page copy?', a: 'Yes! Our in-house creative team writes all advertising copy, designs high-converting graphics/video assets, and builds dedicated landing pages.' },
      { q: 'Is there a long-term contract requirement?', a: 'We offer flexible month-to-month and quarterly growth retainers. We believe in retaining clients through proven performance and measurable ROI, not rigid lock-in contracts.' }
    ]
  },

  // 19. Search Engine Optimization (SEO)
  {
    slug: 'search-engine-optimization',
    title: 'Search Engine Optimization',
    category: 'Organic Growth',
    categoryIcon: 'fa-magnifying-glass-chart',
    accentColor: '#2a9d8f',
    tagline: 'Dominate Google Rankings, Drive High-Intent Traffic & Outrank Competitors',
    metaDesc: 'Data-driven SEO services by Techno Amaze. Technical SEO, on-page optimization, high-authority link building, keyword research, and Core Web Vitals enhancement.',
    heroImg: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1400&q=85&auto=format&fit=crop',
    kpis: [
      { num: '#1 Rank', label: 'Rankings for High-Value Buyer Keywords' },
      { num: '300%+', label: 'Average Organic Traffic Growth' },
      { num: '100%', label: 'White-Hat SEO Methodologies' },
      { num: '150+', label: 'Websites Ranked on Page 1' }
    ],
    overview: {
      headline: 'Capturing High-Intent Customers Exactly When They Search For Your Services',
      text: 'Search engine optimization is the highest-ROI marketing channel for sustainable, long-term business growth. Techno Amaze provides data-backed, white-hat SEO services designed to secure top Google rankings for the exact keywords your prospective customers use. We combine deep technical SEO audits, content optimization, and high-authority link building to build lasting organic dominance.',
      challenges: [
        'Invisibility on Google search results for valuable high-intent commercial keywords',
        'Technical website issues (slow load times, crawl errors, broken redirects) hurting rankings',
        'Low-quality content that fails to satisfy Google helpful content and E-E-A-T guidelines',
        'Penalties or traffic drops caused by algorithm updates or legacy toxic backlinks'
      ],
      solutions: [
        'Comprehensive technical SEO fixes resolving Core Web Vitals, indexation, and structured data',
        'In-depth competitor keyword research targeting high-converting transactional search terms',
        'Authoritative, human-written content engineered to rank and convert visitors into buyers',
        'White-hat outreach and digital PR earning permanent backlinks from reputable industry publications'
      ]
    },
    capabilities: [
      { icon: 'fa-gear', title: 'Technical SEO & Core Web Vitals', desc: 'Fixing crawl errors, sitemaps, robots.txt, canonicalization, mobile responsiveness, and site speed.', deliverable: 'Full technical SEO audit and direct code implementation' },
      { icon: 'fa-key', title: 'Buyer-Intent Keyword Research', desc: 'Identifying high-volume, low-competition keywords that map directly to high-intent buyer searches.', deliverable: 'Comprehensive keyword master strategy and content calendar' },
      { icon: 'fa-file-lines', title: 'On-Page Content Optimization', desc: 'Optimizing title tags, meta descriptions, H1-H3 headings, internal linking, and semantic schema markup.', deliverable: 'Fully optimized page content adhering to Google E-E-A-T standards' },
      { icon: 'fa-link', title: 'High-Authority Link Building & Digital PR', desc: 'Acquiring contextual, high-domain-authority (DA 50+) backlinks from trusted industry websites.', deliverable: 'High-quality editorial backlinks that build domain authority' },
      { icon: 'fa-location-dot', title: 'Local SEO & Google Business Profile', desc: 'Optimizing Google Maps presence, local business citations, NAP consistency, and customer reviews.', deliverable: 'Top 3 Google Local Pack rankings in target service areas' },
      { icon: 'fa-chart-line', title: 'Rank Tracking & Transparent Reporting', desc: 'Daily keyword rank tracking, organic conversion monitoring, and monthly Looker Studio reporting.', deliverable: 'Live 24/7 SEO performance dashboard' }
    ],
    techStack: [
      { cat: 'SEO & Research Tools', items: ['Ahrefs', 'SEMrush', 'Google Search Console', 'Screaming Frog SEO Spider', 'SurferSEO'] },
      { cat: 'Speed & Core Web Vitals', items: ['Google PageSpeed Insights', 'GTmetrix', 'Lighthouse'] },
      { cat: 'Rank Tracking & Reporting', items: ['Looker Studio', 'AccuRanker', 'Google Analytics 4'] }
    ],
    methodology: [
      { step: '01', title: 'Comprehensive Technical Audit', desc: 'Crawling every URL on your domain to identify broken links, crawl blocks, duplicate content, and speed issues.' },
      { step: '02', title: 'Keyword Research & Competitor Gap Analysis', desc: 'Identifying keyword opportunities your competitors are ranking for and mapping them to landing pages.' },
      { step: '03', title: 'On-Page & Structural Optimization', desc: 'Revamping metadata, heading tags, internal linking, schema markup, and content depth.' },
      { step: '04', title: 'Content Production & Digital PR', desc: 'Publishing comprehensive topic cluster guides and earning authoritative backlinks through targeted outreach.' },
      { step: '05', title: 'Monitoring, Refinement & Ranking Gains', desc: 'Tracking organic impressions, clicks, conversions, and continuously optimizing underperforming pages.' }
    ],
    useCases: [
      { industry: 'B2B Software & SaaS', title: 'Organic Demo Pipeline Scaling', desc: 'Ranked SaaS product on Page 1 for 45+ high-intent keywords, driving 1,800+ monthly organic demo signups.' },
      { industry: 'Healthcare & Specialized Clinics', title: 'Local Medical Search Dominance', desc: 'Captured #1 Google Local Pack rankings across 8 regional clinic locations, doubling patient calls in 5 months.' },
      { industry: 'E-Commerce Store', title: 'Category Page SEO & Revenue Boost', desc: 'Optimized 350+ e-commerce product category pages, resulting in a 240% increase in non-branded organic revenue.' },
      { industry: 'Legal & Financial Services', title: 'High-Ticket Client Acquisition', desc: 'Ranked boutique law firm #1 for high-ticket commercial litigation terms, generating $400k+ in legal retainers.' }
    ],
    faqs: [
      { q: 'How long does it take for SEO to show meaningful results?', a: 'Typically, technical fixes and low-hanging keyword gains appear within 4 to 8 weeks. Significant organic traffic growth and competitive Page 1 rankings are achieved within 3 to 6 months of consistent execution.' },
      { q: 'Do you use safe, white-hat SEO techniques?', a: 'Yes, 100%. We strictly follow Google Search Essentials (Webmaster Guidelines). We never use automated link spam, private blog networks (PBNs), or deceptive black-hat techniques.' },
      { q: 'How do you choose which keywords to target?', a: 'We prioritize commercial and transactional intent keywords — terms searched by users ready to buy, book a consultation, or purchase software, rather than vanity informational keywords with low conversion rates.' },
      { q: 'Do I get regular reports on keyword rankings and traffic?', a: 'Yes! You will have access to a live Looker Studio dashboard tracking daily keyword position movements, organic traffic sessions, and conversions, accompanied by detailed monthly reviews.' }
    ]
  },

  // 20. Social Media Marketing
  {
    slug: 'social-media-marketing',
    title: 'Social Media Marketing',
    category: 'Brand & Community',
    categoryIcon: 'fa-hashtag',
    accentColor: '#0077b5',
    tagline: 'Build Vibrant Communities, Drive Engagement & Transform Followers Into Customers',
    metaDesc: 'Strategic social media marketing services by Techno Amaze. LinkedIn B2B growth, Instagram engagement, short-form video, content calendars, and community management.',
    heroImg: 'https://images.unsplash.com/photo-1611162617474-5b21e939e113?w=1400&q=85&auto=format&fit=crop',
    kpis: [
      { num: '4.8x', label: 'Average Organic Engagement Lift' },
      { num: '1M+', label: 'Organic Video Views Generated' },
      { num: '100%', label: 'Custom Branded Visuals' },
      { num: '100+', label: 'Brand Accounts Managed' }
    ],
    overview: {
      headline: 'Engaging Your Audience With Compelling Visuals, Videos & Authentic Stories',
      text: 'Social media is no longer just for brand awareness — it is a powerful customer acquisition and relationship-building channel. Techno Amaze crafts tailored social media marketing strategies for LinkedIn, Instagram, Facebook, Twitter (X), and YouTube. We combine captivating visual design, engaging short-form video reels, and active community management to build a loyal audience that converts.',
      challenges: [
        'Low organic reach and engagement on corporate social media channels',
        'Inconsistent posting schedules caused by lack of dedicated creative resources',
        'Generic, uninspired stock graphics that fail to capture audience attention in crowded feeds',
        'Inability to translate social media likes and followers into qualified leads and sales'
      ],
      solutions: [
        'High-impact visual carousels, infographics, and short-form video reels built for algorithm reach',
        'Consistent monthly content calendars planned, scheduled, and approved in advance',
        'Executive thought leadership content establishing your founders and leaders as industry authorities',
        'Strategic conversion funnels with clear calls-to-action driving followers to your website'
      ]
    },
    capabilities: [
      { icon: 'fa-linkedin', title: 'LinkedIn B2B Thought Leadership', desc: 'Executive branding, educational carousels, industry commentary, and lead generation on LinkedIn.', deliverable: 'Consistent high-authority LinkedIn content calendar' },
      { icon: 'fa-instagram', title: 'Instagram & Facebook Brand Growth', desc: 'Visually stunning grid aesthetics, interactive stories, Reels, and community engagement campaigns.', deliverable: 'Curated aesthetic feeds with high engagement rates' },
      { icon: 'fa-video', title: 'Short-Form Video (Reels / Shorts / TikTok)', desc: 'Scripting, editing, and producing dynamic vertical short-form videos with captions and animations.', deliverable: 'Viral short-form video packages optimized for maximum reach' },
      { icon: 'fa-calendar-days', title: 'Monthly Content Calendars & Strategy', desc: 'Pre-planned monthly themes, graphic assets, captions, hashtag research, and automated scheduling.', deliverable: 'Fully scheduled monthly content calendar delivered in advance' },
      { icon: 'fa-comments', title: 'Community Management & Social Care', desc: 'Active comment moderation, direct message response handling, and proactive audience interaction.', deliverable: 'Fast response times and positive brand sentiment management' },
      { icon: 'fa-chart-pie', title: 'Social Analytics & Competitor Benchmarking', desc: 'Tracking follower growth, engagement rates, click-throughs, and sentiment analysis.', deliverable: 'Monthly social growth and performance scorecard' }
    ],
    techStack: [
      { cat: 'Creative Suite', items: ['Adobe Premiere Pro', 'After Effects', 'Photoshop', 'Figma', 'CapCut Pro'] },
      { cat: 'Scheduling & Publishing', items: ['Buffer', 'Hootsuite', 'Sprout Social', 'Later'] },
      { cat: 'Analytics & Listening', items: ['Brand24', 'Meta Business Suite', 'LinkedIn Analytics', 'Looker Studio'] }
    ],
    methodology: [
      { step: '01', title: 'Brand Tone & Audience Research', desc: 'Defining your social brand voice, core content pillars, visual guidelines, and target demographics.' },
      { step: '02', title: 'Monthly Content Strategy & Ideation', desc: 'Developing 15 to 30 strategic post concepts including carousels, video reels, and thought leadership.' },
      { step: '03', title: 'Creative Production & Client Review', desc: 'Designing custom graphics, editing video reels, writing captions, and submitting for client approval.' },
      { step: '04', title: 'Scheduled Publishing & Live Engagement', desc: 'Scheduling posts at peak audience activity hours and actively responding to comments and DMs.' },
      { step: '05', title: 'Performance Review & Optimization', desc: 'Reviewing top-performing formats, viral reach metrics, and doubling down on winning content styles.' }
    ],
    useCases: [
      { industry: 'B2B SaaS & Tech', title: 'LinkedIn Founder Thought Leadership', desc: 'Grew B2B SaaS founders LinkedIn following by 28,000 in 6 months, generating 65+ organic demo requests.' },
      { industry: 'Education & EdTech', title: 'Techno Amaze Academy Viral Reels', desc: 'Produced educational tech tips reels achieving 450,000+ views and driving 8,500 app downloads.' },
      { industry: 'D2C Consumer Brand', title: 'Instagram Community Scaling', desc: 'Revamped Instagram visual grid and influencer user-generated content, increasing engagement rate by 340%.' },
      { industry: 'Corporate Financial Advisory', title: 'Executive LinkedIn & Twitter Strategy', desc: 'Established wealth advisory firm as a leading market commentator with weekly market breakdown carousels.' }
    ],
    faqs: [
      { q: 'Which social media platforms are best for our business?', a: 'For B2B technology, software, and professional services, LinkedIn and Twitter (X) are the most effective. For B2C, education, e-commerce, and lifestyle brands, Instagram, YouTube, and Facebook deliver the highest engagement.' },
      { q: 'Do we need to approve the posts before they go live?', a: 'Yes! We deliver complete monthly content calendars with graphics, videos, and captions in advance for your review and approval before scheduling.' },
      { q: 'Can you produce short-form video reels and TikToks?', a: 'Yes! Our video production team handles scriptwriting, dynamic motion editing, sound design, and custom captions for high-impact vertical video content.' },
      { q: 'How do you convert social media followers into paying leads?', a: 'We incorporate strategic call-to-action hooks, link-in-bio lead magnets (whitepapers, free tools, webinars), and automated DM response funnels to guide followers to your website.' }
    ]
  },

  // 21. Google & Meta Ads
  {
    slug: 'google-meta-ads',
    title: 'Google & Meta Ads',
    category: 'Paid Advertising',
    categoryIcon: 'fa-bullhorn',
    accentColor: '#e63946',
    tagline: 'High-ROI Paid Advertising That Captures Ready-To-Buy Customers',
    metaDesc: 'Performance paid advertising services by Techno Amaze. Google Search Ads, Meta Ads (Facebook/Instagram), LinkedIn Ads, retargeting funnels, and ROAS optimization.',
    heroImg: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1400&q=85&auto=format&fit=crop',
    kpis: [
      { num: '4.5x+', label: 'Average ROAS on Ad Campaigns' },
      { num: '< 24 Hours', label: 'Campaign Launch Velocity' },
      { num: '40%+', label: 'Lower Cost Per Conversion' },
      { num: '$20M+', label: 'Ad Spend Managed Profitably' }
    ],
    overview: {
      headline: 'Turning Paid Ad Spend into Predictable, Profitable Revenue Growth',
      text: 'Paid advertising is the fastest way to drive targeted traffic, generate qualified leads, and scale online sales. However, without meticulous conversion tracking, precise audience segmentation, and compelling ad creatives, ad spend is easily wasted. Techno Amaze manages performance-driven Google Ads and Meta (Facebook/Instagram) advertising campaigns engineered for maximum Return on Ad Spend (ROAS).',
      challenges: [
        'High Cost Per Click (CPC) and low conversion rates draining marketing budgets',
        'Inaccurate conversion tracking leading to blind ad spending with zero attribution',
        'Creative fatigue causing ad performance to drop sharply after a few weeks',
        'Bidding on broad keywords that attract tire-kickers rather than paying customers'
      ],
      solutions: [
        'Granular negative keyword filtering and exact-match bidding targeting high-intent buyers',
        'Server-side conversion tracking (Meta CAPI & Google Enhanced Conversions) for 100% accuracy',
        'Continuous A/B testing of visual ad creatives, video hooks, and persuasive copywriting',
        'Smart retargeting funnels recapturing past website visitors who did not convert on their first visit'
      ]
    },
    capabilities: [
      { icon: 'fa-google', title: 'Google Search & Shopping Ads', desc: 'Capturing high-intent searches with precision keyword match types, negative lists, and responsive search ads.', deliverable: 'High-converting Google Search & Shopping campaign architecture' },
      { icon: 'fa-meta', title: 'Meta Ads (Facebook & Instagram)', desc: 'Visual static and video ads targeting lookalike audiences, interest behaviors, and custom customer lists.', deliverable: 'Scalable Meta advertising campaign with multi-stage funnels' },
      { icon: 'fa-rotate-right', title: 'Dynamic Retargeting Campaigns', desc: 'Serving personalized ads to abandoned cart shoppers and website visitors across Google Display and Instagram.', deliverable: 'High-ROI retargeting funnels recovering lost leads' },
      { icon: 'fa-vial', title: 'Ad Creative & Copy A/B Testing', desc: 'Designing high-converting ad images, animated reels, and testing multiple headline angles.', deliverable: 'Continuous weekly creative refresh pipeline' },
      { icon: 'fa-chart-pie', title: 'Server-Side Tracking (CAPI & Enhanced Conversions)', desc: 'Bypassing iOS ad blockers with Meta Conversions API and Google Enhanced Conversions for accurate attribution.', deliverable: 'Bulletproof server-side conversion tracking setup' },
      { icon: 'fa-sliders', title: 'Bid Management & Budget Scaling', desc: 'Algorithmic Smart Bidding (Target CPA, Target ROAS) scaling daily spend safely while maintaining profitability.', deliverable: 'Continuous bid optimization and weekly budget management' }
    ],
    techStack: [
      { cat: 'Advertising Platforms', items: ['Google Ads (Search/Display/Shopping/YouTube)', 'Meta Ads Manager (FB/IG)', 'LinkedIn Ads', 'TikTok Ads'] },
      { cat: 'Tracking & Attribution', items: ['Google Tag Manager', 'Meta Conversions API (CAPI)', 'Google Analytics 4', 'Triple Whale'] },
      { cat: 'Creative Design', items: ['Figma', 'Adobe Premiere Pro', 'After Effects', 'Photoshop'] }
    ],
    methodology: [
      { step: '01', title: 'Account Audit & Conversion Tracking Setup', desc: 'Auditing past ad data, installing server-side CAPI tracking, and setting up clean conversion goals.' },
      { step: '02', title: 'Audience Research & Competitor Spying', desc: 'Identifying top-performing competitor ad angles, keywords, audience demographics, and price points.' },
      { step: '03', title: 'Creative Production & Campaign Build', desc: 'Designing high-impact visual ad creatives, writing compelling copy, and configuring campaign structure.' },
      { step: '04', title: 'Launch & Algorithmic Learning Phase', desc: 'Launching campaigns with controlled budgets, monitoring search terms, and adding negative keywords.' },
      { step: '05', title: 'A/B Optimization & Budget Scaling', desc: 'Scaling winning ad sets, replacing fatigued creatives, and optimizing target CPA/ROAS bid targets.' }
    ],
    useCases: [
      { industry: 'E-Commerce & Retail', title: 'Scaling Shopify Store Sales', desc: 'Generated $320k in holiday sales at a 5.2x ROAS using Meta dynamic product ads and Google Shopping.' },
      { industry: 'B2B Enterprise SaaS', title: 'High-Value Inbound Demo Generation', desc: 'Reduced Cost Per Demo from $185 to $68 via targeted Google Search Ads and LinkedIn remarketing.' },
      { industry: 'Education & EdTech', title: 'App Installs & Course Registrations', desc: 'Drove 25,000+ mobile app installs at $0.42 per install via Meta Ads and Google App Campaigns.' },
      { industry: 'Healthcare & Specialized Clinics', title: 'Patient Appointment Acquisition', desc: 'Generated 210+ booked surgical consultations in 60 days with Google Search Ads on target medical keywords.' }
    ],
    faqs: [
      { q: 'How much ad spend budget do we need to get started?', a: 'We typically recommend a minimum starting ad spend of $1,000 to $2,500/month for local campaigns or $3,000 to $10,000+/month for national/global campaigns to allow algorithms to exit the learning phase quickly.' },
      { q: 'Who pays the advertising platform costs (Google/Meta)?', a: 'You pay Google and Meta directly using your own credit card or corporate billing account. You retain 100% ownership of your ad accounts, pixel data, and campaign history.' },
      { q: 'How do you prevent wasting ad spend on irrelevant clicks?', a: 'We employ rigorous negative keyword lists, exact match types, geographical radius targeting, and continuous daily search term audits to ensure every dollar is spent on high-intent prospects.' },
      { q: 'Do you create the ad banners, videos, and copywriting?', a: 'Yes! Our in-house creative team designs all banner graphics, edits video ads, and writes compelling, conversion-focused ad copy tailored to each platform.' }
    ]
  },

  // 22. Content Marketing
  {
    slug: 'content-marketing',
    title: 'Content Marketing',
    category: 'Growth & Authority',
    categoryIcon: 'fa-file-lines',
    accentColor: '#457b9d',
    tagline: 'High-Impact Content Assets That Educate, Build Authority & Generate Inbound Leads',
    metaDesc: 'Strategic content marketing services by Techno Amaze. SEO blog writing, whitepapers, case studies, technical articles, and comprehensive topic clusters.',
    heroImg: 'https://images.unsplash.com/photo-1455393570892-651bb0227b02?w=1400&q=85&auto=format&fit=crop',
    kpis: [
      { num: '3.8x', label: 'Inbound Lead Generation Increase' },
      { num: '100%', label: 'Human-Written, E-E-A-T Compliant' },
      { num: '65%+', label: 'Organic Search Ranking Rate' },
      { num: '500+', label: 'Long-Form Articles & Guides Published' }
    ],
    overview: {
      headline: 'Educating Your Customers & Establishing Uncontested Industry Authority',
      text: 'In the modern B2B and consumer landscape, buyers research extensively before making a purchasing decision. Techno Amaze crafts authoritative, data-backed content marketing strategies that position your brand as the definitive industry thought leader. From in-depth SEO blog guides and technical whitepapers to compelling case studies, our content drives organic search traffic and nurtures high-ticket buyers.',
      challenges: [
        'Publishing generic, low-value content that fails to rank on Google or engage readers',
        'Lack of consistent writing bandwidth within internal teams leading to abandoned blogs',
        'Content that gets traffic but fails to convert readers into qualified leads',
        'AI-generated spam content suffering from Google helpful content ranking penalties'
      ],
      solutions: [
        'Original, deeply researched content written by domain subject-matter experts',
        'Strategic topic cluster architecture establishing topical authority in Google’s eyes',
        'Conversion-engineered content featuring inline lead magnets, callouts, and clear next steps',
        'Strict adherence to Google E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)'
      ]
    },
    capabilities: [
      { icon: 'fa-newspaper', title: 'SEO Blog Posts & Pillar Guides', desc: 'Comprehensive, long-form articles (2,000+ words) answering key customer questions and dominating Google rankings.', deliverable: 'Turnkey, formatted articles with custom graphics and meta tags' },
      { icon: 'fa-file-pdf', title: 'Whitepapers & Industry Reports', desc: 'Authoritative gated research reports and whitepapers designed to capture enterprise B2B executive leads.', deliverable: 'Professionally designed PDF whitepaper with landing page' },
      { icon: 'fa-trophy', title: 'Customer Case Studies & Success Stories', desc: 'Compelling challenge-solution-result case studies showcasing your real-world client wins and metrics.', deliverable: 'Customer story published on website and formatted as sales PDF' },
      { icon: 'fa-envelope-open-text', title: 'Email Newsletters & Drip Campaigns', desc: 'Engaging, insightful email newsletters that nurture subscribers and maintain high open rates.', deliverable: 'Weekly/bi-weekly newsletter copy with custom layout templates' },
      { icon: 'fa-cubes-stacked', title: 'Topic Cluster & Content Hubs', desc: 'Interlinked content hubs that signal deep topical authority to search engines and keep visitors on-site.', deliverable: 'Content architecture strategy with internal linking graph' },
      { icon: 'fa-arrows-rotate', title: 'Content Repurposing & Multi-Channel Distribution', desc: 'Transforming one long-form pillar article into LinkedIn carousels, Twitter threads, and video scripts.', deliverable: 'Multi-platform content distribution package' }
    ],
    techStack: [
      { cat: 'SEO & Research Tools', items: ['SurferSEO', 'Clearscope', 'Ahrefs', 'SEMrush', 'Grammarly Business'] },
      { cat: 'CMS & Publishing', items: ['WordPress', 'Webflow', 'Ghost', 'Notion', 'Google Docs'] },
      { cat: 'Design & Visuals', items: ['Figma', 'Canva Pro', 'Adobe InDesign'] }
    ],
    methodology: [
      { step: '01', title: 'Audience Pain Point & Search Intent Research', desc: 'Interviewing stakeholders, reviewing search trends, and identifying exact customer questions.' },
      { step: '02', title: 'Editorial Calendar & Topic Cluster Mapping', desc: 'Structuring monthly content themes, target keywords, word counts, and distribution channels.' },
      { step: '03', title: 'Expert Writing & Technical Review', desc: 'Crafting deep, engaging drafts enriched with original data, real examples, and expert quotes.' },
      { step: '04', title: 'Visual Design & On-Page SEO Optimization', desc: 'Designing custom infographics, adding schema markup, optimizing headings, and creating meta tags.' },
      { step: '05', title: 'Publishing, Multi-Channel Distribution & Analytics', desc: 'Publishing to your CMS, syndicating across newsletters and social channels, and tracking leads.' }
    ],
    useCases: [
      { industry: 'B2B SaaS & Cloud Tech', title: 'Technical Topic Cluster SEO Hub', desc: 'Published 24 in-depth cloud architecture articles, driving 85,000 monthly organic visits and 280+ software trials.' },
      { industry: 'Cybersecurity Firm', title: 'Enterprise Threat Report Whitepaper', desc: 'Authored and designed annual cybersecurity threat report, capturing 1,200+ qualified enterprise CISO leads.' },
      { industry: 'FinTech Platform', title: 'Educational Investing Blog & Guides', desc: 'Built comprehensive personal finance content hub that achieved #1 rankings for 60+ commercial keywords.' },
      { industry: 'Healthcare & Wellness', title: 'Medical Patient Education Center', desc: 'Created medically reviewed patient symptom guides that increased website organic traffic by 420% in 9 months.' }
    ],
    faqs: [
      { q: 'Is your content written by real humans or generated by AI?', a: 'All our content is 100% written and edited by experienced human content strategists and domain experts, adhering strictly to Google E-E-A-T and helpful content guidelines for maximum ranking power.' },
      { q: 'How does content marketing generate actual sales leads?', a: 'We engineer content with strategic conversion points: embedded lead magnets (calculators, checklists, whitepapers), case study proof, and contextual calls-to-action that guide readers to book a consultation.' },
      { q: 'Do you handle uploading and formatting articles on our CMS?', a: 'Yes! We format articles directly in your CMS (WordPress, Webflow, Ghost, custom), configure metadata, insert custom graphics, and optimize internal links for complete turnkey delivery.' },
      { q: 'How do you ensure the content matches our unique brand voice?', a: 'During onboarding, we build a customized Brand Voice & Style Guide documenting your preferred terminology, tone, target audience personas, and formatting rules.' }
    ]
  },

  // 23. Email Marketing
  {
    slug: 'email-marketing',
    title: 'Email Marketing',
    category: 'Retention & Revenue',
    categoryIcon: 'fa-envelope-open-text',
    accentColor: '#1d3557',
    tagline: 'Automated Lifecycle Email Sequences That Nurture Leads & Drive Repeat Sales',
    metaDesc: 'Strategic email marketing and automation services by Techno Amaze. Klaviyo, HubSpot, Mailchimp, automated drip campaigns, welcome flows, and newsletter design.',
    heroImg: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1400&q=85&auto=format&fit=crop',
    kpis: [
      { num: '38:1', label: 'Average Email Marketing ROI' },
      { num: '42%+', label: 'Average Email Open Rate' },
      { num: '99.2%', label: 'Inbox Deliverability Rate' },
      { num: '10M+', label: 'Automated Emails Delivered' }
    ],
    overview: {
      headline: 'The Highest-ROI Direct Marketing Channel in Your Growth Arsenal',
      text: 'Social media algorithms and ad costs fluctuate, but your email list is an owned marketing asset that delivers direct, predictable revenue. Techno Amaze designs, writes, and automates high-converting email marketing campaigns using Klaviyo, HubSpot, ActiveCampaign, and Mailchimp. We turn casual subscribers into loyal paying customers through behavioral automation, segmentation, and personalized messaging.',
      challenges: [
        'Emails landing in Spam or Gmail Promotions folders instead of the primary inbox',
        'Low open rates and poor click-through rates caused by generic, unsegmented broadcasts',
        'Lack of automated email sequences to follow up with leads and recover abandoned carts',
        'Clunky, non-responsive email designs that break on mobile devices'
      ],
      solutions: [
        'Dedicated technical deliverability audits (SPF, DKIM, DMARC, and domain warm-up)',
        'Advanced behavioral segmentation delivering personalized messages based on user actions',
        'Automated multi-step drip flows (Welcome Series, Cart Recovery, Win-Back, Post-Purchase)',
        'Mobile-first responsive HTML email templates designed for maximum readability and clicks'
      ]
    },
    capabilities: [
      { icon: 'fa-bolt', title: 'Automated Lifecycle Drip Flows', desc: 'Trigger-based sequences: Welcome series, abandoned cart reminders, onboarding guides, and customer win-backs.', deliverable: 'Fully automated multi-step email flows with A/B testing' },
      { icon: 'fa-users-gear', title: 'Advanced Audience Segmentation', desc: 'Segmenting subscribers by purchase history, engagement frequency, VIP status, and lead score.', deliverable: 'Granular subscriber segments maximizing relevance and open rates' },
      { icon: 'fa-shield-check', title: 'Deliverability & Domain Health (DMARC/DKIM)', desc: 'Configuring SPF, DKIM, DMARC records, IP reputation management, and spam-trap elimination.', deliverable: 'Optimized domain sender reputation ensuring 99%+ primary inbox placement' },
      { icon: 'fa-pen-nib', title: 'Persuasive Email Copywriting & Design', desc: 'Engaging, story-driven copywriting and custom branded HTML email templates.', deliverable: 'Stunning, mobile-responsive email layouts in your ESP' },
      { icon: 'fa-newspaper', title: 'Weekly & Monthly Newsletter Campaigns', desc: 'End-to-end management of high-value industry newsletters that build long-term subscriber loyalty.', deliverable: 'Consistent, turnkey newsletter broadcasts delivered on schedule' },
      { icon: 'fa-chart-pie', title: 'A/B Testing & Revenue Attribution', desc: 'Testing subject lines, preview text, send times, and CTAs while tracking revenue generated per email.', deliverable: 'Detailed campaign performance and revenue attribution reports' }
    ],
    techStack: [
      { cat: 'Email Service Providers (ESP)', items: ['Klaviyo', 'HubSpot', 'ActiveCampaign', 'Mailchimp', 'Customer.io'] },
      { cat: 'Deliverability & Security', items: ['MXToolbox', 'Postmaster Tools', 'Mail-Tester', 'DMARC Analyzer'] },
      { cat: 'Design & Templates', items: ['Figma', 'Litmus', 'HTML5 / Responsive Email CSS'] }
    ],
    methodology: [
      { step: '01', title: 'Deliverability & Technical Audit', desc: 'Auditing SPF/DKIM/DMARC records, sender reputation, list hygiene, and historical open rates.' },
      { step: '02', title: 'Audience Segmentation & Journey Architecture', desc: 'Defining customer lifecycle stages and mapping essential automated email trigger workflows.' },
      { step: '03', title: 'Template Design & Persuasive Copywriting', desc: 'Authoring engaging email copy and coding mobile-responsive HTML templates in your ESP.' },
      { step: '04', title: 'Flow Automation & Integration', desc: 'Connecting your ESP with your website/e-commerce store and configuring automated triggers.' },
      { step: '05', title: 'A/B Testing & Ongoing Campaign Management', desc: 'Continuously testing subject lines, optimizing send times, and broadcasting weekly newsletters.' }
    ],
    useCases: [
      { industry: 'E-Commerce Storefront', title: 'Klaviyo Automated Revenue Engine', desc: 'Implemented 6 automated flows for online brand, generating 34% of total store revenue on autopilot.' },
      { industry: 'B2B SaaS Platform', title: 'User Onboarding & Trial Conversion Sequence', desc: 'Created 7-day automated product onboarding email sequence that increased free-to-paid trial conversions by 48%.' },
      { industry: 'EdTech & Online Courses', title: 'Student Re-Engagement & Upsell Drip', desc: 'Designed automated course completion flows generating $85,000 in advanced course upsells.' },
      { industry: 'Professional Services', title: 'High-Ticket Nurturing Newsletter', desc: 'Built weekly industry advisory newsletter with a 46% open rate, driving continuous warm inbound consulting retainers.' }
    ],
    faqs: [
      { q: 'How do you ensure our emails don’t go to the Spam or Promotions folder?', a: 'We configure strict technical authentication (SPF, DKIM, DMARC), implement clean domain warm-up schedules, sanitize inactive subscribers, and write high-reputation copy that avoids spam trigger keywords.' },
      { q: 'Which email marketing platform (ESP) do you recommend?', a: 'For e-commerce and Shopify stores, Klaviyo is the gold standard. For B2B and sales pipelines, HubSpot or ActiveCampaign is ideal. We work across all major platforms.' },
      { q: 'How much revenue can automated email flows generate?', a: 'For established e-commerce and SaaS brands, well-optimized automated email flows typically generate 25% to 40% of total company revenue on complete autopilot.' },
      { q: 'Do you write the copy and design the email graphics?', a: 'Yes! Our team handles the entire lifecycle: copywriting, responsive visual design, technical setup in your ESP, segmentation, and weekly broadcast scheduling.' }
    ]
  },

  // 24. Lead Generation
  {
    slug: 'lead-generation',
    title: 'Lead Generation',
    category: 'Sales Pipeline',
    categoryIcon: 'fa-user-plus',
    accentColor: '#C8006E',
    tagline: 'High-Velocity B2B & B2C Lead Generation Engines That Fill Your Sales Pipeline',
    metaDesc: 'B2B and B2C lead generation services by Techno Amaze. Multi-channel outbound funnels, inbound lead capture, LinkedIn outreach, and qualified appointment setting.',
    heroImg: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&q=85&auto=format&fit=crop',
    kpis: [
      { num: '300%+', label: 'Sales Pipeline Growth' },
      { num: '85%+', label: 'Lead Qualification Accuracy' },
      { num: '< 5 Mins', label: 'Automated Lead Response Time' },
      { num: '50k+', label: 'Verified B2B Leads Generated' }
    ],
    overview: {
      headline: 'Filling Your Sales Calendar With Pre-Qualified, High-Intent Decision Makers',
      text: 'Without a steady stream of qualified sales leads, revenue growth stalls. Techno Amaze builds automated, predictable B2B and B2C lead generation engines. Combining targeted cold email infrastructure, LinkedIn executive outreach, high-converting paid ad funnels, and CRM automation, we deliver pre-qualified prospects directly to your sales team ready to buy.',
      challenges: [
        'Sales reps wasting hours prospecting and cold-calling unqualified gatekeepers',
        'High customer acquisition costs on paid ads without qualified lead filtering',
        'Inconsistent sales pipelines leading to unpredictable revenue "feast or famine" cycles',
        'Slow lead follow-up times allowing warm inquiries to go cold and buy from competitors'
      ],
      solutions: [
        'Targeted B2B account-based marketing (ABM) reaching verified C-level decision-makers',
        'High-converting landing pages with multi-step qualification forms filtering out tire-kickers',
        'Automated instant lead routing (SMS/WhatsApp/CRM) notifying sales reps within seconds',
        'Cold email infrastructure with dedicated secondary domains and inbox warm-up systems'
      ]
    },
    capabilities: [
      { icon: 'fa-envelope-circle-check', title: 'Cold Email Outreach Infrastructure', desc: 'Setting up secondary domains, Google Workspace inboxes, automated warm-ups, and personalized email sequences.', deliverable: 'Turnkey cold email engine sending 500+ personalized emails daily' },
      { icon: 'fa-linkedin', title: 'LinkedIn B2B Lead Generation & Outreach', desc: 'Direct outreach campaigns to C-level decision-makers using Sales Navigator, personalized connection requests, and messages.', deliverable: 'Consistent flow of qualified B2B sales meetings booked on your calendar' },
      { icon: 'fa-filter', title: 'High-Converting Lead Funnels', desc: 'Custom landing pages with interactive multi-step qualification quizzes, calculators, and calendars.', deliverable: 'High-converting lead capture funnel with Calendly integration' },
      { icon: 'fa-database', title: 'B2B List Building & Data Verification', desc: 'Prospect list curation with verified direct dials, work emails, LinkedIn URLs, and company tech stacks.', deliverable: 'Clean, 98% accurate B2B prospect lists (CSV/CRM sync)' },
      { icon: 'fa-bolt', title: 'Instant Lead Notification & CRM Sync', desc: 'Automated SMS, WhatsApp, and CRM alerts routing inbound inquiries to sales reps within 60 seconds.', deliverable: 'Real-time multi-channel lead notification pipeline' },
      { icon: 'fa-chart-line', title: 'Lead Scoring & Pipeline Analytics', desc: 'Scoring leads by company size, budget, and engagement to prioritize high-value deals.', deliverable: 'Automated lead scoring matrix inside your CRM' }
    ],
    techStack: [
      { cat: 'Prospecting & Data', items: ['Apollo.io', 'LinkedIn Sales Navigator', 'ZoomInfo', 'Clay.com'] },
      { cat: 'Cold Email Engines', items: ['Instantly.ai', 'Smartlead', 'Lemlist', 'Google Workspace'] },
      { cat: 'CRM & Automation', items: ['HubSpot CRM', 'Zoho CRM', 'Zapier / Make.com', 'Calendly'] },
      { cat: 'Verification & Warmup', items: ['NeverBounce', 'ZeroBounce', 'Warmup Inbox'] }
    ],
    methodology: [
      { step: '01', title: 'Ideal Customer Profile (ICP) Definition', desc: 'Defining exact target titles, company revenues, industries, geographic locations, and tech stacks.' },
      { step: '02', title: 'Outbound Infrastructure & Domain Warmup', desc: 'Setting up dedicated secondary domains, DMARC/DKIM records, and conducting 3-week automated warm-up.' },
      { step: '03', title: 'List Curation & Copywriting Sequence', desc: 'Extracting verified prospect lists and authoring compelling, personalized 4-step email/LinkedIn copy.' },
      { step: '04', title: 'Campaign Launch & Inbox Management', desc: 'Launching campaigns, managing positive response replies, and scheduling calls directly on your calendar.' },
      { step: '05', title: 'Optimization & Pipeline Scaling', desc: 'Refining value propositions based on reply sentiment and scaling outreach volumes safely.' }
    ],
    useCases: [
      { industry: 'Enterprise IT & Software', title: 'B2B Software Development Outreach', desc: 'Generated 58 qualified enterprise discovery calls in 60 days with CTOs and VPs of Engineering across the US.' },
      { industry: 'Real Estate & Commercial', title: 'Commercial Property Investor Leads', desc: 'Captured 140+ accredited real estate investor leads with high-intent interactive qualification funnels.' },
      { industry: 'Corporate Financial Services', title: 'CFO Tax & Audit Advisory Campaign', desc: 'Delivered $1.2M in qualified pipeline value targeting mid-market CFOs via personalized LinkedIn campaigns.' },
      { industry: 'Logistics & Freight', title: 'Shipper Account Acquisition', desc: 'Built outbound email funnel securing 35 corporate shipping contracts for regional freight logistics carrier.' }
    ],
    faqs: [
      { q: 'How do you ensure cold emails do not harm our primary company domain?', a: 'We never send cold outreach from your primary domain. We purchase and configure dedicated secondary domains (e.g. `getcompany.com`) with isolated SPF, DKIM, and DMARC records to protect your primary domain reputation 100%.' },
      { q: 'How do you qualify leads before they reach our sales team?', a: 'We implement strict qualification criteria (budget, company size, timeline, decision-making authority) in our forms and outreach sequences, ensuring your reps only speak with pre-vetted decision makers.' },
      { q: 'How many sales appointments can we expect each month?', a: 'Depending on your target market size and offer competitiveness, our outbound systems typically generate between 15 to 45+ qualified sales appointments per month.' },
      { q: 'Do you integrate generated leads with our existing CRM?', a: 'Yes! We integrate with HubSpot, Salesforce, Zoho, Pipedrive, and Slack via Zapier/Make to automatically push new leads and appointments into your pipeline in real time.' }
    ]
  },

  // 25. Online Reputation Management (ORM)
  {
    slug: 'online-reputation-management',
    title: 'Online Reputation Management',
    category: 'Brand Defense',
    categoryIcon: 'fa-star-half-stroke',
    accentColor: '#1d3557',
    tagline: 'Protect, Repair & Elevate Your Digital Brand Reputation & Customer Reviews',
    metaDesc: 'Professional Online Reputation Management (ORM) services by Techno Amaze. Google review generation, negative content suppression, crisis management, and brand sentiment monitoring.',
    heroImg: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1400&q=85&auto=format&fit=crop',
    kpis: [
      { num: '4.8+ ★', label: 'Average Target Google Review Rating' },
      { num: '90%+', label: 'Negative Search Result Suppression Rate' },
      { num: '24/7', label: 'Real-Time Brand Sentiment Monitoring' },
      { num: '80+', label: 'Brand Reputations Repaired & Elevated' }
    ],
    overview: {
      headline: 'Building Unshakable Trust, 5-Star Ratings & Positive Search Presence',
      text: 'Before doing business with you, prospective clients and partners Google your brand name. Unfair 1-star reviews, negative forum threads, or critical press can destroy customer trust in seconds. Techno Amaze provides comprehensive Online Reputation Management (ORM) services. We monitor your brand sentiment 24/7, suppress defamatory search results, generate genuine 5-star customer reviews, and protect executive reputations.',
      challenges: [
        'Unfair, fake, or malicious 1-star reviews damaging Google Maps and Trustpilot ratings',
        'Negative articles or complaint forums ranking on Page 1 when people search your company name',
        'Lack of an automated system to consistently collect 5-star reviews from happy clients',
        'Executive or founder reputational crises spilling over into business sales'
      ],
      solutions: [
        'Automated review generation funnels capturing 5-star ratings via automated SMS/Email requests',
        'Strategic reverse SEO suppressing defamatory links off Google Page 1 with positive authoritative assets',
        '24/7 brand monitoring alerting you instantly to new brand mentions across the web and social media',
        'Legal review dispute submissions removing policy-violating and fake defamatory reviews'
      ]
    },
    capabilities: [
      { icon: 'fa-star', title: 'Automated 5-Star Review Generation', desc: 'Automated SMS & email review request funnels prompting happy customers to leave 5-star reviews on Google & Trustpilot.', deliverable: 'Continuous stream of genuine 5-star reviews' },
      { icon: 'fa-arrow-down-wide-short', title: 'Negative Search Result Suppression', desc: 'Publishing high-authority digital assets (interviews, press releases, profiles) to push negative links off Google Page 1.', deliverable: 'Page 1 Google search dominance with positive, controlled assets' },
      { icon: 'fa-gavel', title: 'Fake Review Removal & Policy Disputes', desc: 'Formulating legal and platform policy dispute appeals to remove fake, spam, and defamatory Google reviews.', deliverable: 'Removal of policy-violating reviews from public platforms' },
      { icon: 'fa-tower-broadcast', title: '24/7 Brand Sentiment & Web Monitoring', desc: 'Real-time alerts whenever your brand, executive names, or products are mentioned across news, Reddit, and social media.', deliverable: '24/7 brand sentiment alert dashboard' },
      { icon: 'fa-shield-halved', title: 'Executive & Founder Reputation Management', desc: 'Building personal authority websites, verified knowledge panels, and curated Forbes/LinkedIn thought leadership.', deliverable: 'Prestigious executive personal branding suite' },
      { icon: 'fa-life-ring', title: 'PR Crisis Management & Response Strategy', desc: 'Rapid response PR statements, crisis containment messaging, and positive media placement campaigns.', deliverable: 'Immediate crisis response and public relations strategy' }
    ],
    techStack: [
      { cat: 'Reputation & Monitoring', items: ['Brand24', 'Mention', 'Google Alerts', 'ReviewTrackers', 'Birdeye'] },
      { cat: 'Digital PR & Press', items: ['PR Newswire', 'BusinessWire', 'HARO', 'Medium'] },
      { cat: 'Review Platforms', items: ['Google Business Profile', 'Trustpilot', 'Glassdoor', 'Clutch.co', 'G2'] }
    ],
    methodology: [
      { step: '01', title: 'Reputation Audit & Sentiment Analysis', desc: 'Auditing Google search Page 1-3, review platforms, forums, and social sentiment for all brand keywords.' },
      { step: '02', title: 'Review Funnel Deployment & Dispute Filing', desc: 'Launching automated 5-star review request flows and filing policy disputes on fake 1-star reviews.' },
      { step: '03', title: 'Positive Asset Creation & Reverse SEO', desc: 'Building and publishing high-authority profiles, press releases, and interviews to outrank negative links.' },
      { step: '04', title: '24/7 Real-Time Listening & Response', desc: 'Instrumenting Brand24 trackers to catch negative mentions and coordinate instant mitigation.' },
      { step: '05', title: 'Long-Term Brand Defense & Scorecard Review', desc: 'Delivering monthly sentiment reports and maintaining 4.8+ star ratings across all public platforms.' }
    ],
    useCases: [
      { industry: 'Healthcare & Medical Clinics', title: 'Google Maps Review Rating Turnaround', desc: 'Lifted clinic rating from 3.2 to 4.9 stars with 450+ verified patient reviews, boosting new appointments by 60%.' },
      { industry: 'B2B Enterprise SaaS', title: 'Glassdoor & G2 Review Growth', desc: 'Overcame legacy negative reviews by generating 85+ authentic 5-star reviews on G2 and Clutch.co.' },
      { industry: 'High-Net-Worth Founder', title: 'Executive Google Page 1 Cleanup', desc: 'Suppressed defamatory outdated news links to Page 4 of Google with verified executive authority websites and digital PR.' },
      { industry: 'Consumer Financial Services', title: 'Crisis Management & Trust Rebuild', desc: 'Managed online crisis response and generated 300+ positive customer video testimonials, restoring buyer trust.' }
    ],
    faqs: [
      { q: 'Can you actually delete negative Google reviews?', a: 'If a negative review violates Google’s Prohibited and Restricted Content policies (e.g. fake review, hate speech, competitor conflict of interest, harassment), we file formal evidence-backed dispute requests to get it permanently removed.' },
      { q: 'How does Negative Content Suppression (Reverse SEO) work?', a: 'We create and rank high-authority, positive digital assets (press releases, corporate wikis, podcast interviews, executive profiles) that naturally push negative or outdated links down to Page 2, 3, or beyond where less than 1% of searchers look.' },
      { q: 'How do you collect reviews without annoying our customers?', a: 'We implement smart, automated review funnels that send a friendly, 1-click SMS or email request immediately after a successful transaction or service milestone, making review submission effortless.' },
      { q: 'Is Online Reputation Management confidential?', a: 'Yes, 100%. All ORM and crisis management engagements are conducted under strict non-disclosure agreements (NDAs) to protect your brand privacy.' }
    ]
  }
];

// Helper to generate HTML for a service page
function generateServiceHTML(svc) {
  return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${svc.title} | Techno Amaze</title>
  <meta name="description" content="${svc.metaDesc}">
  <meta name="keywords" content="${svc.title}, ${svc.category}, IT services, Techno Amaze, digital solutions">

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@500;600;700;800;900&display=swap"
    rel="stylesheet">

  <!-- FontAwesome 6 -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

  <!-- Core CSS -->
  <link rel="stylesheet" href="../css/style.css">

  <!-- Theme Script (Zero-FOUC) -->
  <script>
    (function () {
      var saved = localStorage.getItem('ta-theme') || localStorage.getItem('ta_theme');
      var theme = saved || 'light';
      document.documentElement.setAttribute('data-theme', theme);
    })();
  </script>
</head>

<body>

  <!-- ══════════════════════════ TOPBAR ══════════════════════════ -->
  <div id="ta-topbar">
    <div class="ta-topbar-inner">
      <div class="ta-topbar-left">
        <span class="ta-topbar-item">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11z" />
            <circle cx="12" cy="10" r="2.5" />
          </svg>
          30 Commercial Road Fratton, Australia
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

  <!-- ══════════════════════════ HEADER ══════════════════════════ -->
  <header id="ta-header">
    <div class="ta-nav-inner" id="ta-nav-inner">
      <a href="../index.html" class="ta-logo" aria-label="Techno Amaze home">
        <img src="https://technoamaze.technoamaze.in/wp-content/uploads/2026/07/cropped-01-1-300x214-removebg-preview-1.png" alt="Techno Amaze Logo"
          onerror="this.onerror=null;this.style.display='none';this.parentElement.insertAdjacentHTML('beforeend','<span style=&quot;font-family:Poppins,sans-serif;font-weight:900;font-size:22px;color:#C8006E&quot;>Techno<span style=&quot;color:#151726&quot;>Amaze</span></span>')">
      </a>
      <nav aria-label="Primary navigation">
        <button class="ta-nav-close" id="ta-nav-close" aria-label="Close menu">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
        <div class="ta-nav-menu-wrap">
          <ul class="ta-nav-menu" id="ta-primary-menu">
            <li><a href="../index.html">Home</a></li>
            <li><a href="../about.html">About</a></li>
            <li><a href="../services.html" class="active">Services</a></li>
            <li class="ta-has-dropdown">
              <a href="../industries.html">Industries <i class="fa-solid fa-chevron-down ta-dropdown-arrow"></i></a>
              <ul class="ta-dropdown-menu">
                <li><a href="../industries/healthcare.html"><i class="fa-solid fa-stethoscope"></i> Healthcare &amp; MedTech</a></li>
                <li><a href="../industries/fintech.html"><i class="fa-solid fa-landmark"></i> FinTech &amp; Banking</a></li>
                <li><a href="../industries/ecommerce.html"><i class="fa-solid fa-cart-shopping"></i> E-Commerce &amp; Retail</a></li>
                <li><a href="../industries/edtech.html"><i class="fa-solid fa-graduation-cap"></i> Education &amp; EdTech</a></li>
                <li><a href="../industries/manufacturing.html"><i class="fa-solid fa-industry"></i> Manufacturing &amp; IoT</a></li>
                <li><a href="../industries/realestate.html"><i class="fa-solid fa-building"></i> Real Estate &amp; PropTech</a></li>
                <li><a href="../industries/gaming.html"><i class="fa-solid fa-gamepad"></i> Gaming &amp; Entertainment</a></li>
                <li><a href="../industries/logistics.html"><i class="fa-solid fa-truck-fast"></i> Logistics &amp; Supply Chain</a></li>
                <li><a href="../industries/travel.html"><i class="fa-solid fa-plane"></i> Travel &amp; Hospitality</a></li>
                <li><a href="../industries/legal.html"><i class="fa-solid fa-scale-balanced"></i> Legal &amp; Compliance</a></li>
              </ul>
            </li>
            <li><a href="../products.html">Products</a></li>
            <li><a href="../contact.html">Contact</a></li>
          </ul>
        </div>
      </nav>
      <div class="ta-nav-actions">
        <a href="#ta-contact" class="ta-btn-cta">Get Quote</a>
        <button class="ta-search-toggle" id="ta-search-toggle" aria-label="Search" aria-expanded="false" aria-controls="ta-search-panel">
          <svg class="icon-search" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>
          <svg class="icon-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
        <span class="ta-nav-divider" aria-hidden="true"></span>
      </div>
      <button class="ta-menu-toggle" id="ta-menu-toggle" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
      <div class="ta-call-block">
        <div class="ta-call-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.5a2 2 0 0 1 2-2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
        </div>
        <div class="ta-call-text">
          <p>Call Anytime</p>
          <a href="tel:+917020995651">+91 70209 95651</a>
        </div>
      </div>
    </div>

    <!-- Live Search Panel -->
    <div class="ta-search-panel" id="ta-search-panel" aria-hidden="true">
      <div class="ta-search-panel-inner">
        <form class="ta-search-form" id="ta-search-form" action="#" role="search">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>
          <input type="search" id="ta-search-input" placeholder="Search products, services, features..." autocomplete="off">
          <button type="submit" class="ta-search-submit">Search</button>
        </form>
        <div class="ta-search-results" id="ta-search-results"></div>
      </div>
    </div>
  </header>

  <!-- ══════════════════════════ 1. HERO SECTION ══════════════════════════ -->
  <section class="sp-hero" style="background:linear-gradient(135deg, var(--ta-surface) 0%, var(--ta-card-bg) 100%);">
    <div class="sp-hero-grid">
      <div>
        <nav style="display:flex;align-items:center;gap:8px;font-size:13px;color:var(--ta-muted);margin-bottom:16px;" aria-label="Breadcrumb">
          <a href="../index.html" style="color:var(--ta-muted);transition:color .2s;">Home</a>
          <span><i class="fa-solid fa-chevron-right" style="font-size:10px;"></i></span>
          <a href="../services.html" style="color:var(--ta-muted);transition:color .2s;">Services</a>
          <span><i class="fa-solid fa-chevron-right" style="font-size:10px;"></i></span>
          <span style="color:var(--ta-accent);font-weight:600;">${svc.title}</span>
        </nav>

        <span class="ta-eyebrow" style="margin-bottom:18px;">
          <i class="fa-solid ${svc.categoryIcon}" style="color:${svc.accentColor};"></i> ${svc.category}
        </span>
        <h1 class="ta-section-title" style="font-size:clamp(30px,3.8vw,52px);line-height:1.2;margin-bottom:20px;">
          ${svc.title.split(' ')[0]} <span class="ta-highlight-text">${svc.title.split(' ').slice(1).join(' ')}</span>
        </h1>
        <p class="ta-section-desc" style="font-size:clamp(15px,1.1vw,17px);margin-bottom:32px;max-width:580px;line-height:1.75;">
          ${svc.tagline}. We combine deep domain expertise, cutting-edge technology stacks, and agile methodologies to deliver measurable business ROI.
        </p>
        <div class="sp-btn-group">
          <a href="#ta-contact" class="ta-btn ta-btn-primary" style="padding:16px 32px;">
            <i class="fa-solid fa-paper-plane"></i> Get Free Consultation
          </a>
          <a href="#capabilities" class="ta-btn ta-btn-dark" style="padding:16px 28px;">
            <i class="fa-solid fa-list-check"></i> Explore Capabilities
          </a>
        </div>
      </div>

      <div>
        <div style="position:relative;border-radius:24px;overflow:hidden;box-shadow:0 20px 50px rgba(0,0,0,0.15);border:1px solid var(--ta-border);">
          <img src="${svc.heroImg}" alt="${svc.title}" style="width:100%;height:380px;object-fit:cover;display:block;">
          <div style="position:absolute;inset:0;background:linear-gradient(to top, rgba(15,16,27,0.85) 0%, transparent 60%);"></div>
          <div style="position:absolute;bottom:24px;left:24px;right:24px;color:#ffffff;">
            <span style="padding:4px 12px;background:rgba(200,0,110,0.3);color:#ff79b8;border-radius:20px;font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">Enterprise Grade</span>
            <h3 style="font-size:20px;font-weight:700;margin:8px 0 4px;color:#ffffff;">${svc.title}</h3>
            <p style="font-size:13px;opacity:0.85;margin:0;">Delivering scalable, secure, and battle-tested digital solutions for global enterprises.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ══════════════════════════ 2. KPI / METRICS STRIP ══════════════════════════ -->
  <section style="background:var(--ta-accent);padding:32px 20px;color:#ffffff;">
    <div class="sp-grid-4" style="max-width:var(--ta-container);margin:0 auto;text-align:center;">
      ${svc.kpis.map(kpi => `
      <div>
        <div style="font-family:var(--ta-font-head);font-size:32px;font-weight:900;">${kpi.num}</div>
        <div style="font-size:13px;opacity:0.9;">${kpi.label}</div>
      </div>`).join('')}
    </div>
  </section>

  <!-- ══════════════════════════ 3. EXECUTIVE OVERVIEW & PROBLEM/SOLUTION ══════════════════════════ -->
  <section style="padding:clamp(60px,7vw,100px) clamp(16px,4vw,60px);background:var(--ta-card-bg);">
    <div style="max-width:var(--ta-container);margin:0 auto;">
      <div class="sp-grid-2">
        <div>
          <span class="ta-eyebrow">Strategic Executive Overview</span>
          <h2 class="ta-section-title" style="margin-top:10px;margin-bottom:20px;font-size:clamp(26px,3vw,38px);">
            ${svc.overview.headline}
          </h2>
          <p style="color:var(--ta-muted);font-size:16px;line-height:1.8;margin-bottom:24px;">
            ${svc.overview.text}
          </p>
        </div>

        <div style="background:var(--ta-surface);padding:32px;border-radius:20px;border:1px solid var(--ta-border);">
          <h3 style="font-family:var(--ta-font-head);font-size:18px;font-weight:700;color:var(--ta-ink);margin-bottom:16px;display:flex;align-items:center;gap:10px;">
            <i class="fa-solid fa-triangle-exclamation" style="color:#e63946;"></i> Challenges Solved
          </h3>
          <ul style="margin-bottom:24px;display:flex;flex-direction:column;gap:10px;">
            ${svc.overview.challenges.map(c => `
            <li style="font-size:14px;color:var(--ta-muted);display:flex;align-items:flex-start;gap:10px;">
              <i class="fa-solid fa-xmark" style="color:#e63946;margin-top:4px;flex-shrink:0;"></i>
              <span>${c}</span>
            </li>`).join('')}
          </ul>

          <h3 style="font-family:var(--ta-font-head);font-size:18px;font-weight:700;color:var(--ta-ink);margin-bottom:16px;display:flex;align-items:center;gap:10px;">
            <i class="fa-solid fa-circle-check" style="color:#06d6a0;"></i> Techno Amaze Solution
          </h3>
          <ul style="display:flex;flex-direction:column;gap:10px;">
            ${svc.overview.solutions.map(s => `
            <li style="font-size:14px;color:var(--ta-ink);display:flex;align-items:flex-start;gap:10px;">
              <i class="fa-solid fa-check" style="color:#06d6a0;margin-top:4px;flex-shrink:0;"></i>
              <span>${s}</span>
            </li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- ══════════════════════════ 4. CORE CAPABILITIES ══════════════════════════ -->
  <section id="capabilities" style="padding:clamp(60px,7vw,100px) clamp(16px,4vw,60px);background:var(--ta-surface);">
    <div style="max-width:var(--ta-container);margin:0 auto;">
      <div style="text-align:center;max-width:720px;margin:0 auto 60px;">
        <span class="ta-eyebrow">Comprehensive Capabilities</span>
        <h2 class="ta-section-title" style="margin-top:10px;">What We Deliver in ${svc.title}</h2>
        <p class="ta-section-desc" style="margin-top:12px;">End-to-end specialized deliverables engineered to elevate your technical capabilities and drive sustainable growth.</p>
      </div>

      <div class="sp-grid-3">
        ${svc.capabilities.map((cap, i) => `
        <div class="sp-feature-card">
          <div style="width:54px;height:54px;border-radius:14px;background:rgba(200,0,110,0.12);color:var(--ta-accent);display:flex;align-items:center;justify-content:center;font-size:24px;margin-bottom:20px;">
            <i class="fa-solid ${cap.icon}"></i>
          </div>
          <h3 style="font-family:var(--ta-font-head);font-size:20px;font-weight:700;color:var(--ta-ink);margin-bottom:12px;">${cap.title}</h3>
          <p style="color:var(--ta-muted);font-size:14px;line-height:1.7;margin-bottom:18px;">${cap.desc}</p>
          <div style="padding-top:14px;border-top:1px dashed var(--ta-border);font-size:12px;color:var(--ta-accent);font-weight:600;">
            <i class="fa-solid fa-box-archive"></i> Deliverable: ${cap.deliverable}
          </div>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <!-- ══════════════════════════ 5. TECHNOLOGY STACK ══════════════════════════ -->
  <section style="padding:clamp(60px,7vw,100px) clamp(16px,4vw,60px);background:var(--ta-card-bg);">
    <div style="max-width:var(--ta-container);margin:0 auto;">
      <div style="text-align:center;max-width:720px;margin:0 auto 50px;">
        <span class="ta-eyebrow">Enterprise Tech Stack</span>
        <h2 class="ta-section-title" style="margin-top:10px;">Modern Tools &amp; Frameworks We Master</h2>
        <p class="ta-section-desc" style="margin-top:12px;">We build on industry-standard, robust technologies that ensure long-term stability, security, and developer velocity.</p>
      </div>

      <div class="sp-grid-${svc.techStack.length <= 3 ? svc.techStack.length : 4}" style="gap:24px;">
        ${svc.techStack.map(stack => `
        <div style="background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:16px;padding:24px;">
          <h3 style="font-family:var(--ta-font-head);font-size:16px;font-weight:700;color:var(--ta-ink);margin-bottom:16px;display:flex;align-items:center;gap:8px;">
            <i class="fa-solid fa-layer-group" style="color:var(--ta-accent);font-size:14px;"></i> ${stack.cat}
          </h3>
          <div style="display:flex;flex-wrap:wrap;gap:8px;">
            ${stack.items.map(item => `
            <span style="background:var(--ta-card-bg);border:1px solid var(--ta-border);color:var(--ta-ink);font-size:12px;font-weight:500;padding:6px 12px;border-radius:20px;">
              ${item}
            </span>`).join('')}
          </div>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <!-- ══════════════════════════ 6. DELIVERY METHODOLOGY (HOW WE DELIVER) ══════════════════════════ -->
  <section style="padding:clamp(60px,7vw,100px) clamp(16px,4vw,60px);background:var(--ta-surface);">
    <div style="max-width:var(--ta-container);margin:0 auto;">
      <div style="text-align:center;max-width:720px;margin:0 auto 60px;">
        <span class="ta-eyebrow">Proven Execution Framework</span>
        <h2 class="ta-section-title" style="margin-top:10px;">How We Deliver ${svc.title}</h2>
        <p class="ta-section-desc" style="margin-top:12px;">A structured 5-step delivery lifecycle ensuring transparency, rapid milestones, and zero regressions.</p>
      </div>

      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:24px;">
        ${svc.methodology.map(m => `
        <div style="background:var(--ta-card-bg);border:1px solid var(--ta-border);border-radius:18px;padding:28px 22px;position:relative;">
          <div style="font-family:var(--ta-font-head);font-size:32px;font-weight:900;color:var(--ta-accent);opacity:0.8;margin-bottom:12px;">${m.step}</div>
          <h3 style="font-family:var(--ta-font-head);font-size:18px;font-weight:700;color:var(--ta-ink);margin-bottom:10px;">${m.title}</h3>
          <p style="font-size:13px;color:var(--ta-muted);line-height:1.7;">${m.desc}</p>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <!-- ══════════════════════════ 7. INDUSTRY USE CASES ══════════════════════════ -->
  <section style="padding:clamp(60px,7vw,100px) clamp(16px,4vw,60px);background:var(--ta-card-bg);">
    <div style="max-width:var(--ta-container);margin:0 auto;">
      <div style="text-align:center;max-width:720px;margin:0 auto 60px;">
        <span class="ta-eyebrow">Real-World Application</span>
        <h2 class="ta-section-title" style="margin-top:10px;">Industry Use Cases &amp; Success Stories</h2>
        <p class="ta-section-desc" style="margin-top:12px;">How our ${svc.title} expertise solves critical sector-specific problems.</p>
      </div>

      <div class="sp-grid-2" style="gap:28px;">
        ${svc.useCases.map(uc => `
        <div style="background:var(--ta-surface);border:1px solid var(--ta-border);border-radius:18px;padding:32px;border-left:4px solid var(--ta-accent);">
          <span style="display:inline-block;padding:4px 12px;background:rgba(200,0,110,0.12);color:var(--ta-accent);border-radius:20px;font-size:12px;font-weight:700;margin-bottom:14px;text-transform:uppercase;letter-spacing:0.5px;">
            ${uc.industry}
          </span>
          <h3 style="font-family:var(--ta-font-head);font-size:20px;font-weight:700;color:var(--ta-ink);margin-bottom:12px;">${uc.title}</h3>
          <p style="font-size:14px;color:var(--ta-muted);line-height:1.75;">${uc.desc}</p>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <!-- ══════════════════════════ 8. FREQUENTLY ASKED QUESTIONS (FAQ) ══════════════════════════ -->
  <section style="padding:clamp(60px,7vw,100px) clamp(16px,4vw,60px);background:var(--ta-surface);">
    <div style="max-width:860px;margin:0 auto;">
      <div style="text-align:center;margin-bottom:50px;">
        <span class="ta-eyebrow">Got Questions?</span>
        <h2 class="ta-section-title" style="margin-top:10px;">Frequently Asked Questions</h2>
        <p class="ta-section-desc" style="margin-top:12px;">Common questions about our ${svc.title} process, pricing models, and timelines.</p>
      </div>

      <div style="display:flex;flex-direction:column;gap:16px;">
        ${svc.faqs.map(faq => `
        <div style="background:var(--ta-card-bg);border:1px solid var(--ta-border);border-radius:16px;padding:24px;">
          <h3 style="font-family:var(--ta-font-head);font-size:17px;font-weight:700;color:var(--ta-ink);margin-bottom:10px;display:flex;align-items:center;gap:10px;">
            <i class="fa-solid fa-circle-question" style="color:var(--ta-accent);"></i> ${faq.q}
          </h3>
          <p style="color:var(--ta-muted);font-size:14px;line-height:1.75;margin:0;padding-left:26px;">${faq.a}</p>
        </div>`).join('')}
      </div>
    </div>
  </section>

  <!-- ══════════════════════════ 9. CONTACT SECTION (HOME REPLICA) ══════════════════════════ -->
  <section id="ta-contact" class="ta-section-reveal" aria-labelledby="contact-heading" style="padding-top:40px;">
    <h2 id="contact-heading" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)">Contact Techno Amaze</h2>
    <div class="ta-contact-img" data-reveal="left">
      <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80" alt="Team collaborating">
    </div>
    <div class="ta-contact-strip">
      <div class="ta-contact-strip-inner">
        <h3 class="ta-contact-strip-heading">Request a Consultation</h3>
        <span class="ta-contact-strip-text">Get Started with ${svc.title}</span>
      </div>
    </div>
    <div class="ta-contact-right" data-reveal="right">
      <div class="ta-contact-card">
        <form id="ta-home-contact-form" novalidate>
          <input type="hidden" name="source" value="${svc.title} Landing Page">
          <input type="text" name="_honey" class="ta-form-honey" tabindex="-1" autocomplete="off" aria-hidden="true">
          <input class="ta-contact-field" type="text" name="name" placeholder="Your Name" aria-label="Your Name" autocomplete="name" required>
          <input class="ta-contact-field" type="email" name="email" placeholder="Email Address" aria-label="Email Address" autocomplete="email" required>
          <input class="ta-contact-field" type="tel" name="phone" placeholder="Phone Number" aria-label="Phone Number" autocomplete="tel" required>
          <input class="ta-contact-field" type="text" name="subject" value="Inquiry: ${svc.title}" placeholder="Subject" aria-label="Subject" required>
          <textarea class="ta-contact-field ta-contact-textarea" name="message" placeholder="Describe your project requirements, timeline, or questions..." aria-label="Message" required></textarea>
          <button type="submit" class="ta-contact-submit" id="ta-home-submit-btn">Send Inquiry &amp; Get Quote &#8594;</button>
        </form>
      </div>
    </div>
  </section>

  <!-- ══════════════════════════ FOOTER ══════════════════════════ -->
  <footer id="ta-footer" aria-label="Site footer">
    <div class="ta-footer-grid">
      <div class="ta-footer-brand">
        <div class="ta-logo" style="padding:0;margin:0 0 18px">
          <img src="https://technoamaze.technoamaze.in/wp-content/uploads/2026/07/cropped-01-1-300x214-removebg-preview-1.png" alt="Techno Amaze" style="height:50px;width:auto;filter:brightness(0) invert(1)" onerror="this.style.display='none'">
        </div>
        <p>We design, develop and deliver secure, scalable software that empowers businesses and creates meaningful impact.</p>
        <div class="ta-footer-social">
          <a href="https://facebook.com/" aria-label="Facebook" target="_blank" rel="noopener"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="https://twitter.com/" aria-label="Twitter" target="_blank" rel="noopener"><i class="fa-brands fa-x-twitter"></i></a>
          <a href="https://linkedin.com/" aria-label="LinkedIn" target="_blank" rel="noopener"><i class="fa-brands fa-linkedin-in"></i></a>
          <a href="https://youtube.com/" aria-label="YouTube" target="_blank" rel="noopener"><i class="fa-brands fa-youtube"></i></a>
        </div>
      </div>
      <div class="ta-footer-col">
        <h4>Products</h4>
        <ul>
          <li><a href="../products/seatopro.html">Seato Pro Library SaaS</a></li>
          <li><a href="../products/academy.html">Techno Amaze Academy App</a></li>
          <li><a href="../products.html">All Products</a></li>
        </ul>
      </div>
      <div class="ta-footer-col">
        <h4>Our Services</h4>
        <ul>
          <li><a href="custom-software-development.html">Custom Software Development</a></li>
          <li><a href="website-development.html">Website Development</a></li>
          <li><a href="mobile-app-development.html">Mobile App Development</a></li>
          <li><a href="cloud-services.html">Cloud Services</a></li>
          <li><a href="ai-machine-learning.html">AI &amp; Machine Learning</a></li>
          <li><a href="../services.html">View All Services</a></li>
        </ul>
      </div>
      <div class="ta-footer-col">
        <h4>Contact Info</h4>
        <div class="ta-footer-contact-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>
          30 Commercial Road Fratton, Australia
        </div>
        <div class="ta-footer-contact-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.5a2 2 0 0 1 2-2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
          <a href="tel:+917020995651">+91 70209 95651</a>
        </div>
        <div class="ta-footer-contact-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 5h18v14H3z" /><path d="M3 6l9 7 9-7" /></svg>
          <a href="mailto:info@technoamaze.in">info@technoamaze.in</a>
        </div>
      </div>
    </div>
    <div class="ta-footer-bottom">
      <p>&copy; 2026 <a href="../index.html">Techno Amaze</a>. All rights reserved.</p>
      <p>Designed with &#10084; by <a href="../index.html">Techno Amaze Team</a></p>
    </div>
  </footer>

  <!-- JS -->
  <script src="../js/main.js"></script>
</body>

</html>
`;
}

// Generate all 25 files
let count = 0;
SERVICES.forEach(svc => {
  const filePath = path.join(servicesDir, `${svc.slug}.html`);
  const htmlContent = generateServiceHTML(svc);
  fs.writeFileSync(filePath, htmlContent, 'utf-8');
  count++;
  console.log(`[${count}/${SERVICES.length}] Generated: services/${svc.slug}.html`);
});

console.log(`\nSuccessfully generated ${count} service landing pages in /services/!`);
