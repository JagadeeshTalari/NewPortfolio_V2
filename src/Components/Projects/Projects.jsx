import React from 'react'
import "./Projects.css"

const Projects = () => {
  return (
    <div className='projects-section'>
      <div>Projects</div>
      <div className="articles-section">
        <div className="article-box">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus aspernatur velit quae impedit assumenda labore nostrum aut, optio nulla sint nesciunt quisquam molestiae at, corporis possimus ipsam veritatis temporibus tempore, consequatur culpa fugiat est officia expedita quas? Eligendi pariatur suscipit reiciendis quod exercitationem illo quos sed! Velit consequatur vero culpa.</p>
          <div className='d-flex'>
            <div className="badge d-flex">
              <div className='dot activeColor'></div>
              Status: live
            </div>
          <div className="badge">Status: live</div>
          </div>
        </div>
        <div className="article-box">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus aspernatur velit quae impedit assumenda labore nostrum aut, optio nulla sint nesciunt quisquam molestiae at, corporis possimus ipsam veritatis temporibus tempore, consequatur culpa fugiat est officia expedita quas? Eligendi pariatur suscipit reiciendis quod exercitationem illo quos sed! Velit consequatur vero culpa.</p>
          <div className='d-flex'>
            <div className="badge d-flex">
              <div className='dot activeColor'></div>
              Status: live
            </div>
          <div className="badge">Status: live</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects