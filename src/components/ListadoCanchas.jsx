import { useState, useEffect, useCallback } from "react";
import { environments } from "../config/environments";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { OneCard } from "./OneCard";
import { useParams, useSearchParams } from "react-router-dom";

export const ListadoCanchas = () => {
  const [params, setSearchParams] = useSearchParams();
  const [canchas, setCanchas] = useState([]);
  const [filteredCanchas, setFilteredCanchas] = useState([]);
  
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

  const handleSearch = useCallback((event) => {
    const query = event.target.value;
    setSearchParams({ q: query });
  }, []);

  useEffect(() => {
    const query = params.get('q') ?? '';
    let filteredResults = canchas.filter(cancha =>
      cancha.name.toLowerCase().includes(query.toLowerCase())
      || query.length == 0
    );
    setFilteredCanchas(filteredResults);
  });

  return (
    <>
      <Navbar handleSearch={handleSearch}/>
      <div className="container mt-3">
        <h3 className="mb-2 mt-2 text-center text-light rounded p-2" style={{ backgroundImage: 'linear-gradient(180deg,#1385be,#265d86)', color: 'white' }}>Canchas</h3>
        <div className="row" id="mostrar-canchas">
          { filteredCanchas.length === 0 ? (
            <div className="text-center mt-3">
              <img src="/img/error-404.jpeg" alt="404" style={{ width: '40%', borderRadius: '10px' }} />
            </div>
          ) : (
            filteredCanchas.map((cancha) => (
              <OneCard id={cancha.id} name={cancha.name} logo={cancha.logo} key={cancha.id}/>
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
