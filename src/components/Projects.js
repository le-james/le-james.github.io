import React from 'react'
import { Link } from 'react-router-dom';

import { AiFillHome } from "react-icons/ai"

//CSS
import "./projects.css"

function Projects() {
    return (
        <div class="projects-page">
            <Link to="/">
                <AiFillHome size="1.9em" />
            </Link>
            <div class="project-container">
            <div class="card">
                    <div class="card__body">
                        <h2>Spacecraft Rendezvous, Proximity Operations and Docking (RPOD) Guidance</h2>
                        <p>
                            Developing a simulation of RPOD of a spacecraft using the General Multi-pulse 
                            Glideslope Transfer in MATLAB.
                        </p>
                        <p>
                            The General Multi-pulse Glideslope Transfer is based on the Clohessy-Whiltshire
                            Equations
                        </p>
                        <ul>
                            <li>
                                <a href="https://github.com/le-james/general-glideslope-spacecraft-guidance" 
                                target="_blank"> 
                                    View Project
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="card__footer">
                        <div class="date">
                            <h5>2022 - Present</h5>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card__body">
                        <h2>3 Degrees of Freedom Small Satellite Testbed</h2>
                        <p>
                            Developing the navigation, controls and software architecture using ROS 2 for a robot that 
                            maneuvers on an air bearing platform (Think of air hockey but the puck is a robot), sensibly 
                            called a Floatbot.
                        </p>
                        <ul>
                            <li>
                                Using Marvelmind Indoor GPS and MPU6050 for localization
                            </li>
                            <li>
                                <a href="https://github.com/le-james/floatbot" target="_blank"> 
                                    View Project
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="card__footer">
                        <div class="date">
                            <h5>2021 - Present</h5>
                        </div>
                    </div>
                </div>

                <div class="card">
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
                </div>

                <div class="card">
                    <div class="card__body">
                        <h2>Differential Drive Robot (DDR) Trajectory Optimization</h2>
                        <p>Learned how to use IPOPT (Nonlinear optimization software) in Julia programming language</p>
                        <ul>
                            <li>
                                Used the kinematics of a DDR to generate a simple trajectory that avoids a known obstacle
                            </li>
                            <li>
                                <a href="https://github.com/le-james/differential-drive-robot" target="_blank"> 
                                    View Project
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="card__footer">
                        <div class="date">
                            <h5>2021</h5>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card__body">
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
                        <div class="date">
                            <h5>2017 - 2020</h5>
                        </div>
                    </div>
                </div>

                <div class="card">
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
                </div>

                <div class="card">
                    <div class="card__body">
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
                        <div class="date">
                            <h5>2020</h5>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects