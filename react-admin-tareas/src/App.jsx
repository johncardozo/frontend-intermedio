// Librerías de React
import { useEffect, useState, useReducer } from "react";

// Componentes propios
import Header from "./components/Header";
import Tareas from "./components/Tareas";
import Error from "./components/Error";
import AgregarTareaForm from "./components/AgregarTareaForm";
import SelectLanguage from "./components/SelectLanguage";

// Reducers
import tareasReducer from "./reducers/Tareasreducer";

// Contextos
import LocalizationContext from "./context/LocalizationContext";
import local from "./context/ContextData";

// Funciones de API
import {
  obtenerTareasAPI,
  agregarTareaAPI,
  eliminarTareaAPI,
} from "./api/tareasApi";

// Importar SCSS
import "./styles/style.scss";

const App = () => {
  // Estado del componente
  const [tareas, dispatch] = useReducer(tareasReducer, []);
  const [error, setError] = useState(false);
  const [language, setLanguage] = useState(local.es);

  // Hook que ejecuta código al crear componente
  useEffect(() => {
    const obtenerTareas = async () => {
      // Obtiene las tareas del backend
      const tareas = await obtenerTareasAPI();
      if (tareas) {
        // Modifica el state
        dispatch({ type: "CARGAR", tareas });
        setError(false);
      } else {
        // Modifica el state
        dispatch({ type: "CARGAR" });
        setError(true);
      }
    };

    // Obtiene las tareas del backend
    obtenerTareas();
  }, []);

  const agregarTarea = async (tarea) => {
    // Agrega la tarea en Backend
    const nuevaTarea = await agregarTareaAPI(tarea);
    // Agrega la tarea en el state
    dispatch({ type: "AGREGAR", nuevaTarea });
  };

  const toggleTerminada = (id) => {
    // TODO: actualizar la tarea en el Backend

    // Modifica el state
    dispatch({ type: "MODIFICAR", id });
  };

  const eliminarTarea = async (id) => {
    // Elimina la tarea del backend
    const respuesta = await eliminarTareaAPI(id);
    // Verifica que la eliminación de la tarea haya sido exitosa
    if (respuesta) {
      // Modifica el state
      dispatch({ type: "ELIMINAR", id });
    }
  };

  return (
    <>
      <LocalizationContext.Provider value={{ language, setLanguage }}>
        <SelectLanguage />
        <Header />
        <AgregarTareaForm onAddTask={agregarTarea} />
        {error && <Error mensaje="Hubo un error obteniendo las tareas" />}
        <Tareas
          tareas={tareas}
          onDelete={eliminarTarea}
          onToggle={toggleTerminada}
        />
      </LocalizationContext.Provider>
    </>
  );
};

export default App;
