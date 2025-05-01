import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { AlertTriangle, Home, ArrowLeft, ExternalLink, Search, ChevronRight } from 'lucide-react';
import { analyzePath, getRelatedContentSuggestions } from './utils/urlMatcher';

interface NotFoundProps {
  darkMode?: boolean;
}

const NotFound: React.FC<NotFoundProps> = ({ darkMode = false }) => {
  const [currentPath, setCurrentPath] = useState<string>('');
  const [suggestion, setSuggestion] = useState<{
    suggestedUrl: string;
    contentType: string;
    confidence: 'high' | 'medium' | 'low';
  } | null>(null);
  const [relatedContent, setRelatedContent] = useState<Array<{
    url: string;
    title: string;
    type: string;
  }>>([]);

  useEffect(() => {
    // Get the current path that resulted in 404
    const path = window.location.pathname;
    setCurrentPath(path);
    
    // Analyze the path for potential matches
    const pathSuggestion = analyzePath(path);
    setSuggestion(pathSuggestion);
    
    // Get related content suggestions
    const related = getRelatedContentSuggestions(path);
    setRelatedContent(related);
  }, []);

  // Function to render confidence indicator
  const renderConfidence = (confidence: 'high' | 'medium' | 'low') => {
    const baseClasses = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";
    
    switch (confidence) {
      case 'high':
        return (
          <span className={`${baseClasses} ${darkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800'}`}>
            High Match
          </span>
        );
      case 'medium':
        return (
          <span className={`${baseClasses} ${darkMode ? 'bg-yellow-900 text-yellow-200' : 'bg-yellow-100 text-yellow-800'}`}>
            Possible Match
          </span>
        );
      case 'low':
        return (
          <span className={`${baseClasses} ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-800'}`}>
            Suggested
          </span>
        );
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gradient-to-br from-gray-900 via-blue-950 to-gray-950 text-white' : 'bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900'} flex items-center justify-center p-4`}>
      <Helmet>
        <title>Page Not Found - Gavin Rozzi</title>
        <meta name="description" content="The page you're looking for doesn't exist. It may have been moved or removed." />
      </Helmet>

      <div className={`max-w-2xl w-full ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-xl overflow-hidden`}>
        <div className="bg-gradient-to-r from-red-600 to-red-500 p-6 flex items-center justify-center">
          <AlertTriangle className="w-16 h-16 text-white" />
        </div>
        
        <div className="p-8">
          <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} mb-2 text-center`}>404</h1>
          <h2 className={`text-xl font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-700'} mb-4 text-center`}>Page Not Found</h2>
          
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 text-center`}>
            The page you're looking for doesn't exist or has been moved. 
            Perhaps you were looking for information about Gavin Rozzi (not Rossi)?
          </p>
          
          {/* URL Suggestion Section */}
          {suggestion && (
            <div className={`mb-6 p-4 rounded-lg ${darkMode ? 'bg-blue-900/30 border border-blue-800' : 'bg-blue-50 border border-blue-100'}`}>
              <div className="flex items-center mb-2">
                <Search className={`w-5 h-5 mr-2 ${darkMode ? 'text-blue-300' : 'text-blue-600'}`} />
                <h3 className={`font-medium ${darkMode ? 'text-blue-200' : 'text-blue-800'}`}>
                  Did you mean to visit this page?
                </h3>
                <div className="ml-auto">
                  {renderConfidence(suggestion.confidence)}
                </div>
              </div>
              
              <div className={`p-3 rounded ${darkMode ? 'bg-gray-800' : 'bg-white'} flex items-center`}>
                <div className="flex-1 truncate">
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {suggestion.contentType.charAt(0).toUpperCase() + suggestion.contentType.slice(1)}:
                  </p>
                  <p className={`font-medium truncate ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                    {suggestion.suggestedUrl}
                  </p>
                </div>
                <a 
                  href={suggestion.suggestedUrl}
                  className={`ml-4 flex-shrink-0 inline-flex items-center px-3 py-1 rounded-md ${darkMode ? 'bg-blue-700 hover:bg-blue-600 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'} transition-colors text-sm font-medium`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit
                  <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                </a>
              </div>
            </div>
          )}
          
          {/* Related Content Suggestions */}
          {relatedContent.length > 0 && (
            <div className={`mb-6 p-4 rounded-lg ${darkMode ? 'bg-gray-700 border border-gray-600' : 'bg-gray-50 border border-gray-200'}`}>
              <h3 className={`font-medium mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'} flex items-center`}>
                <Search className={`w-5 h-5 mr-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} />
                Related Content You Might Be Looking For
              </h3>
              
              <ul className={`space-y-2 ${darkMode ? 'divide-gray-600' : 'divide-gray-200'} divide-y`}>
                {relatedContent.map((item, index) => (
                  <li key={index} className={`${index > 0 ? 'pt-2' : ''}`}>
                    <a 
                      href={item.url}
                      className={`group flex items-center ${darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-100'} p-2 rounded-md transition-colors`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className={`inline-flex items-center justify-center w-8 h-8 rounded-lg ${darkMode ? 'bg-gray-800 text-blue-300' : 'bg-blue-50 text-blue-600'} mr-3`}>
                        {item.type === 'blog post' && <span className="text-lg">📝</span>}
                        {item.type === 'project' && <span className="text-lg">🔧</span>}
                        {item.type === 'tag' && <span className="text-lg">🏷️</span>}
                        {item.type === 'publication' && <span className="text-lg">📚</span>}
                        {!['blog post', 'project', 'tag', 'publication'].includes(item.type) && <span className="text-lg">📄</span>}
                      </span>
                      <div className="flex-1">
                        <p className={`font-medium ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                          {item.title}
                        </p>
                        <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                        </p>
                      </div>
                      <ChevronRight className={`w-4 h-4 ${darkMode ? 'text-gray-400 group-hover:text-gray-300' : 'text-gray-400 group-hover:text-gray-600'} transition-colors`} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/"
              className={`inline-flex items-center justify-center px-5 py-3 rounded-lg ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'} transition-colors`}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </a>
            
            <a 
              href="/"
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              <Home className="w-5 h-5 mr-2" />
              Home Page
            </a>
          </div>
          
          <div className={`mt-8 pt-6 border-t ${darkMode ? 'border-gray-700 text-gray-400' : 'border-gray-200 text-gray-500'} text-center text-sm`}>
            <p>Did you mean to visit <a href="https://gavinrozzi.com" className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} font-medium`}>gavinrozzi.com</a>?</p>
            <p className="mt-2 font-bold">Remember: It's Rozzi with two Zs, not Rossi!</p>
            
            {currentPath && (
              <p className={`mt-4 ${darkMode ? 'text-gray-500' : 'text-gray-400'} text-xs`}>
                Path: {currentPath}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;