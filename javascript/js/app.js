import { crearLi } from "./libreria.js";

// Obtiene una referencia a los elementos
const inputTarea = document.getElementById("inputTarea");
const formulario = document.getElementById("formulario");
const lista = document.getElementById("lista");

const agregarTarea = (evento) => {
  // Evita enviar la información al servidor
  evento.preventDefault();

  // Obtiene el texto digitado por el usuario
  const tarea = inputTarea.value;

  // Crea el <li>
  const li = crearLi(tarea);

  // Agrega el <li> al <ul>
  lista.appendChild(li);

  // Limpia el input de la tarea
  inputTarea.value = "";
};
// Agrega el listener cuando se
// intente enviar información desde el formulario
formulario.addEventListener("submit", agregarTarea);
