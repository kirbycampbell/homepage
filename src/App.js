import React, { useState, useEffect, useRef } from "react";
import useInterval from "./Functions/useInterval";
import MainBoxes from "./Containers/MainBoxes";
import SocialButtons from "./Containers/SocialButtons";
import Titles from "./Containers/Titles";
import Footer from "./Containers/Footer";
import "./App.css";
import { Route, withRouter } from "react-router-dom";

function App(props) {
  const [introMsg, setIntroMsg] = useState(true);
  const [secondMsg, setSecondMsg] = useState(false);
  const [newTitle, setNewTitle] = useState(false);
  const [skipIntro, setSkipIntro] = useState(false);
  const [urlParams, setUrlParams] = useState("/main");

  useEffect(() => {
    if (localStorage.getItem("visited") === true) {
      setSkipIntro(true);
    }
  }, []);

  useEffect(() => {
    setUrlParams(props.location.pathname);
  }, [props.location]);
  console.log(urlParams);

  useInterval(() => {
    if (introMsg) {
      setIntroMsg(false);
    } else if (newTitle) {
      setSecondMsg(true);
      localStorage.setItem("visited", true);
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
        />
        <div className="body-space">
          <SocialButtons introMsg={introMsg} skipIntro={skipIntro} />
          <Route
            path="/"
            render={() => (
              <MainBoxes
                introMsg={introMsg}
                secondMsg={secondMsg}
                skipIntro={skipIntro}
              />
            )}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default withRouter(App);
