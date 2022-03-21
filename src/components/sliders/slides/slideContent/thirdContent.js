import React from 'react'
import { motion } from "framer-motion"

function thirdContent({ wordVariants, letterVariants }) {
    return (
        <motion.div variants={wordVariants} initial="hidden" animate="visible" className="text topText" >

            <div className="letterContainer">
                <motion.div variants={letterVariants} className="letter"> C </motion.div>
                <motion.div variants={letterVariants} className="letter"> u </motion.div>
                <motion.div variants={letterVariants} className="letter"> r </motion.div>
                <motion.div variants={letterVariants} className="letter"> r </motion.div>
                <motion.div variants={letterVariants} className="letter"> e </motion.div>
                <motion.div variants={letterVariants} className="letter"> n </motion.div>
                <motion.div variants={letterVariants} className="letter"> t </motion.div>
                <motion.div variants={letterVariants} className="letter"> l </motion.div>
                <motion.div variants={letterVariants} className="letter space"> y </motion.div>
            </div>

            <div className="letterContainer">
                <motion.div variants={letterVariants} className="letter "> a </motion.div>
                <motion.div variants={letterVariants} className="letter space"> t </motion.div>
            </div>

            <div className="letterContainer">
                <motion.div variants={letterVariants} className="letter"> U </motion.div>
                <motion.div variants={letterVariants} className="letter"> S </motion.div>
                <motion.div variants={letterVariants} className="letter space"> C </motion.div>
            </div>

            <div className="letterContainer">
                <motion.div variants={letterVariants} className="letter "> M </motion.div>
                <motion.div variants={letterVariants} className="letter space"> S </motion.div>
            </div>

            <div className="letterContainer">
                <motion.div variants={letterVariants} className="letter"> A </motion.div>
                <motion.div variants={letterVariants} className="letter"> s </motion.div>
                <motion.div variants={letterVariants} className="letter"> t </motion.div>
                <motion.div variants={letterVariants} className="letter"> r </motion.div>
                <motion.div variants={letterVariants} className="letter space"> o </motion.div>
            </div>

        </motion.div>
    )
}

export default thirdContent