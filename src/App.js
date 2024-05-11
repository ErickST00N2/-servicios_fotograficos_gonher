import React from "react";
// import logo from './logo.svg';
import "./App.css";
import MenuAppBar from "./layouts/MenuAppBar/MenuAppBar";
import { BrowserRouter as Router } from "react-router-dom";
import Rutas from "./router/routes";

function App() {
  return (
    <Router>
      <MenuAppBar />

      <Rutas />
    </Router>
  );
}

export default App;
