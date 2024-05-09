import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/Navbar/NavBar";
import Home from "./containers/Home/Home";
import Speakers from "./containers/Speakers/Speakers";
import Sponsors from "./Sponsors/Sponsors";
import Registers from "./containers/Register/Registers";
import About from "./containers/About/About";




function App() {
  return (
    <div>
      <Router>
       
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/register" element={<Registers/>} />
          <Route path="/about" element={<About/>}/>
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
