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
          <div className="image-box">
            <img
              className="resume-img"
              src="https://i.imgur.com/iuF70IT.jpg"
              alt="resume"
            />{" "}
          </div>
        </div>
        <div
          className="section animated slideInRight"
          onClick={() => props.handleClick("portfolio")}
        >
          <p>Portfolio</p>{" "}
          <div className="image-box">
            <img
              className="resume-img"
              src="https://i.imgur.com/kvk4CEA.jpg"
              alt="portfolio"
            />
          </div>
        </div>
      </div>
      <div className="column-container animated slideInUp  ">
        <div
          className="section animated rotateInDownLeft"
          onClick={() => props.handleClick("blog")}
        >
          <p>Blog</p>
          <div className="image-box">
            <img
              className="resume-img"
              src="https://i.imgur.com/FG2NclR.jpg"
              alt="blog"
            />{" "}
          </div>
        </div>
        <div
          className="section animated rotateInDownRight"
          onClick={() => props.handleClick("bio")}
        >
          {" "}
          <p>Bio</p>
          <div className="image-box">
            <img
              className="bio-img"
              src="https://i.imgur.com/vPQsa6M.jpg"
              alt="bio"
            />{" "}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default InnerBoxies;
