// Obtiene un elemento dado su id
const titulo = document.getElementById("titulo");
console.log(titulo);

// Obtiene elementos dado el tag
const liList = document.getElementsByTagName("li");
console.log(liList);

// Obtiene elementos dada una clase CSS
const msgList = document.getElementsByClassName("mensaje");
console.log(msgList);

// Obtiene varios elementos dado un selector
// Retorna una lista vacia si no encuentra elementos
const hijos = document.querySelectorAll("ul li");
console.log(hijos);

// Obtiene un elemento dado un selector
// Retorna null si no encuentra el elemento
const hijo = document.querySelector("ul li");
console.log(hijo);
