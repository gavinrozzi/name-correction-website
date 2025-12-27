import React, { useState } from 'react';
import { ArrowRight, Link as LinkIcon, X, Check, Copy } from 'lucide-react';

const NameComparison: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('Gavin Rozzi');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div id="common-misspelling" className="bg-transparent">
      <h2 className="text-3xl font-bold text-white mb-4 text-center group relative">
        <a href="#common-misspelling" className="flex items-center justify-center">
          Common Misspelling
          <LinkIcon className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 py-2">
        <div className="text-center p-6 bg-white rounded-lg shadow-md relative w-64 h-40 flex flex-col items-center justify-center">
          <div className="absolute -top-3 -left-3 bg-red-500 rounded-full p-1.5 shadow-md">
            <X className="w-5 h-5 text-white" />
          </div>
          <p className="text-red-500 text-3xl font-medium line-through">Gavin Rossi</p>
          <p className="text-gray-600 text-lg mt-3">Incorrect</p>
        </div>
        <ArrowRight className="w-10 h-10 text-orange-200 hidden md:block" />
        <div className="text-center p-6 bg-white rounded-lg shadow-md relative w-64 h-40 flex flex-col items-center justify-center">
          <div className="absolute -top-3 -left-3 bg-green-500 rounded-full p-1.5 shadow-md">
            <Check className="w-5 h-5 text-white" />
          </div>
          <p className="text-teal-600 text-3xl font-bold">Gavin Rozzi</p>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 mt-3 px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-teal-600 bg-gray-100 hover:bg-teal-50 rounded-full transition-colors"
            aria-label="Copy correct spelling to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-green-600">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NameComparison;