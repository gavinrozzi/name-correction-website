import React from 'react';
import { GitHubIcon, LinkedInIcon, XIcon } from './BrandIcons';
import { SITE, LINKEDIN, GITHUB, X_PROFILE, mainSiteNav, featuredLinks } from '../siteLinks';

/** Same three-column footer as the main site; every link goes there. */
const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <div className="monogram"><span>GR</span></div>
            <h3 className="footer-title">Gavin Rozzi, MS, CPM</h3>
            <p className="footer-description">
              Government innovation and modernization executive and data scientist in New Jersey state government. Not Rossi.
            </p>
            <div className="social-links" id="social-links">
              <a href={GITHUB} className="social-link" target="_blank" rel="me noopener noreferrer" aria-label="GitHub">
                <GitHubIcon />
              </a>
              <a href={LINKEDIN} className="social-link" target="_blank" rel="me noopener noreferrer" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
              <a href={X_PROFILE} className="social-link" target="_blank" rel="me noopener noreferrer" aria-label="X">
                <XIcon />
              </a>
            </div>
          </div>

          <nav aria-label="gavinrozzi.com quick links">
            <h4 className="footer-links-title">Quick Links</h4>
            <ul className="footer-nav">
              <li><a href={`${SITE}/`} className="footer-link">Home</a></li>
              {mainSiteNav.map((item) => (
                <li key={item.path}>
                  <a href={`${SITE}${item.path}`} className="footer-link">{item.name}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="gavinrozzi.com featured pages">
            <h4 className="footer-links-title">Featured</h4>
            <ul className="footer-nav">
              {featuredLinks.map((item) => (
                <li key={item.path}>
                  <a href={`${SITE}${item.path}`} className="footer-link">{item.name}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Gavin Rozzi. All rights reserved.</p>
          {/* Same wording as the main site's footer (grwebsite: src/components/Footer.astro). */}
          <p className="footer-disclaimer">
            This personal website is maintained in my individual capacity. All views expressed are my own and do not represent my employer, the Florence Township Board of Education, or any board or organization with which I am affiliated. No state time or resources were used.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
