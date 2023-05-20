// Librerías de React
import { useEffect, useState } from "react";

// Componentes propios
import Header from "./components/Header";
import Tareas from "./components/Tareas";
import AgregarTareaForm from "./components/AgregarTareaForm";

import { obtenerTareasAPI } from "./api/tareasApi";

// Importar SCSS
import "./styles/style.scss";

function App() {
  // Estado del componente: inmutable
  const [tareas, setTareas] = useState([]);

  // Hook que ejecuta código al crear componente
  useEffect(() => {
    const obtenerTareas = async () => {
      const data = await obtenerTareasAPI();
      setTareas(data);
    };

    // Obtiene las tareas del backend
    obtenerTareas();
  }, []);

  const agregarTarea = (tarea) => {
    setTareas([...tareas, tarea]);
  };

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
      <AgregarTareaForm onAddTask={agregarTarea} />
      <Tareas
        tareas={tareas}
        onDelete={eliminarTarea}
        onToggle={toggleTerminada}
      />
    </>
  );
}

export default App;
