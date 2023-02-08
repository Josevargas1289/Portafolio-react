import NavBar from "./components/navbar/NavBar";
import './App.css'
import Intro from "./components/intro/Intro";
import Services from "./components/Servicess/Services";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <Services/>
    </div>
  );
}

export default App;
