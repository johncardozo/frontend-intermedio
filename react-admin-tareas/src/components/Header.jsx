import PropTypes from "prop-types";
import Boton from "./Boton";

const Header = ({ titulo }) => {
  const clickHandler = () => {
    console.log("Click en el componente padre");
  };
  return (
    <header>
      <h2>{titulo}</h2>
      <Boton onClick={clickHandler} />
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
