import React from 'react';
import { User, Award, Link as LinkIcon } from 'lucide-react';

interface AboutMeProps {
  darkMode?: boolean;
}

const AboutMe: React.FC<AboutMeProps> = ({ darkMode = false }) => {
  return (
    <div id="about-me" className={`my-8 ${darkMode ? 'bg-gradient-to-r from-zinc-800 to-zinc-700/50 border-zinc-700' : 'bg-gradient-to-r from-zinc-100 to-orange-50/30 border-zinc-200'} p-7 rounded-lg border`}>
      <div className="flex items-center mb-4">
        <User className={`w-7 h-7 ${darkMode ? 'text-orange-400' : 'text-orange-500'} mr-3`} />
        <h2 className={`text-3xl font-bold ${darkMode ? 'text-zinc-100' : 'text-zinc-800'} group relative`}>
          <a href="#about-me" className="flex items-center">
            About Me
            <LinkIcon className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </h2>
      </div>
      
      <div className={`prose ${darkMode ? 'prose-invert' : 'prose-slate'} max-w-none`}>
        <p className={`${darkMode ? 'text-zinc-300' : 'text-zinc-700'} leading-relaxed`}>
          Hi there! I'm a civic technologist and Director of the DHCR Data Center at the <a href="https://www.nj.gov/dca/" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-orange-400 hover:text-orange-300' : 'text-orange-600 hover:text-orange-500'} underline`}>New Jersey Department of Community Affairs</a>, where I build data infrastructure that helps residents access housing services. My work spans government digital transformation, open-source development, and making public data more accessible.
        </p>

        <p className={`${darkMode ? 'text-zinc-300' : 'text-zinc-700'} leading-relaxed mt-4`}>
          I created <a href="https://www.gavinrozzi.com/portfolio/opramachine/" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-orange-400 hover:text-orange-300' : 'text-orange-600 hover:text-orange-500'} underline`}>OPRAmachine</a>, New Jersey's first automated public records platform, and <a href="https://www.gavinrozzi.com/portfolio/zipcoder/" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-orange-400 hover:text-orange-300' : 'text-orange-600 hover:text-orange-500'} underline`}>zipcodeR</a>, an R package for spatial analysis that's been cited over 53 times in academic research. I also serve on the board of the <a href="https://njfog.org/" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-orange-400 hover:text-orange-300' : 'text-orange-600 hover:text-orange-500'} underline`}>NJ Foundation for Open Government</a>.
        </p>

        <p className={`${darkMode ? 'text-zinc-300' : 'text-zinc-700'} leading-relaxed mt-4`}>
          Throughout my career, I've noticed a recurring theme – people often misspell my last name as "Rossi" instead of "Rozzi." It happens in emails, official documents, and even when I'm introduced at events. This website serves as a friendly way to clear up this common confusion. So whether you're a colleague or collaborator, now you'll know – it's Gavin Rozzi, with two Zs!
        </p>

        <div className={`${darkMode ? 'bg-zinc-900 border-zinc-700' : 'bg-white border-zinc-200'} p-5 rounded-lg border mt-5`}>
          <h3 className={`text-xl font-semibold ${darkMode ? 'text-orange-400' : 'text-orange-500'} mb-3`}>What I Do</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <Award className={`w-5 h-5 ${darkMode ? 'text-teal-400' : 'text-teal-500'} mr-2 mt-0.5 flex-shrink-0`} />
              <span className={darkMode ? 'text-zinc-300' : undefined}>Build data infrastructure for government housing programs</span>
            </li>
            <li className="flex items-start">
              <Award className={`w-5 h-5 ${darkMode ? 'text-teal-400' : 'text-teal-500'} mr-2 mt-0.5 flex-shrink-0`} />
              <span className={darkMode ? 'text-zinc-300' : undefined}>Create open-source tools for data analysis and civic technology</span>
            </li>
            <li className="flex items-start">
              <Award className={`w-5 h-5 ${darkMode ? 'text-teal-400' : 'text-teal-500'} mr-2 mt-0.5 flex-shrink-0`} />
              <span className={darkMode ? 'text-zinc-300' : undefined}>Advance government transparency as an NJFOG board member</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;