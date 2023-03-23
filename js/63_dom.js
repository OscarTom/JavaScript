
/* **********     Curso JavaScript: 63. DOM: Atributos y Data-Attributes - #jonmircha     ********** */
/*console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));

console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

//cambier atributos
document.documentElement.lang = "en";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.lang);

//Se suele colocar $ en las variables que guardan elementos del DOM
const $linkDOM = document.querySelector(".link-dom");
console.log($linkDOM);

//Cambiar atributo para abrir en una nueva pestaña
$linkDOM.setAttribute("target", "_blank");

//Para evitar hackeos, para que no haya relacion entre la pestaña origen y la nueva abierta
$linkDOM.setAttribute("rel", "noopener");

//Cambiar atributo para abrir otro link
$linkDOM.setAttribute("href", "https://youtube.com/jonmircha");

//Preguntar si tiene el atributo rel
console.log($linkDOM.hasAttribute("rel"));

//quitar atributo
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

//Estandar HTML5 Data.Attributes
    //Obtener atributos
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset); //vemos que es un diccionario y podemos acceder con notacion de .
    //Establecer valores
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description","Modelo de objeto cambiado");
console.log($linkDOM.dataset.description);
        //con notacion de punto
$linkDOM.dataset.description = "Suscribete a mi canal";
console.log($linkDOM.dataset.description);*/

//-------------------64 Estilos y variables CSS-------------------

//Se escriben en formato camelCase

/*const $linkDOM = document.querySelector(".link-dom");


console.log($linkDOM.getAttribute("style"));

console.log($linkDOM.style); //Nos da las propiedades designadas en la consola
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);

console.log(getComputedStyle($linkDOM))  //nos da ademas los valores por defecto de todas las propiedades CSS
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

//Establecer valores
$linkDOM.style.setProperty("text-decoration", "none"); //Le quitamos el surayado
$linkDOM.style.setProperty("display","block");
    //con notacion de punto
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign ="center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";

//Variables CSS (Custom Propoerties CSS)

const $html = document.documentElement,
    $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
    varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty("--dark-color", "#000");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
$body.style.setProperty("background-color",varDarkColor); */


//-------------------65 Clases CSS-------------------

/*const $card = document.querySelector(".card"); //devuelve la primera coincidencia
console.log($card);

console.log($card.className);
console.log($card.classList);

console.log($card.classList.contains("rotate-45")); //devuelve true o false si lo tiene o no
$card.classList.add("rotate-45"); //añade una clase, rota 45 grados
console.log($card.classList.contains("rotate-45"));

console.log($card.className);
console.log($card.classList);

$card.classList.remove("rotate-45"); //quita una clase, rota 45 grados

$card.classList.toggle("rotate-45"); //funciona como interruptor, apaga y enciende 'rota 45 grados'

$card.classList.replace("rotate-45", "rotate-135"); //sustituye una clase por otra

$card.classList.add("opacity-80", "sepia"); //Añadir mas de una clase a la vez.
$card.classList.remove("opacity-80", "sepia"); //Quitar mas de una clase a la vez.

$card.classList.toggle("rotate-135"); */

//-------------------66 Texto y Html-------------------

/* const $whatIsDOM = document.getElementById("que-es");

let text = `
<p>
El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un                    
API para documentos HTML y XML.
</p>
<p>
Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
</p>
<p>
    <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
</p>
`
$whatIsDOM.innerText = text; //sustituye el texto o lo agrega, no reconoce las etiquetas html
$whatIsDOM.textContent = text; //no reconoce las etiquetas html
$whatIsDOM.innerHTML = text; //si lo reconoce Html

$whatIsDOM.outerHTML = text; //reemplaza el elemento del DOM por el contenido que le pasamos, en este caso quita el <p></p> y pone los tres que le pasamos */

//-------------------67 Traversing Recorriendo el DOM-------------------

/* const $cards = document.querySelector(".cards");
console.log($cards); 
console.log($cards.children);
console.log($cards.children[2]);  //elemento hijo
console.log($cards.parentElement); //elemento padre, en este caso es el body
console.log($cards.firstElementChild); //primer hijo, en este caso la tarjeta de tecnologia
console.log($cards.lastElementChild);//ultimo hijo 

console.log($cards.previousElementSibling); //hermano anterior, en este caso el enlace <a> </a>
console.log($cards.nextElementSibling); //hermano posterior, en este caso el <br> posterior   

console.log($cards.children[3].closest("section")); //busca ancestros y sucesores de ese tipo de tarjeta que le marquemos */

//-------------------68 Creando elementos y fragmentos-------------------

//Crearemos una nueva tarjeta de imagen. Foma correcta
/*
const $figure = document.createElement("figure"),
    $img = document.createElement("img"),
    $figcaption = document.createElement("figcaption"),
    $figcaptionText = document.createTextNode("Animals"),
    $cards = document.querySelector(".cards");

$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animals");
$figure.classList.add("card");

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

    //Forma no tan correcta, pero tambien valida
const $figure2 = document.createElement("figure");

$figure2.innerHTML = `
    <img src="https://placeimg.com/200/200/people" alt="People">
    <figcaption>People</figcaption>
    `;
$figure2.classList.add("card");
$cards.appendChild($figure2);

    //-------------- Agregar al body una lista de estaciones del año-----
const estaciones = ["Primavera","Verano","Otoño","Invierno"],
    $ul = document.createElement("ul");

document.write("<h3>Estaciones del año</h3>");
document.body.appendChild($ul);
estaciones.forEach(elemento => {
    const $li = document.createElement("li");
    $li.textContent = elemento;
    $ul.appendChild($li);
});

    //----agregar lista con innerHtml
const continentes = ["Africa","America","Asia","Europa","Oceania"],
    $ul2 = document.createElement("ul");

document.write("<h3>Continentes del mundo</h3>");
document.body.appendChild($ul2);
continentes.forEach((elemento)=> ($ul2.innerHTML += `<li>${elemento}</li>`)); // += para que lo añada a lo que existe en cada vuelta de bucle

    //Fragmentos, para cuando son muchisssimos los elementos a insertar, no 4 o 5 como en el caso anterior.

const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
    ],
    $ul3 = document.createElement("ul"),
    $fragment = document.createDocumentFragment();

meses.forEach((elemento) => {
    const $li = document.createElement("li");
    $li.textContent = elemento;
    $fragment.appendChild($li); //metemos cada elemento en el fragmen
});

document.write("<h3>Meses del año</h3>");
$ul3.appendChild($fragment); //metemos el fragmen que ya contiene todos los elemntos en la lista
document.body.appendChild($ul3); //por ultimo metemos la lista en el body.
*/


//-------------------69 Templates HTML-------------------
    //etiqueta nueva a partir de HTML5

/*const $cards = document.querySelector(".cards"),
    $template = document.getElementById("template-card").content,
    $fragment = document.createDocumentFragment(),
    cardContent = [
        {
            title: "Tecnología",
            img: "https://placeimg.com/200/200/tech",
        },
        {
            title: "Animales",
            img: "https://placeimg.com/200/200/animals",
        },
        {
            title: "Arquitectura",
            img: "https://placeimg.com/200/200/arch",
        },
        {
            title: "Gente",
            img: "https://placeimg.com/200/200/people",
        },
        {
            title: "Naturaleza",
            img: "https://placeimg.com/200/200/nature",
        },
    ];

console.log($template);

cardContent.forEach((elemento) => {
    $template.querySelector("img").setAttribute("src", elemento.img);
    $template.querySelector("img").setAttribute("alt", elemento.title);
    $template.querySelector("figcaption").textContent = elemento.title;

    //Tenemos que clonar la estructura de $template porque si no sobreescribe
    let $clone = document.importNode($template,true);
    $fragment.appendChild($clone);
});
$cards.appendChild($fragment);*/

//-------------------70 Modificando elementos Old Style-------------------

/*const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure"),
    $cloneCards = $cards.cloneNode(true); //clonamos todo el contenido de la clase cards

$newCard.innerHTML = `
    <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption>Any</figcaption>
`;

$newCard.classList.add("card");

// $cards.replaceChild($newCard, $cards.children[2]); //Reemplazar (elementoNuevo, elementoAntiguo)
// $cards.insertBefore($newCard, $cards.firstElementChild); //Insertar el la primera posicion
// $cards.removeChild($cards.lastElementChild); //Eliminar la ultima tarjeta
document.body.appendChild($cloneCards); //Insertamos el clone en el body */

//-------------------71 Modificando elementos Cool Style-------------------

        /*
        .insertAdjacent...
        .insertAdjacentElement(position, el)
        .insertAdjacentHTML(position, html)
        .insertAdjacentText(position, text)

        Posiciones:
        beforebegin(hermano anterior)
        afterbegin(primer hijo)
        beforeend(ultimo hijo)
        afterend(hermano siguiente)
        */

const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure");

let $contentCard = `
    <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcaption></figcaption>
`;

$newCard.classList.add("card");

$newCard.insertAdjacentHTML("beforeend", $contentCard); //inserta la imagen
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin","Any"); //inserta el texto de la imagen
//$cards.insertAdjacentElement("afterbegin", $newCard); //Lo insertamos despues de la <section> como primer elemento ***

//$cards.insertAdjacentElement("beforebegin", $newCard); //Lo insertamos antes de la <section>

//$cards.prepend($newCard); //hijo primero dentro de section . Hace lo mismo que ***
//$cards.before($newCard); //antes de la section
//cards.after($newCard); //despues de la section
$cards.append($newCard); //ultimo hijo dentro de section


//-------------------72 Manejadores de eventos-------------------

/*
function holaMundo() {
    alert("Hola Mundo");
    console.log(event);
}
*/
/*Manejadores semanticos, solo se puede asignar una funcion aun mismo evento, ver como no se puede
de las dos funciones que le asignamos solo ejecuta una*/
/*
const $eventoSemantico = document.getElementById("evento-semantico");
$eventoSemantico.onclick = holaMundo; //se llama a la funcion pero sin parentisis, si le ponemos parentesis se ejecuta nada mas cargar el navegador

$eventoSemantico.onclick = function(e) {
    alert("Hola Mundo manejador de eventos semanticos");
    console.log(e);
    console.log(event);
}
*/
/*Evento con manejador multiple*/
//Se ejecutan las dos funciones asociadas una detras de la otra
/*const $eventoMultiple = document.getElementById("evento-multiple");

$eventoMultiple.addEventListener("click",holaMundo); //(evento,funcionSinParentesis)
$eventoMultiple.addEventListener("click", (e) => {
    alert("Manejador de eventos multiples");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(event);
}); 
*/
//-------------------73. DOM: Eventos con Parámetros y Remover Eventos-------------------

/*Evento con manejador multiple*/
//Se ejecutan las dos funciones asociadas una detras de la otra

/*
function holaMundo() {
    alert("Hola Mundo");
    console.log(event);
}

function saludar(nombre = "desconocido"){
    alert(`Hola ${nombre}`);
}

const $eventoMultiple = document.getElementById("evento-multiple");

$eventoMultiple.addEventListener("click",holaMundo); //(evento,funcionSinParentesis)
$eventoMultiple.addEventListener("click", (e) => {
    alert("Manejador de eventos multiples");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(event);
}); 
$eventoMultiple.addEventListener("click",saludar); //No funciona, la manera correcta es la siguiente
$eventoMultiple.addEventListener("click", () => { //Una arrow funcion que llama a la funcion original
    saludar();
    saludar("Jon");
    saludar("Osc");
}); 

    
    //eliminar eventos de un elemento

const removerDobleClick = (e) => {
    alert(`Removiendo el evento de tipo ${e.type}`);
    $eventoRemover.removeEventListener("dblclick",removerDobleClick); //(evento, funcion manejadora)
    $eventoRemover.disabled = true; //desactiva el boton cuando el evento ya no existe
};
const $eventoRemover = document.getElementById("evento-remover");
$eventoRemover.addEventListener("dblclick", removerDobleClick); //Creamos en evento y le mandamos a la funcion de quitarlo al hacer doble click

*/
//-------------------74. DOM: Flujo de Eventos (Burbuja y Captura) -------------------

/*
const $divEventos = document.querySelectorAll(".eventos-flujo div"); //Seleccionamos todos los div que hay dentro de .eventos.flujo

console.log($divEventos);

function flujoEventos(e) {
    console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
}

$divEventos.forEach((div) => {
    div.addEventListener("click", flujoEventos, false); //Fase burbuja
    //div.addEventListener("click", flujoEventos,true);  //Fase captura
});
*/
/*
Si nos fijamos cuando presionamos en el div de 3, el metodo se ejecuta tres veces
cuando le damos a dos se ejecuta dos veces y cuando le damos a uno se ejecuta una.
Esto se le llama propagacion del flujo de evntos hacia fuera, tipo burbuja. 
Si lo que queremos es la fase de captura (al reves del externo al interno hay que añadir un tercer parametro a la funcion)
false (por defecto) -->Fase burbuja
true --> Fase captura
En los ultimos años se han creado otras cosas que especificar en el tercer parametro
div.addEventListener("click", flujoEventos,{
    capture: false (burbuja)
    capture: true (captura)
    once: true (solo se ejecuta una vez)
});
*/

//-------------------75. DOM: stopPropagation & preventDefault -------------------

   /* e.stopPropagation(); //detiene la propagacion */
/*
   const $divEventos = document.querySelectorAll(".eventos-flujo div"); //Seleccionamos todos los div que hay dentro de .eventos.flujo
    $linkEventos = document.querySelector(".eventos-flujo a"); //selecciona primer <a> dentro de la clase 'eventos-flujo

   console.log($divEventos);
   
   function flujoEventos(e) {
       console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
       e.stopPropagation(); //detiene la propagacion
   }
   
   $divEventos.forEach((div) => {
       div.addEventListener("click", flujoEventos, false); //Fase burbuja
       //div.addEventListener("click", flujoEventos,true);  //Fase captura
   });

   $linkEventos.addEventListener("click", (e) => {
       alert("Hola soy tu amigo");
       e.preventDefault(); //Elimina el comportamiento por defecto, en este caso el link a la pagina web
       e.stopPropagation();
   });
*/



//-------------------76. DOM: Delegación de Eventos -------------------

   /*La idea es generar un solo listener (por ejemplo al document) y buscar quien queremos que lo desencadene 
   de esta manera tampoco necesitamos en stopPropagation 
   Con esta tecnica mejoramos el rendimiento muchisimo*/ 

/*      
   function flujoEventos(e) {
       console.log(`Hola te saluda ${this}, el click lo origino ${e.target.className}`);
   }

   document.addEventListener("click", (e) => {
       console.log("Click en", e.target); //vemos en la consola donde estamos dando click

       if (e.target.matches(".eventos-flujo div ")){ //le decimos lo que hacer cuando le damos a ese elemento en concreto
           flujoEventos(e);
       }
        
       if (e.target.matches(".eventos-flujo a")){ //le decimos lo que hacer cuando le damos a ese elemento en concreto
        alert("Hola soy tu amigo");
        e.preventDefault();
       }
   });
*/

//-------------------77. BOM: Propiedades y Eventos (BOM Browser Object Model) -------------------

   /* Metodos y propiedades que hacen referencia a la ventana window */

   /*
   window.addEventListener("resize", (e) => {
        console.clear();
        console.log("******Evento Resize**********");
        console.log(window.innerWidth); //Tamaño de la ventana del navegador, lo que es el documento de la pagina web
        console.log(window.innerHeight);
        console.log(window.outerWidth);//Tamaño de la ventana del explorador (aplicacion)
        console.log(window.outerHeight);
        console.log(e);
   })

   window.addEventListener("scroll", (e) => {
    console.clear();
    console.log("******Evento Scroll**********");
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
   
   })

   //Se ejecuta justo cuando la ventana del navegador ha terminado de cargar
   window.addEventListener("load", (e) => {
    //console.clear();
    console.log("******Evento Load**********");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
   })


   //Es igual que el load anterior pero mucho mas rapido. No espera a que carge todo como el load, empieza a funcionar nada mas empezar.
   document.addEventListener("DOMContentLoaded", (e) => {
    //console.clear();
    console.log("******Evento DOMContentLoaded**********");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
   })

   */

//-------------------78. BOM: Métodos  -------------------

   //window.alert("Alerta");
   //window.confirm("Confirmacion");
   //window.prompt("Introducir texto");

/*
   const $btnAbrir = document.getElementById("abrir-ventana");
    $btnCerrar = document.getElementById("cerrar-ventana");
    $btnImprimir = document.getElementById("imprimir-ventana");


   //guardamos la pagina que hemos abierto para luego poder cerrarla
   let ventana;

   $btnAbrir.addEventListener("click", e => {
       ventana = window.open("https://jonmircha.com") //no hace falta poner 'window'
   });

   $btnCerrar.addEventListener("click", e => {
       // close(); //cierra la propia ventana
       ventana.close();

   });

   $btnImprimir.addEventListener("click", e => {
       window.print(); //abre la pagina para imprimir
   });
   
*/
  
//-------------------79. BOM: Objetos: URL, Historial y Navegador  -------------------

console.log("-----Objeto URL (location)-----")
console.log(location);
console.log(location.origin);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
console.log(location.hash);
console.log(location.search); //almacena los parametros de la url, lo que hay detras del ?
console.log(location.pathname);

console.log("-----Objeto URL (History)-----");
console.log(history);
console.log(history.length); //cuantas paginas hemos visitado en esa pestaña
//console.log(history.back(2)); //regresa el numero de paginas en el historial que marquemos
//console.log(history.forward(1));
//console.log(history.go(-1)); //igual que los dos anteriores pero - hacia atras y + hacia adelante

console.log("-----Objeto URL (Navegador)-----");
console.log(navigator);
console.log(navigator.connection);
console.log(navigator.clipboard); 
console.log(navigator.onLine); //identificar si tienes o no conexion
console.log(navigator.geolocation);
console.log(navigator.serviceWorker); //Api para hacer progressive web app, hacer nuestra web instalable como una aplicacion de escritorio   
console.log(navigator.storage);
console.log(navigator.userAgent);
console.log(navigator.usb);   