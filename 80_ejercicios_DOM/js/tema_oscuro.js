
const d = document;
const ls = localStorage;

//con classDark seleccionaremos todos aquellos elementos que queremos que cambien
export default function darkTheme(btn, classDark) {
    const $themeBtn = d.querySelector(btn),
        $selectors = d.querySelectorAll("[data-dark]"); //seleccionamos los elementos que tienen como atributo "data-dark" para cambiarlos
    
    //console.log($selectors);

    let moon = "🌙",
        sun = "☀️";

    const lightMode = () => {
        $selectors.forEach(el => el.classList.remove(classDark));
        $themeBtn.textContent = moon;
        ls.setItem("theme", "light");
    }

    const darkMode = () => {
        //hay que utilizar forEach porque selectors en un arreglo de los elementos que contienen 'data-dark' como propiedad
        $selectors.forEach(el => el.classList.add(classDark));
        $themeBtn.textContent = sun;
        ls.setItem("theme", "dark");
    }

    d.addEventListener("click", e => {
        
        if(e.target.matches(btn)) {
            //console.log($themeBtn.textContent); //leemos el contenido actual del boton
            if($themeBtn.textContent === moon) {
                darkMode();
            }else {
                lightMode();
            }

        }
    });

    
    d.addEventListener("DOMContentLoaded", e => {
        //alert("Hola desde DOMContentLoaded de 'tema_oscuro.js'");
        if(ls.getItem("theme") === null) ls.setItem("theme", "light"); //Si no existe, crea clave:theme, valor:light
        if(ls.getItem("theme") === "light") lightMode(); //Mira el localStorage y como esta theme=light, elecuta lightMode()
        if(ls.getItem("theme") === "dark") darkMode(); //Mira el localStorage y como esta theme=dark, elecuta darkMode()
    })
}