// Librerías de React
import { useState } from "react";
// Componentes propios
import Header from "./components/Header";
import Tareas from "./components/Tareas";
// Importar SCSS
import "./styles/style.scss";

function App() {
  // Estado del componente
  const [tareas, setTareas] = useState([
    { id: 1, titulo: "Running" },
    { id: 2, titulo: "Programming" },
    { id: 3, titulo: "Reading" },
  ]);

  return (
    <>
      <Header titulo="Administrador de Tareas" />
      <Tareas tareas={tareas} />
    </>
  );
}

export default App;
