
const d = document;

export default function contactFormValidations() {
    const $form = d.querySelector(".contact-form"), //detectamos el formulario a traves de su clase
        $inputs = d.querySelectorAll(".contact-form [required]"); //detectamos todos los elementos del formulario requeridos

    //console.log($inputs);

    //Creamos los elementos spam de error debajo de cada campo requerido
    $inputs.forEach(input => {
        const $span = d.createElement("span");
        $span.id = input.name; //asignamos a cada span creado un id igual al name del input
        //console.log($span);
        $span.textContent = input.title; //asignamos a cada span creado el texto igual al title del input
        $span.classList.add("contact-form-error", "none"); //a cada span le aplicamos las clases 'contact...' y 'none'
        input.insertAdjacentElement("afterend", $span); //insertamos los span debajo de cada campo
    });

    //Comprobaciones de formularios al keyUp
    d.addEventListener("keyup", (e) => {
        if(e.target.matches(".contact-form [required]")){
            let $input = e.target,
                pattern = $input.pattern || $input.dataset.pattern; /*operador de cortocircuito si no existe, haz lo otro. Como el textArea le creamos un pattern
                especial tenemos que llamarlo de otra forma*/
            
            //console.log($input, pattern);

            //Sacar los mensajes de validacion, como el campo 'asunto' no tiene pattern tenemos que hacer un if
            if(pattern && $input.value !== "") {
                let regex = new RegExp(pattern); //variable para guardar la expresion regular
                return !regex.exec($input.value)
                    ? d.getElementById($input.name).classList.add("is-active")
                    : d.getElementById($input.name).classList.remove("is-active")
            }
            if(!pattern){
                return $input.value === ""
                    ? d.getElementById($input.name).classList.add("is-active")
                    : d.getElementById($input.name).classList.remove("is-active")
            }
        }
    });


    //Manejamos que ocurre al darle al boton enviar
    d.addEventListener("submit", (e) => {
        e.preventDefault(); //evitar el comportamiento normal del explorador
        //alert("Enviando formulario");

        const $loader = d.querySelector(".contact-form-loader"),
            $response = d.querySelector(".contact-form-response");

        $loader.classList.remove("none"); //mostramos el louder cuando le damos al boton enviar

        //simulamos el envio con un setTimeOut ya que no tenemos servidor donde enviar los datos
        setTimeout(() => {
            $loader.classList.add("none"); //ocultamos el louder cuando le damos al boton enviar
            $response.classList.remove("none"); //mostramos el mensaje de envio
            $form.reset(); //reseteamos el formulario

            setTimeout(() => $response.classList.add("none"),3000); //con otro setTimeOut eliminamos el mensaje de enviados
            
        },3000);
    });
}