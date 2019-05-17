import React, { useState, useEffect } from "react";
import "./Titles2.css";

const Titles = props => {
  const [titleName, setTitleName] = useState("title-start");

  useEffect(() => {
    setTitleName("title-end");
  }, [props]);
  return (
    <div>
      {" "}
      {/*::::::::::::::::::::::::: PAGE INTRO VIEW ::::::::::::::::::::::::: */}
      <React.Fragment>
        {/* <CSSTransition
            in={props.introMsg}
            timeout={0}
            className="title-intro"
            unmountOnExit
          > */}
        <div className={"title-intro " + titleName}>
          Hello. Welcome to Kirby Campbell's Home Page.
        </div>
        {/* <div
          className={
            "second-title " + props.introMsg
              ? "sec-title-start"
              : "sec-title-end"
          }
        >
          <div className="second-title-bg" />
          <p className="second-text-title">
            Kirby Campbell. - - - - - - FullStack Web Developer.
          </p>
        </div> */}
        {/* </CSSTransition> */}
        {/* <div className="main-container-start " /> */}
      </React.Fragment>
      {/*::::::::::::::::::::::::: SETTLED PAGE VIEW ::::::::::::::::::::::::: */}
      {/* <CSSTransition
        in={!props.introMsg && !props.secondMsg}
        timeout={0}
        className="title-intro"
        unmountOnExit
        onEntered={() => props.setNewTitle(true)}
      >
        <p>Hello. Welcome to Kirby Campbell's Home Page.</p>
      </CSSTransition>
      <CSSTransition
        in={props.secondMsg && !props.introMsg}
        timeout={0}
        className="title-intro next"
        unmountOnExit
      >
        <div>
          <div className="second-title-bg" />
          <p className="second-text-title">
            Kirby Campbell. - - - - - - FullStack Web Developer.
          </p>
        </div>
      </CSSTransition> */}
    </div>
  );
};

export default Titles;
