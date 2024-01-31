import React from 'react'
import CurrentPosition from './CurrentPosition/CurrentPosition'
import TopSkills from './TopSkills/TopSkills'
import ToolsNPlatforms from './Tools_N_Platforms/ToolsNPlatforms'
import "./HeroSection.css"

const HeroSection = () => {
  return (
    <div>
        <CurrentPosition/>
        <div className='d-flex heroSection'>
        <TopSkills/>
        <ToolsNPlatforms/>
        </div>
    </div>
  )
  }

export default HeroSection