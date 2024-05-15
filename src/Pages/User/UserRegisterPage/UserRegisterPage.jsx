import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './UserRegister.css'
import ResponsiveDesign from '../../../util/responsive-design';
import FormRegister from '../../../Components/form-register/FormRegister';
export default function UserRegisterPage() {
// Utiliza un solo estado para almacenar los estilos
const [formStyles, setFormStyles] = useState(() => {
    const isMobileAndTablet = ResponsiveDesign.isMobileAndTablet();
    return {
        margin: isMobileAndTablet ? '0 auto' : '',
        width: isMobileAndTablet ? '100%' : '80%'
    };
});

// Función para manejar los cambios de tamaño de ventana
const handleResize = () => {
    const isMobileAndTablet = ResponsiveDesign.isMobileAndTablet();
    setFormStyles({
        margin: isMobileAndTablet ? '0 auto' : '',
        width: isMobileAndTablet ? '100%' : '80%'
    });
};

// Agregar el evento de cambio de tamaño de ventana al montar el componente
useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, []);

    return (
        <Container fluid className='container-registers'  >
            <Row className='justify-content-md-center Row-register'>
                <Col lg={6}>
                    <Container className='user-register' style={{ ...formStyles}}>
                        <header>Registrarse</header>
                        <FormRegister />
                    </Container>
                </Col>
                {ResponsiveDesign.isMobileAndTablet() ? null: <Col lg={6}>
                    <div className='img-register'></div>
                </Col>}
            </Row>
        </Container>
    );
}
