import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
// import 'bootswatch/dist/slate/bootstrap.min.css'; // Added this :boom:
// import 'bootswatch/dist/cyborg/bootstrap.min.css';
import 'bootswatch/dist/cyborg/bootstrap.rtl.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Función para comprobar el tamaño del contenido y el viewport
function checkViewportSize() {
  const outerWidth = window.outerWidth;
  const innerWidth = window.innerWidth;

  if (outerWidth === innerWidth) {
      console.log(`El tamaño del contenido (${innerWidth}px) coincide con el del viewport (${outerWidth}px).`);
  } else {
      console.log(`El tamaño del contenido (${innerWidth}px) no coincide con el del viewport (${outerWidth}px).`);
      console.log('Es posible que la app no esté optimizada para pantallas de dispositivos móviles.');
  }
}

// Llamar a la función para comprobar el tamaño del contenido y el viewport
checkViewportSize();

// Opcional: agregar un listener para verificar cuando se redimensiona la ventana
window.addEventListener('resize', checkViewportSize);
