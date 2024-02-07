import React from 'react'
import "./Projects.css"

import explore from "../../assets/explore.svg"
import project1 from "../../assets/project1.png"


const Project = () => {
  return (
    <div>
        <div className="project article-box">
            <div className="projectHeading d-flex">
                <img className='projectImg' src={project1} alt="" />
                <div>
                    <div className="projectName">Book My Show</div>
                    <a href="" className="projectLink">Project Link</a>
                    <a href="" className="sourceCode"><b>Source Code</b></a>
                </div>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus aspernatur velit quae impedit assumenda labore nostrum aut, optio nulla sint nesciunt quisquam molestiae at, corporis possimus ipsam veritatis temporibus tempore, consequatur culpa fugiat est officia expedita quas? Eligendi pariatur suscipit reiciendis quod exercitationem illo quos sed! Velit consequatur vero culpa.</p>
            <div className='d-flex'>
              <div className="badge d-flex">
                <div className='dot activeColor'></div>
                Status: live
              </div>
              <div className="badge">Status: live</div>
              <div className="badge">NodeJs</div>
              <div className="badge">JavaScript</div>
              <div className="badge">ExpressJs</div>
              <div className="badge">Docker</div>
              <div className="badge">MongoDB</div>
              <div className="badge">Ubuntu</div>
            </div>
            <img className='explore' style={{height: "24px", opacity: "0.1"}} src={explore} alt="explore"  />
        </div>
    </div>
  )
}

export default Project