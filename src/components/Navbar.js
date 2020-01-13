import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../logo.svg"; 

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <img src={logo} alt="coctail db logo" className="logo"/>
        <ul className="nav-links">
          <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}
