import { Link } from "react-router-dom"

export const OneCard = ({ id, name, logo}) => {
  return (
    <div key={id} className="col-12 col-sm-6 col-md-4 carta-cancha">
      <div className="card shadow-sm" id="tarjeta">
        <img src={`/uploads/${logo}`} alt="Imagen 1" className="bd-placeholder-img card-img-top" />
        <div className="card-body">
          <h6 className="card-title">{name}</h6>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group"></div>
            <Link to={`/canchas/reservar/${id}`} className="text-body-secondary">
              Reservar
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}