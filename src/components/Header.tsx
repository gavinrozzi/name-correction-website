import React, { useState, useCallback } from 'react';
import { ChevronDown, ExternalLink, Linkedin, Twitter, Users, Info } from 'lucide-react';

interface HeaderProps {
  darkMode?: boolean;
}

const Header: React.FC<HeaderProps> = ({ darkMode = false }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  
  // Memoized scroll function to prevent unnecessary re-renders
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Handlers for tooltip visibility
  const showTooltip = useCallback(() => setIsTooltipVisible(true), []);
  const hideTooltip = useCallback(() => setIsTooltipVisible(false), []);

  return (
    <header 
      className="bg-gradient-to-r from-indigo-800 to-blue-700 py-8 md:py-10 px-4 md:px-6 text-center relative overflow-hidden"
      role="banner"
    >
      {/* Decorative elements - with aria-hidden for screen readers */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-24 h-24 rounded-full bg-white blur-xl"></div>
        <div className="absolute bottom-0 right-1/4 w-32 h-32 rounded-full bg-blue-300 blur-xl"></div>
      </div>
      
      <div className="relative z-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 tracking-tight leading-tight">
          Oops! Did you mean <span 
            className="relative inline-block"
            onMouseEnter={showTooltip}
            onMouseLeave={hideTooltip}
            onFocus={showTooltip}
            onBlur={hideTooltip}
            tabIndex={0}
            role="button"
            aria-describedby="name-pronunciation"
          >
            <span className="underline decoration-2 decoration-blue-300 hover:decoration-white transition-colors">Gavin Rozzi</span>
            
            {/* Tooltip */}
            {isTooltipVisible && (
              <div 
                id="name-pronunciation"
                className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-white text-blue-800 text-sm px-3 py-2 rounded shadow-lg w-max max-w-xs z-10 pointer-events-none"
                role="tooltip"
              >
                Pronounced: <strong>RAH-zee</strong> (not ROH-see)
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 border-8 border-transparent border-b-white"></div>
              </div>
            )}
          </span>?
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl font-semibold text-blue-50 max-w-3xl mx-auto whitespace-normal mb-4">
          There is <span className="underline decoration-2 decoration-red-300">no person</span> named "Gavin Rossi" - my last name is spelled with <span className="inline-block bg-blue-600 px-1.5 py-0.5 rounded">two Zs</span>
        </p>
        
        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <button 
            onClick={() => scrollToSection('table-of-contents')}
            className="inline-flex items-center justify-center px-5 py-2 bg-white/15 hover:bg-white/25 text-white rounded-full backdrop-blur-sm transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Scroll to table of contents"
          >
            <Info className="w-4 h-4 mr-2" />
            Learn more
            <ChevronDown className="w-4 h-4 ml-2 animate-bounce" />
          </button>
          
          <a 
            href="https://gavinrozzi.com" 
            className="inline-flex items-center justify-center px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Gavin Rozzi's official website"
          >
            <span className="mr-2">Visit gavinrozzi.com</span>
            <ExternalLink className="w-4 h-4" />
          </a>
          
          <button
            onClick={() => scrollToSection('social-links')}
            className="inline-flex items-center justify-center px-5 py-2 bg-white/15 hover:bg-white/25 text-white rounded-full backdrop-blur-sm transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Connect with me on social media"
          >
            Connect
            <Users className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;