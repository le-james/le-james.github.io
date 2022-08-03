import React from 'react'
import { Link } from 'react-router-dom';

import { AiOutlineRollback } from "react-icons/ai"

// cover images
// import od_cover from "../project_images/ekf_gps.png"

//CSS
import "../projects.css"

function PLC_project() {
    return (
        <div class="project_page">
            <Link to="/projects">
                <AiOutlineRollback class="back_icon" size="2em" />
            </Link>
            <div class="project-content">
                <div class="card in-card">
                    <div class="card__body">
                        {/* <img src={plc_cover} alt="orbits around earth"/> */}
                        <h2>Programmable Logic Controller (PLC) Box Sorting System</h2>
                        <p>Industrial Automation Course Project</p>
                        <ul>
                            <li>
                                <strong>Goal: </strong> Develop a conveyor box sorting system in FactoryIO that 
                                flips incoming boxes 180 degrees using a Siemens S7-1200 PLC
                            </li>
                            <li>
                                <strong>End result: </strong> Programmed the PLC using ladder logic to flip the boxes 
                                180 degrees and measures down the line to correct boxes that only flipped 90 degrees
                            </li>
                        </ul>
                    </div>
                    <div class="card__footer">
                        <Link to="/plc_project">
                            <h5>Read more</h5>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PLC_project