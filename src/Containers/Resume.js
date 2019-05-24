import React from "react";
import "./Resume.css";
// import IntResume from "../Components/Resume/Resume-Container/IntResume";

const Resume = () => {
  return (
    <div>
      <div className="resume-container">
        <div className="resume-app-cont">
          <div className="resume-link-sec">
            <div className="btnres resume-pdf-link">Print</div>
            <div className="btnres resume-app-link">Interactive</div>
          </div>
          <img
            src="https://i.imgur.com/DOlkeVw.jpg"
            alt="resume"
            className="resume-pic"
          />
          {/* <IntResume /> */}
        </div>
      </div>
    </div>
  );
};

export default Resume;
