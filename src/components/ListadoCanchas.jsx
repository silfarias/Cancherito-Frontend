import { useState, useEffect } from "react"
import { environments } from "../config/environments";

export const ListadoCanchas = () => {

    const [ canchas, setCanchas ] = useState([]);

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
        })
        .catch((error) => {
            console.error(error);
        });
    }, []);

    return (
        <div className="container mt-3">
          <div className="row" id="mostrar-canchas">
            {canchas.map((cancha) => (
              <div key={cancha.id} className="col-4 carta-cancha">
                <div className="card shadow-sm" id="tarjeta">
                  <img src={`uploads/${cancha.logo}`} alt="Imagen 1" className="bd-placeholder-img card-img-top" />
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
            ))}
          </div>
        </div>
      );   
}