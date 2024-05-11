import React from 'react';
import { Form, Row, Button, Col, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { nameRoutes } from "../../router/routes"
import DropZoneImg from './widgets/dropzone-img';
import { FaEnvelope, FaLock, FaPhoneAlt, FaUser } from 'react-icons/fa';


function FormRegister() {

    return (
        <Form className="form-register">
            {/* Campo de nombre */}
            <Row className='mb-3'>
                <Form.Group as={Col} controlId="formGridName">

                    <Form.Label>Nombre</Form.Label>
                    <InputGroup>

                    <Form.Control type="text" placeholder="Introduzca su nombre" />
                        {/* Ícono de usuario dentro de la caja de texto */}
                        <InputGroup.Text>
                            <FaUser />
                        </InputGroup.Text>
                    </InputGroup>
                </Form.Group>
            </Row>

            {/* Campo de número de teléfono */}
            <Row className='mb-3'>
                <Form.Group as={Col} controlId="formGridPhone">
                    <Form.Label>Número de Teléfono</Form.Label>
                    <InputGroup>

                    <Form.Control type="tel" placeholder="Introduzca su número de teléfono" />
                        {/* Ícono de telefono dentro de la caja de texto */}
                        <InputGroup.Text>
                            <FaPhoneAlt />
                        </InputGroup.Text>
                    </InputGroup>
                </Form.Group>
            </Row>

            {/* Campo de correo electrónico */}
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
                </Form.Group>
            </Row>

            {/* Área de arrastrar y soltar para la imagen */}
            <Row className='mb-3'>
                <Form.Group as={Col} controlId="formGridImage">
                    <Form.Label>Foto de Perfil</Form.Label>
                    <DropZoneImg />
                </Form.Group>
            </Row>


            {/* Campo de aceptación de la política de privacidad y los términos de uso */}
            <Row className='mb-3'>
                <p>Al registrarte aceptas la <Link to={nameRoutes.PolicyPage}>Política de privacidad</Link> y los <Link to={nameRoutes.TermsPage}>Términos</Link> de uso.</p>
            </Row>


            <Row className='mb-3 btn-register'>
                {/* Botón de envío */}
                <Button type="submit" className="btn-greenlife">
                    Registrarme
                </Button>
            {/* Link para iniciar sesión */}
                <center><p>¿Ya tienes una cuenta?, <Link to={nameRoutes.LoginPage}>Inicía sesión</Link></p></center></Row>

        </Form>
    );
}

export default FormRegister;
