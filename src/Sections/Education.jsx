import React from 'react';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Développement Digital - Option Web Full Stack",
      institution: "OFPPT Al Adarissa, Fès",
      year: "2023 - 2025",
      description: "Comprehensive training in full-stack development, focusing on modern web technologies and agile methodologies."
    },
    {
      id: 2,
      degree: "Baccalauréat en Sciences Physiques",
      institution: "Lycée Oum El Banine, Fès",
      year: "2020",
      description: "Secondary education with a specialized focus on Physical Sciences and mathematics."
    }
  ];

  return (
    <section id="education" className="education">
      <h2 className="section-title">My <span className="accent">Education</span></h2>
      <p className="section-subtitle">Academic background and qualifications</p>
      
      <div className="education-container">
        {educationData.map((item) => (
          <div key={item.id} className="education-item">
            <div className="education-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <div className="education-content">
              <span className="education-year">{item.year}</span>
              <h3>{item.degree}</h3>
              <h4 className="institution">{item.institution}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;