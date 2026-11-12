import React from 'react';
import { ArrowDown, ExternalLink, Mail } from 'lucide-react';
import { LinkedInIcon } from './BrandIcons';
import { SITE, LINKEDIN } from '../siteLinks';

/** Same layout as the main site's homepage hero: text left, headshot right, one row of actions. */
const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-main">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="hero-line">Oops! Did you mean</span>{' '}
              <span className="hero-line">Gavin <span className="hero-accent">Rozzi</span>?</span>
            </h1>
            <p className="hero-subtitle">
              There is no person named "Gavin Rossi." My last name is spelled with two Zs.
            </p>
            <p className="hero-value">Pronounced ROZ-zee. It rhymes with paparazzi.</p>
            <p className="hero-description">
              If you've landed here, you may have misspelled my name. It happens quite often, so I
              created this site to clear up the confusion and point you to my actual website,{' '}
              <a href={`${SITE}/`} className="text-link">gavinrozzi.com</a>.
            </p>
          </div>

          <div className="hero-image">
            <div className="headshot-frame">
              <img
                src="/images/profile.jpg"
                alt="Professional headshot of Gavin Rozzi"
                className="headshot"
                width={320}
                height={320}
                loading="eager"
              />
            </div>
          </div>

          <div className="hero-actions actions-row">
            <a href={`${SITE}/`} className="btn btn-primary">
              <ExternalLink size={18} />Visit gavinrozzi.com
            </a>
            <a href={LINKEDIN} className="btn btn-linkedin" target="_blank" rel="me noopener noreferrer">
              <LinkedInIcon size={18} />Connect on LinkedIn
            </a>
            <a href={`${SITE}/contact/`} className="btn btn-contact">
              <Mail size={18} />Contact Gavin
            </a>
            <a href="#about-me" className="btn btn-quiet">
              Learn More<ArrowDown size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
