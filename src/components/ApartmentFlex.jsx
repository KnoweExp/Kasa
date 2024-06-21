import React, { useEffect, useState } from "react";
import "./ApartmentFlex.sass";
import Apartment from "./Apartment.jsx";

function ApartmentFlex() {
  const [apartments, setApartments] = useState([]);

  useEffect(fetchApartments, []);

  function fetchApartments() {
    fetch("logements.json")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setApartments(res);
      })
      .catch(console.error);
  }
  return (
    <div className="flex">
      {apartments.map((apartment) => (
        <Apartment title={apartment.title} imageUrl={apartment.cover} />
      ))}
    </div>
  );
}

export default ApartmentFlex;
