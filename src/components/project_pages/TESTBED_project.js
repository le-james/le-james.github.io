import React from 'react'
import { Link } from 'react-router-dom';

import { AiOutlineRollback } from "react-icons/ai"

// cover images
// import od_cover from "../project_images/ekf_gps.png"

//CSS
import "../projects.css"

function TESTBED_project() {
    return (
        <div class="project_page">
            <Link to="/projects">
                <AiOutlineRollback class="back_icon" size="2em" />
            </Link>
            <div class="project-content">
                <div class="card in-card">
                    <div class="card__body">
                        {/* <img src={testbed_cover} alt="orbits around earth"/> */}
                        <h2>3 Degrees of Freedom Small Satellite Testbed</h2>
                        <p>
                            Developing the navigation, controls and software architecture using a RPI for a robot that 
                            maneuvers on an air bearing platform (Think of air hockey but the puck is a robot), sensibly 
                            called a Floatbot.
                        </p>
                        <ul>
                            <li>
                                Using Marvelmind Indoor GPS and MPU6050 for localization
                            </li>
                            <li>
                                <a href="https://github.com/le-james/floatbot" target="_blank" rel="noopener noreferrer"> 
                                    View Project
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="card__footer">
                        <Link to="/testbed_project">
                            <h5>Read more</h5>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TESTBED_project