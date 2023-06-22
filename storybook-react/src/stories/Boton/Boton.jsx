import PropTypes from "prop-types";
import "./Boton.css";

export const Boton = ({ label, primary, size }) => {
  const tipo = primary ? "btn-primary" : "btn-secondary";
  return (
    <button type="button" className={`btn ${tipo} btn-${size}`}>
      {label}
    </button>
  );
};

Boton.propTypes = {
  label: PropTypes.string,
  primary: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

Boton.defaultProps = {
  label: "Botón",
  primary: true,
  size: "medium",
};
