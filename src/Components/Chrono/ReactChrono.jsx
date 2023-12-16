import React, { useEffect, useState } from 'react';
import './Reactchrono.css'


import { Chrono } from "react-chrono";
import html from '../../assets/logo/html.png'
import html1 from '../../assets/logo/html.png'
import css from '../../assets/logo/CSS.png'
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


const ReactChrono = () => {

    const [activeItem, setActiveItem] = useState(false);
    const [chronoMode, setChronoMode] = useState('VERTICAL');

    useEffect(() => {
        // Function to update the chrono mode based on window width
        const updateChronoMode = () => {
            const isMobile = window.innerWidth <= 600; // Change the width value as per your desired breakpoint
            setChronoMode(isMobile ? 'VERTICAL_ALTERNATING' : 'VERTICAL');
        };

        // Call the function when the component mounts
        updateChronoMode();

        // Call the function on window resize
        window.addEventListener('resize', updateChronoMode);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateChronoMode);
        };
    }, []);



    return (
        <div>
           

            <div className='skill header py-20 text-white'>
                <span className='sub-title'>Features</span>
                    <h1 className='title text-3xl lg:text-5xl lg:leading-tight'>My Technical Skills</h1>
            </div>
            
            <div className=' mx-auto grid grid-cols-1 lg:grid-cols-4 gap-2'>
                <div style={{ width: '100%', height: '100%' }} >
                    <Chrono



                        hideControls={true}
                        enableBreakPoint
                        verticalBreakPoint={600}

                        lineWidth={4}

                        scrollable
                        mode={chronoMode}
                        cardWidth={350}
                        cardHeight={150}
                        // contentDetailsHeight={100}
                        focusActiveItemOnLoad={true}
                        activeItemIndex={0}
                        slideShow
                        slideItemDuration={4500}
                        slideShowType="reveal"
                    >

                        

                            <div onClick={() => setActiveItem(true)} className="avatar flex flex-col text-center chrono-card">
                                <div className="w-32 rounded mx-auto">
                                    <img src={html} />

                                </div>
                                <h1 className='text-xl font-bold'>HTML</h1>
                                <p onMouseEnter={() => setActiveItem(true)}
                                    onMouseLeave={() => setActiveItem(false)}

                                    className={activeItem ? 'active' : ''}>I used html for show the visialization part of a site .</p>
                            </div>
                        
                        
                        <div onClick={() => setActiveItem(true)} className="avatar flex flex-col text-center chrono-card">
                            <div className="w-32 rounded mx-auto">
                                <img src={css} />

                            </div>
                            <h1 className='text-xl font-bold'>css</h1>
                            <p onMouseEnter={() => setActiveItem(true)}
                                onMouseLeave={() => setActiveItem(false)}

                                className={activeItem ? 'active' : ''}>I used the css for design the site as color,animation, size etc.</p>
                        </div>

                        

                        <div onClick={() => setActiveItem(true)} className="avatar flex flex-col text-center chrono-card">
                            <div className="w-32 rounded mx-auto">
                                <img src={bootstrap} />

                            </div>
                            <h1 className='text-xl font-bold'>Bootstrap</h1>
                            <p onMouseEnter={() => setActiveItem(true)}
                                onMouseLeave={() => setActiveItem(false)}

                                className={activeItem ? 'active' : ''}>This is css framwork which is most popular in web development.Using bootstrap provided me some awesome component.</p>
                        </div>
                        



                    </Chrono>
                </div>




                <div style={{ width: '100%', height: '100%' }} >
                    <Chrono



                        hideControls={true}
                        enableBreakPoint
                        verticalBreakPoint={600}

                        lineWidth={4}
                        mediaSettings={{ align: 'center', fit: 'contain' }}
                        mediaHeight={200}
                        scrollable
                        mode="VERTICAL"
                        cardWidth={250}
                        cardHeight={150}
                        contentDetailsHeight={100}
                        focusActiveItemOnLoad={true}
                        activeItemIndex={0}
                        slideShow
                        slideItemDuration={4500}
                        slideShowType="reveal"
                    >

                       
                            <div onClick={() => setActiveItem(true)} className="avatar flex flex-col text-center chrono-card">
                                <div className="w-32 rounded mx-auto">
                                    <img src={tailwind} />

                                </div>
                                <h1 className='text-xl font-bold'>Tailwind</h1>
                                <p onMouseEnter={() => setActiveItem(true)}
                                    onMouseLeave={() => setActiveItem(false)}

                                    className={activeItem ? 'active' : ''}>This is another popular css framework now.This framework provide more fixtures than bootstrap.</p>
                            </div>
                       
                       

                       

                        <div onClick={() => setActiveItem(true)} className="avatar flex flex-col text-center chrono-card">
                            <div className="w-32 rounded mx-auto">
                                <img src={netlify} />

                            </div>
                            <h1 className='text-xl font-bold'>Netlify</h1>
                            <p onMouseEnter={() => setActiveItem(true)}
                                onMouseLeave={() => setActiveItem(false)}

                                className={activeItem ? 'active' : ''}>I used this for deploy where there has some awesome fixture like as easly deploy , no time as cost</p>
                        </div>
                       

                        
                            <div onClick={() => setActiveItem(true)} className="avatar flex flex-col text-center chrono-card">
                                <div className="w-32 rounded mx-auto">
                                    <img src={vercel} />

                                </div>
                                <h1 className='text-xl font-bold'>Vercel</h1>
                                <p onMouseEnter={() => setActiveItem(true)}
                                    onMouseLeave={() => setActiveItem(false)}

                                    className={activeItem ? 'active' : ''}>Basically I used this for backend deploy.It's has fexture of front-end side deploy.</p>
                            </div>
                        
                       


                    </Chrono>
                </div>





                <div style={{ width: '100%', height: '100%' }} >
                    <Chrono

                        fontSizes={{
                            cardTitle: '30px',
                        }}
                        hideControls={true}
                        enableBreakPoint
                        verticalBreakPoint={600}

                        lineWidth={4}
                        mediaSettings={{ align: 'center', fit: 'contain' }}
                        mediaHeight={200}
                        scrollable
                        mode="VERTICAL"
                        cardWidth={250}
                        cardHeight={150}
                        contentDetailsHeight={100}
                        focusActiveItemOnLoad={true}
                        activeItemIndex={1}
                        slideShow
                        slideItemDuration={4500}
                        slideShowType="reveal"





                    >

                        <div onClick={() => setActiveItem(true)} className="avatar flex flex-col text-center chrono-card ">
                            <div className="w-32 rounded mx-auto">
                                <img src={js} />

                            </div>
                            <h1 className='text-xl font-bold'>Javascript</h1>
                            <p onMouseEnter={() => setActiveItem(true)}
                                onMouseLeave={() => setActiveItem(false)}

                                className={activeItem ? 'active' : ''}>Javascript is the most popular language in web development</p>
                        </div>
                        <div onClick={() => setActiveItem(true)} className="avatar flex flex-col text-center chrono-card">
                            <div className="w-32 rounded mx-auto">
                                <img src={ES6} />

                            </div>
                            <h1 className='text-xl font-bold'>Javascript ES6</h1>
                            <p onMouseEnter={() => setActiveItem(true)}
                                onMouseLeave={() => setActiveItem(false)}

                                className={activeItem ? 'active' : ''}>This is the update version of javascript where has update some wanderful fixture</p>
                        </div>

                        
                        <div onClick={() => setActiveItem(true)} className="avatar flex flex-col text-center chrono-card">
                            <div className="w-32 rounded mx-auto">
                                <img src={react} />

                            </div>
                            <h1 className='text-xl font-bold'>React</h1>
                            <p onMouseEnter={() => setActiveItem(true)}
                                onMouseLeave={() => setActiveItem(false)}

                                className={activeItem ? 'active' : ''}>Now React is most popular framwork in web development which is framework of javascript.</p>
                        </div>

                    </Chrono>
                </div>





                <div style={{ width: '100%', height: '100%' }} >
                    <Chrono

                        fontSizes={{
                            cardTitle: '30px',
                        }}
                        hideControls={true}
                        enableBreakPoint
                        verticalBreakPoint={600}

                        lineWidth={4}
                        mediaSettings={{ align: 'center', fit: 'contain' }}
                        mediaHeight={200}
                        scrollable
                        mode="VERTICAL"
                        cardWidth={250}
                        cardHeight={150}
                        contentDetailsHeight={100}
                        focusActiveItemOnLoad={true}
                        activeItemIndex={1}
                        slideShow
                        slideItemDuration={4500}
                        slideShowType="reveal"




                    >

                        <div onClick={() => setActiveItem(true)} className="avatar flex flex-col text-center chrono-card">
                            <div className="w-32 rounded mx-auto">
                                <img src={firebase} />

                            </div>
                            <h1 className='text-xl font-bold'>firebase</h1>
                            <p onMouseEnter={() => setActiveItem(true)}
                                onMouseLeave={() => setActiveItem(false)}

                                className={activeItem ? 'active' : ''}>It's give me fixtures of authorization and authincation</p>
                        </div>
                        <div onClick={() => setActiveItem(true)} className="avatar flex flex-col text-center chrono-card">
                            <div className="w-32 rounded mx-auto">
                                <img src={mongodb} />

                            </div>
                            <h1 className='text-xl font-bold'>MongoDB</h1>
                            <p onMouseEnter={() => setActiveItem(true)}
                                onMouseLeave={() => setActiveItem(false)}

                                className={activeItem ? 'active' : ''}>This is non-sql database Management which i used for save my data as client information.</p>
                        </div>
                        <div onClick={() => setActiveItem(true)} className="avatar flex flex-col text-center chrono-card">
                            <div className="w-32 rounded mx-auto">
                                <img src={mui} />

                            </div>
                            <h1 className='text-xl font-bold'>Material Ui</h1>
                            <p onMouseEnter={() => setActiveItem(true)}
                                onMouseLeave={() => setActiveItem(false)}

                                className={activeItem ? 'active' : ''}>Matrerial Ui is React framework which provide excellent fixture of component which i used to save my time and it's looks awesome</p>
                        </div>
                    </Chrono>
                </div>
            </div>
        </div>

    )
};

export default ReactChrono;