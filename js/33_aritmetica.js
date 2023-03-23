
function sumar(a,b){
    return a+b;
}

function restar(a,b){
    return a-b;
}

//podemos meter las funciones en un objeto y exportarlo
export const aritmetica = {
    sumar,
    restar
}

