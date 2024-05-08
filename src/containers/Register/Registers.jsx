import React from "react";
import './Register.css'
function Registers() {
  return (
    <div className="register-container">
      <h1 className="title-register">Registers</h1>
      <div>
        <form  className="form-container">
          <input type="text" className="input" placeholder="First Name" />
          <input type="text" className="input" placeholder="Last Name" />
          <input type="email" className="input" placeholder="Email" />
          <input type="text" className="input" placeholder="Phone Number" />
          <button className="register-btn">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Registers;
