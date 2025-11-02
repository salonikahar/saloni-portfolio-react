import React from 'react';
import PortfolioController from '../../controllers/PortfolioController';
import '../../assets/css/Testimonials.css';

const Testimonials = () => {
  const tests = PortfolioController.getTestimonials();

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="section-content">
        <div className="section-header">
          <span className="section-subtitle">What Clients Say</span>
          <h2 className="section-title">Testimonials</h2>
        </div>

        <div className="testimonials-grid">
          {tests.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
                <div className="testimonial-quote">
                  <i className="fas fa-quote-left"></i>
                </div>
                <p className="testimonial-text">{testimonial.feedback}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <i className="fas fa-user"></i>
                  </div>
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-role">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
