import { Modal } from 'react-bootstrap';
import { Wallet, initMercadoPago } from "@mercadopago/sdk-react";
import { environments } from '../../config/environments.js';
import './modal.css';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function CustomModal({ show, onHide, title, reserva, children }) {
  const [preferenceId, setPreferenceID] = useState(null);
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  initMercadoPago('APP_USR-1ab138b0-19e9-4432-917e-f84606db9b05');

  const createPreference = async () => {
    try {
      const response = await axios.post(`${environments.API_URL}/create_preference`, {
        description: "Cancha",
        price: 100,
        quantity: 1,
        currency_id: "ARS"
      });
      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
      handlePaymentError();
    }
  };

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

  const handlePaymentError = () => {
    Swal.fire({
      title: 'Error',
      text: 'Hubo un problema al procesar la reserva.',
      icon: 'error',
      confirmButtonText: 'OK'
    });
  };

  const handlePaymentSuccess = () => {
    setPaymentCompleted(true);
    Swal.fire({
      title: 'Reserva exitosa',
      text: 'La reserva se ha realizado con exito.',
      icon: 'success',
      confirmButtonText: 'OK'
    })
    reserva();
    onHide();
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
          <button className="submit" onClick={handleBuy}> Reservar </button>
        </Modal.Footer>
        {preferenceId && !paymentCompleted && (
          <Wallet
          initialization={{ preferenceId }}
          onClose={handlePaymentSuccess}
        />
        )}
      </div>
    </Modal>
  );
}

export default CustomModal;
