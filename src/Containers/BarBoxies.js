import React, { useState, useEffect } from "react";
import { Redirect, Link, Route, Switch } from "react-router-dom";
import "../CSS/BarBoxies.css";
//import "../CSS/PhoneView.css";
import PostContainer from "../Components/Blog/PostContainer";
import Portfolio from "./Portfolio";
import Biography from "./Biography";
import Resume from "./Resume";

const BarBoxies = props => {
  // const [chosenTopic, setChosenTopic] = useState(props.viewedItem);
  // useEffect(() => {
  //   setChosenTopic(props.viewedItem);
  // }, [props.viewedItem]);

  // useEffect(() => {
  //   props.history.push("/" + props.viewedItem);
  // }, [props]);

  const insideBarClick = el => {
    props.handleBarClick(el);
    props.history.push("/" + el);
  };
  return (
    <React.Fragment>
      <div className="column-container-move">
        <div
          className={
            props.viewedItem === "resume"
              ? "section-move active"
              : "section-move"
          }
          onClick={() => insideBarClick("resume")}
        >
          <p>Resume</p>
        </div>
        <div
          className={
            props.viewedItem === "portfolio"
              ? "section-move active"
              : "section-move"
          }
          onClick={() => insideBarClick("portfolio")}
        >
          <p>Portfolio</p>
        </div>

        <div
          className={
            props.viewedItem === "blog" ? "section-move active" : "section-move"
          }
          onClick={() => insideBarClick("blog")}
        >
          <p>Blog</p>
        </div>
        <div
          className={
            props.viewedItem === "bio" ? "section-move active" : "section-move"
          }
          onClick={() => insideBarClick("bio")}
        >
          {" "}
          <p>Bio</p>
        </div>
      </div>
      <div className="ole-container">
        <div className="x-div">
          <i className="fas fa-times x-button" onClick={props.Xout} />
        </div>
        {props.viewedItem === "blog" && <PostContainer />}

        {props.viewedItem === "portfolio" && <Portfolio />}
        {props.viewedItem === "resume" && <Resume />}
        {props.viewedItem === "bio" && <Biography />}
        {/* <Route path="/blog" component={PostContainer} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/resume" component={Resume} />
        <Route path="/bio" component={Biography} /> */}
      </div>
    </React.Fragment>
  );
};

export default BarBoxies;
