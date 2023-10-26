import { Botonera } from "./FormUser.jsx"

export const FormEstab = () => {
    return (
    <>
    <Botonera />
    <div className="text-center">
        <h4 className="m-1 mx-auto">Registra tu Establecimiento</h4>
    </div>


    <div className="formulario">
        <div className="logo">
            <img className="img-fluid" src="/img/cancherito.png" alt="cancherito" />
        </div>
        
        <div className="form">
            <form encType="multipart/form-data"  id="formNewEstab" className="p-3 mt-2 ">
                <div className="row">
                    <div className="col col-md-6 col-sm-12 mb-3">  
                        <label htmlFor="name" className="form-label">Nombre del Establecimiento</label>
                        <input type="text" required={true} className="form-control" id="name" name="name" />
                    </div>
                    <div className="col col-md-6 col-sm-12 mb-3">  
                        <label htmlFor="location" className="form-label">Localización</label>
                        <input type="text" required={true} className="form-control" id="location" name="location" />
                    </div>
                </div>
                <div className="row">
                    <div className="col col-sm-12 col-md-12 mb-3">
                        <label htmlFor="description" className="form-label">Descripción</label>
                        <input type="text" required={true} className="form-control" id="description" name="description" />
                    </div>

                </div>
                <div className="row">
                    <div className="col col-sm-12 col-md-6 mb-3">
                        <label htmlFor="number_courts" className="form-label">Numero de Canchas</label>
                        <input type="number" required={true} className="form-control" id="number_courts"
                            name="number_courts" />
                    </div>
                    <div className="col col-sm-12 col-md-6 mb-3">               
                        <label htmlFor="archivo" className="form-label">Añade un logo</label>
                        <input type="file" name="archivo" required={true} className="form-control" id="logo" />
                    </div>
                </div>
    
                <div className="row">
                    <div className="col d-flex justify-content-end">
                        <button type="submit" className="btn m-2">Continuar</button>
                        <a href="/"><button className="btn m-2" type="button">Cancelar</button></a>
                    </div>
                </div>
            </form>
        </div>

    </div>
    </>
    )
}


