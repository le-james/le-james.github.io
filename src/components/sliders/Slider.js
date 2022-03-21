import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import SliderNav from './SliderNav';

//SLIDES
import FirstSlide from "./slides/FirstSlide"
import SecondSlide from "./slides/SecondSlide"
import ThirdSlide from "./slides/ThirdSlide"
import FourthSlide from "./slides/FourthSlide"

function Slider({ randRGB, randRGBgenerator, randRGBReset }) {

    const [pageNum, changePage] = useState(0);
    const [slideDir, changeDir] = useState(0);

    const slides = [FirstSlide, SecondSlide, ThirdSlide, FourthSlide]
    let SlideComponent = slides[pageNum];
    
    // AUTO PLAY SLIDES
    useEffect(() => {
        changeDir(-1);
        const timeout = setTimeout(() => (slides.length === pageNum + 1) ? changePage(0) : changePage(pageNum + 1), 7500);
        return () => {
            clearTimeout(timeout)
        };
    }, [slides.length, pageNum]);

    return (
        <div className="slideContainer" >
            <AnimatePresence initial={true} custom={slideDir}>
                <motion.div key={pageNum} className="slideGrid" variants={slideVariants} initial="hidden" animate="visible" custom={slideDir} exit="exit">
                    <div className="slide">
                        <SlideComponent wordVariants={wordVariants} letterVariants={letterVariants} />
                        <SliderNav pageNum={pageNum} changePage={changePage} changeDir={changeDir} randRGB={randRGB} randRGBgenerator={randRGBgenerator} randRGBReset={randRGBReset}/>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

//AUTO-PLAY VARIANTS
const slideVariants = {

    hidden: (slideDir) => {
        return {
            x: slideDir > 0 ? -window.screen.width : window.screen.width,
            opacity: 0,
        }
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1.25,
            ease: "backInOut"
        },
    },
    exit: (slideDir) => {
        return {
            opacity: 0,
            x: slideDir < 0 ? -window.screen.width : window.screen.width,
            transition: {
                duration: 0.5,
                ease: "backInOut"
            }
        }
    },
}

//SLIDE VARIANTS
const wordVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.25,
        }
    }
}

const letterVariants = {
    hidden: {
        opacity: 0.65
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 2.5,
            yoyo: Infinity,
            ease: "easeInOut"
        },
    }
}

export default Slider