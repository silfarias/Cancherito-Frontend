import { 
    BrowserRouter, 
    Routes, 
    Route 
}
from "react-router-dom";

import { Inicio } from "../pages/canchas/Inicio.jsx";
import { RegistroUsuario } from "../pages/usuarios/RegistroUsuario.jsx";
import { InicioSesion } from "../pages/usuarios/InicioSesion.jsx";
import { RegistroEstablecimiento } from "../pages/usuarios/RegistroEstablecimiento.jsx";
import { Canchas } from "../pages/canchas/Canchas.jsx";
import { OneCancha } from "../pages/canchas/OneCancha.jsx";
import { PageNotFound } from "../pages/PageNotFound.jsx";
import { PrivatesRoutes } from "./PrivateRoutes.jsx";


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>

                {/*Rutas Publicas*/}
                <Route path='*' element={<PageNotFound />} />
                <Route path='/' element={<Inicio />} />
                <Route path='/login' element={<InicioSesion />} />
                <Route path='/register' element={<RegistroUsuario />} />
                <Route path='/register-client' element={<RegistroUsuario />} />
                <Route path='/canchas' element={<Canchas />} />
                <Route path='/canchas/reservar' element={<OneCancha/>} />


                {/*Rutas Privadas */} 
                <Route path='/registerestab' element={<PrivatesRoutes />} />
                
            </Routes>
        </BrowserRouter>
    )
}