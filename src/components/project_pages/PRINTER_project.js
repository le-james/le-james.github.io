import React from 'react'
import Footer from '../footer'

// cover images
import printer_cover from "../project_images/3d_printer/3d-printer.gif"

//CSS
import "../projects.css"

const githubLink = "https://github.com/le-james?tab=repositories"

function PRINTER_project({ currPath, randRGB, randRGBgenerator, randRGBReset }) {
    return (
        <div class="projects">

            <Footer currPath={currPath} randRGB={randRGB} randRGBgenerator={randRGBgenerator} randRGBReset={randRGBReset} />    

            <div class="project-container">
                <div class="in-card">
                    <div class="card__body">

                        <label class="zoom_img">
                            <input type="checkbox" onclick="event.stopPropagation();"/>
                            <img src={printer_cover} alt="3d printer gif" id="responsive-image"/>
                        </label>

                        <br/>
                        <hr/>

                        {/* <h2>UNDER CONSTRUCTION</h2>
                        <p>
                            More coming soon...
                        </p>
                        <br/> */}

                        <h2>3D Printer Build</h2>

                        <br/>
                        <h3>Background</h3>

                        <p>
                            During winter break of my second year in undergrad I set out to build an robot arm
                            with new found knowledge programming an Arduino.

                            Long story short, I got ahead of myself in the programming aspects of the project
                            and did not fully consider how I was going to actually fabricate the arm itself. 
                            It ended up being a janky mess with cardboard and hotglue. At least the servo 
                            motors move as intended...
                        </p>
                        <br/>
                        <p>
                            After this I realized how important it was to be able to have a way to fabricate
                            things quickly for other projects. At this time, consumer 3D printers were coming
                            around and people were also building their own printers using open source software
                            from the RepRap community.
                        </p>


                        <br/>
                        <br/>
                        <hr/>
                        <div className='project_footer'>
                                Last updated: Aug 14, 2022
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PRINTER_project






// import React from 'react'
// import { Link } from 'react-router-dom';

// import { AiOutlineRollback } from "react-icons/ai"

// // cover images
// // import od_cover from "../project_images/ekf_gps.png"

// //CSS
// import "../projects.css"

// function PRINTER_project() {
//     return (
//         <div class="project_page">
//             <Link to="/projects">
//                 <AiOutlineRollback class="back_icon" size="2em" />
//             </Link>
//             <div class="project-content">
//                 <div class="card in-card">
//                     <div class="card__body">
//                         {/* <img src={printer_cover} alt="orbits around earth"/> */}
//                         <h2>3D Printer Project</h2>
//                         <p>Built a 3D printer from stratch</p>
//                         <ul>
//                             <li>
//                                 Designed parts for the custom 3D printer in Siemens NX 10 and 3D printed them (Using a 3D printer to build a 3D printer) 
//                             </li>
//                             <li>
//                                 Assembled the frame, motors and electronics together 
//                             </li>
//                             <li>
//                                 Sourced components, hardware and electronics from various suppliers
//                             </li>
//                             <li>
//                                 Documented purchases in a bill of materials
//                             </li>
//                         </ul>
//                     </div>
//                     <div class="card__footer">
//                         <Link to="/printer_project">
//                             <h5>Read more</h5>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default PRINTER_project