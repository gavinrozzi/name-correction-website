import React from 'react';
import ObfuscatedEmail from './ObfuscatedEmail';

interface FooterProps {
  darkMode?: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode = false }) => {
  return (
    <div className={`${darkMode ? 'bg-gray-900 border-gray-700 text-blue-300' : 'bg-slate-50 border-slate-200 text-blue-800'} px-8 py-6 border-t`}>
      <div className="text-center text-sm">
        <p>© {new Date().getFullYear()} Gavin Rozzi. All rights reserved.</p>
        <p className="mt-2 flex items-center justify-center">
          <span className="mr-1">Contact:</span> 
          <ObfuscatedEmail 
            username="gr" 
            domain="gavinrozzi.com" 
            className={`${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} inline-flex items-center`} 
          />
        </p>
      </div>
    </div>
  );
};

export default Footer;