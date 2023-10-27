import { 
    BrowserRouter, 
    Routes, 
    Route 
}
from "react-router-dom";

import { Inicio } from "../pages/Inicio.jsx";
import { RegistroUsuario } from "../pages/RegistroUsuario";
import { InicioSesion } from "../pages/InicioSesion";
import { RegistroEstablecimiento } from "../pages/RegistroEstablecimiento";


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/register' element={<RegistroUsuario />} />
                <Route path='/register-client' element={<RegistroUsuario />} />
                <Route path='/login' element={<InicioSesion />} />
                <Route path='/registerestab' element={<RegistroEstablecimiento />} />
            </Routes>
        </BrowserRouter>
    )
}