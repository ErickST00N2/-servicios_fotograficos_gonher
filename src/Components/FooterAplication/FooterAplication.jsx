import "./FooterAplication.css";
import { Link } from "react-router-dom";
import { nameRoutes } from "../../router/routes";
import LogoMenu from "../../util/logo-menu";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { Container, Image } from "react-bootstrap";

function FooterAplication() {
  return (
    <footer className="text-withe py-4 bg-black footer-page align-items-center flex-column d-flex">
      <Container>
        <nav className="row align-content-center footer-app text-center">
          <ul className="col-6 col-md-3 list-unstyled text-center">
            <li>
              <br />
            </li>
            <li>
              <br />
            </li>
            <li className="font-weight-bold mb-2 text-dark">
              <Link
                to={nameRoutes.HomePage}
                className="text-white text-decoration-none col-12 col-md-3 text-center d-flex align-items-center justify-content-center"
              >
                <Image
                  src={LogoMenu}
                  alt="Servicios Fotográficos GonHer"
                  width={"180vh"}
                  height={"90vh"}
                  rounded
                />
              </Link>
            </li>
          </ul>

          {/* Sección de Servicios fotograficos GonHer */}
          <ul className="col-6 col-md-2 list-unstyled text-center">
            <li>
              <br />
            </li>
            <li>
              <br />
            </li>
            <li className="font-weight-bold mb-2 text-dark">
              Servicios Fotografícos GonHer
            </li>
            <li className="text-white">
              En este sitio podrás encontrar una gran variedad de fotografías.
            </li>
          </ul>

          {/* Sección nosotros a la pagina */}
          <ul className="col-6 col-md-1 list-unstyled  ">
            <li>
              <br />
            </li>
            <li>
              <br />
            </li>
            <li className="font-weight-bold mb-2">Nosotros</li>
            <li>
              <Link
                to="/#serviciosFGONHER"
                className="text-white text-decoration-none my-link"
              >
                Ir a inicio
              </Link>
            </li>
            <li>
              <Link
                to={nameRoutes.NosotrosPage}
                className="text-white text-decoration-none my-link"
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                to={nameRoutes.MiBlogPage}
                className="text-white text-decoration-none my-link"
              >
                Mi Blog
              </Link>
            </li>
            <li>
              <Link
                to={nameRoutes.ContactoPage}
                className="text-white text-decoration-none my-link"
              >
                Contacto
              </Link>
            </li>
          </ul>

          {/* Sección de Servicios */}
          <ul className="col-6 col-md-1 list-unstyled  ">
            <li>
              <br />
            </li>
            <li>
              <br />
            </li>
            <li className="font-weight-bold mb-2">Servicios</li>
            <li>
              <Link
                to={nameRoutes.BodasPage}
                className="text-white text-decoration-none my-link"
              >
                Bodas
              </Link>
            </li>
            <li>
              <Link
                to={nameRoutes.BautizosPage}
                className="text-white text-decoration-none my-link"
              >
                Bautizos
              </Link>
            </li>
            <li>
              <Link
                to={nameRoutes.XVAniosPage}
                className="text-white text-decoration-none my-link"
              >
                XV Años
              </Link>
            </li>
            <li>
              <Link
                to={nameRoutes.EscuelasPage}
                className="text-white text-decoration-none my-link"
              >
                Escuelas
              </Link>
            </li>
          </ul>

          {/* Sección de Citas y contacto */}
          <ul className="col-6 col-md-2 list-unstyled  ">
            <li>
              <br />
            </li>
            <li>
              <br />
            </li>
            <li className="font-weight-bold mb-2">Citas y contacto</li>
            <li>
              <Link
                to={nameRoutes.RegistrarCitaPage}
                className="text-white text-decoration-none my-link"
              >
                Registrar Citas
              </Link>
            </li>
            <li>
              <Link
                to={nameRoutes.ContactoPage}
                className="text-white text-decoration-none my-link"
              >
                Contáctanos
              </Link>
            </li>
            <li>
              <Link
                to={nameRoutes.VerCitasPage}
                className="text-white text-decoration-none my-link"
              >
                Ver Citas{" "}
              </Link>
            </li>
          </ul>

          {/* sección de contacto */}
          <ul className="col-6 col-md-2 list-unstyled">
            <li>
              <br />
            </li>
            <li>
              <br />
            </li>
            <li className="font-weight-bold text-center mb-2">Síguenos</li>
            <li className="d-flex justify-content-evenly">
              <Link
                to={"https://www.facebook.com/JoseLuisGonherFotografia"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook
                  className="icon-footer"
                  style={{ fontSize: "1.2em" }}
                />
              </Link>
              <Link
                to={
                  "https://www.instagram.com/servicios_fotograficos_gonher?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="ig" style={{ fontSize: "1.2em" }} />
              </Link>
              <Link to={"https://wa.me/2411941814"}>
                <FaWhatsapp className=" wa" style={{ fontSize: "1.2em" }} />
              </Link>
              <Link to={"mailto:gonherfotografiaoficial@gmail.com"}>
                <FaEnvelope className="gmail" style={{ fontSize: "1.2em" }} />
              </Link>
            </li>

            <li>
              <br />
            </li>
            <li>
              <br />
            </li>
            <li className="font-weight-bold text-center mb-2">Legal</li>
            <li className="d-flex justify-content-evenly">
              <Link
                to={nameRoutes.TermsPage}
                className="text-white text-decoration-none my-link"
              >
                Terminos y Condiciones
              </Link>
            </li>
            <li className="d-flex justify-content-evenly">
              <Link
                to={nameRoutes.PolicyPage}
                className="text-white text-decoration-none my-link"
              >
                Política de privacidad
              </Link>
            </li>
          </ul>
        </nav>
        <hr />
        <nav className="row text-center">
          <ul className="col-12 col-md-12">
            <li className="list-unstyled text-secondary">
              Hecho por el{" "}
              <Link
                className="text-decoration-none text-secondary my-link"
                to={"https://erickst00ngonzalez.web.app"}
              >
                Ing. Erick González Cortes
              </Link>
            </li>
          </ul>
        </nav>
        <hr />
        <nav className="row text-center">
          <ul className="col-12 col-md-12">
            <li className="list-unstyled text-secondary">
              © 2024 Servicios Fotograficos GonHer. Todos los derechos
              reservados.
            </li>
          </ul>
        </nav>
      </Container>
    </footer>
  );
}

export default FooterAplication;
