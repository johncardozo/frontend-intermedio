import "./Opcion.css";

/* eslint-disable react/prop-types */

const Opcion = ({ texto, link }) => {
  return (
    <a className="opcion" href={link}>
      {texto}
    </a>
  );
};

Opcion.defaultProps = {
  texto: "ninguna",
  link: "/",
};

export default Opcion;
