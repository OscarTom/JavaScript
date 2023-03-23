
const d = document,
    w = window,
    n = navigator;

export default function networkStatus() {
    // console.log(n.onLine); //devuelve true si esta conectado o false si no lo esta
    const isOnline = () => {
        const $div = d.createElement("div");

        if(n.onLine) {
            $div.textContent = "Conexion establecida";
            $div.classList.add("online");
            $div.classList.remove("offline");
        } else {
            $div.textContent = "Conexion perdida";
            $div.classList.add("offline");
            $div.classList.remove("online");
        }

        d.body.insertAdjacentElement("afterbegin", $div);
        setTimeout(() => d.body.removeChild($div),2000); //mostramos el mensaje dos segundos y lo retiramos
    }

    w.addEventListener("online", (e) => isOnline());
    w.addEventListener("offline", (e) => isOnline());
}