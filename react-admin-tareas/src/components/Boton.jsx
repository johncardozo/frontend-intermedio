import PropTypes from "prop-types";

const Boton = ({ onClickOnButton }) => {
  return <button onClick={onClickOnButton}>click me</button>;
};

Boton.propTypes = {
  onClickOnButton: PropTypes.func,
};

export default Boton;
