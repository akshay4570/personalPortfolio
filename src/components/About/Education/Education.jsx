import "./Education.scss";
import {IoSchoolSharp} from 'react-icons/io5';
import "react-vertical-timeline-component/style.min.css";
import timelineElements from "./Timeline";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";


function Education() {
  let schoolIconStyles = { background: "#f9c74f" };

  return (
    <div className="education">
      <span className="education__title">Education</span>
      <VerticalTimeline
        layout='1-column-left'
      >
        {timelineElements.map((element) => {

          return (
            <VerticalTimelineElement
              key={element.key}
              dateClassName="date"
              iconStyle={schoolIconStyles}
              icon={<IoSchoolSharp />}
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
              <p id="description">{element.description}</p>
              <div className="education__cgpa">
                <span>Cgpa - {element.cgpa}</span>
                <span>Year - {element.date}</span>
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Education;