import React from 'react'
import "./Certificate.css"

const Certificate = ({certificateDetials}) => {

  const {name,credentialUrl,platform,duration,imgLink} = certificateDetials
  return (
    <div className='certificate article-box d-flex'>
      <img className='article_img certificate_img' src={imgLink} alt={name} />
      <div>
        <h4>{name}</h4>
        <a className='credentialLink' href={credentialUrl} target='_blank'>Credential Url</a>
        <p>{platform}</p>
        <p>{duration}</p>
      </div>
    </div>
  )
}

export default Certificate