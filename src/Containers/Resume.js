import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div>
      <div className="resume-container">
        <div className="resume-app-cont">
          <div className="resume-pdf-link">Print</div>
          <div className="resume-app-link">Interactive</div>
          <img
            src="https://i.imgur.com/DOlkeVw.jpg"
            alt="resume"
            className="resume-pic"
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;
