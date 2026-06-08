const fs = require('fs');
const content = fs.readFileSync('src/data/products.js', 'utf8');

// Extract all SVG data URIs
const regex = /image:\s*("data:image\/svg\+xml,[^"]+")/g;
let match;
let i = 0;
while ((match = regex.exec(content)) !== null) {
  i++;
  const raw = match[1];
  // Remove the wrapper quotes and data:image/svg+xml, prefix
  const encoded = raw.slice(1, -1).replace('data:image/svg+xml,', '');
  
  try {
    const decoded = decodeURIComponent(encoded);
    // Check if SVG is well-formed
    const hasOpen = decoded.includes('<svg');
    const hasClose = decoded.includes('</svg>');
    const hasXmlns = decoded.includes('xmlns');
    console.log(i + ': opens=' + hasOpen + ' closes=' + hasClose + ' xmlns=' + hasXmlns + ' len=' + decoded.length);
    if (!hasClose) {
      console.log('  MISSING </svg>: ' + decoded.substring(decoded.length - 100));
    }
  } catch(e) {
    console.log(i + ': DECODE ERROR: ' + e.message);
  }
}
console.log('Total SVGs found: ' + i);
