import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import Footer from './footer'

// cover images
import sf_cover from "./project_images/sf/sf_cover.gif"
import qr_cover from "./project_images/qr/qr_cover.jpg"
import od_cover from "./project_images/od/lossy/ekf_gps_lossy.png"
import rpod_cover from "./project_images/rpod/inbound_glideslope_lossy.png"
// import testbed_cover from "./project_images/testbed/testbed_lossy.jpg"
import ddr_cover from "./project_images/ddr/simple-traj-obs-avoidance_lossy.gif"
import printer_cover from "./project_images/3d_printer/3d-printer_r2.gif"
// import plc_cover from "./project_images/plc/plc.gif"

//CSS
import "./projects.css"

function Projects({ currPath, randRGB, randRGBgenerator, randRGBReset }) {
    return (
        <div class="projects">

            <Footer currPath={currPath} randRGB={randRGB} randRGBgenerator={randRGBgenerator} randRGBReset={randRGBReset} />    

            {/* <motion.div variants={containerVariants} initial="hidden" animate="visible">
                <Link to="/">
                    <motion.div variants={iconVariant}>
                        Home
                    </motion.div>
                </Link>
                <Link to="/about">                    
                    <motion.div variants={iconVariant}>
                        About
                    </motion.div></Link>
                </motion.div> */}



            <motion.div class="project-container" variants={containerVariants} initial="hidden" animate="visible">
                <motion.div class="card" variants={childVariant}>
                    <div class="card__body">
                        <img src={qr_cover} alt="top down view of a quadcopter"/>
                        <h2>Quadcopter</h2>
                        <p>
                            Developing a flight software for a quadcopter.
                        </p>
                    </div>
                    <div class="card__footer">
                        <hr/>
                        <Link className='router_link' to="/qr_project">
                            <h5>Read more</h5>
                        </Link>
                    </div>
                </motion.div>
                
                <motion.div class="card" variants={childVariant}>
                    <div class="card__body">
                        <img src={sf_cover} alt="gif of inertial measurement unit"/>
                        <h2>Sensor Fusion</h2>
                        <p>
                            Implemented the Mahony Filter for attitude tracking using a 6DOF IMU.
                        </p>
                    </div>
                    <div class="card__footer">
                        <hr/>
                        <Link className='router_link' to="/sf_project">
                            <h5>Read more</h5>
                        </Link>
                    </div>
                </motion.div>
                
                <motion.div class="card" variants={childVariant}>
                    <div class="card__body">
                        <img src={od_cover} alt="orbits around earth"/>
                        <h2>Orbit Determination</h2>
                        <p>
                            Nonlinear state estimation of a spacecraft in orbit using an Extended Kalman Filter.
                        </p>
                    </div>
                    <div class="card__footer">
                        <hr/>
                        <Link className='router_link' to="/od_project">
                            <h5>Read more</h5>
                        </Link>
                    </div>
                </motion.div>

                <motion.div class="card" variants={childVariant}>
                    <div class="card__body">
                        <img src={rpod_cover} alt="plot of waypoints"/>
                        <h2>Guidance for Spacecraft Rendezvous, Proximity Operations and Docking</h2>
                        <p>
                            A multi-phased guidance trajectory for RPOD in circluar Earth orbit.
                        </p>
                    </div>
                    <div class="card__footer">
                        <hr/>
                        <Link className='router_link' to="/rpod_project">
                            <h5>Read more</h5>
                        </Link>
                    </div>
                </motion.div>

                {/* <motion.div class="card" variants={childVariant}>
                    <div class="card__body">
                        <img src={testbed_cover} alt="paint ball air tank testbed"/>
                        <h2>3 Degrees of Freedom Small Satellite Testbed</h2>
                        <p>
                            Developing the navigation, controls and software architecture.
                        </p>
                    </div>
                    <div class="card__footer">
                        <hr/>
                        <Link className='router_link' to="/testbed_project">
                            <h5>Read more</h5>
                        </Link>
                    </div>
                </motion.div> */}


                <motion.div class="card" variants={childVariant}>
                    <div class="card__body">
                        <img src={ddr_cover} alt="gif of blue circle moving around red circle"/>
                        <h2>Trajectory Optimization</h2>
                        <p>Generated a path that avoided an obstacle for a differential drive robot.</p>
                    </div>
                    <div class="card__footer">
                        <hr/>
                        <Link className='router_link' to="/ddr_project">
                            <h5>Read more</h5>
                        </Link>
                    </div>
                </motion.div>

                <motion.div class="card" variants={childVariant}>
                    <div class="card__body">
                        <img src={printer_cover} alt="gif of 3d printer"/>
                        <h2>3D Printer</h2>
                        <p>Built a 3D printer from scratch </p>
                    </div>
                    <div class="card__footer">
                        <hr/>
                        <Link className='router_link' to="/printer_project">
                            <h5>Read more</h5>
                        </Link>
                    </div>
                </motion.div>

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

            </motion.div>
        </div>
    )
}

const containerVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        }
    }
}

const childVariant = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
}

export default Projects