import React from "react";
import Speakers from "../Speakers/Speakers";
import Sponsors from "../../Sponsors/Sponsors";
import Registers from "../Register/Registers";
import About from "../About/About";

function Home() {
  return (
    <div className="app-container">
      <div className="home-container" id="">
        {" "}
        <h1>Home</h1>
      </div>
     
      <div className="sponsors-container" id="sponsors">
        <Sponsors />
      </div>
      <div className="about-container" id="about">
        <About />
      </div>
      <div className="speakers-container" id="speakers">
        <Speakers />
      </div>
      <div className="register-container" id="register">
        <Registers />
      </div>
    </div>
  );
}

export default Home;
