import PropTypes from "prop-types";

const Error = ({ mensaje }) => {
  return <h4 className="error">{mensaje}</h4>;
};

Error.propTypes = {
  mensaje: PropTypes.string,
};

export default Error;
