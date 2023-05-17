import PropTypes from "prop-types";
import { FaTrashAlt } from "react-icons/fa";

const Tarea = ({ tarea, onDelete }) => {
  return (
    <li>
      {tarea.titulo}
      <FaTrashAlt className="icono" onClick={() => onDelete(tarea.id)} />
    </li>
  );
};

Tarea.propTypes = {
  tarea: PropTypes.object,
  onDelete: PropTypes.func,
};

export default Tarea;
