import { Link } from "react-router-dom";

export const Boton = ({ ruta, texto, clase, path, fill, d }) => {
    return (
        <Link to={ruta}><button className="btn m-2" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                className={clase} viewBox="0 0 16 16">
                <path d={path} />
                <path fillRule={fill}
                    d={d} />
            </svg>{texto}</button>
        </Link>
    )
}