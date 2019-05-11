import React, { useState } from "react";
import "../CSS/MainBoxes.css";
import "../CSS/PhoneView.css";
import { CSSTransition } from "react-transition-group";
import InnerBoxies from "./InnerBoxies";
import BarBoxies from "./BarBoxies";

const MainBoxes = props => {
  const [bar, setBar] = useState(false);
  const [viewedItem, setViewedItem] = useState("");
  const [fadeNew, setFadeNew] = useState(false);

  const handleClick = item => {
    setViewedItem(item);
    setBar(true);
  };

  const handleBarClick = topic => {
    setViewedItem(topic);
  };

  const Xout = () => {
    setFadeNew(false);
    setBar(false);
  };
  return (
    <div>
      {/* :::::::::::::::::: UNCLICKED MAIN BOX SECTION :::::::::::::::::::: */}
      <CSSTransition
        in={!props.introMsg && !bar}
        timeout={0}
        onExited={() => setFadeNew(true)}
        unmountOnExit
      >
        <div className="main-container ">
          <InnerBoxies handleClick={handleClick} />
        </div>
      </CSSTransition>

      {/* :::::::::::::::::::::::: BAR of BUTTONS :::::::::::::::::::::::::: */}
      <CSSTransition in={fadeNew} className="new-bar" timeout={0} unmountOnExit>
        <div className="main-container ">
          <BarBoxies
            handleBarClick={handleBarClick}
            viewedItem={viewedItem}
            Xout={Xout}
            viewedItem={viewedItem}
          />
        </div>
      </CSSTransition>
    </div>
  );
};

export default MainBoxes;
