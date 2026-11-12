import React from 'react';
import Section from './Section';
import { faq } from '../seo';

/** The same questions the page declares as FAQPage structured data, shown in full. */
const Faq: React.FC = () => {
  return (
    <Section id="faq" title="Frequently Asked Questions">
      <dl className="card-grid">
        {faq.map((item) => (
          <div key={item.question} className="card">
            <dt><h3 className="card-title">{item.question}</h3></dt>
            <dd>
              <p>
                {item.answer}
                {item.link && (
                  <>
                    {' '}
                    <a href={item.link.href} className="text-link">{item.link.text}</a>
                  </>
                )}
              </p>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
};

export default Faq;
