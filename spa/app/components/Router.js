import api from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";

export function Router() {
  const d = document,
    w = window;

  let { hash } = location;
  console.log(hash);

  // Navegacion
  if (!hash || hash === "#/") {
    ajax({
      url: api.POSTS,
      cbSuccess: (posts) => {
        console.log(posts);
        let html = "";
        posts.forEach((post) => (html += PostCard(post))); //Vamos almacenando el la variable html el contenido de cada post
        d.querySelector(".loader").style.display = "none"; //Ocultamos el loader
        d.getElementById("posts").innerHTML = html; //Mostramos los post almacenados en html
      },
    });
  } else if (hash.includes("#/search")) {
    d.getElementById("posts").innerHTML = `<h2>Sección buscar</h2>`;
  } else if (hash === "#/contacto") {
    d.getElementById("posts").innerHTML = `<h2>Sección contacto</h2>`;
  } else {
    d.getElementById("posts").innerHTML = `<h2>Aqui cargara el contenido del post previamente seleccionado</h2>`;
  }
}
