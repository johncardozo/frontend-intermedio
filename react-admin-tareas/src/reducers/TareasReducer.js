const tareasReducer = (tareas, action) => {
  // Verifica el tipo de acción a ejecutar
  switch (action.type) {
    case "CARGAR":
      return action.tareas ? [...action.tareas] : [];
    case "AGREGAR":
      return [...tareas, action.nuevaTarea];
    case "MODIFICAR":
      return tareas.map((tarea) =>
        // Verifica si la tarea tiene el mismo id
        tarea.id === action.id
          ? { ...tarea, terminada: !tarea.terminada }
          : tarea
      );
    case "ELIMINAR":
      return tareas.filter((tarea) => tarea.id !== action.id);
    default:
      throw Error(`Acción no soportada: ${action.type}`);
  }
};

export default tareasReducer;
