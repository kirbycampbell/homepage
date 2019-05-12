import React from "react";
import "../css/blogForm.css";
import "../css/Element.css";
import Highlight from "react-highlight";
import ReactPlayer from "react-player";

const MorphElement = ({ element, type }) => {
  if (type === "h1") {
    return (
      <div className="outer">
        <h1 className="title-area" style={{ border: "none", resize: "none" }}>
          {" "}
          {element.content.stringValue}
        </h1>
      </div>
    );
  } else if (type === "author") {
    return (
      <div className="outer">
        <p className="author-area" style={{ fontSize: "14px", margin: "auto" }}>
          Written By: {element.content.stringValue}
        </p>
      </div>
    );
  } else if (type === "p") {
    return (
      <div className="outer">
        <p className="body-text">{element.content.stringValue}</p>
      </div>
    );
  } else if (type === "code") {
    return (
      <div className="outer">
        <div className="code-area">
          <Highlight language={`${element.language}`}>{`${
            element.content.stringValue
          }`}</Highlight>
        </div>
      </div>
    );
  } else if (type === "img") {
    return (
      <div className="outer non-click">
        <div className="outer-image">
          <img
            src={element.content.stringValue}
            alt="something"
            className="image1"
          />
        </div>
      </div>
    );
  } else if (type === "video") {
    return (
      <div className="outer non-click">
        <div className="outer-image">
          <ReactPlayer url={element.content.stringValue} className="image1" />
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default MorphElement;
