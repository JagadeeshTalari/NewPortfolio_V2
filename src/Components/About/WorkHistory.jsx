import React from 'react'
import "./WorkHistory.css"
import Circles from './circles'

const WorkHistory = () => {
  return (
    <div>
        <h4>WorkHistory</h4>
        <div className="workHistorLine">
          <Circles activeClass="active"/>
          <div className='workDetails'>
            <p>SchbangQ</p>
            <p>Backend Developer (Full Time)</p>
            <p>Mar 2023 - present</p>
          </div>
          <Circles/>
          <div className='workDetails'>
            <p>SchbangQ</p>
            <p>Backend Developer (Full Time)</p>
            <p>Mar 2023 - present</p>
          </div>
          <Circles/>
          <div className='workDetails third'>
            <p>SchbangQ</p>
            <p>Backend Developer (Full Time)</p>
            <p>Mar 2023 - present</p>
          </div>
          <Circles/>
          <div className='workDetails third'>
            <p>SchbangQ</p>
            <p>Backend Developer (Full Time)</p>
            <p>Mar 2023 - present</p>
          </div>
          <Circles/>
        </div>
    </div>
  )
}

export default WorkHistory