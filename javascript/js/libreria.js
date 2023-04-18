const handlerCheckboxClick = (evento) => {
  // Agrega/elimina la clase del texto de la tarea
  evento.target.nextElementSibling.classList.toggle("terminada");
};

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
  // Agrega los elementos al <li>
  li.append(checkbox, spanTexto, spanBorrar);
  // Retorna el <li>
  return li;
};

export { crearLi };
