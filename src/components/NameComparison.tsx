import React from 'react';
import { ArrowRight, Link as LinkIcon, X, Check } from 'lucide-react';

const NameComparison: React.FC = () => {
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
        <ArrowRight className="w-10 h-10 text-sky-200 hidden md:block" />
        <div className="text-center p-6 bg-white rounded-lg shadow-md relative w-64 h-40 flex flex-col items-center justify-center">
          <div className="absolute -top-3 -left-3 bg-green-500 rounded-full p-1.5 shadow-md">
            <Check className="w-5 h-5 text-white" />
          </div>
          <p className="text-blue-600 text-3xl font-bold">Gavin Rozzi</p>
          <p className="text-gray-600 text-lg mt-3">Correct</p>
        </div>
      </div>
    </div>
  );
};

export default NameComparison;