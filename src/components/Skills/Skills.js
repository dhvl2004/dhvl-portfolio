import React from "react";
import "./Skills.css";
import personalData from "../../data/personalData.json";

const Skills = () => {
  const { skillCategories } = personalData;

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
};

export default Skills;
