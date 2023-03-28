import React from "react";
import Heading from "./heading";
import "../style/contact.css";
import { SiLeetcode, SiGmail, SiCodechef } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { IoSend } from "react-icons/io5";

function Contact() {
  return (
    <>
      <div className="contact-container" id="contact">
        <Heading heading={"Contact me"} colorflag={true} />
        <div className="contact-cont-container">
          <div className="left-contact-container">
            <h1>Get in Touch</h1>
            <div className="contact-links">
              <a href="mailto:arjundagar28@gmail.com" target="_blank">
                <SiGmail />
              </a>
              <a href="https://www.instagram.com/dagar_arjun_/" target="_blank">
                <AiFillInstagram />
              </a>
              <a href="https://leetcode.com/arjundagar28/" target="_blank">
                <SiLeetcode />
              </a>
              <a href="https://www.codechef.com/users/arjun_dagar" target="_blank">
                <SiCodechef />
              </a>
            </div>
            <p>Send your email here!</p>
            <div className="img-cont">
              <img src={require("../static/sendemail.png")} alt="" />
            </div>
          </div>
          <div className="form-container">
            <form action="https://formsubmit.co/fcb3aa086efdd6fbf6b8a40701f20f42" method="POST">
              <label htmlFor="name">Your name</label>
              <input type="text" name="name" required />
              <label htmlFor="email">Your email</label>
              <input type="email" name="email" required />
              <label htmlFor="message">Message</label>
              <textarea name="message" cols="20" rows="4"></textarea>
              <button type="submit">Send<IoSend/></button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
