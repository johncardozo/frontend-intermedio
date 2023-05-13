const Tareas = () => {
  // Datos del componente
  const listaTareas = [
    { id: 1, titulo: "Running" },
    { id: 2, titulo: "Programming" },
    { id: 3, titulo: "Reading" },
  ];

  // Objeto JSON para representar un style
  const estiloSpan = {
    color: "lime",
    fontStyle: "italic",
  };

  return (
    <>
      {/* Objetos con Estilo Inline */}
      <h2 style={{ color: "red", backgroundColor: "pink" }}>Lista de Tareas</h2>
      <span style={estiloSpan}>List of tasks</span>

      {listaTareas.length > 0 ? (
        <h3>Hay {listaTareas.length} tareas</h3>
      ) : (
        <h3>No hay tareas</h3>
      )}
      <ul>
        {listaTareas.map((tarea) => (
          <li className="tarea" key={tarea.id}>
            {tarea.titulo}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Tareas;
