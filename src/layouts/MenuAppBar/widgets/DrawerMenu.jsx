import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Button, Drawer, List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';
import {
    HomeRounded as HomeRoundedIcon,
    EventNote as EventNoteIcon,
    Login as LoginIcon,
    PersonAdd as PersonAddIcon, // Importar el ícono adecuado
    ExitToApp as ExitToAppIcon,
    Menu as MenuIcon,
} from '@mui/icons-material';
import Colores from '../../../util/colores';
import LogoMenu from '../../../util/logo-menu.jsx';
import { nameRoutes } from '../../../router/routes.jsx';
import LinkButton from './LinkButton.jsx';

function DrawerMenu() {
    // Estado para controlar si el Drawer está abierto o no
    const [open, setOpen] = useState(false);


    // Obtener la instancia única de Colores
    const colors = Colores.getInstance();

    // Configuración de los elementos de la lista
    const listItems = [
        {
            icon: <HomeRoundedIcon />,
            text: "Inicio",
        },
        {
            icon: <EventNoteIcon />,
            text: "Registrar cita",
        },
        {
            icon: <LoginIcon />,
            text: "Iniciar Sesión",
        },
        {
            icon: <PersonAddIcon />, // Usar PersonAddIcon para "Registrar"
            text: "Registrar",
        },
        {
            icon: <ExitToAppIcon />,
            text: "Cerrar sesión",
        },
    ];

    // Función para manejar la apertura y cierre del Drawer
    const handleDrawerToggle = () => {
        setOpen(!open);

    };

    return (
        <Navbar className="navbar-fixed navbarmenu bg-black"  >
            <Container>
                {/* Nav.Link para el logo */}
                {/* <Nav.Link href="/">
                    <img
                        src={LogoMenu}
                        width="120"
                        height="60"
                        className="d-inline-block align-top"
                        alt="Nutrición logo"
                    />
                </Nav.Link> */}
                <strong><LinkButton name='FOTOGRAFÍAS GONHER' ruta={nameRoutes.HomePage} className='my-link-main' /></strong>

                {/* Espaciado para empujar el botón al lado derecho */}
                <Nav className="ml-auto">
                    {/* Botón que controla la apertura del Drawer */}
                    <Button onClick={handleDrawerToggle}>
                        {/* Usa el ícono de menú */}
                        <MenuIcon style={{ color: '#fff' }} />
                    </Button>
                </Nav>

                {/* Drawer que se abre cuando se hace clic en el botón */}
                <Drawer
                    anchor="right" // Configura el Drawer para que se abra en el lado derecho
                    open={open}
                    onClose={handleDrawerToggle}
                >
                    {/* Usa Box para estilizar el Drawer */}
                    <Box
                        sx={{
                            width: 250,
                            bgcolor: colors.verdeDebil, // Usa el color deseado
                            height: '100vh',
                        }}
                    >
                        {/* Contenido del Drawer */}
                        <nav>
                            <List>
                                {listItems.map((item, index) => (
                                    <ListItem button key={index} style={{ paddingTop: '10px' }}>
                                        <ListItemIcon>{item.icon}</ListItemIcon>
                                        <ListItemText primary={item.text} />
                                    </ListItem>
                                ))}
                            </List>
                        </nav>
                    </Box>
                </Drawer>
            </Container>
        </Navbar>
    );
}

export default DrawerMenu;
