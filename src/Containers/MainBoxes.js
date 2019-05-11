import React, { useState } from "react";
import "../CSS/MainBoxes.css";
import "../CSS/PhoneView.css";
import { CSSTransition } from "react-transition-group";
import InnerBoxies from "./InnerBoxies";
import BarBoxies from "./BarBoxies";

const MainBoxes = props => {
  const [bar, setBar] = useState(false);
  const [viewedItem, setViewedItem] = useState("");

  const handleClick = item => {
    setViewedItem(item);
    setBar(true);
  };

  const handleBarClick = topic => {
    console.log(topic);
  };
  return (
    <div className="main-container ">
      {/* :::::::::::::::::: UNCLICKED MAIN BOX SECTION :::::::::::::::::::: */}
      {!bar && (
        <CSSTransition
          in={!props.introMsg && !bar}
          className="inner-container "
          timeout={1000}
          unmountOnExit
        >
          <InnerBoxies handleClick={handleClick} />
        </CSSTransition>
      )}

      {/* :::::::::::::::::::::::: BAR of BUTTONS :::::::::::::::::::::::::: */}
      <CSSTransition
        in={!props.introMsg && bar}
        className="main-container move-bar "
        timeout={2500}
        unmountOnExit
      >
        <BarBoxies handleBarClick={handleBarClick} />
      </CSSTransition>
    </div>
  );
};

export default MainBoxes;
