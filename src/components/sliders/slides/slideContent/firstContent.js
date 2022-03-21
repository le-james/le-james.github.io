import React from 'react'
import { motion } from "framer-motion"

function firstContent({ wordVariants, letterVariants }) {
    return (
        <motion.div variants={wordVariants} initial="hidden" animate="visible" className="text" >
            <div className="letterContainer">
                <motion.div variants={letterVariants} className="letter"> H </motion.div>
                <motion.div variants={letterVariants} className="letter"> e </motion.div>
                <motion.div variants={letterVariants} className="letter"> l </motion.div>
                <motion.div variants={letterVariants} className="letter"> l </motion.div>
                <motion.div variants={letterVariants} className="letter space"> o </motion.div>
            </div>

            <div className="letterContainer">
                <motion.div variants={letterVariants} className="letter"> T </motion.div>
                <motion.div variants={letterVariants} className="letter"> h </motion.div>
                <motion.div variants={letterVariants} className="letter"> e </motion.div>
                <motion.div variants={letterVariants} className="letter"> r </motion.div>
                <motion.div variants={letterVariants} className="letter"> e </motion.div>
                <motion.div variants={letterVariants} className="letter space"> , </motion.div>
            </div>

            <div className="letterContainer">
                <motion.div variants={letterVariants} className="letter"> I </motion.div>
                <motion.div variants={letterVariants} className="letter"> ' </motion.div>
                <motion.div variants={letterVariants} className="letter space"> m </motion.div>
            </div>

            <div className="letterContainer">
                <motion.div variants={letterVariants} className="letter"> J </motion.div>
                <motion.div variants={letterVariants} className="letter"> a </motion.div>
                <motion.div variants={letterVariants} className="letter"> m </motion.div>
                <motion.div variants={letterVariants} className="letter"> e </motion.div>
                <motion.div variants={letterVariants} className="letter"> s </motion.div>
            </div>
        </motion.div>
    )
}

export default firstContent