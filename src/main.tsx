import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
);

const Footer: React.FC = () => (
  <footer className="footer">
    <p>© {new Date().getFullYear()} Scumbag Steve Community. Built with love for meme culture.</p>
  </footer>
);

const AboutScumbagSteve: React.FC = () => (
  <div className="about-scumbag-steve">
    <h2>Who is Scumbag Steve?</h2>
    <p>
      Scumbag Steve is one of the most iconic internet memes, originating from a photograph of Blake Boston,
      also known as "Weezy B." The image features him wearing a sideways baseball cap and a fur-lined jacket,
      giving off a stereotypical "scumbag" vibe. The meme became popular in 2011 and has been used to humorously
      depict selfish or unethical behavior.
    </p>
    <p>
      <strong>Stats:</strong>
    </p>
    <ul>
      <li>First appearance: 2011</li>
      <li>Over 1 million meme variations created</li>
      <li>Featured in countless articles and internet culture discussions</li>
      <li>Blake Boston has over 100,000 followers on social media</li>
    </ul>
  </div>
);

const WhyThisTool: React.FC = () => (
  <div className="why-this-tool" style={{ maxWidth: 800, margin: '24px auto', background: '#1a1a1a', padding: 24, borderRadius: 12, boxShadow: '0px 4px 10px rgba(0,0,0,0.5)', color: '#fff' }}>
    <p>
      <strong>Why this tool?</strong> This tool allows you to add the iconic Scumbag Steve hat to any image,
      letting you create your own personalized memes and share the fun with friends!
    </p>
  </div>
);

const ExternalButtons: React.FC = () => (
  <div className="external-buttons">
    <button
      onClick={() => window.open('https://apps.apple.com/us/app/bags-trade-crypto-memes/id6473196333?platform=iphone', '_blank')}
      aria-label="Download BagsApp from the App Store"
    >
      Download BagsApp
    </button>
    <button
      onClick={() => window.open('https://x.com/BlakeBoston617', '_blank')}
      aria-label="Follow Scumbag Steve on X (Twitter)"
    >
      Follow Scumbag Steve
    </button>
    <button
      onClick={() => window.open('https://axiom.trade/@powders', '_blank')}
      aria-label="Trade on Axiom"
    >
      Trade on Axiom
    </button>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <div className="layout">
      <ExternalButtons />
      <div style={{ flex: 1 }}>
        <WhyThisTool />
        <App />
      </div>
    </div>
    <AboutScumbagSteve />
    <Footer />
  </React.StrictMode>
);
