import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../../assets/css/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitMessage('');

  try {
    const serviceId = 'service_pdoai4b';
    const templateId = 'template_bjnyv4f';
    const publicKey = 'osDawpmadFTx5AEWG';

    const templateParams = {
      name: formData.name,
      email: formData.email,
      time: new Date().toLocaleString(),
      subject: formData.subject,
      message: formData.message,
    };

    const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);
    console.log('Email sent successfully:', result);

    setSubmitMessage('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  } catch (error) {
    console.error('Email send failed:', error);
    setSubmitMessage(`Failed to send message. Please try again.`);
  } finally {
    setIsSubmitting(false);
  }
};


  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      content: 'salonikahar2011@gmail.com',
      link: 'mailto:salonikahar2011@gmail.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      content: '8849025657',
      link: 'tel:+91-8849025657'
    },
    {
      icon: '🌍',
      title: 'Location',
      content: 'Surat, Gujarat',
      link: 'https://www.google.com/maps/place/Surat,+Gujarat'
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="section-content">
        <div className="section-header">
          <span className="section-subtitle">Get in Touch</span>
          <h2 className="section-title">Contact Me</h2>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Talk About Your Project</h3>
            <p className="contact-description">
              Feel free to reach out if you want to collaborate with me, or simply have a chat.
            </p>

            <div className="contact-cards">
              {contactInfo.map((info, index) => (
                <a 
                  key={index} 
                  href={info.link} 
                  className="contact-card"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <div className="card-icon">{info.icon}</div>
                  <div className="card-content">
                    <h4>{info.title}</h4>
                    <p>{info.content}</p>
                  </div>
                  <div className="card-arrow">→</div>
                </a>
              ))}
            </div>

            <div className="social-links">
              <h4>Find me on</h4>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/saloni-kahar-a85b032b5" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/salonikahar" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://twitter.com/salonikahar" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/s_kahar_11" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <i className={`fas ${isSubmitting ? 'fa-spinner fa-spin' : 'fa-paper-plane'}`}></i>
              </button>

              {submitMessage && (
                <div className={`submit-message ${submitMessage.includes('successfully') ? 'success' : 'error'}`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
