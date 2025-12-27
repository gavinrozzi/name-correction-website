import React from 'react';
import PronunciationGuide from './PronunciationGuide';
import FunFacts from './FunFacts';
import RozziHistory from './RozziHistory';
import EmailCatchAll from './EmailCatchAll';
import AboutMe from './ProfessionalIntro';
import { BookOpen, AlertCircle, Award, Mail, ChevronRight, History, Link as LinkIcon, User } from 'lucide-react';

interface ContentSectionProps {
  pronunciationGuide: Array<{
    incorrect: string;
    correct: string;
  }>;
  darkMode?: boolean;
}

const ContentSection: React.FC<ContentSectionProps> = ({ pronunciationGuide, darkMode = false }) => {
  const funFacts = [
    {
      id: 1,
      text: "The surname Rozzi has Italian origins, primarily from central Italy."
    },
    {
      id: 2,
      text: "While \"Rossi\" (with one Z) is one of the most common Italian surnames, \"Rozzi\" (with two Zs) is much less common."
    },
    {
      id: 3,
      text: "I've received countless emails, letters, and even official documents with my name misspelled as \"Rossi\"!"
    }
  ];

  const tocItems = [
    { id: "about-me", title: "About Me", icon: <User className="w-5 h-5" /> },
    { id: "pronunciation-guide", title: "Pronunciation Guide", icon: <BookOpen className="w-5 h-5" /> },
    { id: "fun-facts-about-my-name", title: "Fun Facts About My Name", icon: <Award className="w-5 h-5" /> },
    { id: "rozzi-family-history", title: "Rozzi Family History", icon: <History className="w-5 h-5" /> },
    { id: "email-catch-all", title: "Email Catch-All", icon: <Mail className="w-5 h-5" /> }
  ];

  return (
    <div className={`prose ${darkMode ? 'prose-invert' : 'prose-slate'} max-w-none`}>
      <nav id="table-of-contents" aria-label="Table of Contents" className={`mb-8 ${darkMode ? 'bg-gradient-to-r from-zinc-800 to-zinc-700/50 border-zinc-700' : 'bg-gradient-to-r from-zinc-100 to-orange-50/30 border-zinc-200'} rounded-xl border shadow-sm overflow-hidden`}>
        <div className="bg-gradient-to-r from-orange-500 to-teal-500 py-3 px-5">
          <h2 className="text-xl font-bold text-white m-0 flex items-center group relative">
            <a href="#table-of-contents" className="flex items-center text-white no-underline">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
              </svg>
              Table of Contents
              <LinkIcon className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-orange-100" />
            </a>
          </h2>
        </div>
        
        <ul className={`p-0 m-0 divide-y ${darkMode ? 'divide-zinc-700' : 'divide-zinc-200'}`}>
          {tocItems.map((item) => (
            <li key={item.id} className="p-0 m-0">
              <a
                href={`#${item.id}`}
                className={`flex items-center px-5 py-3 ${darkMode ? 'text-zinc-300 hover:bg-orange-500/10' : 'text-zinc-700 hover:bg-orange-50/50'} transition-colors duration-200 no-underline group`}
                aria-label={`Navigate to ${item.title} section`}
              >
                <span className={`inline-flex items-center justify-center w-8 h-8 rounded-lg ${darkMode ? 'bg-orange-500/20 text-orange-400' : 'bg-orange-50 text-orange-500'} mr-3 group-hover:${darkMode ? 'bg-orange-500/30' : 'bg-orange-100'} transition-colors duration-200`}>
                  {item.icon}
                </span>
                <span className="font-medium text-base">{item.title}</span>
                <ChevronRight className={`w-4 h-4 ml-auto ${darkMode ? 'text-orange-400 group-hover:text-orange-300' : 'text-orange-400 group-hover:text-orange-500'} transition-colors duration-200 transform group-hover:translate-x-1`} />
              </a>
            </li>
          ))}
        </ul>

        <div className={`${darkMode ? 'bg-zinc-800 text-zinc-400 border-zinc-700' : 'bg-zinc-50 text-zinc-600 border-zinc-200'} px-5 py-2 text-xs text-center border-t`}>
          Click on any section to navigate directly
        </div>
      </nav>
      
      <p className={`text-xl md:text-2xl ${darkMode ? 'text-zinc-300' : 'text-zinc-700'} leading-relaxed text-center font-medium px-4`}>
        If you've landed here, you may have misspelled my name, <strong>Gavin Rozzi</strong>. It happens quite 
        often, so I created this site to help eliminate confusion.
      </p>
      
      <AboutMe darkMode={darkMode} />
      
      <PronunciationGuide pronunciationGuide={pronunciationGuide} darkMode={darkMode} />
      
      <p className={`${darkMode ? 'text-zinc-300' : 'text-zinc-700'} my-6 text-center`}>
        My last name is somewhat uncommon, while the name "Rossi" is far more common,
        which often results in confusion and misspellings. I'm here to set the record straight.
      </p>
      
      <FunFacts facts={funFacts} darkMode={darkMode} />
      
      <RozziHistory darkMode={darkMode} />
      
      <p className={`${darkMode ? 'text-zinc-300' : 'text-zinc-700'} my-6 text-center`}>
        This site exists to redirect you to my actual website,
        <a href="https://gavinrozzi.com" className={`${darkMode ? 'text-orange-400 hover:text-orange-300' : 'text-orange-500 hover:text-orange-600'} font-medium transition-colors`}>
          {" "}gavinrozzi.com
        </a> as well as provide an overview of the proper spelling of my name.
      </p>

      <EmailCatchAll darkMode={darkMode} />

      <p className={`${darkMode ? 'text-zinc-300' : 'text-zinc-700'} my-6 text-center`}>
        Thanks for understanding. I am looking forward to connecting on
        <a href="https://gavinrozzi.com" className={`${darkMode ? 'text-orange-400 hover:text-orange-300' : 'text-orange-500 hover:text-orange-600'} font-medium transition-colors`}>
          {" "}gavinrozzi.com
        </a>!
      </p>
    </div>
  );
};

export default ContentSection;