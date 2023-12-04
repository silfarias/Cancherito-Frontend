import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { environments } from '../../config/environments.js';
import './modal.css';

import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios"


function CustomModal({ show, onHide, title, reserva, children }) {

    // Mercado Pago
    
    const [preferenceId, setPreferenceID] = useState(null);
    initMercadoPago("TEST-f90e20c5-1e42-44bf-835f-7cd6c55ff428");
  
    const createPreference = async () => {
      try {
        const response = await axios.post(
          "http://localhost:4000/create_preference",
          {
            description: "fulbo",
            price: 100,
            quantity: 1,
            currency_id: "ARS"
          }
        );
        const {id} = response.data;
        return id;
      
      } catch (error) {
          console.log(error);
      }
    };
  
    const handleBuy = async () => {
      const id = await createPreference();
      if (id) {
          setPreferenceID(id);
      }
    }
    

    return (
        <Modal show={show} onHide={onHide} dialogClassName="modal-left" backdrop="static" className='modal'centered>

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
                    <button className="submit" /* onClick={reserva} */ onClick={handleBuy}> Reservar</button> 
                </Modal.Footer>
                {preferenceId && <Wallet initialization={{ preferenceId}}/>} 
            </div>

        </Modal>
    );
}

export default CustomModal;