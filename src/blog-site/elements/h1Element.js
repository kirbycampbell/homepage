import React from "react";
import "../css/blogForm.css";
import "../css/Element.css";
import TextareaAutosize from "react-autosize-textarea";

const H1Element = ({ deleteElement, element, writeContent }) => {
  return (
    <div className="outer">
      <TextareaAutosize
        name={element.number}
        className="title-area user-made"
        placeholder="Enter Title"
        value={element.content}
        onInput={writeContent}
        style={{ border: "none", resize: "none" }}
      />
      <div
        name={element.number}
        className="cancel-item"
        onClick={() => deleteElement(element.number)}
      >
        <i name={element.number} className="fas fa-trash" />
      </div>
    </div>
  );
};

export default H1Element;
