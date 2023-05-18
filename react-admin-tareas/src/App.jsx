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
    { id: 1, titulo: "Running", terminada: false },
    { id: 2, titulo: "Programming", terminada: true },
    { id: 3, titulo: "Reading", terminada: false },
  ]);

  const toggleTerminada = (id) => {
    // tareasActuales representa el estado actual
    setTareas((tareasActuales) => {
      // Recorre las tareas actuales para retornar cada tarea
      return tareasActuales.map((tarea) =>
        // Verifica si la tarea tiene el mismo id
        tarea.id === id ? { ...tarea, terminada: !tarea.terminada } : tarea
      );
    });
  };

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
      <Tareas
        tareas={tareas}
        onDelete={eliminarTarea}
        onToggle={toggleTerminada}
      />
    </>
  );
}

export default App;
