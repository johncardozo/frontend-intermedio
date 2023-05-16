import PropTypes from "prop-types";
import Boton from "./Boton";

const Header = ({ titulo }) => {
  return (
    <header>
      <h2>{titulo}</h2>
      <Boton />
    </header>
  );
};

Header.defaultProps = {
  titulo: "Task Manager",
};

Header.propTypes = {
  titulo: PropTypes.string,
};

export default Header;
