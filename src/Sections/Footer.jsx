import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* About Me */}
        <div className="footer-section">
          <h3>About Me</h3>
          <p>
            Hi, I’m <b>Mehdi Sadki</b>, a <b>Full Stack Developer</b> from <b>Fès, Morocco</b>. 
            I build modern, responsive web applications and enjoy exploring cloud and DevOps technologies. 
            I recently graduated and I’m passionate about creating impactful solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about"><i className="fas fa-user"></i> About</a></li>
            <li><a href="#projects"><i className="fas fa-code"></i> Projects</a></li>
            <li><a href="#contact"><i className="fas fa-envelope"></i> Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact Me</h3>
          <p><i className="fas fa-phone"></i> +212612667045</p>
          <p><i className="fas fa-envelope"></i> elmehdi.sadki@outlook.fr</p>
          <p><i className="fas fa-map-marker-alt"></i> Fès, Morocco</p>
          
          <div className="social-icons">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:youremail@example.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Mehdi Sadki. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
