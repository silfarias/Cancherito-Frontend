import { useState, useEffect } from "react";
import { environments } from "../config/environments";
import Search from "./Search";

export const ListadoCanchas = () => {
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

  return (
    <div className="container mt-3">
      <Search handleSearch={handleSearch} searchTerm={searchTerm} />
      <div className="row" id="mostrar-canchas">
        {filteredCanchas.length === 0 ? (
          <p>No hay canchas disponibles</p>
        ) : (
          filteredCanchas.map((cancha) => (
            <div key={cancha.id} className="col-12 col-sm-6 col-md-4 mt-2 carta-cancha">
              <div className="card shadow-sm" id="tarjeta">
                <img src={`/uploads/${cancha.logo}`} alt="Imagen 1" className="bd-placeholder-img card-img-top" />
                <div className="card-body">
                  <h6 className="card-title">{cancha.name}</h6>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group"></div>
                    <a href={`/canchas/reservar/${cancha.id}`} className="text-body-secondary">
                      Reservar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
