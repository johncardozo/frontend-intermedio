import Header from "./components/Header";
import Opcion from "./components/Opcion";

function App() {
  return (
    <>
      <Header />
      <Opcion texto="Home" />
      <Opcion texto="Products" />
      <Opcion texto="Services" />
    </>
  );
}

export default App;
