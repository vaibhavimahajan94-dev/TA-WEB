# PowerShell Service Generator for Techno Amaze - Ultra Modern Edition
$ErrorActionPreference = "Stop"

$workspaceRoot = Resolve-Path (Join-Path $PSScriptRoot "..")
$servicesDir = Join-Path $workspaceRoot "services"
if (!(Test-Path $servicesDir)) {
    New-Item -ItemType Directory -Path $servicesDir -Force | Out-Null
}

$jsPath = Join-Path $PSScriptRoot "generate_services.js"
$content = Get-Content $jsPath -Raw
$start = $content.IndexOf('const SERVICES = [')
$end = $content.IndexOf('];', $start) + 1
$jsArray = $content.Substring($start + 17, $end - ($start + 17))

# Clean comments
$cleaned = $jsArray -replace '(?m)^\s*//.*$', ''

# Convert JS single-quote strings to valid JSON double-quote strings
$sb = New-Object System.Text.StringBuilder
$i = 0
$len = $cleaned.Length
while ($i -lt $len) {
    $c = $cleaned[$i]
    if ($c -eq "'") {
        $i++
        $str = ""
        while ($i -lt $len -and $cleaned[$i] -ne "'") {
            if ($cleaned[$i] -eq '\') {
                $i++
                $str += '\' + $cleaned[$i]
            } else {
                if ($cleaned[$i] -eq '"') {
                    $str += '\"'
                } else {
                    $str += $cleaned[$i]
                }
            }
            $i++
        }
        $i++
        [void]$sb.Append('"' + $str + '"')
    } else {
        [void]$sb.Append($c)
    }
}
$s = $sb.ToString()
$s = [System.Text.RegularExpressions.Regex]::Replace($s, '(?<=[{\[,]\s*)([a-zA-Z0-9_]+)\s*:', '"$1":')
$s = [System.Text.RegularExpressions.Regex]::Replace($s, ',\s*([}\]])', '$1')

$services = $s | ConvertFrom-Json
Write-Host "Loaded $($services.Count) service definitions."

function Generate-ServiceHTML($svc) {
    # Extract title parts
    $titleWords = $svc.title -split ' '
    $firstWord = $titleWords[0]
    $restWords = ($titleWords[1..($titleWords.Length - 1)]) -join ' '

    # Generate KPIs (Metrics)
    $kpiHtml = ""
    foreach ($k in $svc.kpis) {
        $kpiHtml += @"
        <div class="sp-metric-item">
          <div class="sp-metric-num">$($k.num)</div>
          <div class="sp-metric-label">$($k.label)</div>
        </div>
"@
    }

    # Challenges list
    $challengesHtml = ""
    foreach ($c in $svc.overview.challenges) {
        $challengesHtml += @"
            <li style="font-size:14px;color:var(--ta-muted);display:flex;align-items:flex-start;gap:10px;">
              <span style="width:20px;height:20px;border-radius:50%;background:rgba(239,68,68,0.1);color:#ef4444;display:flex;align-items:center;justify-content:center;font-size:11px;flex-shrink:0;margin-top:2px;">
                <i class="fa-solid fa-xmark"></i>
              </span>
              <span style="line-height:1.6;">$c</span>
            </li>
"@
    }

    # Solutions list
    $solutionsHtml = ""
    foreach ($sol in $svc.overview.solutions) {
        $solutionsHtml += @"
            <li style="font-size:14px;color:var(--ta-ink);display:flex;align-items:flex-start;gap:10px;">
              <span style="width:20px;height:20px;border-radius:50%;background:rgba(16,185,129,0.12);color:#10b981;display:flex;align-items:center;justify-content:center;font-size:11px;flex-shrink:0;margin-top:2px;">
                <i class="fa-solid fa-check"></i>
              </span>
              <span style="line-height:1.6;font-weight:500;">$sol</span>
            </li>
"@
    }

    # Capabilities Bento Grid
    $capCount = $svc.capabilities.Count
    $capabilitiesHtml = ""
    for ($ci = 0; $ci -lt $capCount; $ci++) {
        $cap = $svc.capabilities[$ci]
        $isFeatured = ($ci -eq 0)
        $featClass = if ($isFeatured) { "sp-bento-card sp-bento-featured" } else { "sp-bento-card" }
        
        $featuredExtra = ""
        if ($isFeatured) {
            $featuredExtra = @"
          <div style="margin: 20px 0 16px; padding: 14px 16px; background: rgba(59, 130, 246, 0.05); border-left: 3px solid #3b82f6; border-radius: 0 10px 10px 0;">
            <div style="font-size: 12px; font-weight: 700; color: #3b82f6; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;">Primary Architecture Focus</div>
            <div style="font-size: 13px; color: var(--ta-ink);">Engineered for maximum scale, sub-second latency, and enterprise-grade fault tolerance.</div>
          </div>
"@
        }

        $capabilitiesHtml += @"
        <div class="$featClass">
          <div>
            <div class="sp-bento-iconbox">
              <i class="fa-solid $($cap.icon)"></i>
            </div>
            <h3 style="font-family:var(--ta-font-head);font-size:19px;font-weight:700;color:var(--ta-ink);margin-bottom:10px;">$($cap.title)</h3>
            <p style="color:var(--ta-muted);font-size:14px;line-height:1.7;margin-bottom:14px;">$($cap.desc)</p>
            $featuredExtra
          </div>
          <div class="sp-deliverable-badge">
            <i class="fa-solid fa-cube" style="color:#3b82f6;"></i> Deliverable: <span style="color:var(--ta-ink);font-weight:600;">$($cap.deliverable)</span>
          </div>
        </div>
"@
    }

    # Connected Process Timeline
    $processHtml = ""
    $stepNum = 1
    foreach ($m in $svc.methodology) {
        $stepStr = if ($stepNum -lt 10) { "0$stepNum" } else { "$stepNum" }
        $processHtml += @"
        <div class="sp-process-node">
          <div class="sp-step-bubble">$stepStr</div>
          <div style="font-size:11px;font-weight:700;text-transform:uppercase;color:#3b82f6;letter-spacing:0.5px;margin-bottom:6px;">$($m.step)</div>
          <h3 style="font-family:var(--ta-font-head);font-size:17px;font-weight:700;color:var(--ta-ink);margin-bottom:10px;">$($m.title)</h3>
          <p style="font-size:13px;color:var(--ta-muted);line-height:1.65;margin-bottom:14px;flex-grow:1;">$($m.desc)</p>
          <div style="padding-top:10px;border-top:1px dashed var(--ta-border);font-size:11px;color:var(--ta-ink);font-weight:600;">
            <i class="fa-solid fa-flag-checkered" style="color:#10b981;"></i> Milestone Sign-off
          </div>
        </div>
"@
        $stepNum++
    }

    # Tech Stack Matrix
    $techStackHtml = ""
    foreach ($stack in $svc.techStack) {
        $itemsHtml = ""
        foreach ($item in $stack.items) {
            $itemsHtml += @"
            <span class="sp-tech-pill">
              <i class="fa-solid fa-microchip" style="font-size:11px;opacity:0.6;"></i> $item
            </span>
"@
        }
        $techStackHtml += @"
        <div class="sp-tech-card">
          <h3 style="font-family:var(--ta-font-head);font-size:16px;font-weight:700;color:var(--ta-ink);margin-bottom:12px;display:flex;align-items:center;gap:10px;">
            <span style="width:32px;height:32px;border-radius:8px;background:rgba(59,130,246,0.1);color:#3b82f6;display:flex;align-items:center;justify-content:center;font-size:14px;">
              <i class="fa-solid fa-layer-group"></i>
            </span>
            $($stack.cat)
          </h3>
          <div class="sp-tech-pill-list">
            $itemsHtml
          </div>
        </div>
"@
    }

    # Industry Use Cases
    $useCasesHtml = ""
    foreach ($uc in $svc.useCases) {
        $industrySlug = ($uc.industry.ToLower() -replace '[^a-z0-9]', '')
        if ($industrySlug -eq 'healthcaremedtech' -or $industrySlug -eq 'healthcare') { $industrySlug = 'healthcare' }
        elseif ($industrySlug -eq 'fintechbanking' -or $industrySlug -eq 'fintech') { $industrySlug = 'fintech' }
        elseif ($industrySlug -eq 'ecommerceretail' -or $industrySlug -eq 'ecommerce') { $industrySlug = 'ecommerce' }
        elseif ($industrySlug -eq 'educationedtech' -or $industrySlug -eq 'edtech') { $industrySlug = 'edtech' }
        elseif ($industrySlug -eq 'manufacturingiot' -or $industrySlug -eq 'manufacturing') { $industrySlug = 'manufacturing' }
        elseif ($industrySlug -eq 'realestateproptech' -or $industrySlug -eq 'realestate') { $industrySlug = 'realestate' }
        elseif ($industrySlug -eq 'gamingentertainment' -or $industrySlug -eq 'gaming') { $industrySlug = 'gaming' }
        elseif ($industrySlug -eq 'logisticssupplychain' -or $industrySlug -eq 'logistics') { $industrySlug = 'logistics' }
        elseif ($industrySlug -eq 'travelhospitality' -or $industrySlug -eq 'travel') { $industrySlug = 'travel' }
        elseif ($industrySlug -eq 'legalcompliance' -or $industrySlug -eq 'legal') { $industrySlug = 'legal' }
        else { $industrySlug = 'healthcare' }

        $useCasesHtml += @"
        <div style="background:var(--ta-card-bg);border:1px solid var(--ta-border);border-radius:20px;padding:32px;position:relative;display:flex;flex-direction:column;justify-content:space-between;transition:transform .3s ease, box-shadow .3s ease;">
          <div>
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
              <span style="display:inline-flex;align-items:center;gap:6px;padding:5px 14px;background:rgba(59,130,246,0.08);color:#3b82f6;border:1px solid rgba(59,130,246,0.2);border-radius:20px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">
                <i class="fa-solid fa-building-circle-check"></i> $($uc.industry)
              </span>
              <a href="../industries/$industrySlug.html" style="font-size:12px;color:var(--ta-muted);font-weight:600;display:inline-flex;align-items:center;gap:4px;transition:color .2s;">
                View Vertical <i class="fa-solid fa-arrow-right" style="font-size:10px;"></i>
              </a>
            </div>
            <h3 style="font-family:var(--ta-font-head);font-size:19px;font-weight:700;color:var(--ta-ink);margin-bottom:12px;">$($uc.title)</h3>
            <p style="font-size:14px;color:var(--ta-muted);line-height:1.75;margin:0;">$($uc.desc)</p>
          </div>
          <div style="margin-top:20px;padding-top:16px;border-top:1px solid var(--ta-border);display:flex;align-items:center;justify-content:space-between;font-size:12px;color:var(--ta-muted);">
            <span><i class="fa-solid fa-chart-line" style="color:#10b981;margin-right:6px;"></i> High ROI Impact</span>
            <span style="color:#10b981;font-weight:700;">Verified Case</span>
          </div>
        </div>
"@
    }

    # Interactive FAQs
    $faqsHtml = ""
    $faqIdx = 0
    foreach ($faq in $svc.faqs) {
        $isOpenClass = if ($faqIdx -eq 0) { "sp-faq-item is-open" } else { "sp-faq-item" }
        $faqsHtml += @"
        <div class="$isOpenClass">
          <button class="sp-faq-btn" type="button" aria-expanded="$($faqIdx -eq 0)">
            <span>$($faq.q)</span>
            <span class="sp-faq-chevron"><i class="fa-solid fa-chevron-down"></i></span>
          </button>
          <div class="sp-faq-content">
            <p style="margin:0;line-height:1.75;">$($faq.a)</p>
          </div>
        </div>
"@
        $faqIdx++
    }

    return @"
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>$($svc.title) | Techno Amaze</title>
  <meta name="description" content="$($svc.metaDesc)">
  <meta name="keywords" content="$($svc.title), $($svc.category), IT services, Techno Amaze, digital solutions">

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

  <!-- ============================== TOPBAR ============================== -->
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

  <!-- ============================== HEADER ============================== -->
  <header id="ta-header">
    <div class="ta-nav-inner" id="ta-nav-inner">
      <a href="../index.html" class="ta-logo" aria-label="Techno Amaze home">
        <img src="https://technoamaze.technoamaze.in/wp-content/uploads/2026/07/cropped-01-1-300x214-removebg-preview-1.png" alt="Techno Amaze Logo"
          onerror="this.onerror=null;this.style.display='none';this.parentElement.insertAdjacentHTML('beforeend','<span style=&quot;font-family:Poppins,sans-serif;font-weight:900;font-size:22px;color:#C8006E&quot;>Techno<span style=&quot;color:#151726&quot;>Amaze</span></span>')">
      </a>
      <nav aria-label="Primary navigation">
        <button class="ta-nav-close" id="ta-nav-close" aria-label="Close menu">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
        <div class="ta-nav-menu-wrap">
          <ul class="ta-nav-menu" id="ta-primary-menu">
            <li><a href="../index.html">Home</a></li>
            <li><a href="../about.html">About</a></li>
            <li class="ta-has-dropdown">
              <a href="../services.html" class="active">Services <i class="fa-solid fa-chevron-down ta-dropdown-arrow"></i></a>
              <ul class="ta-dropdown-menu">
                <li><a href="custom-software-development.html"><i class="fa-solid fa-code"></i> Custom Software Development</a></li>
                <li><a href="website-development.html"><i class="fa-solid fa-globe"></i> Website Development</a></li>
                <li><a href="mobile-app-development.html"><i class="fa-solid fa-mobile-screen"></i> Mobile App Development</a></li>
                <li><a href="ecommerce-development.html"><i class="fa-solid fa-cart-shopping"></i> E-commerce Development</a></li>
                <li><a href="saas-product-development.html"><i class="fa-solid fa-cloud-arrow-up"></i> SaaS Product Development</a></li>
                <li><a href="cloud-services.html"><i class="fa-solid fa-cloud"></i> Cloud &amp; DevOps Services</a></li>
                <li><a href="ai-machine-learning.html"><i class="fa-solid fa-brain"></i> AI &amp; Machine Learning</a></li>
                <li><a href="ui-ux-design.html"><i class="fa-solid fa-pen-nib"></i> UI/UX &amp; Branding Design</a></li>
                <li><a href="cybersecurity-services.html"><i class="fa-solid fa-shield-halved"></i> Cybersecurity Services</a></li>
                <li><a href="digital-marketing.html"><i class="fa-solid fa-chart-line"></i> Digital Marketing &amp; SEO</a></li>
                <li><a href="../services.html" style="font-weight:700;color:var(--ta-accent);border-top:1px solid var(--ta-border);margin-top:4px;padding-top:10px;"><i class="fa-solid fa-arrow-right"></i> View All 25 Services</a></li>
              </ul>
            </li>
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

  <!-- ============================== 1. HERO SECTION ============================== -->
  <section class="sp-hero">
    <div class="sp-hero-ambient-glow"></div>
    <div class="sp-hero-grid">
      <div>
        <nav style="display:flex;align-items:center;gap:8px;font-size:13px;color:var(--ta-muted);margin-bottom:18px;" aria-label="Breadcrumb">
          <a href="../index.html" style="color:var(--ta-muted);transition:color .2s;">Home</a>
          <span><i class="fa-solid fa-chevron-right" style="font-size:10px;"></i></span>
          <a href="../services.html" style="color:var(--ta-muted);transition:color .2s;">Services</a>
          <span><i class="fa-solid fa-chevron-right" style="font-size:10px;"></i></span>
          <span style="color:var(--ta-ink);font-weight:600;">$($svc.title)</span>
        </nav>

        <div class="sp-badge-live">
          <span class="sp-pulse-dot"></span>
          <span>Enterprise Practice &bull; <strong>$($svc.category)</strong></span>
        </div>

        <h1 class="ta-section-title" style="font-size:clamp(32px,3.8vw,54px);line-height:1.15;margin-bottom:18px;letter-spacing:-0.5px;">
          $firstWord <span style="background:linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">$restWords</span>
        </h1>
        <p class="ta-section-desc" style="font-size:clamp(15px,1.1vw,17px);margin-bottom:28px;max-width:580px;line-height:1.75;">
          $($svc.tagline). We engineer resilient, production-ready digital architectures designed to scale seamlessly and accelerate business growth.
        </p>

        <div class="sp-btn-group">
          <a href="#ta-contact" class="ta-btn ta-btn-primary" style="padding:16px 32px;box-shadow:0 10px 25px rgba(200,0,110,0.25);">
            <i class="fa-solid fa-paper-plane"></i> Get Free Consultation
          </a>
          <a href="#capabilities" class="ta-btn ta-btn-dark" style="padding:16px 28px;">
            <i class="fa-solid fa-list-check"></i> Explore Capabilities
          </a>
        </div>

        <div class="sp-trust-pills">
          <span class="sp-trust-pill"><i class="fa-solid fa-shield-halved"></i> ISO 27001 Security</span>
          <span class="sp-trust-pill"><i class="fa-solid fa-bolt"></i> 2-Week Agile Sprints</span>
          <span class="sp-trust-pill"><i class="fa-solid fa-code"></i> 100% IP Ownership</span>
          <span class="sp-trust-pill"><i class="fa-solid fa-headset"></i> 24/7 SLA Guarantee</span>
        </div>
      </div>

      <div>
        <div class="sp-hero-visual-card">
          <img src="$($svc.heroImg)" alt="$($svc.title)" style="width:100%;height:390px;object-fit:cover;display:block;">
          <div style="position:absolute;inset:0;background:linear-gradient(to top, rgba(15,23,42,0.92) 0%, rgba(15,23,42,0.2) 60%, transparent 100%);"></div>
          <div class="sp-hero-floating-stat">
            <div>
              <div style="font-size:11px;text-transform:uppercase;color:#94a3b8;letter-spacing:0.5px;font-weight:700;">Practice Milestone</div>
              <div style="font-size:15px;font-weight:700;color:#ffffff;margin-top:2px;">Enterprise Grade &bull; 99.98% Uptime</div>
            </div>
            <span style="padding:6px 14px;background:#10b981;color:#ffffff;border-radius:20px;font-size:12px;font-weight:700;">Active</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============================== 2. METRICS BANNER ============================== -->
  <section class="sp-metrics-strip">
    <div style="max-width:var(--ta-container);margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:20px;">
      $kpiHtml
    </div>
  </section>

  <!-- ============================== 3. EXECUTIVE OVERVIEW & VALUE PROPOSITION ============================== -->
  <section style="padding:clamp(60px,7vw,100px) clamp(16px,4vw,60px);background:var(--ta-card-bg);">
    <div style="max-width:var(--ta-container);margin:0 auto;">
      <div class="sp-grid-2" style="gap:48px;">
        <div>
          <span class="ta-eyebrow">Strategic Executive Overview</span>
          <h2 class="ta-section-title" style="margin-top:10px;margin-bottom:20px;font-size:clamp(26px,3vw,38px);line-height:1.25;">
            $($svc.overview.headline)
          </h2>
          <p style="color:var(--ta-muted);font-size:15px;line-height:1.8;margin-bottom:24px;">
            $($svc.overview.text)
          </p>

          <div style="background:var(--ta-surface);border-left:4px solid #3b82f6;padding:18px 22px;border-radius:0 14px 14px 0;margin-top:20px;">
            <p style="font-size:14px;font-style:italic;color:var(--ta-ink);margin:0;line-height:1.7;">
              &ldquo;We engineer software as a compounding business asset—maximizing developer velocity, eliminating technical debt, and scaling seamlessly with market demand.&rdquo;
            </p>
          </div>
        </div>

        <div style="background:var(--ta-surface);padding:32px;border-radius:22px;border:1px solid var(--ta-border);box-shadow:0 10px 30px rgba(0,0,0,0.03);">
          <h3 style="font-family:var(--ta-font-head);font-size:17px;font-weight:700;color:var(--ta-ink);margin-bottom:16px;display:flex;align-items:center;gap:10px;">
            <span style="width:28px;height:28px;border-radius:8px;background:rgba(239,68,68,0.1);color:#ef4444;display:flex;align-items:center;justify-content:center;font-size:13px;">
              <i class="fa-solid fa-triangle-exclamation"></i>
            </span>
            Industry Friction &amp; Challenges Solved
          </h3>
          <ul style="margin-bottom:24px;display:flex;flex-direction:column;gap:12px;padding:0;list-style:none;">
            $challengesHtml
          </ul>

          <h3 style="font-family:var(--ta-font-head);font-size:17px;font-weight:700;color:var(--ta-ink);margin-bottom:16px;display:flex;align-items:center;gap:10px;">
            <span style="width:28px;height:28px;border-radius:8px;background:rgba(16,185,129,0.1);color:#10b981;display:flex;align-items:center;justify-content:center;font-size:13px;">
              <i class="fa-solid fa-circle-check"></i>
            </span>
            The Techno Amaze Solution Architecture
          </h3>
          <ul style="display:flex;flex-direction:column;gap:12px;padding:0;list-style:none;">
            $solutionsHtml
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- ============================== 4. CORE CAPABILITIES (BENTO GRID) ============================== -->
  <section id="capabilities" style="padding:clamp(60px,7vw,100px) clamp(16px,4vw,60px);background:var(--ta-surface);">
    <div style="max-width:var(--ta-container);margin:0 auto;">
      <div style="text-align:center;max-width:720px;margin:0 auto 50px;">
        <span class="ta-eyebrow">Engineering Excellence</span>
        <h2 class="ta-section-title" style="margin-top:10px;">What We Deliver in $($svc.title)</h2>
        <p class="ta-section-desc" style="margin-top:12px;">Modular, end-to-end deliverables designed to integrate cleanly into your existing technology ecosystem.</p>
      </div>

      <div class="sp-bento-grid">
        $capabilitiesHtml
      </div>
    </div>
  </section>

  <!-- ============================== 5. CONNECTED DEVELOPMENT PROCESS (SDLC TIMELINE) ============================== -->
  <section style="padding:clamp(60px,7vw,100px) clamp(16px,4vw,60px);background:var(--ta-card-bg);">
    <div style="max-width:var(--ta-container);margin:0 auto;">
      <div style="text-align:center;max-width:720px;margin:0 auto 30px;">
        <span class="ta-eyebrow">Agile SDLC Framework</span>
        <h2 class="ta-section-title" style="margin-top:10px;">How We Deliver $($svc.title)</h2>
        <p class="ta-section-desc" style="margin-top:12px;">A disciplined, iterative delivery lifecycle ensuring transparency, rapid velocity, and zero regressions.</p>
      </div>

      <div class="sp-process-roadmap">
        $processHtml
      </div>
    </div>
  </section>

  <!-- ============================== 6. TECHNOLOGY STACK MATRIX ============================== -->
  <section style="padding:clamp(60px,7vw,100px) clamp(16px,4vw,60px);background:var(--ta-surface);">
    <div style="max-width:var(--ta-container);margin:0 auto;">
      <div style="text-align:center;max-width:720px;margin:0 auto 50px;">
        <span class="ta-eyebrow">Modern Tooling &amp; Architecture</span>
        <h2 class="ta-section-title" style="margin-top:10px;">Technologies, Frameworks &amp; Tooling We Master</h2>
        <p class="ta-section-desc" style="margin-top:12px;">We build on industry-standard, production-proven technologies that ensure long-term stability and developer velocity.</p>
      </div>

      <div class="sp-tech-matrix-grid">
        $techStackHtml
      </div>
    </div>
  </section>

  <!-- ============================== 7. WHY CHOOSE TECHNO AMAZE (ENTERPRISE PILLARS) ============================== -->
  <section style="padding:clamp(60px,7vw,100px) clamp(16px,4vw,60px);background:var(--ta-card-bg);">
    <div style="max-width:var(--ta-container);margin:0 auto;">
      <div style="text-align:center;max-width:720px;margin:0 auto 50px;">
        <span class="ta-eyebrow">Competitive Advantage</span>
        <h2 class="ta-section-title" style="margin-top:10px;">Why Global Enterprises Trust Techno Amaze</h2>
        <p class="ta-section-desc" style="margin-top:12px;">Our customer-centric development model eliminates risk and guarantees tangible return on investment.</p>
      </div>

      <div class="sp-why-grid">
        <div class="sp-why-card">
          <div style="width:48px;height:48px;border-radius:12px;background:rgba(59,130,246,0.1);color:#3b82f6;display:flex;align-items:center;justify-content:center;font-size:22px;margin-bottom:18px;">
            <i class="fa-solid fa-users-gear"></i>
          </div>
          <h3 style="font-family:var(--ta-font-head);font-size:18px;font-weight:700;color:var(--ta-ink);margin-bottom:10px;">Top 1% Senior Engineers</h3>
          <p style="font-size:13px;color:var(--ta-muted);line-height:1.7;margin:0;">Dedicated cross-functional engineering pods with zero junior handoffs, ensuring architectural integrity from day one.</p>
        </div>

        <div class="sp-why-card">
          <div style="width:48px;height:48px;border-radius:12px;background:rgba(16,185,129,0.1);color:#10b981;display:flex;align-items:center;justify-content:center;font-size:22px;margin-bottom:18px;">
            <i class="fa-solid fa-shield-halved"></i>
          </div>
          <h3 style="font-family:var(--ta-font-head);font-size:18px;font-weight:700;color:var(--ta-ink);margin-bottom:10px;">Security &amp; Compliance First</h3>
          <p style="font-size:13px;color:var(--ta-muted);line-height:1.7;margin:0;">Built-in OWASP compliance, SOC2 readiness, encrypted data layers, and automated vulnerability scanning at every commit.</p>
        </div>

        <div class="sp-why-card">
          <div style="width:48px;height:48px;border-radius:12px;background:rgba(236,72,153,0.1);color:#ec4899;display:flex;align-items:center;justify-content:center;font-size:22px;margin-bottom:18px;">
            <i class="fa-solid fa-gauge-high"></i>
          </div>
          <h3 style="font-family:var(--ta-font-head);font-size:18px;font-weight:700;color:var(--ta-ink);margin-bottom:10px;">Sprint Velocity &amp; Transparency</h3>
          <p style="font-size:13px;color:var(--ta-muted);line-height:1.7;margin:0;">Bi-weekly working demos, real-time Jira and Slack collaboration, and predictable sprint burndown charts.</p>
        </div>

        <div class="sp-why-card">
          <div style="width:48px;height:48px;border-radius:12px;background:rgba(139,92,246,0.1);color:#8b5cf6;display:flex;align-items:center;justify-content:center;font-size:22px;margin-bottom:18px;">
            <i class="fa-solid fa-award"></i>
          </div>
          <h3 style="font-family:var(--ta-font-head);font-size:18px;font-weight:700;color:var(--ta-ink);margin-bottom:10px;">Guaranteed Post-Launch SLA</h3>
          <p style="font-size:13px;color:var(--ta-muted);line-height:1.7;margin:0;">30 to 90 days complimentary hypercare warranty, 24/7 production monitoring, and zero-downtime hotfix deployments.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ============================== 8. INDUSTRY VERTICALS WE SERVE ============================== -->
  <section style="padding:clamp(60px,7vw,100px) clamp(16px,4vw,60px);background:var(--ta-surface);">
    <div style="max-width:var(--ta-container);margin:0 auto;">
      <div style="text-align:center;max-width:720px;margin:0 auto 50px;">
        <span class="ta-eyebrow">Domain Expertise</span>
        <h2 class="ta-section-title" style="margin-top:10px;">Industries We Transform with $($svc.title)</h2>
        <p class="ta-section-desc" style="margin-top:12px;">Real-world domain implementations built to satisfy strict regulatory compliance and sector-specific workflows.</p>
      </div>

      <div class="sp-grid-2" style="gap:28px;">
        $useCasesHtml
      </div>
    </div>
  </section>

  <!-- ============================== 9. DELIVERABLES & SLA PACKAGE ============================== -->
  <section style="padding:0 clamp(16px,4vw,60px) clamp(60px,7vw,100px);background:var(--ta-surface);">
    <div style="max-width:var(--ta-container);margin:0 auto;">
      <div class="sp-deliverables-banner">
        <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:30px;margin-bottom:32px;">
          <div>
            <span style="font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#38bdf8;">Standard With Every Engagement</span>
            <h2 style="font-family:var(--ta-font-head);font-size:clamp(24px,2.5vw,34px);font-weight:800;color:#ffffff;margin-top:6px;">Your Complete Delivery Package</h2>
          </div>
          <a href="#ta-contact" class="ta-btn ta-btn-primary" style="padding:14px 28px;">
            <i class="fa-solid fa-handshake"></i> Start Your Project
          </a>
        </div>

        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(260px, 1fr));gap:20px;border-top:1px solid rgba(255,255,255,0.1);padding-top:28px;">
          <div style="display:flex;align-items:flex-start;gap:12px;">
            <i class="fa-solid fa-circle-check" style="color:#10b981;font-size:18px;margin-top:2px;"></i>
            <div>
              <div style="font-weight:700;font-size:15px;color:#ffffff;">100% IP &amp; Code Ownership</div>
              <div style="font-size:13px;color:#94a3b8;margin-top:2px;">Full GitHub repository transfer with complete licensing rights.</div>
            </div>
          </div>
          <div style="display:flex;align-items:flex-start;gap:12px;">
            <i class="fa-solid fa-circle-check" style="color:#10b981;font-size:18px;margin-top:2px;"></i>
            <div>
              <div style="font-weight:700;font-size:15px;color:#ffffff;">Interactive API Documentation</div>
              <div style="font-size:13px;color:#94a3b8;margin-top:2px;">Swagger &amp; Postman collections for seamless developer integration.</div>
            </div>
          </div>
          <div style="display:flex;align-items:flex-start;gap:12px;">
            <i class="fa-solid fa-circle-check" style="color:#10b981;font-size:18px;margin-top:2px;"></i>
            <div>
              <div style="font-weight:700;font-size:15px;color:#ffffff;">Automated CI/CD Pipelines</div>
              <div style="font-size:13px;color:#94a3b8;margin-top:2px;">Dockerized builds, zero-downtime deployment scripts &amp; IaC templates.</div>
            </div>
          </div>
          <div style="display:flex;align-items:flex-start;gap:12px;">
            <i class="fa-solid fa-circle-check" style="color:#10b981;font-size:18px;margin-top:2px;"></i>
            <div>
              <div style="font-weight:700;font-size:15px;color:#ffffff;">Automated QA &amp; Security Audits</div>
              <div style="font-size:13px;color:#94a3b8;margin-top:2px;">Unit test coverage reports, penetration testing &amp; performance logs.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============================== 10. INTERACTIVE FAQ ACCORDION ============================== -->
  <section style="padding:clamp(60px,7vw,100px) clamp(16px,4vw,60px);background:var(--ta-card-bg);">
    <div style="max-width:860px;margin:0 auto;">
      <div style="text-align:center;margin-bottom:44px;">
        <span class="ta-eyebrow">Frequently Asked Questions</span>
        <h2 class="ta-section-title" style="margin-top:10px;">Everything You Need to Know About $($svc.title)</h2>
        <p class="ta-section-desc" style="margin-top:12px;">Clear answers regarding our engagement models, sprint deliverables, pricing, and timelines.</p>
      </div>

      <div style="display:flex;flex-direction:column;gap:14px;">
        $faqsHtml
      </div>
    </div>
  </section>

  <!-- ============================== 11. CONTACT SECTION (HOME REPLICA) ============================== -->
  <section id="ta-contact" class="ta-section-reveal" aria-labelledby="contact-heading" style="padding-top:40px;">
    <h2 id="contact-heading" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)">Contact Techno Amaze</h2>
    <div class="ta-contact-img" data-reveal="left">
      <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80" alt="Team collaborating">
    </div>
    <div class="ta-contact-strip">
      <div class="ta-contact-strip-inner">
        <h3 class="ta-contact-strip-heading">Request a Consultation</h3>
        <span class="ta-contact-strip-text">Get Started with $($svc.title)</span>
      </div>
    </div>
    <div class="ta-contact-right" data-reveal="right">
      <div class="ta-contact-card">
        <form id="ta-home-contact-form" novalidate>
          <input type="hidden" name="source" value="$($svc.title) Landing Page">
          <input type="text" name="_honey" class="ta-form-honey" tabindex="-1" autocomplete="off" aria-hidden="true">
          <input class="ta-contact-field" type="text" name="name" placeholder="Your Name" aria-label="Your Name" autocomplete="name" required>
          <input class="ta-contact-field" type="email" name="email" placeholder="Email Address" aria-label="Email Address" autocomplete="email" required>
          <input class="ta-contact-field" type="tel" name="phone" placeholder="Phone Number" aria-label="Phone Number" autocomplete="tel" required>
          <input class="ta-contact-field" type="text" name="subject" value="Inquiry: $($svc.title)" placeholder="Subject" aria-label="Subject" required>
          <textarea class="ta-contact-field ta-contact-textarea" name="message" placeholder="Describe your project requirements, timeline, or architecture needs..." aria-label="Message" required></textarea>
          <button type="submit" class="ta-contact-submit" id="ta-home-submit-btn">Send Inquiry &amp; Get Quote &#8594;</button>
        </form>
      </div>
    </div>
  </section>

  <!-- ============================== FOOTER ============================== -->
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
          <li><a href="ecommerce-development.html">E-commerce Development</a></li>
          <li><a href="saas-product-development.html">SaaS Product Development</a></li>
          <li><a href="../services.html">View All 25 Services &rarr;</a></li>
        </ul>
      </div>
      <div class="ta-footer-col">
        <h4>Industries</h4>
        <ul>
          <li><a href="../industries/healthcare.html">Healthcare &amp; MedTech</a></li>
          <li><a href="../industries/fintech.html">FinTech &amp; Banking</a></li>
          <li><a href="../industries/ecommerce.html">E-Commerce &amp; Retail</a></li>
          <li><a href="../industries/edtech.html">Education &amp; EdTech</a></li>
          <li><a href="../industries/manufacturing.html">Manufacturing &amp; IoT</a></li>
          <li><a href="../industries.html">View All Industries &rarr;</a></li>
        </ul>
      </div>
      <div class="ta-footer-col">
        <h4>Get In Touch</h4>
        <div class="ta-footer-contact-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>
          <span>30 Commercial Road Fratton, Australia</span>
        </div>
        <div class="ta-footer-contact-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 5h18v14H3z" /><path d="M3 6l9 7 9-7" /></svg>
          <a href="mailto:info@technoamaze.in">info@technoamaze.in</a>
        </div>
        <div class="ta-footer-contact-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.5a2 2 0 0 1 2-2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
          <a href="tel:+917020995651">+91 70209 95651</a>
        </div>
      </div>
    </div>
    <div class="ta-footer-bottom">
      <p>&copy; 2026 Techno Amaze. All rights reserved. Transforming vision into digital reality.</p>
    </div>
  </footer>

  <!-- Floating Dock -->
  <aside id="ta-floating-dock" aria-label="Quick Actions">
    <button class="ta-dock-btn" id="ta-theme-toggle" aria-label="Toggle dark/light mode">
      <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
      <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>
      <span class="ta-dock-tooltip">Toggle Theme</span>
    </button>
    <a href="tel:+917020995651" class="ta-dock-btn" aria-label="Call Us">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.5a2 2 0 0 1 2-2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
      <span class="ta-dock-tooltip">Call Support</span>
    </a>
    <a href="https://wa.me/917020995651" class="ta-dock-btn" aria-label="WhatsApp Us" target="_blank" rel="noopener">
      <i class="fa-brands fa-whatsapp" style="font-size:18px;"></i>
      <span class="ta-dock-tooltip">WhatsApp Chat</span>
    </a>
    <button class="ta-dock-btn" id="ta-scroll-top" aria-label="Scroll to top">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 15l-6-6-6 6" /></svg>
      <span class="ta-dock-tooltip">Back to Top</span>
    </button>
  </aside>

  <!-- Mobile Overlay -->
  <div id="ta-nav-overlay"></div>

  <!-- Main JavaScript Engine -->
  <script src="../js/main.js"></script>
</body>
</html>
"@
}

# Generate all service pages
$count = 0
foreach ($svc in $services) {
    $html = Generate-ServiceHTML $svc
    $filePath = Join-Path $servicesDir "$($svc.slug).html"
    [System.IO.File]::WriteAllText($filePath, $html, [System.Text.Encoding]::UTF8)
    Write-Host "Generated: services/$($svc.slug).html"
    $count++
}

Write-Host "Successfully generated $count service landing pages with ultra-modern UI & animations."
