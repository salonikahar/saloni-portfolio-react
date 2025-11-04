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

          <h1 className="typing">{name}</h1>

         

          <p className="hero-description">
            <span className="location-icon">📍</span>
            Based in <span className="highlight">{location}</span>
          </p>

          <div className="hero-cta">
            <a href="#contact" style={{textDecoration:'none'}} >
              <button className="primary-btn">
                Let's Connect
                <i className="fas fa-arrow-right"></i>
              </button>
            </a>
            <a href="https://saloni-portfolio-react.vercel.app/" style={{textDecoration:'none'}}>
              <button className="secondary-btn" >
                View Portfolio
                <i className="fas fa-briefcase"></i>
              </button>
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com/salonikahar" className="social-link" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/saloni-kahar-a85b032b5" className="social-link" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/s_kahar_11" className="social-link" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>


      </div>


    </section>
  );
};

export default HomePage;
