import React from 'react';
import '../../assets/css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="section-content">
        <div className="footer-content">
          <div className="footer-info">
            <h3 className="footer-name">Saloni Kahar</h3>
            <p className="footer-description">
              Full Stack Developer passionate about creating innovative web solutions.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Web Development</a></li>
                <li><a href="#services">UI/UX Design</a></li>
                <li><a href="#services">React Development</a></li>
                <li><a href="#contact">Consultation</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Connect</h4>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/saloni-kahar-a85b032b5" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/salonikahar" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://twitter.com/salonikahar" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/s_kahar_11" target="_blank" rel="noopener noreferrer" className="social-link">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>© {new Date().getFullYear()} Saloni Kahar. All rights reserved.</p>
          </div>
          <div className="footer-design">
            <p>Designed with <span className="heart">♥</span> by Saloni Kahar</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
