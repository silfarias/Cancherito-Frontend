export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" id="nav">
      <div className="container-fluid row" id="caja-principal">
        <div className="col-2" id="caja-logo">
          <a className="navbar-brand" href="/">
            <img src="/img/logo_cancheritooo.png" alt="logo" />
          </a>
        </div>
        <form className="d-flex col-5" role="search">
          <div className="input-group">
            <input className="form-control me-2 search-input"
              type="search" placeholder="Buscar Canchas"
              aria-label="Search" />
          </div>
        </form>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end col-4">
          <a href="/login">
            <button className="btn" id="inicio-sesion">
              <svg xmlns="http://www.w3.org/2000/svg"
                width="16" height="16"
                fill="currentColor"
                className="bi bi-person-circle"
                viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
              </svg> Iniciar sesión
            </button>
          </a>
          
          <a href="/register-client"
          ><button className="btn" id="soft-clubes">Software para clubes</button>
          </a>
          <DropdownMenu />
        </div>
      </div>
    </nav>
  )
}

export const DropdownMenu = () => {
  return (
    <div className="dropdown">
      <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Mas...
      </button>
      <ul className="dropdown-menu">
        <li><button className="dropdown-item" type="button">Info Cancherito</button></li>
        {/*<li><button id="cerrar-sesion-btn" className="dropdown-item" type="button">Cerrar Sesión</button></li>*/}
      </ul>
    </div>
  )
}