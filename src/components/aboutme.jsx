import React, { useState } from "react";
import Heading from "./heading";
import "../style/about.css";
import { IoSchoolSharp } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";
import { MdWork, MdSportsVolleyball } from "react-icons/md";
import { GiBulletBill } from "react-icons/gi";
import { GoPrimitiveDot } from "react-icons/go";

function Aboutme() {
  const [state, setState] = useState("about");

  function handleState(e) {
    console.log(e);
  }

  return (
    <>
      <div className="about-container" id="about">
        <Heading heading={"About me"} colorflag={false} />
        <div className="about-cont-container">
          <div className="outer-cont">
            <div className="left-cont">
              <div className="left-strap"></div>

              <div
                className={state == "about" ? "title active" : "title"}
                style={{ marginTop: "20px" }}
                onClick={() => {
                  setState("about");
                }}
              >
                <span className="icon">
                  <BsFillPersonFill color="white" />
                </span>
                <span>About me</span>
              </div>
              <div
                className={state == "education" ? "title active" : "title"}
                onClick={() => {
                  setState("education");
                }}
              >
                <span className="icon">
                  <IoSchoolSharp color="white" />
                </span>
                <span>Education</span>
              </div>
              <div
                className={state == "experience" ? "title active" : "title"}
                onClick={() => {
                  setState("experience");
                }}
              >
                <span className="icon">
                  <MdWork color="white" />
                </span>
                <span>Work Experience</span>
              </div>
              <div
                className={state == "interest" ? "title active" : "title"}
                onClick={() => {
                  setState("interest");
                }}
              >
                <span className="icon">
                  <MdSportsVolleyball color="white" />
                </span>
                <span>Interests</span>
              </div>
            </div>
            <div className="right-cont">
              <div
                className="education"
                style={{ opacity: state == "education" ? "1" : "0" }}
              >
                <div className="education-point" style={{ marginTop: "30px" }}>
                  <div className="datetag">2020-2024</div>
                  <div className="collegename">
                    <span>
                      <GiBulletBill />
                    </span>
                    IIIT Sonepat
                  </div>
                  <div className="edu-desc">
                    <span>B.Tech</span> <span>10 Cgpa</span>
                  </div>
                </div>
                <div className="education-point">
                  <div className="datetag">2020-2024</div>
                  <div className="collegename">
                    <span>
                      <GiBulletBill />
                    </span>
                    Salwan Public School, Tronica City
                  </div>
                  <div className="edu-desc">
                    <span>12th</span> <span>96.6%</span>
                  </div>
                </div>
                <div className="education-point">
                  <div className="datetag">2020-2024</div>
                  <div className="collegename">
                    <span>
                      <GiBulletBill />
                    </span>
                    Salwan Public School, Tronica City
                  </div>
                  <div className="edu-desc">
                    <span>10th</span> <span>10 Cgpa</span>
                  </div>
                </div>
              </div>
              <div
                className="experience"
                style={{ opacity: state == "experience" ? "1" : "0" }}
              >
                <div className="education-point">
                  <div className="datetag">10/21 - 11/21</div>
                  <div className="letterlink"><a
                href={require("../static/ConnectsysLetter.pdf")} target = "_blank"
              >Experience Letter</a></div>
                  <div className="collegename">
                    <span>
                      <GiBulletBill />
                    </span>
                    Web Developer Intern, ConnectSys LLP
                  </div>
                  <div className="edu-desc exp-desc">
                    <p style={{ marginTop: "5px" }}>
                      <GoPrimitiveDot />
                      Created a dynamic pages for the company website under LOGIBEE project.
                    </p>
                    <p>
                      <GoPrimitiveDot />
                      Skills Used: HTML, CSS, SASS, Javascript, Bootstrap.
                    </p>
                  </div>
                </div>
                <div className="education-point">
                  <div className="datetag">6/22 - 8/22</div>
                  <div className="letterlink"><a
                href={require("../static/PowerpBoxInternshipExperienceLetter.pdf")} target = "_blank"
              >Experience Letter</a></div>
                  <div className="collegename">
                    <span>
                      <GiBulletBill />
                    </span>
                    Software Developer Intern, Powerpbox
                  </div>
                  <div className="edu-desc exp-desc">
                    <p style={{ marginTop: "5px" }}>
                      <GoPrimitiveDot />
                      Created a dynamic "About Us" page for the company website.
                    </p>
                    <p>
                      <GoPrimitiveDot />
                      Skills Used: ReactJs, Odoo, SASS, Javascript, Bootstrap.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="about"
                style={{ opacity: state == "about" ? "1" : "0" }}
              >
                <div>
                  {/* <img src={require("../static/profile-pic.jpg")} alt="" /> */}
                  <h1>Arjun Chaudhary</h1>
                </div>
                <p>
                  I am happy to introduce myself as a third-year student
                  pursuing B.Tech in Computer Science from IIIT Sonepat. I have
                  a strong foundation in data structures and algorithms, and I
                  am always eager to learn and implement new technologies.
                  <br /> My expertise lies in Flutter app development, and I
                  have also gained knowledge in web development using ReactJS. I
                  enjoy problem-solving and have participated in various coding
                  competitions to hone my skills. I am a self-motivated
                  individual who is passionate about coding and always ready to
                  take on new challenges.
                </p>
              </div>
              <div
                className="interest"
                style={{ opacity: state == "interest" ? "1" : "0" }}
              >
                <div>
                  <img src={require("../static/interest.jpg")} alt="" />
                </div>
                <span>
                  <GoPrimitiveDot />
                  Workout
                </span>
                <span>
                  <GoPrimitiveDot />
                  Travel
                </span>
                <span>
                  <GoPrimitiveDot />
                  Coding
                </span>
                <span>
                  <GoPrimitiveDot />
                  Volleyball
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutme;
