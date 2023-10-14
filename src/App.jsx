import { Footer } from "./components/Footer.jsx";
import { Main } from "./components/Main.jsx";
import { Navbar } from "./components/Navbar.jsx";


export const App = () => {
  return (
    <>
      {/* Navegacion */}
      <Navbar />
      {/*Main */}
      <Main />
      {/* Footer */}
      <Footer />
    </>
  )
}
