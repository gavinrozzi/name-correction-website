import React from 'react';
import { History, ExternalLink, Link as LinkIcon } from 'lucide-react';

interface RozziHistoryProps {
  darkMode?: boolean;
}

const RozziHistory: React.FC<RozziHistoryProps> = ({ darkMode = false }) => {
  return (
    <div id="rozzi-family-history" className={`my-8 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-slate-100 border-slate-200'} p-7 rounded-lg border`}>
      <div className="flex items-center mb-4">
        <History className={`w-7 h-7 ${darkMode ? 'text-blue-300' : 'text-blue-600'} mr-3`} />
        <h2 className={`text-3xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'} group relative`}>
          <a href="#rozzi-family-history" className="flex items-center">
            Rozzi Family History
            <LinkIcon className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </h2>
      </div>
      
      <div className="space-y-6">
        <div className={`${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-slate-200'} p-5 rounded-lg border`}>
          <h3 className={`text-xl font-semibold ${darkMode ? 'text-blue-300' : 'text-blue-700'} mb-4 group relative`}>
            <a href="#notable-rozzi-family-members" id="notable-rozzi-family-members" className="flex items-center">
              Notable Rozzi Family Members
              <LinkIcon className="w-3.5 h-3.5 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </h3>
          <div className="flex flex-col gap-6">
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-slate-50'} p-4 rounded-lg`}>
              <h4 className={`font-medium ${darkMode ? 'text-gray-100' : 'text-gray-800'} text-lg`}>Samuel J. Rozzi</h4>
              <p className={`${darkMode ? 'text-blue-300' : 'text-blue-600'} text-sm font-medium mb-2`}>Nassau County Police Commissioner</p>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                My great uncle, Samuel J. Rozzi, served as the Nassau County, NY police commissioner. He led the police force with distinction and was known for his dedication to public service.
              </p>
              <div className={`mt-3 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-slate-50 border-slate-200'} p-3 rounded-lg border`}>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-sm`}>
                  <span className="font-medium">Historical Note:</span> During his tenure, Commissioner Rozzi oversaw the Nassau County Police Department at the time of the infamous Lufthansa Heist in 1978 — one of the largest cash robberies in American history that later inspired scenes in the movie "Goodfellas."
                </p>
              </div>
              <a 
                href="https://www.nytimes.com/1992/07/31/nyregion/samuel-j-rozzi-67-police-commissioner-led-force-in-nassau.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`inline-flex items-center mt-3 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} transition-colors`}
              >
                <span>Read more in The New York Times</span>
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
            
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-slate-50'} p-4 rounded-lg`}>
              <h4 className={`font-medium ${darkMode ? 'text-gray-100' : 'text-gray-800'} text-lg`}>Rozzi Fireworks</h4>
              <p className={`${darkMode ? 'text-blue-300' : 'text-blue-600'} text-sm font-medium mb-2`}>Family-owned fireworks company</p>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                While I don't believe I'm directly related to them, the Rozzi Fireworks Company has been creating spectacular displays for over a century. Their vibrant shows have become a tradition in many communities.
              </p>
              <a 
                href="https://www.cincinnati.com/story/entertainment/2021/07/02/rozzi-fireworks-vibrant-displays-have-been-around-over-century-how-rozzi-fireworks-became-part-cinci/7733708002/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`inline-flex items-center mt-3 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} transition-colors`}
              >
                <span>Learn about Rozzi Fireworks</span>
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
        
        <div className={`${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-slate-200'} p-5 rounded-lg border`}>
          <h3 className={`text-xl font-semibold ${darkMode ? 'text-blue-300' : 'text-blue-700'} mb-3 group relative`}>
            <a href="#the-rozzi-name" id="the-rozzi-name" className="flex items-center">
              The Rozzi Name
              <LinkIcon className="w-3.5 h-3.5 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </h3>
          <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
            The Rozzi surname has a rich history in Italian-American communities. While less common than "Rossi," the Rozzi name has made its mark in various fields including public service, entertainment, and business.
          </p>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mt-3`}>
            Many Rozzi families immigrated to the United States in the early 20th century, bringing with them traditions and values that have been passed down through generations. The distinctive double "z" in our name represents our unique heritage and family identity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RozziHistory;