import React from 'react'
import "./WorkHistory.css"
import Circles from './Circles'

const WorkHistory = () => {
  return (
    <div id='workHistory'>
        <h4 className='sectionHeading'>WORK HISTORY</h4>
        <div className="workHistorLine">
          <Circles activeClass="active"/>
          <div className='workDetails'>
            <p className='companyName'>Tata Consultancy Services</p>
            <p className='role'>Frontend Developer (Full Time)</p>
            <p className='duration'>Nov 2021 - Oct 2023</p>
          </div>
          <Circles/>
          <div className='workDetails'>
            <p className='companyName'>Chandu-Soft Technologies Pvt Ltd.</p>
            <p className='role'>Junior Engineer (Full Time)</p>
            <p className='duration'>Apr 2021 - Aug 2021</p>
          </div>
          <Circles/>
          <div className='workDetails third'>
            <p className='companyName'>SoftTech Technologies</p>
            <p className='role'>Junior Faculty (Full Time)</p>
            <p className='duration'>Oct 2020 - Feb 2021</p>
          </div>
          {/* <Circles/> */}
          {/* <div className='workDetails third'>
            <p>SchbangQ</p>
            <p>Backend Developer (Full Time)</p>
            <p>Mar 2023 - present</p>
          </div>
          <Circles/> */}
        </div>
    </div>
  )
}

export default WorkHistory