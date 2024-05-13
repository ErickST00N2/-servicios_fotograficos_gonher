import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import { nameRoutes } from "../../router/routes";
import "./HeaderLayout.css";
import {  useEffect, useState } from "react";
import ImgGonHer from "../../Components/VideoValeria/ImgGonHer";
import FooterHeader from "./widgets/FooterHeader";
import ResponsiveDesign from "../../util/responsive-design";






function HeaderLayout(props) {
    const [styleHeader, setstyleHeader] = useState({
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
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
                : { display: "flex", flexDirection: "row", justifyContent: "space-between" }
        );
    }, [isMobileOrTablet]);


    return (
        <div className="mb-2 header-container bg-black ">
                
            
            <Container className="text-center container-fluid" style={styleHeader}>
                <Container className="text-start mb-2 modal-content">
                    <h1 className=" tangerine-bold">Servicios Fotográficos GonHer</h1>
                    <h3 className="modal-title"> Ofrece: <Link className=" my-link" to={nameRoutes.XVAniosPage}>XV Años</Link>, <Link className=" my-link" to={nameRoutes.BodasPage}>Bodas</Link>, <Link className=" my-link" to={nameRoutes.BautizosPage}>Bautizos</Link>, <Link className=" my-link" to={nameRoutes.EscuelasPage}>Escuelas</Link>, y más...</h3>


                    <p className="modal-body">Contamos con una gran variedad de Servicios profesionales en la fotografía, capturando cada bello momento. Puedes ver nuestro trabajo en:
                        <Link to={nameRoutes.PortafolioPage} className="my-link">Portafolio</Link></p>
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
                <Container className="text-center mb-2">
                    {/* <VideoValeria /> */}
                    <ImgGonHer className="imgGonHer" />
                </Container>
            </Container>

            
        </div>
    )
}

export default HeaderLayout
