import React, { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Data extracted from Elmehdi Sadki's CV
  const projects = [
    {
      id: 1,
      title: "Cloud Native Medical Web App",
      description: "A microservices-based medical application featuring online appointments, secure consultations, and an AI assistant (LLAMA) for personalized recommendations.",
      technologies: ["React.js", "Express.js", "MongoDB", "Traefik", "Microservices"],
      category: "fullstack",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Smart Job Search Platform",
      description: "Centralized job search engine aggregating offers in real-time from multiple platforms, featuring AI-based intelligent recommendations.",
      technologies: ["React.js", "Node.js", "AI Integration", "Real-time Data"],
      category: "fullstack",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "AI Course Search Engine",
      description: "Collaborative project developing a search engine for online courses integrated with a Machine Learning recommendation system.",
      technologies: ["Python", "Machine Learning", "AI", "Web Dev"],
      category: "fullstack",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "MERN Stack Applications (Ark X)",
      description: "Full-cycle web application development and RESTful API creation, focusing on robust backend architecture and responsive frontend integration.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      category: "fullstack",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">My <span className="accent">Projects</span></h2>
      <p className="section-subtitle">A collection of my latest work</p>
      
      <div className="filters">
        <button 
          className={activeFilter === 'all' ? 'filter-btn active' : 'filter-btn'} 
          onClick={() => setActiveFilter('all')}
        >
          All Projects
        </button>
        <button 
          className={activeFilter === 'frontend' ? 'filter-btn active' : 'filter-btn'} 
          onClick={() => setActiveFilter('frontend')}
        >
          Frontend
        </button>
        <button 
          className={activeFilter === 'fullstack' ? 'filter-btn active' : 'filter-btn'} 
          onClick={() => setActiveFilter('fullstack')}
        >
          Full Stack
        </button>
      </div>
      
      <div className="projects-container">
        {filteredProjects.map(project => (
          <div key={project.id} className="project-item">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;