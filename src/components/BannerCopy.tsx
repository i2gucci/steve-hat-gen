import React, { useState } from 'react';

const CA_TEXT = 'PUMP TOKEN COMING SOON';

const BannerCopy: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CA_TEXT);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // fallback: select text
    }
  };

  return (
    <div
      className="banner"
      style={{ cursor: 'pointer', userSelect: 'all', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}
      onClick={handleCopy}
      title="Click to copy"
      tabIndex={0}
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') handleCopy(); }}
      role="button"
      aria-label="Copy contract address"
    >
      <strong>{CA_TEXT}</strong>
      <span style={{ display: 'inline-flex', alignItems: 'center' }}>
        {/* Simple copy icon SVG */}
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <rect x="6" y="6" width="9" height="11" rx="2" stroke="#000" strokeWidth="2" fill="#fff"/>
          <rect x="3" y="3" width="9" height="11" rx="2" stroke="#000" strokeWidth="2" fill="#fff"/>
        </svg>
        {copied && (
          <span style={{ marginLeft: 6, color: '#0f0', fontWeight: 700, fontSize: 13 }}>Copied!</span>
        )}
      </span>
    </div>
  );
};

export default BannerCopy;
