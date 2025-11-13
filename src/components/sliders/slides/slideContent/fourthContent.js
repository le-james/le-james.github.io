import React from 'react'
import { motion } from "framer-motion"

function fourthContent({ wordVariants, letterVariants }) {
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
                <motion.div variants={letterVariants} className="letter"> y </motion.div>
                <motion.div variants={letterVariants} className="letter space"> : </motion.div>
            </div>

            <div className="letterContainer">
                <motion.div variants={letterVariants} className="letter"> R </motion.div>
                <motion.div variants={letterVariants} className="letter"> & </motion.div>
                <motion.div variants={letterVariants} className="letter space"> D </motion.div>
            </div>

            <div className="letterContainer">
                <motion.div variants={letterVariants} className="letter"> S </motion.div>
                <motion.div variants={letterVariants} className="letter"> y </motion.div>
                <motion.div variants={letterVariants} className="letter"> s </motion.div>
                <motion.div variants={letterVariants} className="letter"> t </motion.div>
                <motion.div variants={letterVariants} className="letter"> e </motion.div>
                <motion.div variants={letterVariants} className="letter"> m </motion.div>
                <motion.div variants={letterVariants} className="letter space"> s </motion.div>
            </div>

            <div className="letterContainer">
                <motion.div variants={letterVariants} className="letter"> E </motion.div>
                <motion.div variants={letterVariants} className="letter"> n </motion.div>
                <motion.div variants={letterVariants} className="letter"> g </motion.div>
                <motion.div variants={letterVariants} className="letter"> i </motion.div>
                <motion.div variants={letterVariants} className="letter"> n </motion.div>
                <motion.div variants={letterVariants} className="letter"> e </motion.div>
                <motion.div variants={letterVariants} className="letter"> e </motion.div>
                <motion.div variants={letterVariants} className="letter space"> r </motion.div>
            </div>

        </motion.div>
    )
}

export default fourthContent