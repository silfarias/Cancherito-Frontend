import { environments } from "../config/environments";
import { useState, useEffect } from "react";

function Buscador() {
    const [canchas, setCanchas] = useState([]);
    const [busqueda, setBusqueda] = useState('');
    const [resultados, setResultados] = useState([]);

    useEffect(() => {
        fetch(`${environments.API_URL}/api/estab`, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((data) => { setCanchas(data); })
            .catch((error) => {
                console.error("Error al obtener las canchas", error);
            })
    }, []);

    useEffect(() => {
        // Filtrar canchas basadas en el nombre
        const resultadosFiltrados = canchas.filter((cancha) =>
            cancha.name.toLowerCase().includes(busqueda.toLowerCase())
        );
        setResultados(resultadosFiltrados);
    }, [canchas, busqueda]);

    const handleBusquedaChange = (e) => {
        setBusqueda(e.target.value);
    };
    return (
        <>
            <div className="input-group">
                <input
                    className="form-control me-2 search-input"
                    type="search"
                    placeholder="Buscar Canchas"
                    value={busqueda}
                    aria-label="Search"
                    onChange={handleBusquedaChange}
                />
            </div>
            <div className="container mt-3">
                <div className="row" id="mostrar-canchas">
                    { busqueda ? (
                        resultados.length > 0 ? (
                            resultados.map((cancha) => (
                                <div key={cancha.id} className="col-4 carta-cancha">
                                    <div className="card shadow-sm" id="tarjeta">
                                        <img
                                            src={`/uploads/${cancha.logo}`}
                                            alt="Imagen 1"
                                            className="bd-placeholder-img card-img-top"
                                        />
                                        <div className="card-body">
                                            <h6 className="card-title">{cancha.name}</h6>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group"></div>
                                                <a
                                                    href={`/canchas/reservar/${cancha.id}`}
                                                    className="text-body-secondary"
                                                >
                                                    Reservar
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            null
                        )
                    ) : null }
                </div>
            </div>
        </>
    );

}

export default Buscador