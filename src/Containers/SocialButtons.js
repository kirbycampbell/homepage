import React, { useState, useEffect } from "react";
import "../CSS/SocialButtons.css";
//import "../CSS/PhoneView.css";
import useInterval from "../Functions/useInterval";

const SocialButtons = props => {
  const [fadeIn, setFadeIn] = useState(false);
  const [count, setCount] = useState(0);
  const [socialClass, setSocialClass] = useState("social-start");

  useEffect(() => {
    if (props.playIntro) {
      setSocialClass("social-start");
      setFadeIn(true);
    } else {
      setSocialClass("social-end");
    }
  }, [props.playIntro]);

  useInterval(() => {
    if (fadeIn) {
      setCount(count + 1);
    }
  }, 1000);

  useEffect(() => {
    if (count >= 2 && fadeIn) {
      setSocialClass("social-end");
    }
  }, [count, fadeIn]);

  return (
    <div className={"social-section " + socialClass}>
      <a
        href="https://github.com/kirbycampbell"
        target="_blank"
        rel="noopener noreferrer"
        className="linker"
      >
        <i className="fab fa-github social-item" />
        <div className="btn-explain">GitHub</div>
      </a>
      <a
        href="https://twitter.com/CoderDabe1000"
        target="_blank"
        rel="noopener noreferrer"
        className="linker"
      >
        <i className="fab fa-twitter social-item" />
        <div className="btn-explain">Twitter</div>
      </a>
      <a
        href="https://www.linkedin.com/in/jkirbycampbell/"
        target="_blank"
        rel="noopener noreferrer"
        className="linker"
      >
        <i className="fab fa-linkedin social-item" />
        <div className="btn-explain">LinkedIn</div>
      </a>

      <a
        href="https://angel.co/kirby-campbell?al_content=view+your+profile&al_source=transaction_feed%2Fnetwork_sidebar"
        target="_blank"
        rel="noopener noreferrer"
        className="linker"
      >
        <img
          className="social-item social-img"
          src={
            "https://cdn2.iconfinder.com/data/icons/font-awesome/1792/angellist-512.png"
          }
          alt="angel_list"
        />
        <div className="btn-explain">Angellist</div>
      </a>
      <a
        href="https://github.com/kirbycampbell"
        target="_blank"
        rel="noopener noreferrer"
        className="linker"
      >
        <i className="fas fa-share-alt social-item" />
        <div className="btn-explain">Share</div>
      </a>
      <a
        href="https://open.spotify.com/playlist/5ieGTsbB6X0QlfGmJR7Grs"
        target="_blank"
        rel="noopener noreferrer"
        className="linker"
      >
        <i className="fab fa-spotify social-item" />
        <div className="btn-explain">Spotify</div>
      </a>
    </div>
  );
};

export default SocialButtons;
