import React from 'react';

import Education from './Education/Education';
import './About.scss'

const About = () => {
  return (
    <div className="about">
        <div className="about__line"/>
        <div className="about__summary">
            <p className="p-text about__summary-text">
                A committed individual and a goal driven professional working as Programmer Analyst, Associate at
                Qualcomm, Key skills include good problem-solving backed by great academic background, I have worked on
                Salesforce Admin, Lightning Aura Components, Lightning Web Components, Currently I am working on developing
                CI/CD pipeline for the Salesforce Org. I am keen on exploring new concepts in the field of Web Development and also Machine Learning. I am into competitive programming to enhance my problem-solving skills and getting a step closer towards real-world problems.
            </p>
        </div>
        <div className="about__line"/>
        <div className="about__education">
            <Education />
        </div>
    </div>
  );
}

export default About;