import React from 'react'
import githubCertificate from "../../assets/git_github_certificate.png"
import htmlCertificate from "../../assets/html_css_certificate.png"
import Article from './Article'

const Articles = () => {
  return (
    <div className='articles-section'>
        <div>CERTIFICATES</div>
        <Article image={githubCertificate}/>
        <Article image={htmlCertificate}/>
        <Article/>
    </div>
  )
}

export default Articles