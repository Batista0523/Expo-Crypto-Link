import React from "react";
import "./Speakers.css";
import { images } from "../../constants";

function Speakers() {
  return (
    <div>
      <h1 className="speaker-title"> 2024 Speakers</h1>
      <div className="speakers-card"></div>
      <div className="speakers-container">
        <ul className="speaker-list">
          <li className="speaker-item">
            <div className="speaker-img-container">
              <img className="speaker-img" src={images.dinaSaman} alt="" />
            </div>
            <h2 className="speaker-name">Dina Sam'an</h2>
          </li>
          <li className="speaker-item">
            <div className="speaker-img-container">
              <img className="speaker-img" src={images.gracyChen} alt="" />
            </div>
            <h2 className="speaker-name">Gracy Chen</h2>
          </li>
          <li className="speaker-item">
            <div className="speaker-img-container">
              <img className="speaker-img" src={images.alexZinder} alt="" />
            </div>
            <h2 className="speaker-name">Alex Zinder</h2>
          </li>
          <li className="speaker-item">
            <div className="speaker-img-container">
              <img className="speaker-img" src={images.helenHai} alt="" />
            </div>
            <h2 className="speaker-name">Helen Hai</h2>
          </li>
          <li className="speaker-item">
            <div className="speaker-img-container">
              <img
                className="speaker-img"
                src={images.jasonAllegrante}
                alt=""
              />
            </div>
            <h2 className="speaker-name">Jason Allegrante</h2>
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
          </li>
          <li className="speaker-item">
            <div className="speaker-img-container">
              <img className="speaker-img" src={images.maxKordek} alt="" />
            </div>
            <h2 className="speaker-name">Max Kordek</h2>
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
          </li>
          <li className="speaker-item">
            <div className="speaker-img-container">
              <img className="speaker-img" src={images.nenaDokuzov} alt="" />
            </div>
            <h2 className="speaker-name">Nena Dokuzov</h2>
          </li>
          <li className="speaker-item">
            <div className="speaker-img-container">
              <img className="speaker-img" src={images.nicolePurin} alt="" />
            </div>
            <h2 className="speaker-name">Nicole Purin</h2>
          </li>
          <li className="speaker-item">
            <div className="speaker-img-container">
              <img className="speaker-img" src={images.reeceMerrick} alt="" />
            </div>
            <h2 className="speaker-name">Reece Merrick</h2>
          </li>
          <li className="speaker-item">
            <div className="speaker-img-container">
              <img className="speaker-img" src={images.sunnyLu} alt="" />
            </div>
            <h2 className="speaker-name">Sunny Lu</h2>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Speakers;
