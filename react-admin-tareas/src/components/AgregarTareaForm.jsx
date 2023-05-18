import { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

const AgregarTareaForm = ({ onAddTask }) => {
  // Estado del formulario
  const [titulo, setTitulo] = useState("");

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
      id: uuidv4(),
      titulo,
      terminada: false,
    };

    // Envía la nueva tarea al componente padre
    onAddTask(nuevaTarea);

    // Modifica el estado del componente
    setTitulo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="titulo">Titulo: </label>
        <input
          type="text"
          id="titulo"
          value={titulo}
          onChange={(event) => setTitulo(event.target.value)}
        />
      </fieldset>
      <fieldset>
        <input type="submit" value="Agregar" />
        <button onClick={limpiarFormulario}>Reset</button>
      </fieldset>
    </form>
  );
};

AgregarTareaForm.propTypes = {
  onAddTask: PropTypes.func,
};

export default AgregarTareaForm;
