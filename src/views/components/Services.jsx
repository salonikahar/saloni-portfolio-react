import React from 'react';
import '../../assets/css/Services.css';
import PortfolioController from '../../controllers/PortfolioController';

const Services = () => {
  const services = PortfolioController.getServices();

  return (
    <section id="services" className="services-section">
      <div className="section-content">
        <div className="section-header">
          <span className="section-subtitle">What I Offer</span>
          <h2 className="section-title">My Services</h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.desc}</p>
                <ul className="service-features">
                  {service.features?.map((feature, idx) => (
                    <li key={idx}>
                      <i className="fas fa-check"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="service-hover">
                <span className="learn-more">Learn More →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
