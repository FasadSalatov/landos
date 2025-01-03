import React from 'react';
import './css/soc.css';
import socimg from './img/imgsoc.png';
import {Link} from "react-router-dom";
function Socials() {
    return (
        <div className="soc-container d-flex align-items-center">
            <div className="content col-12 d-flex align-items-center flex-column flex-md-row justify-content-center">

                <div
                    className="links d-flex flex-column align-items-center align-items-md-start justify-center justify-md-start align-md-items-start col-12 col-md-4 gap-3">
                    <h1 className='d-flex justify-start text-start w-fit flex-column'>links</h1>
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
                <img src={socimg} className='col-md-5 col-10 mt-5 mt-md-0'/>

            </div>
        </div>
    );
}

export default Socials;
