import React, { useState } from "react";
import "./Contact.css";
import personalData from "../../data/personalData.json";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    alert("Thank you for your message! I will get back to you soon.");
  };

  const { email, phone, location, socialLinks } = personalData.contact;

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-item-icon">📧</div>
              <div className="contact-item-details">
                <h3>Email</h3>
                <p>{email}</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">📱</div>
              <div className="contact-item-details">
                <h3>Phone</h3>
                <p>{phone}</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">📍</div>
              <div className="contact-item-details">
                <h3>Location</h3>
                <p>{location}</p>
              </div>
            </div>

            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="social-link"
                  aria-label={link.platform}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.platform}
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
