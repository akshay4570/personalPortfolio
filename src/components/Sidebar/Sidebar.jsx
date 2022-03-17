import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import {GiTie} from 'react-icons/gi';
import {BsLinkedin,BsGithub,BsFacebook} from 'react-icons/bs';
import {MdLocationPin} from 'react-icons/md';

import './Sidebar.scss';

const sideBarVariant = {
    hidden : {
        x : '-20vw'
    },
    visible : {
        x : 0,
        transition : {
            delay : 0.3,
            duration : 1,
            type : 'spring'
        }
    }
}
function Sidebar() {
  return (
    <motion.div
        variants={sideBarVariant}
        initial='hidden'
        animate='visible'
    >
        <div className="sidebar__container">
            <motion.div
                whileInView={{ opacity : 1}}
                whileHover={{ scale : 1.2 }}
            >
                <img className="sidebar__profile" src={images.profile} alt="Profile pic" />
            </motion.div>
            <div className="sidebar__name">
               Akshay Hegde 
                    <br />
                <span>Programmer Analyst,Associate
                <br />
                Qualcomm, Bangalore
                </span>
            </div>
            <div className="sidebar__summary">
                <p className="p-text">
                    Competitive programmer, Tech Enthusiast, Web Developer, Sports freak.
                </p>
            </div>
            {/* <div className="sidebar__resume"> */}
                <button className="sidebar__resume-button">
                    <GiTie className="sidebar__resume-icon"/>
                    <a href={images.Resume} target="_blank">View Resume</a>
                </button>
            {/* </div> */}
            <div className="sidebar__socialMedia-list">
                <BsGithub className="sidebar__socialMedia" onClick={() => {
                    window.open("https://github.com/akshay4570")
                }}/>
                <BsLinkedin className="sidebar__socialMedia" onClick={() => {
                    window.open("https://linkedin.com/in/akshay-hegde-4570")
                }}/>
                <BsFacebook className="sidebar__socialMedia" onClick={() => {
                    window.open("https://www.facebook.com")
                }}/>
            </div>
            <div className="sidebar__address">
                <p className="p-text">
                   <span> 
                    <MdLocationPin />
                    Karnataka, India <br />
                    akshay4570@gmail.com <br />
                    +91-9513894695
                    </span>
                </p>
            </div>
            <div className="sidebar__email">
                <button onClick={() => (
                     window.open("mailto:akshay4570@gmail.cm")
                     )}>Email Me</button>
            </div>
        </div>
    </motion.div>
  );
}

export default Sidebar;