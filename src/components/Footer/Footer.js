import React from "react";
import "./Footer.css";
import personalData from "../../data/personalData.json";

function Footer() {
  const currentYear = new Date().getFullYear();
  const { profile, contact, footer } = personalData;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo-section">
            <h3 className="footer-logo">{profile.name}</h3>
            <p className="footer-description">{footer.summary}</p>
            <div className="footer-social">
              {contact.socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  {link.platform}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-links-section">
            <div className="footer-links">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-nav">
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            <div className="footer-contact">
              <h4 className="footer-heading">Contact Info</h4>
              <ul className="contact-list">
                <li>
                  <span className="contact-icon">📧</span>
                  <span>{contact.email}</span>
                </li>
                <li>
                  <span className="contact-icon">📱</span>
                  <span>{contact.phone}</span>
                </li>
                <li>
                  <span className="contact-icon">📍</span>
                  <span>{contact.location}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} {profile.name}. All rights reserved.
          </p>
          <p className="credits">
            Designed & Built with <span className="heart">❤️</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
