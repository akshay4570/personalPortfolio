import React from 'react';
import './Skills.scss';
import {VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component";
import workExperience from './WorkExperience';
import {MdOutlineWork} from 'react-icons/md';
import DOMPurify from 'dompurify'
import {images} from '../../constants';

import "react-vertical-timeline-component/style.min.css";

const skillList = [
    images.cpp,
    images.css,
    images.git,
    images.html,
    images.javascript,
    images.python,
    images.react,
    images.node,
    images.salesforce,
    images.vscode,
    images.jenkins
]
const Skills = () => {
  return (
    <>
        <div className="skills__border" />
        <div className="skills">
            <div className="skills__title">
                <span>Work Experience</span>
            </div>
            <VerticalTimeline
                layout='1-column-left'
            >
                {workExperience.map((element) => {

                return (
                    <VerticalTimelineElement
                    key={element.key}
                    dateClassName="date"
                    //   iconStyle={schoolIconStyles}
                    icon={<MdOutlineWork />}
                    contentStyle={{
                        borderRadius : '5px',
                        backgroundColor : '#8A39E1',
                        color:'white',
                        height:'5%',
                    }}
                    contentArrowStyle={{
                        borderRight: '7px solid #614cae',
                    }}
                    >
                    <h3 className="vertical-timeline-element-title">
                        {element.title} - {element.location}
                    </h3>
                    {/* <h5 className="vertical-timeline-element-subtitle">
                        {element.location}
                    </h5> */}
                    <div className="skills__description" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(element.description)}} ></div>
                    </VerticalTimelineElement>
                );
                })}
            </VerticalTimeline>
            <div className="skills__title" style={{marginTop : '2%'}}>
                <span>Skills</span>
            </div>
            <div className="skills__container">
                <div className="skills__card">
                    {skillList.map((element) => (
                        <div className="skills__element" key={element}>
                            <img src={element} alt={element} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
  );
}

export default Skills;