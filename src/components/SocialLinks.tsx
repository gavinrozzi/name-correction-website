import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';

interface SocialLinksProps {
  darkMode?: boolean;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ darkMode = false }) => {
  return (
    <div id="social-links" className="mt-8 mb-8">
      <h3 className={`text-center ${darkMode ? 'text-gray-300' : 'text-gray-700'} font-medium mb-4`}>Connect with me on social media</h3>
      <div className="flex justify-center gap-5">
        <a 
          href="https://www.linkedin.com/in/gavin-rozzi/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center p-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-colors shadow-sm"
          aria-label="LinkedIn Profile"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a 
          href="https://x.com/gavroz" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center p-4 rounded-full bg-gradient-to-r from-slate-600 to-slate-700 text-white hover:from-slate-700 hover:to-slate-800 transition-colors shadow-sm"
          aria-label="X (Twitter) Profile"
        >
          <Twitter className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;