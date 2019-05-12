import React from "react";
import "../css/blogForm.css";
import "../css/Element.css";
import TextareaAutosize from "react-autosize-textarea";

const ImgElement = ({
  deleteElement,
  element,
  writeContent,
  toggleView,
  toggleEdit
}) => {
  if (element.loaded) {
    return (
      <div className="outer">
        <div className="outer-image user-made">
          <img
            src={element.content}
            alt="something"
            className="image1 user-made"
          />
          <div className="edit-item" onClick={() => toggleEdit(element.number)}>
            <i name={element.number} className="fas fa-edit" />
          </div>
        </div>
        <div
          name={element.number}
          className="cancel-item"
          onClick={() => deleteElement(element.number)}
        >
          <i name={element.number} className="fas fa-trash" />
        </div>
      </div>
    );
  } else
    return (
      <div className="outer">
        <div className="outer-image user-made">
          <TextareaAutosize
            name={element.number}
            onInput={writeContent}
            value={element.content}
            className="user-made"
            placeholder="Paste Image Source"
            style={{
              border: "none",
              resize: "none",
              fontSize: "calc(7px + 1vmin)",
              width: "60%"
            }}
          />
          <div>
            <button
              className=" btn btn-primary"
              name={element.number}
              onClick={toggleView}
            >
              View Image
            </button>
          </div>
        </div>
      </div>
    );
};

export default ImgElement;
