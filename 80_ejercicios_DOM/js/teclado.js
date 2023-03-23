
const d = document;
let x = 0;
let y = 0;

export function moveBall(e,ball,stage) {
    const $ball = d.querySelector(ball),
        $stage = d.querySelector(stage),
        limitsBall = $ball.getBoundingClientRect(),  //limites y situacion de la bola para 'colisiones'
        limitsStage = $stage.getBoundingClientRect(); //limites y situacion del escenario para 'colisiones'

    //para mover, detectamos el keyCode
    //.preventDefault para evitar el comportamiento por defecto de mover el scrool de la pagina
    //console.log(e.keyCode);
    //console.log(limitsBall, limitsStage);
    switch(e.keyCode){
        case 37: //left
            if(limitsBall.left>limitsStage.left) x--;
            e.preventDefault();
            break;
        case 38: //up
            if(limitsBall.top>limitsStage.top) y--;
            e.preventDefault();
            break;
        case 39: //right
            if(limitsBall.right<limitsStage.right) x++;
            e.preventDefault();
            break;
        case 40: //down
            if(limitsBall.bottom<limitsStage.bottom) y++;
            e.preventDefault();
            break;
        default:
            break;
    }
    $ball.style.transform = `translate(${x*20}px, ${y*20}px)`;

}

export function shortcuts(e) {
/*    console.log(e.type);
    console.log(e.key);
    console.log(e.keyCode);
    console.log(e.ctrlKey,"ctrl");
    console.log(e.altKey, "alt");
    console.log(e.shiftKey, "shift");
    console.log(e);
*/ 

    //Cuanto el usuario presione Atl+a se ejecute una alert()....
    if(e.key==="a" && e.altKey) {
        alert("Has lanzado una alerta con Alt+a");
    }
    if(e.key === "c" && e.altKey) {
        confirm("Has lanzado un confirm con Alt+c");
    }
    if(e.key === "p" && e.altKey) {
        prompt("Has lanzado un prompt con Alt+p");
    }
}