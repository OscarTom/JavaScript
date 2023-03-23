
const d = document,
    w = window;

export default function smartVideo(){
    const $videos = d.querySelectorAll("video[data-smart-video]"); // 1 Guardamos todos los videos que contienen la etiqueta "data-smart-video"
    //console.log($videos);

    const callback01 = (entries) => { // 4 Definimos la funcion del observer
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                entry.target.play();
            } else {
                entry.target.pause();
            }

            //Opcional--> paramos la reproduccion cuando cambiamos de pestaña en el navegador
            w.addEventListener("visibilitychange", (e) => 
                d.visibilityState === "visible"
                    ? entry.target.play()
                    : entry.target.pause()
                );
            ////////////////////////////////////////////////////////////////////
        });
    };

    const observer = new IntersectionObserver(callback01, {threshold: 0.5}); // 3 Creamos el observer que esta compuesto por una funcion y sus opciones

    $videos.forEach((el) => observer.observe(el)); // 2 por cada elemento que hay en $videos ejecutamos el observer 


}