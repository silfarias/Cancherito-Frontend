import { useState, useEffect } from "react";
import { environments } from "../config/environments";


export const useCustome = ()=>{
  const [canchas, setCanchas] = useState([]);
  const [filteredCanchas, setFilteredCanchas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(`${environments.API_URL}/canchas/obtenerCanchas`, {
      method: 'GET'
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setCanchas(data);
        setFilteredCanchas(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchTerm(query);

    const filteredResults = canchas.filter(cancha =>
      cancha.name.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredCanchas(filteredResults);
  };
  return {handleSearch, searchTerm, filteredCanchas}
}