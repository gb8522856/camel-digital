const fs = require('fs');

// Read the products file
let content = fs.readFileSync('src/data/products.js', 'utf8');

// Find all SVG data URIs and convert to base64
const regex = /image:\s*("data:image\/svg\+xml,([^"]+)")/g;

let count = 0;
content = content.replace(regex, (match, full, encoded) => {
  count++;
  try {
    const decoded = decodeURIComponent(encoded);
    const base64 = Buffer.from(decoded).toString('base64');
    return `image: "data:image/svg+xml;base64,${base64}"`;
  } catch(e) {
    console.log('Error on SVG', count, ':', e.message);
    return match;
  }
});

fs.writeFileSync('src/data/products.js', content);
console.log('Converted', count, 'SVGs to base64');
