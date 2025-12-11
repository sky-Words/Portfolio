import React from 'react';

const Technologies = () => {
  const techCategories = [
    {
      title: "Languages",
      items: ["Python", "SQL", "JavaScript", "PHP"],
      icon: "fas fa-code"
    },
    {
      title: "Frameworks",
      items: ["React.js", "Express.js", "Laravel"],
      icon: "fas fa-cubes"
    },
    {
      title: "Databases",
      items: ["MongoDB", "MySQL", "PostgreSQL"],
      icon: "fas fa-database"
    },
    {
      title: "CMS",
      items: ["WordPress"],
      icon: "fas fa-pencil-alt"
    },
    {
      title: "Tools",
      items: ["Git", "GitHub", "Linux (Ubuntu)"],
      icon: "fas fa-tools"
    },
    {
      title: "Modeling",
      items: ["Conception UML"],
      icon: "fas fa-project-diagram"
    },
    {
      title: "Methods",
      items: ["Agile"],
      icon: "fas fa-tasks"
    },
    {
      title: "AI & Automation",
      items: ["Integration of custom chatbots and AI"],
      icon: "fas fa-robot"
    }
  ];

  return (
    <section id="Technologies" className="technologies">
      <div className="technologies-container">
        <h2 className="section-title">My <span className="accent">Technologies</span></h2>
        <p className="section-subtitle">Tools and technologies I use to bring ideas to life</p>
        
        <div className="tech-grid">
          {techCategories.map((category, index) => (
            <div key={index} className="tech-category">
              <div className="tech-category-header">
                <i className={category.icon}></i>
                <h3>{category.title}</h3>
              </div>
              <div className="tech-items">
                {category.items.map((item, itemIndex) => (
                  <span key={itemIndex} className="tech-item">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;