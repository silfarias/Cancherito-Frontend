import { Link } from "react-router-dom"
import { OneCard } from "./OneCard"

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
              Explorá las canchas disponibles en tu Ciudad y reservá al instante :)
            </h3>
          </div>

          <div id="unexplorar" className="col-xs-12 explore">
            <div id="explore">
              <Link to="/canchas">
                <button 
                  type="button"
                  className="btn btn-lg explore btn">Explorar
                </button>
              </ Link>
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
      <div className="container col-12 album py-5 bg-body-secundary" id="caja-card">
        <h4 className="text-center mb-4">Canchas Destacadas</h4>

        <div className="row justify-content-center align-items-center">

          <OneCard id="2" name="La Franchesca" logo="padel1.jpg" />
          <OneCard id="3" name="Fair Play" logo="futbolfactory.jpg" />
          <OneCard id="7" name="Sarmiento" logo="basquet.jpg" />

        </div>
      </div>
    </>
  )
}

export const Main = () => {
  return (
    <>
      <Centro />
      <Cards />
    </>
  )
}