import { Loader } from "./components/Loader.js";
import { Header } from "./components/Header.js";
import { Posts } from "./components/Posts.js";
import { Router } from "./components/Router.js";

export function App() {
  const $root = document.getElementById("root");

  $root.appendChild(Header());
  $root.appendChild(Posts());
  $root.appendChild(Loader());
  Router();

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
