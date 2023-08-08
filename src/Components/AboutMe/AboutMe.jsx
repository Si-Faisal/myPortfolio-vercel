import React from 'react';
import './About.css';
// import './About.module.css';
// import './About.module.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



const AboutMe = () => {
    const percentage = 100;

    
    const htmlStyle = { '--num': 100 };
    const cssStyle = { '--num': 90 };
    const jsStyle = { '--num': 80 };
    const reactStyle = { '--num': 80 };
    const expressStyle = { '--num': 50 };
    const mongodbStyle = { '--num': 60 };

    return (
        <div className='w-full mx-auto mt-8 py-8 text-center'>
            

            <div className='about-title'>About Me</div>
            

            
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className="about-container  ">
                    <div className='w-full py-5 text-white text-left  text-xl font-bold mt-10'>Tools know in percentages:</div>
                    <div className='grid grid-cols-2 gap-5'>
                        <div className="box">
                            <div className="shadow"></div>
                            <div className="content">
                                <div className="percent" data-text="HTML" style={htmlStyle}>
                                    <div className="dot"></div>
                                    <svg viewBox="0 0 140 140">
                                        {/* Outer Circle (SVG circle) */}
                                        <circle cx="70" cy="70" r="60" fill="transparent" stroke="#ff014f" strokeWidth="20"></circle>
                                        {/* Inner Circle (fill circle) */}
                                        <circle cx="70" cy="70" r="50" fill="#ff014f"></circle>
                                        {/* Progress Arc */}
                                        <circle
                                            cx="70"
                                            cy="70"
                                            r="60"
                                            fill="transparent"
                                            stroke="#ff014f"
                                            strokeWidth="20"
                                            strokeLinecap="round"
                                            strokeDasharray={`${percentage}, 100`}
                                        ></circle>
                                    </svg>
                                </div>
                                <div className="number">
                                    <h2>100<span>%</span></h2>
                                </div>
                            </div>
                        </div>

                        <div className="box">
                            <div className="shadow"></div>
                            <div className="content">
                                <div className="percent" data-text="CSS" style={cssStyle}>
                                    <div className="dot"></div>
                                    <svg viewBox="0 0 140 140">
                                        {/* Outer Circle (SVG circle) */}
                                        <circle cx="70" cy="70" r="60" fill="transparent" stroke="#ff014f" strokeWidth="20"></circle>
                                        {/* Inner Circle (fill circle) */}
                                        <circle cx="70" cy="70" r="50" fill="#ff014f"></circle>
                                        {/* Progress Arc */}
                                        <circle
                                            cx="70"
                                            cy="70"
                                            r="60"
                                            fill="transparent"
                                            stroke="#ff014f"
                                            strokeWidth="20"
                                            strokeLinecap="round"
                                            strokeDasharray={`${percentage}, 100`}
                                        ></circle>
                                    </svg>
                                </div>
                                <div className="number">
                                    <h2>90<span>%</span></h2>
                                </div>
                            </div>
                        </div>

                        <div className="box">
                            <div className="shadow"></div>
                            <div className="content">
                                <div className="percent" data-text="react" style={reactStyle}>
                                    <div className="dot"></div>
                                    <svg viewBox="0 0 140 140">
                                        {/* Outer Circle (SVG circle) */}
                                        <circle cx="70" cy="70" r="60" fill="transparent" stroke="#ff014f" strokeWidth="20"></circle>
                                        {/* Inner Circle (fill circle) */}
                                        <circle cx="70" cy="70" r="50" fill="#ff014f"></circle>
                                        {/* Progress Arc */}
                                        <circle
                                            cx="70"
                                            cy="70"
                                            r="60"
                                            fill="transparent"
                                            stroke="#ff014f"
                                            strokeWidth="20"
                                            strokeLinecap="round"
                                            strokeDasharray={`${percentage}, 100`}
                                        ></circle>
                                    </svg>
                                </div>
                                <div className="number">
                                    <h2>80<span>%</span></h2>
                                </div>
                            </div>
                        </div>

                        <div className="box">
                            <div className="shadow"></div>
                            <div className="content">
                                <div className="percent" data-text="JS" style={jsStyle}>
                                    <div className="dot"></div>
                                    <svg viewBox="0 0 140 140">
                                        {/* Outer Circle (SVG circle) */}
                                        <circle cx="70" cy="70" r="60" fill="transparent" stroke="#ff014f" strokeWidth="20"></circle>
                                        {/* Inner Circle (fill circle) */}
                                        <circle cx="70" cy="70" r="50" fill="#ff014f"></circle>
                                        {/* Progress Arc */}
                                        <circle
                                            cx="70"
                                            cy="70"
                                            r="60"
                                            fill="transparent"
                                            stroke="#ff014f"
                                            strokeWidth="20"
                                            strokeLinecap="round"
                                            strokeDasharray={`${percentage}, 100`}
                                        ></circle>
                                    </svg>
                                </div>
                                <div className="number">
                                    <h2>80<span>%</span></h2>
                                </div>
                            </div>
                        </div>

                        <div className="box">
                            <div className="shadow"></div>
                            <div className="content">
                                <div className="percent" data-text="express" style={expressStyle}>
                                    <div className="dot"></div>
                                    <svg viewBox="0 0 140 140">
                                        {/* Outer Circle (SVG circle) */}
                                        <circle cx="70" cy="70" r="60" fill="transparent" stroke="#ff014f" strokeWidth="20"></circle>
                                        {/* Inner Circle (fill circle) */}
                                        <circle cx="70" cy="70" r="50" fill="#ff014f"></circle>
                                        {/* Progress Arc */}
                                        <circle
                                            cx="70"
                                            cy="70"
                                            r="60"
                                            fill="transparent"
                                            stroke="#ff014f"
                                            strokeWidth="20"
                                            strokeLinecap="round"
                                            strokeDasharray={`${percentage}, 100`}
                                        ></circle>
                                    </svg>
                                </div>
                                <div className="number">
                                    <h2>50<span>%</span></h2>
                                </div>
                            </div>
                        </div>

                        <div className="box">
                            <div className="shadow"></div>
                            <div className="content">
                                <div className="percent" data-text="mongoDB" style={mongodbStyle}>
                                    <div className="dot"></div>
                                    <svg viewBox="0 0 140 140">
                                        {/* Outer Circle (SVG circle) */}
                                        <circle cx="70" cy="70" r="60" fill="transparent" stroke="#ff014f" strokeWidth="20"></circle>
                                        {/* Inner Circle (fill circle) */}
                                        <circle cx="70" cy="70" r="50" fill="#ff014f"></circle>
                                        {/* Progress Arc */}
                                        <circle
                                            cx="70"
                                            cy="70"
                                            r="60"
                                            fill="transparent"
                                            stroke="#ff014f"
                                            strokeWidth="20"
                                            strokeLinecap="round"
                                            strokeDasharray={`${percentage}, 100`}
                                        ></circle>
                                    </svg>
                                </div>
                                <div className="number">
                                    <h2>60<span>%</span></h2>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                   


                </div>
                <div>
                    <div className='w-full py-5 text-white text-left  text-xl font-bold mt-10 '>
                        My Educational Qualification
                    </div>
                    <div className="overflow-x-auto table-xs  table-my-edu">
                        <table className="table edu table-xs lg:text-xl">
                            {/* head */}
                            <thead className='text-xl lg:text-2xl t-header'>
                                <tr>

                                    <th>Subject/Degree</th>
                                    <th>Institution</th>
                                    <th>Year</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>

                                    <td>Statistics(Bsc,4th year)</td>
                                    <td>Chittagong University</td>
                                    <td>2018-present</td>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                    <th>HSC</th>
                                    <td>Cox's Bazer Govt College</td>
                                    <td>2018</td>

                                </tr>
                                {/* row 3 */}
                                <tr>
                                    <th>SSC</th>
                                    <td>GMC</td>
                                    <td> 2016</td>

                                </tr>
                            </tbody>
                        </table>
                        <div className='text-white mt-8 text-sm lg:text-lg nb'>
                            NB: Recently I complete the full stack web development couse from Programinng-hero where my mentor was Jhanker Mahbub.
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default AboutMe;
