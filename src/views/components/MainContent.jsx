import React from 'react';
import Header from './Header';
import About from './About';
import Services from './Services';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';
import './MainContent.css';

const MainContent = () => {
  return (
    <main className="main-content">
      <Header />
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