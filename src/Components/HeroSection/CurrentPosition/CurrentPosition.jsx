import React from 'react'
import "./CurrentPosition.css"

const CurrentPosition = () => {
  return (
    <div className="currentPosition">
    <p>CURRENT POSITION</p>
    {/* <p>company name</p> */}
    <div className='d-flex forHire'>
        <div className='activeColor dot'></div>
        <p>AVAILABLE FOR HIRE</p>
    </div>
    </div>
  )
}

export default CurrentPosition