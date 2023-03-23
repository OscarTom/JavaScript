import saludar, {Saludar,PI,usuario} from "/js/33_constantes.js"; //vacio importa todo lo que haya {}
import {aritmetica as ar} from "/js/33_aritmetica.js";

console.log("Archivo modulos.js");
console.log(PI);

//llamamos al objeto importado con su propiedad sumar
console.log(ar.sumar(3,7));

saludar();

let saludo = new Saludar();
saludo;