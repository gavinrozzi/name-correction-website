import React, { useState } from 'react';
import { Mail } from 'lucide-react';

interface ObfuscatedEmailProps {
  username: string;
  domain: string;
  className?: string;
  linkText?: string | React.ReactNode;
}

const ObfuscatedEmail: React.FC<ObfuscatedEmailProps> = ({ 
  username, 
  domain, 
  className = "", 
  linkText = null 
}) => {
  const [revealed, setRevealed] = useState(false);
  const [emailAddress, setEmailAddress] = useState('');
  
  // Assemble the email only when needed
  const assembleEmail = () => {
    if (!revealed) {
      const assembled = `${username}@${domain}`;
      setEmailAddress(assembled);
      setRevealed(true);
    }
    return emailAddress;
  };

  // Handle click to reveal and copy email
  const handleClick = (e: React.MouseEvent) => {
    const email = assembleEmail();
    
    // Don't prevent default if revealed (allow normal mailto: behavior)
    if (!revealed) {
      e.preventDefault();
    }
  };

  // Handle hover to pre-assemble email
  const handleHover = () => {
    assembleEmail();
  };

  return (
    <a
      href={revealed ? `mailto:${emailAddress}` : '#'}
      className={className}
      onClick={handleClick}
      onMouseEnter={handleHover}
      onFocus={handleHover}
      aria-label="Email address"
      rel="nofollow"
    >
      {linkText || (
        <span className="inline-flex items-center">
          <Mail className="w-5 h-5 mr-2" />
          {revealed ? emailAddress : "Email Me"}
        </span>
      )}
    </a>
  );
};

export default ObfuscatedEmail;