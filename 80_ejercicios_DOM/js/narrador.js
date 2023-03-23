const d = document,
    w = window;

export default function speechReader() {
    //Capturamos los elementos del Dom
    const $speechSelect = d.getElementById("speech-select"),
        $speechTextArea = d.getElementById("speech-text"),
        $speechBtn = d.getElementById("speech-btn"),
        speechMessage = new SpeechSynthesisUtterance();

    //console.log(speechMessage);

    let voices = []; //donde vamos a guardar las voces del navegador

    d.addEventListener("DOMContentLoaded", (e) => {
        //console.log(w.speechSynthesis.getVoices()); //Voces incluidas en el navegador, solo se ve si se ejecuta en el navegador
        w.speechSynthesis.addEventListener("voiceschanged", (e) => {
            //console.log(e);
            voices = w.speechSynthesis.getVoices(); //Metemos las voces en la variable
            //console.log(voices);

            /*Por cada elemento de voices, metemos las propiedades y lo añadimos como hijo a speechSelect*/
            voices.forEach(voice => {
                const $option = d.createElement("option");

                $option.value = voice.name;
                $option.textContent = `${voice.name} -- ${voice.lang}`;

                $speechSelect.appendChild($option);
            })
        });
    });

    //Programamos los cambios en el select
    d.addEventListener("change", (e) => {
        if(e.target === $speechSelect) {
            speechMessage.voice = voices.find(
                (voice) => voice.name === e.target.value
                );
        }
        //console.log(speechMessage);
    });

    d.addEventListener("click", (e) => {
        if(e.target === $speechBtn) {
            speechMessage.text = $speechTextArea.value;
            w.speechSynthesis.speak(speechMessage);
        }
    });

    
    
}