import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/Navbar/NavBar";
import Home from "./containers/Home/Home";
import Speakers from "./containers/Speakers/Speakers";
import Sponsors from "./Sponsors/Sponsors";




function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/sponsors" element={<Sponsors />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
