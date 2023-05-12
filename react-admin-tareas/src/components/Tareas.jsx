const Tareas = () => {
  // Datos del componente
  const listaTareas = [
    { id: 1, titulo: "Running" },
    { id: 2, titulo: "Programming" },
    { id: 3, titulo: "Reading" },
    { id: 4, titulo: "Swimming" },
  ];

  return (
    <ul>
      {listaTareas.map((tarea) => (
        <li key={tarea.id}>{tarea.titulo}</li>
      ))}
    </ul>
  );
};

export default Tareas;
