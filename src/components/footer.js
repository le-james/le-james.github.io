import React from 'react'
import { motion } from 'framer-motion';

// css
import './footer.css'

// contact icons
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { IoIosPaper } from "react-icons/io"

const Footer = ({ randRGB, randRGBgenerator, randRGBReset }) => {

    const githubLink = 'https://github.com/le-james?tab=repositories';
    const email = "mailto:jle54218@usc.edu"
    const resumeLink = "https://resume.io/r/P93uVaYcE"

    return (
        <motion.div className='container' variants={containerVariants} initial="hidden" animate="visible">
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
        </motion.div>
    )
}

const containerVariants = {
    hidden: {
        opacity: 0,
        x: -10
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            delay: 1,
            staggerChildren: 0.5,
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