import React from "react";
import "./Speakers.css";
import { images } from "../../constants";
import "animate.css";
function Speakers() {
  return (
    <div className="speakers-container">
      <h1 className="speaker-title"> 2024 Speakers</h1>
      <ul className="speaker-list">
        <li className="speaker-item ">
          <div className="speaker-img-container">
            <img className="speaker-img" src={images.dinaSaman} alt="" />
          </div>
          <h2 className="speaker-name">Dina Sam'an</h2>
          <h4 className="speaker-company">CoinMENA</h4>
        </li>
        <li className="speaker-item">
          <div className="speaker-img-container">
            <img className="speaker-img" src={images.gracyChen} alt="" />
          </div>
          <h2 className="speaker-name">Gracy Chen</h2>
          <h4 className="speaker-company">Bitget</h4>
        </li>
        <li className="speaker-item">
          <div className="speaker-img-container">
            <img className="speaker-img" src={images.alexZinder} alt="" />
          </div>
          <h2 className="speaker-name">Alex Zinder</h2>
          <h4 className="speaker-company">Ledger Enterprise</h4>
        </li>
        <li className="speaker-item">
          <div className="speaker-img-container">
            <img className="speaker-img" src={images.helenHai} alt="" />
          </div>
          <h2 className="speaker-name">Helen Hai</h2>
          <h4 className="speaker-company">Binance</h4>
        </li>
        <li className="speaker-item">
          <div className="speaker-img-container">
            <img className="speaker-img" src={images.jasonAllegrante} alt="" />
          </div>
          <h2 className="speaker-name">Jason Allegrante</h2>
          <h4 className="speaker-company">Fireblocks</h4>
        </li>
        <li className="speaker-item">
          <div className="speaker-img-container">
            <img
              className="speaker-img"
              src={images.jeanCharlesGaudechon}
              alt=""
            />
          </div>
          <h2 className="speaker-name">Jean Charles Gaudechon</h2>
          <h4 className="speaker-company">OneFootball Labs</h4>
        </li>
        <li className="speaker-item">
          <div className="speaker-img-container">
            <img className="speaker-img" src={images.maxKordek} alt="" />
          </div>
          <h2 className="speaker-name">Max Kordek</h2>
          <h4 className="speaker-company">Lisk</h4>
        </li>
        <li className="speaker-item">
          <div className="speaker-img-container">
            <img
              className="speaker-img"
              src={images.mohammedAlblooshi}
              alt=""
            />
          </div>
          <h2 className="speaker-name">Mohammed Alblooshi</h2>
          <h4 className="speaker-company">
            Dubai International Financial Centre Authority
          </h4>
        </li>
        <li className="speaker-item">
          <div className="speaker-img-container">
            <img className="speaker-img" src={images.nenaDokuzov} alt="" />
          </div>
          <h2 className="speaker-name">Nena Dokuzov</h2>
          <h4 className="speaker-company">Alserkal Group</h4>
        </li>
        <li className="speaker-item">
          <div className="speaker-img-container">
            <img className="speaker-img" src={images.nicolePurin} alt="" />
          </div>
          <h2 className="speaker-name">Nicole Purin</h2>
          <h4 className="speaker-company">OKX</h4>
        </li>
        <li className="speaker-item">
          <div className="speaker-img-container">
            <img className="speaker-img" src={images.reeceMerrick} alt="" />
          </div>
          <h2 className="speaker-name">Reece Merrick</h2>
          <h4 className="speaker-company">Ripple</h4>
        </li>
        <li className="speaker-item">
          <div className="speaker-img-container">
            <img className="speaker-img" src={images.sunnyLu} alt="" />
          </div>
          <h2 className="speaker-name">Sunny Lu</h2>
          <h4 className="speaker-company">Vechain</h4>
        </li>
      </ul>
    </div>
  );
}

export default Speakers;
