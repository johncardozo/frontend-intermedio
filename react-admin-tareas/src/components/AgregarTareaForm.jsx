import { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";

// Importar Custom Hook
import useInput from "../hooks/useInput";

// acceso al context
import LocalizationContext from "../context/LocalizationContext";

const AgregarTareaForm = ({ onAddTask }) => {
  // Estado del formulario con custom hook
  const [titulo, bindTitulo, resetTitulo] = useInput("");
  const [descripcion, bindDescripcion, resetDescripcion] = useInput("");
  // Estado del formulario con useState
  const [longitud, setLongitud] = useState(0);

  // Accede al context
  const { language } = useContext(LocalizationContext);

  // Actualiza la cantidad de caracteres digitados
  useEffect(() => {
    setLongitud(titulo.length);
  }, [titulo]);

  const limpiarFormulario = (event) => {
    // Previene el envío del formulario
    event.preventDefault();
    // Modifica el estado del componente
    resetTitulo("");
    resetDescripcion("");
  };

  const handleSubmit = (event) => {
    // Previene el envío del formulario
    event.preventDefault();

    if (!titulo) {
      alert("Debe digitar el titulo");
      return;
    }

    // Crea el nuevo objeto
    const nuevaTarea = {
      titulo,
      descripcion,
      terminada: false,
    };

    // Envía la nueva tarea al componente padre
    onAddTask(nuevaTarea);

    // Modifica el estado del componente
    resetTitulo("");
    resetDescripcion("");
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <fieldset>
        <label htmlFor="titulo">{language.title}: </label>
        <input type="text" id="titulo" {...bindTitulo} />
        <p>
          {language.characters}: {longitud}
        </p>
      </fieldset>
      <fieldset>
        <label htmlFor="descripcion">{language.description}: </label>
        <input type="text" id="descripcion" {...bindDescripcion} />
      </fieldset>
      <fieldset>
        <input type="submit" value={language.add} />
        <button onClick={limpiarFormulario}>{language.reset}</button>
      </fieldset>
    </form>
  );
};

AgregarTareaForm.propTypes = {
  onAddTask: PropTypes.func,
};

export default AgregarTareaForm;
