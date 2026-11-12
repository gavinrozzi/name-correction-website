import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Section from './Section';
import { SITE } from '../siteLinks';

// Mirrors the current highlights on gavinrozzi.com. Update when they change there.
const links = [
  {
    title: 'NJHOMES Atlas',
    description: 'A statewide map of municipally owned vacant land, launched in September 2026.',
    path: '/portfolio/njhomes-atlas/',
  },
  {
    title: 'Bringing Veterans Home',
    description: 'The initiative behind New Jersey reaching Functional Zero for veteran homelessness.',
    path: '/portfolio/bringing-veterans-home/',
  },
  {
    title: 'NJ Eviction Guide',
    description: "Built with DCA's Office of Eviction Prevention. A 2026 NAHRO Award of Merit winner.",
    path: '/portfolio/nj-eviction-guide/',
  },
  {
    title: 'zipcodeR',
    description: 'My R package for ZIP code analysis, with 124,000+ downloads.',
    path: '/zipcoder/',
  },
  {
    title: 'Who is Gavin Rozzi?',
    description: 'The full biography, with a timeline and answers to common questions.',
    path: '/who-is-gavin-rozzi/',
  },
  {
    title: 'Resume',
    description: 'Roles, education, credentials and awards on one page.',
    path: '/gavin-rozzi-resume/',
  },
  {
    title: 'Media and speaking',
    description: 'Talks, panels, podcasts and press coverage.',
    path: '/media/',
  },
  {
    title: 'Blog',
    description: 'Articles on data science, GIS and government technology.',
    path: '/blog/',
  },
];

const MainSiteLinks: React.FC = () => {
  return (
    <Section
      id="more-on-gavinrozzi-com"
      title="More on gavinrozzi.com"
      lead="Now that the spelling is sorted, here is where to find my actual work."
    >
      <ul className="card-grid is-four">
        {links.map((link) => (
          <li key={link.path}>
            <a href={`${SITE}${link.path}`} className="link-card">
              <span>
                <span className="link-card-title">{link.title}</span>
                <span className="link-card-text">{link.description}</span>
              </span>
              <ArrowUpRight size={18} />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default MainSiteLinks;
