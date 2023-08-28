import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import Gmail from "../../img/gmail-logo.png";
import Instagram from "../../img/instagram.png";
import circle from "../../img/circle.png";
import girl from "../../img/girl.png";
import thumbup from "../../img/thumbup.png";
import Programming from "../../img/programming.png";
import galassesemoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";

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

      <div className="i-right">
        <img src={circle} alt="" />
        <img src={girl} alt="" />
        <div>
          <FloatingDiv image={Programming} txt1="Web" txt2="Developer" />
        </div>
      </div>
    </div>
  );
};
export default Intro;
