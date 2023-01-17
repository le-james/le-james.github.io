import React from 'react'
import Footer from '../footer'

// cover images
import qr_cover from "../project_images/qr/qr_cover.jpg"

//CSS
import "../projects.css"

// const githubLink = 'https://github.com/le-james/general-glideslope-spacecraft-guidance';

function OD_project({ currPath, randRGB, randRGBgenerator, randRGBReset }) {
    return (
        <div class="projects">

            <Footer currPath={currPath} randRGB={randRGB} randRGBgenerator={randRGBgenerator} randRGBReset={randRGBReset} />    

            <div class="project-container">
                <div class="in-card">
                    <div class="card__body">

                        <label class="zoom_img">
                            <input type="checkbox" onclick="event.stopPropagation();"/>
                            <img src={qr_cover} alt="simulation of differential drive robot" id="responsive-image"/>
                        </label>

                        <br/>
                        <hr/>
                        {/* <a className='reg_link' href={githubLink} target="_blank" rel="noopener noreferrer">
                            View the project's GitHub Repo
                        </a> */}

                        <h2>Quadcopter</h2>
                        <p>
                            Currently in dev
                        </p>

                        <br/>

                        <h3> The goal: Develop software for autonomous and remote operation </h3>

                        <br/>

                        <h3> Hardware Stack </h3>
                        <ul>
                            <li>
                                Flight Controller: Raspberry Pi Pico
                            </li>
                            <li>
                                Flight Computer: Raspberry Pi 3 B+
                            </li>
                            <li>
                                IMU: MPU 6050
                            </li>
                            <li>
                                Ultrasonic Distance Sensor: HC-SR04
                            </li>
                        </ul>

                        <h3> Software Stack </h3>
                        <ul>
                            <li>
                                C/C++
                            </li>
                            <li>
                                Robot Operating System 2 (ROS2)
                            </li>
                        </ul>

                        <br/>

                        <br/>
                        <br/>
                        <hr/>
                        <div className='project_footer'>
                                Last updated: Jan 16, 2023
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OD_project