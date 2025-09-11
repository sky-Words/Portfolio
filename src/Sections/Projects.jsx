import React, { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "A comprehensive dashboard for online stores with analytics, inventory management, and customer insights.",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
      category: "fullstack",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Travel Booking Platform",
      description: "Responsive travel website with booking functionality, user reviews, and interactive maps.",
      technologies: ["HTML", "CSS", "JavaScript", "Google Maps API"],
      category: "frontend",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Full stack application for team task management with real-time updates and collaboration features.",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      category: "fullstack",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Financial Analytics Dashboard",
      description: "Interactive dashboard for financial data visualization with forecasting and reporting capabilities.",
      technologies: ["React", "D3.js", "Python", "FastAPI"],
      category: "frontend",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Social Media Platform",
      description: "A social networking site with user profiles, posts, comments, and real-time messaging.",
      technologies: ["MERN Stack", "Socket.io", "JWT", "AWS S3"],
      category: "fullstack",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
              <div className="project-overlay">
                <button className="view-btn">Quick View</button>
              </div>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-actions">
                <a href="#" className="project-btn">
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
                <a href="#" className="project-btn">
                  <i className="fab fa-github"></i> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;