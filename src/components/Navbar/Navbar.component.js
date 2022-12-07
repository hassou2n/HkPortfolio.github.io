/** @format */

import React, { useState } from "react";
import { MobileNavbar } from "../MobileNavbar/MobileNavbar.component";
import "./Navbar.css";

export const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  return (
    <nav class="navbar sticky-top navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand" href="aboutMe">
          {/* <img src="assets/images/HkLogo.jpg" alt="HkLogo" width="60px" /> */}
        </a>
        <button
          type="button"
          className={`mobile-open-button ${isMobileNavOpen ? "open" : ""}`}
          onClick={() => {
            setIsMobileNavOpen(!isMobileNavOpen);
          }}
        >
          {isMobileNavOpen ? (
            <div className="_2_1Hw _1XNn4">
              <div className="_2x2ES _3SfeL _2Gsgc"></div>
              <div className="_2x2ES _2vsXM"></div>
              <div className="_2x2ES _3SfeL _24e0Q"></div>
            </div>
          ) : (
            <div className="_2_1Hw">
              <div className="_2x2ES _3SfeL _2Gsgc"></div>
              <div className="_2x2ES _2vsXM"></div>
              <div className="_2x2ES _3SfeL _24e0Q"></div>
            </div>
          )}
        </button>
        <MobileNavbar
          open={isMobileNavOpen}
          handleMobile={setIsMobileNavOpen}
        />
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto text-uppercase ">
            <li class="nav-item">
              <a class="nav-link " href="aboutMe">
                <span className="dot">•</span>About Me
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projects">
                <span className="dot">•</span>Projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#resume">
                <span className="dot">•</span>Resume
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">
                <span className="dot">•</span>Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
