import { crearLi, mostrarCantidadTareas } from "./libreria.js";

document.addEventListener("DOMContentLoaded", () => {
  // Obtiene una referencia a los elementos
  const inputTarea = document.getElementById("inputTarea");
  const formulario = document.getElementById("formulario");
  const lista = document.getElementById("lista");

  const agregarTarea = (evento) => {
    // Evita enviar la información al servidor
    evento.preventDefault();

    // Obtiene el texto digitado por el usuario
    const tarea = inputTarea.value;

    // Verifica que el usuario digite un texto
    if (tarea === "") {
      inputTarea.classList.add("error");
      return;
    }

    // Crea el <li>
    const li = crearLi(tarea);

    // Agrega el <li> al <ul>
    lista.appendChild(li);

    // Actualiza la cantidad de tareas
    mostrarCantidadTareas();

    // Limpia el input de la tarea
    inputTarea.value = "";
    inputTarea.classList.remove("error");
  };
  // Agrega el listener cuando se
  // intente enviar información desde el formulario
  formulario.addEventListener("submit", agregarTarea);

  // Muestra la cantidad de tareas
  mostrarCantidadTareas();
});
