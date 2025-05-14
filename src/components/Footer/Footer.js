import React from "react";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo-section">
            <h3 className="footer-logo">Your Name</h3>
            <p className="footer-description">
              A passionate web developer focused on creating modern, responsive,
              and user-friendly websites.
            </p>
            <div className="footer-social">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <span className="social-icon">GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <span className="social-icon">LinkedIn</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Twitter"
              >
                <span className="social-icon">Twitter</span>
              </a>
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
                  <span>your.email@example.com</span>
                </li>
                <li>
                  <span className="contact-icon">📱</span>
                  <span>+123 456 7890</span>
                </li>
                <li>
                  <span className="contact-icon">📍</span>
                  <span>City, Country</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Your Name. All rights reserved.
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
