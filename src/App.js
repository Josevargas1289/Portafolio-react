import NavBar from "./components/navbar/NavBar";
import './App.css'
import Intro from "./components/intro/Intro";
import Services from "./components/Servicess/Services";
import Experience from "./components/Experience/Experience";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <Services/>
      <Experience/>
    </div>
  );
}

export default App;
