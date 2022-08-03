import React from 'react'
import { Link } from 'react-router-dom';

import { AiOutlineRollback } from "react-icons/ai"

// cover images
import rpod_cover from "../project_images/rpod/inbound_glideslope.png"

//CSS
import "../projects.css"

function RPOD_project() {
    return (
        <div class="projects">
            <Link to="/projects">
                <AiOutlineRollback class="header_icon" size="2em" />
            </Link>
            <div class="project-container">
                <div class="card in-card">
                    <div class="card__body">
                        <img src={rpod_cover} alt="annotated orbits around earth"/>
                        <h2>RPOD</h2>
                        <p>
                            sdfakjdslkfj;dsfa
            
                        </p>
                    </div>
                </div>
            </div>

            <div className='project_footer'>
                    Last updated: Aug 2, 2022
            </div>
        </div>




        
        // <div class="project_page">
        //     <Link to="/projects">
        //         <AiOutlineRollback class="back_icon" size="2em" />
        //     </Link>
        //     <div class="project-content">
        //     <div class="card in-card">
        //             <div class="card__body">
        //                 {/* <img src={rpod_cover} alt="plot of waypoints"/> */}
        //                 <h2>Spacecraft Rendezvous, Proximity Operations and Docking (RPOD) Guidance</h2>
        //                 <p>
        //                     Developing a simulation of RPOD of a spacecraft using the General Multi-pulse 
        //                     Glideslope Transfer in MATLAB.
        //                 </p>
        //                 <p>
        //                     The General Multi-pulse Glideslope Transfer is based on the Clohessy-Whiltshire
        //                     Equations
        //                 </p>
        //                 <ul>
        //                     <li>
        //                         <a href="https://github.com/le-james/general-glideslope-spacecraft-guidance" 
        //                         target="_blank" rel="noopener noreferrer"> 
        //                             View Project
        //                         </a>
        //                     </li>
        //                 </ul>
        //             </div>
        //             <div class="card__footer">
        //                 <Link to="/rpod_project">
        //                     <h5>Read more</h5>
        //                 </Link>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default RPOD_project