import React from "react";
import "./css/Roadmap.css";

const Roadmap = () => {
    return (
        <div className="roadmap-section">
            <div className="roadmap-content">
                <ul className="roadmap-list">
                    <li className="roadmap-step">
                        <div className="step-marker" style={{ backgroundColor: "#FFD700" }}></div>
                        <div className="step-content">
                            <h3>1 step</h3>
                            <p>
                                The TBC story can be presented as an evolution of idea and
                                implementation, reflecting the team's commitment to develop and
                                promote the TON ecosystem through the creation of innovative
                                tokenization solutions.
                            </p>
                        </div>
                    </li>
                    <li className="roadmap-step">
                        <div className="step-marker" style={{ backgroundColor: "#FF69B4" }}></div>
                        <div className="step-content">
                            <h3>2 step</h3>
                            <p>
                                The TBC story can be presented as an evolution of idea and
                                implementation, reflecting the team's commitment to develop and
                                promote the TON ecosystem through the creation of innovative
                                tokenization solutions.
                            </p>
                        </div>
                    </li>
                    <li className="roadmap-step">
                        <div className="step-marker" style={{ backgroundColor: "#9370DB" }}></div>
                        <div className="step-content">
                            <h3>3 step</h3>
                            <p>
                                The TBC story can be presented as an evolution of idea and
                                implementation, reflecting the team's commitment to develop and
                                promote the TON ecosystem through the creation of innovative
                                tokenization solutions.
                            </p>
                        </div>
                    </li>
                    <li className="roadmap-step">
                        <div className="step-marker" style={{ backgroundColor: "#00FA9A" }}></div>
                        <div className="step-content">
                            <h3>4 step</h3>
                            <p>
                                The TBC story can be presented as an evolution of idea and
                                implementation, reflecting the team's commitment to develop and
                                promote the TON ecosystem through the creation of innovative
                                tokenization solutions.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Roadmap;
