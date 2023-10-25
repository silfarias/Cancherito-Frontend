export const Buttons = () => {
    return (
    <div className="d-grid gap-2 d-md-block mt-2">

        <a href="/"><button className="btn m-2" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
             className="bi bi-house" viewBox="0 0 16 16">
            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
            </svg> Inicio </button>
        </a>
    
    
        <a href="/register"><button className="btn m-2" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
             className="bi bi-person-circle" viewBox="0 0 16 16">
             <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
             <path fillRule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
           </svg> Registrarse </button>
        </a>
    </div>
    )
}

export const FormLogin = () => {
    return (
    <div className="wrapper">
        <div className="logo">
            <img className="img-fluid" src="/img/cancherito.png" alt="cancherito"/>
        </div>
  
        <form className="mt-4" id="formLogin" method="POST">
    
            <label>Ingrese su correo electronico:</label>
            <div className="mt-1 form-field d-flex align-items-center">
                <span className="far fa-user"></span>
                <input type="email" name="email" id="email" placeholder="name@example.com" required/>
            </div>
            
            <label>Ingrese su contraseña:</label>
            <div className="mt-1 form-field d-flex align-items-center">
                <span className="fas fa-key"></span>
                <input type="password" name="password" id="contraseña" placeholder="Contraseña" required/>
            </div>
    
          <div className="mt-4" id="boton">
            <button type="submit" className="btn">Iniciar Sesion</button>
          </div>
    
        </form>

        <div className="mt-2">
            <a href="/login/email">Olvidaste tu contraseña?</a>    
        </div>
    </div>
    )
}

