const fs = require('fs');
const path = require('path');

const dir = 'public/images';

const svgs = {
  'cable-3in1.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
  <rect width="400" height="400" fill="#f8f9fa"/>
  <rect x="175" y="75" width="50" height="28" rx="6" fill="#4a5568"/>
  <path d="M190 103 Q190 160 155 200" stroke="#e53e3e" stroke-width="5" fill="none" stroke-linecap="round"/>
  <path d="M200 103 Q200 170 200 210" stroke="#3182ce" stroke-width="5" fill="none" stroke-linecap="round"/>
  <path d="M210 103 Q210 160 245 200" stroke="#38a169" stroke-width="5" fill="none" stroke-linecap="round"/>
  <rect x="140" y="200" width="30" height="18" rx="5" fill="#e53e3e"/>
  <rect x="185" y="210" width="30" height="18" rx="5" fill="#3182ce"/>
  <rect x="230" y="200" width="30" height="18" rx="5" fill="#38a169"/>
  <text x="200" y="280" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#666">Lightning</text>
  <text x="200" y="300" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#999">USB-C / Micro USB</text>
</svg>`,

  'cable-2m.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
  <rect width="400" height="400" fill="#f8f9fa"/>
  <path d="M60 200 Q100 100 150 200 Q200 300 250 200 Q300 100 340 200" stroke="#e2e8f0" stroke-width="8" fill="none" stroke-linecap="round"/>
  <path d="M60 200 Q100 100 150 200 Q200 300 250 200 Q300 100 340 200" stroke="#4a5568" stroke-width="5" fill="none" stroke-linecap="round"/>
  <rect x="40" y="190" width="28" height="20" rx="5" fill="#4a5568"/>
  <rect x="332" y="190" width="28" height="20" rx="5" fill="#4a5568"/>
  <text x="200" y="320" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#666">2m Nylon Braided</text>
  <text x="200" y="340" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#999">USB-C 60W</text>
</svg>`,

  'screen-protector.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
  <rect width="400" height="400" fill="#f8f9fa"/>
  <rect x="140" y="50" width="130" height="250" rx="18" fill="none" stroke="#4299e1" stroke-width="2.5"/>
  <rect x="144" y="54" width="122" height="242" rx="16" fill="#ebf8ff" opacity="0.6"/>
  <circle cx="205" cy="76" r="5" fill="#4299e1"/>
  <rect x="180" y="285" width="50" height="5" rx="2.5" fill="#4299e1"/>
  <rect x="120" y="50" width="130" height="250" rx="18" fill="none" stroke="#90cdf4" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.5"/>
  <rect x="100" y="50" width="130" height="250" rx="18" fill="none" stroke="#90cdf4" stroke-width="1" stroke-dasharray="4,3" opacity="0.3"/>
  <path d="M170 170 L205 140 L240 170" stroke="#48bb78" stroke-width="2.5" fill="none"/>
  <text x="200" y="340" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#666">9H Tempered Glass</text>
  <text x="200" y="360" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#999">3 Pack / 0.33mm</text>
</svg>`,

  'clear-case.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
  <rect width="400" height="400" fill="#f8f9fa"/>
  <rect x="130" y="50" width="140" height="280" rx="22" fill="none" stroke="#a0aec0" stroke-width="2.5"/>
  <rect x="135" y="55" width="130" height="270" rx="20" fill="white" stroke="#e2e8f0" stroke-width="1"/>
  <rect x="175" y="66" width="50" height="10" rx="5" fill="#e2e8f0"/>
  <circle cx="248" cy="95" r="18" fill="none" stroke="#e2e8f0" stroke-width="1.5"/>
  <circle cx="248" cy="95" r="12" fill="none" stroke="#e2e8f0" stroke-width="1"/>
  <circle cx="248" cy="130" r="8" fill="none" stroke="#e2e8f0" stroke-width="1"/>
  <circle cx="248" cy="155" r="8" fill="none" stroke="#e2e8f0" stroke-width="1"/>
  <rect x="155" y="300" width="90" height="5" rx="2.5" fill="#e2e8f0"/>
  <text x="200" y="360" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#666">Clear Protective Case</text>
  <text x="200" y="380" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#999">Anti-Yellowing TPU+PC</text>
</svg>`,

  'matte-case.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
  <rect width="400" height="400" fill="#f8f9fa"/>
  <rect x="130" y="50" width="140" height="280" rx="22" fill="#2d3748"/>
  <rect x="135" y="55" width="130" height="270" rx="20" fill="#1a202c"/>
  <rect x="175" y="66" width="50" height="10" rx="5" fill="#4a5568"/>
  <circle cx="248" cy="95" r="18" fill="none" stroke="#4a5568" stroke-width="1.5"/>
  <circle cx="248" cy="95" r="12" fill="none" stroke="#4a5568" stroke-width="1"/>
  <circle cx="248" cy="130" r="8" fill="none" stroke="#4a5568" stroke-width="1"/>
  <circle cx="248" cy="155" r="8" fill="none" stroke="#4a5568" stroke-width="1"/>
  <rect x="155" y="300" width="90" height="5" rx="2.5" fill="#4a5568"/>
  <text x="200" y="360" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#666">Matte Stealth Case</text>
  <text x="200" y="380" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#999">0.8mm Ultra-Thin PC</text>
</svg>`,

  'live-stand.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
  <rect width="400" height="400" fill="#f8f9fa"/>
  <rect x="160" y="300" width="80" height="20" rx="6" fill="#4a5568"/>
  <rect x="193" y="140" width="14" height="160" rx="4" fill="#4a5568"/>
  <circle cx="200" cy="115" r="45" fill="none" stroke="#e2e8f0" stroke-width="8"/>
  <circle cx="200" cy="115" r="32" fill="none" stroke="#fbd38d" stroke-width="4"/>
  <circle cx="200" cy="115" r="20" fill="none" stroke="#f6e05e" stroke-width="2"/>
  <rect x="178" y="195" width="44" height="28" rx="6" fill="#4a5568"/>
  <rect x="183" y="200" width="34" height="18" rx="3" fill="#718096"/>
  <text x="200" y="360" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#666">Ring Light Stand</text>
  <text x="200" y="380" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#999">360 Rotating / 15-45cm</text>
</svg>`,

  'car-mount.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
  <rect width="400" height="400" fill="#f8f9fa"/>
  <rect x="140" y="240" width="120" height="40" rx="8" fill="#4a5568"/>
  <rect x="155" y="250" width="20" height="20" rx="4" fill="#718096"/>
  <rect x="225" y="250" width="20" height="20" rx="4" fill="#718096"/>
  <rect x="175" y="170" width="50" height="70" rx="8" fill="#4a5568"/>
  <rect x="183" y="178" width="34" height="54" rx="4" fill="#e2e8f0"/>
  <circle cx="200" cy="205" r="10" fill="#4299e1"/>
  <path d="M175 170 Q200 140 225 170" stroke="#4a5568" stroke-width="6" fill="none"/>
  <text x="200" y="320" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#666">Magnetic Car Mount</text>
  <text x="200" y="340" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#999">MagSafe / 1500g</text>
</svg>`,

  'gooseneck.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
  <rect width="400" height="400" fill="#f8f9fa"/>
  <rect x="80" y="310" width="70" height="25" rx="6" fill="#4a5568"/>
  <rect x="100" y="290" width="30" height="30" rx="4" fill="#718096"/>
  <path d="M115 290 Q115 200 170 150 Q225 100 290 80" stroke="#4a5568" stroke-width="7" fill="none" stroke-linecap="round"/>
  <rect x="270" y="55" width="55" height="95" rx="10" fill="#4a5568"/>
  <rect x="277" y="62" width="41" height="81" rx="6" fill="#e2e8f0"/>
  <circle cx="297" cy="130" r="3" fill="#4a5568"/>
  <text x="200" y="370" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#666">Gooseneck Holder</text>
  <text x="200" y="390" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#999">60cm / 360</text>
</svg>`,

  'usb-drive.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
  <rect width="400" height="400" fill="#f8f9fa"/>
  <rect x="130" y="160" width="130" height="50" rx="10" fill="#4a5568"/>
  <rect x="260" y="168" width="40" height="34" rx="5" fill="#a0aec0"/>
  <rect x="288" y="176" width="12" height="18" rx="3" fill="#e2e8f0"/>
  <circle cx="155" cy="185" r="5" fill="#48bb78"/>
  <rect x="145" y="170" width="8" height="8" rx="2" fill="#718096"/>
  <text x="195" y="193" font-family="sans-serif" font-size="11" font-weight="bold" fill="#e2e8f0">128GB</text>
  <text x="200" y="260" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#666">USB 3.0 Flash Drive</text>
  <text x="200" y="280" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#999">Zinc Alloy / 150MB/s</text>
</svg>`,

  'typec-flash.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
  <rect width="400" height="400" fill="#f8f9fa"/>
  <rect x="120" y="165" width="110" height="40" rx="8" fill="#718096"/>
  <rect x="230" y="170" width="55" height="30" rx="6" fill="#4a5568"/>
  <rect x="272" y="177" width="14" height="16" rx="3" fill="#a0aec0"/>
  <rect x="110" y="172" width="20" height="26" rx="4" fill="#4a5568"/>
  <circle cx="145" cy="185" r="4" fill="#48bb78"/>
  <rect x="145" y="175" width="70" height="6" rx="3" fill="#a0aec0" opacity="0.5"/>
  <text x="180" y="190" font-family="sans-serif" font-size="10" font-weight="bold" fill="#e2e8f0">256GB</text>
  <text x="200" y="260" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#666">Type-C Dual Drive</text>
  <text x="200" y="280" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#999">Aluminum / OTG / 200MB/s</text>
</svg>`,

  'wireless-mouse.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
  <rect width="400" height="400" fill="#f8f9fa"/>
  <ellipse cx="200" cy="195" rx="58" ry="88" fill="#4a5568"/>
  <ellipse cx="200" cy="195" rx="53" ry="83" fill="#2d3748"/>
  <line x1="200" y1="118" x2="200" y2="175" stroke="#718096" stroke-width="1.5"/>
  <rect x="190" y="125" width="20" height="32" rx="10" fill="#718096"/>
  <circle cx="200" cy="140" r="4" fill="#a0aec0"/>
  <circle cx="170" cy="180" r="3" fill="#718096"/>
  <circle cx="230" cy="180" r="3" fill="#718096"/>
  <text x="200" y="320" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#666">Wireless Silent Mouse</text>
  <text x="200" y="340" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#999">2.4G / 1600DPI</text>
</svg>`,

  'keyboard-mouse.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
  <rect width="400" height="400" fill="#f8f9fa"/>
  <rect x="40" y="195" width="230" height="75" rx="8" fill="#4a5568"/>
  <rect x="48" y="203" width="214" height="59" rx="4" fill="#2d3748"/>
  <g fill="#718096">
    <rect x="56" y="210" width="14" height="14" rx="2"/><rect x="74" y="210" width="14" height="14" rx="2"/>
    <rect x="92" y="210" width="14" height="14" rx="2"/><rect x="110" y="210" width="14" height="14" rx="2"/>
    <rect x="128" y="210" width="14" height="14" rx="2"/><rect x="146" y="210" width="14" height="14" rx="2"/>
    <rect x="164" y="210" width="14" height="14" rx="2"/><rect x="182" y="210" width="14" height="14" rx="2"/>
    <rect x="200" y="210" width="14" height="14" rx="2"/><rect x="218" y="210" width="14" height="14" rx="2"/>
    <rect x="236" y="210" width="14" height="14" rx="2"/>
    <rect x="56" y="230" width="14" height="14" rx="2"/><rect x="74" y="230" width="14" height="14" rx="2"/>
    <rect x="92" y="230" width="14" height="14" rx="2"/><rect x="110" y="230" width="14" height="14" rx="2"/>
    <rect x="128" y="230" width="14" height="14" rx="2"/><rect x="146" y="230" width="14" height="14" rx="2"/>
    <rect x="164" y="230" width="14" height="14" rx="2"/><rect x="182" y="230" width="14" height="14" rx="2"/>
    <rect x="200" y="230" width="14" height="14" rx="2"/><rect x="218" y="230" width="14" height="14" rx="2"/>
    <rect x="236" y="230" width="14" height="14" rx="2"/>
    <rect x="56" y="248" width="14" height="14" rx="2"/><rect x="74" y="248" width="14" height="14" rx="2"/>
    <rect x="92" y="248" width="14" height="14" rx="2"/><rect x="110" y="248" width="14" height="14" rx="2"/>
    <rect x="128" y="248" width="60" height="14" rx="2"/>
    <rect x="200" y="248" width="14" height="14" rx="2"/><rect x="218" y="248" width="14" height="14" rx="2"/>
    <rect x="236" y="248" width="14" height="14" rx="2"/>
  </g>
  <ellipse cx="320" cy="210" rx="28" ry="42" fill="#4a5568"/>
  <ellipse cx="320" cy="210" rx="24" ry="38" fill="#2d3748"/>
  <rect x="310" y="182" width="20" height="18" rx="9" fill="#718096"/>
  <text x="200" y="320" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#666">Keyboard + Mouse</text>
  <text x="200" y="340" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#999">2.4G / 104 Keys / Silent</text>
</svg>`,

  'gaming-mouse.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
  <rect width="400" height="400" fill="#0d1117"/>
  <ellipse cx="200" cy="195" rx="62" ry="92" fill="#21262d"/>
  <ellipse cx="200" cy="195" rx="57" ry="87" fill="#0d1117"/>
  <line x1="200" y1="115" x2="200" y2="172" stroke="#30363d" stroke-width="1.5"/>
  <rect x="187" y="122" width="26" height="35" rx="13" fill="#21262d"/>
  <path d="M148 178 Q200 155 252 178" stroke="#f85149" stroke-width="2.5" fill="none"/>
  <path d="M148 198 Q200 175 252 198" stroke="#a371f7" stroke-width="2.5" fill="none"/>
  <path d="M148 218 Q200 195 252 218" stroke="#58a6ff" stroke-width="2.5" fill="none"/>
  <circle cx="162" cy="158" r="4" fill="#f85149"/>
  <circle cx="238" cy="158" r="4" fill="#3fb950"/>
  <text x="200" y="330" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#8b949e">Gaming Mouse RGB</text>
  <text x="200" y="350" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#484f58">10000 DPI / 8 Programmable</text>
</svg>`,

  'magnetic-band.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
  <rect width="400" height="400" fill="#f8f9fa"/>
  <rect x="172" y="40" width="56" height="280" rx="28" fill="#a0aec0"/>
  <rect x="177" y="45" width="46" height="270" rx="23" fill="#cbd5e0"/>
  <rect x="187" y="90" width="26" height="6" rx="3" fill="#718096"/>
  <rect x="187" y="108" width="26" height="6" rx="3" fill="#718096"/>
  <rect x="187" y="126" width="26" height="6" rx="3" fill="#718096"/>
  <rect x="187" y="144" width="26" height="6" rx="3" fill="#718096"/>
  <rect x="187" y="162" width="26" height="6" rx="3" fill="#718096"/>
  <rect x="187" y="180" width="26" height="6" rx="3" fill="#718096"/>
  <rect x="187" y="198" width="26" height="6" rx="3" fill="#718096"/>
  <rect x="187" y="216" width="26" height="6" rx="3" fill="#718096"/>
  <circle cx="200" cy="265" r="8" fill="#4a5568"/>
  <text x="200" y="350" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#666">316L Stainless Steel</text>
  <text x="200" y="370" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#999">Magnetic Fold Clasp</text>
</svg>`,

  'silicone-band.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
  <rect width="400" height="400" fill="#f8f9fa"/>
  <rect x="172" y="40" width="56" height="280" rx="28" fill="#48bb78"/>
  <rect x="177" y="45" width="46" height="270" rx="23" fill="#38a169"/>
  <circle cx="200" cy="90" r="7" fill="#2f855a"/>
  <circle cx="200" cy="112" r="7" fill="#2f855a"/>
  <circle cx="200" cy="134" r="7" fill="#2f855a"/>
  <circle cx="200" cy="156" r="7" fill="#2f855a"/>
  <circle cx="200" cy="178" r="7" fill="#2f855a"/>
  <circle cx="200" cy="200" r="7" fill="#2f855a"/>
  <circle cx="200" cy="222" r="7" fill="#2f855a"/>
  <text x="200" y="350" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#666">Liquid Silicone Sport</text>
  <text x="200" y="370" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#999">Breathable / Multi-Color</text>
</svg>`,

  'watch-charger.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
  <rect width="400" height="400" fill="#f8f9fa"/>
  <rect x="150" y="210" width="100" height="50" rx="10" fill="#4a5568"/>
  <rect x="160" y="218" width="80" height="34" rx="8" fill="#2d3748"/>
  <circle cx="200" cy="235" r="10" fill="#4299e1"/>
  <circle cx="200" cy="235" r="5" fill="#63b3ed"/>
  <path d="M200 260 L200 285 Q200 295 190 295 L130 295" stroke="#4a5568" stroke-width="4" fill="none"/>
  <rect x="110" y="290" width="30" height="12" rx="4" fill="#4a5568"/>
  <circle cx="200" cy="175" r="28" fill="none" stroke="#a0aec0" stroke-width="2.5"/>
  <rect x="190" y="160" width="20" height="30" rx="10" fill="#a0aec0"/>
  <text x="200" y="340" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#666">Watch Magnetic Charger</text>
  <text x="200" y="360" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#999">MFi / USB-C / 1.5m</text>
</svg>`,

  'band-strap.svg': `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
  <rect width="400" height="400" fill="#f8f9fa"/>
  <rect x="172" y="40" width="56" height="280" rx="28" fill="#4299e1"/>
  <rect x="177" y="45" width="46" height="270" rx="23" fill="#3182ce"/>
  <rect x="187" y="140" width="26" height="50" rx="4" fill="#2b6cb0"/>
  <rect x="192" y="150" width="16" height="6" rx="2" fill="#63b3ed"/>
  <rect x="192" y="164" width="16" height="6" rx="2" fill="#63b3ed"/>
  <rect x="192" y="178" width="16" height="6" rx="2" fill="#63b3ed"/>
  <text x="200" y="350" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#666">TPU Fitness Band</text>
  <text x="200" y="370" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#999">Fit for Xiaomi / Huawei</text>
</svg>`,
};

Object.entries(svgs).forEach(([filename, svg]) => {
  fs.writeFileSync(path.join(dir, filename), svg.trim());
  console.log('Created:', filename);
});

console.log('Done! Created', Object.keys(svgs).length + 1, 'SVG files (including adapter-hub.svg)');
