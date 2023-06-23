import PropTypes from "prop-types";
import "./Boton.css";

/**
 * Este es el componente <strong>Botón  principal</strong> de la aplicación.<br>
 * Se debe utilizar teniendo en cuenta los <i>parámetros</i> descritos en la parte inferior.
 */
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
  /** Texto a mostrar en el botón */
  label: PropTypes.string,
  /** Este es un botón primario? */
  primary: PropTypes.bool,
  /** Qué tan grande es el botón? */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /** Handler opcional para el evento onClick */
  onClick: PropTypes.func,
};

Boton.defaultProps = {
  label: "Botón",
  primary: true,
  size: "medium",
  onClick: undefined,
};
