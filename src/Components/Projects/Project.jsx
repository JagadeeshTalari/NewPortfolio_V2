import React from "react";
import "./Projects.css";

import explore from "../../assets/explore.svg";
// import project1 from "../../assets/project1.png";
import project1 from "../../assets/BMS_Logo.png";
import { nanoid } from "nanoid";

const Project = ({projectDetails}) => {
  const {projectName, imgLink,projectLink, sourceCodeLink, desc, techUsed } = projectDetails
  return (
    <div>
      <div className="project article-box">
        <div className="projectHeading d-flex">
          <img className="projectImg" src={imgLink} alt="" />
          <div>
            <div className="projectName">{projectName}</div>
            <a
              href={projectLink}
              className="projectLink"
              target="_blank"
            >
              Project Link
            </a>
            <a
              href={sourceCodeLink}
              className="sourceCode"
              target="_blank"
            >
              <b>Source Code</b>
            </a>
          </div>
        </div>
        <p>
        {desc}
        </p>
        <div className="d-flex badgesSection">
          <div className="badge d-flex">
            <div className="dot activeColor"></div>
            Status: live
            </div>
            {techUsed.map(skill => {
              return (
                <div key={nanoid()} className="badge">{skill}</div>
              )
            })}
          
          
        </div>
        <img
          className="explore"
          style={{ height: "24px", opacity: "0.1" }}
          src={explore}
          alt="explore"
        />
      </div>
    </div>
  );
};

export default Project;
