import PropTypes from "prop-types";

const Tarea = ({ tarea }) => {
  return <li className="tarea">{tarea.titulo}</li>;
};

Tarea.propTypes = {
  tarea: PropTypes.object,
};

export default Tarea;
