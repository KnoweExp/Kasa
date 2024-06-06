import React from 'react';
import "./Navbar.sass";

function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar__logo">
            <img src="LOGO_kasa.png" alt="logo" />
        </div>
        <div>Accueil</div>
        <div>A propos</div>

    </nav>
  )
}

export default Navbar