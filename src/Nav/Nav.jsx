/** @format */

import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="fh5co-nav" role="navigation">
      <div className="container">
        <div className="fh5co-top-logo">
          <div id="fh5co-logo">
            <Link to="/">Hussein Khaleefah</Link>
          </div>
        </div>
        <div className="fh5co-top-menu menu-1 text-center">
          <ul>
            <li>
              <Link to="/work">Work</Link>{" "}
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li className="has-dropdown">
              <a href="/"> Dropdown</a>
              <ul className="dropdown">
                <li>
                  <Link to="/">Web Design</Link>
                </li>
                <li>
                  <Link to="/">Branding</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="fh5co-top-social menu-1 text-right">
          <ul className="fh5co-social">
            <li>
              <Link
                to="/pathhttps://www.instagram.com/hassou2n/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="icon-instagram"></i>
              </Link>
            </li>
            <li>
              <Link
                to="/pathhttps://www.linkedin.com/in/hassou2n/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="icon-linkedin"></i>
              </Link>
            </li>
            <li>
              <Link
                to="/pathhttps://github.com/hassou2n/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="icon-github"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
