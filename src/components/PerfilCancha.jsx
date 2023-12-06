import { useEffect, useState } from 'react';
import { environments } from "../config/environments";
import { Link, useParams } from 'react-router-dom';
import { Horarios } from './Horarios.jsx';

function Reserva() {
  const [oneCancha, setOneCancha] = useState({});
  let { id } = useParams();

  useEffect(() => {

    fetch(`${environments.API_URL}/canchas/obtenerCancha/${id}`, {
      method: 'GET'
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Error al obtener la cancha');
      })
      .then((data) => {
        setOneCancha(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div className="container mt-2" id="canchas-body">
      <div className='row'>
        <div className='col-2'>
          <Link to='/canchas'>
            <button
              className='btn'
              id='boton-volver'>
              Volver
            </button>
          </Link>
        </div>
      </div>
      <div className="row" id="datos-cancha">
        <div className="col-12" id="datos">
          <div className="row" id="row-datos">
            <div className="col-3" id="logo">
              <img src={`/uploads/${oneCancha.logo}`} alt="" />
              <div className='' id='box-ubication'>
                <h5>Dirección</h5>
                <p style={{ color: 'black' }}>{oneCancha.location}</p>
              </div>
            </div>
            <div className="offset-1 col-7" id="nombre-cancha">
              <h4>{oneCancha.name}</h4>
              <p>{oneCancha.description}</p>
            </div>
          </div>
          <Horarios cantcanchas={oneCancha.number_courts} idCancha={id} />
        </div>
      </div>
    </div>
  );
}

export default Reserva