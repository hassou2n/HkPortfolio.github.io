import React from "react";
import "./Resume.css";

export const Resume = () => {
  return (
    <div className="Resume">
      <div className="ResumeContainer">
        <h1 className="Tittle">Resume</h1>

        <p className="ResumeButton">
          <a href="assets/Hussein Khaleefah CV.pdf" download>
            <button>Download CV</button>
          </a>
        </p>

        <div>
          <h1>
            <span>•</span>Education
          </h1>
          <p>
            <ul>
              <li> Udemy, Master JavaScript | Jun 2021 - Present</li>
              <li>
                HackYourFuture, Full Stack Development | Nov 2021 - Aug 2022
              </li>
              <li>
                Iraqi School of Sofia, BG, High School | Sep 2015 - Jun 2018
              </li>
            </ul>
          </p>
        </div>

        <div>
          <h1>
            <span>•</span>Experience
          </h1>
          <p>
            <ul>
              <li>
                Freelance platforms exert Social media | Jan 2016 - Present
              </li>
              <li>
                Mobile Store, Computer & Phone Repairman | Feb 2016 - Nov 2017
              </li>
            </ul>
          </p>
        </div>

        <div>
          <h1>
            <span>•</span>Skills
          </h1>
          <p>
            <ul>
              <li>HTML5</li>
              <li>Cascading Style Sheets (CSS)</li>
              <li>JavaScript</li>
              <li>MySQL</li>
              <li>Reactis</li>
              <li>Nodejs</li>
              <li>Knexis</li>
              <li>Expressjs</li>
              <li>Git</li>
            </ul>
          </p>
        </div>

        <div>
          <h1>
            <span>•</span>Other
          </h1>
          <p className="Other">
            <span>•</span>Languages
          </p>
          <p>
            <ul className="OtherUl">
              <li>Arabic</li>
              <li>Danish</li>
              <li>English</li>
            </ul>
          </p>
          <p className="Other">
            <span>•</span>Hobbies
          </p>
          <p>
            <ul className="OtherUl">
              <li>Billiards</li>
              <li>Coding</li>
              <li>Drawing</li>
              <li>Table tennis</li>
              <li>Volleyball</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};
