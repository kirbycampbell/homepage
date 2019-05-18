import React, { useState, useEffect } from "react";
import useInterval from "../Functions/useInterval";
import "./Titles2.css";

const Titles = props => {
  const [runTimer, setRunTimer] = useState(false);
  const [runTimer2, setRunTimer2] = useState(false);
  const [timer, setTimer] = useState(0);
  const [timer2, setTimer2] = useState(0);
  const [titleName, setTitleName] = useState("title-start");
  const [titleName2, setTitleName2] = useState("sec-title-start");

  //Intro Message gets timer1 going for Initial Move
  useEffect(() => {
    setRunTimer(true);
  }, [props.introMsg]);

  useInterval(() => {
    if (runTimer) {
      // Timer 1 (Intro Title)
      setTimer(timer + 1);
    } else if (runTimer2) {
      // Timer 2 (Plant Image + Cursive Title)
      setTimer2(timer2 + 1);
    }
  }, 1000);

  // FIRST TIMER for STARTING TITLE
  useEffect(() => {
    if (timer >= 2) {
      setTitleName("title-end");
      setRunTimer(false); // Ends Timer Run
      setRunTimer2(true); // Starts Timer 2 Run
    }
  }, [timer]);

  // SECOND TIMER for MAIN LAYOUT Routine
  useEffect(() => {
    if (timer2 >= 3) {
      setTitleName2("sec-title-end");
      setTitleName("title-gone");
      setRunTimer2(false);
    }
  }, [timer2]);

  return (
    <div>
      {" "}
      {/*::::::::::::::::::::::::: PAGE INTRO VIEW ::::::::::::::::::::::::: */}
      <React.Fragment>
        <div className={"title " + titleName}>
          <div>Hello. Welcome to Kirby Campbell's Home Page.</div>
        </div>
        <div className={"second-title " + titleName2}>
          <div className="second-title-bg" />
          <div className="second-text-title">
            Kirby Campbell. - - - - - - FullStack Web Developer.
          </div>
        </div>
      </React.Fragment>
    </div>
  );
};

export default Titles;
