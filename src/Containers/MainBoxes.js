import React, { useState, useEffect } from "react";
import "../CSS/MainBoxes.css";
import "../CSS/PhoneView.css";
import { CSSTransition } from "react-transition-group";
import InnerBoxies from "./InnerBoxies";
import BarBoxies from "./BarBoxies";
import useInterval from "../Functions/useInterval";

const MainBoxes = props => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [timer, setTimer] = useState(false);
  const [timer2, setTimer2] = useState(false);
  const [mainBoxClass, setMainBoxClass] = useState("main-box-start");
  const [barBoxClass, setBarBoxClass] = useState("bar-box-start");
  const [bar, setBar] = useState(false);
  const [viewedItem, setViewedItem] = useState("");
  const [fadeNew, setFadeNew] = useState(false);

  // Intializing Sequence
  useEffect(() => {
    if (!props.introMsg) {
      setTimer(true);
    }
  }, [props.introMsg]);
  // TIMER INTERVALS
  useInterval(() => {
    if (timer) {
      setCount(count + 1);
    } else if (timer2) {
      setCount2(count2 + 1);
    }
  }, 1000);
  // FIRST VIEW - 4 SQUARES
  useEffect(() => {
    if (count >= 2) {
      setMainBoxClass("main-box-end");
      setTimer(false);
      setCount(0);
    }
  }, [count]);
  // SECOND VIEW - BAR BOXES
  useEffect(() => {
    if (count2 >= 2) {
      setBarBoxClass("bar-box-end");
      setTimer2(false);
      setCount2(0);
    }
  }, [count2]);

  // GENERAL FUNCTIONS
  const handleClick = item => {
    setViewedItem(item);
    setBarBoxClass("bar-box-move");
    setTimer2(true);
    setBar(true);
    setMainBoxClass("main-box-hide");
  };
  const handleBarClick = topic => {
    setViewedItem(topic);
  };
  const Xout = () => {
    setFadeNew(false);
    setBar(false);
    setMainBoxClass("main-box-end");
  };

  return (
    <div>
      {/* :::::::::::::::::: UNCLICKED MAIN BOX SECTION :::::::::::::::::::: */}
      <div className={"main-container " + mainBoxClass}>
        <InnerBoxies handleClick={handleClick} />
      </div>
      {/* :::::::::::::::::::::::: BAR of BUTTONS :::::::::::::::::::::::::: */}
      <div className={"main-container " + barBoxClass}>
        <BarBoxies
          handleBarClick={handleBarClick}
          viewedItem={viewedItem}
          Xout={Xout}
          viewedItem={viewedItem}
        />
      </div>
      {/* <CSSTransition in={fadeNew} className="new-bar" timeout={0} unmountOnExit>
        <div className="main-container ">
          <BarBoxies
            handleBarClick={handleBarClick}
            viewedItem={viewedItem}
            Xout={Xout}
            viewedItem={viewedItem}
          />
        </div>
      </CSSTransition> */}
    </div>
  );
};

export default MainBoxes;
