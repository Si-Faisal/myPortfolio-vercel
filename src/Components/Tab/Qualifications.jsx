import React, { useState } from 'react';
import './Qualifications.css'
const Qualifications = () => {
 
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const handleDownloadResume = () => {
    
   
  };



    return (
        <div className=" p-4 gradient-bg text-white ">
      <h1 className="text-center text-3xl lg:text-5xl lg:leading-tight font-bold mt-8  md:mt-16 text-[#d7dce0]">My Qualifications</h1>
      
      <div className="flex justify-center mt-0">
        {/* <div className="tabs tabs-boxed">
          <div>
            <a
              className={`tab ${activeTab === 1 ? "tab-active" : ""}`}
              onClick={() => handleTabClick(1)}
            >
              Education
            </a>
          </div>
          <div>
            <a
              className={`tab ${activeTab === 2 ? "tab-active" : ""}`}
              onClick={() => handleTabClick(2)}
            >
              Professional Skills
            </a>
          </div>
          <div>
            <a
              className={`tab ${activeTab === 3 ? "tab-active" : ""}`}
              onClick={() => handleTabClick(3)}
            >
             Experience
            </a>
          </div>
          <div>
            <a
              className={`tab ${activeTab === 4 ? "tab-active" : ""}`}
              onClick={() => handleTabClick(4)}
            >
              Download Resume
            </a>
          </div>
        </div> */}
      </div>
      {activeTab === 1 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
          <div className="card resomecard hover:text-white shadow-xl">
            <div className="card-body p-2 md:p-6">
              <h2 className="text-lg md:text-3xl gradient-text font-bold">Bachelor of Science - Statistics</h2>
              <p className='text-[#40c9ff]'>-University Of Chittagong(2018-2023)</p>
              <p className='text-[#d7dce0]'>
                I have completed 4 years of B.Sc honrs in Statistics from the University of Chittagong , Bangladesh.Statistics in science involves analyzing data to uncover patterns, relationships, and trends, empowering researchers to draw reliable conclusions and make informed decisions based on evidence.
              </p>
            </div>
          </div>
          <div className="card resomecard hover:text-white  shadow-xl">
            <div className="card-body p-2 md:p-6">
              
              <h2 className="text-lg md:text-3xl gradient-text font-bold">Higher School certificate - Science</h2>
              <p className='text-[#40c9ff]'>-Cox'sbazer Govt College (2016 - 2018)</p>
              <p className='text-[#d7dce0]'>
                The Higher Secondary Certificate (HSC) is a public examination
                credential in Bangladesh. HSC is equivalent
                to GCE A Level in England and 3rd and 4th year of high schools
                in the United States.
              </p>
            </div>
          </div>
          <div className="card resomecard hover:text-white shadow-xl">
            <div className="card-body p-2 md:p-6">
              <h1 className="md:text-3xl text-lg gradient-text font-bold">
                Full Stack Web Development Certificate
              </h1>
              <p className='text-[#40c9ff]'>-Programming Hero</p>
              <p className='text-[#d7dce0]'>
                 I have completed coure of full stack web development from Programming-Hero where i my instructor was Jhaker Mahbub Sir.After succesfully complete the course , I learn HTML , CSS , TAILWIND , JAVASCRIPT , REACT , MONGODB , FIREBASE , JWT , REDUX, TYPESCRIPT , MONGOOSE etc.
              </p>
            </div>
          </div>
        </div>
      )}
      
       {activeTab === 3 && (
        <div></div>
      )}

      {activeTab === 4 && (
        <div className="card w-1/5 mx-auto text-center mt-8">
         <button
              onClick={handleDownloadResume}
              className="text-white  text-center uppercase font-bold flex justify-center items-center gap-2 bg-gradient-to-r from-blue-400 hover:to-blue-400 via-purple-500 to-pink-500 hover:from-pink-500 py-2 px-3 rounded-full"
            >
              Download Resume 
            </button>
         
        </div>
      )}
      <br />
      <br />
     <hr />
    </div>
    );
};

export default Qualifications;