const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const dirs = ['services', 'industries', 'products', 'blogs'];

dirs.forEach(d => {
  const p = path.join(root, d);
  if (!fs.existsSync(p)) return;
  fs.readdirSync(p).filter(f => f.endsWith('.html')).forEach(f => {
    const filePath = path.join(p, f);
    const content = fs.readFileSync(filePath, 'utf8');
    const regex = /<img[^>]+src=["']([^"']+)["']/gi;
    let match;
    while ((match = regex.exec(content)) !== null) {
      const src = match[1];
      if (src.includes('images/') || !src.startsWith('http')) {
        console.log(`${d}/${f} -> ${src}`);
      }
    }
  });
});
