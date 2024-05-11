import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function TermsPage() {
    const navigate = useNavigate();

    return (
        <Container>
            <Row className="my-5">
                <Col>
                    <h1 className="mb-4">Términos de Uso</h1>

                    <h2>1. Introducción</h2>
                    <p>Bienvenido a nuestra tienda de nutrición. Estos términos de uso regulan su uso de nuestra aplicación y sitio web. Al acceder a nuestros servicios, usted acepta estos términos de uso.</p>

                    <h2>2. Recolección de Datos</h2>
                    <p>Recopilamos datos personales, incluyendo fotos, números de teléfono, nombres y correos electrónicos, solo para registrar usuarios, validar identidades y recuperar contraseñas si es necesario.</p>

                    <h2>3. Uso de los Datos</h2>
                    <p>Los datos recopilados se utilizan únicamente para proporcionar nuestros servicios, como agendar citas y enviar notificaciones relacionadas. No compartimos sus datos con terceros no autorizados.</p>

                    <h2>4. Seguridad de los Datos</h2>
                    <p>Tomamos medidas para proteger sus datos personales y asegurar su privacidad. Sin embargo, no podemos garantizar la seguridad total de sus datos debido a la naturaleza de Internet.</p>

                    <h2>5. Citas y Agendamiento</h2>
                    <p>Nuestra aplicación le permite agendar citas para consultas de nutrición. Al reservar una cita, usted acepta seguir nuestras políticas de cancelación y reprogramación.</p>

                    <h2>6. Blogs y Contenido</h2>
                    <p>Ofrecemos blogs y otros contenidos para su información y educación. El contenido no constituye asesoramiento médico y debe consultarse con un profesional de la salud antes de tomar decisiones relacionadas con su salud.</p>

                    <h2>7. Modificaciones de los Términos de Uso</h2>
                    <p>Nos reservamos el derecho de modificar estos términos de uso en cualquier momento. Le notificaremos sobre cambios significativos mediante notificaciones en nuestra aplicación o sitio web.</p>

                    <h2>8. Contacto</h2>
                    <p>Si tiene alguna pregunta sobre estos términos de uso, puede contactarnos a través de nuestro formulario de contacto o por correo electrónico a info@tiendanutricion.com.</p>

                    <Button variant="primary" onClick={() => navigate(-1)}>
                        Volver
                    </Button>

                </Col>
            </Row>
        </Container>
    );
}

export default TermsPage;
