import React from 'react';
import ContourBackdrop from './ContourBackdrop';
import DynamicFavicon from './DynamicFavicon';
import Footer from './Footer';
import SiteHeader from './SiteHeader';
import { useTheme } from '../hooks/useTheme';

/** Header, backdrop and footer shared by the home page and the 404 page. */
const SiteShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <DynamicFavicon initials="GR" darkMode={theme === 'dark'} />
      <ContourBackdrop />
      <SiteHeader theme={theme} onToggleTheme={toggleTheme} />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
};

export default SiteShell;
