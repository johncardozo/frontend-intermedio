import { useContext } from "react";

// Acceso al contexto
import LocalizationContext from "../context/LocalizationContext";
import local from "../context/ContextData";

const SelectLanguage = () => {
  // Obtiene la referencia al contexto
  const { language, setLanguage } = useContext(LocalizationContext);

  const handleChangeLanguage = (lang) => {
    setLanguage(local[lang]);
  };

  return (
    <>
      <p>{language.idioma}</p>
      <div className="languages">
        <span onClick={() => handleChangeLanguage("es")}>🇪🇸</span>
        <span onClick={() => handleChangeLanguage("en")}>🇬🇧</span>
        <span onClick={() => handleChangeLanguage("fr")}>🇫🇷</span>
      </div>
    </>
  );
};

export default SelectLanguage;
