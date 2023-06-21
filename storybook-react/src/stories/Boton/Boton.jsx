import PropTypes from "prop-types";
import "./Boton.css";

export const Boton = ({ label, primary }) => {
  const tipo = primary ? "btn-primary" : "btn-secondary";
  return (
    <button type="button" className={`btn ${tipo}`}>
      {label}
    </button>
  );
};

Boton.propTypes = {
  label: PropTypes.string,
  primary: PropTypes.bool,
};

Boton.defaultProps = {
  label: "Botón",
  primary: true,
};
