import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


export function useLogin  () {

    const { dispatch } = useContext(AuthContext);
    const { state } = useContext(AuthContext);
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
                throw new Error('La contraseña o el email son incorrectos', error);
            } else {
                const data = await response.json();
                alert(data.message);
                dispatch({
                    type: 'LOGIN',
                    payload: data
                })
                localStorage.setItem('token', JSON.stringify(data.token));
                setTimeout(() => {
                    navigate('/canchas');
                }, 1500);
            }

        } catch (error) {
            console.error(error);
            alert('La contraseña o el email son incorrectos');
            setError('La contraseña o el email son incorrectos');
        }
    }

    return (
        email, password, setEmail, setPassword, handleSubmit, error
    )
}