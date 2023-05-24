import { useContext } from "react";
import LocalizationContext from "../context/LocalizationContext";

const Header = () => {
  // Accede al context
  const { language } = useContext(LocalizationContext);

  return (
    <header>
      <h2>{language.header}</h2>
    </header>
  );
};

export default Header;
