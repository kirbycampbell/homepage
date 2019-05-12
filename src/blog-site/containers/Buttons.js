import React from "react";
import "../css/Button.css";

const Buttons = ({
  clearState,
  loadItems,
  handleSubmission,
  addSection,
  closeToolBar,
  count,
  toolbarView
}) => {
  if (count === 0) {
    return (
      <div>
        <button name="h1" className="submit-button" onClick={addSection}>
          Add Title
        </button>
        <button className="submit-button" onClick={loadItems}>
          Load Previous
        </button>
      </div>
    );
  } else if (count === 1) {
    return (
      <div>
        <button name="author" className="submit-button" onClick={addSection}>
          Add Your Name
        </button>
        <button className="submit-button" onClick={loadItems}>
          Load Previous
        </button>
      </div>
    );
  } else if (!toolbarView) {
    return (
      <div>
        <button className="submit-button" onClick={handleSubmission}>
          Submit post
        </button>
        <button className="submit-button" onClick={closeToolBar}>
          Open Tool Bar
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Tools</h3>
        <button name="h1" className="submit-button" onClick={addSection}>
          Add Title
        </button>
        <button name="p" className="submit-button" onClick={addSection}>
          Add Paragraph
        </button>
        <button name="code" className="submit-button" onClick={addSection}>
          Add Code Snippet
        </button>
        <button name="img" className="submit-button" onClick={addSection}>
          Add Image
        </button>
        <button name="video" className="submit-button" onClick={addSection}>
          Add Video
        </button>
        <button name="delete" className="submit-button" onClick={clearState}>
          Clear Page
        </button>
        <button className="submit-button" onClick={loadItems}>
          Load Previous
        </button>
        <button className="submit-button" onClick={handleSubmission}>
          Submit post
        </button>
        <button className="submit-button" onClick={closeToolBar}>
          Close Tool Bar
        </button>
      </div>
    );
  }
};

export default Buttons;
