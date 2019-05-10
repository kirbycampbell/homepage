import React, { useState } from "react";
import "./App.css";
// import "./PhoneView.css";
import useInterval from "./useInterval";
import { CSSTransition } from "react-transition-group";
import MainBoxes from "./MainBoxes";
var emoji = require("node-emoji");

function App() {
  const [introMsg, setIntroMsg] = useState(true);
  const [secondMsg, setSecondMsg] = useState(false);
  const [newTitle, setNewTitle] = useState(false);

  useInterval(() => {
    if (introMsg) {
      setIntroMsg(false);
    } else if (newTitle) {
      setSecondMsg(true);
    }
  }, 2000);
  return (
    <div className="App">
      {/*::::::::::::::::::::::::: PAGE INTRO VIEW ::::::::::::::::::::::::: */}
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
      {/*::::::::::::::::::::::::: SETTLED PAGE VIEW ::::::::::::::::::::::::: */}

      <CSSTransition
        in={!introMsg && !secondMsg}
        timeout={1400}
        className="title-intro"
        unmountOnExit
        onEntered={() => setNewTitle(true)}
      >
        <p>Hello. Welcome to Kirby Campbell's Home Page.</p>
      </CSSTransition>
      <CSSTransition
        in={secondMsg && !introMsg}
        timeout={1400}
        className="title-intro next"
        unmountOnExit
      >
        <div>
          <div className="second-title-bg" />
          <p className="second-text-title">
            Kirby Campbell. - - - - - - FullStack Web Developer.
          </p>
        </div>
      </CSSTransition>
      <CSSTransition
        in={!introMsg}
        timeout={1400}
        classNames="social-section"
        unmountOnExit
      >
        <div>
          <i className="fab fa-google social-item" />
          <a href="https://github.com/kirbycampbell" className="linker">
            <i className="fab fa-github social-item" />
          </a>
          <a href="https://twitter.com/CoderDabe1000" className="linker">
            <i className="fab fa-twitter social-item" />
          </a>
          <a
            href="https://www.linkedin.com/in/jkirbycampbell/"
            className="linker"
          >
            <i className="fab fa-linkedin social-item" />
          </a>
          <a href="https://github.com/kirbycampbell" className="linker">
            <i className="fas fa-share-alt social-item" />
          </a>
          <a
            href="https://open.spotify.com/playlist/5ieGTsbB6X0QlfGmJR7Grs"
            target="_blank"
            className="linker"
          >
            <i className="fab fa-spotify social-item" />
          </a>
        </div>
      </CSSTransition>
      <CSSTransition
        in={!introMsg}
        timeout={1000}
        classNames="main-container"
        unmountOnExit
      >
        <MainBoxes />
      </CSSTransition>

      <div className="footer">
        <p className="foot-text">
          Built w/ {emoji.get("heart")} - by Kirby Campbell
        </p>
        <p className="subscript">
          <i className="far fa-copyright copyrighter" /> 2019
        </p>
        <img
          src="https://i.imgur.com/0sj2H2J.jpg"
          alt="panoOfPortlandOr"
          className="footer-img"
        />
      </div>
    </div>
  );
}

export default App;
