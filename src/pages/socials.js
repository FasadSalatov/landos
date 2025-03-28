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
                className="content col-12 d-flex align-items-center flex-column flex-md-row justify-content-center"
                variants={textAnimation}
            >
                <motion.div
                    className="links d-flex flex-column align-items-center align-items-md-start justify-center justify-md-start align-md-items-start col-12 col-md-4 gap-3"
                    variants={textAnimation}
                >
                    <motion.h1 
                        className='d-flex justify-start text-start w-fit flex-column'
                        variants={textAnimation}
                    >
                        links
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

                <motion.img 
                    src={socimg} 
                    className='col-md-5 col-10 mt-5 mt-md-0'
                    variants={cardAnimation}
                />
            </motion.div>
        </motion.div>
    );
}

export default withPageTransition(Socials);
