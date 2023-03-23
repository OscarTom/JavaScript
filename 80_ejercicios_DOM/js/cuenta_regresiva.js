
const d = document;

export default function countDown(id,limitDate,finalMessage) {
    const $countDown = d.getElementById(id);
    const countDownDate = new Date(limitDate).getTime(); //convertido a milisegundos

    let countDownTempo = setInterval(() => {
        let now = new Date().getTime(),
            limitTime = countDownDate - now,
            days = Math.floor(limitTime/(1000*60*60*24)), //de milisegundos a dias
            hours = Math.floor((limitTime % (1000*60*60*24))/(1000*60*60)),
            minutes = Math.floor((limitTime % (1000*60*60))/(1000*60)),
            seconds = Math.floor((limitTime % (1000*60))/(1000)); 

        $countDown.innerHTML = `<h3>Faltan: ${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos</h3>`

        if(limitTime < 0) {
            clearInterval(countDownTempo);
            $countDown.innerHTML = `<h3>${finalMessage}</h3>`
        }
        
        //console.log(countDownDate, now, limitTime);
    },1000);

}