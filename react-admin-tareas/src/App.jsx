// Librerías de React
import { useEffect, useState } from "react";

// Componentes propios
import Header from "./components/Header";
import Tareas from "./components/Tareas";
import Error from "./components/Error";
import AgregarTareaForm from "./components/AgregarTareaForm";

import {
  obtenerTareasAPI,
  agregarTareaAPI,
  eliminarTareaAPI,
  toggleTerminadaAPI,
} from "./api/tareasApi";

// Importar SCSS
import "./styles/style.scss";

const App = () => {
  // Estado del componente: inmutable
  const [tareas, setTareas] = useState([]);
  const [error, setError] = useState(false);

  // Hook que ejecuta código al crear componente
  useEffect(() => {
    const obtenerTareas = async () => {
      // Obtiene las tareas del backend
      const tareas = await obtenerTareasAPI();
      if (tareas) {
        setTareas(tareas);
        setError(false);
      } else {
        setTareas([]);
        setError(true);
      }
    };

    // Obtiene las tareas del backend
    obtenerTareas();
  }, []);

  const agregarTarea = async (tarea) => {
    // Agrega la tarea en Backend
    const nuevaTarea = await agregarTareaAPI(tarea);
    // Agrega la tarea en el State
    setTareas([...tareas, nuevaTarea]);
  };

/*   const toggleTerminada = (id) => {
    // TODO: actualizar la tarea en el Backend

    // tareasActuales representa el estado actual
    setTareas((tareasActuales) => {
      // Recorre las tareas actuales para retornar cada tarea
      return tareasActuales.map((tarea) =>
        // Verifica si la tarea tiene el mismo id
        tarea.id === id ? { ...tarea, terminada: !tarea.terminada } : tarea
      );
    });
  }; */

  const eliminarTarea = async (id) => {
    // Elimina la tarea del backend
    const respuesta = await eliminarTareaAPI(id);
    // Verifica que la eliminación de la tarea haya sido exitosa
    if (respuesta) {
      // tareasActuales representa el estado actual
      setTareas((tareasActuales) => {
        // Filtra las tareas sin la tarea con el id recibido
        return tareasActuales.filter((tarea) => tarea.id !== id);
      });
    }
  };
  const toggleTerminada = async (id) => {
    // Obtiene la tarea actual
    const tareaActual = tareas.find((tarea) => tarea.id === id);
    if (tareaActual) {
      // Invierte el valor de la propiedad 'terminada'
      const tareaModificada = { ...tareaActual, terminada: !tareaActual.terminada };
      // Actualiza la tarea en el backend
      const tareaActualizada = await toggleTerminadaAPI(tareaModificada);
      if (tareaActualizada) {
        // Actualiza la tarea en el estado
        setTareas((tareasActuales) =>
          tareasActuales.map((tarea) =>
            tarea.id === tareaActualizada.id ? tareaActualizada : tarea
          )
        );
      }
    }
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
};

export default App;
