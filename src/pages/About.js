import React from "react";
import "./About.css";
import ImageContainer from "../components/ImageContainer";
import profile from "../profile250.jpg";

export default function About() {
  return (
    <div className="container">
      <div className="row">
        <div className="col col-md-6 col-sm-12" id="left">
          <ImageContainer 
            src={profile}
            alt="Alex Stevens profile"
          />
        </div>
        <div className="col col-md-6 col-sm-12" id="right">

        </div>
      </div>
    </div>
  );
}
