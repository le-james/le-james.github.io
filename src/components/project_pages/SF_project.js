import React from 'react'
import Footer from '../footer'

// cover images
import sf_cover from "../project_images/sf/sf_cover.gif"

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

                        <label class="zoom_img vertical_img">
                            <input type="checkbox" onclick="event.stopPropagation();"/>
                            <img src={sf_cover} alt="simulation of differential drive robot" id="responsive-image"/>
                        </label>

                        <br/>
                        <hr/>
                        {/* <a className='reg_link' href={githubLink} target="_blank" rel="noopener noreferrer">
                            View the project's GitHub Repo
                        </a> */}

                        <h2>Sensor Fusion</h2>
                        <p>

                        </p>

                        <br/>

                        <h3> The goal: Implement a quaternion based sensor fusion algorithm </h3>
                        <p>
                            This algorithm is developed on a Raspberry Pi Pico using C and MPU 6050 IMU.
                        </p>

                        <br/>

                        <h3> Euler Angles vs Quaternions </h3>
                        <p>
                            Euler Angles
                        </p>
                        <ul>
                            <li>
                                Easy to understand and visualize
                            </li>
                            <li>
                                Using a direction cosine matrix (DCM) to represent attitude suffers from gimbal lock when angles are 90 deg
                            </li>
                            <li>
                                Kinematical equations relating gyroscope rates with Euler Angles have singularities at a pitch angle of 90 deg
                                (divide be zero scenario)
                            </li>
                        </ul>

                        <p>
                            Quaternions
                        </p>
                        <ul>
                            <li>
                                Slightly more confusing to understand and impossible to visualize (sphere in the 4th dimension)
                            </li>
                            <li>
                                Suffers no gimbal lock
                            </li>
                            <li>
                                Kinematical equations relating gyroscope rates with quaternions have no singularities at all
                            </li>
                            <li>
                                Need to convert a quaternion back into Euler Angles
                            </li>
                        </ul>

                        <br/>

                        <h3> Mahony Filter </h3>
                        <p>
                            A type of complementary filter that is able to minimize the error between the estimated attitude and the true 
                            orientation with a proportional (P) and integral (I) feedback correction. The error being used is the cross product 
                            between a known inertial vector measured by the IMU and an estimate of the attitude by the filter. The PI controller
                            tries to align the two vectors which drives the cross product to zero.
                        </p>

                        <br/>

                        <h3> References </h3>
                        <p>
                            Non-linear complementary filters on the special orthogonal group (Mahony et al., 2008)
                        </p>


                        <br/>
                        <br/>
                        <hr/>
                        <div className='project_footer'>
                                Last updated: Jan 17, 2023
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OD_project