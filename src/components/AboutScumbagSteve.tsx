import React, { useEffect, useRef } from 'react';
import steve1 from '../assets/steve1.jpg';

const AboutScumbagSteve = () => {
  return (
    <div className="about-container" style={{
      backgroundColor: '#1a1a1a',
      padding: '2rem',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      margin: '2rem auto',
      color: '#fff',
      maxWidth: '800px', // Set a maximum width for better readability
      width: '90%', // Ensure responsiveness on smaller screens
    }}>
      <h2 id="about-scumbag-steve" style={{ fontSize: '2rem', color: '#83efaa', marginBottom: '1rem' }}>Scumbag Steve: The Meme That Defined an Era</h2>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
        In the wild, unfiltered world of early 2010s internet culture, few memes captured the collective frustration with everyday jerks quite like Scumbag Steve. The meme, born from a candid Myspace photo, features a young man in a backward baseball cap, his expression teetering between smug confidence and casual indifference. This image, first thrust into the spotlight on the NPC cesspool known as Reddit in 2011, became the face of a cultural phenomenon, embodying the archetype of the inconsiderate, self-serving bro who always seems to dodge accountability.
      </p>

      <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/PNeiwIhYbls?si=OTCwYlDnjzlESc30"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{ maxWidth: '100%', borderRadius: '8px' }}
        ></iframe>
      </div>

      <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Stats:</h3>
      <ul style={{
        listStyleType: 'none',
        padding: 0,
        textAlign: 'left', // Align stats to the left for better readability
        maxWidth: '600px' // Limit the width of the stats section
      }}>
        <li style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>First appearance: 2011</li>
        <li style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Over 1 million meme variations created</li>
        <li style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Featured in countless articles and internet culture discussions</li>
      </ul>
    </div>
  );
};

const NewAboutSection = () => {
  return (
    <div className="about-container" style={{
      backgroundColor: '#1a1a1a',
      padding: '2rem',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      margin: '2rem auto',
      color: '#fff',
      maxWidth: '800px',
      width: '90%',
    }}>
      <h2 id="steve-memecoin" style={{ fontSize: '2rem', color: '#83efaa', marginBottom: '1rem' }}>STEVE Memecoin on Solana</h2>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
       Launching a token like STEVE, inspired by the Scumbag Steve meme, draws on lessons from the history of creator memecoins, offering a strategic blend of cultural resonance, community engagement, and economic potential. Past memecoins, such as TROLL, Dogecoin, Shiba Inu, and Pepe, demonstrate that tokens rooted in internet culture can gain traction by capitalizing on existing memes with strong recognition.
      </p>
    </div>
  );
};

const AdditionalAboutSection = () => {
  return (
    <div className="about-container" style={{
      backgroundColor: '#1a1a1a',
      padding: '2rem',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      margin: '2rem auto',
      color: '#fff',
      maxWidth: '800px',
      width: '90%',
    }}>
      <h2 id="who-is-scumbag-steve" style={{ fontSize: '2rem', color: '#83efaa', marginBottom: '1rem' }}>Who is Scumbag Steve?</h2>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
        Behind the Scumbag Steve meme is Blake Boston, the real-life figure whose teenage Myspace photo unwittingly became internet legend. Far from being the scumbag the meme portrays, Boston has leaned into his unexpected fame with good humor, appearing in interviews, music videos, and even embracing the "Scumbag Steve" moniker on social media. His willingness to roll with the punch has only added to the meme's enduring charm. Blake now plays in a band called Free Spirit and is a proud father of three.
      </p>
      <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
        <img src={steve1} alt="Blake Boston as Scumbag Steve" style={{ maxWidth: '100%', borderRadius: '8px' }} />
      </div>
    </div>
  );
};

const AnotherAboutSection = () => {
  return (
    <div className="about-container" style={{
      backgroundColor: '#1a1a1a',
      padding: '2rem',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      margin: '2rem auto',
      color: '#fff',
      maxWidth: '800px',
      width: '90%',
    }}>
      <h2 id="why-we-choose-bags" style={{ fontSize: '2rem', color: '#83efaa', marginBottom: '1rem' /* Updated green */ }}>Why We Are Migrating to Pump</h2>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
        We originally selected BAGS for its launch platform due to the attractive 1% royalty offered on trading volume. Due to limited support for creators outside of monetary incentive, is in the best interest of Blake Boston to be able to stream from PumpFun where he will receive direct support from the launchpad itself. 
      </p>
      <button
        onClick={() => window.open('https://apps.apple.com/us/app/pump-fun-solana-meme-coins/id6717572591', '_blank')}
        aria-label="Download the pump.fun app"
        className="button-spacing"
        style={{
          marginTop: 24,
          width: '100%',
          padding: '12px',
          fontSize: '16px',
          fontWeight: 'bold',
          backgroundColor: '#83efaa', /* Updated green */
          color: '#000',
          border: 'none',
          borderRadius: '12px',
          cursor: 'pointer',
          transition: 'background-color 0.3s, transform 0.2s',
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#6bcc8c')} /* Slightly darker green */
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#83efaa')} /* Updated green */
      >
        Download pump.fun
      </button>
    </div>
  );
};

const ContactSection = () => {
  return (
    <div id="contact" className="contact-container" style={{
      backgroundColor: '#1a1a1a',
      padding: '2rem',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      margin: '2rem auto',
      color: '#fff',
      maxWidth: '800px', // Set a maximum width for better readability
      width: '90%', // Ensure responsiveness on smaller screens
    }}>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Contact:</h3>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
        Have questions or want to collaborate? Reach out to us!
      </p>
      <ul style={{
        listStyleType: 'none',
        padding: 0,
        textAlign: 'left',
        maxWidth: '600px'
      }}>
        <li style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>
          <strong>Email: </strong> <a href="mailto:scumbag_sol@proton.me" style={{ color: '#00ff00' }}>scumbag_sol@proton.me</a>
        </li>
        <li style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>
          <strong>X (Twitter): </strong> <a href="https://x.com/BlakeBoston617" target="_blank" rel="noopener noreferrer" style={{ color: '#00ff00' }}>@BlakeBoston617</a>
        </li>
        <li style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>
          <strong>Instagram: </strong> <a href="https://www.instagram.com/irishdaddy617/" target="_blank" rel="noopener noreferrer" style={{ color: '#00ff00' }}>@irishdaddy617</a>
        </li>
        <li style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>
          <strong>Developer: </strong> <a href="https://x.com/i2gucci" target="_blank" rel="noopener noreferrer" style={{ color: '#00ff00' }}>@i2gucci</a>
        </li>
      </ul>
    </div>
  );
};

const AboutScumbagSteveWithContact = () => {
  return (
    <>
      <AboutScumbagSteve />
      <NewAboutSection />
      <AdditionalAboutSection />
      <AnotherAboutSection />
      <ContactSection />
    </>
  );
};

export default AboutScumbagSteveWithContact;
