import PropTypes from "prop-types";
import "./Titulo.css";

const Titulo = ({ texto, nivel, backgroundColor, textColor }) => {
  const estilo = {
    backgroundColor,
    color: textColor,
  };
  if (nivel === 1) return <h1 style={estilo}>{texto}</h1>;
  if (nivel === 2) return <h2 style={estilo}>{texto}</h2>;
  if (nivel === 3) return <h3 style={estilo}>{texto}</h3>;
  if (nivel === 4) return <h4 style={estilo}>{texto}</h4>;
  if (nivel === 5) return <h5 style={estilo}>{texto}</h5>;
  if (nivel === 6) return <h6 style={estilo}>{texto}</h6>;

  return <h1>{texto}</h1>;
};

Titulo.propTypes = {
  texto: PropTypes.string,
  nivel: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
};

Titulo.defaultProps = {
  texto: "título",
  nivel: 1,
  backgroundColor: "#fff",
  textColor: "#000",
};

export default Titulo;
