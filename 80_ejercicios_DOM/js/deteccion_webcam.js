

const d = document,
    n = navigator;

export default function webCam(id) {
    const $video = d.getElementById(id);

    //console.log(n.mediaDevices.getUserMedia); //objeto nativo

    if(n.mediaDevices.getDisplayMedia) {  //si existe devuelve verdadero
        //tiene vario parametros video, audio
        //es una promesa y por eso podemos usar then
        n.mediaDevices
            .getUserMedia({video:true, audio:false})
            .then((strem) => {
                //console.log(strem);
                $video.srcObject = strem; //enviamos lo que recibimos a el src del objeto $video que es el <video> del html
                $video.play();
            })
            .catch((err) => {
                $video.insertAdjacentHTML("beforebegin", `<p><mark>Sucedio el siguiente error: ${err}</p></mark>`)
                //console.log(`Sucedio el siguiente error: ${err}`);

            }) 
    }

}