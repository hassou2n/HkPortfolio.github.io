/** @format */

import React from "react";

export default function Nav() {
  return (
    <nav className="fh5co-nav" role="navigation">
      <div className="container">
        <div className="fh5co-top-logo">
          <div id="fh5co-logo">
            <a href="/">Hussein Khaleefah</a>
          </div>
        </div>
        <div className="fh5co-top-menu menu-1 text-center">
          <ul>
            <li>
              <a href="/work">Work</a>{" "}
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li className="has-dropdown">
              <a href="#/">Dropdown</a>
              <ul className="dropdown">
                <li>
                  <a href="#/">Web Design</a>
                </li>
                <li>
                  <a href="#/">Branding</a>
                </li>
                <li>
                  <a href="/gallery">Gallery</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="fh5co-top-social menu-1 text-right">
          <ul className="fh5co-social">
            <li>
              <a
                href="https://www.instagram.com/hassou2n/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="icon-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/hassou2n/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="icon-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/hassou2n/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="icon-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
