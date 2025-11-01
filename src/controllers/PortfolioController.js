import portfolioData from '../models/portfolioData';

class PortfolioController {
  getProfile() {
    return {
      name: portfolioData.name,
      title: portfolioData.title,
      location: portfolioData.location,
      email: portfolioData.email,
      phone: portfolioData.phone,
      about: portfolioData.about
    };
  }

  getServices() {
    return portfolioData.services;
  }

  getSkills() {
    return portfolioData.skills;
  }

  getPortfolioItems() {
    return portfolioData.portfolio;
  }

  getTestimonials() {
    return portfolioData.testimonials;
  }

  getStats() {
    return portfolioData.stats;
  }
}

export default new PortfolioController();
