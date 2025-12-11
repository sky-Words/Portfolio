import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

// Import your separate components
import About from './About';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';

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
        {/* Updated Links */}
        <li><a href="#Technologies" onClick={closeMenu}>Technologies</a></li>
        <li><a href="#education" onClick={closeMenu}>Education</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className='hero' id="home">
      <div className='hero-text'>
        <span>Hi, I am</span>
        <span className="hero-name">Elmehdi Sadki</span>
        <h1>Full Stack Developer</h1>
        <p style={{ marginTop: '10px', color: '#ccc', maxWidth: '500px' }}>
          Specialized in the <strong>MERN Stack</strong> and <strong>AI Integration</strong>. 
          Building scalable, cloud-native web applications.
        </p>
        
        <div className="media-section">
          <a href="https://www.linkedin.com/in/elmehdi-sadki" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:elmehdi.sadki@outlook.fr">
            <FaEnvelope />
          </a>
          <a href="https://github.com/sky-Words" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>

        <div className='hero-btn'>
          <a href="/ELMEHDI_SADKI.pdf" download="Elmehdi_Sadki_CV.pdf">
            <button className="btn--primary">Download CV</button>
          </a>
          
          <a href="#contact">
            <button className="btn--ghost">Contact Me</button>
          </a>
        </div>
      </div>
      
      <div className='hero-img'>
        <img src="avatar.png" alt="Elmehdi Sadki" />
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <About />      {/* Contains your Tech Stack/Technologies */}
      <Education />  {/* The new Education section */}
      <Projects />
      <Contact />
    </div>
  );
};

export default App;