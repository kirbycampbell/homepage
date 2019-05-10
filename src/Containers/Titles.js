import React from "react";
import "../CSS/Titles.css";
import { CSSTransition } from "react-transition-group";

const Titles = props => {
  return (
    <div>
      {" "}
      {/*::::::::::::::::::::::::: PAGE INTRO VIEW ::::::::::::::::::::::::: */}
      {props.introMsg && (
        <React.Fragment>
          <CSSTransition
            in={props.introMsg}
            timeout={1000}
            className="title-intro"
            unmountOnExit
          >
            <p>Hello. Welcome to Kirby Campbell's Home Page.</p>
          </CSSTransition>
          <div className="main-container-start " />
        </React.Fragment>
      )}
      {/*::::::::::::::::::::::::: SETTLED PAGE VIEW ::::::::::::::::::::::::: */}
      <CSSTransition
        in={!props.introMsg && !props.secondMsg}
        timeout={1400}
        className="title-intro"
        unmountOnExit
        onEntered={() => props.setNewTitle(true)}
      >
        <p>Hello. Welcome to Kirby Campbell's Home Page.</p>
      </CSSTransition>
      <CSSTransition
        in={props.secondMsg && !props.introMsg}
        timeout={1400}
        className="title-intro next"
        unmountOnExit
      >
        <div>
          <div className="second-title-bg" />
          <p className="second-text-title">
            Kirby Campbell. - - - - - - FullStack Web Developer.
          </p>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Titles;
