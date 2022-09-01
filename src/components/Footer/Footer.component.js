import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTwitterSquare, faFacebookSquare, faLinkedin, faGithubSquare} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
      <div className="footer">
        <div className="footer-container">
          <div className="hk">© 2022 by Hussein Khaleefah. </div>
          
           <div className="social-media-icon-container">
             <div> <a className="social-media-logo" href="https://www.linkedin.com/in/hassou2n/"> <FontAwesomeIcon icon={faFacebookSquare} /></a></div>
             <div> <a  className="social-media-logo" href="https://www.linkedin.com/in/hassou2n/">  <FontAwesomeIcon icon={faTwitterSquare} /></a></div>
             <div> <a  className="social-media-logo" href="https://www.linkedin.com/in/hassou2n/">  <FontAwesomeIcon icon={faLinkedin} /></a></div>
             <div> <a  className="social-media-logo" href="https://www.linkedin.com/in/hassou2n/">  <FontAwesomeIcon icon={faGithubSquare} /></a></div>
           </div>
        </div>
      </div>
  );
};
