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
import { PrivatesRoutes } from "./PrivateRoutes.jsx";
import { PublicRoutes } from "./PublicRoutes.jsx";
import { Empresa } from "../pages/usuarios/Empresa.jsx";
import { ListadoCanchas } from "../components/ListadoCanchas.jsx";
import { FormEmpresa } from "../components/FormEmpresa.jsx";


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/*Rutas Publicas*/}
                <Route path="*" element={
                    <PublicRoutes>
                        <Routes>
                            <Route path='/' Component={Inicio} />
                            <Route path="/login" Component={InicioSesion} />
                            <Route path='/register' Component={RegistroUsuario} />
                            <Route path="/register-empresa" Component={Empresa} />
                            <Route path='/canchas' Component={Canchas} />
                            <Route path='/canchas/reservar/:id' Component={OneCancha} />
                            <Route path='*' element={<PageNotFound />} />
                        </Routes>
                    </PublicRoutes>
                } />

            </Routes>
        </BrowserRouter>
    )
}