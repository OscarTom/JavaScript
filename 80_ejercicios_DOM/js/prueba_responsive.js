
const d = document;

export default function responsiveTester(form) {
    const $form = d.getElementById(form);
    let tester; //para almacenar la ventana que vamos a abrir y luego cerrarla

    d.addEventListener("submit", (e) => {
        if(e.target === $form) {
            e.preventDefault(); //Evitamos que se procese la pagina al enviar el formulario. Lo haremos con JS
            //alert("Formulario enviado");
            //console.log($form); //con la notacion del punto podemos acceder a cualquier elemento
            tester = window.open(
                $form.direccion.value,
                 "tester",
                 `innerWidth=${$form.ancho.value}, innerHeight=${$form.alto.value}`
                );
        }
    });

    d.addEventListener("click", (e) => {
        if(e.target === $form.cerrar) {
            tester.close();
        }
    });
}