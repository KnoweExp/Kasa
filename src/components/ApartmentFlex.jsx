import React, { useEffect, useState } from "react";
import "./ApartmentFlex.sass";
import Apartment from "./Apartment.jsx";
import { useApartments } from "../../public/hooks/useApartments";

function ApartmentFlex() {
  // fetch des appartements
  const apartments = useApartments();

  return (
    <div className="flex">
      {apartments.map((apartment) => (
        <Apartment
          title={apartment.title}
          imageUrl={apartment.cover}
          id={apartment.id}
          key={apartment.id}
        />
      ))}
    </div>
  );
}

export default ApartmentFlex;
