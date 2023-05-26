import PropTypes from "prop-types";
import { FaTrashAlt } from "react-icons/fa";

const Tarea = ({ tarea, onDelete, onToggle }) => {
  return (
    <li
      className={tarea.terminada ? "terminada" : ""}
      onDoubleClick={() => onToggle(tarea.id)}
    >
      <div className="texto">
        <h3>{tarea.titulo}</h3>
        <p>{tarea.descripcion}</p>
      </div>
      <FaTrashAlt className="icono" onClick={() => onDelete(tarea.id)} />
    </li>
  );
};

Tarea.propTypes = {
  tarea: PropTypes.object,
  onDelete: PropTypes.func,
  onToggle: PropTypes.func,
};

export default Tarea;
