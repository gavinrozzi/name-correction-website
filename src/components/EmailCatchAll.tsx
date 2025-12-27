import React from 'react';
import { Link as LinkIcon } from 'lucide-react';

interface EmailCatchAllProps {
  darkMode?: boolean;
}

const EmailCatchAll: React.FC<EmailCatchAllProps> = ({ darkMode = false }) => {
  return (
    <div id="email-catch-all" className={`my-8 ${darkMode ? 'bg-zinc-800 border-zinc-700' : 'bg-zinc-100 border-zinc-200'} p-7 rounded-lg border`}>
      <h2 className={`text-3xl font-bold ${darkMode ? 'text-orange-400' : 'text-orange-500'} mb-3 group relative`}>
        <a href="#email-catch-all" className="flex items-center">
          Email Catch-All
          <LinkIcon className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
      </h2>
      <p className={darkMode ? 'text-zinc-300' : 'text-zinc-700'}>
        In addition to this site, I've also set up a "catch all" email under the domain gavinrossi.com.
        This ensures any email sent to an address ending in @gavinrossi.com, whether it's misspelled or not,
        will reach me. I've got your message, and I'll get back to you soon.
      </p>
    </div>
  );
};

export default EmailCatchAll;