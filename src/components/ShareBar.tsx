import React, { useState } from 'react';
import { Check, Facebook, Link as LinkIcon } from 'lucide-react';
import { LinkedInIcon, XIcon } from './BrandIcons';

interface ShareBarProps {
  onShare: (platform: string) => Promise<void>;
}

const ShareBar: React.FC<ShareBarProps> = ({ onShare }) => {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section className="section" aria-label="Share this page">
      <div className="container share-row">
        <span>Know someone who keeps writing "Rossi"? Share this page:</span>
        <button type="button" className="chip-btn" onClick={() => onShare('linkedin')}>
          <LinkedInIcon size={14} />LinkedIn
        </button>
        <button type="button" className="chip-btn" onClick={() => onShare('twitter')}>
          <XIcon size={14} />X
        </button>
        <button type="button" className="chip-btn" onClick={() => onShare('facebook')}>
          <Facebook size={14} />Facebook
        </button>
        <button type="button" className="chip-btn" onClick={copyLink}>
          {copied ? <><Check size={14} />Copied</> : <><LinkIcon size={14} />Copy link</>}
        </button>
      </div>
    </section>
  );
};

export default ShareBar;
