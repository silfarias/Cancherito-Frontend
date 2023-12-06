import { Modal } from 'react-bootstrap';
import { Wallet, initMercadoPago } from "@mercadopago/sdk-react";
import { environments } from '../../config/environments.js';
import './modal.css';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function CustomModal({ show, onHide, title, reserva, children, idCancha }) {

  //Mercado Pago
  const [preferenceId, setPreferenceID] = useState(null);

  initMercadoPago('APP_USR-1ab138b0-19e9-4432-917e-f84606db9b05');

  const createPreference = async () => {
    try {
      const response = await axios.post(`${environments.API_URL}/create_preference`, {
        description: "Reserva de cancha",
        price: 100,
        quantity: 1,
        currency_id: "ARS",
        num_cancha: idCancha
      });
      const { id } = response.data;
      console.log(response)
      return id;
    } catch (error) {
      console.log(error);
      handlePaymentError();
    }
  };

  // Funciones de error
  const handlePaymentError = () => {
    Swal.fire({
      title: 'Error',
      text: 'Hubo un problema al procesar la reserva.',
      icon: 'error',
      confirmButtonText: 'OK'
    });
  };

  // Funcion de compra
  const handleBuy = async () => {
    try {
      const id = await createPreference();
      if (id) {
        setPreferenceID(id);
      }
    } catch (error) {
      console.log(error);
      handlePaymentError();
    }
  };

  return (
    <Modal show={show} onHide={onHide} dialogClassName="modal-left" backdrop="static" className='modal' centered>
      <div className="modal-left-content">
        <Modal.Header closeButton className="modal_header">
          <Modal.Title className="modal_header-title">
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal_content">
          {children}
        </Modal.Body>
        <Modal.Footer>
          <button className="modal-close" onClick={onHide}>Cancelar</button>
          <button className="submit" onClick={handleBuy}>Reservar</button>
        </Modal.Footer>
        {preferenceId && (
          <Wallet
            initialization={{ preferenceId, redirectMode: 'blank' }}
            onSubmit={() => {
              setTimeout(() => {
                Swal.fire({
                  title: 'Reserva exitosa',
                  text: 'Gracias por tu reserva',
                  icon: 'success',
                  confirmButtonText: 'OK'
                })
              }, 12000);
              reserva();
            }}
          />
        )}
      </div>
    </Modal>
  );
}

export default CustomModal;
