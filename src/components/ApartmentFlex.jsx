import "./ApartmentFlex.sass";
import Apartment from "./Apartment.jsx";
import { useApartments } from "../hooks/useApartments.jsx";

function ApartmentFlex() {
  // fetch des appartements
  const apartments = useApartments();

  return (
    <div className="container">
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
