import { Footer } from "../../components/Footer"
import { ListadoCanchas } from "../../components/ListadoCanchas"
import { Navbar } from "../../components/Navbar"
import Buscador from "../../components/Buscador"
import './home.css'


export const Canchas = () => {
    return (
    <>
    <Navbar />
    <ListadoCanchas />
    <Footer />    
    </>
    )
}