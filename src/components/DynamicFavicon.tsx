import React, { useEffect } from 'react';

interface DynamicFaviconProps {
  initials: string;
  darkMode: boolean;
}

const DynamicFavicon: React.FC<DynamicFaviconProps> = ({ initials, darkMode }) => {
  useEffect(() => {
    // Generate SVG favicon dynamically
    const generateFavicon = () => {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', '32');
      svg.setAttribute('height', '32');
      svg.setAttribute('viewBox', '0 0 32 32');

      // Create gradient definition
      const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
      const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
      gradient.setAttribute('id', 'dynamicGradient');
      gradient.setAttribute('x1', '0%');
      gradient.setAttribute('y1', '0%');
      gradient.setAttribute('x2', '100%');
      gradient.setAttribute('y2', '100%');

      // Set gradient colors - orange to teal (matching GavinRozzi.com branding)
      const startColor = '#f97316'; // orange-500
      const endColor = '#14b8a6';   // teal-500

      const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
      stop1.setAttribute('offset', '0%');
      stop1.setAttribute('style', `stop-color:${startColor};stop-opacity:1`);

      const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
      stop2.setAttribute('offset', '100%');
      stop2.setAttribute('style', `stop-color:${endColor};stop-opacity:1`);

      gradient.appendChild(stop1);
      gradient.appendChild(stop2);
      defs.appendChild(gradient);
      svg.appendChild(defs);

      // Create background rectangle
      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      rect.setAttribute('width', '32');
      rect.setAttribute('height', '32');
      rect.setAttribute('rx', '6');
      rect.setAttribute('fill', 'url(#dynamicGradient)');
      svg.appendChild(rect);

      // Add initials text
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
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

    // Convert SVG to data URL and update favicon
    const updateFavicon = () => {
      const svg = generateFavicon();
      const serializer = new XMLSerializer();
      const svgString = serializer.serializeToString(svg);
      const svgBlob = new Blob([svgString], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(svgBlob);

      // Update favicon link
      let link = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
      }
      
      // Clean up old blob URL if it exists
      if (link.href && link.href.startsWith('blob:')) {
        URL.revokeObjectURL(link.href);
      }
      
      link.href = url;
      link.type = 'image/svg+xml';
    };

    // Update favicon when component mounts or when dark mode changes
    updateFavicon();

    // Clean up when component unmounts
    return () => {
      const link = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
      if (link && link.href && link.href.startsWith('blob:')) {
        URL.revokeObjectURL(link.href);
      }
    };
  }, [initials, darkMode]);

  return null; // This component doesn't render anything visible
};

export default DynamicFavicon;