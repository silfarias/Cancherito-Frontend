import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Botonera } from "./FormUser";
import { Footer } from "./Footer";
import { environments } from "../config/environments";
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export const FormEmpresa = () => {

    const navigate = useNavigate();

    // Registro del Cliente

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const handleRegisterUser = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        try {
            const response = await fetch(`${environments.API_URL}/api/client/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, lastName, email, phoneNumber, password }),
            });

            if (!response.ok) {
                throw new Error('Error al registrar el usuario');
            } else {
                const data = await response.json();
                alert(data.message);
                setRegistrationSuccess(true);
            }
        } catch (error) {
            console.error(error);
            alert('Error al registrar el usuario');
        }

    }

    //Registro del Club
    function InfoClub() {

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

        const handleRegisterEstab = async (e) => {
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
            <Form onSubmit={handleRegisterEstab} className="mt-4 border border-2 p-3 rounded rounded-3" id="wrapper">
                <p className="text-center" style={{ color: '#000' }}>Información del Establecimiento</p>
                <Row className="g-2">
                    {/* <Col md>
                        <FloatingLabel
                            controlId="floatingSelectGridTypeUser"
                            label="¿Cuál es tu relación con este Club?"
                        >
                            <Form.Select aria-label="Floating label select example">
                                <option value="1">Dueño</option>
                                <option value="2">Empleado/Encargado del Club</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col> */}
                    <Col md>
                        <FloatingLabel controlId="floatingInputGridNameClub" label="Nombre del Club">
                            <Form.Control
                                type="text"
                                placeholder=""
                                required={true}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row className="g-2 mt-3">
                    <Col md>
                        <FloatingLabel controlId="floatingInputGridLocation" label="Dirección del Establecimiento">
                            <Form.Control
                                type="text"
                                placeholder="+ 54 9"
                                required={true}
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <FloatingLabel controlId="floatingInputGridDescription" label="Deja una descripción de tu Club">
                            <Form.Control
                                type="text"
                                placeholder="Descripción"
                                required={true}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row className="g-2 mt-3">
                    <Col md>
                        <FloatingLabel controlId="floatingInputGridNumberCourts" label="Numero de Canchas">
                            <Form.Control
                                type="number"
                                defaultValue={1}
                                min={1}
                                placeholder=""
                                value={numberCourts}
                                onChange={(e) => setNumberCourts(e.target.value)}
                            />
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <FloatingLabel controlId="floatingInputGridLogo" label="Logo del Establecimiento">
                            <Form.Control
                                type="file"
                                required={true}
                                onChange={handleLogoChange}
                            />
                        </FloatingLabel>
                        {error && (
                            <p className="text-danger">{error}</p>
                        )}
                    </Col>
                    <div className="mt-3 d-flex justify-content-end align-items-center">
                        <button type="submit" className="btn btn-primary btn-lg">Enviar</button>
                    </div>
                </Row>
            </Form>
        )
    }

    return (
        <>
            <div className="container">
                <Botonera />
                <div className="row">
                    <div className="col">
                        <div className="logo">
                            <img className="img-fluid" src="/img/cancherito.png" alt="cancherito" />
                        </div>
                        <div className="col text-center">
                            <h1 className="mt-3">¡Te damos la Bienvenida a Cancherito!</h1>
                            <h5 className="mt-3">Cancherito te permite automatizar tu complejo 100% online, y tener garantía para las reservas con nuestra integración a Mercado Pago.</h5>
                            <h5 className="mt-3">Prueba nuestro Software para Clubes ahora</h5>
                        </div>
                        {registrationSuccess ? (

                            < InfoClub />

                        ) : (

                            <Form onSubmit={handleRegisterUser} className="mt-4 border border-2 p-3 rounded rounded-3" id="wrapper">
                                <p className="text-center" style={{ color: '#000' }}>Información personal</p>
                                <Row className="g-2">
                                    <Col md>
                                        <FloatingLabel controlId="floatingInputGridName" label="Nombre">
                                            <Form.Control type="text"
                                                placeholder="Name"
                                                required={true}
                                                value={name}
                                                onChange={(e) => setName(e.target.value)} />
                                        </FloatingLabel>
                                    </Col>
                                    <Col md>
                                        <FloatingLabel controlId="floatingInputGridLastName" label=" Apellido">
                                            <Form.Control
                                                type="text"
                                                placeholder="Last Name"
                                                required={true}
                                                value={lastName}
                                                onChange={(e) => setLastName(e.target.value)} />
                                        </FloatingLabel>
                                    </Col>
                                </Row>
                                <Row className="g-2 mt-3">
                                    <Col md>
                                        <FloatingLabel controlId="floatingInputGridPhoneNumber" label="Numero de Telefono">
                                            <Form.Control
                                                type="number"
                                                placeholder="+ 54 9"
                                                required={true}
                                                value={phoneNumber}
                                                onChange={(e) => setPhoneNumber(e.target.value)}
                                            />
                                        </FloatingLabel>
                                    </Col>
                                    <Col md>
                                        <FloatingLabel controlId="floatingInputGridEmail" label="Email">
                                            <Form.Control
                                                type="email"
                                                placeholder="Email"
                                                required={true}
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)} />
                                        </FloatingLabel>
                                    </Col>
                                </Row>
                                <Row className="g-2 mt-3">
                                    <Col md>
                                        <FloatingLabel controlId="floatingInputGridPassword" label="Contrasena">
                                            <Form.Control
                                                type="password"
                                                placeholder="Password"
                                                required={true}
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)} />
                                        </FloatingLabel>
                                    </Col>
                                    <Col md>
                                        <FloatingLabel controlId="floatingInputGridConfirmPassword" label="Confirmar Contrasena">
                                            <Form.Control
                                                type="password"
                                                placeholder="Password"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                required={true} />
                                        </FloatingLabel>
                                    </Col>
                                    <div className="mt-3 d-flex justify-content-end align-items-center">
                                        <button type="submit" className="btn btn-primary btn-lg">Enviar</button>
                                    </div>
                                </Row>
                            </Form>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}