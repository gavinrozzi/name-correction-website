import React, { useState } from 'react';
import { ArrowRight, Check, Copy, X } from 'lucide-react';
import Section from './Section';

const NameComparison: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('Gavin Rozzi');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <Section id="common-misspelling" title="Common Misspelling">
      <div className="compare">
        <div className="card compare-card">
          <span className="compare-label is-wrong"><X size={16} />Incorrect</span>
          <p className="compare-name is-wrong">Gavin Rossi</p>
          <p className="compare-note">One of the most common Italian surnames, and not mine.</p>
        </div>
        <ArrowRight size={32} className="compare-arrow" aria-hidden="true" />
        <div className="card compare-card">
          <span className="compare-label is-right"><Check size={16} />Correct</span>
          <p className="compare-name is-right">Gavin Rozzi</p>
          <button type="button" onClick={handleCopy} className="chip-btn" aria-label="Copy correct spelling to clipboard">
            {copied ? <><Check size={14} />Copied</> : <><Copy size={14} />Copy the correct spelling</>}
          </button>
        </div>
      </div>
    </Section>
  );
};

export default NameComparison;
