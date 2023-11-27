import {
    BrowserRouter,
    Routes,
    Route
}
    from "react-router-dom";


import { Inicio } from "../pages/canchas/Inicio.jsx";
import { RegistroUsuario } from "../pages/usuarios/RegistroUsuario.jsx";
import { InicioSesion } from "../pages/usuarios/InicioSesion.jsx";
import { Canchas } from "../pages/canchas/Canchas.jsx";
import { OneCancha } from "../pages/one-cancha/OneCancha.jsx";
import { PageNotFound } from "../pages/PageNotFound.jsx";
import { PublicRoutes } from "./PublicRoutes.jsx";
import { Empresa } from "../pages/usuarios/Empresa.jsx";


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/*Rutas Publicas*/}
                <Route path="*" element={
                    <PublicRoutes>
                        <Routes>
                            <Route path='/' element={ <Inicio />} />
                            <Route path="/login" element={ <InicioSesion />} />
                            <Route path='/register' element={ <RegistroUsuario />} />
                            <Route path="/register-empresa" element={ <Empresa />} />
                            <Route path='/canchas' element={ <Canchas />} />
                            <Route path='/canchas/reservar/:id' element={ <OneCancha />} />
                            <Route path='*' element={<PageNotFound />} />
                        </Routes>
                    </PublicRoutes>
                } />
            </Routes>
        </BrowserRouter>
    )
}