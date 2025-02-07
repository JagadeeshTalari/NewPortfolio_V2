import React from "react";
import "./TopSkills.css";
import GlobeSvg from "./GlobeSvg";

const TopSkills = () => {
  return (
    <section className="topSkills__section">
      <span>TopSkills</span>
      <div className="d-flex skillsArticle">
        <GlobeSvg skill="Javascript" />
        <GlobeSvg skill="Typescript" />
        <GlobeSvg skill="ReactJS" />
        <GlobeSvg skill="NextJS" />
      </div>
      <div className="d-flex skillsArticle">
        <GlobeSvg skill="NodeJS" />
        <GlobeSvg skill="ExpressJS" />
        <GlobeSvg skill="MongoDB" />
        <GlobeSvg skill="Redux" />
      </div>
      <div className="d-flex skillsArticle">
        <GlobeSvg skill="HTML" />
        <GlobeSvg skill="CSS" />
        <GlobeSvg skill="SQL" />
        <GlobeSvg skill="GIT" />
      </div>
      <div className="d-flex skillsArticle">
        <GlobeSvg skill="Python" />
      </div>
    </section>
  );
};

export default TopSkills;
