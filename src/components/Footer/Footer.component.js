import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookSquare, faInstagramSquare ,faTwitterSquare, faLinkedin, faGithubSquare,} from "@fortawesome/free-brands-svg-icons";
export const Footer = () => {
  return (
      <div className="footer">
        <div className="footer-container">
          <div className="hk">☺ 2022 by Hussein Khaleefah. </div>
          
           <div className="social-media-icon-container">
             <div> <a href="https://www.facebook.com/hassou2n/" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faFacebookSquare} /></a></div>
             <div> <a href="https://www.instagram.com/hassou2n/" target="_blank" rel="noopener noreferrer">  <FontAwesomeIcon icon={faInstagramSquare} /></a></div>
             <div> <a href="https://twitter.com/hassou2n/" target="_blank" rel="noopener noreferrer">  <FontAwesomeIcon icon={faTwitterSquare} /></a></div>
             <div> <a href="https://www.linkedin.com/in/hassou2n/" target="_blank" rel="noopener noreferrer">  <FontAwesomeIcon icon={faLinkedin} /></a></div>
             <div> <a href="https://github.com/hassou2n/" target="_blank" rel="noopener noreferrer">  <FontAwesomeIcon icon={faGithubSquare} /></a></div>
           </div>
        </div>
      </div>
  );
};

