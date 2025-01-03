import React from 'react';
import './css/soc.css';
import { Link } from "react-router-dom";
import video from './img/video.mp4';

function Buy() {
    return (
        <div className="soc-container d-flex align-items-center ">
            <div className="content col-12 d-flex align-items-center justify-content-center flex-column flex-md-row">
                <div className="links d-flex flex-column align-items-center align-items-md-start justify-center justify-md-start align-md-items-start col-12 col-md-8 gap-3">
                    <h1 className='d-flex justify-start text-start w-fit'>buy</h1>
                    <Link to="https://www.xt.com/en/trade/tbcc_usdt" className="text-light footLink">
                        xt
                    </Link>
                    <Link to="https://www.bitmart.com/trade/en-US?symbol=TBCC_USDT&r=PjkAFy&type=spot" className="text-light footLink">
                        bitmart
                    </Link>
                    <Link to="https://hamsterkombatgame.io/" className="text-light footLink">
                        project
                    </Link>
                    <Link to="https://t.me/tbcc_coin" className="text-light footLink">
                        telegram
                    </Link>
                    <Link to="https://x.com/tbcc_coin" className="text-light footLink">
                        twitter
                    </Link>
                    <Link to="/contact" className="text-light footLink">
                        whitepepper
                    </Link>
                </div>

                <div className="col-2 video d-flex align-items-center justify-content-start">
                    <video
                        src={video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}

                    />
                </div>
            </div>
        </div>
    );
}

export default Buy;
