import React from 'react'
import "./Article.css"

const Article = () => {
  return (
    <div className='blog article-box d-flex'>
      <img className='article_img blog_img' src={{}} alt="" />
      <div>
        <h4>Git & GitHub</h4>
        <a href="">Read the article</a>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, cum?</p>
        <div className="d-flex badgesSection">
            <div className="badge">Javascript</div>
            <div className="badge">ReactJS</div>
        </div>
      </div>
    </div>
  )
}

export default Article