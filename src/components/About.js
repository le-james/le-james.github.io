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

                        <h2 style={headerStyle}>👨‍🚀 About James </h2>

                        <p style={para}>
                            ✌️ I’m currently an R&D Systems Engineer at Bornea Dynamics, working on a variety of technologies for the defense sector.
                        </p>    

                        <p style={para}>
                            I earned my Masters in Astronautical Engineering from the University of Southern California, specializing in Guidance, 
                            Navigation, and Control systems.
                        </p>

                        <p style={para}>     
                            I’m fascinated by anything that brings ⚙️ mechanical, ⚡ electronics, and 👨‍💻 software together, Mechatronics! 
                            Right now, I’m focused on software and algorithm development for 🤖 robotics, 🧠 autonomy, and 🛸 space applications.
                        </p>            

                        <p style={para}>
                            The projects I enjoy most combine multiple disciplines, where I get to create autonomous and robotic systems that push 
                            the boundaries of technology.
                        </p>

                        <br/>

                        <h3 style={headerStyle}>📡 Contact</h3>
                        <p style={para}>&#9993; jamesle@alumni.usc.edu</p>
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