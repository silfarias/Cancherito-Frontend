import { useSearchParams } from "react-router-dom"
import { Footer } from "../../components/Footer.jsx"
import { Main } from "../../components/Main.jsx"
import { Navbar } from "../../components/Navbar.jsx"
import './home.css'



export const Inicio = () => {
const [ params, setSearchParams ] = useSearchParams();

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchParams({ q: query });
  };

  return (
    <>
      <Navbar handleSearch={handleSearch}/>
      <Main />
      <Footer />
    </>
  )
}
