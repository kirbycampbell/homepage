import React from "react";
import "./Portfolio.css";
import { projects } from "../kData/portfolioData";

const Portfolio = () => {
  return (
    <div className="portfolio-cont">
      {projects.map(project => {
        return (
          <div className="project-cont">
            <h1>{project.name}</h1>
            <h2>{project.website}</h2>
            <h2> {project.framework}</h2>
            <h3> {project.backend}</h3>
            <h4>{project.info}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Portfolio;
