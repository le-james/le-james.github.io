import React, { useState } from "react";
import Home from "./components/Home";
import "./App.css";
import { Route, Switch, useLocation } from "react-router-dom";

//project component
import Projects from "./components/Projects";
import About from "./components/About";

//project pages component
import OD_project from "./components/project_pages/OD_project";
// import RPOD_project from "./components/project_pages/RPOD_project";
// import TESTBED_project from "./components/project_pages/TESTBED_project";
// import DDR_project from "./components/project_pages/DDR_project";
import PRINTER_project from "./components/project_pages/PRINTER_project";
// import PLC_project from "./components/project_pages/PLC_project";

import Under_construction from "./components/project_pages/Under_construction";


// COMPONENTS NEED TO HAVE A CAPITAL LETTER FOR ITS FIRST LETTER!!!

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

  //RESET RGB ***************************** DOESNT WORK - footer.js set white manually in iconVariant
  var randRGBReset = (toggle) => {
    if (toggle === 1) {
    
    } else {
      // setRandRGB({ red: 255, green: 255, blue: 255 })
    }
  }

let location = useLocation()
let currPath = location.pathname
// console.log(currPath)

  return (
    <Switch key={location.key} location={location}>
      <Route path="/" exact render={(props) => ( <Home {...props} currPath={currPath} randRGB={randRGB} randRGBgenerator={randRGBgenerator} randRGBReset={randRGBReset}/>)} />
      <Route path="/projects" render={(props) => ( <Projects {...props} currPath={currPath} randRGB={randRGB} randRGBgenerator={randRGBgenerator} randRGBReset={randRGBReset}/>)} />
      <Route path="/about" render={(props) => ( <About {...props} currPath={currPath} randRGB={randRGB} randRGBgenerator={randRGBgenerator} randRGBReset={randRGBReset}/>)} />

      <Route path="/od_project" render={(props) => ( <OD_project {...props} currPath={currPath} randRGB={randRGB} randRGBgenerator={randRGBgenerator} randRGBReset={randRGBReset}/>)} />
      <Route path="/rpod_project" component={Under_construction}/>
      <Route path="/testbed_project" component={Under_construction}/>
      <Route path="/ddr_project" component={Under_construction}/>
      <Route path="/printer_project" render={(props) => ( <PRINTER_project {...props} currPath={currPath} randRGB={randRGB} randRGBgenerator={randRGBgenerator} randRGBReset={randRGBReset}/>)} />
      {/* <Route path="/plc_project" component={PLC_project}/> */}
    </Switch>
  )
}

export default App;