import React from 'react';
import './css/about.css';
import onesec from './img/onesec.png';
import twosec from './img/twosec.png';
import threesec from './img/threesec.png';
import foursec from './img/foursec.png';
import fivesec from './img/fivesec.png';
function About() {
    const scrollToNextSection = () => {
        const nextSection = document.querySelector('.section.two');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className="about-container">
            <div className="section one">
                <div className="content">
                    <h1 className='fs'>about us</h1>
                    <div className="scroll-down" onClick={scrollToNextSection}>
                        <span>▼</span>
                    </div>
                </div>
            </div>
            <div className="section two">
                <div className="content d-flex flex-column align-items-center col-lg-5 col-12 ">
                    <img src={onesec} width={100}/>
                    <h1>TBCC's mission is to contribute to the development of the TON blockchain ecosystem through the creation, launch and promotion of new tokens and coins.</h1>
                    <p> We strive to provide teams and startups with simple and effective tools to create their own cryptocurrencies, supporting them at all stages — from development to listing on exchanges and marketing support.</p>

                </div>
            </div>
            <div className="section three">
                <div className="content d-flex flex-column align-items-center col-lg-4 col-12 ">
                    <img src={twosec} width={100}/>
                    <h1>The main objectives of the TBCC mission are</h1>
                    <p> To simplify the process of creating tokens:</p>
                    <pp>
                        Providing affordable and simple tools for creating and managing tokens based on the TON blockchain.
                    </pp>
                </div>
            </div>
            <div className="section four">
                <div className="content d-flex flex-column align-items-center col-lg-4 col-12 ">
                    <img src={threesec} width={100}/>
                    <h1>Stimulating growth and innovation:</h1>
                    <p>Supporting new projects and teams creating unique solutions on the TON blockchain.</p>

                </div>
            </div>
            <div className="section five">
                <div className="content d-flex flex-column align-items-center col-lg-4 col-12 ">
                    <img src={foursec} width={100}/>
                    <h1>Education and Partnership:</h1>
                    <p>Training and consultations for startups, investors and communities contributing to the development of the blockchain space.</p>

                </div>
            </div>
            <div className="section six">
                <div className="content d-flex flex-column align-items-center col-lg-4 col-12 ">
                    <img src={fivesec} width={100}/>
                    <h1>Development of the TON ecosystem:</h1>
                    <p>Creation of active and sustainable communities aimed at the growth and popularization of the TON blockchain through the launch of successful cryptocurrency projects.</p>

                </div>
            </div>
            <div className="section seven">
                <div className="content d-flex flex-column align-items-center col-lg-4 col-12 ">

                    <h2 className='asher'>Our mission is to make the world of blockchain more accessible, efficient and open to everyone.</h2>

                </div>
            </div>
        </div>
    );
}

export default About;
