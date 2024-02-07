import React from 'react'
import "./Footer.css"

let year = new Date().getFullYear()
const Footer = () => {
  return (
    <div className='footer'>  
    <div>
    c { year } Jagadeesh Talari
    </div>
    </div>
  )
}

export default Footer