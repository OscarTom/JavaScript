export function SearchForm() {
  const d = document,
    $form = d.createElement("form"),
    $input = d.createElement("input");

  $form.classList.add("search-form");
  $input.name = "search";
  $input.type = "search";
  $input.placeholder = "Buscar...";
  $input.autocomplete = "off";
  $form.appendChild($input);

  // Cuando se realice una busqueda mantenemos el texto en la casilla de busqueda
  if (location.hash.includes("#/search")) {
    $input.value = localStorage.getItem("wpSearch");
  }

  //Cuando se presione la X para borrar la busqueda, borramos la variable del localStorage
  d.addEventListener("search", (e) => {
    if (!e.target.matches("input[type='search']")) return false;
    if (!e.target.value) localStorage.removeItem("wpSearch");
  });

  //Evento submit
  d.addEventListener("submit", (e) => {
    if (!e.target.matches(".search-form")) return false;
    e.preventDefault();
    //Almacenamos en localStorage lo que el usuario tenga en el cuadro de buscar
    localStorage.setItem("wpSearch", e.target.search.value);
    //Cambiamos la url con los datos obtenidos del usuario
    location.hash = `#/search?search=${e.target.search.value}`;
  });

  return $form;
}
