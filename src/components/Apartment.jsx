import React from 'react'
import "./Apartment.sass";
import { Link } from 'react-router-dom';

function Apartment() {
  return (
    <div className="apartment">
        <Link to="/apartment">
          <div className="apartment_title">Titre de la location</div>
        </Link>
        </div>
  )
}

export default Apartment