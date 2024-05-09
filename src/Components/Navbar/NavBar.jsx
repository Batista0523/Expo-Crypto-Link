import React from "react";
import "./NavBar.css";
import Logo from "../Logo";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function NavBar() {
  return (
    <div className="navbar-container">
      {/* <div className="top-navbar-container">
        <p className="p-top-navbar">
        Date And Time: 25th of June, 2024 at 6:30 pm
        </p>
        <h2 className="title-top-navbar">Address: Dubai, ATLANTIS, THE PALM</h2>
      </div> */}
        <div className="logo">

        <HashLink smooth to="/#">
          <Logo />
        </HashLink>
        </div>
      <div className="links-container">
        <HashLink smooth to="/#speakers">
          <h3>Speakers</h3>
        </HashLink>
        <HashLink smooth to="/#sponsors">
          <h3>Sponsors</h3>
        </HashLink>
        <HashLink smooth to="/#register">
          <h3>Register</h3>
        </HashLink>
        <HashLink smooth to="/#about">
          <h3>About</h3>
        </HashLink>
      </div>
     
    </div>
  );
}

export default NavBar;
