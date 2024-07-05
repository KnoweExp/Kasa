import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useApartment() {
  const [apartment, setApartment] = useState(null);
  const location = useLocation(); // Utilisation du hook useLocation pour accéder aux informations de la route actuelle

  useEffect(() => {
    const abortController = new AbortController();
    fetch("logements.json")
      .then((res) => res.json())
      .then((apartments) => {
        // Recherche de l'appartement correspondant à l'ID passé dans l'état de la route
        const Apartment = apartments.find(
          (apartment) => apartment.id === location.state.apartmentId
        );
        setApartment(Apartment);
      })
      .catch(console.error);
    return () => {
      abortController.abort();
    };
  }, []);
  return apartment;
}
