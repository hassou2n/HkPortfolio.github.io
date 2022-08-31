import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MobileNavbar } from "../MobileNavbar/MobileNavbar.component";
import "./Navbar.css";

export const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <header className="nav-bar">
      <div className="nav-bar-container">
        <div className="logo">
          <Link to="/about-me">
            <span>Hussein Khaleefah</span>
          </Link>
        </div>
        <nav className="navbar-links-container">
          <Link className="navbar-link" to="/about-me">
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
            {isMobileNavOpen ? <span>&times;</span> : <span>&#x2630;</span>}
          </button>
        </nav>
        <MobileNavbar
          open={isMobileNavOpen}
          handleMobile={setIsMobileNavOpen}
        />
      </div>
    </header>
  );
};
