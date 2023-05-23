// Librerías externas
import axios from "axios";

/**
 * Obtiene las tareas del backend
 * @returns Lista de tareas
 */
const obtenerTareasAPI = async () => {
  try {
    const respuesta = await axios.get(import.meta.env.VITE_BACKEND_URL);
    if (respuesta.status === 200) {
      return respuesta.data;
    }
  } catch (error) {
    console.error("Hubo error al obtener las tareas");
    return null;
  }
};

/**
 * Crea una tarea en el backend
 * @param {*} tarea Tarea a crear
 * @returns Tarea creada
 */
const agregarTareaAPI = async (tarea) => {
  try {
    const respuesta = await axios.post(import.meta.env.VITE_BACKEND_URL, tarea);
    if (respuesta.status === 201) {
      return respuesta.data;
    }
  } catch (error) {
    console.error("Hubo error al crear la tarea");
    return null;
  }
};

/**
 * Elimina una tarea del backend
 * @param {*} id Identificador de la tarea
 * @returns Un objeto vacío si la eliminación fue exitosa y null de lo contrario
 */
const eliminarTareaAPI = async (id) => {
  try {
    const respuesta = await axios.delete(
      `${import.meta.env.VITE_BACKEND_URL}${id}`
    );
    if (respuesta.status === 200) {
      return respuesta.data;
    }
    return null;
  } catch (error) {
    console.error("Hubo un error al eliminar la tarea");
    return null;
  }
};

/**
 * modifica una tarea del backend
 * @param {*} tarea.id  tarea  con id a modificar
 * @returns cambio de estado exitoso
 */
const toggleTerminadaAPI = async (tarea) => {
  try {
    const respuesta = await axios.patch(`${import.meta.env.VITE_BACKEND_URL}${tarea.id}`,tarea);    
      if (respuesta.status === 200) {
      return respuesta.data;
    }
  } catch (error) {
    console.error("Hubo error al modificar la tarea");
    return null;
  }
};

export { obtenerTareasAPI, agregarTareaAPI, eliminarTareaAPI,toggleTerminadaAPI };
