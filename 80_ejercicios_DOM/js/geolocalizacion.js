

const d = document,
    n = navigator;

export default function getGeolocation(id) {
    const $id = d.getElementById(id),
        options = {
            enableHighAccuracy: true,
            timeout: 5000, //tiempo de espera maximo para lectura
            maximumAge: 0  //no almacenar en cache
        };

    const success = (position) => {
        let coords = position.coords;
        //console.log(position);

        $id.innerHTML = `
        <p> Tu posicion actual es:</p>
        <ul>
            <li>Latitud: <b>${coords.latitude}</b></li>
            <li>Longitud: <b>${coords.longitude}</b></li>
            <li>Precision: <b>${coords.accuracy}</b> metros</li>
        </ul>
        <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},15z" target="_blank" rel="noopener">Ver mapa en google</a>  
        `; //15z es el zoom va de 1z a 20z
    };
    const error = (err) => {
        // console.log(err);
        $id.innerHTML = `<p> Se ha producido un error: ${err.message}</p>`;
    };

    n.geolocation.getCurrentPosition(success, error, options); //nos pide dos funciones (exito y error) y opciones en el tercer parametro
}