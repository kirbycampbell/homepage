import React, { useState, useEffect } from "react";
import "../CSS/MainBoxes.css";
import InnerBoxies from "./InnerBoxies";
import BarBoxies from "./BarBoxies";
import useInterval from "../Functions/useInterval";
import Roller from "./Roller";
import { Route } from "react-router-dom";

const MainBoxes = props => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [timer, setTimer] = useState(false);
  const [timer2, setTimer2] = useState(false);
  const [viewedItem, setViewedItem] = useState("");
  const [mainBoxClass, setMainBoxClass] = useState("main-box-hide");
  const [barBoxClass, setBarBoxClass] = useState("bar-box-move");
  const [pathname, setPathName] = useState("");

  useEffect(() => {
    if (props.history.location.pathname !== pathname) {
      setPathName(props.history.location.pathname);
    }
  }, [props.history.location.pathname, pathname]);

  // Intializing Sequence
  useEffect(() => {
    if (!props.introMsg) {
      setTimer(true);
    }
  }, [props.introMsg]);
  // FIRST VIEW - 4 SQUARES
  useEffect(() => {
    if (count >= 2) {
      //setMainBoxClass("main-box-end");
      setTimer(false);
      setCount(0);
    }
  }, [count]);

  useEffect(() => {
    if (pathname !== "/") {
      setTimer2(true);
      setCount2(0);
      setMainBoxClass("main-box-hide");
      setViewedItem(pathname.slice(1));
    } else {
      setCount2(0);
      setTimer2(false);
      setBarBoxClass("bar-box-start");
      setMainBoxClass("main-box-end");
    }
  }, [pathname]);
  //console.log(props.history);

  // TIMER INTERVALS
  useInterval(() => {
    if (timer) {
      setCount(count + 1);
    } else if (timer2) {
      setCount2(count2 + 1);
    }
  }, 500);
  // SECOND VIEW - BAR BOXES
  useEffect(() => {
    if (count2 >= 2) {
      setBarBoxClass("bar-box-end");
      setTimer2(false);
      setCount2(0);
    }
  }, [count2]);

  const handleClick = item => {
    setViewedItem(item);
    setBarBoxClass("bar-box-move");
    setTimer2(true);
    setMainBoxClass("main-box-hide");
  };
  const handleBarClick = topic => {
    setViewedItem(topic);
  };
  const Xout = () => {
    setMainBoxClass("main-box-end");
    setBarBoxClass("bar-box-start");
    props.history.push("/");
  };

  return (
    <div>
      {/* :::::::::::::::::: UNCLICKED MAIN BOX SECTION :::::::::::::::::::: */}
      <div className={"main-container " + mainBoxClass}>
        <Route
          path="/"
          render={props => <InnerBoxies handleClick={handleClick} />}
        />
      </div>
      {/* :::::::::::::::::::::::: BAR of BUTTONS :::::::::::::::::::::::::: */}
      {timer2 && (
        <div className="centered">
          <Roller />
        </div>
      )}
      <div className={"main-container " + barBoxClass}>
        <BarBoxies
          handleBarClick={handleBarClick}
          viewedItem={viewedItem}
          Xout={Xout}
          timer={timer}
        />
      </div>
    </div>
  );
};

export default MainBoxes;
