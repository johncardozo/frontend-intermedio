// Librerías de React
import { useState } from "react";
// Componentes propios
import Header from "./components/Header";
import Tareas from "./components/Tareas";
// Importar SCSS
import "./styles/style.scss";

function App() {
  // Estado del componente: inmutable
  const [tareas, setTareas] = useState([
    { id: 1, titulo: "Running", terminada: true },
    { id: 2, titulo: "Programming", terminada: true },
    { id: 3, titulo: "Reading", terminada: false },
  ]);

  const eliminarTarea = (id) => {
    // tareasActuales representa el estado actual
    setTareas((tareasActuales) => {
      // Filtra las tareas sin la tarea con el id recibido
      return tareasActuales.filter((tarea) => tarea.id !== id);
    });
  };

  return (
    <>
      <Header titulo="Administrador de Tareas" />
      <Tareas tareas={tareas} onDelete={eliminarTarea} />
    </>
  );
}

export default App;
