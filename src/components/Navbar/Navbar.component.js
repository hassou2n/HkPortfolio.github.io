import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MobileNavbar } from "../MobileNavbar/MobileNavbar.component";
import "./Navbar.css";

export const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <header className="header-container">
            <div className="nav-bar">
      <div className="nav-bar-container">
        <div className="logo">
          <Link to="/">
            <span>Hussein Khaleefah</span>
          </Link>
        </div>
        <nav className="navbar-links-container">
          <Link className="navbar-link" to="/">
            ABOUT ME
          </Link>
          <Link className="navbar-link" to="/resume">
            RESUME
          </Link>
          <Link className="navbar-link" to="/projects">
            PROJECTS
          </Link>
          <Link className="navbar-link" to="/contact">
            CONTACT
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
        </nav>
        <MobileNavbar
          open={isMobileNavOpen}
          handleMobile={setIsMobileNavOpen}
        />
        </div>
        </div>
    </header>
  );
};
