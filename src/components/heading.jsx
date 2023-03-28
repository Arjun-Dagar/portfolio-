import React from "react";
import "../style/heading.css"

function Heading(props) {
  return (
    <div className="heading-container">
      <h1 className={props.colorflag ? "white-color" : ""}>{props.heading}</h1>
      <div className={props.colorflag ? "seperator white-bg" : "seperator"}>
        <div className="middle"></div>
      </div>
    </div>
  );
}

export default Heading;
