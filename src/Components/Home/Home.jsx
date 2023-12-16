import React, { useEffect, useState } from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { FaArrowUp } from 'react-icons/fa';
import logogif from '../../assets/img/tslogo.gif'
import Bannar from '../BannarPart/Bannar';
import ReactChrono from '../Chrono/ReactChrono';
import Projects from '../Projects/Projects';
import ContactUs from '../ContactUs/ContactUs';
import AboutMe from '../AboutMe/AboutMe';
import CssTimeLineMulti from '../Chrono/CssTimeLineMulti';
import Verticaltimeline from '../VerticalTimeline/Verticaltimeline';




const Home = () => {
    const [activeLink, setActiveLink] = useState('');
    const [showArrowUp, setShowArrowUp] = useState(false);

  
    const handleScroll = () => {
        if (window.scrollY > 200) {
            setShowArrowUp(true);
        } else {
            setShowArrowUp(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    const navlink = () => {
        const links = ['Home', 'Skill', 'Projects', 'About', 'Contact Me'];

        return links.map((link, index) => (
            <li key={index}>
                <ScrollLink
                    to={link.toLowerCase()}
                    smooth={true}
                    duration={100}
                    spy={true}
                    offset={-120} // Adjust the offset value as per your header height
                    onClick={() => handleLinkClick(link)}
                    className={activeLink === link ? 'active' : ''}
                >
                    {link}
                </ScrollLink>
            </li>
        ));
    };


    return (
        <div className='container mx-auto px-6 lg:px-10 scroll-smooth'>
            <div className="navbar text-white  justify-between nav-blur pt-5 sticky top-0 z-50">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-white rounded-box w-52"
                        >
                            {navlink()}
                        </ul>
                    </div>
                    <div className="w-32 rounded-full">
                        <img src={logogif} alt="Logo" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlink()}
                    </ul>
                </div>
            </div>

             <div className="section" id="home">
                <Bannar></Bannar>
            </div>
            <hr className='border-black mt-7' />

            {showArrowUp && (
                <div className="fixed bottom-10  arrow-up p-4 rounded-full z-10 right-10 cursor-pointer" onClick={scrollToTop}>
                    <FaArrowUp size={30} color="white" />
                </div>
            )}

            

            <div className="section" id="skill">
            <div className='skill header py-20 text-white'>
                <span className='sub-title'>Features</span>
                    <h1 className='title text-3xl lg:text-5xl lg:leading-tight'>My Technical Skills</h1>
            </div>
                {/* <ReactChrono></ReactChrono> */}
                <div className='hidden md:block'>
                   <CssTimeLineMulti></CssTimeLineMulti>
                </div>
                <div className='block md:hidden'>
                <Verticaltimeline></Verticaltimeline>

                </div>
                
               
            </div>

            <div className="section" id="projects">
                <Projects></Projects>
            </div>
            <div className="section" id="about">
                <AboutMe></AboutMe>
            </div>

            <div className="section mt-7" id="contact me">
                <ContactUs></ContactUs>

            </div>

        </div>
    );
};

export default Home;
