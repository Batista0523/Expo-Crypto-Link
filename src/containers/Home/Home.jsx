import React from "react";
import Speakers from "../Speakers/Speakers";
import Sponsors from "../../Sponsors/Sponsors";
import Registers from "../Register/Registers";
import About from "../About/About";
import CountDown from "../Countdown/CountDown";
import "./Home.css";
function Home() {
  return (
    <div className="app-container">
      <div className="home-container" id="home">
        {" "}
        <div className="info-home-container">
          <CountDown />
          <p className="home-p">
            {" "}
            25th of June, 2024 at 6:30 pm. Dubai, ATLANTIS, THE PALM
          </p>
          <h1 className="title-home">Expo Crypto Link</h1>
          <p className="home-p">
            {" "}
            Unveiling the Future Where Crypto Visionaries Converge
          </p>
        </div>
      </div>

      <div id="about">
        <About />
      </div>
      <div id="speakers">
        <Speakers />
      </div>
      <div id="register">
        <Registers />
      </div>
      <div id="sponsors">
        <Sponsors />
      </div>
    </div>
  );
}

export default Home;
