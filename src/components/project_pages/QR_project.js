import React from 'react'
import Footer from '../footer'

// cover images
import qr_cover from "../project_images/qr/qr_cover.jpg"

//CSS
import "../projects.css"

const githubLink = 'https://github.com/le-james/quadcopter';

function QR_project({ currPath, randRGB, randRGBgenerator, randRGBReset }) {
    return (
        <div class="projects">

            <Footer currPath={currPath} randRGB={randRGB} randRGBgenerator={randRGBgenerator} randRGBReset={randRGBReset} />    

            <div class="project-container">
                <div class="in-card">
                    <div class="card__body">

                        <label class="zoom_img">
                            <input type="checkbox" onclick="event.stopPropagation();"/>
                            <img src={qr_cover} alt="quadcopter top down view" id="responsive-image"/>
                        </label>

                        <br/>
                        
                        <hr/>

                        {/* <a className='reg_link' href={githubLink} target="_blank" rel="noopener noreferrer">
                            View the project's GitHub Repo
                        </a> */}
                        
                        <a className='reg_link' href={githubLink} target="_blank" rel="noopener noreferrer">
                            View the project's GitHub Repo
                        </a>

                        <h2>Quadcopter</h2>

                        <br/>

                        <h3> The goal: Develop flight software (Perception and Controls) </h3>

                        <br/>

                        <h3> Hardware Stack </h3>
                        <ul>
                            <li>
                                Flight Controller - Raspberry Pi Pico
                            </li>
                            <li>
                                Flight Computer - Raspberry Pi
                            </li>
                            <li>
                                IMU - MPU 6050
                            </li>
                            <li>
                                Ultrasonic Distance Sensor - HC-SR04
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

                        <h3> Flight Controller Software (For Pico microcontroller) </h3>
                        <ul>
                            <li>
                                mpu6050_lib.hpp - Class with functions to read and output gyroscope and accelerometer 
                                data from the IMU through I2C.
                            </li>
                            <li>
                                mahony_filter.hpp - Inherits the mpu6050_lib.hpp class, implements the Mahony Filter for 
                                attitude estimation (Can output either quaternion or euler angles)
                            </li>
                            <li>
                                pwm_lib.hpp - Class to setup a gpio pin for PWM mode. Useful for motor electronic speed 
                                controllers (ESC) and servo motors since they operate at 50Hz (Default PWM frequency 
                                doesn't go as low at 50Hz)
                            </li>
                        </ul>

                        <br/>
                        <hr/>
                        <div className='project_footer'>
                                Last updated: Jun 6, 2023
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QR_project