/** @format */

import React from "react";
import PropTypes from "prop-types";
import "./MobileNavbar.css";

export const MobileNavbar = (props) => {
  const isOpenClass = props.open ? "mobile-nav-bar open" : "mobile-nav-bar";
  return (
    <nav className={isOpenClass}>
      <a
        href="#aboutMe"
        onClick={() => {
          props.handleMobile(false);
        }}
      >
        About Me
      </a>
      <a
        href="#resume"
        onClick={() => {
          props.handleMobile(false);
        }}
      >
        Resume
      </a>
      <a
        href="#projects"
        onClick={() => {
          props.handleMobile(false);
        }}
      >
        Projects
      </a>
      <a
        href="#contact"
        onClick={() => {
          props.handleMobile(false);
        }}
      >
        Contact
      </a>
    </nav>
  );
};
MobileNavbar.propTypes = {
  open: PropTypes.bool.isRequired,
  handleMobile: PropTypes.func.isRequired,
};
