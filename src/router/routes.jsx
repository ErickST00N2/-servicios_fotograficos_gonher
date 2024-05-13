import { Route, Routes } from "react-router-dom";

// import LoginPage from "../Pages/LoginPage/LoginPage";
// import RegistrarCitaPage from "../Pages/RegistrarCitaPage/RegistrarCitaPage";
// import UserRegisterPage from "../Pages/UserRegisterPage/UserRegisterPage";
// import PolicyPage from "../Pages/Policypage/Policypage";
// import TermsPage from "../Pages/TermsPage/TermsPage";
// import ForgotPasswordPage from "../Pages/ForgotPassword/ForgotPassword";
import HomePage from "../Pages/HomePage/HomePage";
// import VerCitasPage from "../Pages/VerCitasPage/VerCitasPage";
import Error404Page from "../Pages/Error404Page/Error404Page";
import NosotrosPage from "../Pages/NosotrosPage/NosotrosPage";
import ContactoPage from "../Pages/ContactoPage/ContactoPage";
import MiBlogPage from "../Pages/MiBlogPage/MiBlogPage";


//Objeto con los nombres de las rutas
/*
```javascript
// Objeto con los nombres de las rutas de la aplicación
// Este objeto proporciona nombres descriptivos para las rutas de la aplicación
// y sus respectivos paths (caminos).
// Utiliza `nameRoutes` para referenciar las rutas de forma clara y consistente.
const nameRoutes = {
    "HomePage": '/',
    "RegistrarCitaPage": '/Registrar-Cita',
    "VerCitasPage": '/Ver-Cita',
    "LoginPage": '/Login',
    "UserRegisterPage": '/SignUp',
    "Error404Page": '*'
};
```
*/
/// ``nameRoutes`` - Objeto con los nombres de las rutas
let nameRoutes = {
    "HomePage": '/',

    //Nosotros
    "NosotrosPage": '/Nosotros',
    'MiBlogPage': 'Nosotros/Mi-Blog',
    "PortafolioPage": '/Portafolio',


    //Login, registrarse y recuperar contraseña
    "LoginPage": '/Login',
    "UserRegisterPage": '/SignUp',
    "forgot-password": '/forgot-password',

    //Servicios
    'BodasPage': '/Bodas',
    'BautizosPage': '/Bautizos',
    'XVAniosPage': '/Quinceanios',
    'EscuelasPage': '/Escuelas',

    //Citas y contacto
    "ContactoPage": '/Contacto',
    "RegistrarCitaPage": '/Registrar-Cita',
    "VerCitasPage": '/Ver-Cita',


    //Políticas y términos
    "PolicyPage": '/Policy',
    "TermsPage": '/Terms',

    
    "Error404Page": '*'
}



//Componente que contiene las rutas de la aplicación
// ```javascript
// // Componente que contiene las rutas de la aplicación
// // Utiliza `nameRoutes` para definir las rutas y los componentes asociados.
// // El componente `Routes` de `react-router-dom` se encarga de renderizar el componente
// // adecuado en función de la ruta a la que se acceda.
// const Rutas = () => (
//     <Routes>
//         <Route path={nameRoutes.WelcomePage} element={<WelcomePage />} />
//         <Route path={nameRoutes.RegistrarCitaPage} element={<RegistrarCitaPage />} />
//         <Route path={nameRoutes.VerCitasPage} element={<RegistrarCitaPage />} />
//         <Route path={nameRoutes.LoginPage} element={<LoginPage />} />
//         <Route path={nameRoutes.UserRegisterPage} element={<UserRegisterPage />} />
//         <Route path={nameRoutes.Error404Page} element={<Error404Page />} />
//     </Routes>
// );
// ```

const Rutas = () => <Routes>
    <Route exact path={nameRoutes.HomePage} element={<HomePage />} />
    <Route exact path={nameRoutes.NosotrosPage} element={<NosotrosPage />} />
    <Route exact path = {nameRoutes.MiBlogPage} element={<MiBlogPage />} />
    
    <Route exact path={nameRoutes.ContactoPage} element={<ContactoPage />} />



    {/* <Route exact path={nameRoutes.RegistrarCitaPage} element={<RegistrarCitaPage />} />
        <Route path={nameRoutes.VerCitasPage} element={<VerCitasPage />} />
        <Route exact path={nameRoutes.LoginPage} element={<LoginPage />} />
        <Route exact path={nameRoutes.UserRegisterPage} element={<UserRegisterPage />} />
        <Route exact path={nameRoutes.PolicyPage} element={<PolicyPage />} />
        <Route exact path={nameRoutes.TermsPage} element={<TermsPage />} />
        <Route path={nameRoutes["forgot-password"]} element={<ForgotPasswordPage />} /> */}
    <Route path={nameRoutes.Error404Page} element={<Error404Page />} />

</Routes>

export default Rutas
export { nameRoutes }