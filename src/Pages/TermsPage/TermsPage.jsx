import React from "react";
import Accordion from "react-bootstrap/Accordion";
import AccordionItem from "react-bootstrap/AccordionItem";
import AccordionHeader from "react-bootstrap/AccordionHeader";
import AccordionBody from "react-bootstrap/AccordionBody";
import Container from "react-bootstrap/Container";
import { Link, useNavigate } from "react-router-dom";
import "./TermsPage.css";
import { nameRoutes } from "../../router/routes";

function TermsPage() {
  const navigate = useNavigate();

  return (
    <div className="text-bg-light">
      <Container className="md-5">
        <Container className="py-lg-5 text-justify">
          <h1 className="mb-4">Términos y Condiciones</h1>
          <Accordion defaultActiveKey={["0"]}>
            <AccordionItem eventKey="0">
              <AccordionHeader>1. Introducción</AccordionHeader>
              <AccordionBody>
                Bienvenido a nuestra página de servicios fotográficos. Estos
                términos de uso regulan su uso de nuestra aplicación y sitio
                web. Al acceder a nuestros servicios, usted acepta estos
                términos de uso.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem eventKey="1">
              <AccordionHeader>2. Recolección de Datos</AccordionHeader>
              <AccordionBody>
                Recopilamos datos personales, incluyendo fotos, números de
                teléfono, nombres y correos electrónicos, solo para registrar
                usuarios, validar identidades y recuperar contraseñas si es
                necesario.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem eventKey="2">
              <AccordionHeader>3. Uso de los Datos</AccordionHeader>
              <AccordionBody>
                Los datos recopilados se utilizan únicamente para proporcionar
                nuestros servicios, como agendar citas y enviar notificaciones
                relacionadas. No compartimos sus datos con terceros no
                autorizados.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem eventKey="3">
              <AccordionHeader>4. Seguridad de los Datos</AccordionHeader>
              <AccordionBody>
                Tomamos medidas para proteger sus datos personales y asegurar su
                privacidad. Sin embargo, no podemos garantizar la seguridad
                total de sus datos debido a la naturaleza de Internet.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem eventKey="4">
              <AccordionHeader>5. Citas y Agendamiento</AccordionHeader>
              <AccordionBody>
                Nuestra aplicación le permite agendar citas para sesiones y
                eventos de fotografía. Al reservar una cita, usted acepta seguir
                nuestras políticas de cancelación y reprogramación.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem eventKey="5">
              <AccordionHeader>6. Blogs y Contenido</AccordionHeader>
              <AccordionBody>
                Ofrecemos blogs y otros contenidos para su información y
                educación. El contenido no constituye asesoramiento fotográfico
                y debe consultarse directamente con el profesional calificado.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem eventKey="6">
              <AccordionHeader>
                7. Modificaciones de los Términos de Uso
              </AccordionHeader>
              <AccordionBody>
                Nos reservamos el derecho de modificar estos términos de uso en
                cualquier momento. Le notificaremos sobre cambios significativos
                mediante notificaciones en nuestra aplicación o sitio web.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem eventKey="7">
              <AccordionHeader>8. Contacto</AccordionHeader>
              <AccordionBody>
                Si tiene alguna pregunta sobre estos términos de uso, puede
                contactarnos a través de nuestro{" "}
                <Link to={nameRoutes.ContactoPage}>formulario de contacto</Link>{" "}
                o por correo electrónico a{" "}
                <Link to={"mailto:gonherfotografiaoficial@gmail.com"}>
                  gonherfotografiaoficial@gmail.com
                </Link>
                .
              </AccordionBody>
            </AccordionItem>
            {/* <Button variant="primary" onClick={() => navigate(-1)}>
              Volver
            </Button> */}
          </Accordion>
        </Container>
      </Container>
    </div>
  );
}

export default TermsPage;
