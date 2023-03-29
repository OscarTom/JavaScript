import api from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";
import { Post } from "./Post.js";
import { SearchCard } from "./SearchCard.js";
import { ContactForm } from "./ContactForm.js";

export async function Router() {
  const d = document,
    w = window,
    $main = d.getElementById("main");

  let { hash } = location;
  console.log(hash);

  // Navegacion
  if (!hash || hash === "#/") {
    await ajax({
      url: api.POSTS,
      cbSuccess: (posts) => {
        console.log(posts);
        let html = "";
        posts.forEach((post) => (html += PostCard(post))); //Vamos almacenando el la variable html el contenido de cada post
        $main.innerHTML = html; //Mostramos los post almacenados en html
      },
    });
  } else if (hash.includes("#/search")) {
    let query = localStorage.getItem("wpSearch");
    if (!query) {
      d.querySelector(".loader").style.display = "none";
      return false;
    }

    await ajax({
      url: `${api.SEARCH}${query}`,
      cbSuccess: (search) => {
        console.log(search);
        let html = "";
        if (search.length === 0) {
          html = `
          <p class="error">
            NO existen resultados de búsqueda para: 
            <span style="text-decoration:underline">${query}</span>
          </p>
          `;
        }
        search.forEach((post) => (html += SearchCard(post))); //Vamos almacenando el la variable html el contenido de cada post
        $main.innerHTML = html; //Mostramos los post almacenados en html
      },
    });

    //$main.innerHTML = `<h2>Sección buscar</h2>`;
  } else if (hash === "#/contacto") {
    $main.appendChild(ContactForm());
    //$main.innerHTML = `<h2>Sección contacto</h2>`;
  } else {
    await ajax({
      // url: https://tendenciasdebodas.com/wp-json/wp/v2/posts/idPost  El id del post lo hemos almacenado en una variable en localStorage
      url: `${api.POST}/${localStorage.getItem("wpPostId")}`,
      cbSuccess: (post) => {
        console.log(post);
        $main.innerHTML = Post(post);
      },
    });
    //$main.innerHTML = `<h2>Aqui cargara el contenido del post previamente seleccionado</h2>`;
  }

  /* Ocultamos el louder, PERO!! para que la ejecucion del codigo no llegue hasta este punto 
  antes de tiempo, tenemos que hacer asincronas la funcion Router y la funcion ajax (ver archivo ajax.js).
  De esta forma la ejecucion del programa no seguira hasta que ambas tareas esten satisfechas */
  d.querySelector(".loader").style.display = "none";
}
