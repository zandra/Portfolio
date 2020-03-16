import React from "react";
import "./About.css";
import ImageContainer from "../components/ImageContainer";

export default function About() {
  return (
    <div className="container">
      <div className="row">
        <div className="col col-md-6 col-sm-12" id="left">
          <ImageContainer 
            src="../profile250.jpg"
            alt="Alex Stevens profile"
          />
        </div>
        <div className="col col-md-6 col-sm-12" id="right">

        </div>
      </div>
    </div>
  );
}
