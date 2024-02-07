import React from 'react'
import "./Certificate.css"

import Certificate from './Certificate'
import githubCertificate from "../../assets/git_github_certificate.png"
import htmlCertificate from "../../assets/html_css_certificate.png"

const Certifications = () => {
  return (
    <div className='articles-section'>
        <div className='connect'>CERTIFICATES</div>
        <Certificate image={githubCertificate}/>
        <Certificate image={htmlCertificate}/>
        <Certificate/>
    </div>
  )
}

export default Certifications