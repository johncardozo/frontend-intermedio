import PropTypes from "prop-types";

const Header = ({ titulo }) => {
  return (
    <header>
      <h1>{titulo}</h1>
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
