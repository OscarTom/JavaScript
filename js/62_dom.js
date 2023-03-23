
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));

//Estos tres han sido reemplazados por getElementById y querySelector (solo trae el primero que encuentre), si queremos traer todos
//tenemos querySelectorAll
console.log(document.getElementById("menu"));
console.log(document.querySelector("#menu"));
console.log(document.getElementById("a"));
console.log(document.querySelector("a"));
console.log(document.getElementById("a"));
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]); //muestra el segundo

//podemos ejecutar metodos
document.querySelectorAll("a").forEach((el) => console.log(el));
console.clear();

