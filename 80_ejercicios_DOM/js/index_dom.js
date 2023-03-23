import hamburguerMenu from "./menu_hamburguesa.js";
import { digitalClock, alarm } from "./reloj.js";
import { shortcuts,moveBall } from "./teclado.js";
import countDown from "./cuenta_regresiva.js"
import scrollTopButton from "./boton_scroll.js";
import darkTheme from "./tema_oscuro.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_red.js";
import webCam from "./deteccion_webcam.js";
import getGeolocation from "./geolocalizacion.js";
import searchFilters from "./filtro_busquedas.js";
import draw from "./sorteo.js";
import slider from "./slider.js";
import scrollSpy from "./scroll_espia.js";
import smartVideo from "./video_inteligente.js";
import contactFormValidations from "./validaciones_form.js";
import speechReader from "./narrador.js";


const d = document;

//Invocamos a la carga del documento
d.addEventListener("DOMContentLoaded", (e) => {
    hamburguerMenu(".panel-btn", ".panel", ".menu a");
    
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");

    alarm("assets/car-alarm.mp3", "#activar-alarma","#desactivar-alarma");

    countDown("countDown","Jan 01,2023 07:00:00", "Feliz cumpleaños");

    scrollTopButton(".scroll-top-btn");

    responsiveMedia(
        "youtube",
        "(min-width: 1024px)",
        `<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=91" target="blank">Ver video</a>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        );

    responsiveMedia(
        "gmaps",
        "(min-width: 1024px)",
        `<a href="https://goo.gl/maps/KropRSxZW75kqYEd8" target="blank">Ver mapa</a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.391917736866!2d-3.4882491487760268!3d40.3780056792683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd423976127fb7b7%3A0xfe12b22b388e1dc9!2sC.%20Berlin%2C%2012%2C%2028891%20Velilla%20de%20San%20Antonio%2C%20Madrid!5e0!3m2!1ses!2ses!4v1641816367353!5m2!1ses!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
        );

    responsiveTester("responsive-tester");

    userDeviceInfo("user-device");

    webCam("webcam");

    getGeolocation("geolocation");

    searchFilters(".card-filter", ".card");

    draw("#winner-btn", ".player");

    slider();

    scrollSpy();

    smartVideo();

    contactFormValidations();
});

//Teclado
/* keydown-->al presionar la tecla
   keyup-->al soltar la tecla
   keypress-->mientras tengas la tecla presionada
*/
d.addEventListener("keydown", e => { 
    shortcuts(e);
    moveBall(e,".ball",".stage");
})

//La sacamos del DOMContentLoaded para que funcione el propio DOMContentLoaded que hay dentro de 'tema_oscuro.js'
//No se puede llamar a un DOMContentLoaded dentro de otro.
darkTheme(".dark-theme-btn", "dark-mode");

networkStatus();

speechReader();