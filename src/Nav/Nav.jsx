/** @format */

import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="fh5co-nav" role="navigation">
      <div className="container">
        <div className="fh5co-top-logo">
          <div id="fh5co-logo">
            <NavLink to="/">Hussein Khaleefah</NavLink>
          </div>
        </div>
        <div className="fh5co-top-menu menu-1 text-center">
          <ul>
            <li>
              <NavLink to="/work">Work</NavLink>{" "}
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="has-dropdown">
              <a href="/"> Dropdown</a>
              <ul className="dropdown">
                <li>
                  <NavLink to="/">Web Design</NavLink>
                </li>
                <li>
                  <NavLink to="/">Branding</NavLink>
                </li>
                <li>
                  <NavLink to="/gallery">Gallery</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="fh5co-top-social menu-1 text-right">
          <ul className="fh5co-social">
            <li>
              <NavLink
                to="/pathhttps://www.instagram.com/hassou2n/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="icon-instagram"></i>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pathhttps://www.NavLinkedin.com/in/hassou2n/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="icon-NavLinkedin"></i>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pathhttps://github.com/hassou2n/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="icon-github"></i>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
