import React from 'react'
import { projects } from '../../projects-info';

const Portfolio = () => {
  return (
    <section class="projects" id="projects">
      <h2 class="section-header">Portfolio</h2>
      <div class="project-container">
        {projects.map((project) => (
          <div class="project project-card">
            <img src={project.photo} alt={project.alt} />
            <div class="project-info">
              <h3>{project.title}</h3>
              <p>{project.tech}</p>
              <br />
              <p>{project.description}</p>
              <br />
              <p>
                <a target="_blank" href={project.link} class="project-icon">
                  <i class="bx bx-window-open"></i>
                </a>
                <a target="_blank" href={project.github} class="project-icon">
                  <i class="bx bxl-github"></i>
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio