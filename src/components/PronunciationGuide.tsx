import React from 'react';
import { BookOpen, ArrowRight, Check, X, Volume2, AlertTriangle, Link as LinkIcon } from 'lucide-react';

interface PronunciationItem {
  incorrect: string;
  correct: string;
}

interface PronunciationGuideProps {
  pronunciationGuide: PronunciationItem[];
  darkMode?: boolean;
}

const PronunciationGuide: React.FC<PronunciationGuideProps> = ({ pronunciationGuide, darkMode = false }) => {
  return (
    <div id="pronunciation-guide" className={`my-8 ${darkMode ? 'bg-zinc-800/50 border-zinc-700' : 'bg-orange-50/50 border-orange-100'} p-7 rounded-lg border`}>
      <div className="flex items-center justify-center mb-4">
        <BookOpen className={`w-7 h-7 ${darkMode ? 'text-orange-400' : 'text-orange-500'} mr-3`} />
        <h2 className={`text-3xl font-bold ${darkMode ? 'text-zinc-100' : 'text-zinc-800'} group relative`}>
          <a href="#pronunciation-guide" className="flex items-center">
            Pronunciation Guide
            <LinkIcon className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </h2>
      </div>
      <p className={`${darkMode ? 'text-zinc-300' : 'text-zinc-700'} mb-5 text-center text-lg`}>
        Not sure how to pronounce "Rozzi"? Here's a simple guide:
      </p>

      {/* Correct pronunciation breakdown */}
      <div className={`${darkMode ? 'bg-zinc-800 border-zinc-700' : 'bg-white border-orange-100'} p-5 rounded-lg border mb-6`}>
        <div className="flex items-center justify-center mb-3">
          <Volume2 className={`w-5 h-5 ${darkMode ? 'text-orange-400' : 'text-orange-500'} mr-2`} />
          <span className={`${darkMode ? 'text-zinc-100' : 'text-zinc-800'} font-bold text-xl`}>RAH-zee</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
          <div className={`${darkMode ? 'bg-orange-500/10' : 'bg-orange-50/70'} p-3 rounded-lg`}>
            <p className={`font-semibold ${darkMode ? 'text-zinc-100' : 'text-zinc-800'} mb-1`}>First syllable: <span className="text-lg">RAH</span></p>
            <p className={darkMode ? 'text-zinc-300' : 'text-zinc-700'}>Like in "father" or "car"</p>
            <p className={`${darkMode ? 'text-zinc-400' : 'text-zinc-600'} italic`}>This syllable is stressed</p>
          </div>

          <div className={`${darkMode ? 'bg-teal-500/10' : 'bg-teal-50/70'} p-3 rounded-lg`}>
            <p className={`font-semibold ${darkMode ? 'text-zinc-100' : 'text-zinc-800'} mb-1`}>Second syllable: <span className="text-lg">zee</span></p>
            <p className={darkMode ? 'text-zinc-300' : 'text-zinc-700'}>Like in "zebra" or "breeze"</p>
            <p className={`${darkMode ? 'text-zinc-400' : 'text-zinc-600'} italic`}>This syllable is unstressed</p>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        {pronunciationGuide.map((item, index) => (
          <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 justify-center">
            <div className={`flex items-center ${darkMode ? 'bg-zinc-800 border-red-900' : 'bg-white border-red-100'} px-5 py-3 rounded-lg border`}>
              <X className="w-4 h-4 text-red-500 mr-3" />
              <span className={`${darkMode ? 'text-red-300' : 'text-red-700'} font-medium text-lg`}>{item.incorrect}</span>
            </div>
            <ArrowRight className={`hidden sm:block w-5 h-5 ${darkMode ? 'text-zinc-500' : 'text-zinc-400'}`} />
            <div className={`flex items-center ${darkMode ? 'bg-zinc-800 border-green-900' : 'bg-white border-green-100'} px-5 py-3 rounded-lg border`}>
              <Check className="w-4 h-4 text-green-500 mr-3" />
              <span className={`${darkMode ? 'text-green-300' : 'text-green-700'} font-medium text-lg`}>{item.correct}</span>
            </div>
          </div>
        ))}
      </div>

      <div className={`mt-6 ${darkMode ? 'bg-gradient-to-r from-orange-500/10 to-zinc-800 border-zinc-700' : 'bg-gradient-to-r from-orange-50/80 to-zinc-100 border-orange-100'} p-5 rounded-lg border shadow-sm`}>
        <div className="flex items-center justify-center mb-2">
          <AlertTriangle className={`w-5 h-5 ${darkMode ? 'text-orange-400' : 'text-orange-500'} mr-2`} />
          <h3 className={`text-xl font-bold ${darkMode ? 'text-orange-300' : 'text-orange-600'}`}>Common Misconception</h3>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-3">
          <div className={`${darkMode ? 'bg-zinc-800 border-zinc-700' : 'bg-white border-zinc-200'} px-5 py-3 rounded-lg border text-center flex-1`}>
            <p className={`${darkMode ? 'text-red-300' : 'text-red-600'} font-medium text-lg mb-1 line-through`}>ROH-zee</p>
            <p className={darkMode ? 'text-zinc-300' : 'text-zinc-700'}>Like "rosy" or "cozy"</p>
          </div>

          <div className={`${darkMode ? 'text-orange-300' : 'text-orange-600'} font-bold text-xl`}>≠</div>

          <div className={`${darkMode ? 'bg-zinc-800 border-green-900' : 'bg-white border-green-200'} px-5 py-3 rounded-lg border text-center flex-1`}>
            <p className={`${darkMode ? 'text-green-300' : 'text-green-600'} font-medium text-lg mb-1`}>RAH-zee</p>
            <p className={darkMode ? 'text-zinc-300' : 'text-zinc-700'}>Like in "father" + "zebra"</p>
          </div>
        </div>

        <p className={`text-center ${darkMode ? 'text-orange-300' : 'text-orange-600'} font-medium mt-3`}>
          The first syllable has an "ah" sound, not an "oh" sound!
        </p>
      </div>

      <div className={`mt-5 ${darkMode ? 'bg-zinc-800' : 'bg-white'} p-4 rounded-lg text-center`}>
        <p className={darkMode ? 'text-zinc-300' : 'text-zinc-700'}>Words that rhyme with Rozzi:</p>
        <p className={`${darkMode ? 'text-teal-400' : 'text-teal-600'} font-bold text-xl mt-2`}>"paparazzi", "fuzzy", "jazzy"</p>
      </div>
    </div>
  );
};

export default PronunciationGuide;