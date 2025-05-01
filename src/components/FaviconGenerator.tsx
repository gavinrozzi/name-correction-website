import React, { useEffect } from 'react';

interface FaviconGeneratorProps {
  initials: string;
  darkMode?: boolean;
}

const FaviconGenerator: React.FC<FaviconGeneratorProps> = ({ initials, darkMode = false }) => {
  useEffect(() => {
    // Only run in browser environment
    if (typeof document === 'undefined') return;

    // Create SVG
    const generateFaviconSVG = () => {
      const svgNS = 'http://www.w3.org/2000/svg';
      const svg = document.createElementNS(svgNS, 'svg');
      svg.setAttribute('width', '32');
      svg.setAttribute('height', '32');
      svg.setAttribute('viewBox', '0 0 32 32');

      // Create gradient
      const defs = document.createElementNS(svgNS, 'defs');
      const gradient = document.createElementNS(svgNS, 'linearGradient');
      gradient.setAttribute('id', 'faviconGradient');
      gradient.setAttribute('x1', '0%');
      gradient.setAttribute('y1', '0%');
      gradient.setAttribute('x2', '100%');
      gradient.setAttribute('y2', '100%');

      const stop1 = document.createElementNS(svgNS, 'stop');
      stop1.setAttribute('offset', '0%');
      stop1.setAttribute('style', `stop-color:${darkMode ? '#1e40af' : '#3b82f6'};stop-opacity:1`);

      const stop2 = document.createElementNS(svgNS, 'stop');
      stop2.setAttribute('offset', '100%');
      stop2.setAttribute('style', `stop-color:${darkMode ? '#1e3a8a' : '#1e40af'};stop-opacity:1`);

      gradient.appendChild(stop1);
      gradient.appendChild(stop2);
      defs.appendChild(gradient);
      svg.appendChild(defs);

      // Create background
      const rect = document.createElementNS(svgNS, 'rect');
      rect.setAttribute('width', '32');
      rect.setAttribute('height', '32');
      rect.setAttribute('rx', '6');
      rect.setAttribute('fill', 'url(#faviconGradient)');
      svg.appendChild(rect);

      // Add text
      const text = document.createElementNS(svgNS, 'text');
      text.setAttribute('x', '16');
      text.setAttribute('y', '22');
      text.setAttribute('font-family', 'Arial, sans-serif');
      text.setAttribute('font-size', '16');
      text.setAttribute('font-weight', 'bold');
      text.setAttribute('text-anchor', 'middle');
      text.setAttribute('fill', 'white');
      text.textContent = initials;
      svg.appendChild(text);

      return svg;
    };

    // Convert SVG to data URL
    const svgToDataURL = (svg: SVGSVGElement) => {
      const svgData = new XMLSerializer().serializeToString(svg);
      const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
      return URL.createObjectURL(svgBlob);
    };

    // Update favicon
    const updateFavicon = () => {
      const svg = generateFaviconSVG();
      const faviconURL = svgToDataURL(svg);

      // Find existing favicon or create new one
      let link = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
      }
      link.href = faviconURL;
      link.type = 'image/svg+xml';
    };

    // Update favicon when component mounts
    updateFavicon();

    // Clean up when component unmounts
    return () => {
      const faviconURL = document.querySelector('link[rel="icon"]')?.getAttribute('href');
      if (faviconURL && faviconURL.startsWith('blob:')) {
        URL.revokeObjectURL(faviconURL);
      }
    };
  }, [initials, darkMode]);

  // This component doesn't render anything visible
  return null;
};

export default FaviconGenerator;