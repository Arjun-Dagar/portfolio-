import React from "react";
import Typical from "react-typical";
import "../style/firstpage.css";

function FirstPage() {
  return (
    <>
      <div className="outer-first-container" id="home">
        <div className="first-container">
          <div className="cont-container">
            <div className="name-container">
              <p>
                <span>H</span>
                <span>i</span>
                <span>,</span>
              </p>
              <p>
                <span>I</span>
                <span>`</span>
                <span>m</span>
                <span>&nbsp;</span>

                <p className="arjun">
                  <span><i/>A</span>
                  <span><i/>R</span>
                  <span><i/>J</span>
                  <span><i/>U</span>
                  <span><i/>N</span>
                </p>
              </p>
            </div>
            <Typical
              steps={["Flutter App Developer", 5000, "Loves DSA", 3000, "Web Developer", 3000]}
              loop={Infinity}
            />
            <div className="button-container">
              <a href="#contact" className="contact-button">
                <div>
                  <span className="bg"></span>
                  <span className="base"></span>
                  <span className="text">Contact me!</span>
                </div>
              </a>
              
              <a
                href={require("../static/resume.pdf")} target = "_blank"
                className="contact-button"
              >
                <div>
                  <span className="bg"></span>
                  <span className="base"></span>
                  <span className="text">My Resume</span>
                </div>
              </a>
            </div>
          </div>
          <div className="img-container">
            <div className="profile-pic">
              <img src={require("../static/profile-pic.jfif")} alt="" />
            </div>
          </div>

          
        </div>
        <div className="footer-image">
          <img src={require("../static/bgfooter.png")} alt="" />
        </div>
      </div>
    </>
  );
}

export default FirstPage;
