// import NavBar from "./components/navbar/NavBar";
import './App.css'
import Intro from "./components/intro/Intro";
import Services from "./components/Servicess/Services";
import Experience from "./components/Experience/Experience";
import Portafolio from "./components/Portafolio/Portafolio";
import Contact from "./components/Contact/Contact";

import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarPortafolio from './components/Nav-Bar/NavbarPortafolio';
import Footer from './components/Footer/Fotter';
import { useState } from 'react';




function App() {

  const [switchMode, setSwitchMode] = useState(false);
  const [darkmode, setDarkmode] = useState(false)

  const switchOn = () => {
    setSwitchMode(!switchMode);
    setDarkmode(!darkmode);
  };
  let classDark = "";
  if (switchMode === true) {
    classDark = "active";
  }
  return (
  
    <div className= {
      `${darkmode ? 'App' : 'darkIntro'}`
    }>
      <button
        onClick={switchOn}
        className={`switch ${classDark}`}
        id="swith">
        <span>
          <i className="bx bx-sun bx-xs"></i>
        </span>
        <span>
          <i className="bx bx-moon bx-xs"></i>
        </span>
      </button>
      <NavbarPortafolio />
      <Intro />
      <Services />
      <Experience />
      <div id='portafolio'></div>
      <Portafolio />
      <div id='contacto'></div>
      <Contact />
      <Footer />
    </div>
    
  );
}

export default App;
