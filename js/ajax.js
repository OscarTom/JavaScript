
/*---------------------------AJAX: Objeto XMLHttpRequest----------------------*/
//Funcion anonima autoejecutable
(() => {
    const xhr = new XMLHttpRequest(),
        $xhr = document.getElementById("xhr"),
        $fragmen = document.createDocumentFragment(); //por si lo que vamos a descargar es muy grande

    //console.log(xhr); //eventos del objeto, ver en consola

    xhr.addEventListener("readystatechange", (e) => { //se lanza en cualquier cambio de estado
        // console.log(xhr); //se ve en la consola los cuatro pasos de readyState para filtrarlo, hacemos lo siguiente
        if(xhr.readyState !== 4) return; //si es distinto de 4, retorno vacio y luego nos envia el codigo 4 final en el siguiente console.log
        if(xhr.status >= 200 && xhr.status < 300) { //solo cuando la respuesta del servidor es correcta, codigos del 200 al 299
            //console.log(xhr);
            //console.log(xhr.responseText); //respuesta recibida
            let json = JSON.parse(xhr.responseText); //convertimos el objeto json a arreglo
            //console.log(json);

            //imprimimos lo que queremos dentro de una li
            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone} -- ${el.address.city}`;
                $fragmen.appendChild($li);
            })
            $xhr.appendChild($fragmen); //Como hijo del elemento con id xhr

        } else {
            /*const $p = document.createElement("p");
            $p.innerHTML = "<mark>Error en el proceso, intentelo mas tarde o revise su conexion</mark>"
            $xhr.appendChild($p); //Como hijo del elemento con id xhr*/
            let message = xhr.statusText || "Ocurrio un error"
            $xhr.innerHTML = `<mark> Error ${xhr.status}: ${message} </mark>`;
            //console.log("Error");
        }
        
    }); 

    xhr.open("GET","https://jsonplaceholder.typicode.com/users"); //Asi se realiza la peticion de datos (metodo,url)
    xhr.send(); //Envio de la peticion
})();

/*Cuatro pasos:
    1.- Instanciar un objeto xhr = new XMLHttpRequest()
    2.- Asignar el o los eventos xhr.addEventListener("readystatechange"
    3.- Abrir la peticion xhr.open("GET",
    4.- Enviar la peticion xhr.send();



*//*---------------------------AJAX: API FETCH----------------------*/

//Funcion anonima autoejecutable
(() => {
    const $fetch = document.getElementById("fetch"),
        $fragmen = document.createDocumentFragment(); //por si lo que vamos a descargar es muy grande

    //fetch trabaja con la url y opciones que se pueden omitir
    //trabaja con promesas, luego utilizaremos then y catch
    fetch("https://jsonplaceholder.typicode.com/users", {})
        .then(respuesta => {
            //console.log(respuesta);
            //pasamos la respuesta en formato json al siguiente then si la propiedad ok es ok y si no lo mandamos al catch
            return respuesta.ok ? respuesta.json() :Promise.reject(respuesta); 
        })
        .then((respuestaJson) => { //presentamos los resultados en el navegador
            //console.log(respuestaJson);
            respuestaJson.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone} -- ${el.address.city}`;
                $fragmen.appendChild($li);
            })
            $fetch.appendChild($fragmen); //Como hijo del elemento con id fetch
        })
        .catch((err) => {
            console.log("Error en algun sitio:", err);
            let message = err.statusText || "Ocurrio un error"
            $fetch.innerHTML = `<mark> Error ${err.status}: ${message} </mark>`;
        })
        .finally(() => {
            //console.log("Esto se ejecutará en exito y error, para eso es un finally y es opcional")
            //opcional
        });

})();


/*---------------------------AJAX: API FETCH + Async-Await----------------------*/

(() =>{
    const $fetchAsync = document.getElementById("fetch-async"),
        $fragmen = document.createDocumentFragment(); //por si lo que vamos a descargar es muy grande

    //Funcion asincrona
    async function getData() {
        try{
            let respuesta = await fetch("https://jsonplaceholder.typicode.com/users", {}), //espera a ejecutar la siguiente linea hasta estar completa la peticion
                respuestaJson = await respuesta.json();
            
            //console.log(respuesta, respuestaJson);
            //validaciones
            //if(!respuesta.ok) throw new Error("Ocurrio un error");
            if(respuesta.ok === false) throw {status: respuesta.status, statusText: respuesta.statusText};
            

            //Presentamos la respuesta en el navegador
            respuestaJson.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone} -- ${el.address.city}`;
                $fragmen.appendChild($li);
            })
            $fetchAsync.appendChild($fragmen); //Como hijo del elemento con id fetchAsync

        } catch (err){
            //console.log("Error en algun sitio:", err);
            let message = err.statusText || "Ocurrio un error"
            $fetchAsync.innerHTML = `<mark> Error ${err.status}: ${message} </mark>`;

        } finally {
            //opcional
        }

    }
    getData();  //Ejecucion de la funcion asincrona

})();


/*---------------------------AJAX: Libreria AXIOS con promesas----------------------*/

(() => {
    const $axios = document.getElementById("axios"),
        $fragmen = document.createDocumentFragment();

    //Axios ya nos da la respuesta en array no en json. Los trasforma directamente
    axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(respuesta => {
            //console.log(respuesta); //ver parametros en consola, los datos vienen en 'data'
            respuesta.data.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone} -- ${el.company.name}`;
                $fragmen.appendChild($li);
            })
            $axios.appendChild($fragmen); //Como hijo del elemento con id fetchAsync
        })
        .catch(err => {
            //console.log("Estamos en el error", err);
            let message = err.response.statusText || "Ocurrio un error"
            $axios.innerHTML = `<mark> Error ${err.response.status}: ${message} </mark>`;
        })
        .finally(() => {
            //opcional
            //console.log(" se ejecutara de todas las maneras")
        });

})();


/*---------------------------AJAX: Libreria AXIOS + Async-await ----------------------*/

(() => {
    const $axiosAsync = document.getElementById("axios-async"),
        $fragmen = document.createDocumentFragment();

    async function getData() {
        try {
            let respuesta = await axios.get("https://jsonplaceholder.typicode.com/users"),  //espera a ejecutar la siguiente linea hasta estar completa la peticion
                respuestaJson = await respuesta.data;

            //console.log(respuesta, respuestaJson);
            respuesta.data.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone} -- ${el.company.name}`;
                $fragmen.appendChild($li);
            })
            $axiosAsync.appendChild($fragmen); //Como hijo del elemento con id fetchAsync

        } catch(err) {
            let message = err.response.statusText || "Ocurrio un error"
            $axiosAsync.innerHTML = `<mark> Error ${err.response.status}: ${message} </mark>`;

        } finally {
            //opcional
        }

    }
    getData();

})();