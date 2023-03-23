

export const PI = Math.PI;

export let usuario = "Jon";
let password = "qwerty";

export default function saludar(){
    console.log("hola modulos +ES6");
}

/*Con let y const la exportacion hay que hacerlo de esta forma
let password = "qwerty";
export default password;
Hay que hacerlo descpues de declarar la variable */

export class Saludar{
    constructor(){
        console.log("Hola desde la clase");
    }
}

//SOLO SE PUEDE EXPORTAR POR DEFAULT UNA COSA