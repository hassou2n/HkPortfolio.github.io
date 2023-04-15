/** @format */

import React from "react";

export default function Footer() {
  return (
    <footer id="fh5co-footer" role="contentinfo">
      <div className="container">
        <div className="row copyright">
          <div className="col-md-12 text-center">
            <p>
              <small className="block">&copy; 2023. All Rights Reserved.</small>
              <small className="block">
                Designed by{" "}
                <a href="/" target="_blank" rel="noopener noreferrer">
                  Hussein Khaleefah
                </a>
              </small>
            </p>
            <ul className="fh5co-social-icons">
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
      </div>
    </footer>
  );
}
