import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description:
        "A brief description of project one. Explain what technologies you used and what problems you solved.",
      image: "project1.jpg",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      github: "#",
      live: "#",
    },
    {
      id: 2,
      title: "Project Two",
      description:
        "A brief description of project two. Explain what technologies you used and what problems you solved.",
      image: "project2.jpg",
      technologies: ["React", "Firebase", "Material UI"],
      github: "#",
      live: "#",
    },
    {
      id: 3,
      title: "Project Three",
      description:
        "A brief description of project three. Explain what technologies you used and what problems you solved.",
      image: "project3.jpg",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="card project-card" key={project.id}>
              <div className="project-image">
                <div className="placeholder-image">Project Image</div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span className="tech-tag" key={index}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.github}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
