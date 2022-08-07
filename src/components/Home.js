import React from 'react'
import Slider from './sliders/Slider.js';
import Footer from './footer'

//CSS
import "./home.css"

const Home = ({ currPath, randRGB, randRGBgenerator, randRGBReset }) => {
    return (
        <React.Fragment>
            <Slider randRGB={randRGB} randRGBgenerator={randRGBgenerator} randRGBReset={randRGBReset} />   
            <Footer currPath={currPath} randRGB={randRGB} randRGBgenerator={randRGBgenerator} randRGBReset={randRGBReset} />    
        </React.Fragment>
    )
}

export default Home