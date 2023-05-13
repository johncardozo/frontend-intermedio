import Header from "./components/Header";
import Tareas from "./components/Tareas";
import Boton from "./components/Boton";

function App() {
  return (
    <>
      <Header />
      <Tareas />
      <Boton texto="boton 1" color="yellow" />
      <Boton texto="boton 2" color="blue" />
      <Boton texto="boton 3" color="red" />
    </>
  );
}

export default App;
