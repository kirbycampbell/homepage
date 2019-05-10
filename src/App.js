import React, { useState } from "react";
import "./App.css";
import "./PhoneView.css";
import useInterval from "./useInterval";
import { CSSTransition } from "react-transition-group";

function App() {
  const [introMsg, setIntroMsg] = useState(true);
  const [secondMsg, setSecondMsg] = useState(false);

  useInterval(() => {
    if (introMsg) {
      setIntroMsg(false);
      setSecondMsg(true);
    }
  }, 2000);
  return (
    <div className="App">
      <CSSTransition
        in={!introMsg}
        timeout={1000}
        className="title-intro"
        unmountOnExit
      >
        <p>Hello. Welcome to Kirby Campbell's Home Page.</p>
      </CSSTransition>
      <CSSTransition
        in={!introMsg}
        timeout={1000}
        classNames="main-container"
        unmountOnExit
      >
        <div className="main-container ">
          <div className="inner-container ">
            <div className="column-container animated slideInDown">
              <div className="section animated slideInLeft">
                <p>Resume</p>
                <img
                  className="resume-img"
                  src="https://i.imgur.com/DOlkeVw.jpg"
                />
              </div>
              <div className="section animated slideInRight">
                <p>Portfolio</p>{" "}
                <img
                  className="resume-img"
                  src="https://i.imgur.com/7H6gShK.jpg"
                />
              </div>
            </div>{" "}
            <div className="column-container animated slideInUp  ">
              <div className="section animated rotateInDownLeft">
                <p>Blog</p>
                <img
                  className="resume-img"
                  src="https://i.imgur.com/QUOFpG6.jpg"
                />
              </div>
              <div className="section animated rotateInDownRight">
                {" "}
                <p>Bio</p>
                <img
                  className="bio-img"
                  src="https://i.imgur.com/DOlkeVw.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
      {introMsg && (
        <React.Fragment>
          <CSSTransition
            in={introMsg}
            timeout={1000}
            className="title-intro"
            unmountOnExit
          >
            <p>Hello. Welcome to Kirby Campbell's Home Page.</p>
          </CSSTransition>
          <div className="main-container-start " />
        </React.Fragment>
      )}
      <div className="footer">Footer Butter</div>
    </div>
  );
}

export default App;
