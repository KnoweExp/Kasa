import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

export function useApartment() {
  const [apartment, setApartment] = useState(null);
  const { apartmentId } = useParams(); // Utilisation du hook useLocation pour accéder aux informations de la route actuelle

  useEffect(() => {
    const abortController = new AbortController();
    fetch("../logements.json")
      .then((res) => {
        return res.json();
      })

      .then((apartments) => {
        // Recherche de l'appartement correspondant à l'ID passé dans l'état de la route
        console.log(apartment);
        const searchApartment = apartments.find(
          (apartment) => apartment.id === apartmentId
        );
        setApartment(searchApartment);
      })
      .catch(console.error);
    return () => {
      abortController.abort();
    };
  }, [apartmentId]);
  return apartment;
}
