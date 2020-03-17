import React from "react";
import "./Projects.css";
import data from "../data/projects.json";
import ProjectCard from "../components/ProjectCard";
import image17 from '../data/assets/image17.png';
import image13 from '../data/assets/image13.jpg';


export default function Projects() {
  const imageObj = {"image17": image17, "image13": image13}
  return (
    <div className="project-wrapper">
      {data.map(p => <ProjectCard 
        key={p.id}
        title={p.title}
        src={p.media.externalUrl ? p.media.externalUrl : imageObj[p.media.title]}
        github={p.link.github}
        app={p.link.deployed}
        />
      )}
    </div>
  );
}