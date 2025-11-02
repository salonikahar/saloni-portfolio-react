import React from 'react';
import HomePageHero from '../components/HomePage';
import About from '../components/About';
import Services from '../components/Services';
import Resume from '../components/Resume';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <HomePageHero />
      <About />
      <Services />
      <Resume />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
