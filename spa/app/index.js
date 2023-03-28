import { App } from "./App.js";
import { Router } from "./components/Router.js";

const d = document;

// Se ejecuta a la carga de la pagina
d.addEventListener("DOMContentLoaded", App);

// Se ejecuta al detectar el cambio del # en la url del explorador
window.addEventListener("hashchange", App);
