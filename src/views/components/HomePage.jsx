import React, { useState, useEffect } from 'react';
import PortfolioController from '../../controllers/PortfolioController';
import '../../assets/css/HomePage.css';

const HomePage = () => {
  const { name, title, location } = PortfolioController.getProfile();
  const [animatedText, setAnimatedText] = useState(0);
  const roles = ["Web Developer", "React Specialist"];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedText((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);



  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <div className="greeting">
            <span className="greeting-text">👋 Hello, I'm</span>
          </div>

          <h1 className="hero-name">{name}</h1>

          <div className="hero-title">
            <div className="roles-wrapper">
              {roles.map((role, index) => (
                <span
                  key={index}
                  className={`role ${index === animatedText ? 'active' : ''}`}
                >
                  {role}
                </span>
              ))}
            </div>
          </div>

          <p className="hero-description">
            <span className="location-icon">📍</span>
            Based in <span className="highlight">{location}</span>
          </p>

          <div className="hero-cta">
            <button className="primary-btn">
              Let's Connect
              <i className="fas fa-arrow-right"></i>
            </button>
            <button className="secondary-btn">
              View Portfolio
              <i className="fas fa-briefcase"></i>
            </button>
          </div>

          <div className="social-links">
            <a href="#" className="social-link" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="social-link" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>


      </div>


    </section>
  );
};

export default HomePage;
