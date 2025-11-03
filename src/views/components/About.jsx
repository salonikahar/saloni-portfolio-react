import React from 'react';
import PortfolioController from '../../controllers/PortfolioController';
import '../../assets/css/About.css';

const About = () => {
  const profile = PortfolioController.getProfile();
  const stats = PortfolioController.getStats();

  const personalInfo = [
    { icon: '📧', label: 'Email', value: profile.email },
    { icon: '📱', label: 'Phone', value: profile.phone },
    { icon: '📍', label: 'Location', value: profile.location },
    { icon: '🌐', label: 'Languages', value: 'English, Hindi' },
    { icon: '👨‍💼', label: 'Experience', value: `${stats.experience} Years` },
    { icon: '🎓', label: 'Degree', value: 'Bachelor in Computer Science' }
  ];



  return (
    <>
      
      <section id="about" className="about-section">
      
      <div className="section-content">
        <div className="section-header">
          <span className="section-subtitle">Get To Know</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-content">
          <div className="about-image">
            <div className="image-container">
              <img src={require('../../assets/image/profile-pic.jpg')} alt={profile.name} />
              <div className="image-shape"></div>
            </div>
          </div>

          <div className="about-text">
            <h3 className="about-greeting">
              Hi, I'm <span className="highlight">{profile.name}</span>
            </h3>
            
            <div className="about-description">
              <p className="lead-text">{profile.about}</p>
              <p className="sub-text">
                I specialize in creating intuitive websites and applications that solve real-world problems and provide exceptional user experiences.
              </p>
            </div>

            <div className="personal-info">
              <div className="info-grid">
                {personalInfo.map((info, index) => (
                  <div key={index} className="info-item">
                    <span className="info-icon">{info.icon}</span>
                    <div className="info-content">
                      <span className="info-label">{info.label}:</span>
                      <span className="info-value">{info.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-cta">
              <button className="download-cv" onClick={() => window.open(require('../../assets/document/resume.pdf'), '_blank')}>
                Download CV
                <i className="fas fa-download"></i>
              </button>
              <a href="#contact" className="contact-btn">
                Let's Talk
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>


        <div className="skills-showcase">
          <h3 className="skills-title">
            <i className="fas fa-code"></i> Tech Stack
          </h3>
          <div className="skills-grid">
            <div className="skill-tag">React.js</div>
            <div className="skill-tag">JavaScript</div>
            <div className="skill-tag">TypeScript</div>
            <div className="skill-tag">Node.js</div>
            <div className="skill-tag">HTML5</div>
            <div className="skill-tag">CSS3</div>
            <div className="skill-tag">Git</div>
            <div className="skill-tag">RESTful APIs</div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;
