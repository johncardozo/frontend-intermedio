import PropTypes from "prop-types";
import { FaTrashAlt } from "react-icons/fa";

const Tarea = ({ tarea }) => {
  return (
    <li className="tarea">
      {tarea.titulo}
      <FaTrashAlt style={{ color: "#ff0000", fontSize: "0.8rem" }} />
    </li>
  );
};

Tarea.propTypes = {
  tarea: PropTypes.object,
};

export default Tarea;
