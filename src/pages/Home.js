import React, { useEffect } from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import './Home.css';

function Home() {
  // Enable smooth scrolling for navigation
  useEffect(() => {
    // Handle smooth scrolling for anchor links
    const handleAnchorClick = (e) => {
      const target = e.target;
      
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          // Smooth scroll to the element
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          // Update URL without page refresh
          window.history.pushState(null, '', targetId);
        }
      }
    };

    // Add event listener to document
    document.addEventListener('click', handleAnchorClick);
    
    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  // Check for hash in URL on page load and scroll to that section
  useEffect(() => {
    if (window.location.hash) {
      const targetElement = document.querySelector(window.location.hash);
      if (targetElement) {
        // Add a small delay to ensure DOM is fully loaded
        setTimeout(() => {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 300);
      }
    }
  }, []);

  return (
    <div className="home-page">
      {/* Main hero section */}
      <Hero />
      
      {/* About section */}
      <About />
      
      {/* Skills section */}
      <Skills />
      
      {/* Projects section */}
      <Projects />
      
      {/* Contact section */}
      <Contact />
      
      {/* Back to top button */}
      <button 
        className="back-to-top" 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        ↑
      </button>
    </div>
  );
}

export default Home;

