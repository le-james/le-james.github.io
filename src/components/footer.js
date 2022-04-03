import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// css
import './footer.css'

// contact icons
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { IoIosPaper } from "react-icons/io"
import { BsTools } from "react-icons/bs"

const Footer = ({ randRGB, randRGBgenerator, randRGBReset }) => {

    const githubLink = 'https://github.com/le-james?tab=repositories';
    const email = "mailto:jle54218@usc.edu"
    const resumeLink = "https://resume.io/r/P93uVaYcE"

    return (
        <motion.div className='footer-container' variants={containerVariants} initial="hidden" animate="visible">
            <a href={githubLink} target="_blank"> 
                <motion.div className="contact" variants={iconVariant} onHoverStart={() => randRGBgenerator()} onHoverEnd={() => randRGBReset()} whileHover="hover" custom={randRGB}>
                    <AiFillGithub size="2em" /> 
                </motion.div>
            </a>

            <a href={email} target="_blank"> 
                <motion.div className='contact' variants={iconVariant} onHoverStart={() => randRGBgenerator()} onHoverEnd={() => randRGBReset()} whileHover="hover" custom={randRGB}>
                    <AiOutlineMail size="2em" />
                </motion.div>
            </a>
            
            <a href={resumeLink} target="_blank"> 
                <motion.div className='contact' variants={iconVariant} onHoverStart={() => randRGBgenerator()} onHoverEnd={() => randRGBReset()} whileHover="hover" custom={randRGB}>
                    <IoIosPaper size="2em" />
                </motion.div>
            </a>

            <Link to="/projects">
                <motion.div className='contact' variants={iconVariant} onHoverStart={() => randRGBgenerator()} onHoverEnd={() => randRGBReset()} whileHover="hover" custom={randRGB}>
                    <BsTools size="1.9em" />
                </motion.div>
            </Link>
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
    },
    hover: (randRGB) => {
        return {
            y: [5, -5],
            color: `rgb(${randRGB.red}, ${randRGB.green}, ${randRGB.blue})`,
            transition: {
                duration: 0.75,
                yoyo: Infinity,
                ease: "easeInOut"
            }
        }
    },
}

export default Footer