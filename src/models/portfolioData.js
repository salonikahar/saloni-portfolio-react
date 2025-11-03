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
    { img: "public/assets/work1.png", title: "Project 1" },
    { img: "public/assets/work2.png", title: "Project 2" },
    { img: "public/assets/work3.png", title: "Project 3" },
    { img: "public/assets/work4.png", title: "Project 4" }
  ],
  testimonials: [
    { name: "Hardik Patel", role: "Founder - Vivid Vortex", feedback: "Great work and timely delivery." },
    { name: "Hiren Sondagar", role: "Founder - WinSoft Tech", feedback: "High quality web solutions." }
  ]
};

export default portfolioData;
