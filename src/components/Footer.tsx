import React from 'react';
import ObfuscatedEmail from './ObfuscatedEmail';

interface FooterProps {
  darkMode?: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode = false }) => {
  return (
    <div className={`${darkMode ? 'bg-zinc-900 border-zinc-700 text-zinc-300' : 'bg-zinc-100 border-zinc-200 text-zinc-800'} px-8 py-6 border-t`}>
      <div className="text-center text-sm">
        <p>© {new Date().getFullYear()} Gavin Rozzi. All rights reserved.</p>
        <p className="mt-2 flex items-center justify-center">
          <span className="mr-1">Contact:</span>
          <ObfuscatedEmail
            username="gr"
            domain="gavinrozzi.com"
            className={`${darkMode ? 'text-orange-400 hover:text-orange-300' : 'text-orange-500 hover:text-orange-600'} inline-flex items-center`}
          />
        </p>
      </div>
    </div>
  );
};

export default Footer;