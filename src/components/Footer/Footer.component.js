import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram ,faTwitter, faLinkedinIn, faGithub,} from "@fortawesome/free-brands-svg-icons";
export const Footer = () => {
  return (
      <div className="footer">
        <div className="footer-container">
          <div className="hk">© 2022 by Hussein Khaleefah. </div>
           <div className="social-media-icon-container">
             <div> <a href="https://www.facebook.com/hassou2n/" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faFacebook} /></a></div>
             <div> <a href="https://www.instagram.com/hassou2n/" target="_blank" rel="noopener noreferrer">  <FontAwesomeIcon icon={faInstagram} /></a></div>
             <div> <a href="https://twitter.com/hassou2n/" target="_blank" rel="noopener noreferrer">  <FontAwesomeIcon icon={faTwitter} /></a></div>
             <div> <a href="https://www.linkedin.com/in/hassou2n/" target="_blank" rel="noopener noreferrer">  <FontAwesomeIcon icon={faLinkedinIn} /></a></div>
             <div> <a href="https://github.com/hassou2n/" target="_blank" rel="noopener noreferrer">  <FontAwesomeIcon icon={faGithub} /></a></div>
           </div>
        </div>
      </div>
  );
};

