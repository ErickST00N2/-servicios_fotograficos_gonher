
import LinkButton from "./LinkButton.jsx";
import { Navbar, Container, NavDropdown } from "react-bootstrap";
import "../../../util/colores.jsx";
import React from "react";
import { Link } from "react-router-dom";
import { nameRoutes } from "../../../router/routes.jsx";




function NavBarMenu(props) {
  return (
    <Navbar className="navbar-fixed navbarmenu menu" id="serviciosFGONHER">

      <Container>
        <Navbar.Brand>
          {/* <Link to={nameRoutes.WelcomePage}>
          <img
            src={LogoMenu}
            width="150"
            height="70"
            className="d-inline-block align-top"
            alt="Nutrición logo"
          />{" "}

        </Link>  */}
          <strong><LinkButton name='FOTOGRAFÍAS GONHER' ruta={nameRoutes.HomePage} className='my-link-main' /></strong>

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />



        {/* <Navbar.Brand href="/">Navbar with text</Navbar.Brand> */}
        {/* <Navbar.Toggle /> */}
        <Navbar.Collapse className="justify-content-end gap-3">

          {/* <Navbar.Collapse id="basic-navbar-nav"> */}

          <LinkButton name='Inicio' ruta={nameRoutes.HomePage} className='my-link-main' />
          <LinkButton name='Nosotros' ruta={nameRoutes.NosotrosPage} className='my-link' />

          <NavDropdown title="Servicios" id="basic-nav-dropdown" className='my-link'>
            <NavDropdown.Item as={Link} to={nameRoutes.MiBlogPage}>Mi Blog</NavDropdown.Item>
            <NavDropdown.Item as={Link} to={nameRoutes.MiBlogPage}>Bodas</NavDropdown.Item>
            <NavDropdown.Item as={Link} to={nameRoutes.XVAniosPage}>XV Años</NavDropdown.Item>
          </NavDropdown>
          <LinkButton name='Contacto' ruta={nameRoutes.ContactoPage} className='my-link' />

        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end gap-3">


          {/* <Navbar.Text><Link to='/login'>Iniciar Sesión</Link> </Navbar.Text> */}
          <LinkButton name='Iniciar Sesión' ruta={nameRoutes.LoginPage}
            className='my-link'

          />

          {/* <button type="button" className="btn ">Registrar</button> */}
          <LinkButton name='Registrar' ruta={nameRoutes.UserRegisterPage}
            className='btn btn-primary link-btn'

          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarMenu;
