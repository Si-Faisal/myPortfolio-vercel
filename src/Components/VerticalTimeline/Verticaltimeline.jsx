import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import './Verticaltimeline.css'




const Verticaltimeline = () => {
    return (
        <div>
<VerticalTimeline lineColor="#0A66C2">
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{boxShadow: "rgba(240, 234, 234, 0.671) 0px 12px 28px 0px, rgba(218, 213, 213, 0.822) 0px 2px 4px 0px, rgba(199, 193, 193, 0.774) 0px 0px 0px 1px inset",background: "#f3f0f0" ,color: '#112A46', width:"60%",marginLeft:"110px" }}
    contentArrowStyle={{ borderRight: '30px solid #ffff' ,marginLeft:"30px", marginTop:"20px"}}
    
    iconStyle={{ background:"#fff", color: '#e34c26' }}
    icon={<FaHtml5 />}
  >
    <h1 className=" text-3xl font-bold text-[#e34c26]">HTML</h1>
    <p>
    Fundamental for structuring web content, HTML provides the backbone, defining elements and their layout within a web page.
    </p>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{  boxShadow: "rgba(240, 234, 234, 0.671) 0px 12px 28px 0px, rgba(218, 213, 213, 0.822) 0px 2px 4px 0px, rgba(199, 193, 193, 0.774) 0px 0px 0px 1px inset",background: "#f3f0f0" ,color: '#112A46', width:"60%",marginLeft:"110px",  }}
    contentArrowStyle={{ borderRight: '30px solid  #ffff' ,marginLeft:"30px", marginTop:"20px"}}
    
    iconStyle={{ background:"#fff", color: '#264de4' }}
    icon={<IoLogoCss3 />}
  >
    <h1 className=" text-3xl font-bold text-[#264de4]">CSS</h1>
    <p>
    Works hand-in-hand with HTML, enabling the presentation and visual styling of web pages, determining the design, layout, and overall look.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ boxShadow: "rgba(240, 234, 234, 0.671) 0px 12px 28px 0px, rgba(218, 213, 213, 0.822) 0px 2px 4px 0px, rgba(199, 193, 193, 0.774) 0px 0px 0px 1px inset",background: "#f3f0f0" ,color: '#112A46', width:"60%",marginLeft:"110px" }}
    contentArrowStyle={{ borderRight: '30px solid  #ffff' ,marginLeft:"30px", marginTop:"20px"}}
    
    iconStyle={{ background:"#fff", color: '#06b6d4' }}
    icon={<SiTailwindcss />}
  >
    <h1 className=" text-3xl font-bold text-[#06b6d4]">Tailwind</h1>
    <p>
    Works hand-in-hand with HTML, enabling the presentation and visual styling of web pages, determining the design, layout, and overall look.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
   className="vertical-timeline-element--work"
   contentStyle={{ boxShadow: "rgba(240, 234, 234, 0.671) 0px 12px 28px 0px, rgba(218, 213, 213, 0.822) 0px 2px 4px 0px, rgba(199, 193, 193, 0.774) 0px 0px 0px 1px inset",background: "#f3f0f0" ,color: '#112A46', width:"60%",marginLeft:"110px" }}
   contentArrowStyle={{ borderRight: '30px solid  #ffff' ,marginLeft:"30px", marginTop:"20px"}}
   
   iconStyle={{ background:"#fff", color: '#f0db4f' }}
    icon={<IoLogoJavascript />}
  >
    <h1 className=" text-3xl font-bold text-[#f0db4f]">JavaScript</h1>
    <p>
    A versatile programming language used for adding interactivity and dynamic features to websites, allowing for manipulation of content and behavior within the browser.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ boxShadow: "rgba(240, 234, 234, 0.671) 0px 12px 28px 0px, rgba(218, 213, 213, 0.822) 0px 2px 4px 0px, rgba(199, 193, 193, 0.774) 0px 0px 0px 1px inset",background: "#f3f0f0" ,color: '#112A46', width:"60%",marginLeft:"110px" }}
    contentArrowStyle={{ borderRight: '30px solid  #ffff' ,marginLeft:"30px", marginTop:"15px"}}
    
    iconStyle={{ background:"#fff", color: '#61DBFB' }}
    icon={<FaReact />}
  >
    <h1 className=" text-3xl font-bold text-[#61DBFB]">React</h1>
    <p>
    A JavaScript library for building user interfaces. It streamlines the creation of interactive UI components, offering efficiency and reusability in web development.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{boxShadow: "rgba(240, 234, 234, 0.671) 0px 12px 28px 0px, rgba(218, 213, 213, 0.822) 0px 2px 4px 0px, rgba(199, 193, 193, 0.774) 0px 0px 0px 1px inset",background: "#f3f0f0" ,color: '#112A46', width:"60%",marginLeft:"110px" }}
    contentArrowStyle={{ borderRight: '30px solid  #ffff' ,marginLeft:"30px", marginTop:"20px"}}
    
    iconStyle={{ background:"#fff", color: '#4DB33D' }}
    icon={<SiMongodb />}
  >
    <h1 className=" text-3xl font-bold text-[#4DB33D]">MongoDB</h1>
    <p>
    A popular NoSQL database, designed for scalability and flexibility. It stores data in flexible, JSON-like documents, making it suitable for various types of data.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ boxShadow: "rgba(240, 234, 234, 0.671) 0px 12px 28px 0px, rgba(218, 213, 213, 0.822) 0px 2px 4px 0px, rgba(199, 193, 193, 0.774) 0px 0px 0px 1px inset",background: "#f3f0f0" ,color: '#112A46', width:"60%",marginLeft:"110px" }}
    contentArrowStyle={{ borderRight: '30px solid  #ffff' ,marginLeft:"30px", marginTop:"20px"}}
    
    iconStyle={{ background:"#fff", color: '#764abc' }}
    icon={<SiRedux />}
  >
    <h1 className=" text-3xl font-bold text-[#764abc]">Redux</h1>
    <p>
    A predictable state container for JavaScript apps, particularly useful in managing application state, providing a centralized store for data that can be accessed across the application.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{boxShadow: "rgba(240, 234, 234, 0.671) 0px 12px 28px 0px, rgba(218, 213, 213, 0.822) 0px 2px 4px 0px, rgba(199, 193, 193, 0.774) 0px 0px 0px 1px inset",background: "#f3f0f0" ,color: '#112A46', width:"60%",marginLeft:"110px" }}
    contentArrowStyle={{ borderRight: '30px solid  #ffff' ,marginLeft:"30px", marginTop:"20px"}}
    
    iconStyle={{ background:"#fff", color: '#F5820D' }}
    icon={<IoLogoFirebase />}
  >
    <h1 className=" text-3xl font-bold text-[#F5820D]">Firebase</h1>
    <p>
    A comprehensive platform by Google for developing web and mobile applications. It offers services like real-time database, authentication, hosting, and cloud functions, aiding in rapid development and deployment of apps.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ boxShadow: "rgba(240, 234, 234, 0.671) 0px 12px 28px 0px, rgba(218, 213, 213, 0.822) 0px 2px 4px 0px, rgba(199, 193, 193, 0.774) 0px 0px 0px 1px inset",background: "#f3f0f0" ,color: '#112A46', width:"60%",marginLeft:"110px" }}

    contentArrowStyle={{ borderRight: '30px solid #ffff' ,marginLeft:"30px", marginTop:"20px"}}
    
    iconStyle={{ background:"#fff", color: '#007acc' }}
    icon={<SiTypescript />}
  >
    <h1 className=" text-3xl font-bold text-[#007acc]">TypeScript</h1>
    <p>
    A superset of JavaScript that introduces static typing. It enhances code reliability by catching errors during development and improving the scalability of projects.
    </p>
  </VerticalTimelineElement>
  
</VerticalTimeline>
            
        </div>
    );
};

export default Verticaltimeline;