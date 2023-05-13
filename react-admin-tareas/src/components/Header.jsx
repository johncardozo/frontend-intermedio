import Opcion from "./Opcion/Opcion";

const Header = () => {
  return (
    <header>
      <h1>Administrador de Tareas</h1>
      <Opcion texto="Home" link="/" />
      <Opcion texto="Products" link="/products" />
      <Opcion texto="Services" link="/services" />
      <Opcion />
    </header>
  );
};

export default Header;
