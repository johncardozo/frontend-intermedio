import { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";

// acceso al context
import LocalizationContext from "../context/LocalizationContext";

const AgregarTareaForm = ({ onAddTask }) => {
  // Estado del formulario
  const [titulo, setTitulo] = useState("");
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
    setTitulo("");
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
      terminada: false,
    };

    // Envía la nueva tarea al componente padre
    onAddTask(nuevaTarea);

    // Modifica el estado del componente
    setTitulo("");
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <fieldset>
        <label htmlFor="titulo">{language.title}: </label>
        <input
          type="text"
          id="titulo"
          value={titulo}
          onChange={(event) => setTitulo(event.target.value)}
        />
        <p>
          {language.characters}: {longitud}
        </p>
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
