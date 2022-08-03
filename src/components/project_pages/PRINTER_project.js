import React from 'react'
import { Link } from 'react-router-dom';

import { AiOutlineRollback } from "react-icons/ai"

// cover images
// import od_cover from "../project_images/ekf_gps.png"

//CSS
import "../projects.css"

function PRINTER_project() {
    return (
        <div class="project_page">
            <Link to="/projects">
                <AiOutlineRollback class="back_icon" size="2em" />
            </Link>
            <div class="project-content">
                <div class="card in-card">
                    <div class="card__body">
                        {/* <img src={printer_cover} alt="orbits around earth"/> */}
                        <h2>3D Printer Project</h2>
                        <p>Built a 3D printer from stratch</p>
                        <ul>
                            <li>
                                Designed parts for the custom 3D printer in Siemens NX 10 and 3D printed them (Using a 3D printer to build a 3D printer) 
                            </li>
                            <li>
                                Assembled the frame, motors and electronics together 
                            </li>
                            <li>
                                Sourced components, hardware and electronics from various suppliers
                            </li>
                            <li>
                                Documented purchases in a bill of materials
                            </li>
                        </ul>
                    </div>
                    <div class="card__footer">
                        <Link to="/printer_project">
                            <h5>Read more</h5>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PRINTER_project