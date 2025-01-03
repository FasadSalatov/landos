import React from 'react';
import './css/main.css';

function Main() {
    return (
        <div className="main-container d-flex align-items-center justify-content-center text-center">
            <div className="content">
                <div className="tags mb-3">
                    <span className="badge bg-secondary me-2">TON blockchain</span>
                    <span className="badge bg-secondary me-2">Education</span>
                    <span className="badge bg-secondary">Partnership</span>
                </div>
                <h1 className="title">Token Builder & Coin Creator</h1>
            </div>
        </div>
    );
}

export default Main;
