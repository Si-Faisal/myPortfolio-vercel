import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import html from '../../assets/logo/html.png'
import html1 from '../../assets/logo/html.png'
import css from '../../assets/logo/css.png'
import js from '../../assets/logo/javascript.png'
import ES6 from '../../assets/logo/es6.png'
import react from '../../assets/logo/react.png'
import firebase from '../../assets/logo/firebase.png'
import tailwind from '../../assets/logo/tailwind.png'
import bootstrap from '../../assets/logo/bootstrap.jpg'
import mongodb from '../../assets/logo/mongodb.png'
import netlify from '../../assets/logo/netlify.png'
import vercel from '../../assets/logo/vercel.png'
import mui from '../../assets/logo/mui.png'

const Timeline = () => {
    return (
        <div>
            <div className='skill header py-20 text-white'>
                <span className='sub-title'>Features</span>
                <h1 className='title'>What Skill I Have</h1>
            </div>
            <VerticalTimeline

                lineColor={'rgb(33, 150, 243)'}
            >
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2011 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={}
                >
                    <h3 className="vertical-timeline-element-title">Creative Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2010 - 2011"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={}
                >
                    <h3 className="vertical-timeline-element-title">Art Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2008 - 2010"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={}
                >
                    <h3 className="vertical-timeline-element-title">Web Designer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                    <p>
                        User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2006 - 2008"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={}
                >
                    <h3 className="vertical-timeline-element-title">Web Designer</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <p>
                        User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="April 2013"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                // icon={}
                >
                    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                    <p>
                        Strategy, Social Media
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="November 2012"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                // icon={}
                >
                    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2002 - 2006"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                // icon={}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                    <p>
                        Creative Direction, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                // icon={}
                />
            </VerticalTimeline>
        </div>

    );
};

export default Timeline;