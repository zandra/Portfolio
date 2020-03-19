import React from "react";
import "./ProjectCard.css";

export default function EmployeeCard(props) {

  return (
  <div className="card">
      <img src={props.src} className="card-img-top img-fluid" alt={props.title}/>
    <div className="card-body">
      <h5 className="card-title text-center">{props.title}</h5>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">
      <a href={props.github} className="card-link"><i className="fa fa-github"></i></a>
        Github Link
      </li>
      <li className="list-group-item">
      <a href={props.app} className="card-link"><i className="fa fa-flag"></i></a>
        Application Link
      </li>
    </ul>
  </div>
  );
}