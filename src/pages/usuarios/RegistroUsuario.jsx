import { Botonera } from "../../components/FormUser.jsx"
import { FormUser } from "../../components/FormUser.jsx"
import { Footer } from "../../components/Footer.jsx"
import './login.css'

export const RegistroUsuario = () => {
    return (
      <>
      <div className="container">
          <Botonera />
          <FormUser />
      </div>
      <Footer />
      </>
    )
}
  
