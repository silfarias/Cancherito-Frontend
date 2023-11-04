const Centro = () => {
  return (
    <>
      <div className="container-fluid main">
        <div id="myCarousel" className="carousel carousel-fade slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="item active background">
                </div>
            </div>
        </div>
  
        <div className="covertext">

          <div className="col-lg-10">
            <h1 className="title">CANCHERITO</h1>
            <h3 className="subtitle">
              Explorá las canchas disponibles en tu ciudad y reservá al instante :)
            </h3>
          </div>
  
          <div id="unexplorar" className="col-xs-12 explore">
            <div id="explore">
              <div className="Flex-sc-1az401y-0 indexstyled__InputContainer-sc-ctjx00-3 ifPHTK">
                <svg xmlns="http://www.w3.org/2000/svg" 
                  width="27" 
                  height="27" fill="white" 
                  className="bi bi-geo-alt"
                  viewBox="0 0 16 16">
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>
                <input 
                  placeholder="Buscar Ciudad" 
                  type="text" id="ciudad" 
                  className="indexstyled__StyledInput-sc-ctjx00-2 kvLJpR"
                />
              </div>
              <a href="/canchas">
                <button type="button" 
                  className="btn btn-lg explorebtn">VER CANCHAS
                </button>
              </a>
            </div>
          </div>  
        </div>
      </div>
    </>
  )
}

const Cards = () => {
  return (
    <>
      <Centro />
      <div className="container col-12 album py-5 bg-body-secundary" id="caja-card">
        <h4 className="text-center mb-4">Canchas Destacadas</h4>

        <div className="row justify-content-center align-items-center">
          <div className="col-11 col-sm-6 col-md-4 mt-2">
            <div className="card shadow-sm" id="tarjeta">
              <img src="img/cancha1.jfif" alt="Imagen 1" className="bd-placeholder-img card-img-top" />
              <div className="card-body">
                <h6 className="card-title">The Futbol Factory</h6>
                <div className="d-flex justify-content-between align-items-center">
                <div>
                  <i className="bi bi-star-fill star-dest"></i>
                  <i className="bi bi-star-fill star-dest"></i>
                  <i className="bi bi-star-fill star-dest"></i>
                  <i className="bi bi-star-fill star-dest"></i>
                  <i className="bi bi-star-fill star-dest"></i>
                </div>
                  <a href="/canchas/reservar/6" className="text-body-secondary">Reservar</a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-11 col-sm-6 col-md-4 mt-2">
            <div className="card shadow-sm" id="tarjeta">
              <img src="img/cancha2.jfif" alt="Imagen 2" className="bd-placeholder-img card-img-top" />
              <div className="card-body">
                <h6 className="card-title">Chacra 8</h6>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <i className="bi bi-star-fill star-dest"></i>
                    <i className="bi bi-star-fill star-dest"></i>
                    <i className="bi bi-star-fill star-dest"></i>
                    <i className="bi bi-star-fill star-dest"></i>
                    <i className="bi bi-star-fill star-dest"></i>
                  </div>
                  <a href="/canchas/reservar/8" className="text-body-secondary">Reservar</a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-11 col-sm-6 col-md-4 mt-2">
            <div className="card shadow-sm" id="tarjeta">
              <img src="img/cancha3.jfif" alt="Imagen 3" className="bd-placeholder-img card-img-top" />
              <div className="card-body">
                <h6 className="card-title">Maracaná</h6>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <i className="bi bi-star-fill star-dest"></i>
                    <i className="bi bi-star-fill star-dest"></i>
                    <i className="bi bi-star-fill star-dest"></i>
                    <i className="bi bi-star-fill star-dest"></i>
                    <i className="bi bi-star-fill star-dest"></i>
                  </div>
                  <a href="/canchas/reservar/7" className="text-body-secondary">Reservar</a>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </>
  )
}

const Button = () => {
  return (
    <div id="mas-canchas">
      <a href="/canchas">
      <button className="btn">Mas canchas</button>
      </a>
    </div>
  ) 
}

export const Main = () => {
  return (
    <>
      <Cards />
      <Button />
    </>
  )
}