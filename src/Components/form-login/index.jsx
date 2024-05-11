import React from 'react';
import { Form, Row, Button, Col, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';

export default function FormLogin() {

    return (
        <Form className="form-login">
            {/* Campo de correo */}
            <Row className='mb-3'>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Correo</Form.Label>
                    <InputGroup>
                        <Form.Control type="email" placeholder="Introduzca su correo" />
                        {/* Ícono de correo dentro de la caja de texto */}
                        <InputGroup.Text>
                            <FaEnvelope />
                        </InputGroup.Text>
                    </InputGroup>
                </Form.Group>
            </Row>

            {/* Campo de contraseña */}
            <Row className='mb-3'>
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <InputGroup>
                        <Form.Control type="password"   placeholder="**********" />
                        {/* Ícono de candado dentro de la caja de texto */}
                        <InputGroup.Text>
                            <FaLock />
                        </InputGroup.Text>
                    </InputGroup>
                    {/* Texto y link de recuperación de contraseña en la posición derecha */}
                    <div className="text-end mt-2">
                        <Link to="/forgot-password">¿Olvidaste tu contraseña?</Link>
                    </div>
                </Form.Group>
            </Row>

            {/* Botón para iniciar sesión */}
            <Row className='mb-3'>
                <Col>
                    <Button variant="primary" type="submit">
                        Iniciar sesión
                    </Button>
                </Col>
            </Row>


            {/* Pregunta sobre registro y link para dirigirse a /SignUp */}
            <Row className='text-center'>
                <Col>
                    <p>
                        ¿No tienes cuenta? <Link to="/SignUp">Regístrate aquí</Link>
                    </p>
                </Col>
            </Row>
        </Form>
    );
}
