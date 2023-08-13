import React from "react";
import { projects } from "../assets/projects-info";


const Portfolio = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="section-header">Projects</h2>
      <div className="project-container">
        {projects.map((project) => (
          <div className="project project-card" key={project.id}>
            <img src={project.photo} alt={project.alt} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.tech}</p>
              <br />
              <p>{project.description}</p>
              <br />
              <p>
                <a target="_blank" href={project.link} className="project-icon">
                  <i className="bx bx-window-open"></i>
                </a>
                <a
                  target="_blank"
                  href={project.github}
                  className="project-icon"
                >
                  <i className="bx bxl-github"></i>
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
