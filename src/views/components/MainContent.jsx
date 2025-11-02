import React from 'react';
import HomePage from './HomePage';
import About from './About';
import Services from './Services';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';
import '../../assets/css/MainContent.css';

const MainContent = () => {
  // Generate 50 random particles
  const particles = Array.from({ length: 400 }, (_, i) => {
    const size = Math.random() * 120 + 60; // 60–180px
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const colors = ['var(--accent)', 'var(--button-cta)', 'var(--accent-muted)'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const delay = Math.random() * -20;
    const duration = Math.random() * 10 + 15; // 15–25s

    return (
      <div
        key={i}
        className="particle"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${top}%`,
          left: `${left}%`,
          background: color,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
        }}
      ></div>
    );
  });

  return (
    <main className="main-content">
      <div className="particles-background">{particles}</div>

      <HomePage />
      <About />
      <Services />
      <Resume />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default MainContent;
