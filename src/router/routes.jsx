import { Route, Routes } from "react-router-dom";

//Pages
import HomePage from "../Pages/HomePage/HomePage";

import NosotrosPage from "../Pages/Nosotros/NosotrosPage/NosotrosPage";
import MiBlogPage from "../Pages/Nosotros/MiBlogPage/MiBlogPage";
import PortafolioPage from "../Pages/Nosotros/PortafolioPage/PortafolioPage";

import LoginPage from "../Pages/User/LoginPage/LoginPage";
import UserRegisterPage from "../Pages/User/UserRegisterPage/UserRegisterPage";
import ForgotPassword from "../Pages/User/ForgotPassword/ForgotPassword";

import BodasPage from "../Pages/Servicios/BodasPage/BodasPage";
import BautizosPage from "../Pages/Servicios/BautizosPage/BautizosPage";
import XVAniosPage from "../Pages/Servicios/XVAniosPage/XVAniosPage";
import EscuelasPage from "../Pages/Servicios/EscuelasPage/EscuelasPage";

import ContactoPage from "../Pages/Contacto/ContactoPage/ContactoPage";
import RegistrarCitaPage from "../Pages/Contacto/RegistrarCitaPage/RegistrarCitaPage";
import VerCitasPage from "../Pages/Contacto/VerCitasPage/VerCitasPage";

import PolicyPage from "../Pages/PolicyPage/PolicyPage";
import TermsPage from "../Pages/TermsPage/TermsPage";

import Error404Page from "../Pages/Error404Page/Error404Page";

const nameRoutes = {
  HomePage: "/",

  //Nosotros
  NosotrosPage: "/Nosotros",
  MiBlogPage: "Nosotros/Mi-Blog",
  PortafolioPage: "/Portafolio",

  //Login, registrarse y recuperar contraseña
  LoginPage: "/Login",
  UserRegisterPage: "/SignUp",
  forgotPassword: "/forgot-password",

  //Servicios
  BodasPage: "/Bodas",
  BautizosPage: "/Bautizos",
  XVAniosPage: "/Quinceanios",
  EscuelasPage: "/Escuelas",

  //Citas y contacto
  ContactoPage: "/Contacto",
  RegistrarCitaPage: "/Registrar-Cita",
  VerCitasPage: "/Ver-Cita",

  //Políticas y términos
  PolicyPage: "/Policy",
  TermsPage: "/Terms",

  Error404Page: "*",
};

const Rutas = () => (
  //Componente que contiene las rutas de la aplicación
  <Routes>
    {/* Ruta principal */}
    <Route index element={<HomePage />} />

    {/* Nosotros */}
    <Route exact path={nameRoutes.NosotrosPage} element={<NosotrosPage />} />
    <Route exact path={nameRoutes.MiBlogPage} element={<MiBlogPage />} />
    <Route
      exact
      path={nameRoutes.PortafolioPage}
      element={<PortafolioPage />}
    />

    {/* Login, registrarse y recuperar contraseña */}
    <Route exact path={nameRoutes.LoginPage} element={<LoginPage />} />
    <Route
      exact
      path={nameRoutes.UserRegisterPage}
      element={<UserRegisterPage />}
    />
    <Route
      exact
      path={nameRoutes.forgotPassword}
      element={<ForgotPassword />}
    />

    {/* Servicios */}

    <Route exact path={nameRoutes.BodasPage} element={<BodasPage />} />
    <Route exact path={nameRoutes.BautizosPage} element={<BautizosPage />} />
    <Route exact path={nameRoutes.XVAniosPage} element={<XVAniosPage />} />
    <Route exact path={nameRoutes.EscuelasPage} element={<EscuelasPage />} />

    {/* Citas y contacto */}
    <Route exact path={nameRoutes.ContactoPage} element={<ContactoPage />} />
    <Route
      exact
      path={nameRoutes.RegistrarCitaPage}
      element={<RegistrarCitaPage />}
    />
    <Route exact path={nameRoutes.VerCitasPage} element={<VerCitasPage />} />

    {/* Políticas y términos */}
    <Route exact path={nameRoutes.PolicyPage} element={<PolicyPage />} />
    <Route exact path={nameRoutes.TermsPage} element={<TermsPage />} />

    <Route exact path={nameRoutes.Error404Page} element={<Error404Page />} />
  </Routes>
);

export default Rutas;
export { nameRoutes };
