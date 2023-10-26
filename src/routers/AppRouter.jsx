import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Inicio } from '../pages/Inicio.jsx'
import { Login } from '../pages/Login.jsx'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}