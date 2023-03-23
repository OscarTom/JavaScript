
const d = document;

export function digitalClock(clock,btnPlay,btnStop) {

    let clockTempo = 

    d.addEventListener("click", (e) => {
        if(e.target.matches(btnPlay)){
            clockTempo = setInterval(() => {
                let clockHour = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<h3> ${clockHour} </h3>`; 
            }, 1000);
            e.target.disabled = true; //desactiva el boton mientras esta activo el reloj
        }

        if(e.target.matches(btnStop)){
            clearInterval(clockTempo);
            d.querySelector(clock).innerHTML = null;
            d.querySelector(btnPlay).disabled = false;
        }
    });
}

export function alarm(sound, btnPlay, btnStop) {
    let alarmTempo;
    const $alarm = document.createElement("audio"); //Necesario para poder acceder al sonido y reproducirlo
    $alarm.src = sound;

    d.addEventListener("click", e => {
        if(e.target.matches(btnPlay)){
            alarmTempo = setTimeout(() => {
                $alarm.play();
            },1000);
            //d.querySelector("#reloj").innerHTML = `<audio id= "aud" src=${sound} controls> </audio>`; 
            e.target.disabled = true; //desactiva el boton de alarma mientras esta activo 
        }
        if(e.target.matches(btnStop)){
            clearTimeout(alarmTempo);
            $alarm.pause();
            d.querySelector(btnPlay).disabled = false;
        }
    })

}