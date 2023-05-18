import PropTypes from "prop-types";
import { FaTrashAlt } from "react-icons/fa";

const Tarea = ({ tarea, onDelete, onToggle }) => {
  return (
    <li
      className={tarea.terminada && "terminada"}
      onDoubleClick={() => onToggle(tarea.id)}
    >
      {tarea.titulo}
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
