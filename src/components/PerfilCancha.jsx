import { useEffect, useState } from 'react';
import { environments } from "../config/environments";
import { Link, useParams } from 'react-router-dom';
import { Horarios } from './Horarios.jsx';

//modal
import CustomModal from './modal/Modal.jsx';

//este es del calendario
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

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
            </div>
            <div className="col-7" id="nombre-cancha">
              <h4>{oneCancha.name}</h4>
              <p>{oneCancha.description}</p>
            </div>
            <div className='col-2'>
              <h5 style={{ color: 'blue' }}>Ubicación</h5>
              <p style={{ color: 'black' }}>{oneCancha.location}</p>
            </div>
          </div>
          <Horarios cantcanchas={oneCancha.number_courts} />
        </div>
      </div>
    </div>
  );
}

/* function Horarios({ numberCourts }) {
  // MODAL 
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

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

  function isWithinOneWeek(date) {
    const currentDate = new Date();
    const eightDaysLater = new Date();
    eightDaysLater.setDate(currentDate.getDate() + 7);
    eightDaysLater.setHours(23, 59, 59, 999);
    return date >= currentDate && date <= eightDaysLater;
  }


  return (
    <div className="col-12" id="reserva">
      <div className="d-flex flex-column align-items-center">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker 
              label="Seleccione Fecha"
              value={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              filterDate={isWithinOneWeek} />
          </DemoContainer>
        </LocalizationProvider>
      </div>


      <h5>Turnos disponibles</h5>

      <table className="table" id="tabla">
        <thead>
          <tr>
            {columns.map((_, i) => (
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
} */

export default Reserva