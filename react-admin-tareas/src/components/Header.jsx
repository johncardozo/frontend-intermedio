import PropTypes from "prop-types";

const Header = ({ titulo }) => {
  return (
    <header>
      <h2>{titulo}</h2>
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
