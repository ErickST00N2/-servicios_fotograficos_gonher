import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import { nameRoutes } from "../../router/routes";
import "./HeaderLayout.css";
import { useEffect, useState } from "react";
import FooterHeader from "./widgets/FooterHeader";
import ResponsiveDesign from "../../util/responsive-design";
import ParticleBackground from "../../Components/ParticlesBackground/ParticlesBackground";
import React from "react";
import retratoLuis from "../../assets/img/header/312836511_1260683794505606_4640947843586577290_n.webp";
import avatarLuis from "../../assets/img/header/408159250_1500025447238105_8577606297699606904_n.webp";
import { Image } from "react-bootstrap";
import ReactFlipCard from "reactjs-flip-card";

function HeaderLayout(props) {
  const [styleHeader, setstyleHeader] = useState({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  });

  // Crear la instancia de ResponsiveDesign
  const responsiveDesign = new ResponsiveDesign();
  // Crear estado para la detección del tipo de dispositivo
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(
    ResponsiveDesign.isMobileAndTablet()
  );

  // Efecto para manejar cambios de tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(ResponsiveDesign.isMobileAndTablet());
    };

    // Agregar el evento de cambio de tamaño
    window.addEventListener("resize", handleResize);

    // Limpiar el evento de cambio de tamaño
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [responsiveDesign]);

  // Actualizar el estilo del encabezado cuando cambia el estado isMobileOrTablet
  useEffect(() => {
    setstyleHeader(
      isMobileOrTablet
        ? { display: "flex", flexDirection: "column", justifyContent: "center" }
        : {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }
    );
  }, [isMobileOrTablet]);

  return (
    <div className="backgroundStar">
      <div className="mb-2 header-container ">
        <Container className="text-justify container-fluid" style={styleHeader}>
          <Container className=" mb-2 modal-content">
            <h1 className=" tangerine-bold" onClick={props.handleStop}>
              Servicios Fotográficos GonHer
            </h1>
            <h2 className="">
              {" "}
              Ofrece:{" "}
              <Link className=" my-link" to={nameRoutes.XVAniosPage}>
                XV Años
              </Link>
              ,{" "}
              <Link className=" my-link" to={nameRoutes.BodasPage}>
                Bodas
              </Link>
              ,{" "}
              <Link className=" my-link" to={nameRoutes.BautizosPage}>
                Bautizos
              </Link>
              ,{" "}
              <Link className=" my-link" to={nameRoutes.EscuelasPage}>
                Escuelas
              </Link>
              , y más...
            </h2>

            <p className="">
              Contamos con una gran variedad de Servicios profesionales en la
              fotografía, capturando cada bello momento. Puedes ver nuestro
              trabajo en:
              <Link to={nameRoutes.PortafolioPage} className="my-link">
                {" "}
                Portafolio
              </Link>
              .
            </p>
            {/* <div className="d-flex gap-2 modal-footer  " > */}
            {/* <div className="d-flex gap-2 btn-group"> */}
            {/* <Button as={Link} className="btn btn-primary" to={'https://www.facebook.com/JoseLuisGonherFotografia'} type="button">Facebook</Button>
                        <Button as={Link} className="btn btn-portafolio btn-secondary" data-bs-dismiss="modal" type="button" to={'https://maps.app.goo.gl/9XHLHTpAodsi68Qy7'}>Ubicación</Button>
                        <Button as={Link} className="btn btn-portafolio btn-secondary" data-bs-dismiss="modal" type="button" to={'tel:241 194 1814'}>Telefono</Button>
                        <Button as={Link} className="btn btn-portafolio btn-secondary" data-bs-dismiss="modal" type="button" to={'email:gonherfotografiaoficial@gmail.com'}>Correo</Button>
                    </div> */}
            {/* <div className="d-flex gap-2 modal-footer">
                        <Button as={Link} className="btn btn-primary" to={'https://www.facebook.com/JoseLuisGonherFotografia'} type="button">
                            <FaFacebookSquare /> Facebook
                        </Button>
                        <Button as={Link} className="btn btn-portafolio btn-secondary" data-bs-dismiss="modal" type="button" to={'https://maps.app.goo.gl/9XHLHTpAodsi68Qy7'}>
                            <FaMapMarkerAlt /> Ubicación
                        </Button>
                        <Button as={Link} className="btn btn-portafolio btn-secondary" data-bs-dismiss="modal" type="button" to={'tel:241 194 1814'}>
                            <FaPhone /> Telefono
                        </Button>
                        <Button as={Link} className="btn btn-portafolio btn-secondary" data-bs-dismiss="modal" type="button" to={'email:gonherfotografiaoficial@gmail.com'}>
                            <FaEnvelope /> Correo
                        </Button>
                    </div> */}
            <FooterHeader />
          </Container>
          <br />
          <br />
          <Container className="text-center mb-2 filter-img">
            <ReactFlipCard
              flipCardStyle={{
                width: "100%!important",
                height: "100%!important",
              }}
              flipTrigger={"onHover"}
              onMouseEnter={props.handlePlayPause}
              onMouseLeave={props.handlePlayPause}
              onClick={props.handleStop}
              // flipCardCss="flip-car1d"
              frontComponent={
                <Image
                  srcset={avatarLuis}
                  src={avatarLuis}
                  loading="lazy"
                  roundedCircle
                  className="imgLuis"
                  alt="Servicios Fotograficos GonHer"
                />
              }
              backComponent={
                <Image
                  srcset={retratoLuis}
                  src={retratoLuis  }
                  loading="lazy"
                  roundedCircle
                  className="imgLuis"
                  alt="Servicios Fotograficos GonHer"
                />
              }
            />

            {/* <VideoValeria /> */}
            {/* <ImgGonHer className="imgGonHer" /> */}
          </Container>
        </Container>
      </div>
      <ParticleBackground />

      <br />
      <br />
    </div>
  );
}
export default HeaderLayout;
