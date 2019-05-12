import React from "react";
import "../css/blogForm.css";
import "../css/Element.css";
import TextareaAutosize from "react-autosize-textarea";

const PElement = ({ deleteElement, element, writeContent }) => {
  return (
    <div className="outer">
      <TextareaAutosize
        name={element.number}
        onInput={writeContent}
        value={element.content}
        className="body-text user-made"
        placeholder="Enter Paragraph"
        style={{
          border: "none",
          resize: "none",
          fontSize: "calc(7px + 1vmin)"
        }}
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

export default PElement;
