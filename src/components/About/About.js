import React from "react";
import "./About.css";
import personalData from "../../data/personalData.json";

const About = () => {
  const {
    summary,
    experience,
    education,
    achievements,
    interests,
    resumeLink,
  } = personalData;

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          {/* Profile Information */}
          <div className="about-info">
            {/* Professional Summary */}
            <div className="about-summary">
              <h3 className="about-subtitle">Professional Summary</h3>
              <p>{summary}</p>
            </div>

            {/* Experience */}
            <div className="about-experience">
              <h3 className="about-subtitle">Experience</h3>
              <div className="timeline">
                {experience.map((item, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <h4>{item.title}</h4>
                      <div className="timeline-meta">
                        <span className="company">{item.company}</span>
                        <span className="timeline-date">{item.date}</span>
                      </div>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="about-education">
              <h3 className="about-subtitle">Education</h3>
              {education.map((item, index) => (
                <div key={index} className="education-item">
                  <h4>{item.degree}</h4>
                  <div className="education-meta">
                    <span className="institution">{item.institution}</span>
                    <span className="education-date">{item.date}</span>
                  </div>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>

            {/* Key Achievements */}
            <div className="about-achievements">
              <h3 className="about-subtitle">Key Achievements</h3>
              <ul className="achievements-list">
                {achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>

            {/* Personal Interests */}
            <div className="about-interests">
              <h3 className="about-subtitle">Personal Interests</h3>
              <div className="interests-list">
                {interests.map((interest, index) => (
                  <span key={index} className="interest-item">
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="about-cta">
              <a
                href={process.env.PUBLIC_URL + resumeLink}
                download="DuongHoangVuLam_Resume.pdf"
                className="btn btn-primary"
              >
                Download My Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
