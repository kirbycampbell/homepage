import React, { useState, useEffect } from "react";
import useInterval from "./Functions/useInterval";
import MainBoxes from "./Containers/MainBoxes";
import SocialButtons from "./Containers/SocialButtons";
import Titles from "./Containers/Titles";
import Footer from "./Containers/Footer";
import "./App.css";
import { withRouter } from "react-router-dom";

function App(props) {
  const [introMsg, setIntroMsg] = useState(true);
  const [secondMsg, setSecondMsg] = useState(false);
  const [newTitle, setNewTitle] = useState(false);
  const [skipIntro, setSkipIntro] = useState(false);
  const [urlParams, setUrlParams] = useState("/");

  // This Checks to see if the user has visited the site before
  useEffect(() => {
    if (localStorage.getItem("visited") === true) {
      setSkipIntro(true);
    }
  }, []);

  // This keeps urlParams up to date with current urlParams in browser
  useEffect(() => {
    if (props.location.pathname !== "/") {
      setUrlParams(props.location.pathname);
      setSkipIntro(true);
      setIntroMsg(false);
    }
  }, [props.location]);

  // When first loading, introMsg is true, so after 2 seconds it switches secondMsg to true.
  useInterval(() => {
    if (introMsg && !skipIntro) {
      setIntroMsg(false);
    } else if (newTitle && !skipIntro) {
      setSecondMsg(true);
      localStorage.setItem("visited", true);
    } else if (skipIntro) {
      setSecondMsg(true);
    }
  }, 2000);

  return (
    <div className="App">
      <div className="above-footer-cont">
        <Titles
          introMsg={introMsg}
          secondMsg={secondMsg}
          setNewTitle={setNewTitle}
          skipIntro={skipIntro}
          urlParams={urlParams}
        />
        <div className="body-space">
          <SocialButtons
            introMsg={introMsg}
            skipIntro={skipIntro}
            urlParams={urlParams}
          />
          <MainBoxes
            introMsg={introMsg}
            secondMsg={secondMsg}
            skipIntro={skipIntro}
            urlParams={urlParams}
            setUrlParams={setUrlParams}
            history={props.history}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default withRouter(App);
