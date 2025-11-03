import React, { useState, useEffect } from 'react';
import '../../assets/css/Sidebar.css';

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;

      sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      id: 'home',
      icon: 'fas fa-home',
      label: 'Home',
      description: 'Welcome Page'
    },
    {
      id: 'about',
      icon: 'fas fa-user-circle',
      label: 'About Me',
      description: 'My Introduction'
    },
    {
      id: 'services',
      icon: 'fas fa-laptop-code',
      label: 'Services',
      description: 'What I Offer'
    },
    {
      id: 'resume',
      icon: 'fas fa-file-alt',
      label: 'Resume',
      description: 'My Experience & Skills'
    },
    {
      id: 'portfolio',
      icon: 'fas fa-project-diagram',
      label: 'Portfolio',
      description: 'Recent Projects'
    },
    // {
    //   id: 'testimonials',
    //   icon: 'fas fa-comment-dots',
    //   label: 'Testimonials',
    //   description: 'Client Reviews'
    // },
    {
      id: 'contact',
      icon: 'fas fa-paper-plane',
      label: 'Contact',
      description: 'Get in Touch'
    }
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <div className="sidebar-profile">
          <div className="profile-pic-wrapper">
            <div className="profile-pic">
              <img
                src={require('../../assets/image/profile-pic.jpg')}
                alt="Profile"
              />
            </div>
            <div className="profile-pic-overlay"></div>
          </div>
          <div className="profile-info">
            <h1>Saloni Kahar</h1>
            <p className="title">Full Stack Developer</p>
          </div>
        </div>

        <nav className="sidebar-nav">
          <ul className="nav-list">
            {navItems.map(item => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  <div className='d-flex align-items-center'>
                    <span className="nav-icon">
                      <i className={item.icon}></i>
                    </span>
                    <span className="nav-label">{item.label}</span>
                  </div>
                  {activeSection === item.id && <span className="nav-active-marker"></span>}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sidebar-footer">
          <div className="social-links">
            <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
