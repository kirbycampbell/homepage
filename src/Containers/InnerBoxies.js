import React from "react";
import { Link } from "react-router-dom";

import "../CSS/InnerBoxies.css";
//import "../CSS/PhoneView.css";

const InnerBoxies = props => {
  return (
    <React.Fragment>
      <div className="column-container">
        <Link
          to="/resume"
          className="section"
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
        </Link>
        <Link
          to="/portfolio"
          className="section "
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
        </Link>
      </div>
      <div className="column-container    ">
        <Link
          to="/blog"
          className="section"
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
        </Link>
        <Link
          to="/bio"
          className="section"
          onClick={() => props.handleClick("bio")}
        >
          {" "}
          <div className="image-box">
            <p>Bio</p>
            <img
              className="bio-img"
              src="https://i.imgur.com/vPQsa6M.jpg"
              alt="bio"
            />{" "}
          </div>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default InnerBoxies;
