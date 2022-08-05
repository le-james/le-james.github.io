import React from 'react'
import { Link } from 'react-router-dom';

import { AiOutlineRollback } from "react-icons/ai"

// cover images
import od_cover from "../project_images/od/lossy/ekf_gps_lossy.png"
import initialCov from "../project_images/od/lossy/initialCov_lossy.png"
import plotInitialCov from "../project_images/od/lossy/plotInitialCov_lossy.png"
import plotInitialCovProp from "../project_images/od/lossy/plotInitialCovProp_lossy.png"
import ekf_first_pred from "../project_images/od/lossy/ekf_first_pred_lossy.png"
import ekf_first_update_ano from "../project_images/od/lossy/ekf_first_update_ano_lossy.png"
import full_ekf from "../project_images/od/lossy/full_ekf_lossy.png"
import ekf_range_top from "../project_images/od/lossy/ekf_range_top_lossy.png"
import ekf_range_side from "../project_images/od/lossy/ekf_range_side_lossy.png"

//CSS
import "../projects.css"

const githubLink = 'https://github.com/le-james/orbital-mechanics';

function OD_project() {
    return (
        <div class="projects">
            <Link to="/projects">
                <AiOutlineRollback class="header_icon" size="2em" />
            </Link>
            <div class="project-container">
                <div class="in-card">
                    <div class="card__body">

                        <label class="zoom_img">
                            <input type="checkbox" onclick="event.stopPropagation();"/>
                            {/* <img src={od_cover} style={{width: "75%"}} alt="orbits around earth"/> */}
                            <img src={od_cover} alt="orbits around earth"/>
                        </label>

                        <br/>
                        <hr/>
                        <a className='reg_link' href={githubLink} target="_blank" rel="noopener noreferrer">
                            View GitHub Repo
                        </a>

                        <h2>Orbit Determination</h2>
                        <p>
                            This post won't cover the math behind it, just a high level overview and concepts with
                            nice figures :).
                        </p>

                        {/* <p>
                            Barrier to entry:
                        </p>
                        <ul>
                            <li>
                                Basic understanding of Gaussian statistics
                            </li>
                            <li>
                                Orbital dyanmics specifically two body dynamics
                            </li>
                            <li>
                                Kalman Filter/Extended Kalman Filter
                            </li>
                        </ul> */}

                        <br/>

                        <h3> The goal: To figure out where a spacecraft is within some confidence ellipse </h3>
                        <p>
                            In this Two Body simulation an Extended Kalman Filter (EKF) is used to determine
                            the orbit that a spaceraft is on around Earth. The truth orbit represents the 
                            actual orbit of the spacecraft, which is never actually known in practice. It is 
                            used to observe how the EKF coverges to it. The estimated orbit is where we think 
                            the spacecraft is given some initial conditions with small deviations. The pink 
                            dots in the figure represents the estimate from the EKF of where the spacecraft 
                            should be.
                        </p>

                        <br/>

                        <h3> The Kalman filter (KF) </h3>
                        <p>
                            First used to navigate the Apollo Missions to the Moon now has uses in many other
                            applications such as sensor fusion and state estimation in robotics. Due to its 
                            elegance and simplicity with only having to solve five equations recusively.
                        </p>
                        <br/>
                        <p>
                            For nonlinear systems an EKF is used. The gist behind the KF vs. EKF is that the KF 
                            linearizes the system's equation of motion at one point while the EKF linearizes it at 
                            more than one point. It basically "turns a nonlinear system into a linear system".
                        </p>

                        <br/>

                        <h3> Orbit Uncertainty Propagation </h3>
                        <p>
                            Given a reasonable covariance matrix aka a confidence region where the
                            spacecraft is initially thought to be, it is possible to propagate it forwards in time 
                            to observe how the dynamics affect where the spacecraft is.
                        </p>
                        <br/>
                        <p>
                            With the covariance below, it expresses that the position of the initial spacecraft 
                            state can vary up to 1000 km and its velocity up to 1 m/s. The pre-squared values in 
                            the matrix are the standard deviations or 1-sigma values of the gaussian distribution.
                        </p>
                        <br/>
                        <label class="zoom_img">
                            <input type="checkbox" onclick="event.stopPropagation();"/>
                            <img src={initialCov} alt="linear algebra matrix in matlab"/>   
                        </label>
                        <br/>
                        <p>
                            Plotting the initial covariance matrix, a sphere can be seen beside the Earth. This is 
                            the volume where the spacecraft is initially thought to be.
                        </p>
                        <br/>
                        <label class="zoom_img">
                            <input type="checkbox" onclick="event.stopPropagation();"/>
                            <img src={plotInitialCov} alt="green sphere beside Earth"/>
                        </label>
                        <br/>
                        <p>
                            Using the state transition matrix (STM), the initial covariance is propagated forward
                            three times at 10 minute increments. It can be seen that the nonlinearity of the Two
                            Body dynamics affects where the spacecraft could be. i.e. the initial sphere gets 
                            morphed into an ellipsoid. The further fowards it gets propagated in time the more 
                            "elongated" it becomes and thus the confidence region becomes too large. 
                        </p>
                        <br/>
                        <label class="zoom_img">
                            <input type="checkbox" onclick="event.stopPropagation();"/>
                            <img src={plotInitialCovProp} alt="multiple green spheres beside Earth"/>
                        </label>

                        <br/>
                        <p>
                            Now the Extended Kalman Filter will be used to estimate where the spacecraft actually
                            is. But first, a recap...
                        </p>
                        <br/>

                        <p> The story so far: </p>
                        <ul>
                            <li>
                                The spacecraft is on the truth (blue) orbit and we will never actually know this. 
                                The only thing that is known are some of its states (position or velocity) at some 
                                time instance a sensor measurement is taken. e.g. At 1 hour after orbit insertion a
                                range measurement is taken to determine how far away the spacecraft is from Earth.
                            </li>
                            <li>
                                Since nothing is ever exact in the real world, it is initially thought that the
                                spacecraft is on the estimated (red) orbit.
                            </li>
                            <li>
                                Going on the notion that nothing is ever exact, the spacecraft starts on the red
                                orbit but also has a sphere of confidence that it is in it (which its not).
                            </li>
                            <li>
                                Lastly, the initial confidence sphere can be propagated forwards into the future.
                                This will be used in the Kalman Filter Equations.
                            </li>
                        </ul>
                        <br/>

                        <h3> Orbit Determination using an Extended Kalman Filter </h3>
                        <br/>
                        <p>
                            Each step of the KF has its own associated equations
                            to compute the needed variables (Not covered here :(, many resources out there :D)
                        </p>
                        <br/>
                        <p>
                            The process of KF goes something like this:
                        </p>
                        <ul>
                            <li>
                                Predict the states and covariance matrix using the EOM and STM.
                            </li>
                            <li>
                                Take sensor measurements of "observables". i.e. range or GPS position of the 
                                spacecraft.
                            </li>
                            <li>
                                Compute the Kalman Gain.
                            </li>
                            <li>
                                Update the new states and covariance at the current time.
                            </li>
                            <li>
                                Repeat.
                            </li>
                        </ul>

                        <p>
                            The prediction step:
                        </p>
                        <ul>
                            <li>
                                Using the EOM and STM, the initial states and covariance are propagated forward 
                                by 10 mins using the predition equations.
                            </li>
                            <li>
                                The green line with squares represents the Two Body EOM being solved using a 
                                Runge-Kutta 4 (RK4) integrator.
                            </li>
                            <li>
                                Since the EKF is being used, the states at every point have to be linearized
                                and solved using RK4 to get the STM at 10 mins.
                            </li>
                            <li>
                                The initial confidence sphere is propagated to 10 mins using this STM.
                            </li>
                        </ul>
                        <br/>
                        <label class="zoom_img">
                            <input type="checkbox" onclick="event.stopPropagation();"/>
                            <img src={ekf_first_pred} alt="two green spheres beside Earth"/>
                        </label>
                        <br/>
                        <p>
                            The measurement step:
                        </p>
                        <ul>
                            <li>
                                For this example a "GPS" measurement is used and later a "range" measurement
                                is used for comparison.
                            </li>
                            <li>
                                Since the truth orbit is known in this simulation the position at 10 mins can 
                                be used to act as a GPS position measurement of the acutal spacecraft.
                            </li>
                            <li>
                                To add a realistic element into the simulation the GPS measurement is taken
                                with an error of plus or minus 1 km.
                            </li>
                        </ul>
                        <p>
                            The Kalman Gain:
                        </p>
                        <ul>
                            <li>
                                Using everything discussed earlier, the Kalman Gain is computed. The output
                                if a 6x3 matrix. The matrix accounts for 6 states (positions and velocities) 
                                and 3 GPS state measurements (positions).
                            </li>
                        </ul>
                        <p>
                            The update step:
                        </p>
                        <ul>
                            <li>
                                The new states and covariance are computed using the update equations that uses
                                variables computed in the previous steps.
                            </li>
                            <li>
                                The pink line points towards the updated position state and the it also shows 
                                the updated confidence sphere which is way smaller than the predicted sphere. 
                            </li>
                            <li>
                                The covariance in position pre-update are greater than 1000 km while after the 
                                update it becomes less than 1 km.
                            </li>
                        </ul>
                        <br/>
                        <label class="zoom_img">
                            <input type="checkbox" onclick="event.stopPropagation();"/>
                            <img src={ekf_first_update_ano} alt="two green spheres beside Earth"/>
                        </label>
                        <br/>
                        <p>
                            Repeat:
                        </p>
                        <ul>
                            <li>
                                Now using the newly computed states and covariance to predict for the next 10 
                                mins, take a measurement then update to get the new state and covariance at 20 
                                mins since the beginning.
                            </li>
                        </ul>
                        <br/>
                        <p>
                            The final result:
                        </p>
                        <ul>
                            <li>
                                The pink dots here again are the position states that are estimated by the 
                                EKF using GPS measurement every 10 mins.
                            </li>
                            <li>
                                Note that the bigger orbit (red) takes almost twice the time to
                                reach its initial point compared to the truth orbit (blue).
                            </li>
                        </ul>
                        <br/>
                        <label class="zoom_img">
                            <input type="checkbox" onclick="event.stopPropagation();"/>
                            <img src={full_ekf} alt="orbits around Earth"/>
                        </label>
                        <br/>
                        <h2>Conclusion</h2>
                        <br/>
                        <p>
                            The above seems easy enough... but in reality the truth orbit isn't known and there are
                            many factors that affects how the estimated states from the EKF converges to 
                            the real orbit or not.
                        </p>
                        <br/>
                        <p>
                           There is a saying in orbit determination or estimation in general which is 
                           "it's more of an art than a science". After implementing the EKF, I can understand
                           the essence of this quote.
                        </p>
                        <br/>
                        <p>
                            Here is an example with just only range measurements every 1 hour. It looks like 
                            it converges, so why use the GPS measurements every 10 mins?
                        </p>
                        <br/>
                        <label class="zoom_img">
                            <input type="checkbox" onclick="event.stopPropagation();"/>
                            <img src={ekf_range_top} alt="top view of Earth with orbit trajectories"/>
                        </label>
                        <br/>
                        <p>
                            Looking from the side, the range measurement only captures the shape of the
                            truth orbit since its only a distance measurement. The estimate from the EKF is
                            still inclined at an angle.
                        </p>
                        <br/>
                        <label class="zoom_img">
                            <input type="checkbox" onclick="event.stopPropagation();"/>
                            <img src={ekf_range_side} alt="side view of Earth with orbit trajectories"/>
                        </label>
                        <br/>
                        <p>
                            In the end it all comes down having hands on experience navigating a spacecraft. 
                            Knowing what states to observe, which sensors to use, when to use it and it all 
                            becomes increasing difficult as the spacecraft is traveling to another planet or 
                            moon.
                        </p>

                        <br/>
                        <br/>
                        <hr/>
                        <div className='project_footer'>
                                Last updated: Aug 2, 2022
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OD_project