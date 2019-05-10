import React from "react";
import "../CSS/SocialButtons.css";
import "../CSS/PhoneView.css";
import { CSSTransition } from "react-transition-group";

const SocialButtons = props => {
  return (
    <CSSTransition
      in={props.introMsg}
      timeout={1400}
      classNames="social-section"
      unmountOnExit
    >
      <div>
        <i className="fab fa-google social-item" />
        <a href="https://github.com/kirbycampbell" className="linker">
          <i className="fab fa-github social-item" />
        </a>
        <a href="https://twitter.com/CoderDabe1000" className="linker">
          <i className="fab fa-twitter social-item" />
        </a>
        <a
          href="https://www.linkedin.com/in/jkirbycampbell/"
          className="linker"
        >
          <i className="fab fa-linkedin social-item" />
        </a>
        <a href="https://github.com/kirbycampbell" className="linker">
          <i className="fas fa-share-alt social-item" />
        </a>
        <a
          href="https://open.spotify.com/playlist/5ieGTsbB6X0QlfGmJR7Grs"
          target="_blank"
          className="linker"
        >
          <i className="fab fa-spotify social-item" />
        </a>
      </div>
    </CSSTransition>
  );
};

export default SocialButtons;
