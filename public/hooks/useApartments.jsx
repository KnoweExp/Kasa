import { useEffect, useState } from "react";

export const useApartments = () => {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    console.log("component was mounted, we fetch apartments");
    const abortController = new AbortController();

    fetch("logements.json", { signal: abortController.signal })
      .then((res) => res.json())
      .then((res) => {
        setApartments(res);
      })
      .catch(console.error);

    return () => {
      console.log("component was unmounted");
      abortController.abort();
    };
  }, []);

  return apartments;
};
