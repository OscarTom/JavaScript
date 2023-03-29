import { App } from "./App.js";
import api from "./helpers/wp_api.js";

const d = document;

// Se ejecuta a la carga de la pagina
d.addEventListener("DOMContentLoaded", App);

// Se ejecuta al detectar el cambio del # en la url del explorador
window.addEventListener("hashchange", () => {
  api.page = 1;
  App();
});
