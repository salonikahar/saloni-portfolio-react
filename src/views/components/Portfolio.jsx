import React, { useState } from 'react';
import PortfolioController from '../../controllers/PortfolioController';
import '../../assets/css/Portfolio.css';

const Portfolio = () => {
  const items = PortfolioController.getPortfolioItems();
  const [selectedProject, setSelectedProject] = useState(null);

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
            <button className="modal-close" onClick={() => setSelectedProject(null)}>&times;</button>
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
