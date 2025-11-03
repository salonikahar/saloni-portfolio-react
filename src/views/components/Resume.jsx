import React from 'react';
import PortfolioController from '../../controllers/PortfolioController';
import '../../assets/css/Resume.css';

const Resume = () => {
  const skills = PortfolioController.getSkills();
  
  const education = [
    {
      degree: "Bachelor Degree - Computer Applications(BCA)",
      school: "University Name",
      year: "2023 - 2026",
      description: "Studied computer Application fundamentals, algorithms, and software development."
    }
  ];



  return (
    <section id="resume" className="resume-section">
      <div className="section-content">
        <div className="section-header">
          <h2 className="section-title">Resume</h2>
          <p className="section-subtitle">My formal Bio Details</p>
          <button className="download-cv" onClick={() => window.open(require('../../assets/document/Resume - Saloni Kahar.pdf'), '_blank')}>
            Download CV
            <i className="fas fa-download"></i>
          </button>
        </div>

        <div className="resume-content">
          <div className="resume-left">
            {/* Education Timeline */}
            <div className="timeline-section">
              <h3 className="timeline-title">
                <i className="fas fa-graduation-cap"></i>
                Education
              </h3>
              <div className="timeline">
                {education.map((edu, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h4>{edu.degree}</h4>
                      <h5>{edu.school}</h5>
                      <p className="timeline-date">{edu.year}</p>
                      <p className="timeline-description">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Timeline */}
            {/* <div className="timeline-section">
              <h3 className="timeline-title">
                <i className="fas fa-briefcase"></i>
                Experience
              </h3>
              <div className="timeline">
                {experience.map((exp, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <h4>{exp.role}</h4>
                      <h5>{exp.company}</h5>
                      <span className="experience-type">{exp.type}</span>
                      <p className="timeline-date">{exp.duration}</p>
                      <p className="timeline-description">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div> */}
            {/* </div> */}

            {/* Additional Skills/Certifications can be added here */}
            <div className="additional-info">
              <h3 className="info-title">
                <i className="fas fa-certificate"></i>
                Certifications
              </h3>
              <div className="cert-grid">
                <div className="cert-item">
                  <i className="fas fa-award"></i>
                  <h4>Web Development</h4>
                  <p>Complete Web Development Bootcamp</p>
                </div>
                <div className="cert-item">
                  <i className="fas fa-award"></i>
                  <h4>React.js</h4>
                  <p>Advanced React and Redux</p>
                </div>
              </div>
            </div>

          </div>

          <div className="resume-right">
            <div className="skills-section">
              <h3 className="skills-title">
                <i className="fas fa-code"></i>
                Professional Skills
              </h3>
              <div className="skills-content">
                {Object.keys(skills).map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill}</span>
                      <span className="skill-percentage">{skills[skill]}%</span>
                    </div>
                    <div className="skill-bar-bg">
                      <div
                        className="skill-bar"
                        style={{ width: `${skills[skill]}%` }}
                        data-percent={skills[skill]}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};
export default Resume;
