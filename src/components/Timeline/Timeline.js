import React from 'react'
import './Timeline.css'
import workIcon from './work1.png'
import timelineElements from "./timelineElements";
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  
import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
    let workIconStyles = { background: "#181818" };
    return (
        <div className="div-experience" id="experiencepage">
            <h1 className="title-exp">Experience</h1>
            <VerticalTimeline>
                {timelineElements.map((element) => {
                return (
                    <VerticalTimelineElement
                    key={element.id}
                    date={element.date}
                    dateClassName="date"
                    iconStyle={ workIconStyles }
                    icon={<img className="iconImg" src={workIcon} alt="work Icon"></img>}
                    >
                    <h3 className="vertical-timeline-element-title elem-title">
                        {element.title}
                    </h3>
                    <h5 className="vertical-timeline-element-subtitle">
                        {element.location}
                    </h5>
                    <p id="description">{element.description}</p>
                    </VerticalTimelineElement>
                );
                })}
            </VerticalTimeline>
        </div>
    )
}
export default Timeline