import React, { useState } from "react";
import Home from "./components/Home";
import "./App.css";
import { Route, Switch, useLocation } from "react-router-dom";

//project component
import Projects from "./components/Projects";

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

let location = useLocation()

  return (
    <Switch key={location.key} location={location}>
      <Route path="/" exact render={(props) => ( <Home {...props} randRGB={randRGB} randRGBgenerator={randRGBgenerator} randRGBReset={randRGBReset}/> )} />
      <Route path="/projects" component={Projects}/>
    </Switch>
  )
}

export default App;