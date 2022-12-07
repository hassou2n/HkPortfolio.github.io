/** @format */

import React from "react";
import "./MyProjects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/fontawesome-free-solid";

export const MyProjects = () => {
  return (
    <section id="projects">
      <div className="Projects">
        <div class="container text-center">
          <h1 className="Tittle">Projects</h1>

          <div className="row">
            <div className="col">
              <img
                src="assets/images/KaospilotToolbox.jpg"
                width="800px"
                height="450px"
                alt="img"
              />
              <p className="ProjectsTittle">KAOSPILOT TOOLBOX</p>
              <p>
                Graduation project, from HackYourFuture is an React app built in
                a teams, Task was splitted between students.
              </p>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="ArrowRight" icon={faArrowRight} />
              </a>
            </div>

            <div className="col">
              <img
                src="assets/images/CookingPot.jpg"
                width="800px"
                height="450px"
                alt="img"
              />
              <p className="ProjectsTittle">COOKING POT</p>
              <p>
                Application for sharing meals: frontend part was created in
                React, made database using SQL, and backernd created using
                Nodejs and Knexjs.
              </p>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="ArrowRight" icon={faArrowRight} />
              </a>
            </div>
            <div className="col">
              <img
                src="assets/images/Chameleon.jpg"
                width="800px"
                height="450px"
                alt="img"
              />
              <p className="ProjectsTittle">CHAMELEON</p>
              <p>One page application created in React.</p>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="ArrowRight" icon={faArrowRight} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
