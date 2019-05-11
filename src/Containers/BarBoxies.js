import React from "react";
import "../CSS/BarBoxies.css";
import "../CSS/PhoneView.css";

const BarBoxies = props => {
  return (
    <React.Fragment>
      <div className="column-container-move">
        <div
          className="section-move"
          onClick={() => props.handleBarClick("resume")}
        >
          <p>Resume</p>
          {/* <img
            className="resume-img-move"
            src="https://i.imgur.com/DOlkeVw.jpg"
            alt="resume"
          /> */}
        </div>
        <div
          className="section-move"
          onClick={() => props.handleBarClick("portfolio")}
        >
          <p>Portfolio</p>{" "}
          {/* <img
            className="resume-img-move"
            src="https://i.imgur.com/7H6gShK.jpg"
            alt="portfolio"
          /> */}
        </div>

        <div
          className="section-move"
          onClick={() => props.handleBarClick("blog")}
        >
          <p>Blog</p>
          {/* <img
            className="resume-img-move"
            src="https://i.imgur.com/QUOFpG6.jpg"
            alt="blog"
          /> */}
        </div>
        <div
          className="section-move"
          onClick={() => props.handleBarClick("bio")}
        >
          {" "}
          <p>Bio</p>
          {/* <img
            className="bio-img-move"
            src="https://i.imgur.com/DOlkeVw.jpg"
            alt="bio"
          /> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default BarBoxies;
