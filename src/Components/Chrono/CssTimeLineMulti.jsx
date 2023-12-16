import React from 'react';
import '../Chrono/CssTimeLine.css'
import html from "../../assets/logo/html.png"
import css from "../../assets/logo/css.png"
import js from "../../assets/logo/javascript.png"
import mongodb from "../../assets/logo/mongodb1.png"
import redux from "../../assets/logo/redux.png"
import ts from "../../assets/logo/ts.png"
import react from "../../assets/logo/react.png"
import firebase from "../../assets/logo/firebase.png"

const CssTimeLineMulti = () => {
    return (
        <div className='cssTimeLine container mx-auto'>
          <div className=" grid grid-cols-1 lg:grid-cols-2 lg:gap-20 justify-center justify-items-center items-center">
            <div className='timeline w-full '>
          <div className="timeline__event  ">
            <div className="timeline__event__icon ">
              <div className="avatar">
               <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 z-20">
                 <img src={html} />
               </div>
              </div>
            </div>
    
            <div className="timeline__event__content html">
              <div className="timeline__event__title text-[#e34c26] ">
                   HTML
              </div>
              <div className="timeline__event__description">
                <p> Fundamental for structuring web content, HTML provides the backbone, defining elements and their layout within a web page.</p>
              </div>
            </div>
          </div>


  <div className="timeline__event css">
    <div className="timeline__odd__icon ">
    <div className="avatar">
  <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 z-20">
    <img src={css} />
  </div>
</div>

    </div>
    
    <div className="timeline__event__content">
      <div className="timeline__event__title text-[#264de4]">
       css
      </div>
      <div className="timeline__event__description">
        <p>Works hand-in-hand with HTML, enabling the presentation and visual styling of web pages, determining the design, layout, and overall look.</p>
      </div>
    </div>
  </div>
  <div className="timeline__event">
    <div className="timeline__event__icon">
    <div className="avatar">
  <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 z-20">
    <img src={js} />
  </div>
</div>

    </div>
    
    <div className="timeline__event__content js">
      <div className="timeline__event__title text-[#f0db4f]">
        JavaScript
      </div>
      <div className="timeline__event__description">
        <p> A versatile programming language used for adding interactivity and dynamic features to websites, allowing for manipulation of content and behavior within the browser.</p>
      </div>

    </div>
  </div>
  <div className="timeline__event ">
    <div className="timeline__react__icon">
    <div className="avatar">
  <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 z-20">
    <img src={react}/>
  </div>
</div>

    </div>
   
    <div className="timeline__event__content react">
      <div className="timeline__event__title text-[#61DBFB]">
        React
      </div>
      <div className="timeline__event__description">
        <p> A JavaScript library for building user interfaces. It streamlines the creation of interactive UI components, offering efficiency and reusability in web development.</p>
      </div>
    </div>
  </div>
            </div>
            <div>
            <div className="timeline__event ">
    <div className="timeline__event__icon ">
    <div className="avatar">
  <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 z-20">
    <img src={ts} />
  </div>
</div>

    </div>
    
    <div className="timeline__event__content ts">
      <div className="timeline__event__title text-[#007acc]">
       TypeScript
      </div>
      <div className="timeline__event__description">
        <p> A superset of JavaScript that introduces static typing. It enhances code reliability by catching errors during development and improving the scalability of projects.</p>
      </div>
    </div>
  </div>
  <div className="timeline__event ">
    <div className="timeline__odd__icon">
    <div className="avatar">
  <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 z-20">
    <img src={redux} />
  </div>
</div>

    </div>
    
    <div className="timeline__event__content redux">
      <div className="timeline__event__title text-[#764abc]">
        Redux
      </div>
      <div className="timeline__event__description">
        <p> A predictable state container for JavaScript apps, particularly useful in managing application state, providing a centralized store for data that can be accessed across the application.</p>
      </div>
    </div>
  </div>
  <div className="timeline__event ">
    <div className="timeline__event__icon">
    <div className="avatar">
  <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 z-20">
    <img src={mongodb}/>
  </div>
</div>

    </div>
    
    <div className="timeline__event__content mongodb">
      <div className="timeline__event__title text-[#4DB33D]">
        MongoDB
      </div>
      <div className="timeline__event__description">
        <p> A popular NoSQL database, designed for scalability and flexibility. It stores data in flexible, JSON-like documents, making it suitable for various types of data.</p>
      </div>

    </div>
  </div>
  <div className="timeline__event ">
    <div className="timeline__firebase__icon">
    <div className="avatar">
  <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 z-20">
    <img src={firebase} />
  </div>
</div>

    </div>
   
    <div className="timeline__event__content firebase">
      <div className="timeline__event__title text-[#F5820D]">
        FireBase
      </div>
      <div className="timeline__event__description">
        <p>A comprehensive platform by Google for developing web and mobile applications. It offers services like real-time database, authentication, hosting, and cloud functions, aiding in rapid development and deployment of apps.</p>
      </div>
    </div>
  </div>

            </div>
  
          </div>
        </div>
    );
};

export default CssTimeLineMulti;