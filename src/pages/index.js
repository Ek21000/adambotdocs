import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';


function TypingEffect({ phrases }) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentPhrase, setCurrentPhrase] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timer;

    if (typing) {
      const targetLength = phrases[phraseIndex].length;
      const currentLength = currentPhrase.length;
      if (currentLength < targetLength) {
        timer = setTimeout(() => {
          setCurrentPhrase((prev) => phrases[phraseIndex].slice(0, prev.length + 1));
        }, 100);
      } else {
        timer = setTimeout(() => {
          setTyping(false);
        }, 1000); // Pause before erasing
      }
    } else {
      if (currentPhrase.length > 0) {
        timer = setTimeout(() => {
          setCurrentPhrase((prev) => prev.slice(0, prev.length - 1));
        }, 50);
      } else {
        setTyping(true);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentPhrase, phraseIndex, phrases, typing]);

  useEffect(() => {
    // Start typing when the component mounts
    setCurrentPhrase(phrases[phraseIndex].slice(0, 1));
  }, [phraseIndex, phrases]);

  return <span className={clsx({ [styles.typingCursor]: typing })}>{currentPhrase}</span>;
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const phrases = [
    'Your go-to utility bot!',
    'Your go-to logging bot!',
    'Your go-to autoreaction bot!',
    'Your go-to 24/7 music bot!',
    'Your go-to afk bot!',
    'Your go-to event bot!',
    'Your go-to moderation bot!',
    'Your go-to fun bot!',
    'Your go-to meme bot!',
    'Your go-to server engagement bot!',
  ];

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/* Custom Header Content */}
        <h1 className="hero__title">
          AdamBot
        </h1>
        <p className="hero__subtitle">
          <TypingEffect phrases={phrases} />
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            Documentation
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  const carouselSlides = [
    {
      image: 'https://cdn.discordapp.com/attachments/1133303870945239064/1139768229963771914/image.png',
      description: 'ban or unban anyone as your heart desires.',
    },
    {
      image: 'https://cdn.discordapp.com/attachments/1133303870945239064/1142653782166077600/image.png',
      description: 'Advanced logging in your server!',
    },
    {
      image: 'https://cdn.discordapp.com/attachments/1133303870945239064/1137275259364585512/image.png',
      description: 'Advanced AFK system!',
    },
    {
      image: 'https://cdn.discordapp.com/attachments/1133303870945239064/1137283216479354962/image.png',
      description: 'Does someone need to be punished?',
    },
    {
      image: 'https://cdn.discordapp.com/attachments/1133303870945239064/1137283438555185162/image.png',
      description: 'Did you punish the wrong person?',
    },
    {
      image: 'https://cdn.discordapp.com/attachments/1133303870945239064/1138003465310838904/image.png',
      description: 'A fun game of AdamSays!',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImageHeight, setCurrentImageHeight] = useState(0);
  const carouselContainerRef = useRef(null);

  useEffect(() => {
    // Interval for changing the slide every 5 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselSlides.length]);

  useEffect(() => {
    // Update the container height when the current slide changes
    const currentSlide = carouselSlides[currentIndex];
    const imageElement = new Image();
    imageElement.src = currentSlide.image;
    imageElement.onload = () => {
      setCurrentImageHeight(imageElement.height);
    };
  }, [currentIndex, carouselSlides]);

  useEffect(() => {
    // Set the initial height of the carousel container
    if (carouselContainerRef.current) {
      carouselContainerRef.current.style.height = `${currentImageHeight}px`;
    }
  }, [currentImageHeight]);


  const [userData, setUserData] = useState(null); // State to hold API response data

  useEffect(() => {
    // Fetch data from the API
    fetch('https://api.lanyard.rest/v1/users/1143649930951544884')
      .then(response => response.json())
      .then(data => setUserData(data.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Function to determine status color based on Discord status
function getStatusColor(status) {
  switch (status) {
    case 'online':
      return '#43B581'; // Discord green
    case 'dnd':
      return '#F04747'; // Discord red
    case 'idle':
      return '#FAA61A'; // Discord yellow
    default:
      return '#747F8D'; // Discord gray
  }
}

  return (
    <Layout
      title={`AdamBot - ${siteConfig.title}`}
      description="AdamBot - Your go-to utility, event, and fun bot for Discord!"
    >
      <HomepageHeader />
      <main>
        <div className="container">
          <br />
          {/* Custom Main Content */}
          <h2 className="text--center">Commands</h2>
          <div className="row">
            <div className="col col--6">
              <h3>Utility Commands:</h3>
              <ul>
                <li>/initialise - Initialise an account with the bot.</li>
                <li>/weather - Show the weather of a place.</li>
                <li>/afk - Go AFK!</li>
                <li>/botinfo - Show information and statistics about the bot.</li>
                <li>/poll - Create a poll.</li>
                <li>/coinflip - Flip a coin.</li>
                <li>/nick - Set someone's nickname to something.</li>
                <li>/kick - Kick someone from YOUR server!</li>
                <li>/timeout-add - Timeout a member for a set duration.</li>
                <li>/timeout-remove - Remove the timeout from a member.</li>
                <li>/ban-add - Ban a member from the guild.</li>
                <li>/ban-remove - Unban a member from the guild.</li>
                <li>/logging-setp - Setup logging in your server.</li>
                <li>/autoreact-setp - Setup autoreact in your server.</li>
              </ul>
            </div>
            <div className="col col--6">
              <h3>Fun Commands:</h3>
              <ul>
                <li>/catfact - Show a catfact.</li>
                <li>/dogpic - Show a random dog picture.</li>
                <li>/clickbutton - Start Click The Button Event.</li>
                <li>/endevent - End the Click The Button Event and show the winner.</li>
                <li>/leaderboard - Show the top clickers in the server.</li>
                <li>/count - Show how many times you've clicked the button.</li>
                <li>/adamsays - Start a game of adamsays.</li>
                <li>/eliminate - Eliminate a player from an adamsays game (adam only).</li>
                <li>/cancelgame - Cancel all running games of AdamSays in this server!</li>
                <li>/meme - Show a random wholesome meme.</li>
                <li>/spinner - Spin a fidget spinner!</li>
                <li>/spinner-scores - Show the global spinner leaderboard.</li>
                <li>/one-in-a-million - Guess a number for one-in-a-million!</li>
                <li>/one-in-a-million-lb - Show winners for each category.</li>
              </ul>
            </div>
          </div>
          {/* Blank space */}
          <div className={styles['blank-space']} />
          <h2 className="text--center">Screenshots</h2>

          {/* Carousel */}
          <div
            ref={carouselContainerRef}
            className={styles['carousel-container']}
            style={{
              position: 'relative',
              overflow: 'hidden',
              width: '100%',
              maxWidth: '700px',
              margin: '0 auto',
            }}
          >
            <div
              className={styles['carousel-track']}
              style={{
                display: 'flex',
                transition: 'transform 0.3s ease-in-out',
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {carouselSlides.map((slide, index) => (
                <div key={index} className={styles['carousel-slide']}>
                  <img src={slide.image} alt={`Slide ${index + 1}`} />
                  <p>{slide.description}</p>
                </div>
              ))}
            </div>
            </div>
          
          
          
          {/* Blank space */}
          <div className={styles['blank-space']} />


          {/* Server info and buttons section */}
          <div className={styles['server-info-section']}>
            <h2 className="text--center">Cool Stats and Important Links</h2>
            <p>Server Count: ~30</p>
            <p>Member Count: ~12000</p>
            <p>Ping: ~100 ms</p>
            <p>Uptime: ~99.5%</p>
            <div className={styles.buttons}>
            <Link className="button button--secondary button--lg" to="https://adambot.vercel.app/support">
              Support
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="https://adambot.vercel.app/invite"
            >
              Invite
            </Link>
            <Link className="button button--secondary button--lg" to="https://adambot.vercel.app/vote">
              Vote
            </Link>
          
          </div>
            {/* Blank space */}
            <div className={styles['blank-space']} />
          </div>
          <h2 className="text--center">At A Glance</h2>
          {/* At a Glance Section */}
          {userData && (
            
            <div
    className={styles['at-a-glance']}
    style={{
      background: '#202225', // Discord dark theme background color
      padding: '20px',
      width: '80%',
      borderRadius: '100px', // Original border radius value
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center', // Center horizontally
      margin: '0 auto', // Center the entire div
    }}
  >
    <div
      className={styles['profile-picture']}
      style={{
        borderRadius: '50%',
        overflow: 'hidden',
        marginRight: '20px',
        width: '80px',
        height: '80px',
      }}
    >
      <img
        src={`https://cdn.discordapp.com/avatars/${userData.discord_user.id}/${userData.discord_user.avatar}.png`}
        alt="User Profile"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      
    </div>
    <div>
      <p style={{ marginBottom: '5px', color: '#fff' }}>
        <strong>{userData.discord_user.username}#{userData.discord_user.discriminator}</strong>
      </p>
      <p style={{ marginBottom: '5px', color: '#fff' }}>
        {userData.activities.length > 0 ? userData.activities[0].name : 'None'}
      </p>
      <p style={{ color: '#fff' }}>
        
        {userData.discord_status === 'dnd' && ' 🔴 Do Not Disturb'}
        {userData.discord_status === 'idle' && ' 🟡 Idle'}
        {userData.discord_status === 'online' && ' 🟢 Online'}
        {userData.discord_status === 'offline' && ' ⚪ Offline'}
      </p>
      
    </div>
  </div>
)}
{/* Blank space */}
<div className={styles['blank-space']} />
        </div>
      </main>
    </Layout>
  );
}
