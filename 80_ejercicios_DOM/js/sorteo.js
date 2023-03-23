

const d = document;

export default function draw(btn, selector) {
    const getWinner = (selector) => {
        const $players = d.querySelectorAll(selector),
            random = Math.floor(Math.random()*$players.length),
            winner = $players[random];
        
        //console.log($players);
        //console.log(random);
        //console.log(winner);
        return `El ganador es: ${winner.textContent}`;

    
    };

    d.addEventListener("click", (e) => {
        if(e.target.matches(btn)){
            let result = getWinner(selector);
            alert(result);
            //console.log(result);
        }
    });
}



/*Genera un ganador por comentario en youTube, analizamos el codigo de YouTube y llegamos hasta el autor del comentario*/
/*
const getWinnerComment = (selector) => {
    const $players = document.querySelectorAll(selector),
        random = Math.floor(Math.random()*$players.length),
        winner = $players[random];
    
    return `El ganador es: ${winner.textContent}`;
}
getWinnerComment("ytd-comment.thread-renderer #author-text span");
*/