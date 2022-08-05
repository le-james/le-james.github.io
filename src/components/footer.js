import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// css
import './footer.css'

// contact icons
// import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
// import { IoIosPaper } from "react-icons/io"
import { BsTools } from "react-icons/bs"

const Footer = ({ randRGB, randRGBgenerator, randRGBReset }) => {

    const githubLink = 'https://github.com/le-james?tab=repositories';
    // const email = "mailto:jle54218@usc.edu"
    // const resumeLink = "https://resume.io/r/P93uVaYcE"
    // const resumeLink = "https://drive.google.com/file/d/1Tx-HEtr4ujHTexdrH2ENrta2K64_xPod/view?usp=sharing"

    return (
        <motion.div className='footer-container' variants={containerVariants} initial="hidden" animate="visible">
            <a href={githubLink} target="_blank" rel="noopener noreferrer"> 
                <motion.div className="icon" variants={iconVariant} onHoverStart={() => randRGBgenerator()} onHoverEnd={() => randRGBReset()} whileHover="hover" custom={randRGB}>
                    {/* <AiFillGithub size="2em" /> */}
                    GITHUB
                </motion.div>
            </a>

            <Link to="/projects">
                <motion.div className='icon' variants={iconVariant} onHoverStart={() => randRGBgenerator()} onHoverEnd={() => randRGBReset()} whileHover="hover" custom={randRGB}>
                    {/* <BsTools size="1.9em" /> */}
                    PROJECTS
                </motion.div>
            </Link>
            
            {/* <a href={email} target="_blank" rel="noopener noreferrer"> 
                <motion.div className='icon' variants={iconVariant} onHoverStart={() => randRGBgenerator()} onHoverEnd={() => randRGBReset()} whileHover="hover" custom={randRGB}>
                    <AiOutlineMail size="2em" />
                </motion.div>
            </a> */}
            
            {/* <a href={resumeLink} target="_blank" rel="noopener noreferrer"> 
                <motion.div className='icon' variants={iconVariant} onHoverStart={() => randRGBgenerator()} onHoverEnd={() => randRGBReset()} whileHover="hover" custom={randRGB}>
                    <IoIosPaper size="2em" />
                </motion.div>
            </a> */}

        </motion.div>
    )
}

const containerVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.25,
        }
    }
}

const iconVariant = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        color: `rgb(255, 255, 255)`
    },
    hover: (randRGB) => {
        return {
            y: [1, -1],
            color: `rgb(${randRGB.red}, ${randRGB.green}, ${randRGB.blue})`,
            transition: {
                duration: 0.3,
                yoyo: Infinity,
                ease: "easeInOut"
            }
        }
    },
}

export default Footer