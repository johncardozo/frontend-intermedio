// Librerías externas
import axios from "axios";

const obtenerTareasAPI = async () => {
  try {
    const respuesta = await axios.get("http://localhost:3000/tareas/");
    if (respuesta.status === 200) {
      return respuesta.data;
    }
  } catch (error) {
    console.error("Hubo error al obtener las tareas");
    return null;
  }
};

export { obtenerTareasAPI };
