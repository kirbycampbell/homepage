import React from "react";
import "../CSS/Footer.css";
//import "../CSS/PhoneView.css";
var emoji = require("node-emoji");

const Footer = () => {
  return (
    <div className="footer">
      <div className="foot-text">
        Built w/ {emoji.get("heart")} - by Kirby Campbell
      </div>
      <div className="subscript">
        <i className="far fa-copyright copyrighter" /> 2019
      </div>
      <img
        src="https://i.imgur.com/0sj2H2J.jpg"
        alt="panoOfPortlandOr"
        className="footer-img"
      />
    </div>
  );
};

export default Footer;
