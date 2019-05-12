import React from "react";
import "../css/blogForm.css";
import "../css/Element.css";
import TextareaAutosize from "react-autosize-textarea";

const AuthorElement = ({ element, writeContent }) => {
  return (
    <div className="outer">
      <TextareaAutosize
        name={element.number}
        onInput={writeContent}
        value={element.content}
        className="blocktext author-area user-made"
        placeholder="Enter Your Name"
        style={{
          border: "none",
          resize: "none",
          fontSize: "calc(7px + 1vmin)"
        }}
      />
    </div>
  );
};

export default AuthorElement;
