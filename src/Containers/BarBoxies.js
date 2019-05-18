import React from "react";
import "../CSS/BarBoxies.css";
import "../CSS/PhoneView.css";
import PostContainer from "../blog-site/containers/PostContainer";

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
          <p>Portfolio</p>{" "}
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
        <div>
          <i className="fas fa-times x-button" onClick={props.Xout} />
        </div>
        {props.viewedItem === "blog" && <PostContainer />}
        {props.viewedItem !== "blog" && (
          <div style={{ fontSize: "50px" }}>
            {props.viewedItem.toUpperCase()}
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default BarBoxies;
