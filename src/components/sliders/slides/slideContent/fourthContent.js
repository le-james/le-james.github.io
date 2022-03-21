import React from 'react'
import { motion } from "framer-motion"

function fourthContent({ wordVariants, letterVariants }) {
    return (
        <motion.div variants={wordVariants} initial="hidden" animate="visible" className="text topText" >

            <div className="letterContainer">
                <motion.div variants={letterVariants} className="letter"> G </motion.div>
                <motion.div variants={letterVariants} className="letter"> N </motion.div>
                <motion.div variants={letterVariants} className="letter space"> C, </motion.div>
            </div>

            <div className="letterContainer">
                <motion.div variants={letterVariants} className="letter"> R </motion.div>
                <motion.div variants={letterVariants} className="letter"> o </motion.div>
                <motion.div variants={letterVariants} className="letter"> b </motion.div>
                <motion.div variants={letterVariants} className="letter"> o </motion.div>
                <motion.div variants={letterVariants} className="letter"> t </motion.div>
                <motion.div variants={letterVariants} className="letter"> i </motion.div>
                <motion.div variants={letterVariants} className="letter"> c </motion.div>
                <motion.div variants={letterVariants} className="letter space"> s, </motion.div>
            </div>

            <div className="letterContainer">
                <motion.div variants={letterVariants} className="letter"> S </motion.div>
                <motion.div variants={letterVariants} className="letter"> p </motion.div>
                <motion.div variants={letterVariants} className="letter"> a </motion.div>
                <motion.div variants={letterVariants} className="letter"> c </motion.div>
                <motion.div variants={letterVariants} className="letter space"> e </motion.div>
            </div>

            <div className="letterContainer">
                <motion.div variants={letterVariants} className="letter"> T </motion.div>
                <motion.div variants={letterVariants} className="letter"> e </motion.div>
                <motion.div variants={letterVariants} className="letter"> c </motion.div>
                <motion.div variants={letterVariants} className="letter space"> h </motion.div>
            </div>
        </motion.div>
    )
}

export default fourthContent