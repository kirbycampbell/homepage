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

  useEffect(() => {
    //Intro Message gets timer1 going for Initial Move
    setRunTimer(true);
  }, [props.introMsg]);

  useInterval(() => {
    // General Timer, adding 1 to both timers each second.
    if (runTimer) {
      setTimer(timer + 1);
    }
  }, 1000);

  useEffect(() => {
    // Sets First title's className to end of animation name.
    if (timer >= 2) {
      setTitleName("title-end");
      setRunTimer(false);
      setRunTimer2(true);
    }
  }, [timer]);

  useInterval(() => {
    if (runTimer2) {
      setTimer2(timer2 + 1);
    }
  }, 1000);

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
        {/* </CSSTransition> */}
        {/* <div className="main-container-start " /> */}
      </React.Fragment>
    </div>
  );
};

export default Titles;
