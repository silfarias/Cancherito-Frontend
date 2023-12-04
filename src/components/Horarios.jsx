import CustomModal from './modal/Modal.jsx';
import { useState } from 'react';
import './Horarios.css'
import BasicDatePicker from './Calendario.jsx';
import { StyledEngineProvider } from '@mui/material/styles';

const BotonReserva = ({hora})=>{
  
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const [verBoton, setVerBoton] = useState(false);
  const visibilidadBoton = () =>{
    setVerBoton(!verBoton); 
    setShowModal(!showModal);
  }

  return(
    <>
      <button className= {`btn botonReserva ${verBoton ? "reservado":""}`} onClick={toggleModal}>
        {hora}
      </button>
      <CustomModal show={showModal} onHide={toggleModal} title="Reservar Cancha" reserva={visibilidadBoton}>
        ¿Estas seguro que deseas reservar a las {hora} ?
      </CustomModal>
  </>
  )
}

export const Horarios = ({cantcanchas}) => {

  function vectorHoras(num){
    const arrayUnaCancha = [
      ["18:00 a 19:00"],
      ["19:00 a 20:00"],
      ["20:00 a 21:00"],
      ["21:00 a 22:00"],
      ["22:00 a 23:00"]
    ]
    const arrayDosCanchas = [
      ["18:00 a 19:00","18:00 a 19:00"],
      ["19:00 a 20:00","19:00 a 20:00"],
      ["20:00 a 21:00","20:00 a 21:00"],
      ["21:00 a 22:00","21:00 a 22:00"],
      ["22:00 a 23:00","22:00 a 23:00"]
    ]
    const arrayTresCanchas = [
      ["18:00 a 19:00","18:00 a 19:00","18:00 a 19:00"],
      ["19:00 a 20:00","19:00 a 20:00","19:00 a 20:00"],
      ["20:00 a 21:00","20:00 a 21:00","20:00 a 21:00"],
      ["21:00 a 22:00","21:00 a 22:00","21:00 a 22:00"],
      ["22:00 a 23:00","22:00 a 23:00","22:00 a 23:00"]
    ]
    const arrayCuatroCanchas = [
        ["18:00 a 19:00","18:00 a 19:00","18:00 a 19:00","18:00 a 19:00"],
        ["19:00 a 20:00","19:00 a 20:00","19:00 a 20:00","19:00 a 20:00"],
        ["20:00 a 21:00","20:00 a 21:00","20:00 a 21:00","20:00 a 21:00"],
        ["21:00 a 22:00","21:00 a 22:00","21:00 a 22:00","21:00 a 22:00"],
        ["22:00 a 23:00","22:00 a 23:00","22:00 a 23:00","22:00 a 23:00"]
    ]
    if(num==1){
      return arrayUnaCancha
    }else if(num==2){
      return arrayDosCanchas
    }else if(num==3){
      return arrayTresCanchas
    }else{
      return arrayCuatroCanchas
    }
    }
    const arrayHorarios = vectorHoras(cantcanchas);

    return(
    <div id='contenedor-horas'>
      <div className='row' id='contenedor-turnos-fecha'>
        <div className='col-3'id='turnos-disponibles' >
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
              arrayHorarios[0].map((_,index) => (
                <th key={index} scope="col">{`Cancha ${index + 1}`}</th>
              ))
              }
            </tr>
          </thead>
          <tbody>
              {
              arrayHorarios.map((fila)=>(
                <tr>
                  {fila.map((horario)=>(
                    <td>
                      <BotonReserva hora={horario} />
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