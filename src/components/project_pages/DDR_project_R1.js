import React from 'react'
import Footer from '../footer'

// cover images
import ddr_cover from "../project_images/ddr/simple-traj-obs-avoidance_lossy.gif"

//CSS
import "../projects.css"

const githubLink = 'https://github.com/le-james/differential-drive-robot';

function OD_project({ currPath, randRGB, randRGBgenerator, randRGBReset }) {
    return (
        <div class="projects">

            <Footer currPath={currPath} randRGB={randRGB} randRGBgenerator={randRGBgenerator} randRGBReset={randRGBReset} />    

            <div class="project-container">
                <div class="in-card">
                    <div class="card__body">

                        <label class="zoom_img">
                            <input type="checkbox" onclick="event.stopPropagation();"/>
                            <img src={ddr_cover} alt="simulation of differential drive robot" id="responsive-image"/>
                        </label>

                        <br/>
                        <hr/>
                        <a className='reg_link' href={githubLink} target="_blank" rel="noopener noreferrer">
                            View the project's GitHub Repo
                        </a>

                        <h2>Offline Trajectory Optimization</h2>
                        <p>
                            Formulated an nonlinear problem using Direct Collocation and solved it using IPOPT in Julia Programming Language.
                        </p>

                        <br/>

                        <h3> The goal: To learn how to use JuMP.jl in Julia </h3>
                        <p>
                            "JuMP is a domain-specific modeling language for mathematical optimization embedded in Julia. 
                            It currently supports a number of open-source and commercial solvers for a variety of problem classes, including 
                            linear, mixed-integer, second-order conic, semidefinite, and nonlinear programming."
                        </p>

                        <br/>

                        <h3> JuMP, Direct Collocation and IPOPT </h3>
                        <p>
                            The JuMP library contains useful functions to setup optimization problems and contain various solvers to use. 
                        </p>
                        <br/>
                        <p>
                        For this trajectory, the unicycle kinematics was used to model a differential drive robot (DDR) to move from some 
                        initial pose to a final pose. It is then discretized using the trapezoidal collocation into a number of knot points 
                        (state and control variables every timestep). These knot points are equality constraints which enforces the "dynamics 
                        of the system" and allows IPOPT to decide state and control variables that minimize a cost function. The cost 
                        function used here is the classic LQR cost function where Q and R are the tuning knobs for the state and controls.
                        </p>
                        <br/>
                        <p>
                        For a known obstacle to avoid, an inequality constraint was added into the NLP where a boundary around the DDR should 
                        not be able intersect the boundary of the obstacle.
                        </p>
                        <br/>
                        <p>
                        In the demo above, the DDR’s goal is to move and park behind the red obstacle. It can be seen that it dodges the 
                        obstacle then reverses into the final pose.
                        </p>

                        <br/>
                        <br/>
                        <hr/>
                        <div className='project_footer'>
                                Last updated: Jan 15, 2023
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OD_project