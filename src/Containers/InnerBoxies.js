import React from "react";
import "../CSS/InnerBoxies.css";
import "../CSS/PhoneView.css";

const InnerBoxies = props => {
  return (
    <React.Fragment>
      <div className="column-container animated slideInDown">
        <div
          className="section animated slideInLeft"
          onClick={() => props.handleClick("resume")}
        >
          <p>Resume</p>
          <img
            className="resume-img"
            src="https://i.imgur.com/DOlkeVw.jpg"
            alt="resume"
          />
        </div>
        <div
          className="section animated slideInRight"
          onClick={() => props.handleClick("portfolio")}
        >
          <p>Portfolio</p>{" "}
          <img
            className="resume-img"
            src="https://i.imgur.com/7H6gShK.jpg"
            alt="portfolio"
          />
        </div>
      </div>
      <div className="column-container animated slideInUp  ">
        <div
          className="section animated rotateInDownLeft"
          onClick={() => props.handleClick("blog")}
        >
          <p>Blog</p>
          <img
            className="resume-img"
            src="https://i.imgur.com/QUOFpG6.jpg"
            alt="blog"
          />
        </div>
        <div
          className="section animated rotateInDownRight"
          onClick={() => props.handleClick("bio")}
        >
          {" "}
          <p>Bio</p>
          <img
            className="bio-img"
            src="https://i.imgur.com/DOlkeVw.jpg"
            alt="bio"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default InnerBoxies;
