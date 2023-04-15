/** @format */

import React from "react";
import { Link } from "react-router-dom";

export default function work() {
  return (
    <div id="fh5co-gallery">
      <div className="container">
        <div className="row top-line animate-box">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading fh5co-heading">
            <h2>Gallery</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 text-center animate-box">
            <Link className="work" to="id">
              <div className="work-grid">
                <div className="inner">
                  <div className="desc">
                    <h3>Folding Light</h3>
                    <span className="cat">Branding</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-4 text-center animate-box">
            <Link className="work" to="id">
              <div className="work-grid">
                <div className="inner">
                  <div className="desc">
                    <h3>Power Led Light</h3>
                    <span className="cat">Illustration</span>
                  </div>
                </div>
              </div>
         </Link>
          </div>
          <div className="col-md-4 text-center animate-box">
            <Link className="work" to="id">
              <div className="work-grid">
                <div className="inner">
                  <div className="desc">
                    <h3>Elephant Origami</h3>
                    <span className="cat">Logo</span>
                  </div>
                </div>
              </div>
         </Link>
          </div>
          <div className="col-md-4 text-center animate-box">
            <Link className="work" to="id">
              <div className="work-grid">
                <div className="inner">
                  <div className="desc">
                    <h3>Electric Kick Scooter</h3>
                    <span className="cat">Web Design</span>
                  </div>
                </div>
              </div>
         </Link>
          </div>
          <div className="col-md-4 text-center animate-box">
            <Link className="work" to="id">
              <div className="work-grid">
                <div className="inner">
                  <div className="desc">
                    <h3>Shark Diver</h3>
                    <span className="cat">Branding</span>
                  </div>
                </div>
              </div>
         </Link>
          </div>
          <div className="col-md-4 text-center animate-box">
            <Link className="work" to="id">
              <div className="work-grid">
                <div className="inner">
                  <div className="desc">
                    <h3>Objekte Unserer Tage Berlin</h3>
                    <span className="cat">Logo</span>
                  </div>
                </div>
              </div>
         </Link>
          </div>
          <div className="col-md-4 text-center animate-box">
            <Link className="work" to="id">
              <div className="work-grid">
                <div className="inner">
                  <div className="desc">
                    <h3>Aloha Shirt</h3>
                    <span className="cat">Web Design</span>
                  </div>
                </div>
              </div>
         </Link>
          </div>
          <div className="col-md-4 text-center animate-box">
            <Link className="work" to="id">
              <div className="work-grid">
                <div className="inner">
                  <div className="desc">
                    <h3>Olafur Elliasson Waterfall Versailles</h3>
                    <span className="cat">Branding</span>
                  </div>
                </div>
              </div>
         </Link>
          </div>
          <div className="col-md-4 text-center animate-box">
            <Link className="work" to="id">
              <div className="work-grid">
                <div className="inner">
                  <div className="desc">
                    <h3>Hand Care</h3>
                    <span className="cat">Logo</span>
                  </div>
                </div>
              </div>
         </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
