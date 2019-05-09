import React from "react";
import "./App.css";
import "./PhoneView.css";

function App() {
  return (
    <div className="App">
      <div className="title">Hello. Welcome to Kirby Campbell's Home Page.</div>
      <div className="main-container">
        <div className="inner-container">
          <div className="column-container">
            <div className="section">Resume</div>
            <div className="section">Portfolio</div>
          </div>
          <div className="column-container">
            <div className="section">Blog</div>
            <div className="section">Bio</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
