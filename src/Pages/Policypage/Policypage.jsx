import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function PolicyPage() {
    const navigate = useNavigate();

    return (
        <Container>
            <Row className="my-5">
                <Col>
                    <h1 className="mb-4">Política de Privacidad</h1>
                    
                    <h2>1. Introducción</h2>
                    <p>Bienvenido a nuestra tienda de nutrición. Esta política de privacidad explica cómo recopilamos, utilizamos y protegemos su información personal.</p>

                    <h2>2. Información Recopilada</h2>
                    <p>Recopilamos información personal, incluidos nombres, direcciones de correo electrónico, números de teléfono y fotos, solo para registrar usuarios, validar identidades, recuperar contraseñas y agendar citas.</p>

                    <h2>3. Uso de la Información</h2>
                    <p>Utilizamos su información personal para proporcionarle servicios, como agendar citas, enviar notificaciones relacionadas y ofrecer contenido de blogs. No compartimos su información con terceros sin su consentimiento expreso.</p>

                    <h2>4. Protección de la Información</h2>
                    <p>Tomamos medidas para proteger su información personal contra acceso no autorizado, pérdida o divulgación. Implementamos medidas de seguridad técnicas y organizativas para salvaguardar sus datos.</p>

                    <h2>5. Derechos de los Usuarios</h2>
                    <p>Usted tiene el derecho de acceder, rectificar, cancelar u oponerse al uso de su información personal. Puede ejercer estos derechos contactándonos a través de nuestro formulario de contacto o por correo electrónico a privacidad@tiendanutricion.com.</p>

                    <h2>6. Cookies</h2>
                    <p>Utilizamos cookies para mejorar su experiencia en nuestro sitio web. Puede configurar su navegador para rechazar las cookies, pero esto podría afectar su experiencia de usuario.</p>

                    <h2>7. Cambios en la Política de Privacidad</h2>
                    <p>Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. Los cambios se publicarán en esta página y entrarán en vigor inmediatamente.</p>

                    <h2>8. Contacto</h2>
                    <p>Si tiene preguntas sobre esta política de privacidad, puede contactarnos a través de nuestro formulario de contacto o por correo electrónico a privacidad@tiendanutricion.com.</p>

                    <Button variant="primary" onClick={() => navigate(-1)}>
                        Volver
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default PolicyPage;
