import PropTypes from "prop-types";
import Tarea from "./Tarea";

const Tareas = ({ tareas, onDelete, onToggle }) => {
  return (
    <>
      {!tareas.length && "No hay tareas"}
      <ul className="tareas">
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            tarea={tarea}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))}
      </ul>
    </>
  );
};

// Definición de propiedades
Tareas.propTypes = {
  tareas: PropTypes.array,
  onDelete: PropTypes.func,
  onToggle: PropTypes.func,
};

export default Tareas;
