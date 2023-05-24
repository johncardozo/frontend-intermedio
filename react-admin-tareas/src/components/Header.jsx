import { useContext } from "react";
import LocalizationContext from "../context/LocalizationContext";

const Header = () => {
  // Accede al context
  const local = useContext(LocalizationContext);

  return (
    <header>
      <h2>{local.header}</h2>
    </header>
  );
};

export default Header;
