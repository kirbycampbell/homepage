import React, { useState, useEffect } from "react";
import "../CSS/SocialButtons.css";
//import "../CSS/PhoneView.css";
import useInterval from "../Functions/useInterval";

const SocialButtons = props => {
  const [fadeIn, setFadeIn] = useState(false);
  const [count, setCount] = useState(0);
  const [socialClass, setSocialClass] = useState("social-start");

  useEffect(() => {
    if (!props.introMsg) {
      setFadeIn(true);
    }
  }, [props.introMsg]);

  useInterval(() => {
    if (fadeIn) {
      setCount(count + 1);
    }
  }, 1000);

  useEffect(() => {
    if (count >= 2) {
      setSocialClass("social-end");
    }
  }, [count]);

  return (
    <div className={"social-section " + socialClass}>
      <i className="fab fa-google social-item" />
      <a href="https://github.com/kirbycampbell" className="linker">
        <i className="fab fa-github social-item" />
      </a>
      <a href="https://twitter.com/CoderDabe1000" className="linker">
        <i className="fab fa-twitter social-item" />
      </a>
      <a href="https://www.linkedin.com/in/jkirbycampbell/" className="linker">
        <i className="fab fa-linkedin social-item" />
      </a>
      <a href="https://github.com/kirbycampbell" className="linker">
        <i className="fas fa-share-alt social-item" />
      </a>
      <a
        href="https://open.spotify.com/playlist/5ieGTsbB6X0QlfGmJR7Grs"
        target="_blank"
        rel="noopener noreferrer"
        className="linker"
      >
        <i className="fab fa-spotify social-item" />
      </a>
    </div>
  );
};

export default SocialButtons;
