/**
 * TechnoAmaze WordPress Theme Template Generator
 * Extracts inner main sections from static HTML files and creates WordPress PHP and FSE HTML templates.
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const THEME_DIR = path.join(ROOT_DIR, 'themes', 'technoamaze-theme');
const TEMPLATES_DIR = path.join(THEME_DIR, 'templates');

if (!fs.existsSync(TEMPLATES_DIR)) {
  fs.mkdirSync(TEMPLATES_DIR, { recursive: true });
}

// Convert HTML relative links to WordPress home_url() links
function convertLinksToWp(html) {
  return html
    .replace(/href="index\.html"/g, 'href="<?php echo esc_url(home_url(\'/\')); ?>"')
    .replace(/href="about\.html"/g, 'href="<?php echo esc_url(home_url(\'/about/\')); ?>"')
    .replace(/href="services\.html"/g, 'href="<?php echo esc_url(home_url(\'/services/\')); ?>"')
    .replace(/href="industries\.html"/g, 'href="<?php echo esc_url(home_url(\'/industries/\')); ?>"')
    .replace(/href="products\.html"/g, 'href="<?php echo esc_url(home_url(\'/products/\')); ?>"')
    .replace(/href="careers\.html"/g, 'href="<?php echo esc_url(home_url(\'/careers/\')); ?>"')
    .replace(/href="job-details\.html(\?[^"]*)?"/g, (m, q) => `href="<?php echo esc_url(home_url(\'/job-details/\')); ?>${q || ''}"`)
    .replace(/href="apply\.html(\?[^"]*)?"/g, (m, q) => `href="<?php echo esc_url(home_url(\'/apply/\')); ?>${q || ''}"`)
    .replace(/href="application-success\.html"/g, 'href="<?php echo esc_url(home_url(\'/application-success/\')); ?>"')
    .replace(/href="contact\.html"/g, 'href="<?php echo esc_url(home_url(\'/contact/\')); ?>"')
    // Services subpages
    .replace(/href="services\/([^"]+)\.html"/g, 'href="<?php echo esc_url(home_url(\'/services/$1/\')); ?>"')
    // Industries subpages
    .replace(/href="industries\/([^"]+)\.html"/g, 'href="<?php echo esc_url(home_url(\'/industries/$1/\')); ?>"')
    // Products subpages
    .replace(/href="products\/([^"]+)\.html"/g, 'href="<?php echo esc_url(home_url(\'/products/$1/\')); ?>"')
    // Blogs subpages
    .replace(/href="blogs\/([^"]+)\.html"/g, 'href="<?php echo esc_url(home_url(\'/blogs/$1/\')); ?>"');
}

function convertLinksToFse(html) {
  return html
    .replace(/href="index\.html"/g, 'href="/"')
    .replace(/href="about\.html"/g, 'href="/about/"')
    .replace(/href="services\.html"/g, 'href="/services/"')
    .replace(/href="industries\.html"/g, 'href="/industries/"')
    .replace(/href="products\.html"/g, 'href="/products/"')
    .replace(/href="careers\.html"/g, 'href="/careers/"')
    .replace(/href="job-details\.html(\?[^"]*)?"/g, (m, q) => `href="/job-details/${q || ''}"`)
    .replace(/href="apply\.html(\?[^"]*)?"/g, (m, q) => `href="/apply/${q || ''}"`)
    .replace(/href="application-success\.html"/g, 'href="/application-success/"')
    .replace(/href="contact\.html"/g, 'href="/contact/"')
    .replace(/href="services\/([^"]+)\.html"/g, 'href="/services/$1/"')
    .replace(/href="industries\/([^"]+)\.html"/g, 'href="/industries/$1/"')
    .replace(/href="products\/([^"]+)\.html"/g, 'href="/products/$1/"')
    .replace(/href="blogs\/([^"]+)\.html"/g, 'href="/blogs/$1/"');
}

// Extract main content between header end and footer start
function extractMain(filePath) {
  if (!fs.existsSync(filePath)) return '';
  const content = fs.readFileSync(filePath, 'utf8');

  let mainContent = '';

  // Look for header end markers
  const headerEndMarkers = [
    '<div class="ta-nav-overlay" id="ta-nav-overlay"></div>',
    '</header>'
  ];

  let startIndex = -1;
  for (const marker of headerEndMarkers) {
    const idx = content.lastIndexOf(marker);
    if (idx !== -1) {
      startIndex = idx + marker.length;
      break;
    }
  }

  // Look for footer start
  const footerStartMarkers = [
    '<!-- FOOTER -->',
    '<footer id="ta-footer"',
    '<footer class="ta-footer"'
  ];

  let endIndex = -1;
  for (const marker of footerStartMarkers) {
    const idx = content.indexOf(marker);
    if (idx !== -1) {
      endIndex = idx;
      break;
    }
  }

  if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
    mainContent = content.substring(startIndex, endIndex).trim();
  } else {
    const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    mainContent = bodyMatch ? bodyMatch[1] : content;
  }

  return mainContent;
}

const pageConfigs = [
  { source: 'index.html', phpFile: 'front-page.php', fseFile: 'front-page.html', title: 'Home' },
  { source: 'about.html', phpFile: 'page-about.php', fseFile: 'page-about.html', title: 'About Us' },
  { source: 'services.html', phpFile: 'page-services.php', fseFile: 'page-services.html', title: 'Services' },
  { source: 'industries.html', phpFile: 'page-industries.php', fseFile: 'page-industries.html', title: 'Industries' },
  { source: 'products.html', phpFile: 'page-products.php', fseFile: 'page-products.html', title: 'Products' },
  { source: 'careers.html', phpFile: 'page-careers.php', fseFile: 'page-careers.html', title: 'Careers' },
  { source: 'job-details.html', phpFile: 'page-job-details.php', fseFile: 'page-job-details.html', title: 'Job Details' },
  { source: 'apply.html', phpFile: 'page-apply.php', fseFile: 'page-apply.html', title: 'Apply Now' },
  { source: 'application-success.html', phpFile: 'page-application-success.php', fseFile: 'page-application-success.html', title: 'Application Success' },
  { source: 'contact.html', phpFile: 'page-contact.php', fseFile: 'page-contact.html', title: 'Contact Us' }
];

// Add Subfolders (services, industries, products, blogs)
const subfolders = ['services', 'industries', 'products', 'blogs'];
subfolders.forEach(dir => {
  const fullDir = path.join(ROOT_DIR, dir);
  if (fs.existsSync(fullDir)) {
    const files = fs.readdirSync(fullDir).filter(f => f.endsWith('.html'));
    files.forEach(f => {
      const baseName = f.replace('.html', '');
      const title = baseName.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
      pageConfigs.push({
        source: `${dir}/${f}`,
        phpFile: `page-${dir}-${baseName}.php`,
        fseFile: `page-${dir}-${baseName}.html`,
        title: `${title} (${dir.toUpperCase()})`
      });
    });
  }
});

pageConfigs.forEach(cfg => {
  const srcPath = path.join(ROOT_DIR, cfg.source);
  const main = extractMain(srcPath);

  if (!main) {
    console.warn(`Could not extract main from ${cfg.source}`);
    return;
  }

  // 1. Write Classic PHP Template
  const phpContent = `<?php
/**
 * Template Name: ${cfg.title}
 * Description: Custom template for ${cfg.title} page.
 *
 * @package TechnoAmaze
 * @version 1.0.0
 */

get_header();
?>

${convertLinksToWp(main)}

<?php
get_footer();
`;
  fs.writeFileSync(path.join(THEME_DIR, cfg.phpFile), phpContent, 'utf8');

  // 2. Write FSE Block Template
  const fseContent = `<!-- wp:template-part {"slug":"header"} /-->
<!-- wp:html -->
${convertLinksToFse(main)}
<!-- /wp:html -->
<!-- wp:template-part {"slug":"footer"} /-->
`;
  fs.writeFileSync(path.join(TEMPLATES_DIR, cfg.fseFile), fseContent, 'utf8');

  console.log(`Generated: ${cfg.phpFile} & templates/${cfg.fseFile}`);
});

console.log(`Successfully built ${pageConfigs.length} theme templates!`);
