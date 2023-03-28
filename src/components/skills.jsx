import React, { useEffect } from "react";
import "../style/skill.css";
import Heading from "./heading";

function Skills() {
  useEffect(() => {
    eval(`
    try {
      TagCanvas.Start("myCanvas", "tags", {
        
        textColour: "#24263b",
        outlineColour: "transparent",
        textHeight: 17,
        initial: [0.08, 0.08],
        maxSpeed: 0.18,
        minSpeed: 0.015,
        wheelZoom: false
        /* more options */
      });
    } catch (e) {
      // something went wrong, hide the canvas container
      document.getElementById("myCanvasContainer").style.display = "none";
    }`);
  }, []);

  return (
    <>
      <div className="skill-container" id="skills">
        <Heading heading={"My Skills"} colorflag={false} />
        <div className="skillchart-container">
          <div className="cont-skill-container">
            <div className="content">
              <p>
                I am <strong>Flutter</strong> app developer with a strong understanding of data
                structure and algorithms in <strong>C/C++</strong>, and knowledge of <strong>ReactJS</strong> in
                web development, possesses a diverse set of skills that makes me
                well-equipped to handle a wide range of software development
                projects. <br />
                My proficiency in <strong>NodeJs</strong> for backend development and experience
                with <strong>MongoDB</strong> databases further highlights my expertise in
                full-stack development.
                <br />
                Additionally, my ability to work with a variety of development
                tools and technologies and my commitment to continuous learning
                and improvement further adds to my value as a skilled software
                developer.
              </p>
            </div>
            <div className="footer-image">
              <img src={require("../static/bgfooter.png")} alt="" />
            </div>
          </div>
          <div id="myCanvasContainer">
            <canvas width="300" height="300" id="myCanvas">
              <div id="tags">
                <ul>
                  <li>
                    <a href="#" target="_blank">
                      C/C++
                    </a>
                  </li>
                  <li>
                    <a href="/">Data Structure</a>
                  </li>
                  <li>
                    <a href="/">Algorithms</a>
                  </li>
                  <li>
                    <a href="/chips">React Js</a>
                  </li>
                  <li>
                    <a href="/salt">HTML</a>
                  </li>
                  <li>
                    <a href="/vinegar">CSS</a>
                  </li>
                  <li>
                    <a href="/vinegar">Javascript</a>
                  </li>
                  <li>
                    <a href="/vinegar">Node Js</a>
                  </li>
                  <li>
                    <a href="/vinegar">Express</a>
                  </li>
                  <li>
                    <a href="/vinegar">Mongo DB</a>
                  </li>
                  <li>
                    <a href="/vinegar">Dart</a>
                  </li>
                  <li>
                    <a href="/vinegar">Flutter</a>
                  </li>
                  <li>
                    <a href="/vinegar">Dart</a>
                  </li>
                  <li>
                    <a href="/vinegar">Riverpod</a>
                  </li>
                </ul>
              </div>
            </canvas>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
