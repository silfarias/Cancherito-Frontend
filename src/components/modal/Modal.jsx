import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { environments } from '../../config/environments.js';
import axios from "axios";
import './modal.css';

function CustomModal({ show, onHide, title, children }) {

    // Mercado Pago
    const [preferenceId, setPreferenceID] = useState(null);
    initMercadoPago("TEST-f90e20c5-1e42-44bf-835f-7cd6c55ff428");
  
    const createPreference = async () => {
      try {
        const response = await axios.post(
          `${environments.API_URL}/create_preference`,
          {
            description: "Cancha",
            price: 5000,
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
  
    // Mercado Pago
    const handleBuy = async () => {
      const id = await createPreference();
      if (id) {
          setPreferenceID(id);
      }
    }


    return (
        <Modal
            show={show}
            onHide={onHide}
            dialogClassName="modal-left"
            backdrop="static"
            className='modal'
            centered
        >
            <div className="modal-left-content">
                <Modal.Header
                    closeButton
                    className="modal_header"
                >
                    <Modal.Title
                        className="modal_header-title">
                        {title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body
                    className="modal_content">
                    {children}
                </Modal.Body>
                <Modal.Footer>
                    <button
                        className="modal-close"
                        onClick={onHide}>
                        Cancelar
                    </button>
                    <button 
                        className="submit"
                        onClick={handleBuy}
                        >
                        Reservar
                    </button>
                    {preferenceId && <Wallet initialization={{ preferenceId}}/>} 
                </Modal.Footer>
            </div>
        </Modal>
    );
}

export default CustomModal;
