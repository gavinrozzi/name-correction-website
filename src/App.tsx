import React, { useState, useEffect } from 'react';
import SEOHead from './components/SEOHead';
import Header from './components/Header';
import ProfileImage from './components/ProfileImage';
import ContentSection from './components/ContentSection';
import CallToAction from './components/CallToAction';
import SocialLinks from './components/SocialLinks';
import ShareBar from './components/ShareBar';
import Footer from './components/Footer';
import NameComparison from './components/NameComparison';
import DynamicFavicon from './components/DynamicFavicon';
import { useShare } from './hooks/useShare';
import { Moon, Sun } from 'lucide-react';

function App() {
  // Configuration data
  const ogImageUrl = "https://og-image-generator.vercel.app/api/og?title=Not%20Gavin%20Rossi%20-%20It's%20Gavin%20Rozzi&subtitle=My%20last%20name%20is%20spelled%20with%20two%20Zs";
  const domain = "https://gavinrozzi.com";
  const profileImageSrc = "/images/profile.jpg";

  // Pronunciation guide data
  const pronunciationGuide = [
    { incorrect: "ROH-zee", correct: "RAH-zee" },
    { incorrect: "ROSS-ee", correct: "RAH-zee" },
    { incorrect: "ROH-see", correct: "RAH-zee" }
  ];

  // Dark mode state
  const [darkMode, setDarkMode] = useState(() => {
    // Check for saved preference or system preference
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      return savedMode === 'true';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Update dark mode in localStorage and apply class to document
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Custom hook for sharing functionality
  const { handleShare } = useShare();

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gradient-to-br from-gray-900 via-blue-950 to-gray-950 text-white' : 'bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900'}`}>
      <SEOHead 
        title="Gavin Rozzi - Name Clarification"
        description="There is no person named 'Gavin Rossi' - my last name is spelled with two Zs. This page exists to clarify the common misspelling of Gavin Rozzi's name."
        keywords="Gavin Rozzi, Gavin Rossi, name spelling, name correction, Rozzi not Rossi, pronunciation of Rozzi"
        ogImageUrl={ogImageUrl}
        domain={domain}
      />
      
      {/* Dynamic Favicon */}
      <DynamicFavicon initials="GR" darkMode={darkMode} />

      {/* Dark mode toggle button */}
      <button 
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 z-50 p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white'} rounded-xl shadow-lg overflow-hidden relative`}>
          {/* Header */}
          <Header darkMode={darkMode} />
          
          {/* Name Comparison - Moved to top */}
          <div className="bg-gradient-to-r from-blue-700 to-blue-600 py-6 px-6 border-b border-blue-500">
            <NameComparison />
          </div>

          {/* Main content */}
          <div className="p-8 md:p-10">
            {/* Profile Image */}
            <ProfileImage src={profileImageSrc} alt="Gavin Rozzi" darkMode={darkMode} />
            
            {/* Content Sections */}
            <ContentSection pronunciationGuide={pronunciationGuide} darkMode={darkMode} />
            
            {/* Call to Action */}
            <CallToAction darkMode={darkMode} />
            
            {/* Social Media Links */}
            <SocialLinks darkMode={darkMode} />
            
            {/* Social Share Bar */}
            <ShareBar onShare={handleShare} darkMode={darkMode} />
          </div>
          
          {/* Footer */}
          <Footer darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
}

export default App;