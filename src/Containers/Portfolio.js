import React from "react";
import "./Portfolio.css";
import { projects } from "../kData/portfolioData";

const Portfolio = () => {
  return (
    <div className="portfolio-cont">
      {projects.map(project => {
        return (
          <a
            href={project.website}
            key={project.website}
            className="project-cont"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1>{project.name}</h1>
            <div className="mid-card">
              <div className="in-cardL"> {project.framework}</div>
              <div className="in-cardR"> {project.backend}</div>
            </div>

            <h4>{project.info}</h4>
          </a>
        );
      })}
    </div>
  );
};

export default Portfolio;
