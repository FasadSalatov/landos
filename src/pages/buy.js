import React from 'react';
import './css/soc.css';
import socimg from './img/imgsoc.png';
import {Link} from "react-router-dom";
function Buy() {
    return (
        <div className="soc-container d-flex align-items-center">
            <div className="content col-12 d-flex align-items-center justify-content-center">

                <div className="links d-flex flex-column align-items-center align-items-md-start justify-center justify-md-start align-md-items-start col-12 col-md-8 gap-3">
                    <h1 className='d-flex justify-start text-start w-fit'>buy</h1>
                    <Link
                        to="/contact"
                        className="text-light footLink"
                    >
                        project
                    </Link>
                    <Link
                        to="/contact"
                        className="text-light footLink"
                    >
                        telegram
                    </Link>
                    <Link
                        to="/contact"
                        className="text-light footLink"
                    >
                        purchase
                    </Link> <Link
                    to="/contact"
                    className="text-light footLink"
                >
                    whitepepper
                </Link>

                </div>

            </div>
        </div>
    );
}

export default Buy;
