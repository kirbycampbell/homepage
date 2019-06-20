import React, { useState, useEffect } from "react";
import MainBoxes from "./Containers/MainBoxes";
import SocialButtons from "./Containers/SocialButtons";
import Titles from "./Containers/Titles";
import Footer from "./Containers/Footer";
import "./App.css";
import { withRouter } from "react-router-dom";
import useInterval from "./Functions/useInterval";

function App(props) {
  const [playIntro, setPlayIntro] = useState(true);
  const [count, setCount] = useState(0);

  // This Checks to see if the user has visited the site before
  useEffect(() => {
    if (localStorage.getItem("visited") === "yep") {
      //setPlayIntro(false);
      console.log("the site was visited!");
      //localStorage.setItem("visited", "nope");
    }
    if (localStorage.getItem("visited") !== "yep") {
      //setPlayIntro(true);
    }
  }, []);

  useInterval(() => {
    if (playIntro) {
      setCount(count + 1);
    }
    if (count >= 2) {
      setPlayIntro(false);
      localStorage.setItem("visited", "yep");
    }
  }, 2000);

  return (
    <div className="App">
      <div className="above-footer-cont">
        <Titles playIntro={playIntro} />
        <div className="body-space">
          <SocialButtons playIntro={playIntro} />
          <MainBoxes playIntro={playIntro} history={props.history} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default withRouter(App);
