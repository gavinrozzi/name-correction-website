import React, { useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { LinkedInIcon } from './BrandIcons';
import { SITE, LINKEDIN, mainSiteNav } from '../siteLinks';
import type { Theme } from '../hooks/useTheme';

interface SiteHeaderProps {
  theme: Theme;
  onToggleTheme: () => void;
}

/** The main site's header, with every link leading back to gavinrozzi.com. */
const SiteHeader: React.FC<SiteHeaderProps> = ({ theme, onToggleTheme }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="site-nav container" aria-label="gavinrozzi.com">
        <a href={`${SITE}/`} className="brand-name">Gavin Rozzi</a>

        <ul className={`nav-menu ${open ? 'is-open' : ''}`} id="primary-nav">
          <li><a href={`${SITE}/`} className="nav-link">Home</a></li>
          {mainSiteNav.map((item) => (
            <li key={item.path}>
              <a href={`${SITE}${item.path}`} className="nav-link">{item.name}</a>
            </li>
          ))}
        </ul>

        <div className="header-icons">
          <a href={LINKEDIN} className="header-icon" target="_blank" rel="me noopener noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <button
            type="button"
            className="header-icon is-boxed"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button
            type="button"
            className="header-icon nav-toggle"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="primary-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default SiteHeader;
