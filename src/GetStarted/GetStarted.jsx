/** @format */

import React from "react";
import { Link } from "react-router-dom";

export default function GetStarted() {
  return (
    <div id="fh5co-started">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2>Get Started</h2>
            <p>
              We create beautiful themes for your site behind the word
              mountains, far from the countries Vokalia and Consonantia, there
              live the blind texts.
            </p>
            <p>
              <Link to="/contact" className="btn btn-primary">
                Let's work together
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
