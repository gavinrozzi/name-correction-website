import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  lead?: React.ReactNode;
  children: React.ReactNode;
}

/** A page section: plain heading on the backdrop, content in cards below, as on the main site. */
const Section: React.FC<SectionProps> = ({ id, title, lead, children }) => (
  <section id={id} className="section">
    <div className="container">
      <h2 className="section-title">
        <a href={`#${id}`}>{title}</a>
      </h2>
      {lead && <p className="section-lead">{lead}</p>}
      {children}
    </div>
  </section>
);

export default Section;
