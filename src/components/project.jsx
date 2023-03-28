import React from "react";
import Heading from "./heading";
import "../style/project.css";

function Project() {
  return (
    <>
      <div className="project-container" id="projects">
        <Heading heading={"My Project"} colorflag={true} />
        <div className="project-cont">
          <div className="project" id="project-1">
            <div className="view-project">
              <a href="https://github.com/Arjun-Dagar/To-Do-Web-App" target="_blank">View Project</a><span>or</span><a href="https://arjun-dagar.github.io/To-Do-Web-App/" target="_blank">Live Demo</a>
            </div>
          </div>
          <div className="project" id="project-2">
            <div className="view-project">
              <a href="https://github.com/Arjun-Dagar/dailynews" target="_blank">View Project</a><span>or</span><a href="#" target="_blank">Live Demo</a>
            </div>
          </div>
          <div className="project" id="project-3">
            <div className="view-project">
              <a href="https://github.com/Arjun-Dagar/text-utils" target="_blank">View Project</a><span>or</span><a href="https://text--util.herokuapp.com/" target="_blank">Live Demo</a>
            </div>
          </div>
          <div className="project" id="project-4">
            <div className="view-project">
              <a href="https://github.com/Arjun-Dagar/AiFitness" target="_blank">View Project</a><span>or</span><a href="#" target="_blank">Live Demo</a>
            </div>
          </div>
          <div className="project" id="project-5">
            <div className="view-project">
              <a href="https://github.com/Invest-Mate" target="_blank">View Project</a><span>or</span><a href="#" target="_blank">Live Demo</a>
            </div>
          </div>
          <div className="project" id="project-6">
            <div className="view-project">
              <a href="https://github.com/Arjun-Dagar/Dice-Game" target="_blank">View Project</a><span>or</span><a href="https://arjun-dagar.github.io/Dice-Game/" target="_blank">Live Demo</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
