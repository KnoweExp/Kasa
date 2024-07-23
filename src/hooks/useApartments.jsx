import { useEffect, useState } from "react";

// Définition du hook personnalisé useApartments pour récupérer les données des appartements
export const useApartments = () => {
  const [apartments, setApartments] = useState([]); // Initialisation de l'état des appartements avec un tableau vide

  useEffect(() => {

    fetch("logements.json")
      .then((res) => res.json())
      .then((res) => {
        setApartments(res);
      })
      .catch(console.error);

    // Fonction de nettoyage exécutée lors du démontage du composant
  }, []);

  return apartments;
};
