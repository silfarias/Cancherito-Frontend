import { Buttons } from "../../components/Login";
import { FormLogin } from '../../components/Login';
import './login.css';

export const InicioSesion = () => {
    return (
      <div className="container">
        <Buttons />
        <FormLogin />
      </div>
    )
}