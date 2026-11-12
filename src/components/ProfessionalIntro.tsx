import React from 'react';
import { Check } from 'lucide-react';
import Section from './Section';
import { SITE } from '../siteLinks';

const Ext: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-link">{children}</a>
);

// Facts and wording follow gavinrozzi.com (grwebsite: src/data/profile.ts). Update there first.
const AboutMe: React.FC = () => {
  return (
    <Section id="about-me" title="About Me">
      <div className="prose">
        <p>
          Hi there! I'm a government innovation and modernization executive and data scientist in New Jersey. I'm the founding Director of the DHCR Data Center at the <Ext href="https://www.nj.gov/dca/">New Jersey Department of Community Affairs</Ext>, where since March 2024 I've built the in-house team that delivers digital services for the State's affordable housing programs, including the <Ext href={`${SITE}/portfolio/nj-eviction-guide/`}>NJ Eviction Guide</Ext>, <Ext href={`${SITE}/portfolio/bringing-veterans-home/`}>Bringing Veterans Home</Ext> and <Ext href={`${SITE}/portfolio/njhomes-atlas/`}>NJHOMES Atlas</Ext>.
        </p>
        <p>
          In 2026, New Jersey reached <Ext href={`${SITE}/media/route-fifty-veteran-homelessness-2026/`}>Functional Zero for veteran homelessness</Ext>, supported by data infrastructure I designed and oversee, and I accepted <Ext href={`${SITE}/media/nahro-awards-2026/`}>four NAHRO national awards</Ext> on the Department's behalf for NJHOMES, the NJ Eviction Guide and the HERF AI model.
        </p>
        <p>
          Outside state government, I created <Ext href={`${SITE}/zipcoder/`}>zipcodeR</Ext>, an R package with 124,000+ downloads and 53+ peer-reviewed citations, and from 2017 to 2024 I built and ran <Ext href={`${SITE}/opramachine/`}>OPRAmachine</Ext>, New Jersey's first statewide public records request platform.
        </p>
        <p>
          Throughout my career, I've noticed a recurring theme: people often misspell my last name as "Rossi" instead of "Rozzi." It happens in emails, official documents, and even when I'm introduced at events. This website serves as a friendly way to clear up this common confusion. So whether you're a colleague or collaborator, now you'll know: it's Gavin Rozzi, with two Zs!
        </p>
      </div>

      <div className="card-grid" style={{ marginTop: 'var(--space-4)' }}>
        <div className="card">
          <h3 className="card-title">What I Do</h3>
          <ul className="check-list">
            <li>
              <Check size={18} />
              <span>Lead the in-house team that builds New Jersey's affordable housing data tools. See <Ext href={`${SITE}/gavin-rozzi-nj-government/`}>my work in NJ government</Ext></span>
            </li>
            <li>
              <Check size={18} />
              <span>Build open-source tools for data analysis, like my <Ext href={`${SITE}/r-packages/`}>R packages</Ext></span>
            </li>
            <li>
              <Check size={18} />
              <span>Speak and advise on government modernization. <Ext href={`${SITE}/gavin-rozzi-speaker/`}>Book me to speak</Ext> or <Ext href={`${SITE}/work-with-me/`}>work with me</Ext></span>
            </li>
          </ul>
        </div>

        <div className="card" id="recent-highlights">
          <h3 className="card-title">Recent Highlights</h3>
          <ul className="timeline">
            <li>
              <span className="timeline-date">Oct 2026</span>
              <span>Accepted <Ext href={`${SITE}/media/nahro-awards-2026/`}>four NAHRO national awards</Ext> on behalf of NJ DCA, for NJHOMES, the NJ Eviction Guide and the HERF AI model</span>
            </li>
            <li>
              <span className="timeline-date">Sept 2026</span>
              <span>Launched <Ext href={`${SITE}/portfolio/njhomes-atlas/`}>NJHOMES Atlas</Ext>, a statewide map of about 42,000 municipally owned vacant parcels across all 564 municipalities</span>
            </li>
            <li>
              <span className="timeline-date">Aug 2026</span>
              <span>Earned the Certified Public Manager (CPM) credential from the New Jersey Civil Service Commission</span>
            </li>
            <li>
              <span className="timeline-date">July 2026</span>
              <span>New Jersey reached Functional Zero for veteran homelessness. I designed and oversee the data infrastructure behind <Ext href={`${SITE}/portfolio/bringing-veterans-home/`}>Bringing Veterans Home</Ext>, covered nationally by <Ext href={`${SITE}/media/route-fifty-veteran-homelessness-2026/`}>Route Fifty</Ext></span>
            </li>
            <li>
              <span className="timeline-date">June 2026</span>
              <span>Joined the New Jersey state team in New America's <Ext href={`${SITE}/media/nj-eviction-data-response-network-2026/`}>Eviction Data Response Network</Ext>, one of 11 states selected</span>
            </li>
            <li>
              <span className="timeline-date">May 2025</span>
              <span>Member of the A4-S50 team that received the <Ext href={`${SITE}/media/governors-award-2025/`}>Governor's Team of Excellence Award</Ext></span>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default AboutMe;
