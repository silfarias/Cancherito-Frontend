import { useEffect, useState } from 'react';
import { environments } from "../config/environments";
import { useParams } from 'react-router-dom';
import CustomModal from './modal/Modal.jsx';
import Button from 'react-bootstrap/Button';

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
  }, []);

  return (
    <div className="container-fluid mt-2" id="canchas-body">
      <div className='row'>
        <div className='col'>
          <button 
            onClick={() => window.history.back()} 
            id='boton-volver'>
            Volver
          </button>
        </div>
      </div>
      <div className="row" id="datos-cancha">
        <div className="col-12" id="datos">
          <div className="row" id="row-datos">
            <div className="col-3" id="logo">
              <img src={`/uploads/${oneCancha.logo}`} alt="" />
            </div>
            <div className="col-7" id="nombre-cancha">
              <h4>{oneCancha.name}</h4>
              <p>{oneCancha.description}</p>
            </div>
            <div className='col-2'>
              <h5 style={{color:'blue'}}>Ubicación</h5>
              <p style={{color:'black'}}>{oneCancha.location}</p>
            </div>
          </div>
          <Horarios numberCourts={oneCancha.number_courts} />
        </div>
      </div>
      {/* <Comentarios /> */}
    </div>
  );
}

function Horarios({ numberCourts }) {
  // MODAL 
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const columns = [];
  for (let i = 1; i <= numberCourts; i++) {
    columns.push(
      <td key={i}>
        <button 
          className="btn"
          onClick={toggleModal}>
          17:00-18:00
        </button>
        <CustomModal show={showModal} onHide={toggleModal} title="Reservar Cancha">
          ¿Estás seguro que quieres reservar de 17:00 a 18:00?
        </CustomModal>
      </td>
    );
  }

  return (
    <div className="col-12" id="reserva">
      <select className="form-select" aria-label="Default select example">
        <option value="">Selecciona fecha para reservar</option>
        <option value="1">05/11/2023</option>
        <option value="2">06/11/2023</option>
        <option value="3">07/11/2023</option>
      </select>

      <h5>Turnos disponibles</h5>

      <table className="table" id="tabla">
        <thead>
          <tr>
            {columns.map((_,i) => (
              <th key={i} scope="col">{`Cancha ${i + 1}`}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          <tr>
            {columns}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function Comentarios() {
  return (
    <div className="form-floating d-flex align-items-center">
      <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
      <label htmlFor="floatingTextarea">Dejar un comentario</label>
      <button className="btn" style={{ marginLeft: '10px' }} type="submit">Publicar</button>
    </div>
  );
}

export default Reserva