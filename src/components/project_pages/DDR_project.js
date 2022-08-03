import React from 'react'
import { Link } from 'react-router-dom';

import { AiOutlineRollback } from "react-icons/ai"

// cover images
// import od_cover from "../project_images/ekf_gps.png"

//CSS
import "../projects.css"

function DDR_project() {
    return (
        <div class="projects">
            <Link to="/projects">
                <AiOutlineRollback class="header_icon" size="2em" />
            </Link>
            <div class="project-container">
                <div class="card in-card">
                    <div class="card__body">
                        {/* <img src={ddr_cover} alt="orbits around earth"/> */}
                        <h2>Differential Drive Robot (DDR) Trajectory Optimization</h2>
                        <p>Learned how to use IPOPT (Nonlinear optimization software) in Julia programming language</p>
                        <ul>
                            <li>
                                Used the kinematics of a DDR to generate a simple trajectory that avoids a known obstacle
                            </li>
                            <li>
                                <a href="https://github.com/le-james/differential-drive-robot" target="_blank" 
                                rel="noopener noreferrer"> 
                                    View Project
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="card__footer">
                        <Link to="/ddr_project">
                            <h5>Read more</h5>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DDR_project