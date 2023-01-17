import React from 'react'
import { motion } from 'framer-motion';
import { GrOracle } from "react-icons/gr";

function SliderNav({ pageNum, changePage, changeDir, randRGB, randRGBgenerator, randRGBReset }) {

    const slideDots = (dotClicked) => {
        changePage(dotClicked)
        pageNum > dotClicked ? changeDir(1) : changeDir(-1)
    }

    const arr0 = [0, pageNum, randRGB]
    const arr1 = [1, pageNum, randRGB]
    const arr2 = [2, pageNum, randRGB]
    const arr3 = [3, pageNum, randRGB]

    return (
        <div className="slideNav">
            <motion.div variants={navVariant} transition={navVariant.transition} onHoverStart={() => randRGBgenerator()} onHoverEnd={() => randRGBReset()} whileHover="hover" custom={arr0}>
                <GrOracle size="2em" onClick={() => slideDots(0)} />
            </motion.div>

            <motion.div variants={navVariant} transition={navVariant.transition} onHoverStart={() => randRGBgenerator()} onHoverEnd={() => randRGBReset()} whileHover="hover" custom={arr1}>
                <GrOracle size="2em" onClick={() => slideDots(1)} />
            </motion.div>

            <motion.div variants={navVariant} transition={navVariant.transition} onHoverStart={() => randRGBgenerator()} onHoverEnd={() => randRGBReset()} whileHover="hover" custom={arr2}>
                <GrOracle size="2em" onClick={() => slideDots(2)} />
            </motion.div>

            {/* <motion.div variants={navVariant} transition={navVariant.transition} onHoverStart={() => randRGBgenerator()} onHoverEnd={() => randRGBReset()} whileHover="hover" custom={arr3}>
                <GrOracle size="2em" onClick={() => slideDots(3)} />
            </motion.div> */}
        </div>
    )
}

const navVariant = {
    visible: (arr) => {
        if(arr[0] === arr[1]) {
            return {
                margin: "10em",
                display: "inline-block",
                y: 0,
                color: "rgb(255, 255, 255)"
            }   
        } else {
            return {
                margin: "10em",
                cursor: "pointer",
                display: "inline-block",
                y: 0,
                color: `rgba(255, 255, 255, 0.5)`
            }
        }
    },
    hover: (arr) => {
        if(arr[0] === arr[1]) {
            return {
                
            }                           
        } else {
            return {
                y: [2.5, -2.5],
                color: `rgb(${arr[2].red}, ${arr[2].green}, ${arr[2].blue})`,
                transition: {
                    duration: 0.3,
                    yoyo: Infinity,
                    ease: "easeInOut"
                }
            } 
        }
    },
}

export default SliderNav