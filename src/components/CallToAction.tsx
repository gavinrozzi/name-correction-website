import React from 'react';
import { SITE } from '../siteLinks';

/** The main site's closing gradient banner. */
const CallToAction: React.FC = () => {
  return (
    <section className="cta-banner">
      <div className="container">
        <h2 className="cta-title">Thanks for understanding</h2>
        <p className="cta-text">
          It's Rozzi, with two Zs. I am looking forward to connecting on gavinrozzi.com.
        </p>
        <div className="cta-actions">
          <a href={`${SITE}/`} className="btn btn-primary">Visit My Website</a>
          <a href={`${SITE}/portfolio/`} className="btn btn-secondary">View My Work</a>
          <a href={`${SITE}/contact/`} className="btn btn-secondary">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
