import React from "react";
import "../css/blogForm.css";
import "../css/Element.css";
import Highlight from "react-highlight";
import TextareaAutosize from "react-autosize-textarea";

const CodeElement = ({
  deleteElement,
  element,
  writeContent,
  toggleView,
  toggleEdit,
  languageChoice
}) => {
  if (element.loaded) {
    return (
      <div className="outer">
        <select
          value={element.language}
          name={element.number}
          onChange={languageChoice}
        >
          <option value="javascript">JavaScript</option>
          <option value="css">Css</option>
          <option value="html">HTML</option>
          <option value="c++">C++</option>
          <option value="json">JSON</option>
          <option value="ruby">Ruby</option>
          <option value="sql">SQL</option>
        </select>{" "}
        <div className="code-area user-made">
          <Highlight language={`${element.language}`}>{`${
            element.content
          }`}</Highlight>
        </div>
        <div className="edit-item" onClick={() => toggleEdit(element.number)}>
          <i name={element.number} className="fas fa-edit" />
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
        <TextareaAutosize
          name={element.number}
          placeholder="Enter CodeSnippet"
          value={element.content}
          className="user-made"
          onInput={writeContent}
          style={{
            border: "none",
            resize: "none",
            minHeight: "8vh",
            width: "94%",
            display: `${element.loaded ? "none" : "on"}`
          }}
        />{" "}
        <button
          name={element.number}
          onClick={toggleView}
          style={{ display: `${element.loaded ? "none" : "on"}` }}
          className=" btn btn-primary"
        >
          Load Code View
        </button>
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

export default CodeElement;
