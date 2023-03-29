export function ContactForm() {
  const d = document,
    $form = d.createElement("form"),
    $style = d.getElementById("dynamic-styles");

  $form.classList.add("contact-form");

  $style.innerHTML = `
    html {
        box-sizing: border-box;
        font-family: sans-serif;
        font-size: 16px;
        }
        
        *,
        *:before,
        *:after {
        box-sizing: inherit;
        }

        /* **********     ContactForm Validations     ********** */
        .contact-form {
            --form-ok-color: #4caf50;
            --form-error-color: #f44336;
            margin-left: auto;
            margin-right: auto;
            width: 80%;
        }
  
        .contact-form > * {
            padding: 0.5rem;
            margin: 1rem auto;
            display: block;
            width: 100%;
        }
        
        .contact-form textarea {
            resize: none;
        }
        
        .contact-form legend,
        .contact-form-response {
            font-size: 1.5rem;
            font-weight: bold;
            text-align: center;
        }
        
        .contact-form input,
        .contact-form textarea {
            font-size: 1rem;
            font-family: sans-serif;
        }
        
        .contact-form input[type="submit"] {
            width: 50%;
            font-weight: bold;
            cursor: pointer;
        }
        
        .contact-form *::placeholder {
            color: #000;
        }
        
        .contact-form [required]:valid {
            border: thin solid var(--form-ok-color);
        }
        
        .contact-form [required]:invalid {
            border: thin solid var(--form-error-color);
        }
        
        .contact-form-error {
            margin-top: -1rem;
            font-size: 80%;
            background-color: var(--form-error-color);
            color: #fff;
            transition: all 800ms ease;
        }
        
        .contact-form-error.is-active {
            display: block;
            animation: show-message 1s 1 normal 0s ease-out both;
        }

        .contact-form-loader {
            text-align: center;
        }
        
        .none {
            display: none;
        }
        
        @keyframes show-message {
            0% {
            visibility: hidden;
            opacity: 0;
            }
        
            100% {
            visibility: visible;
            opacity: 1;
            }
        }
  `;

  $form.innerHTML = `
    <legend>Envianos tus comentarios</legend>
        <input type="text" name="name" placeholder="Escribe tu nombre..." title="El nombre solo acepta letras y espacios en blanco" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$" required>
        <input type="email" name="email" placeholder="Escribe tu email..." title="El correo no es correcto" pattern="^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$">
        <input type="text" name="subject" placeholder="Asunto a tratar" title="El asunto es requerido" >
        <textarea name="comments" cols="50" rows="5" placeholder="Escribe aqui tu comentario..." data-pattern="^.{1,255}$"  title="Tu comentario no puede exceder los 255 caracteres"></textarea>
        <input type="submit" value="Enviar">
        <div class="contact-form-loader none">
            <img src="app/assets/loader.svg" alt="Cargando">
        </div>
        <div class="contact-form-response none">
            <p>Los datos han sido enviados</p>
        </div>
  `;

  function validationsForm() {
    const $form = d.querySelector(".contact-form"), //detectamos el formulario a traves de su clase
      $inputs = d.querySelectorAll(".contact-form [required]"); //detectamos todos los elementos del formulario requeridos

    //console.log($inputs);

    //Creamos los elementos spam de error debajo de cada campo requerido
    $inputs.forEach((input) => {
      const $span = d.createElement("span");
      $span.id = input.name; //asignamos a cada span creado un id igual al name del input
      //console.log($span);
      $span.textContent = input.title; //asignamos a cada span creado el texto igual al title del input
      $span.classList.add("contact-form-error", "none"); //a cada span le aplicamos las clases 'contact...' y 'none'
      input.insertAdjacentElement("afterend", $span); //insertamos los span debajo de cada campo
    });

    //Comprobaciones de formularios al keyUp
    d.addEventListener("keyup", (e) => {
      if (e.target.matches(".contact-form [required]")) {
        let $input = e.target,
          pattern = $input.pattern || $input.dataset.pattern; /*operador de cortocircuito si no existe, haz lo otro. Como el textArea le creamos un pattern
                        especial tenemos que llamarlo de otra forma*/

        //console.log($input, pattern);

        //Sacar los mensajes de validacion, como el campo 'asunto' no tiene pattern tenemos que hacer un if
        if (pattern && $input.value !== "") {
          let regex = new RegExp(pattern); //variable para guardar la expresion regular
          return !regex.exec($input.value) ? d.getElementById($input.name).classList.add("is-active") : d.getElementById($input.name).classList.remove("is-active");
        }
        if (!pattern) {
          return $input.value === "" ? d.getElementById($input.name).classList.add("is-active") : d.getElementById($input.name).classList.remove("is-active");
        }
      }
    });

    //Manejamos que ocurre al darle al boton enviar
    d.addEventListener("submit", (e) => {
      e.preventDefault(); //evitar el comportamiento normal del explorador

      const $loader = d.querySelector(".contact-form-loader"),
        $response = d.querySelector(".contact-form-response");

      $loader.classList.remove("none"); //mostramos el louder cuando le damos al boton enviar

      //Peticion fetch con servicio de Formsubmit.co
      fetch("https://formsubmit.co/ajax/oscaroutlet@gmail.com", {
        method: "POST",
        body: new FormData(e.target), //Le pasamos el formulario. e.target es el formulario porque es quien activa el evento submit
      })
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json) => {
          console.log(json);
          $loader.classList.add("none");
          $response.classList.remove("none");
          $form.reset();
        })
        .catch((err) => {
          console.log(err);
          let message = err.statusText || "Ocuerrio un error, intentalo de nuevo mas tarde";
          $response.innerHTML = `<p> Error ${err.status}: ${message} </p>`;
        })
        .finally(() =>
          setTimeout(() => {
            $response.classList.add("none");
            $response.innerHTML = "";
          }, 3000)
        );
    });
  }

  setTimeout(() => validationsForm(), 100);

  return $form;
}
