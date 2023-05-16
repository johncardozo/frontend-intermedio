import { useState } from "react";

const Tareas = () => {
  // Estado del componente-> datos del componente
  const [listaTareas, setListaTareas] = useState([
    { id: 1, titulo: "Running" },
    { id: 2, titulo: "Programming" },
    { id: 3, titulo: "Reading" },
  ]);

  // Hook State
  //  const [edad, setEdad] = useState(20);

  // Estado es inmutable
  //edad = 3;

  // Modifica el estado a através de la función set
  //setEdad(3);

  return (
    <>
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
