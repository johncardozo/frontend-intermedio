import Header from "./components/Header";
import Tareas from "./components/Tareas";
import Boton from "./components/Boton";
import "./styles/style.scss";

function App() {
  return (
    <>
      <Header />
      <Tareas />
      <Boton texto="boton 1" color="yellow" />
      <Boton texto="boton 2" color="blue" />
      <Boton texto="boton 3" color="red" />
      <ul className="countries">
        <li>Colombia</li>
        <li>Argentina</li>
        <li>Chile</li>
      </ul>
    </>
  );
}

export default App;
