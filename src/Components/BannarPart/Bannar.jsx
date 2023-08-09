import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import './Bannar.css'
import mypic from '../../assets/img/mypic2.png'
import resumeFile from '../../assets/FaisalResume.pdf'
import { FaDownload } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';



const Bannar = () => {

    const handleDownloadResume = async () => {
        // try {
        //     const response = await fetch(resumeFile);
        //     const fileBlob = await response.blob();
        //     const fileURL = URL.createObjectURL(fileBlob);

        //     const link = document.createElement('a');
        //     link.href = fileURL;
        //     link.download = 'SiFaisalresume.pdf';
        //     link.click();

        //     // Clean up the URL object after the download is initiated
        //     URL.revokeObjectURL(fileURL);
        // } catch (error) {
        //     console.error('Error downloading resume:', error);
        // }

        window.open(resumeFile, '_blank');
    };
    return (
        <div className=' mx-auto  lg:mt-10'>
            <div className='flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-10 text-white  '>
                <div className='lg:col-span-7 mt-10 lg:ms-9'>

                    <span
                        
                        className='subtitle'>  Welcome to my world
                    </span>
                   
                        <h1 className='title text-3xl lg:text-5xl lg:leading-tight'> Hi I'm <br /> <span className='py-4'>Shahidul Islam Faisal</span>

                        </h1>
                    
                    <h2 className='animated-text'> 
                        <span style={{ color: 'white' }} className='animated-text text-3xl lg:text-4xl'>a
                            <Typewriter
                                words={[' Front-End-Developer', ' MERN Stack Developer', ' React Developer', ' Professional Coder']}
                                loop={false}
                                cursor
                                cursorStyle='__'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}

                            />
                        </span>
                    </h2>
                    
                   
                    <p className=' summary '>
                         
                            I am an experienced front-end developer with expertise in MERN stack development. I have a strong background in organizing and managing tasks effectively. I excel in breaking down complex projects into smaller, manageable parts, enabling me to tackle hard tasks with ease. With my skills and dedication, I strive to deliver high-quality and efficient solutions.
                       
                        </p>
                    
                    
                    <div>
                        <button onClick={handleDownloadResume} className="shadow__btn  mt-10 flex justify-center items-center" title="click to download"> <span className='mr-2'><FaDownload />   </span> Resume

                        </button>
                    </div>
                    <div className='social hidden lg:block'>
                        <span className='social-title'>Find with me</span>
                        <div className='social-icon relative mt-6'>
                            <ul>
                                <li>
                                    <a target='_blank' href="https://www.facebook.com/ShahidulIslamFaisal.cu.stat">
                                        <span><FaFacebookF /></span>
                                        <span> - Facebook</span>
                                    </a>
                                </li>
                                <li>
                                    <a target='_blank' href="https://github.com/Si-Faisal">
                                        <span><FaGithub /></span>
                                        <span> - GitHub</span>
                                    </a>
                                </li>
                                <li>
                                    <a target='_blank' href="https://www.linkedin.com/in/shahidul-islam-faisal-686975198/">
                                        <span><FaLinkedinIn /></span>
                                        <span> - LinkedIn</span>
                                    </a>
                                </li>
                                <li>
                                    <a target='_blank' href="https://www.instagram.com/shaidul_islam_faisal/">
                                        <span><FaInstagram /></span>
                                        <span> - Instagram</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='lg:col-span-5 w-full'>
                    <div className='imagebgstyle'>
                        <div
                           
                            className=' mypic'>
                          <img className='w-full h-full' src={mypic} alt='' /> 
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Bannar;