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




function App() {
  return (
    <div className="App">
      <NavbarPortafolio />
      <Intro/>
      <Services/>
      <Experience/>
      <Portafolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
