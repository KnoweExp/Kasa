import React, { useEffect, useState } from "react";
import "./ApartmentPage.sass";
import ApartmentDescription from "../src/components/ApartmentDescription";
import ImageBanner from "../src/components/ImageBanner";
import ApartmentHeader from "../src/components/ApartmentHeader";
import { useLocation } from "react-router-dom";

function ApartmentPage() {
  const location = useLocation();
  const [Apartment, setApartment] = useState(null);

  useEffect(fetchApartmentData, []);

  function fetchApartmentData() {
    fetch("logements.json")
      .then((res) => res.json())
      .then((apartments) => {
        const Apartment = apartments.find(
          (apartment) => apartment.id === location.state.apartmentId
        );
        setApartment(Apartment);
      })
      .catch(console.error);
  }

  if (Apartment == null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="apartment-page">
      <ImageBanner pictures={Apartment.pictures} />
      <ApartmentHeader apartment={Apartment} />
      <div className="apartment__description__area">
        <ApartmentDescription
          title="Description"
          content={Apartment.description}
        />
        <ApartmentDescription
          title="Equipements"
          content={
            <ul>
              {Apartment.equipments.map((eq, index) => (
                <li key={index}>{eq}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
}

export default ApartmentPage;
