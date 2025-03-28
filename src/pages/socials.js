import React from 'react';
import './css/soc.css';
import { motion } from 'framer-motion';
import { withPageTransition, cardAnimation, textAnimation } from '../animations';
import socimg from './img/imgsoc.png';
import { Link } from "react-router-dom";

function Socials() {
    return (
        <motion.div 
            className="soc-container d-flex align-items-center"
            initial="initial"
            animate="animate"
            variants={cardAnimation}
        >
            <motion.div 
                className="content col-12 d-flex align-items-center justify-content-center flex-column flex-md-row"
                variants={textAnimation}
            >
                <motion.div
                    className="links d-flex flex-column align-items-center justify-content-center col-12 col-md-4 gap-3"
                    variants={textAnimation}
                >
                    <motion.h1 
                        className='d-flex justify-content-center text-center w-fit'
                        variants={textAnimation}
                    >
                        socials
                    </motion.h1>
                    <motion.div 
                        className="d-flex flex-column align-items-center gap-3"
                        variants={textAnimation}
                    >
                        <Link 
                            to="https://t.me/tbcc_coin"
                            className="footLink"
                        >
                            telegram
                        </Link>
                    </motion.div>
                </motion.div>
                <motion.div 
                    className="video-container col-12 col-md-8 d-flex justify-content-center align-items-center"
                    variants={cardAnimation}
                >
                    <img src={socimg} alt="socials" className="video"/>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default withPageTransition(Socials);
