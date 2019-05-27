import React from "react";
import { Redirect, Link, Route, Switch } from "react-router-dom";
import "../CSS/BarBoxies.css";
//import "../CSS/PhoneView.css";
import PostContainer from "../Components/Blog/PostContainer";
import Portfolio from "./Portfolio";
import Biography from "./Biography";
import Resume from "./Resume";

const BarBoxies = props => {
  return (
    <React.Fragment>
      <div className="column-container-move">
        <div
          className={
            props.viewedItem === "resume"
              ? "section-move active"
              : "section-move"
          }
          onClick={() => props.handleBarClick("resume")}
        >
          <p>Resume</p>
        </div>
        <div
          className={
            props.viewedItem === "portfolio"
              ? "section-move active"
              : "section-move"
          }
          onClick={() => props.handleBarClick("portfolio")}
        >
          <p>Portfolio</p>
        </div>

        <div
          className={
            props.viewedItem === "blog" ? "section-move active" : "section-move"
          }
          onClick={() => props.handleBarClick("blog")}
        >
          <p>Blog</p>
        </div>
        <div
          className={
            props.viewedItem === "bio" ? "section-move active" : "section-move"
          }
          onClick={() => props.handleBarClick("bio")}
        >
          {" "}
          <p>Bio</p>
        </div>
      </div>
      <div className="ole-container">
        <div className="x-div">
          <i className="fas fa-times x-button" onClick={props.Xout} />
        </div>
        {/* 
        {props.viewedItem === "blog" && <PostContainer />}


        {props.viewedItem === "portfolio" && <Portfolio />}
        {props.viewedItem === "resume" && <Resume />}
        {props.viewedItem === "bio" && <Biography />} */}
        <Switch>
          <Route exact path="/blog" component={PostContainer} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/resume" component={Resume} />
          <Route path="/bio" component={Biography} />
        </Switch>
      </div>
    </React.Fragment>
  );
};

export default BarBoxies;
