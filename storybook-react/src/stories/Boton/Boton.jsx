import PropTypes from "prop-types";
import "./Boton.css";

export const Boton = ({ label, primary, size, onClick }) => {
  const tipo = primary ? "btn-primary" : "btn-secondary";
  return (
    <button
      type="button"
      className={`btn ${tipo} btn-${size}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

Boton.propTypes = {
  label: PropTypes.string,
  primary: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  onClick: PropTypes.func,
};

Boton.defaultProps = {
  label: "Botón",
  primary: true,
  size: "medium",
  onClick: undefined,
};
