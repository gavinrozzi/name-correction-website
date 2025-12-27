import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface TopNavBarProps {
  darkMode?: boolean;
}

const TopNavBar: React.FC<TopNavBarProps> = ({ darkMode = true }) => {
  return (
    <nav
      className={`
        w-full py-3 px-4
        ${darkMode
          ? 'bg-zinc-950 border-b border-orange-500/30'
          : 'bg-orange-50 border-b border-orange-200'
        }
      `}
    >
      <div className="max-w-6xl mx-auto">
        <a
          href="https://gavinrozzi.com"
          className={`
            inline-flex items-center gap-2
            text-sm font-medium
            transition-colors duration-200
            ${darkMode
              ? 'text-orange-400 hover:text-orange-300'
              : 'text-orange-600 hover:text-orange-700'
            }
          `}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to GavinRozzi.com</span>
        </a>
      </div>
    </nav>
  );
};

export default TopNavBar;
