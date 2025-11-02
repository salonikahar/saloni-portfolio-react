import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './views/pages/HomePage';
import About from './views/components/About';
import Services from './views/components/Services';
import Resume from './views/components/Resume';
import Portfolio from './views/components/Portfolio';
import Testimonials from './views/components/Testimonials';
import Contact from './views/components/Contact';


import Sidebar from './views/components/Sidebar';
import MobileHeader from './views/components/MobileHeader';
import MainContent from './views/components/MainContent';
import './App.css';

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`scroll-to-top-btn ${visible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <MobileHeader />
        <MainContent>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </MainContent>
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;
