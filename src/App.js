import React, { useState } from "react";
import Home from "./components/Home";
import "./App.css";

const App = () => {

  // const maxColor = 256;
  const maxColor = 256;
  const minColor = 75;

  const randRGBgenFilter = () => Math.floor(Math.random() * (maxColor - minColor) + minColor)

  const [randRGB, setRandRGB] = useState({ red: randRGBgenFilter(), green: randRGBgenFilter(), blue: randRGBgenFilter() })

  //GENERATE RGB
  var randRGBgenerator = (toggle) => {
    if (toggle === 1) {

    } else {
      const randRed = randRGBgenFilter()
      const randGreen = randRGBgenFilter()
      const randBlue = randRGBgenFilter()
      setRandRGB({ red: randRed, green: randGreen, blue: randBlue })
    }
  }

  //RESET RGB
  var randRGBReset = (toggle) => {
    if (toggle === 1) {
    
    } else {
      setRandRGB({ red: 255, green: 255, blue: 255 })
    }
  }

  return (
    <React.Fragment>
      <Home randRGB={randRGB} randRGBgenerator={randRGBgenerator} randRGBReset={randRGBReset}/>
    </React.Fragment>
  )
}

export default App;