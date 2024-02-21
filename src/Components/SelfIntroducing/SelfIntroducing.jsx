import React from "react";
import "./SelfIntroducing.css";
import mail from "../../assets/mail.svg";
import linkedIn from "../../assets/linkedIn.svg";
import github from "../../assets/github.svg";
import hashnode from "../../assets/hashnode.svg";
import { FaLocationDot } from "react-icons/fa6";
import { GrAttachment } from "react-icons/gr";

const SelfIntroducing = () => {
  return (
    <div className="selfIntro">
      <div>
        <h2 className="position">Full Stack Developer</h2>
        <h1 className="name">
          <span className="firstName">Jagadeesh</span> Talari
        </h1>
      </div>
      <div className="profile">
        <div className="bg-circle"></div>
        <img
          className="profileImg"
          src="https://jagadeeshtalari.github.io/JagadeeshTalari-Portfolio/images/DSCF1440.JPG"
          alt=""
        />
      </div>
      <div className="bg-black__box">
        <FaLocationDot className="icon-edit" />
        <div className="line-separator"></div>
        <div>Hyderabad, India</div>
      </div>
      <div className="bg-black__box">
        <a
          href="https://drive.google.com/drive/folders/1gobxYm4Kmvp-3vg4pWUoAH427Twf1gma"
          target="_blank"
        >
          <GrAttachment className="icon-edit" />
          <div className="line-separator"></div>
          <div>View Resume</div>
        </a>
      </div>
      <div className="connect">
        <p>CONNECT</p>
        <div className="social-links">
          <a href="mailto:talarijagadeesh55@gmail.com" target="_blank">
            <img src={mail} alt="mail" className="BlackIcon" />
          </a>
          <a
            href="https://www.linkedin.com/in/jagadeesh-talari-1a1396187/"
            target="_blank"
          >
            <img src={linkedIn} alt="linkedIn" className="WhiteIcon" />
          </a>
          <a href="https://github.com/JagadeeshTalari" target="_blank">
            <img src={github} className="BlackIcon" alt="github" />
          </a>

          {/* <img src={hashnode} alt="hashnode" /> */}
        </div>
      </div>
    </div>
  );
};

export default SelfIntroducing;
