import NavBar from "./components/navbar/NavBar";
import './App.css'
import Intro from "./components/intro/Intro";
import Services from "./components/Servicess/Services";
import Experience from "./components/Experience/Experience";
import Portafolio from "./components/Portafolio/Portafolio";
import Contact from "./components/Contact/Contact";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Portafolio/>
      <Contact/>
    </div>
  );
}

export default App;
