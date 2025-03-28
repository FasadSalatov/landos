import React from 'react';
import './css/soc.css';
import { motion } from 'framer-motion';
import { withPageTransition, cardAnimation, textAnimation } from '../animations';
import { Link } from "react-router-dom";
import video from './img/video.mp4';

function Buy() {
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
                    className="links d-flex flex-column align-items-center align-items-md-start justify-center justify-md-start align-md-items-start col-12 col-md-8 gap-3"
                    variants={textAnimation}
                >
                    <motion.h1 
                        className='d-flex justify-start text-start w-fit'
                        variants={textAnimation}
                    >
                        buy
                    </motion.h1>
                    <motion.div variants={textAnimation}>
                        <Link to="https://www.xt.com/en/trade/tbcc_usdt" className="text-light footLink">
                            xt
                        </Link>
                    </motion.div>
                    <motion.div variants={textAnimation}>
                        <Link to="https://www.bitmart.com/trade/en-US?symbol=TBCC_USDT&r=PjkAFy&type=spot" className="text-light footLink">
                            bitmart
                        </Link>
                    </motion.div>
                    <motion.div variants={textAnimation}>
                        <Link to="https://hamsterkombatgame.io/" className="text-light footLink">
                            project
                        </Link>
                    </motion.div>
                    <motion.div variants={textAnimation}>
                        <Link to="https://t.me/tbcc_coin" className="text-light footLink">
                            telegram
                        </Link>
                    </motion.div>
                    <motion.div variants={textAnimation}>
                        <Link to="https://x.com/tbcc_coin" className="text-light footLink">
                            twitter
                        </Link>
                    </motion.div>
                    <motion.div variants={textAnimation}>
                        <Link to="/contact" className="text-light footLink">
                            whitepepper
                        </Link>
                    </motion.div>
                </motion.div>

                <motion.div 
                    className="col-2 video d-flex align-items-center justify-content-start"
                    variants={cardAnimation}
                >
                    <video
                        src={video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                    />
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default withPageTransition(Buy);
