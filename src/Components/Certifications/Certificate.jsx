import React from 'react'
import "./Certificate.css"

const Certificate = ({image}) => {
  return (
    <div className='certificate article-box d-flex'>
      <img className='article_img certificate_img' src={image} alt="" />
      <div>
        <h4>Git & GitHub</h4>
        <a href="">Credential Url</a>
        <p>Learn Code Online</p>
        <p>Duration</p>
      </div>
    </div>
  )
}

export default Certificate