import React, { useState } from "react";
import useInterval from "./Functions/useInterval";
import MainBoxes from "./Containers/MainBoxes";
import SocialButtons from "./Containers/SocialButtons";
import Titles from "./Containers/Titles";
import Footer from "./Containers/Footer";
import "./App.css";
import "./CSS/PhoneView.css";

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
      <Titles
        introMsg={introMsg}
        secondMsg={secondMsg}
        setNewTitle={setNewTitle}
      />
      <div className="body-space">
        {/* <SocialButtons introMsg={introMsg} />
      <MainBoxes introMsg={introMsg} secondMsg={secondMsg} /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
