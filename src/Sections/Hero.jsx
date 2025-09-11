import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo">
        <p className="logo">Elmehdi Sadki</p>
      </div>

      <div className="mobile-menu-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`nav-links ${isMobileMenuOpen ? 'nav-links-mobile' : ''}`}>
        <li><a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
        <li><a href="#skills" onClick={() => setIsMobileMenuOpen(false)}>Skills</a></li>
        <li><a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</a></li>
        <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
};

const Hero = () => {
  return (
    <div className='hero' id="home">
      <div className='hero-text'>
        <span>Hi, I am</span>
        <span className="hero-name">Elmehdi Sadki</span>
        <h1>Full Stack Developer</h1>
        <div className="media-section">
          <a href='#'><FaGithub /></a>
          <a href='#'><FaLinkedin /></a>
          <a href='#'><FaTwitter /></a>
          <a href='#'><FaFacebook /></a>
        </div>
        <div className='hero-btn'>
          <button>See My Work</button>
          <button>Contact Me</button>
        </div>
      </div>
      <div className='hero-img'>
        <img src="avatar.png" alt="Elmehdi Sadki" />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Hero />
    </div>
  );
};

export default App;