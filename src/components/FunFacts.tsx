import React from 'react';
import { Award, Link as LinkIcon } from 'lucide-react';

interface FunFact {
  id: number;
  text: string;
}

interface FunFactsProps {
  facts: FunFact[];
  darkMode?: boolean;
}

const FunFacts: React.FC<FunFactsProps> = ({ facts, darkMode = false }) => {
  return (
    <div id="fun-facts-about-my-name" className={`my-8 ${darkMode ? 'bg-zinc-800/50 border-zinc-700' : 'bg-orange-50/50 border-orange-100'} p-7 rounded-lg border`}>
      <div className="flex items-center mb-4">
        <Award className={`w-7 h-7 ${darkMode ? 'text-orange-400' : 'text-orange-500'} mr-3`} />
        <h2 className={`text-3xl font-bold ${darkMode ? 'text-zinc-100' : 'text-zinc-800'} group relative`}>
          <a href="#fun-facts-about-my-name" className="flex items-center">
            Fun Facts About My Name
            <LinkIcon className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </h2>
      </div>
      <ul className="space-y-4 mt-4">
        {facts.map((fact) => (
          <li key={fact.id} className={`flex items-start ${darkMode ? 'bg-zinc-800' : 'bg-white'} p-4 rounded-lg`}>
            <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full ${darkMode ? 'bg-orange-500/20 text-orange-400' : 'bg-orange-100 text-orange-600'} font-bold text-sm mr-4 mt-0.5 flex-shrink-0`}>
              {fact.id}
            </span>
            <span className={darkMode ? 'text-zinc-300' : 'text-zinc-700'}>{fact.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FunFacts;