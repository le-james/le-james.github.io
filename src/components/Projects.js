import React from 'react'
import { Link } from 'react-router-dom';

import { AiFillHome } from "react-icons/ai"

// cover images
import od_cover from "./project_images/od/ekf_gps.png"
import rpod_cover from "./project_images/rpod/inbound_glideslope.png"
import testbed_cover from "./project_images/testbed/testbed.jpg"
import ddr_cover from "./project_images/ddr/simple-traj-obs-avoidance.gif"
import printer_cover from "./project_images/3d_printer/3d-printer.gif"
// import plc_cover from "./project_images/plc/plc.gif"

//CSS
import "./projects.css"

function Projects() {
    return (
        <div class="projects">
            <Link to="/">
                <AiFillHome class="header_icon" size="2em" />
            </Link>
            <div class="project-container">
            <div class="card">
                    <div class="card__body">
                        <img src={od_cover} alt="orbits around earth"/>
                        <h2>Orbit Determination</h2>
                        <p>
                            Nonlinear state estimation of a spacecraft in orbit using an Extended Kalman Filter
                        </p>
                    </div>
                    <div class="card__footer">
                        <Link className='reg_link' to="/od_project">
                            <hr/>
                            <h5>Read more</h5>
                        </Link>
                    </div>
                </div>

                <div class="card">
                    <div class="card__body">
                        <img src={rpod_cover} alt="plot of waypoints"/>
                        <h2>Spacecraft Rendezvous, Proximity Operations and Docking (RPOD) Guidance</h2>
                        <p>
                            Simulation of RPOD based on the Clohessy-Whiltshire Equations.
                        </p>
                    </div>
                    <div class="card__footer">
                        <Link className='reg_link' to="/rpod_project">
                            <hr/>
                            <h5>Read more</h5>
                        </Link>
                    </div>
                </div>

                <div class="card">
                    <div class="card__body">
                        <img src={testbed_cover} alt="orbits around earth"/>
                        <h2>3 Degrees of Freedom Small Satellite Testbed</h2>
                        <p>
                            Developing the navigation, controls and software architecture.
                        </p>
                    </div>
                    <div class="card__footer">
                        <Link className='reg_link' to="/testbed_project">
                            <hr/>
                            <h5>Read more</h5>
                        </Link>
                    </div>
                </div>


                <div class="card">
                    <div class="card__body">
                        <img src={ddr_cover} alt="orbits around earth"/>
                        <h2>Differential Drive Robot (DDR) Trajectory Optimization</h2>
                        <p>Learned how to use IPOPT (Nonlinear optimization software) in Julia programming language</p>
                    </div>
                    <div class="card__footer">
                        <Link className='reg_link' to="/ddr_project">
                            <hr/>
                            <h5>Read more</h5>
                        </Link>
                    </div>
                </div>

                <div class="card">
                    <div class="card__body">
                        <img src={printer_cover} alt="orbits around earth"/>
                        <h2>3D Printer Project</h2>
                        <p>Built a 3D printer from stratch</p>
                    </div>
                    <div class="card__footer">
                        <Link className='reg_link' to="/printer_project">
                            <hr/>
                            <h5>Read more</h5>
                        </Link>
                    </div>
                </div>

                {/* <div class="card">
                    <div class="card__body">
                        <img src={plc_cover} alt="orbits around earth"/>
                        <h2>Programmable Logic Controller (PLC) Box Sorting System</h2>
                        <p>Industrial Automation Course Project</p>
                    </div>
                    <div class="card__footer">
                        <Link to="/plc_project">
                            <h5>Read more</h5>
                        </Link>
                    </div>
                </div> */}

                {/* <div class="card">
                    <div class="card__body">
                        <h2>CLING-ERS</h2>
                        <p>
                            New technology for spacecraft Rendezvous Proximity Operations and Docking (RPOD)
                            that will be launching to the International Space Station (ISS) for testing
                        </p>
                    </div>
                    <div class="card__footer">
                        <div class="date">
                            <h5>2021 - Present</h5>
                        </div>
                    </div>
                </div> */}

                {/* <div class="card">
                    <div class="card__body">
                        <h2>Design and Development of a Smart Distributed Clean Drinking Water System</h2>
                        <p>Capstone Team Project</p>
                        <ul>
                            <li>
                                <strong>Goal: </strong> To improve access to water in developing countries by 
                                developing a smart nano infrastructure that is able to generate, transmit, distribute 
                                and monitor clean drinking water based on ground water
                            </li>
                            <li>
                                <strong>End result: </strong> Developed a working proof of concept that pumps dirty 
                                water into the system, filters and distributes clean water
                            </li>
                        </ul>
                    </div>
                    <div class="card__footer">
                        <div class="date">
                            <h5>2019 - 2020</h5>
                        </div>
                    </div>
                </div> */}

            </div>
        </div>
    )
}

export default Projects