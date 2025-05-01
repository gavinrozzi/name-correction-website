import React, { useEffect, useState } from 'react';

// This component adds additional protection against email harvesting bots
const EmailProtection: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Only run this code on the client side
    setMounted(true);

    // Add honeypot email addresses that are hidden from users but visible to bots
    const addHoneypotEmails = () => {
      const honeypotContainer = document.createElement('div');
      honeypotContainer.style.display = 'none';
      honeypotContainer.setAttribute('aria-hidden', 'true');
      
      // Add several fake email addresses as honeypots
      honeypotContainer.innerHTML = `
        <a href="mailto:not-real@example.com">Email</a>
        <a href="mailto:honeypot@trap.com">Contact</a>
        <a href="mailto:do-not-use@fake-email.net">Support</a>
      `;
      
      document.body.appendChild(honeypotContainer);
    };

    // Add CSS to confuse email harvesters
    const addAntiScrapingCSS = () => {
      const style = document.createElement('style');
      style.textContent = `
        .email-protection { unicode-bidi: bidi-override; direction: rtl; }
        [data-email]:before { content: attr(data-email); }
        [data-email]:after { content: "@"; }
      `;
      document.head.appendChild(style);
    };

    // Execute protection measures
    addHoneypotEmails();
    addAntiScrapingCSS();

    // Clean up function
    return () => {
      const honeypots = document.querySelectorAll('[aria-hidden="true"]');
      honeypots.forEach(el => el.remove());
    };
  }, []);

  // Don't render anything visible
  return mounted ? <div id="email-protection" style={{ display: 'none' }} /> : null;
};

export default EmailProtection;