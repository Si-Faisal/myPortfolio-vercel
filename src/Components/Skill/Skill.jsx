import React from 'react';
import './Skill.css'
import html from '../../assets/logo/html.png'
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

const Skill = () => {
    return (
        <div id='#Skill' className='skill-part'>
            <div className='skill header py-20 text-white'>
                <span className='sub-title'>Features</span>
                <h1 className='title'>What Skill I Have</h1>
            </div>
            <div className='grid grid-cols-5 gap-4 '>
                <div className="card">
                    <img className='img' src={html} alt="" />
                    <div className="textBox">
                        <p className="text head">Ethereum</p>
                        <span>Cryptocurrency</span>
                        <p className="text price">1.654,34€</p>
                    </div>
                </div>
                <div className="card">
                    <img className='img' src={css} alt="" />
                    <div className="textBox">
                        <p className="text head">Ethereum</p>
                        <span>Cryptocurrency</span>
                        <p className="text price">1.654,34€</p>
                    </div>
                </div>
                <div className="card">
                    <img className='img' src={js} alt="" />
                    <div className="textBox">
                        <p className="text head">Ethereum</p>
                        <span>Cryptocurrency</span>
                        <p className="text price">1.654,34€</p>
                    </div>
                </div>
                <div className="card">
                    <img className='img' src={ES6} alt="" />
                    <div className="textBox">
                        <p className="text head">Ethereum</p>
                        <span>Cryptocurrency</span>
                        <p className="text price">1.654,34€</p>
                    </div>
                </div>
                <div className="card">
                    <img className='img' src={react} alt="" />
                    <div className="textBox">
                        <p className="text head">Ethereum</p>
                        <span>Cryptocurrency</span>
                        <p className="text price">1.654,34€</p>
                    </div>
                </div>
                <div className="card">
                    <img className='img' src={firebase} alt="" />
                    <div className="textBox">
                        <p className="text head">Ethereum</p>
                        <span>Cryptocurrency</span>
                        <p className="text price">1.654,34€</p>
                    </div>
                </div>
                <div className="card">
                    <img className='img' src={tailwind} alt="" />
                    <div className="textBox">
                        <p className="text head">Ethereum</p>
                        <span>Cryptocurrency</span>
                        <p className="text price">1.654,34€</p>
                    </div>
                </div>
                <div className="card">
                    <img className='img' src={bootstrap} alt="" />
                    <div className="textBox">
                        <p className="text head">Ethereum</p>
                        <span>Cryptocurrency</span>
                        <p className="text price">1.654,34€</p>
                    </div>
                </div>
                <div className="card">
                    <img className='img' src={mongodb} alt="" />
                    <div className="textBox">
                        <p className="text head">Ethereum</p>
                        <span>Cryptocurrency</span>
                        <p className="text price">1.654,34€</p>
                    </div>
                </div>
                <div className="card">
                    <img className='img' src={netlify} alt="" />
                    <div className="textBox">
                        <p className="text head">Ethereum</p>
                        <span>Cryptocurrency</span>
                        <p className="text price">1.654,34€</p>
                    </div>
                </div>
                <div className="card">
                    <img className='img' src={vercel} alt="" />
                    <div className="textBox">
                        <p className="text head">Ethereum</p>
                        <span>Cryptocurrency</span>
                        <p className="text price">1.654,34€</p>
                    </div>
                </div>
                <div className="card">
                    <img className='img' src={mui} alt="" />
                    <div className="textBox">
                        <p className="text head">Ethereum</p>
                        <span>Cryptocurrency</span>
                        <p className="text price">1.654,34€</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Skill;