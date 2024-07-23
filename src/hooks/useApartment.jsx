import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function useApartment() {
  const [apartment, setApartment] = useState(null);
  const { apartmentId } = useParams();

  useEffect(() => {
    fetch("../logements.json")
      .then((res) => {
        return res.json();
      })

      .then((apartments) => {
        // Recherche de l'appartement correspondant à l'ID passé dans l'état de la route
        const searchApartment = apartments.find(
          (apartment) => apartment.id === apartmentId
        );
        setApartment(searchApartment);
      })
      .catch(console.error);
  }, [apartmentId]);
  return apartment;
}
