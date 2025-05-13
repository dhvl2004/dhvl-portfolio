import React, { useState, useEffect } from "react";
import "./Hero.css";
import heroData from "../../data/heroData.json";

const Hero = () => {
  const [greeting, setGreeting] = useState("");

  // Set greeting based on time of day
  useEffect(() => {
    const getGreeting = () => {
      const hour = new Date().getHours();
      if (hour < 12) return "Good Morning";
      if (hour < 18) return "Good Afternoon";
      return "Good Evening";
    };

    setGreeting(getGreeting());
  }, []);

  const { name, title, description, socialLinks, cta, profileInitials } =
    heroData;

  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="animated-shape shape-1"></div>
        <div className="animated-shape shape-2"></div>
        <div className="animated-shape shape-3"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting">{greeting}, I'm</p>
            <h1 className="hero-title">{name}</h1>
            <h2 className="hero-subtitle">{title}</h2>

            <p className="hero-description">{description}</p>

            <div className="hero-cta">
              <a href={cta.projects} className="btn btn-primary">
                View Projects
              </a>
              <a href={cta.contact} className="btn btn-outline">
                Contact Me
              </a>
            </div>

            <div className="hero-social">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={link.platform}
                >
                  {link.platform}
                </a>
              ))}
            </div>
          </div>

          <div className="hero-image">
            <div className="profile-image-container">
              <div className="profile-image-placeholder">
                <span className="profile-initials">{profileInitials}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <a href="#about" aria-label="Scroll to About section">
          <span className="scroll-arrow"></span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
