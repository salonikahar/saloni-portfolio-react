import React from 'react';
import Slider from 'react-slick';
import PortfolioController from '../../controllers/PortfolioController';
import '../../assets/css/Testimonials.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
  const tests = PortfolioController.getTestimonials();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i
        key={i}
        className={`fas fa-star ${i < rating ? 'filled' : ''}`}
      ></i>
    ));
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="section-content">
        <div className="section-header">
          <span className="section-subtitle">What Clients Say</span>
          <h2 className="section-title">Testimonials</h2>
        </div>

        <div className="testimonials-carousel">
          <Slider {...settings}>
            {tests.map((testimonial, index) => (
              <div key={index} className="testimonial-slide">
                <div className="testimonial-card">
                  <div className="testimonial-content">
                    <div className="testimonial-quote">
                      <i className="fas fa-quote-left"></i>
                    </div>
                    <div className="testimonial-rating">
                      {renderStars(testimonial.rating)}
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
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
