import React from "react";
import { projects } from "../kData/portfolioData";

const Portfolio = () => {
  return (
    <div className="portfolio-cont">
      {projects.map(project => {
        return (
          <div>
            <h1>{project.name}</h1>
            <h2>{project.website}</h2>
            <h2> {project.framework}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Portfolio;
