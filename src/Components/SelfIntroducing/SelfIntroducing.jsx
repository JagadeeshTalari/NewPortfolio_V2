import React from 'react'
import "./SelfIntroducing.css"
import mail from "../../assets/mail.svg"
import linkedIn from "../../assets/linkedIn.svg"
import github from "../../assets/github.svg"
import hashnode from "../../assets/hashnode.svg"

const SelfIntroducing = () => {
  return (
    <div className='selfIntro'>
        <h2 className="position">Full Stack Developer</h2>
        <h1 className='name'> <span className='firstName'>Jagadeesh</span> Talari</h1>
        <div className='profile'>
        <div className="bg-circle"></div>
        <img className='profileImg' src="https://jagadeeshtalari.github.io/JagadeeshTalari-Portfolio/images/DSCF1440.JPG" alt="" />
        </div>
    <div className='bg-black__box'>
       |  Hyderabad, India
    </div>
    <div className='bg-black__box'>
        <a href="">|  View Resume</a>
    </div>
    <div>
      <p>CONNECT</p>
      <div className='social-links'>
      <img src={mail} alt="mail" />
      <img src={linkedIn} alt="linkedIn" />
      <img src={github} alt="github" />
      {/* <img src={hashnode} alt="hashnode" /> */}
      </div>
    </div>
    </div>
  )
}

export default SelfIntroducing