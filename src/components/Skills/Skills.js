import React from 'react';
import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 85 },
        { name: "TypeScript", level: 70 }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Express", level: 70 },
        { name: "MongoDB", level: 65 },
        { name: "SQL", level: 60 }
      ]
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", level: 80 },
        { name: "Figma", level: 60 },
        { name: "Responsive Design", level: 85 },
        { name: "Testing", level: 65 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-content">
          {skillCategories.map((category, index) => (
            <div className="skill-category" key={index}>
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div className="skill-item" key={skillIndex}>
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

