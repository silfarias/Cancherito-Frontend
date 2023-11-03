import { AiOutlineCloseCircle } from "react-icons/ai";
import './modal.css';
export const Modal = ({show, close, title, children}) => {
    return (
        <>
          <div className={`modalContainer ${show ? 'show' : ''} `} onClick={() => close()}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal_header">
                    <h2 className="modal_header-title">{title}</h2>
                     <AiOutlineCloseCircle className='close' onClick={() => close()} />
                </div>
                <div className="modal_content">
                    {children}
                </div>
                <div className="modal_footer">
                    <button className="modal-close" onClick={() => close()}>Cacel</button>
                    <button className="submit">Reservar</button>
                </div>
            </div>
          </div>
     </>
    )
}

