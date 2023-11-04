import { useEffect, useState } from 'react';
import { environments } from "../config/environments";
import { useParams } from 'react-router-dom';
import CustomModal from './Modal.jsx';

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
    <div className="container mt-3" id="canchas-body">
      <div className="row" id="datos-cancha">
        <div className="col-12" id="datos">
          <div className="row" id="row-datos">
            <div className="offset-1 col-2 " id="logo">
              <img src={`/uploads/${oneCancha.logo}`} alt="" />
            </div>
            <div className="col-9" id="nombre-cancha">
              <h4>{oneCancha.name}</h4>
              <p>{oneCancha.description}</p>
            </div>
          </div>
          <Horarios />
        </div>
      </div>
      <Comentarios />
    </div>
  );
}

function Horarios() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="col-12" id="reserva">
      <select className="form-select" aria-label="Default select example">
        <option value=""> Selecciona fecha para reservar </option>
        <option value="1">01/11/2023</option>
        <option value="2">02/11/2023</option>
        <option value="3">03/11/2023</option>
      </select>

      <h5>Turnos disponibles</h5>

      <table className="table" id="tabla">
        <thead>
          <tr>
            <th scope="col">Cancha 1</th>
            <th scope="col">Cancha 2</th>
            <th scope="col">Cancha 3</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td><button className="btn" onClick={toggleModal}>15:00 a 16:00</button></td>
            <CustomModal
              show={showModal}
              onHide={toggleModal}
              title="Reservar Cancha"
            >
              ¿Estas Seguro que quieres reservar de 15:00 a 16:00?
            </CustomModal>
            <td><button className="btn">16:00 a 17:00</button></td>
            <td><button className="btn">18:00 a 19:00</button></td>
          </tr>
          <tr>
            <td><button className="btn">19:00 a 20:00</button></td>
            <td><button className="btn">17:00 a 18:00</button></td>
            <td><button className="btn">18:00 a 19:00</button></td>
          </tr>
          <tr>
            <td><button className="btn">20:00 a 21:00</button></td>
            <td><button className="btn">19:00 a 20:00</button></td>
            <td><button className="btn">18:00 a 19:00</button></td>
          </tr>
          <tr>
            <td><button className="btn">21:00 a 22:00</button></td>
            <td><button className="btn">22:00 a 23:00</button></td>
            <td><button className="btn">18:00 a 19:00</button></td>
          </tr>
        </tbody>
      </table>
    </div>

  )
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