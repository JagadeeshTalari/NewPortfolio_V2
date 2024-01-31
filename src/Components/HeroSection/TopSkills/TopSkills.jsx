import React from 'react'
import "./TopSkills.css"
import GlobeSvg from './GlobeSvg'

const TopSkills = () => {
  return (
    <section className='topSkills__section'>
    <span>TopSkills</span>
    <div className='d-flex skillsArticle'>
      <GlobeSvg skill="Javascript"/>
      <GlobeSvg skill="Python"/>
      <GlobeSvg skill="ReactJS"/>
      <GlobeSvg skill="NodeJS"/>
    </div>
    <div className='d-flex skillsArticle'>
      <GlobeSvg skill="ExpressJS"/>
      <GlobeSvg skill="MongoDB"/>
      <GlobeSvg skill="Redux"/>
      <GlobeSvg skill="HTML"/>
    </div>
    <div className='d-flex skillsArticle'>
      <GlobeSvg skill="CSS"/>
      <GlobeSvg skill="SQL"/>
      <GlobeSvg skill="GIT"/>
    </div>
    </section>
  )
}

export default TopSkills