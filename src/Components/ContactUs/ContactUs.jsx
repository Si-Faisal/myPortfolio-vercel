import React from 'react';
import './Contact.css'
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';


const ContactUs = () => {
    return (
        <div id="Contact_me mt-10 mb-8">
            <section  className='mt-10'>

                <h1 className="section-header text-sm w-3/4 md:w-1/3 md:text-xl lg:text-4xl">Contact Me</h1>

                <div className="contact-wrapper flex flex-col md:flex-row md:p-0 lg:flex-row">


                    <div className="form-container">
                        <form className="form">
                            <div className="form-group">
                                <label for="text">Enter Your Name:</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div className="form-group">
                                <label for="email">Email</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className="form-group">
                                <label for="textarea">How Can i Help You? Tell me short description: </label>
                                <textarea placeholder='Message' name="textarea" id="textarea" rows="10" cols="50" required="">          </textarea>
                            </div>
                            <button className="form-submit-btn w-1/2 md:w-1/3" type="submit">Send</button>
                        </form>
                    </div>

                    {/* <!-- right contact page --> */}

                    <div className="direct-contact-container">

                        <ul className="contact-list">
                            <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">CHittagong,Bangladesh</span></i></li>

                            <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><a title="Give me a call">(+880) 1647456958</a></span></i></li>

                            <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:sifaisalcox@gmail.com" title="Send me an email">sifaisalcox@gmail.com</a></span></i></li>

                        </ul>

                        <hr />
                        <div className='relative w-full h-24'>
                            <div className="wrapper">
                                <ul className="flex justify-center sm:justify-start"> {/* Center the icons on mobile, align left on larger screens */}
                                    <li className="facebook">
                                        <a target='_blank' href="https://www.facebook.com/ShahidulIslamFaisal.cu.stat">
                                            <span className="text-sm sm:text-xl lg:text-4xl"> {/* Use smaller text on mobile, larger text on larger screens */}
                                                <FaFacebookF />
                                            </span>
                                        </a>
                                    </li>
                                    <li className="twitter">
                                        <a target='_blank' href="https://github.com/Si-Faisal">
                                            <span className="text-sm sm:text-xl lg:text-4xl">
                                                <FaGithub />
                                            </span>
                                        </a>
                                    </li>
                                    <li className="instagram">
                                        <a target='_blank' href="https://www.instagram.com/shaidul_islam_faisal/">
                                            <span className="text-sm sm:text-xl lg:text-4xl">
                                                <FaInstagram />
                                            </span>
                                        </a>
                                    </li>
                                    <li className="google">
                                        <a target='_blank' href="https://www.linkedin.com/in/shahidul-islam-faisal-686975198/">
                                            <span className="text-sm sm:text-xl lg:text-4xl">
                                                <FaLinkedinIn />
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>


                        <hr />

                        <div className="copyright mt-10">&copy; Si Faisal</div>

                    </div>

                </div>

            </section>
        </div>
    );
};

export default ContactUs;