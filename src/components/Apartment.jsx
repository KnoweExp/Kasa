import React from "react";
import "./Apartment.sass";
import { Link } from "react-router-dom";

function Apartment(props) {
  console.log("props dans apartment:", props);
  return (
    <Link to="/apartment">
      <div className="apartment">
        <img src={props.imageUrl} alt="" />
        <div className="apartment_title">{props.title}</div>
      </div>
    </Link>
  );
}

export default Apartment;
