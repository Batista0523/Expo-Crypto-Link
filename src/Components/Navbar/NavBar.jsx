import React from "react";
import "./NavBar.css";
import Logo from "../Logo";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div>
      <Link to="/">
        {" "}
        <Logo />{" "}
      </Link>
      <Link to="/speakers"><h3>Speakers</h3></Link>
    </div>
  );
}

export default NavBar;
