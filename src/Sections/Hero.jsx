import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo">
        <p className="logo">Elmehdi Sadki</p>
      </div>

      <div className="mobile-menu-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`nav-links ${isMobileMenuOpen ? 'nav-links-mobile' : ''}`}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#education" onClick={closeMenu}>Education</a></li>
        <li><a href="#technologies" onClick={closeMenu}>Technologies</a></li>
        
        
       
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
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
        <p style={{ marginTop: '10px', color: '#ccc', maxWidth: '500px' }}>
          Specialized in the <strong>MERN Stack</strong> and <strong>AI Integration</strong>. 
          Building scalable, cloud-native web applications.
        </p>
        
        <div className="media-section">
          {/* Updated Social Links based on your CV */}
          <a href="https://www.linkedin.com/in/elmehdi-sadki" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:elmehdi.sadki@outlook.fr">
            <FaEnvelope />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>

        <div className='hero-btn'>
          {/* CV Download Button */}
          {/* Ensure 'ELMEHDI_SADKI.pdf' is inside your project's 'public' folder */}
          <a href="/ELMEHDI_SADKI.pdf" download="Elmehdi_Sadki_CV.pdf">
            <button className="btn--primary">Download CV</button>
          </a>
          
          <a href="#contact">
            <button className="btn--ghost">Contact Me</button>
          </a>
        </div>
      </div>
      
      <div className='hero-img'>
        {/* Replace with your actual image path */}
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