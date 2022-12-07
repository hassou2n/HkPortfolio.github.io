/** @format */

import React from "react";
import "./Resume.css";

export const Resume = () => {
  return (
    <section id="resume">
      <div className="Resume">
        <div className="ResumeContainer">
          <h1 className="Tittle">Resume</h1>

          <p className="ResumeButton container">
            <a href="assets/Hussein Khaleefah CV.pdf" download>
              <button>Download CV</button>
            </a>
          </p>

          <div className="experienceEducation text-center">
            <div className="experienceEducationContainer col-md-auto">
              Experience
            </div>
            <div class="container text-start">
              <div class="row">
                <div class="col-sm-4">
                  <div className="years">2022 - Present </div>
                  <p className="experienceEducationTittle">Pizza Maker</p>
                  <p className="experienceEducationD"></p>
                </div>
                <div class="col-sm-4">
                  <div className="years">2016 - 2017</div>
                  <p className="experienceEducationTittle">
                    Computer & Phone Repairman
                  </p>
                  <p className="experienceEducationD">
                    Repairing all types of computers and software, iPhone and
                    iPad.
                  </p>
                </div>
                <div class="col-sm-4 ">
                  <div className="years">2015 - Present </div>
                  <p className="experienceEducationTittle">Artist</p>
                  <p className="experienceEducationD">
                    I draw portraits of people's faces.
                    <br />
                    One of my projects, I painted 6 large paintings for an
                    asylum center in Denmark for a bilspanard hall.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="experienceEducation text-center">
            <div className="experienceEducationContainer col-md-auto">
              Education
            </div>
            <div class="container text-start">
              <div class="row">
                <div class="col-sm-4">
                  <div className="years">2021 - Present</div>
                  <p className="experienceEducationTittle">Master JavaScript</p>
                  <p className="experienceEducationD">
                    Udemy, A 69-hour syllabus of JavaScript from Zero to Expert.
                    <br />
                    What I’ve Learned
                    <br />
                    -JavaScript fundamentals: variables, if/else, operators,
                    boolean logic, functions, arrays, objects, loops, strings,
                    etc.
                    <br />
                    - Modern OOP: Classes, constructors, prototypal inheritance,
                    encapsulation, etc.
                    <br />
                    - Asynchronous JavaScript: Event loop, promises,
                    async/await, AJAX calls and APIs.
                    <br />
                    - How to think and work spanke a developer: problem-solving,
                    researching, workflows.
                    <br />
                    - Complex concepts spanke the 'this' keyword, higher-order
                    functions, closures, etc.
                    <br />- Practice your skills with 50+ challenges and
                    assignments (solutions included).
                  </p>
                </div>
                <div class="col-sm-4">
                  <div className="years">2021 - 2022</div>
                  <p className="experienceEducationTittle">
                    Full Stack Development
                  </p>
                  <p className="experienceEducationD">
                    HackYourFuture, A 28-week course designed to cover all
                    aspects of full stack web developer including HTML, CSS,
                    JavaScript, NodeJS, ExpressJS, MySQL and ReactJS.
                  </p>
                </div>
                <div class="col-sm-4">
                  <div className="years">2015 - 2018 </div>
                  <p className="experienceEducationTittle">High School</p>
                  <p className="experienceEducationD">
                    Iraqi School of Sofia, BG
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="skillsLanguages text-start">
            <div class="row">
              <div class="col">
                <div className="skillsLanguagesTittle">Skills</div>
                <ul>
                  <p>
                    HTML5
                    <span>
                      <span className="Html5"></span>
                    </span>
                  </p>

                  <p>
                    CSS
                    <span>
                      <span className="Css3"></span>
                    </span>
                  </p>
                  <p>
                    JavaScript
                    <span>
                      <span className="JavaScript"></span>
                    </span>
                  </p>
                  <p>
                    MySQL
                    <span>
                      <span className="MySQL"></span>
                    </span>
                  </p>
                  <p>
                    Reactjs
                    <span>
                      <span className="Reactjs"></span>
                    </span>
                  </p>
                  <p>
                    Nodejs
                    <span>
                      <span className="Nodejs"></span>
                    </span>
                  </p>
                  <p>
                    Knexjs
                    <span>
                      <span className="Knexjs"></span>
                    </span>
                  </p>
                  <p>
                    Expressjs
                    <span>
                      <span className="Expressjs"></span>
                    </span>
                  </p>
                  <p>
                    Git
                    <span>
                      <span className="Git"></span>
                    </span>
                  </p>
                </ul>
              </div>
              <div class="col">
                <div className="skillsLanguagesTittle">Languages</div>
                <ul>
                  <p>
                    Arabic
                    <span>
                      <span className="Arabic"></span>
                    </span>
                  </p>
                  <p>
                    Danish
                    <span>
                      <span className="Danish"></span>
                    </span>
                  </p>
                  <p>
                    English
                    <span>
                      <span className="English"></span>
                    </span>
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
