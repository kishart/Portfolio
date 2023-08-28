import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import Gmail from "../../img/gmail-logo.png";
import Instagram from "../../img/instagram.png";
const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hi! I am</span>
          <span>Heart Blanco</span>
          <span>
            A student who is still studying front-end development and hopes to
            be a web developer in the future.
          </span>
        </div>
        <button className="button i-button">Hire Me</button>
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={Gmail} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      <div className="i-right">i am right side</div>
    </div>
  );
};
export default Intro;
