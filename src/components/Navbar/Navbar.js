import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(false); // Default to light mode

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle light/dark mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  // Toggle mobile menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Close mobile menu when a link is clicked
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-text">Duong Hoang Vu Lam</span>
        </Link>

        <div
          className={`menu-icon ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="menu-icon-bar"></span>
          <span className="menu-icon-bar"></span>
          <span className="menu-icon-bar"></span>
        </div>

        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <li className="nav-item">
            <a
              href="#home"
              className={`nav-link ${activeSection === "home" ? "active" : ""}`}
              onClick={closeMenu}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#about"
              className={`nav-link ${
                activeSection === "about" ? "active" : ""
              }`}
              onClick={closeMenu}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#skills"
              className={`nav-link ${
                activeSection === "skills" ? "active" : ""
              }`}
              onClick={closeMenu}
            >
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#projects"
              className={`nav-link ${
                activeSection === "projects" ? "active" : ""
              }`}
              onClick={closeMenu}
            >
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              className={`nav-link ${
                activeSection === "contact" ? "active" : ""
              }`}
              onClick={closeMenu}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Sliding Toggle Button */}
        <div className="theme-toggle-container" onClick={toggleTheme}>
          <div className={`theme-toggle ${isDarkMode ? "dark" : "light"}`}>
            <div className="toggle-circle"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
