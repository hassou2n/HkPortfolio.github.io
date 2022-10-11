import React from "react";
import "./Resume.css";

export const Resume = () => {
  return <div className="Resume">
    
    <div className="ResumeContainer">
      <h1 className="Tittle">Resume</h1>

      <p className="Button" >
      <a href="assets/Hussein Khaleefah CV.pdf" download>
        <button>Download CV</button></a></p>
      
      <div>
        <h1><span>•</span>Education</h1>
        <p><span>•</span> Udemy, Master JavaScript | Jun 2021 - Present</p>
        <p><span>•</span>HackYourFuture, Full Stack Development | Nov 2021 - Aug 2022</p>
        <p><span>•</span>Iraqi School of Sofia, BG, High School | Sep 2015 - Jun 2018</p>
      </div>

      <div>
        <h1><span>•</span>Experience</h1>
        <p><span>•</span> Freelance platforms exert Social media | Jan 2016 - Present</p>
        <p><span>•</span>Mobile Store, Computer & Phone Repairman | Feb 2016 - Nov 2017</p>
      </div>

      <div>
        <h1><span>•</span>Skills</h1>
        <p><span>•</span>HTML5</p>
        <p><span>•</span>Cascading Style Sheets (CSS)</p>
        <p><span>•</span>JavaScript</p>
        <p><span>•</span>MySQL</p>
        <p><span>•</span>Reactis</p>
        <p><span>•</span>Nodejs</p>
        <p><span>•</span>Knexis</p>
        <p><span>•</span>Expressjs</p>
        <p><span>•</span>Git</p>
      </div>

      <div>
        <h1><span>•</span>Other</h1>
        <p className="Other"><span>•</span>Languages</p>
        <ul>
            <li>Arabic</li>
            <li>Danish</li>
            <li>English</li></ul>
        <p className="Other"><span>•</span>Hobbies</p>
        <ul>
            <li>Billiards</li>
            <li>Coding</li>
          <li>Drawing</li>
          <li>Table tennis</li>
          <li>Volleyball</li></ul>
      </div>
    </div>
  </div>;
};
