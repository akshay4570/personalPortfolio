import React, {useState,useEffect} from 'react';
import {motion} from 'framer-motion';
import './MainContent.scss';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import {Navbar,About,Projects,Skills,Profile} from '../../components';

const sideVariants = {
    hidden : {
        x : '+120vw'
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

function MainContent() {
  return (
    <Router>
        <motion.div
            variants={sideVariants}
            initial='hidden'
            animate='visible'
            className="MainContent__Animator"
        >
            <div className="MainContent">
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<About />} />
                    <Route exact path="/projects" element={<Projects />} />
                    <Route exact path="/skills" element={<Skills />} />
                    <Route exact path="/profile" element={<Profile />} />
                </Routes>
            </div>
        </motion.div>
    </Router>
  );
}

export default MainContent;