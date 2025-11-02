import React, { useState, useEffect } from 'react';
import '../../assets/css/MobileHeader.css';

const MobileHeader = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      label: 'Home'
    },
    {
      id: 'about',
      icon: 'fas fa-user-circle',
      label: 'About'
    },
    {
      id: 'services',
      icon: 'fas fa-laptop-code',
      label: 'Services'
    },
    {
      id: 'resume',
      icon: 'fas fa-file-alt',
      label: 'Resume'
    },
    {
      id: 'portfolio',
      icon: 'fas fa-project-diagram',
      label: 'Portfolio'
    },
    {
      id: 'testimonials',
      icon: 'fas fa-comment-dots',
      label: 'Testimonials'
    },
    {
      id: 'contact',
      icon: 'fas fa-paper-plane',
      label: 'Contact'
    }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (sectionId) => {
    setIsMenuOpen(false);
    setActiveSection(sectionId);
  };

  return (
    <header className="mobile-header">
      <div className="mobile-header-content">
        <div className="mobile-header-brand">
          <h1>Saloni Kahar</h1>
        </div>

        <button
          className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          {navItems.map(item => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                <span className="mobile-nav-icon">
                  <i className={item.icon}></i>
                </span>
                <span className="mobile-nav-label">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MobileHeader;
