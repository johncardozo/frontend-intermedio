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
    console.error("Hubo error al crear la tareas");
    return null;
  }
};

export { obtenerTareasAPI, agregarTareaAPI };
