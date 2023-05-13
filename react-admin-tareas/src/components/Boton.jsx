/* eslint-disable react/prop-types */

const Boton = ({ texto, color }) => {
  const estilo = {
    backgroundColor: color,
  };
  return <button style={estilo}>{texto}</button>;
};

export default Boton;
