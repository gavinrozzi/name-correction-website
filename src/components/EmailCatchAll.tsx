import React from 'react';
import Section from './Section';

const EmailCatchAll: React.FC = () => {
  return (
    <Section id="email-catch-all" title="Email Catch-All">
      <div className="prose">
        <p>
          In addition to this site, I've also set up a "catch all" email under the domain gavinrossi.com.
          This ensures any email sent to an address ending in @gavinrossi.com, whether it's misspelled or not,
          still gets delivered instead of bouncing.
        </p>
      </div>
    </Section>
  );
};

export default EmailCatchAll;
