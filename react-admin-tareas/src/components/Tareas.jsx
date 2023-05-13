const Tareas = () => {
  // Datos del componente
  const listaTareas = [
    { id: 1, titulo: "Running" },
    { id: 2, titulo: "Programming" },
    { id: 3, titulo: "Reading" },
  ];

  return (
    <>
      {listaTareas.length > 0 ? (
        <h2>Hay {listaTareas.length} tareas</h2>
      ) : (
        <h2>No hay tareas</h2>
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
