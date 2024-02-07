import React from 'react'
import "./Projects.css"
import Project from './Project'

const Projects = () => {
  return (
    <div id='projects' className='projects-section'>
      <div>Projects</div>
      <div className="articles-section">
        <Project/>
        <Project/>
        <Project/>
        {/* <div className="article-box">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus aspernatur velit quae impedit assumenda labore nostrum aut, optio nulla sint nesciunt quisquam molestiae at, corporis possimus ipsam veritatis temporibus tempore, consequatur culpa fugiat est officia expedita quas? Eligendi pariatur suscipit reiciendis quod exercitationem illo quos sed! Velit consequatur vero culpa.</p>
          <div className='d-flex'>
            <div className="badge d-flex">
              <div className='dot activeColor'></div>
              Status: live
            </div>
          <div className="badge">Status: live</div>
          </div>
        </div> */}
        {/* <div className="article-box">
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
          <div className="badge">DigitalOcean</div>
          <div className="badge">Open source software</div>
          <div className="badge">ReactJs</div>
          <div className="badge">NodeJS</div>
          <div className="badge">Firebase</div>
          <div className="badge">FireStore</div>
          <div className="badge">TailwindCSS</div>
          <div className="badge">Jest</div> 
          </div>
          
        </div>
        */}
      </div>
    </div>
  )
}

export default Projects