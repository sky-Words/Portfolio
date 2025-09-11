import React from 'react';


const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <h2 className="about__title">About Me</h2>
        <div className="about__content">
          <div className="about__text">
            <p>
              I’m <strong>El Mehdi Sadki</strong>, a <strong>Junior Full Stack Web Developer</strong> passionate about building modern, user-friendly applications.
              Recently graduated in <strong>Digital Development – Web Full Stack</strong> at <strong>OFPPT Al Adarissa, Fès</strong>,
              I work with <strong>React.js</strong>, <strong>Express.js</strong>, <strong>MongoDB</strong>, <strong>Laravel</strong>, and <strong>Python</strong>.
            </p>
            <p>
              I’m curious about <strong>AI</strong> and <strong>cloud-native</strong> solutions, and I thrive in collaborative teams where I can solve challenges with creativity and adaptability.
            </p>
          </div>
          
          <div className="about__skills">
            <h3>Technologies I Work With</h3>
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
                <span>Express.js</span>
              </div>
              <div className="skill__item">
                <div className="skill__icon">
                  <i className="fas fa-database"></i>
                </div>
                <span>MongoDB</span>
              </div>

              <div className="skill__item">
                <div className="skill__icon">
                  <i className="fab fa-python"></i>
                </div>
                <span>Python</span>
              </div>
              <div className="skill__item">
                <div className="skill__icon">
                  <i className="fas fa-brain"></i>
                </div>
                <span>AI</span>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default About;