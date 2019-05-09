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
        timeout={300}
        classNames="title-intro"
        unmountOnExit
      >
        <React.Fragment>
          <div className="title">
            Hello. Welcome to Kirby Campbell's Home Page.
          </div>
        </React.Fragment>
      </CSSTransition>
      <CSSTransition
        in={!introMsg}
        timeout={300}
        classNames="main-container"
        unmountOnExit
      >
        <div className="main-container ">
          <div className="inner-container ">
            <div className="column-container animated slideInDown">
              <div className="section animated slideInLeft">Resume</div>
              <div className="section animated slideInRight">Portfolio</div>
            </div>
            <div className="column-container animated slideInUp  ">
              <div className="section animated rotateInDownLeft">Blog</div>
              <div className="section animated rotateInDownRight">Bio</div>
            </div>
          </div>
        </div>
        {/* <div className="footer">Footer Butter</div> */}
      </CSSTransition>
      <CSSTransition
        in={introMsg}
        timeout={300}
        classNames="title-intro"
        unmountOnExit
      >
        <React.Fragment>
          <div className="title-intro">
            Hello. Welcome to Kirby Campbell's Home Page.
          </div>
          <div className="main-container " />
          <div className="footer">Footer Butter</div>
        </React.Fragment>
      </CSSTransition>
    </div>
  );
}

export default App;
