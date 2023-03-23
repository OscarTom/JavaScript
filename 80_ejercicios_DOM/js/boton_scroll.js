
const d = document,
    w = window;

export default function scrollTopButton(btn) {

    const $scrollBtn = d.querySelector(btn);
    w.addEventListener("scroll", e => {

        let scrollTop = w.pageYOffset;
        //detectar el desplazamiento del scroll
        //console.log(w.pageYOffset);

        if(scrollTop > 200) {
            $scrollBtn.classList.remove("oculto");
        } else {
            $scrollBtn.classList.add("oculto");
        }
    });

    d.addEventListener("click", e => {
        if(e.target.matches(btn)) {
            w.scrollTo({
                behavior: "smooth",
                top: 0
            });
        }
    });

}