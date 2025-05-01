import React from 'react';
import { Share2, Facebook, Twitter, Linkedin, Link } from 'lucide-react';

interface ShareBarProps {
  onShare: (platform: string) => Promise<void>;
  darkMode?: boolean;
}

const ShareBar: React.FC<ShareBarProps> = ({ onShare, darkMode = false }) => {
  return (
    <div className={`mt-10 ${darkMode ? 'bg-gradient-to-r from-gray-800 to-blue-900/50 border-gray-700' : 'bg-gradient-to-r from-slate-100 to-blue-50/50 border-slate-200'} p-6 rounded-lg border shadow-sm`}>
      <h3 className={`text-center ${darkMode ? 'text-blue-300' : 'text-blue-700'} font-medium mb-4 flex items-center justify-center`}>
        <Share2 className="w-5 h-5 mr-3" /> Share this page
      </h3>
      <div className="flex justify-center gap-5 py-2">
        <button 
          onClick={() => onShare('facebook')} 
          className={`p-4 rounded-full ${darkMode ? 'bg-blue-900/50 text-blue-300 hover:bg-blue-800' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'} transition-colors shadow-sm`}
          aria-label="Share on Facebook"
        >
          <Facebook className="w-6 h-6" />
        </button>
        <button 
          onClick={() => onShare('twitter')} 
          className={`p-4 rounded-full ${darkMode ? 'bg-sky-900/50 text-sky-300 hover:bg-sky-800' : 'bg-sky-100 text-sky-600 hover:bg-sky-200'} transition-colors shadow-sm`}
          aria-label="Share on Twitter"
        >
          <Twitter className="w-6 h-6" />
        </button>
        <button 
          onClick={() => onShare('linkedin')} 
          className={`p-4 rounded-full ${darkMode ? 'bg-blue-900/50 text-blue-300 hover:bg-blue-800' : 'bg-blue-100 text-blue-700 hover:bg-blue-200'} transition-colors shadow-sm`}
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="w-6 h-6" />
        </button>
        <button 
          onClick={() => onShare('copy')} 
          className={`p-4 rounded-full ${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'} transition-colors shadow-sm`}
          aria-label="Copy link"
        >
          <Link className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default ShareBar;