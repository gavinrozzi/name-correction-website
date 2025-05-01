import React from 'react';
import { Home, Mail } from 'lucide-react';
import ObfuscatedEmail from './ObfuscatedEmail';

interface CallToActionProps {
  darkMode?: boolean;
}

const CallToAction: React.FC<CallToActionProps> = ({ darkMode = false }) => {
  return (
    <div className="mt-8 flex flex-col sm:flex-row gap-5 justify-center">
      <a 
        href="https://gavinrozzi.com" 
        className="inline-flex items-center justify-center px-6 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-colors shadow-sm"
      >
        <Home className="w-5 h-5 mr-3" />
        Visit My Website
      </a>
      
      <ObfuscatedEmail
        username="gr"
        domain="gavinrozzi.com"
        className={`inline-flex items-center justify-center px-6 py-4 border ${darkMode ? 'border-sky-700 text-blue-300 bg-gray-800 hover:bg-gray-700' : 'border-sky-300 text-blue-700 bg-white hover:bg-sky-50'} text-base font-medium rounded-lg transition-colors shadow-sm`}
        linkText={
          <span className="inline-flex items-center">
            <Mail className="w-5 h-5 mr-3" />
            Email Me
          </span>
        }
      />
    </div>
  );
};

export default CallToAction;