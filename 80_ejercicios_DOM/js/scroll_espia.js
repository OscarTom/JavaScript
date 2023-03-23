

const d = document;

export default function scrollSpy() {
    const $sections = d.querySelectorAll("section[data-scroll-spy]");

    const callback01 = (entries) => {
        //console.log("entries", entries); //muestra las 15 entradas

        entries.forEach(entry => {
            //console.log("entry", entry); //muestra cada entrada por separado

            const id = entry.target.getAttribute("id");
            //console.log(id);
            if(entry.isIntersecting) {
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active");
            }else {
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active");
            }
        })
    };


    const observer = new IntersectionObserver(callback01, {
        //root: 
        //rootMargin: "-250px",
        threshold: [0.5,0.75]  //hace que se ilumine la seccion cuando se muestra del 50% al 75% de su altura
    });
    //console.log("observador", observer)

    $sections.forEach(el => observer.observe(el));
}