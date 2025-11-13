import React from 'react'
import { motion } from "framer-motion"

function fourthContent({ wordVariants, letterVariants }) {
    return (
        <motion.div variants={wordVariants} initial="hidden" animate="visible" className="text topText" >

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
                <motion.div variants={letterVariants} className="letter"> O </motion.div>
                <motion.div variants={letterVariants} className="letter"> p </motion.div>
                <motion.div variants={letterVariants} className="letter"> t </motion.div>
                <motion.div variants={letterVariants} className="letter"> i </motion.div>
                <motion.div variants={letterVariants} className="letter"> m </motion.div>
                <motion.div variants={letterVariants} className="letter"> a </motion.div>
                <motion.div variants={letterVariants} className="letter"> l </motion.div>
            </div>

            <div className="letterContainer">
                <motion.div variants={letterVariants} className="letter"> C </motion.div>
                <motion.div variants={letterVariants} className="letter"> o </motion.div>
                <motion.div variants={letterVariants} className="letter"> n </motion.div>
                <motion.div variants={letterVariants} className="letter"> t </motion.div>
                <motion.div variants={letterVariants} className="letter"> r </motion.div>
                <motion.div variants={letterVariants} className="letter"> o </motion.div>
                <motion.div variants={letterVariants} className="letter space"> l, </motion.div>
            </div>

            <div className="letterContainer">
                <motion.div variants={letterVariants} className="letter"> T </motion.div>
                <motion.div variants={letterVariants} className="letter"> r </motion.div>
                <motion.div variants={letterVariants} className="letter"> a </motion.div>
                <motion.div variants={letterVariants} className="letter"> j </motion.div>
            </div>

            <div className="letterContainer">
                <motion.div variants={letterVariants} className="letter"> O </motion.div>
                <motion.div variants={letterVariants} className="letter"> p </motion.div>
                <motion.div variants={letterVariants} className="letter space"> t </motion.div>
            </div>
        </motion.div>
    )
}

export default fourthContent