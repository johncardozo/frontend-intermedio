/* eslint-disable react/prop-types */

const Opcion = ({ texto, link }) => {
  return <a href={link}>{texto}</a>;
};

Opcion.defaultProps = {
  texto: "ninguna",
  link: "/",
};

export default Opcion;
