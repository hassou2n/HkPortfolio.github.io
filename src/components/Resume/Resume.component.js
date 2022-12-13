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
            <div class="row container">
              <div class="col-lg-4 col-sm-6">
                <div className="skillsLanguagesTittle">Skills</div>
                <ul>
                  <p className="pSkills">
                    <span class="SkillsPeriod">HTML5</span>
                    <span class="Html5"></span>
                  </p>
                  <p className="pSkills">
                    <span class="SkillsPeriod">CSS</span>
                    <span class="Css3"></span>
                  </p>
                  <p className="pSkills">
                    <span class="SkillsPeriod">JavaScript</span>
                    <span class="JavaScript"></span>
                  </p>
                  <p className="pSkills">
                    <span class="SkillsPeriod">MySQL</span>
                    <span class="MySQL"></span>
                  </p>
                  <p className="pSkills">
                    <span class="SkillsPeriod">Reactjs</span>
                    <span class="Reactjs"></span>
                  </p>
                  <p className="pSkills">
                    <span class="SkillsPeriod">Nodejs</span>
                    <span class="Nodejs"></span>
                  </p>
                  <p className="pSkills">
                    <span class="SkillsPeriod">Knexjs</span>
                    <span class="Knexjs"></span>
                  </p>
                  <p className="pSkills">
                    <span class="SkillsPeriod">Expressjs</span>
                    <span class="Expressjs"></span>
                  </p>
                  <p className="pSkills">
                    <span class="SkillsPeriod">Git</span>
                    <span class="Git"></span>
                  </p>
                </ul>
              </div>
              <div class="col-lg-4 col-sm-6">
                <div className="skillsLanguagesTittle">Languages</div>
                <ul>
                  <p className="pSkills">
                    <span class="SkillsPeriod">Arabic</span>
                    <span className="Arabic"></span>
                  </p>
                  <p className="pSkills">
                    <span class="SkillsPeriod">Danish</span>
                    <span className="Danish"></span>
                  </p>
                  <p className="pSkills">
                    <span class="SkillsPeriod">English</span>
                    <span className="English"></span>
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
