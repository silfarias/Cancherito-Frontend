import CustomModal from './modal/Modal.jsx';
import { useCallback, useEffect, useState,  } from 'react';
import './Horarios.css'
import BasicDatePicker from './Calendario.jsx';
import { StyledEngineProvider } from '@mui/material/styles';
import { useSearchParams } from 'react-router-dom';
import Swal from 'sweetalert2';


const BotonReserva = ({ hora, idCancha, disponible, onClick }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const [verBoton, setVerBoton] = useState(false);
  const visibilidadBoton = () => {
    setVerBoton(!verBoton);
    setShowModal(!showModal);
  } 

  return (
    <>
      <button className={`${ disponible ? "btn" : ""} botonReserva ${ !disponible ? "reservado" : ""}`} onClick={toggleModal} id='botonHorario' >
        {hora}
      </button>
      <CustomModal show={showModal} onHide={toggleModal} title="Reservar Cancha" reserva={onClick} idCancha={idCancha}>
        ¿Estas seguro que deseas reservar a las {hora} ?
      </CustomModal>
    </>
  )
}

export const Horarios = ({ cantcanchas, idCancha }) => {
  const [ params, setParams ] = useSearchParams();


  function vectorHoras(num) {
    const arrayUnaCancha = [
      ["18:00 a 19:00"],
      ["19:00 a 20:00"],
      ["20:00 a 21:00"],
      ["21:00 a 22:00"],
      ["22:00 a 23:00"]
    ]
    const arrayDosCanchas = [
      ["18:00 a 19:00", "18:00 a 19:00"],
      ["19:00 a 20:00", "19:00 a 20:00"],
      ["20:00 a 21:00", "20:00 a 21:00"],
      ["21:00 a 22:00", "21:00 a 22:00"],
      ["22:00 a 23:00", "22:00 a 23:00"]
    ]
    const arrayTresCanchas = [
      ["18:00 a 19:00", "18:00 a 19:00", "18:00 a 19:00"],
      ["19:00 a 20:00", "19:00 a 20:00", "19:00 a 20:00"],
      ["20:00 a 21:00", "20:00 a 21:00", "20:00 a 21:00"],
      ["21:00 a 22:00", "21:00 a 22:00", "21:00 a 22:00"],
      ["22:00 a 23:00", "22:00 a 23:00", "22:00 a 23:00"]
    ]
    const arrayCuatroCanchas = [
      ["18:00 a 19:00", "18:00 a 19:00", "18:00 a 19:00", "18:00 a 19:00"],
      ["19:00 a 20:00", "19:00 a 20:00", "19:00 a 20:00", "19:00 a 20:00"],
      ["20:00 a 21:00", "20:00 a 21:00", "20:00 a 21:00", "20:00 a 21:00"],
      ["21:00 a 22:00", "21:00 a 22:00", "21:00 a 22:00", "21:00 a 22:00"],
      ["22:00 a 23:00", "22:00 a 23:00", "22:00 a 23:00", "22:00 a 23:00"]
    ]
    if (num == 1) {
      return arrayUnaCancha
    } else if (num == 2) {
      return arrayDosCanchas
    } else if (num == 3) {
      return arrayTresCanchas
    } else {
      return arrayCuatroCanchas
    }
  }
  const arrayHorarios = vectorHoras(cantcanchas);
  const [ horarios, setHorarios ] = useState(arrayHorarios);

  useEffect(() => {
    const disponibles = localStorage.getItem(idCancha) ?? 'null';
    console.log('Disponibles', disponibles);
    setHorarios(JSON.parse(disponibles) || arrayHorarios)
  }, [])

  useEffect(() => {
    if (horarios == arrayHorarios) {
      return;
    }
    localStorage.setItem(idCancha, JSON.stringify(horarios))
  }, [horarios])

  const handleClick = useCallback(({ filaIndex, columnaIndex }) => {
    const nuevoHorarios = [[],[],[],[],[]];

    for (let fila = 0; fila < horarios.length; fila++) {
      for (let columna = 0; columna < horarios[fila].length; columna++) {
        if (fila === filaIndex && columna === columnaIndex) {
          nuevoHorarios[fila][columna] = null;
        } else { 
          console.log(fila, columna);
          nuevoHorarios[fila][columna] = horarios[fila][columna];
        }
      }
    }
    console.log(nuevoHorarios);
    setHorarios(nuevoHorarios);
  }, [horarios]);

  useEffect(() => {
    if ( params.get('collection_status') == 'approved') {
      Swal.fire({
        title: 'Reserva exitosa',
        text: 'Gracias por tu reserva',
        icon: 'success',
        confirmButtonText: 'OK'
      })
    }
  }, [params])

  return (
    <div id='contenedor-horas'>
      <div className='row' id='contenedor-turnos-fecha'>
        <div className='col-3' id='turnos-disponibles' >
          <h5>Turnos disponibles</h5>
        </div>

        <div className='offset-1 col-7' id='fecha'>
          <div className="d-flex flex-column align-items-center" id='elige-fecha'>

            <StyledEngineProvider injectFirst>
              <BasicDatePicker />
            </StyledEngineProvider>

          </div>
        </div>
      </div>
      <table className="table" id="tabla">
        <thead id=''>
          <tr>
            {
              arrayHorarios[0].map((_, index) => (
                <th key={index} scope="col">{`Cancha ${index + 1}`}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            arrayHorarios.map((fila, filaIndex) => (
              <tr key={filaIndex}>
                {fila.map((horario, horarioIndex) => (
                  <td key={horarioIndex}>
                    <BotonReserva hora={horario} idCancha={idCancha} onClick={() => handleClick({ filaIndex, columnaIndex: horarioIndex })} disponible={horarios[filaIndex][horarioIndex] !== null} />
                  </td>
                ))}
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};