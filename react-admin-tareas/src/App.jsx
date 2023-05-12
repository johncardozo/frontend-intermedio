function App() {
  // Declaración de variables
  const nombre = "Catalina";
  const edad = 21;

  return (
    <>
      <h1>
        La estudiante {nombre} tiene {edad} años
      </h1>
      <h2>{edad >= 18 ? "Adulto" : "Niño"}</h2>
    </>
  );
}

export default App;
