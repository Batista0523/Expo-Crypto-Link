import React from "react";
import "./NavBar.css";
import Logo from "../Logo";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function NavBar() {
  return (
    <div className="navbar-container">
      <HashLink smooth to="/#">
        {" "}
        <Logo />{" "}
      </HashLink>

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
  );
}

export default NavBar;
