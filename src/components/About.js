import React from 'react'
import { motion } from 'framer-motion';

import Footer from './footer'

// cover images
import keep_calm_cover from "./project_images/under_construction/sub_keep_calm_cat_lossy.jpg"

//CSS
import "./about.css"

function About({ currPath, randRGB, randRGBgenerator, randRGBReset }) {
    return (
        <div class="projects">

            <Footer currPath={currPath} randRGB={randRGB} randRGBgenerator={randRGBgenerator} randRGBReset={randRGBReset} />    

            <motion.div class="project-container" variants={containerVariants} initial="hidden" animate="visible">
                <div class="about-card" id="responsive-div">
                    <div class="card__body">
                        <img src={keep_calm_cover} alt="cat with space helmet"/>

                        {/* <br/> */}
                        {/* <hr/> */}

                        <h2 style={headerStyle}>👨‍🚀 About James</h2>

                        <p style={para}>
                            &#9996; Currently a M.S. student at the University of Southern California in the 
                            Astronautical Engineering Department with a focus in guidance, navigation and controls.
                        </p>
                        <p style={para}>
                            Interested in all things that integrate ⚙️mechanical,⚡electronics and 👨‍💻software, 
                            Mechatronics! My most rewarding endeavours spans multiple disciplines.  
                        </p>          

                        {/* <p style={para}>
                            Currently focusing on the controls of robotic systems.
                        </p> */}

                        <br/>

                        <h3 style={headerStyle}>📡 Contact</h3>
                        <p style={para}>&#9993; jle54218@usc.edu</p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

const headerStyle = {borderRadius: "0.5em", 
                    background:"rgba(75,75,75,0.6",
                    padding:"0.25em"
                    }

const para = {paddingTop:"0.75em"}

const containerVariants = {
    hidden: {
        opacity:0,
    },
    visible: {
        opacity:1,
    }
}

export default About