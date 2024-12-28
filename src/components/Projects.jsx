import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="project-title">OUR RECENT PROJECTS</h2>
      <p className="projects-subtitle">
        Explore how we turn innovative ideas into impactful solutions that drive success.
      </p>
      <div className="projects-grid">
        <div className="project-card">
          <h3 className="projects-subtitle">International Journal of English for Academic Excellence</h3>
          <p className="project-description">
            This project explores dynamic methodologies and tools to elevate English academic excellence, fostering better learning outcomes and critical thinking for students and educators.{" "}
            <a href="#" className="project-link">Link</a>
          </p>
        </div>
        <div className="project-card">
          <h3 className="projects-subtitle">KOLA</h3>
          <p className="project-description">
            This project showcases innovative UI/UX design solutions crafted for Kola, enhancing user engagement and delivering seamless digital experiences through creative and user-centered design.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
