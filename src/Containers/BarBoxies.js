import React from "react";
import { Link, Route } from "react-router-dom";
import "../CSS/BarBoxies.css";
import PostContainer from "../Components/Blog/PostContainer";
import Portfolio from "./Portfolio";
import Biography from "./Biography";
import Resume from "./Resume";

const BarBoxies = props => {
  // Click Function extracted in case other functionality needed...
  const insideBarClick = el => {
    props.handleBarClick(el);
  };

  return (
    <React.Fragment>
      <div className="column-container-move">
        <Link
          to="/resume"
          className={
            props.viewedItem === "resume"
              ? "section-move active"
              : "section-move"
          }
          onClick={() => insideBarClick("resume")}
        >
          <p>Resume</p>
        </Link>
        <Link
          to="/portfolio"
          className={
            props.viewedItem === "portfolio"
              ? "section-move active"
              : "section-move"
          }
          onClick={() => insideBarClick("portfolio")}
        >
          <p>Portfolio</p>
        </Link>
        <Link
          to="/blog"
          className={
            props.viewedItem === "blog" ? "section-move active" : "section-move"
          }
          onClick={() => insideBarClick("blog")}
        >
          <p>Blog</p>
        </Link>
        <Link
          to="/bio"
          className={
            props.viewedItem === "bio" ? "section-move active" : "section-move"
          }
          onClick={() => insideBarClick("bio")}
        >
          {" "}
          <p>Bio</p>
        </Link>
      </div>
      <div className="ole-container">
        <div className="x-div">
          <i className="fas fa-times x-button" onClick={props.Xout} />
        </div>
        <Route path="/blog" component={PostContainer} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/resume" component={Resume} />
        <Route path="/bio" component={Biography} />
      </div>
    </React.Fragment>
  );
};

export default BarBoxies;
