import { Modal } from 'react-bootstrap';
import './modal.css';

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
                        className="submit"
                        onClick={(e) => {
                            e.preventDefault();
                            alert("Reservado pa");
                        }}
                        >
                        Reservar
                    </button>
                </Modal.Footer>
            </div>
        </Modal>
    );
}

export default CustomModal;
