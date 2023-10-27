function Reserva () {
    return (
    <div className="container" id="canchas-body">
        <div className="row" id="datos-cancha">
            <div className="col-12" id="datos">
                <div className="row" id="row-datos">      
                </div>
                <Horarios/>
            </div>
        </div>
        <Comentarios/>
    </div>
    )

}

function Horarios () {
    return (
    <div className="col-12" id="reserva">
        <select className="form-select" aria-label="Default select example">
            <option selected> Selecciona fecha para reservar </option>
            <option value="1">11/10/2023</option>
            <option value="2">12/10/2023</option>
            <option value="3">13/10/2023</option>
        </select>

        <h5>Turnos disponibles</h5>

        <table className="table" id="tabla">
            <thead>
              <tr>
                <th scope="col">Cancha 1</th>
                <th scope="col">Cancha 2</th>
                <th scope="col">Cancha 3</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td><button className="btn">16:00 a 17:00</button></td>
                <td><button className="btn">16:00 a 17:00</button></td>
                <td><button className="btn">18:00 a 19:00</button></td>
              </tr>
              <tr>
                <td><button className="btn">19:00 a 20:00</button></td>
                <td><button className="btn">17:00 a 18:00</button></td>
                <td><button className="btn">18:00 a 19:00</button></td>
              </tr>
              <tr>
                <td><button className="btn">20:00 a 21:00</button></td>
                <td><button className="btn">19:00 a 20:00</button></td>
                <td><button className="btn">18:00 a 19:00</button></td>
              </tr>
              <tr>
                <td><button className="btn">21:00 a 22:00</button></td>
                <td><button className="btn">22:00 a 23:00</button></td>
                <td><button className="btn">18:00 a 19:00</button></td>
              </tr>
            </tbody>
        </table>
    </div>

    )
}

function Comentarios() {
    return (
      <div className="form-floating d-flex align-items-center">
        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
        <label htmlFor="floatingTextarea">Dejar un comentario</label>
        <button className="btn" style={{marginLeft: '10px'}} type="submit">Publicar</button>
      </div>
    );
}
  

export default Reserva