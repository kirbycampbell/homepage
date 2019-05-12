import React from "react";
import "../css/SocialBox.css";

const SocialBox = () => {
  return (
    <div className="outer-box">
      <div className="hand-style">
        <i className="fas fa-hand-spock" />
      </div>
      <div className="bm-style">
        <i className="far fa-bookmark" />
      </div>
      <div className="fb-style">
        <i className="fab fa-facebook" />
      </div>
      <div className="twit-style">
        <i className="fab fa-twitter" />
      </div>
    </div>
  );
};

export default SocialBox;
