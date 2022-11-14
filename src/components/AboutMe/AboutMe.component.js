/** @format */

import React from "react";
import "./AboutMe.css";

export const AboutMe = () => {
  return (
    <div className="AboutMe">
      <div className="AboutMeContainer">
        <div className="AboutMeDivContainer">
          <div class="circle-image">
            <img src="assets/images/my-img.png" width="50px" height="50px" />
          </div>

          <div className="ITitle">
            <p className="Hello">Hello</p>
            <strong> I’m Hussein Khaleefah</strong>
            <p className="Hello">Front-end Developer Based in Copenhagen.</p>
            <p class="css-typing ">
              <span>I develop creative websites.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
