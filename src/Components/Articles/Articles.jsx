import React from 'react'
// import githubCertificate from "../../assets/git_github_certificate.png"
// import htmlCertificate from "../../assets/html_css_certificate.png"
import Article from './Article'

const Articles = () => {
  return (
    <div id='articles' className='articles-section'>
        <div className='connect'>ARTICLES</div>
        <Article />
        <Article />
        <Article/>
    </div>
  )
}

export default Articles