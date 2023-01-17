import React from 'react'
import Footer from '../footer'

// cover images
import rpod_cover from "../project_images/rpod/inbound_glideslope.png"

//CSS
import "../projects.css"

const githubLink = 'https://github.com/le-james/general-glideslope-spacecraft-guidance';

function OD_project({ currPath, randRGB, randRGBgenerator, randRGBReset }) {
    return (
        <div class="projects">

            <Footer currPath={currPath} randRGB={randRGB} randRGBgenerator={randRGBgenerator} randRGBReset={randRGBReset} />    

            <div class="project-container">
                <div class="in-card">
                    <div class="card__body">

                        <label class="zoom_img">
                            <input type="checkbox" onclick="event.stopPropagation();"/>
                            <img src={rpod_cover} alt="simulation of differential drive robot" id="responsive-image"/>
                        </label>

                        <br/>
                        <hr/>
                        <a className='reg_link' href={githubLink} target="_blank" rel="noopener noreferrer">
                            View the project's GitHub Repo
                        </a>

                        <h2>Guidance for Spacecraft Rendezvous, Proximity Operations and Docking (RPOD)</h2>
                        <p>
                            RPOD is an interesting and abundant field with endless possible applications. Space servicing, orbital refueling, 
                            spacecraft repair/upgrade and manufacturing in space just to name a few.
                        </p>

                        <br/>

                        <h3> The goal: Implement a first order trajectory generator for RPOD </h3>
                        <p>
                            Based on the Chohessy-Whiltshire equations, it provides a simple, straightforward, mathematical analysis of 
                            guiding a chaser spacecraft to maneuver around a target spacecraft. Given parameters for a mission, a trajectory 
                            for a chaser spacecraft can be generated to approach, to fly around and to depart from a target spacecraft. 
                        </p>

                        <br/>

                        <h3> RPOD Mission Design </h3>
                        <p>
                            Parameters used to generate a trajectory around a target spacecraft.
                        </p>
                        <ul>
                            <li>
                                Goal positions around the target spacecraft
                            </li>
                            <li>
                                Initial and final delta V constraints
                            </li>
                            <li>
                                Number of delta V maneuvers between goal positions
                            </li>
                            <li>
                                Approach, depart or circumnavigate maneuver
                            </li>
                        </ul>

                        <br/>

                        <h3> References </h3>
                        <p>
                            Guidance and Relative Navigation for Autonomous Rendezvous in a Circular Orbit (Hablani et al., 2002)
                        </p>

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