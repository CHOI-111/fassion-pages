const fs = require('fs');
const path = require('path');

// 간단한 1x1 픽셀 이미지를 Base64로 생성
// 실제로는 더 큰 이미지가 필요하지만, placeholder로 사용
const createPlaceholderImage = (width, height, color, text) => {
  // 간단한 SVG를 Base64로 인코딩
  const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${color}99;stop-opacity:1" />
        <stop offset="100%" style="stop-color:${color};stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect width="${width}" height="${height}" fill="url(#grad)"/>
    <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" fill="#fff" text-anchor="middle" dominant-baseline="middle" opacity="0.7">${text}</text>
  </svg>`;
  
  return Buffer.from(svg).toString('base64');
};

// 실제로는 JPEG 파일을 생성해야 하지만, 여기서는 SVG를 사용
// 브라우저에서 SVG를 이미지로 표시할 수 있도록
const publicDir = path.join(__dirname, '..', 'public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// SVG 이미지 생성 (실제로는 JPEG가 필요하지만 SVG로 대체)
const images = [
  { name: 'hero-fashion.jpg', width: 1920, height: 823, color: '#2c2c2c', text: '패션 컬렉션' },
  { name: 'brand-1.jpg', width: 800, height: 600, color: '#1a1a1a', text: '프리미엄 소재' },
  { name: 'brand-2.jpg', width: 800, height: 600, color: '#2a2a2a', text: '혁신 디자인' },
  { name: 'brand-3.jpg', width: 800, height: 600, color: '#3a3a3a', text: '품질 보장' },
];

images.forEach(img => {
  const svg = `<svg width="${img.width}" height="${img.height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="grad${img.name}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${img.color}dd;stop-opacity:1" />
        <stop offset="100%" style="stop-color:${img.color};stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect width="${img.width}" height="${img.height}" fill="url(#grad${img.name})"/>
    <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="${Math.min(img.width, img.height) / 15}" fill="#fff" text-anchor="middle" dominant-baseline="middle" opacity="0.8">${img.text}</text>
  </svg>`;
  
  // SVG를 파일로 저장 (실제로는 JPEG가 필요하지만, Next.js Image는 SVG도 지원)
  // 확장자를 .svg로 변경하거나, 또는 실제 JPEG를 생성해야 함
  // 여기서는 임시로 SVG를 저장하고, page.tsx에서 확장자를 변경
  fs.writeFileSync(path.join(publicDir, img.name.replace('.jpg', '.svg')), svg);
});

console.log('이미지 파일 생성 완료!');
