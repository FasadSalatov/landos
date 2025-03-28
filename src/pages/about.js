import React from 'react';
import './css/about.css';
import { motion } from 'framer-motion';
import { withPageTransition, cardAnimation, textAnimation } from '../animations';
import onesec from './img/onesec.png';
import twosec from './img/twosec.png';
import threesec from './img/threesec.png';
import foursec from './img/foursec.png';
import fivesec from './img/fivesec.png';

function About() {
    const scrollToNextSection = () => {
        const sections = document.querySelectorAll('.section');
        const currentSection = document.querySelector('.section.active');
        const currentIndex = Array.from(sections).indexOf(currentSection);
        if (currentIndex < sections.length - 1) {
            sections[currentIndex + 1].scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.div 
            className="about-container"
            initial="initial"
            animate="animate"
            variants={cardAnimation}
        >
            <motion.div 
                className="section one"
                variants={textAnimation}
            >
                <motion.div 
                    className="content"
                    variants={textAnimation}
                >
                    <motion.h1 
                        className='fs'
                        variants={textAnimation}
                    >
                        about us
                    </motion.h1>
                    <motion.div 
                        className="scroll-down" 
                        onClick={scrollToNextSection}
                        variants={cardAnimation}
                    >
                        <span>▼</span>
                    </motion.div>
                </motion.div>
            </motion.div>

            <motion.div 
                className="section two"
                variants={textAnimation}
            >
                <motion.div 
                    className="content d-flex flex-column align-items-center col-lg-5 col-12"
                    variants={textAnimation}
                >
                    <motion.img 
                        src={onesec} 
                        width={100}
                        variants={cardAnimation}
                    />
                    <motion.h1 variants={textAnimation}>
                        TBCC's mission is to contribute to the development of the TON blockchain ecosystem through the creation, launch and promotion of new tokens and coins.
                    </motion.h1>
                    <motion.p variants={textAnimation}>
                        We strive to provide teams and startups with simple and effective tools to create their own cryptocurrencies, supporting them at all stages — from development to listing on exchanges and marketing support.
                    </motion.p>
                </motion.div>
            </motion.div>

            <motion.div 
                className="section three"
                variants={textAnimation}
            >
                <motion.div 
                    className="content d-flex flex-column align-items-center col-lg-4 col-12"
                    variants={textAnimation}
                >
                    <motion.img 
                        src={twosec} 
                        width={100}
                        variants={cardAnimation}
                    />
                    <motion.h1 variants={textAnimation}>
                        The main objectives of the TBCC mission are
                    </motion.h1>
                    <motion.p variants={textAnimation}>
                        To simplify the process of creating tokens:
                    </motion.p>
                    <motion.pp variants={textAnimation}>
                        Providing affordable and simple tools for creating and managing tokens based on the TON blockchain.
                    </motion.pp>
                </motion.div>
            </motion.div>

            <motion.div 
                className="section four"
                variants={textAnimation}
            >
                <motion.div 
                    className="content d-flex flex-column align-items-center col-lg-4 col-12"
                    variants={textAnimation}
                >
                    <motion.img 
                        src={threesec} 
                        width={100}
                        variants={cardAnimation}
                    />
                    <motion.h1 variants={textAnimation}>
                        Stimulating growth and innovation:
                    </motion.h1>
                    <motion.p variants={textAnimation}>
                        Supporting new projects and teams creating unique solutions on the TON blockchain.
                    </motion.p>
                </motion.div>
            </motion.div>

            <motion.div 
                className="section five"
                variants={textAnimation}
            >
                <motion.div 
                    className="content d-flex flex-column align-items-center col-lg-4 col-12"
                    variants={textAnimation}
                >
                    <motion.img 
                        src={foursec} 
                        width={100}
                        variants={cardAnimation}
                    />
                    <motion.h1 variants={textAnimation}>
                        Education and Partnership:
                    </motion.h1>
                    <motion.p variants={textAnimation}>
                        Training and consultations for startups, investors and communities contributing to the development of the blockchain space.
                    </motion.p>
                </motion.div>
            </motion.div>

            <motion.div 
                className="section six"
                variants={textAnimation}
            >
                <motion.div 
                    className="content d-flex flex-column align-items-center col-lg-4 col-12"
                    variants={textAnimation}
                >
                    <motion.img 
                        src={fivesec} 
                        width={100}
                        variants={cardAnimation}
                    />
                    <motion.h1 variants={textAnimation}>
                        Development of the TON ecosystem:
                    </motion.h1>
                    <motion.p variants={textAnimation}>
                        Creation of active and sustainable communities aimed at the growth and popularization of the TON blockchain through the launch of successful cryptocurrency projects.
                    </motion.p>
                </motion.div>
            </motion.div>

            <motion.div 
                className="section seven"
                variants={textAnimation}
            >
                <motion.div 
                    className="content d-flex flex-column align-items-center col-lg-4 col-12"
                    variants={textAnimation}
                >
                    <motion.h2 
                        className='asher'
                        variants={textAnimation}
                    >
                        Our mission is to make the world of blockchain more accessible, efficient and open to everyone.
                    </motion.h2>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default withPageTransition(About);
