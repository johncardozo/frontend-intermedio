// Librerías de React
import { useEffect, useState } from "react";

// Componentes propios
import Header from "./components/Header";
import Tareas from "./components/Tareas";
import Error from "./components/Error";
import AgregarTareaForm from "./components/AgregarTareaForm";

import { obtenerTareasAPI } from "./api/tareasApi";

// Importar SCSS
import "./styles/style.scss";

function App() {
  // Estado del componente: inmutable
  const [tareas, setTareas] = useState([]);
  const [error, setError] = useState(false);

  // Hook que ejecuta código al crear componente
  useEffect(() => {
    const obtenerTareas = async () => {
      const data = await obtenerTareasAPI();
      if (data) {
        setTareas(data);
      } else {
        setTareas([]);
        setError(true);
      }
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
      {error && <Error mensaje="Hubo un error obteniendo las tareas" />}
      <Tareas
        tareas={tareas}
        onDelete={eliminarTarea}
        onToggle={toggleTerminada}
      />
    </>
  );
}

export default App;
