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
        </div>
        <div
          className="section-move"
          onClick={() => props.handleBarClick("portfolio")}
        >
          <p>Portfolio</p>{" "}
        </div>

        <div
          className="section-move"
          onClick={() => props.handleBarClick("blog")}
        >
          <p>Blog</p>
        </div>
        <div
          className="section-move"
          onClick={() => props.handleBarClick("bio")}
        >
          {" "}
          <p>Bio</p>
        </div>
      </div>
      <div className="ole-container">Take Up the space</div>
    </React.Fragment>
  );
};

export default BarBoxies;
