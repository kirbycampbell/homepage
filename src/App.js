import React, { useState, useEffect } from "react";
import useInterval from "./Functions/useInterval";
import MainBoxes from "./Containers/MainBoxes";
import SocialButtons from "./Containers/SocialButtons";
import Titles from "./Containers/Titles";
import Footer from "./Containers/Footer";
import "./App.css";
//import "./CSS/PhoneView.css";

function App() {
  const [introMsg, setIntroMsg] = useState(true);
  const [secondMsg, setSecondMsg] = useState(false);
  const [newTitle, setNewTitle] = useState(false);
  const [skipIntro, setSkipIntro] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("visited") === true) {
      setSkipIntro(true);
    }
  }, []);

  useInterval(() => {
    if (introMsg) {
      setIntroMsg(false);
      console.log("HEYO FUCK");
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
          <MainBoxes
            introMsg={introMsg}
            secondMsg={secondMsg}
            skipIntro={skipIntro}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
