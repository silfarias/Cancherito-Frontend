import { Botonera } from "./FormUser.jsx"
import { useNavigate } from "react-router-dom"
import { environments } from "../config/environments.js"
import { useState, useEffect } from "react"

export const FormEstab = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [numberCourts, setNumberCourts] = useState(1); // Valor predeterminado a 1
    const [logo, setLogo] = useState(null);
    const [error, setError] = useState("");

    const handleLogoChange = (e) => {
        const selectedFile = e.target.files[0];
        setLogo(selectedFile);
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        if (numberCourts < 1 || !Number.isInteger(numberCourts)) {
            setError("El Establecimiento debe contar con al menos una cancha!");
            return;
        }

        const formData = new FormData();
        formData.append("name", name);
        formData.append("location", location);
        formData.append("description", description);
        formData.append("number_courts", numberCourts);
        formData.append("archivo", logo);

        try {
            const response = await fetch(`${environments.API_URL}/api/estab`, {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                alert("Club registrado exitosamente");
                navigate("/canchas");
            } else {
                const data = await response.json();
                alert(data.message);
                setError(data.message);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
        <Botonera />
        <div className="text-center">
            <h5 className="m-1 mx-auto text-primary-emphasis">
                Registra tu Establecimiento
            </h5>
        </div>

        <div className="formulario">
            <div className="logo">
                <img
                    className="img-fluid"
                    src="/img/cancherito.png"
                    alt="cancherito"
                />
            </div>

            <div className="form">
                <form
                    encType="multipart/form-data"
                    id="formNewEstab"
                    className="p-3 mt-2"
                    onSubmit={handleRegister}
                >
                    <div className="row">
                        <div className="col col-md-6 col-sm-12 mb-3">
                            <label htmlFor="name" className="form-label">
                                ¿Cuál es el nombre del club?
                            </label>
                            <input
                                type="text"
                                required={true}
                                className="form-control"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="col col-md-6 col-sm-12 mb-3">
                            <label htmlFor="location" className="form-label">
                                Ubicación del Club
                            </label>
                            <input 
                                type="text"
                                required={true}
                                className="form-control"
                                id="location"
                                name="location"
                                value={location} 
                                onChange={(e) => setLocation(e.target.value)} 
                            />
                            {/* <button
                                className=""
                                type="button"
                                required={true}
                            >
                                Marcar en el mapa
                            </button> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-sm-12 col-md-12 mb-3">
                            <label htmlFor="description" className="form-label">
                                Descripción
                            </label>
                            <input
                                type="text"
                                required={true}
                                className="form-control"
                                id="description"
                                name="description"
                                value={description}
                                onChange={(e) =>
                                    setDescription(e.target.value)
                                }
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-sm-12 col-md-6 mb-3">
                            <label htmlFor="number_courts" className="form-label">
                                Numero de Canchas
                            </label>
                            <input
                                type="number"
                                required={true}
                                className="form-control"
                                id="number_courts"
                                name="number_courts"
                                value={numberCourts}
                                onChange={(e) =>
                                    setNumberCourts(parseInt(e.target.value))
                                }
                            />
                            {error && (
                                <p className="text-danger">{error}</p>
                            )}
                        </div>
                        <div className="col col-sm-12 col-md-6 mb-3">
                            <label htmlFor="archivo" className="form-label">
                                Añade un logo
                            </label>
                            <input
                                type="file"
                                name="archivo"
                                required={true}
                                className="form-control"
                                id="logo"
                                onChange={handleLogoChange}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col d-flex justify-content-end">
                            <button type="submit" className="btn m-2">
                                Continuar
                            </button>
                            <a href="/">
                                <button className="btn m-2" type="button">
                                    Cancelar
                                </button>
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
    )
}


