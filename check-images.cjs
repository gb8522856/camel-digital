const fs = require('fs');
const content = fs.readFileSync('src/data/products.js', 'utf8');
const regex = /image:\s*(['"])(.*?)\1/g;
let match;
let i = 0;
while ((match = regex.exec(content)) !== null) {
  i++;
  const url = match[2];
  const isSvg = url.startsWith('data:image/svg+xml');
  console.log(i + ': ' + (isSvg ? 'SVG' : 'URL ') + ' | ' + url.substring(0, 80));
}
