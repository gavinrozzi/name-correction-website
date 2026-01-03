import React from 'react';
import { Home, Mail } from 'lucide-react';

interface CallToActionProps {
  darkMode?: boolean;
}

const CallToAction: React.FC<CallToActionProps> = ({ darkMode = false }) => {
  return (
    <div className="mt-8 flex flex-col sm:flex-row gap-5 justify-center">
      <a
        href="https://gavinrozzi.com"
        className="inline-flex items-center justify-center px-6 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-orange-500 to-teal-500 hover:from-orange-600 hover:to-teal-600 transition-colors shadow-sm"
      >
        <Home className="w-5 h-5 mr-3" />
        Visit My Website
      </a>

      <a
        href="https://www.gavinrozzi.com/contact"
        className={`inline-flex items-center justify-center px-6 py-4 border ${darkMode ? 'border-zinc-600 text-orange-300 bg-zinc-800 hover:bg-zinc-700' : 'border-orange-300 text-orange-600 bg-white hover:bg-orange-50'} text-base font-medium rounded-lg transition-colors shadow-sm`}
      >
        <Mail className="w-5 h-5 mr-3" />
        Contact Me
      </a>
    </div>
  );
};

export default CallToAction;