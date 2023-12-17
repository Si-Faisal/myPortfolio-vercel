import React from 'react';
import { FaBookReader, FaNodeJs, FaYahoo } from "react-icons/fa";
import "./ProgrammingSkill.css";


const ProgrammingSkill = () => {
    return (
        <div className=" w-full mx-auto">
        <div className="text-center mb-8 mt-10 md:mt-13"> <br />
          <h1 className="text-center text-3xl lg:text-5xl lg:leading-tight font-bold  text-[#d7dce0]">Knowledges</h1>
          
        </div>
        <div className="grid grid-cols-1 mb-8 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mx-auto">
          <div className="card mb-8 hover:bg-base-100 text-xl  shadow-xl">
            <div className="card-body">
              <h1 className="text-7xl text-[#40c9ff]">
                <FaBookReader />
              </h1>
              <h2 className="card-title text-[#ff014f]">Expertise</h2>
              <p className='text-[#d7dce0]'>
                JavaScript, ES6, React, Node.js, Express.js, React Hook, React
                Router,  Rest API, Firebase, Tailwind, Bootstrap5,MongoDB etc
              </p>
            </div>
          </div>
          <div className="card mb-8 hover:bg-base-100 text-2xl  shadow-xl">
            <div className="card-body ">
              <h1 className="text-7xl text-[#40c9ff]">
                <FaNodeJs />
              </h1>
              <h2 className="card-title text-[#ff014f]">Comfortable</h2>
              <p className='text-[#d7dce0]'>
               Redux, Mongoose,  JWT, Material
                Tools: Docker, Github, Figma
              </p>
            </div>
          </div>
          <div className="card mb-8 hover:bg-base-100 text-2xl text-black hover:text-white shadow-xl">
            <div className="card-body">
              <h1 className="text-7xl text-[#40c9ff]">
                <FaYahoo />
              </h1>
              <h2 className="card-title text-[#ff014f]">Familiar</h2>
              <p className='text-[#d7dce0]'>Mysql, TypeScript, vercel, Netlify</p>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
};

export default ProgrammingSkill;