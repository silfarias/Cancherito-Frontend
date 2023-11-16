import { useState, useEffect } from "react";
import { Botonera } from "./FormUser";
import { Footer } from "./Footer";
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export const FormEmpresa = () => {
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

                        <InfoPersonal />
                        <InfoClub />

                        <div className="mt-3 d-flex justify-content-end align-items-center">
                            <button type="button" className="btn btn-primary btn-lg">Enviar</button>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

function InfoPersonal() {
    return (
        <Form className="mt-4 border border-2 p-3 rounded rounded-3" id="wrapper">
            <p className="text-center" style={{ color: '#000' }}>Información personal</p>
            <Row className="g-2">
                <Col md>
                    <FloatingLabel controlId="floatingInputGrid" label="Nombre">
                        <Form.Control type="text" placeholder="Name" />
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel controlId="floatingInputGrid" label=" Apellido">
                        <Form.Control type="text" placeholder="Last Name" />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row className="g-2 mt-3">
                <Col md>
                    <FloatingLabel controlId="floatingInputGrid" label="Numero de Telefono">
                        <Form.Control type="email" placeholder="+ 54 9" />
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel controlId="floatingInputGrid" label="Email">
                        <Form.Control type="email" placeholder="Email" />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row className="g-2 mt-3">
                <Col md>
                    <FloatingLabel controlId="floatingInputGrid" label="Contrasena">
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel controlId="floatingInputGrid" label="Confirmar Contrasena">
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                </Col>
            </Row>
        </Form>
    )
}

function InfoClub() {
    return (
        <Form className="mt-4 border border-2 p-3 rounded rounded-3" id="wrapper">
            <p className="text-center" style={{ color: '#000' }}>Información del Establecimiento</p>
            <Row className="g-2">
                <Col md>
                    <FloatingLabel
                        controlId="floatingSelectGrid"
                        label="¿Cuál es tu relación con este Club?"
                    >
                        <Form.Select aria-label="Floating label select example">
                            <option value="1">Dueño</option>
                            <option value="2">Empleado/Encargado del Club</option>
                        </Form.Select>
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel controlId="floatingInputGrid" label="Nombre del Club">
                        <Form.Control type="text" placeholder="" />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row className="g-2 mt-3">
                <Col md>
                    <FloatingLabel controlId="floatingInputGrid" label="Dirección del Establecimiento">
                        <Form.Control type="text" placeholder="+ 54 9" />
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel controlId="floatingInputGrid" label="Deja una descripción de tu Club">
                        <Form.Control type="text" placeholder="Descripción" />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row className="g-2 mt-3">
                <Col md>
                    <FloatingLabel controlId="floatingInputGrid" label="Numero de Canchas">
                        <Form.Control type="number" defaultValue={1} min={1} placeholder="" />
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel controlId="floatingInputGrid" label="Logo del Establecimiento">
                        <Form.Control type="file" />
                    </FloatingLabel>
                </Col>
            </Row>
        </Form>
    )
}