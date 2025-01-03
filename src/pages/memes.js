import React from 'react';
import './css/memes.css';
import mem1 from './img/memes/1.png';
import mem2 from './img/memes/2.png';
import mem3 from './img/memes/3.png';
import mem4 from './img/memes/4.png';
import mem5 from './img/memes/5.png';
import mem6 from './img/memes/6.png';
import mem7 from './img/memes/7.png';
import mem8 from './img/memes/8.png';

function Memes() {
    return (
        <div className="memes-container p-2 p-md-5">
            <h1 className="title text-center text-md-start">memes</h1>
            <div className="memes-grid">
                <img src={mem1} alt="meme 1" />
                <img src={mem2} alt="meme 2" />
                <img src={mem3} alt="meme 3" />
                <img src={mem4} alt="meme 4" />
                <img src={mem5} alt="meme 5" />
                <img src={mem6} alt="meme 6" />
                <img src={mem7} alt="meme 7" />
                <img src={mem8} alt="meme 8" />
            </div>
        </div>
    );
}

export default Memes;
