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
      <ImageBanner imageUrl={Apartment.cover} />
      <ApartmentHeader apartment={Apartment} />
      {/* <div className="apartment__header">
        <div className="apartment__title">
          <h1>Crazy loft on Canal Saint Martin</h1>
          <h2>Paris, Ile de France</h2>
          <div className="apartment__tags">
            <span>Cozy</span>
            <span>Canak</span>
            <span>Paris 10</span>
          </div>
        </div>
        <div className="apartment__owner">
          <div className="apartment__owner__details">
            <h3>
              <span>Alexandre</span>
              <span>Dumas</span>
            </h3>
            <div className="apartment__owner__badge"></div>
          </div>
          <div className="apartment__owner__stars">
            <span className="on">★</span>
            <span className="on">★</span>
            <span className="on">★</span>
            <span className="off">★</span>
            <span className="off">★</span>
          </div>
        </div>
      </div> */}
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
