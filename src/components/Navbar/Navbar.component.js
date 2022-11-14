/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MobileNavbar } from "../MobileNavbar/MobileNavbar.component";
import "./Navbar.css";

export const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  return (
    <nav class="navbar sticky-top navbar-expand-lg">
      <div class="container">
        <Link class="navbar-brand" to="/">
          {/* <img src="assets/images/HkLogo.jpg" alt="HkLogo" width="60px" /> */}
          Hk
        </Link>
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
              <Link class="nav-link " to="/">
                <span className="dot">•</span>About Me
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/resume">
                <span className="dot">•</span>Resume
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/projects">
                <span className="dot">•</span>Projects
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/contact">
                <span className="dot">•</span>Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
