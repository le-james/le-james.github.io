import React from 'react'
import { motion } from "framer-motion"

function secondContent({ wordVariants, letterVariants }) {
    return (
        <motion.div variants={wordVariants} initial="hidden" animate="visible" className="text" >
            <div className="letterContainer">
                <motion.div variants={letterVariants} className="letter "> B </motion.div>
                <motion.div variants={letterVariants} className="letter "> E </motion.div>
                <motion.div variants={letterVariants} className="letter "> n </motion.div>
                <motion.div variants={letterVariants} className="letter space"> g </motion.div>
            </div>

            <div className="letterContainer">
                <motion.div variants={letterVariants} className="letter"> M </motion.div>
                <motion.div variants={letterVariants} className="letter"> e </motion.div>
                <motion.div variants={letterVariants} className="letter"> c </motion.div>
                <motion.div variants={letterVariants} className="letter"> h </motion.div>
                <motion.div variants={letterVariants} className="letter"> a </motion.div>
                <motion.div variants={letterVariants} className="letter"> t </motion.div>
                <motion.div variants={letterVariants} className="letter"> r </motion.div>
                <motion.div variants={letterVariants} className="letter"> o </motion.div>
                <motion.div variants={letterVariants} className="letter"> n </motion.div>
                <motion.div variants={letterVariants} className="letter"> i </motion.div>
                <motion.div variants={letterVariants} className="letter"> c </motion.div>
                <motion.div variants={letterVariants} className="letter space"> s </motion.div>
            </div>

            <div className="letterContainer">
                <motion.div variants={letterVariants} className="letter"> a </motion.div>
                <motion.div variants={letterVariants} className="letter space"> t </motion.div>
            </div>

            <div className="letterContainer">
                <motion.div variants={letterVariants} className="letter"> U </motion.div>
                <motion.div variants={letterVariants} className="letter"> O </motion.div>
                <motion.div variants={letterVariants} className="letter"> I </motion.div>
                <motion.div variants={letterVariants} className="letter space"> T </motion.div>
            </div>
        </motion.div>
    )
}

export default secondContent