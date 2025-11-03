import sneakersImage from '../assets/image/project/sneakershub-project-image.jpg';
import project2imag from '../assets/image/project/project2-electronicEcomBootstrap.png';  
import project3imag from '../assets/image/project/AdminPanel.png';  
import project4imag from '../assets/image/project/woodmart.png';

const portfolioData = {
  name: "Saloni Kahar",
  title: "Web Developer",
  location: "Surat, Gujarat",
  email: "salonikahar2011@gmail.com",
  phone: "+91-8849025657",
  about: "I am Saloni Kahar, a Web Developer focusing on building responsive and modern web applications.",
  stats: {
    experience: "(Intern) 0",
    clients: 3,
    projects: 22,
    awards: 3
  },
  services: [
    {
      title: "Front-End Development",
      desc: "Creating responsive and modern user interfaces with the latest technologies and best practices.",
      icon: "fas fa-code",
      features: [
        "Responsive Web Design",
        "Modern UI/UX Implementation",
        "Performance Optimization",
        "Cross-browser Compatibility"
      ]
    },
    {
      title: "React Development",
      desc: "Building scalable and interactive web applications using React and its ecosystem.",
      icon: "fab fa-react",
      features: [
        "Component Architecture",
        "State Management",
        "Custom Hooks",
        "Performance Optimization"
      ]
    },
    {
      title: "Back-End Development",
      desc: "Developing robust server-side solutions and APIs for web applications.",
      icon: "fas fa-server",
      features: [
        "API Development",
        "Database Design",
        "Server Management",
        "Security Implementation"
      ]
    },
    {
      title: "Web Performance",
      desc: "Optimizing websites for maximum speed and efficiency.",
      icon: "fas fa-tachometer-alt",
      features: [
        "Load Time Optimization",
        "Code Optimization",
        "Caching Strategies",
        "Performance Monitoring"
      ]
    },
    {
      title: "Technical Consultation",
      desc: "Providing expert advice and solutions for web development projects.",
      icon: "fas fa-comments",
      features: [
        "Architecture Planning",
        "Technology Selection",
        "Best Practices",
        "Code Reviews"
      ]
    }
  ],
  skills: {
    HTML: 100,
    CSS: 90,
    JavaScript: 85,
    Bootstrap: 90,
    React: 95,
    NodeJS: 80,
    MongoDB: 75
  },
  portfolio: [
    { img: sneakersImage, title: "Sneakers Hub (E-commerce)", link: "https://sneakers-hub-five.vercel.app/", description: "Sneakers Hub is an e-commerce platform for sneakers, built with React and Node.js. It features user authentication, product catalog, shopping cart, and payment integration." },
    { img: project2imag, title: "Techno Web (E-commerce)", link: "https://salonikahar.github.io/techno-web/", description: "Techno Web is a visually appealing, responsive web interface designed to showcase digital and electronics products with a modern, sleek design. The home page features large banner sections offering discounts (“Flat 30% off on all Digital”), prominent category highlights (“Trending Categories”), and a rich selection of products (headphones, laptops, smart-watches, mobile phones) each with pricing, discount information, and “Add to Cart” buttons." },
    { img: project3imag , title: "Admin panel" , link: "https://salonikahar.github.io/AdminPanel/", description: "A sleek and responsive admin dashboard designed to manage user data, analytics and insights. It features a clean sidebar navigation, modern typography, and interactive charts and tables that make monitoring system activity intuitive and efficient. Built with a focus on usability, this admin panel provides an organized interface for administrators to track performance, view reports, and update settings—all in one accessible web application." },
    { img: project4imag , title: "Woodmart E-commerce Website" ,  link : "https://salonikahar.github.io/css-project/" , description : 'A vibrant and responsive web layout built purely with HTML and CSS, this project showcases modern front-end design and typography. It features structured sections such as hero banners, feature highlights, and content cards, all styled with clean spacing, consistent colour palette and fluid grid layout. This site demonstrates strong CSS skills—media queries, flexbox or grid usage, and aesthetic coherence—making it a compelling addition to your dev portfolio.' }
  ],
  testimonials: [
    { name: "Hardik Patel", role: "Founder - Vivid Vortex", feedback: "Great work and timely delivery.", rating: 5 },
    { name: "Hiren Sondagar", role: "Founder - WinSoft Tech", feedback: "High quality web solutions.", rating: 5 }
  ]
};

export default portfolioData;
