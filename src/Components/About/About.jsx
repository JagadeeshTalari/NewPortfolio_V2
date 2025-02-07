import React from "react";
import WorkHistory from "./WorkHistory";

const About = () => {
  return (
    <div className="about">
      <div className="sectionHeading">ABOUT</div>
      <p>
        Dedicated Full-Stack Developer with 3 years of experience in React.js,
        Material-UI, and Tailwind CSS, specializing in building intuitive and
        responsive user interfaces. Experienced in delivering large-scale
        projects for the pharma industry, including access management
        dashboards. Proficient in full-stack development, integrating RESTful
        APIs with Node.js and Python, and leveraging DevOps tools like Docker,
        Azure, and Git to deliver scalable and efficient solutions.
      </p>
      <WorkHistory />
    </div>
  );
};

export default About;
