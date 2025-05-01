import React from 'react';
import { Link as LinkIcon } from 'lucide-react';

interface EmailCatchAllProps {
  darkMode?: boolean;
}

const EmailCatchAll: React.FC<EmailCatchAllProps> = ({ darkMode = false }) => {
  return (
    <div id="email-catch-all" className={`my-8 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-slate-100 border-slate-200'} p-7 rounded-lg border`}>
      <h2 className={`text-3xl font-bold ${darkMode ? 'text-blue-300' : 'text-blue-800'} mb-3 group relative`}>
        <a href="#email-catch-all" className="flex items-center">
          Email Catch-All
          <LinkIcon className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
      </h2>
      <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
        In addition to this site, I've also set up a "catch all" email under the domain gavinrossi.com. 
        This ensures any email sent to an address ending in @gavinrossi.com, whether it's misspelled or not, 
        will reach me. I've got your message, and I'll get back to you soon.
      </p>
    </div>
  );
};

export default EmailCatchAll;