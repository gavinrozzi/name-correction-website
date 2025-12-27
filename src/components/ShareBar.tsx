import React from 'react';
import { Share2, Facebook, Twitter, Linkedin, Link } from 'lucide-react';

interface ShareBarProps {
  onShare: (platform: string) => Promise<void>;
  darkMode?: boolean;
}

const ShareBar: React.FC<ShareBarProps> = ({ onShare, darkMode = false }) => {
  return (
    <div className={`mt-10 ${darkMode ? 'bg-gradient-to-r from-zinc-800 to-zinc-700/50 border-zinc-700' : 'bg-gradient-to-r from-zinc-100 to-orange-50/30 border-zinc-200'} p-6 rounded-lg border shadow-sm`}>
      <h3 className={`text-center ${darkMode ? 'text-orange-400' : 'text-orange-500'} font-medium mb-4 flex items-center justify-center`}>
        <Share2 className="w-5 h-5 mr-3" /> Share this page
      </h3>
      <div className="flex justify-center gap-5 py-2">
        <button
          onClick={() => onShare('facebook')}
          className={`p-4 rounded-full ${darkMode ? 'bg-orange-500/20 text-orange-400 hover:bg-orange-500/30' : 'bg-orange-100 text-orange-500 hover:bg-orange-200'} transition-colors shadow-sm`}
          aria-label="Share on Facebook"
        >
          <Facebook className="w-6 h-6" />
        </button>
        <button
          onClick={() => onShare('twitter')}
          className={`p-4 rounded-full ${darkMode ? 'bg-teal-500/20 text-teal-400 hover:bg-teal-500/30' : 'bg-teal-100 text-teal-500 hover:bg-teal-200'} transition-colors shadow-sm`}
          aria-label="Share on Twitter"
        >
          <Twitter className="w-6 h-6" />
        </button>
        <button
          onClick={() => onShare('linkedin')}
          className={`p-4 rounded-full ${darkMode ? 'bg-orange-500/20 text-orange-400 hover:bg-orange-500/30' : 'bg-orange-100 text-orange-600 hover:bg-orange-200'} transition-colors shadow-sm`}
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="w-6 h-6" />
        </button>
        <button
          onClick={() => onShare('copy')}
          className={`p-4 rounded-full ${darkMode ? 'bg-zinc-700 text-zinc-300 hover:bg-zinc-600' : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'} transition-colors shadow-sm`}
          aria-label="Copy link"
        >
          <Link className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default ShareBar;