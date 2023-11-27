import { Boton } from './Boton';
import { useLogin } from '../hooks/useLogin.js';

function Login() {

    const { email, password, setEmail, setPassword, handleSubmit, error} = useLogin()
    
    return (
        <div className='container'>
            <div className="d-grid gap-2 d-md-block mt-2">
                <Boton ruta="/" texto="Inicio" clase="bi bi-house" path="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
                <Boton ruta="/register" texto="Registrarse" path="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
                fill="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
            </div>

            <div className="wrapper">
                <div className="logo">
                    <img className="img-fluid" src="/img/cancherito.png" alt="cancherito" />
                </div>

                <form onSubmit={handleSubmit} action='' className="mt-4" id="formLogin" method="POST">

                    <label>Correo electronico:</label>
                    <div className="mt-1 form-field d-flex align-items-center">
                        <span className="far fa-user"></span>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="name@example.com"
                            required />
                    </div>

                    <label>Contraseña:</label>
                    <div className="mt-1 form-field d-flex align-items-center">
                        <span className="fas fa-key"></span>
                        <input
                            type="password"
                            name="password"
                            id="contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Contraseña"
                            required />
                    </div>

                    <div className="mt-4 mb-3" id="boton">
                        <button
                            type="submit"
                            className="btn">
                            Iniciar Sesion
                        </button>
                    </div>

                </form>

                {error && <p className='text-danger' style={{ 'fontSize': '12px' }}>{error}</p>}

                {/* <div className="mt-2">
                    <a href="/login/email">Olvidaste tu contraseña?</a>
                </div> */}
            </div>


        </div>
    )
}

export default Login