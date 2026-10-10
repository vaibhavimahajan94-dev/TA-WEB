const fs = require('fs');
const content = fs.readFileSync('themes/technoamaze-theme/front-page.php', 'utf8');

const regex = /<section[^>]+id=["']([^"']*blog[^"']*)["'][^>]*>([\s\S]*?)<\/section>/i;
const match = content.match(regex);
if (match) {
  console.log('Found section with id:', match[1]);
  console.log('Snippet:\n', match[0].substring(0, 700));
} else {
  console.log('Searching for "blog" in comments or headings...');
  const blogMatches = content.match(/<!--[^-]*BLOG[^-]*-->([\s\S]{0,500})/i);
  if (blogMatches) console.log(blogMatches[0]);
}
