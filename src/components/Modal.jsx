import './modal.css';
import { Modal } from 'react-bootstrap';

function CustomModal({ show, onHide, title, children }) {
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
                        className="submit">
                        Reservar
                    </button>
                </Modal.Footer>
            </div>
        </Modal>
    );
}

export default CustomModal;
