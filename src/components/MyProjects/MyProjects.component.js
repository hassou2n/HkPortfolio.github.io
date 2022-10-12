import React from "react";
import "./MyProjects.css";

export const MyProjects = () => {
  return (
    <div className="Projects">
      <div className="ProjectsContainer">
        <h1 className="Tittle">Projects</h1>

        <div className="ProjectsContainerDiv">
          <h1>
            <span>•</span>KAOSPILOT TOOLBOX
          </h1>

          <div className="DivContainer">
            <p>
            <ul><li>Graduation project, from HackYourFuture is an React app built in a teams, Task was splitted between students.</li></ul>
            </p>
            <p>
              <p>
                <img
                  src="assets/images/KaospilotToolbox.jpg"
                  width="800px"
                  height="450px"
                  alt="img"
                />
                <p className="ProjectsButton">
                  <a
                    href="https://staging-kp-toolbox-fp-class21.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>Demo</button>
                  </a>
                </p>
              </p>
            </p>
          </div>
        </div>

        <div>
          <h1>
            <span>•</span>COOKING POT
          </h1>

          <div className="DivContainer">
            <p>
            <ul>
              <li>Application for sharing meals: frontend part was
              created in React, made database using SQL, and backernd created
                using Nodejs and Knexjs.
                </li>
                </ul>
            </p>

            <p>
              <p>
                <img
                  src="assets/images/CookingPot.jpg"
                  width="800px"
                  height="450px"
                  alt="img"
                />
                <p className="ProjectsButton">
                  <a
                    href="https://staging-kp-toolbox-fp-class21.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>Demo</button>
                  </a>
                </p>
              </p>
            </p>
          </div>
        </div>

        <div>
          <h1>
            <span>•</span>CHAMELEON
          </h1>

          <div className="DivContainer">
            <p>
              <ul><li>One page application created in React.</li></ul>
            </p>

            <p>
              <p>
                <img
                  src="assets/images/ChameleonTodoListApp.jpg"
                  width="800px"
                  height="450px"
                  alt="img"
                />
                <p className="ProjectsButton">
                  <a
                    href="https://staging-kp-toolbox-fp-class21.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>Demo</button>
                  </a>
                </p>
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
