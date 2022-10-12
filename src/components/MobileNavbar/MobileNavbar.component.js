import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./MobileNavbar.css";

export const MobileNavbar = (props) => {
  const isOpenClass = props.open ? "mobile-nav-bar open" : "mobile-nav-bar";
  return (
    <nav className={isOpenClass}>
      <Link
        to="/"
        onClick={() => {
          props.handleMobile(false);
        }}
      >
        ABOUT ME
      </Link>
      <Link
        to="/resume"
        onClick={() => {
          props.handleMobile(false);
        }}
      >
        RESUME
      </Link>
      <Link
        to="/projects"
        onClick={() => {
          props.handleMobile(false);
        }}
      >
        PROJECTS
      </Link>
      <Link
        to="/contact"
        onClick={() => {
          props.handleMobile(false);
        }}
      >
        CONTACT
      </Link>
    </nav>
  );
};
MobileNavbar.propTypes = {
  open: PropTypes.bool.isRequired,
  handleMobile: PropTypes.func.isRequired,
};
