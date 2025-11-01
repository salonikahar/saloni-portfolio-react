import React from 'react';
import PortfolioController from '../../controllers/PortfolioController';
import './Portfolio.css';

const Portfolio = () => {
  const items = PortfolioController.getPortfolioItems();

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
                  <div className="placeholder-img bg-dark text-white d-flex align-items-center justify-content-center">
                    <i className="fas fa-image fa-2x"></i>
                  </div>
                  <div className="portfolio-overlay">
                    <div className="portfolio-links">
                      <a href="#" className="portfolio-link" title="View Project">
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                      <a href="#" className="portfolio-link" title="View Details">
                        <i className="fas fa-eye"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="portfolio-content">
                  <h3 className="portfolio-title">{item.title}</h3>
                  <p className="portfolio-category">Web Development</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
