import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';

interface SocialLinksProps {
  darkMode?: boolean;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ darkMode = false }) => {
  return (
    <div id="social-links" className="mt-8 mb-8">
      <h3 className={`text-center ${darkMode ? 'text-zinc-300' : 'text-zinc-700'} font-medium mb-4`}>Connect with me on social media</h3>
      <div className="flex justify-center gap-5">
        <a
          href="https://www.linkedin.com/in/gavin-rozzi/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center p-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition-colors shadow-sm"
          aria-label="LinkedIn Profile"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a
          href="https://x.com/gavroz"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center p-4 rounded-full bg-gradient-to-r from-zinc-600 to-zinc-700 text-white hover:from-zinc-700 hover:to-zinc-800 transition-colors shadow-sm"
          aria-label="X (Twitter) Profile"
        >
          <Twitter className="w-6 h-6" />
        </a>
        <a
          href="https://github.com/gavinrozzi"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center p-4 rounded-full bg-gradient-to-r from-zinc-700 to-zinc-800 text-white hover:from-zinc-800 hover:to-zinc-900 transition-colors shadow-sm"
          aria-label="GitHub Profile"
        >
          <Github className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;