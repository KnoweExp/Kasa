import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useApartment() {
  const [apartment, setApartment] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const abortController = new AbortController();
    fetch("logements.json")
      .then((res) => res.json())
      .then((apartments) => {
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
