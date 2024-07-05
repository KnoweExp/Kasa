import { useEffect, useState } from "react";

// Définition du hook personnalisé useApartments pour récupérer les données des appartements
export const useApartments = () => {
  const [apartments, setApartments] = useState([]); // Initialisation de l'état des appartements avec un tableau vide

  useEffect(() => {
    console.log("component was mounted, we fetch apartments");
    const abortController = new AbortController(); // Création d'un AbortController pour pouvoir annuler la requête fetch

    fetch("logements.json", { signal: abortController.signal })
      .then((res) => res.json())
      .then((res) => {
        setApartments(res);
      })
      .catch(console.error);

    // Fonction de nettoyage exécutée lors du démontage du composant
    return () => {
      console.log("component was unmounted");
      abortController.abort();
    };
  }, []);

  return apartments;
};
