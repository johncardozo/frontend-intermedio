import Opcion from "./Opcion";

const Header = () => {
  return (
    <header>
      <h1>Frontend Intermedio</h1>
      <Opcion texto="Home" link="/" />
      <Opcion texto="Products" link="/products" />
      <Opcion texto="Services" link="/services" />
      <Opcion />
    </header>
  );
};

export default Header;
