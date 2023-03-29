import { Loader } from "./components/Loader.js";
import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";
import { Router } from "./components/Router.js";
import { InfiniteScroll } from "./helpers/infinite_scroll.js";

export function App() {
  const $root = document.getElementById("root");

  $root.innerHTML = null;
  $root.appendChild(Header());
  $root.appendChild(Main());
  $root.appendChild(Loader());
  Router();
  InfiniteScroll();

  /************************** CODIGO DE APRENDIZAJE *******************/

  //document.getElementById("root").innerHTML = `<h1>Bienvenidos al SPA hecho con Vanilla JS</h1>`;

  //console.log(api);

  /* Al llamar a la funcion ajax de l archivo ajax.js, le pasamos dos parametros en un objeto, url y una funcion que se llama cbSuccess
   --> seguir leyendo el proceso en el archivo ajax.js */
  //ajax({
  //  url: api.POSTS,
  //  cbSuccess: (posts) => {
  //    console.log(posts);
  //  },
  //});

  /* Ahora lo hacemos con categorias */
  //ajax({
  //  url: api.CATAGORIES,
  //  cbSuccess: (categories) => console.log(categories),
  //});
}
