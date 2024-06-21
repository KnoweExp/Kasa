import React from "react";
import "./Apartment.sass";
import { Link } from "react-router-dom";

function Apartment(props) {
  const state = {
    apartmentId: props.id,
  };

  return (
    <Link to="/apartment" state={{ apartmentId: props.id }}>
      <div className="apartment">
        <img src={props.imageUrl} alt="" />
        <div className="apartment_title">{props.title}</div>
      </div>
    </Link>
  );
}

export default Apartment;
