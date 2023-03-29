/* Nos ayudara a gestionar mejor las comunicaciones ajax */

export async function ajax(props) {
  /* Al llamar a la funcion en el archivo App.js le enviamos dos props (url y una funcion llamada cbSuccess)
  desestructuramos las props para poder asignarlas*/
  let { url, cbSuccess } = props;
  console.log(url);

  /* - Ejecutamos el fecht,
     - Si las respuesta es ok, lo convertimos a json y si no es ok lo enviamos al catch rechazando la promesa.
     - ejecutamos la funcion que nos han enviado cbSuccess enviandole el json, la data */

  await fetch(url)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => cbSuccess(json))
    .catch((err) => {
      let message = err.statusText || "Ocurrio un error al acceder a la Api";
      document.getElementById("main").innerHTML = `
      <div class="error">
        <p>Error ${err.status}: ${message}</p>
      </div>
      `;
      document.querySelector(".loader").style.display = "none";
      console.log(err);
    });
}
