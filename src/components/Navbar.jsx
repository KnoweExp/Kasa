import React from 'react';
import "./Navbar.sass";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
        <NavLink to="/">
          <div className="navbar__logo">
              <img src="LOGO_kasa.png" alt="logo" />
          </div>
        </NavLink>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">
          <div>A propos</div>
        </NavLink>

    </nav>
  )
}

export default Navbar