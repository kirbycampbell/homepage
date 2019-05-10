import React from "react";
import "../App.css";
import "../CSS/PhoneView.css";

const MainBoxes = () => {
  return (
    <div className="main-container ">
      <div className="inner-container ">
        <div className="column-container animated slideInDown">
          <div className="section animated slideInLeft">
            <p>Resume</p>
            <img
              className="resume-img"
              src="https://i.imgur.com/DOlkeVw.jpg"
              alt="resume"
            />
          </div>
          <div className="section animated slideInRight">
            <p>Portfolio</p>{" "}
            <img
              className="resume-img"
              src="https://i.imgur.com/7H6gShK.jpg"
              alt="portfolio"
            />
          </div>
        </div>{" "}
        <div className="column-container animated slideInUp  ">
          <div className="section animated rotateInDownLeft">
            <p>Blog</p>
            <img
              className="resume-img"
              src="https://i.imgur.com/QUOFpG6.jpg"
              alt="blog"
            />
          </div>
          <div className="section animated rotateInDownRight">
            {" "}
            <p>Bio</p>
            <img
              className="bio-img"
              src="https://i.imgur.com/DOlkeVw.jpg"
              alt="bio"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBoxes;
