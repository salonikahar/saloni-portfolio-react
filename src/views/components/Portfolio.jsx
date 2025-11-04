import React, { useState, useEffect } from 'react';
import PortfolioController from '../../controllers/PortfolioController';
import '../../assets/css/Portfolio.css';

const Portfolio = () => {
  const items = PortfolioController.getPortfolioItems();
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add('modal-open');
      // Scroll to portfolio section when modal opens
      const portfolioSection = document.getElementById('portfolio');
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } else {
      document.body.classList.remove('modal-open');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [selectedProject]);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="section-content">
        <div className="section-header">
          <span className="section-subtitle">My Recent Work</span>
          <h2 className="section-title">Portfolio</h2>
        </div>

        <div className="portfolio-grid">
          {items.map((item, index) => (
            <div key={index} className="portfolio-item">
              <div className="portfolio-card">
                <div className="portfolio-image">
                  <img src={item.img} alt={item.title} className="portfolio-img" />
                  <div className="portfolio-overlay">
                    <div className="portfolio-links">
                      <a href={item.link || "#"} className="portfolio-link" title="View Project" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                      <a href="#" className="portfolio-link" title="View Details" onClick={(e) => { e.preventDefault(); setSelectedProject(item); }}>
                        <i className="fas fa-eye"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-content">
                  <h3 className="portfolio-title">{item.title.length > 20 ? item.title.substring(0, 20) + '...' : item.title}</h3>
                  <p className="portfolio-category">{item.description && item.description.length > 50 ? item.description.substring(0, 50) + '...' : item.description || 'Web Development'}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => {
              // Scroll to portfolio section before closing modal
              const portfolioSection = document.getElementById('portfolio');
              if (portfolioSection) {
                portfolioSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
              setSelectedProject(null);
            }}>&times;</button>

            <div className="project-details-layout">
              <div className="project-details-image">
                <img src={selectedProject.img} alt={selectedProject.title} className="project-detail-image" />
                <h3 className="project-detail-title">{selectedProject.title}</h3>
              </div>

              <div className="project-details-content">
                <div className="project-section">
                  <h4><i className="fas fa-info-circle"></i> Project Information</h4>
                  <p>{selectedProject.description}</p>
                </div>

                <div className="project-section">
                  <h4><i className="fas fa-bullseye"></i> Purpose</h4>
                  <p>{selectedProject.purpose}</p>
                </div>

                <div className="project-section">
                  <h4><i className="fas fa-code"></i> Technologies Used</h4>
                  <div className="tech-stack">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="project-links">
                  <a href={selectedProject.link} className="project-link live-link" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i> View Live Project
                  </a>
                  <a href={selectedProject.github} className="project-link github-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> View Source Code
                  </a>
                  <button className="project-link share-link" onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: selectedProject.title,
                        text: selectedProject.description,
                        url: selectedProject.link
                      });
                    } else {
                      navigator.clipboard.writeText(`${selectedProject.title}\n${selectedProject.description}\n${selectedProject.link}`);
                      alert('Project link copied to clipboard!');
                    }
                  }}>
                    <i className="fas fa-share-alt"></i> Share Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
