import React from "react";
import "./Portfolio.css";
import { projects } from "../kData/portfolioData";

const Portfolio = () => {
  return (
    <div className="portfolio-cont">
      {projects.map(project => {
        return (
          <div key={project.website} className="project-cont">
            <img
              className="portfolio-piccont"
              src={project.image}
              alt={project.website}
            />
            <div className="under-img">
              <div className="port-title">{project.name}</div>
              <div className="mid-card">
                <div className="in-cardL"> {project.framework}</div>
                <div className="in-cardR"> {project.backend}</div>
              </div>

              <div className="info">{project.info}</div>
              <div className="mid-card">
                <a
                  href={project.github}
                  className="card-links"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source Code
                </a>
                <a
                  href={project.website}
                  className="card-links"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Portfolio;
