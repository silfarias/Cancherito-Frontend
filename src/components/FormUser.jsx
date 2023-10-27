export const Botonera = () => {
  return (
    <div className="d-grid gap-2 d-md-block mt-2">

        <a href="/"><button className="btn m-2" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
             className="bi bi-house" viewBox="0 0 16 16">
            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
            </svg> Inicio </button>
        </a>
    
        <a href="/login"><button className="btn m-2" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
             className="bi bi-person-circle" viewBox="0 0 16 16">
             <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
             <path fillRule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
           </svg> Iniciar Sesion </button>
        </a>
    </div>
  )
}

export const FormUser = () => {
  return (
    <>
    <div className="formulario">
        <div className="logo">
            <img className="img-fluid" src="/img/cancherito.png" alt="cancherito"/>
        </div>
        
        <div className="mx-auto">
            <form id="formNewUser" action="/register" method="POST" className="p-3 mt-2 " />
                    <p className="text-center text-primary-emphasis">Información Personal</p>
                <div className="row">
                    <div className="col col-md-6 col-sm-12 mb-3">  
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input type="text" required={true} className="form-control" id="name" name="name"/>
                    </div>
                    <div className="col col-md-6 col-sm-12 mb-3">  
                        <label htmlFor="lastName" className="form-label">Apellido</label>
                        <input type="text" required={true} className="form-control" id="lastName" name="lastName"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-sm-12 col-md-6 mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" required={true} className="form-control" id="email" name="email"/>
                    </div>
                    <div className="col col-sm-12 col-md-6 mb-3">
                        <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                        <input type="text" required={true} className="form-control" id="phoneNumber"
                            name="phoneNumber" placeholder="+54 9"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-sm-12 col-md-6 mb-3">               
                        <label htmlFor="password" className="form-label">Contraseña</label>
                        <input type="password" name="password" required={true} className="form-control" id="password" placeholder="Password"/>
                    </div>
                    <div className="col col-sm-12 col-md-6 mb-3">
                        <label htmlFor="confirmPassword" className="form-label">Confirmar Contraseña</label>
                        <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" placeholder="Password"/>
                    </div>
                </div>
                <div className="row">
                    <p className="text-center text-primary-emphasis"></p>

                </div>
    
                <div className="row">
                    <div className="col d-flex justify-content-end">
                        <button type="submit" className="btn m-2">Continuar</button>
                        <a href="/"><button className="btn m-2" type="button">Cancelar</button></a>
                    </div>
                </div>
            <form/>
        </div>
    </div>
    </>
  )
}
