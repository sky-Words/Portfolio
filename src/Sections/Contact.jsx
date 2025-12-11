import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically integrate EmailJS or Formspree
    alert("Thank you for your message! (This is a demo form)");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Contact <span className="accent">Me</span></h2>
        <p className="section-subtitle">Let's discuss your next project</p>
        
        <div className="contact-content">
          {/* Left Column: Contact Info */}
          <div className="contact-info">
            <h3 className="contact-header">Get In Touch</h3>
            <p className="contact-desc">
              I am currently available for freelance projects or full-time opportunities.
              Feel free to reach out via email or phone.
            </p>

            <div className="info-item">
              <div className="info-icon">
                <FaPhone />
              </div>
              <div className="info-details">
                <h4>Phone</h4>
                <p>0612667045</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <div className="info-details">
                <h4>Email</h4>
                <p>elmehdi.sadki@outlook.fr</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="info-details">
                <h4>Location</h4>
                <p>Fes, Morocco</p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
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
                rows="5" 
                value={formData.message} 
                onChange={handleChange} 
                required 
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              Send Message <FaPaperPlane className="btn-icon" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;