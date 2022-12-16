/** @format */

import React from "react";
import "./AboutMe.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export const AboutMe = () => {
  return (
    <section id="aboutMe">
      <div className="AboutMe">
        <div className="social-media-icon-containerAboutMe">
          <div class="vl"></div>
          <div>
            <a
              href="https://www.facebook.com/hassou2n/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
          <div>
            <a
              href="https://www.instagram.com/hassou2n/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <div>
            <a
              href="https://twitter.com/hassou2n/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/hassou2n/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/hassou2n/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
        <div class="container text-center">
          <div class="row">
            <div class="col-lg-8 col-sm-8">
              <div class="circle-image">
                <img
                  src="assets/images/my-img.png"
                  width="50px"
                  height="50px"
                  alt="img"
                />
              </div>
            </div>
            <div class="col-lg-4 col-sm-8 text-start d-flex justify-content-center align-items-center">
              <div className="ITitle">
                <p className="Hello">Hello</p>
                <strong> I’m Hussein Khaleefah</strong>
                <p className="Hello">
                  Front-end Developer Based in Copenhagen.
                </p>
                <p class="css-typing ">
                  <span>I develop creative websites.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
