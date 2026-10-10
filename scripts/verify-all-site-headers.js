const http = require('http');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, body: data, headers: res.headers }));
    }).on('error', reject);
  });
}

const testUrls = [
  'http://localhost:8888/',
  'http://localhost:8888/about/',
  'http://localhost:8888/services/',
  'http://localhost:8888/services/custom-software-development/',
  'http://localhost:8888/industries/',
  'http://localhost:8888/products/',
  'http://localhost:8888/blogs/',
  'http://localhost:8888/the-rise-of-ai-in-modern-tech-infrastructure/',
  'http://localhost:8888/careers/',
  'http://localhost:8888/careers-jobs/wordpress-developer/',
  'http://localhost:8888/contact/',
  'http://localhost:8888/job-details/',
  'http://localhost:8888/apply/'
];

async function run() {
  console.log('Testing all pages across the website...\n');
  let allPassed = true;

  for (const url of testUrls) {
    try {
      const res = await fetchUrl(url);
      const is200 = res.status === 200;
      const headerMatches = [...res.body.matchAll(/<header id="ta-header"[\s\S]*?<\/header>/g)];
      const hasMenuToggle = res.body.includes('id="ta-menu-toggle"');
      const hasCallBlock = res.body.includes('class="ta-call-block"');
      const hasRogueHeader = (res.body.match(/<\/header>/g) || []).length > 1;
      const hasPhpError = res.body.includes('Fatal error') || res.body.includes('Parse error');

      const passed = is200 && headerMatches.length === 1 && hasMenuToggle && hasCallBlock && !hasRogueHeader && !hasPhpError;

      if (!passed) allPassed = false;

      console.log(`[${passed ? 'PASS' : 'FAIL'}] ${url}`);
      console.log(`       Status: ${res.status} | Header count: ${headerMatches.length} | MenuToggle: ${hasMenuToggle} | CallBlock: ${hasCallBlock} | Extra header tag: ${hasRogueHeader} | PHP Error: ${hasPhpError}`);
    } catch (e) {
      console.log(`[FAIL] ${url} -> ${e.message}`);
      allPassed = false;
    }
  }

  console.log('\n=======================================');
  console.log(allPassed ? 'ALL PAGES PASSED! Header is unified & perfect.' : 'SOME PAGES FAILED! Check above.');
  console.log('=======================================');
}

run();
