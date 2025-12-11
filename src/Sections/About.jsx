import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <h2 className="about__title">About Me</h2>
        
        <div className="about__content">
          <div className="about__text">
            <p>
              I’m <strong>El Mehdi Sadki</strong>, a dedicated <strong>Full Stack Developer</strong> based in Fès. 
              Specializing in the <strong>MERN Stack</strong>, I build robust, cloud-native web applications that combine seamless user experiences with powerful backend logic.
            </p>
            <p>
              Recently graduated in <strong>Digital Development</strong> from OFPPT Al Adarissa, I have hands-on experience developing platforms integrated with <strong>Artificial Intelligence</strong>. 
              Whether it's creating custom chatbots, optimizing database architectures, or designing microservices, I am passionate about solving complex problems through code.
            </p>
            
            {/* Added CTA Buttons based on your CSS */}
            <div className="about__cta" style={{ marginTop: '30px', display: 'flex', gap: '20px' }}>
              <a href="/ELMEHDI_SADKI.pdf" download className="btn btn--primary" style={{ 
                padding: '12px 30px', 
                borderRadius: '30px', 
                textDecoration: 'none', 
                fontWeight: '600',
                background: '#ff3333',
                color: '#000'
              }}>
                Download CV
              </a>
              <a href="#contact" className="btn btn--ghost" style={{ 
                padding: '12px 30px', 
                borderRadius: '30px', 
                textDecoration: 'none', 
                fontWeight: '600',
                border: '2px solid #ff3333',
                color: '#ff3333'
              }}>
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="about__skills">
            <h3>Tech Stack</h3>
            <div className="skills__grid">
              <div className="skill__item">
                <div className="skill__icon">
                  <i className="fab fa-react"></i>
                </div>
                <span>React.js</span>
              </div>
              
              <div className="skill__item">
                <div className="skill__icon">
                  <i className="fab fa-node-js"></i>
                </div>
                <span>Node & Express</span>
              </div>
              
              <div className="skill__item">
                <div className="skill__icon">
                  <i className="fas fa-database"></i>
                </div>
                <span>MongoDB</span>
              </div>

              <div className="skill__item">
                <div className="skill__icon">
                  <i className="fab fa-laravel"></i>
                </div>
                <span>Laravel</span>
              </div>

              <div className="skill__item">
                <div className="skill__icon">
                  <i className="fas fa-server"></i>
                </div>
                <span>SQL / MySQL</span>
              </div>

              <div className="skill__item">
                <div className="skill__icon">
                  <i className="fab fa-python"></i>
                </div>
                <span>Python</span>
              </div>
              
              <div className="skill__item">
                <div className="skill__icon">
                  <i className="fab fa-git-alt"></i>
                </div>
                <span>Git & GitHub</span>
              </div>

              <div className="skill__item">
                <div className="skill__icon">
                  <i className="fas fa-robot"></i>
                </div>
                <span>AI Integration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;