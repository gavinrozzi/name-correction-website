import React from 'react';
import Section from './Section';

interface FunFact {
  id: number;
  text: string;
  link?: { href: string; label: string };
}

interface FunFactsProps {
  facts: FunFact[];
}

const FunFacts: React.FC<FunFactsProps> = ({ facts }) => {
  return (
    <Section
      id="fun-facts-about-my-name"
      title="Fun Facts About My Name"
      lead={`My last name is somewhat uncommon, while the name "Rossi" is far more common, which often results in confusion and misspellings. I'm here to set the record straight.`}
    >
      <ul className="card-grid">
        {facts.map((fact) => (
          <li key={fact.id} className="card fact">
            <span className="fact-number" aria-hidden="true">{fact.id}</span>
            <p>
              {fact.text}
              {fact.link && (
                <>
                  {' '}
                  <a href={fact.link.href} target="_blank" rel="noopener noreferrer" className="text-link">
                    {fact.link.label}
                  </a>
                </>
              )}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default FunFacts;
