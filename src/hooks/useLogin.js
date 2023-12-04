import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { environments } from "../config/environments.js";
import Swal from 'sweetalert2';

export function useLogin () {

    const { dispatch, state } = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await
                fetch(`${environments.API_URL}/api/auth/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password }),
                });

            if (!response.ok) {
                /* throw new Error('La contraseña o el email son incorrectos', error); */
                Swal.fire({
                    title: "Error",
                    text: "La contraseña o el email son incorrectos",
                    icon: "error"
                })
            } else {
                const data = await response.json();
                Swal.fire({
                    title: "Bienvenido",
                    text: "Sesión iniciada",
                    icon: "success"
                });
                setTimeout(() => {
                    navigate('/canchas');
                }, 2500)
                dispatch({ type: 'LOGIN', payload: data.player });
                localStorage.setItem('token', JSON.stringify(data.token));
            }

        } catch (error) {
            console.error(error);
            alert('La contraseña o el email son incorrectos');
            setError('La contraseña o el email son incorrectos');
        }
    }

    return (
        { email, password, setEmail, setPassword, handleSubmit, error }
    )
}