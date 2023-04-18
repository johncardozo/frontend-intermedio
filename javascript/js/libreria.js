function mostrarCantidadTareas() {
  const cantidadTareas = document.getElementById("cantidadTareas");
  const lista = document.getElementById("lista");

  // Obtiene la cantidad de hijos de la lista
  const cantidad = lista.children.length;
  // Modifica la cantidad de tareas
  cantidadTareas.textContent = `Tenemos ${cantidad} tareas`;
}

const handlerCheckboxClick = (evento) => {
  // Agrega/elimina la clase del texto de la tarea
  evento.target.nextElementSibling.classList.toggle("terminada");
};

function handlerSpanBorrarClick(evento) {
  // Obtiene el elemento al que se el hizo click
  const spanBorrar = evento.target;
  //Obtiene el elemento <li> padre
  const padre = spanBorrar.parentElement;
  // Elimina el <li> padre
  padre.remove();
  // Actualiza la cantidad de tareas
  mostrarCantidadTareas();
}

const crearLi = (tarea) => {
  // Crea el <li>
  const li = document.createElement("li");
  // Crea el <input:checkbox>
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.addEventListener("click", handlerCheckboxClick);
  // Crea el <span> del texto de la tarea
  const spanTexto = document.createElement("span");
  spanTexto.textContent = tarea;
  // Crea el <span> para eliminar la tarea
  const spanBorrar = document.createElement("span");
  spanBorrar.textContent = "x";
  spanBorrar.addEventListener("click", handlerSpanBorrarClick);
  // Agrega los elementos al <li>
  li.append(checkbox, spanTexto, spanBorrar);
  // Retorna el <li>
  return li;
};

export { crearLi, mostrarCantidadTareas };
