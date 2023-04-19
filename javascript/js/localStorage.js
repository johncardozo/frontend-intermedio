// Verificación de soporte de LocalStorage en el browser
if (typeof Storage !== "undefined") {
  console.log("%cLocalStorage soportado", "color: green;");
} else {
  console.log("%cLocalStorage no soportado", "color: red;");
}

// Obtiene los botones
const botonGuardar = document.querySelector("#botonGuardar");
const botonObtener = document.querySelector("#botonObtener");

botonGuardar.addEventListener("click", () => {
  // Guarda un valor en localStorage

  // Si no existe un valor con el key, crea el valor
  // Si existe un valor con el key, lo modifica

  // Parámetros: key, value -> ambos son de tipo string
  localStorage.setItem("cumple", new Date());
});

botonObtener.addEventListener("click", () => {
  // Obtener el valor de localStorage
  const fecha = localStorage.getItem("cumple");

  // Diferente a null, diferente a undefined, no esté vacía
  //   if(universidad !== null && universidad !== undefined && universidad !== "") {
  //   }
  if (fecha) {
    alert(fecha);
  } else {
    console.error("No hay info");
  }
  // Falsy values -> null, undefined, 0
  const cantidad = 0;
  // if (cantidad > 0)
  if (cantidad) {
    console.log("Hay datos");
  } else {
    console.log("No hay datos");
  }
});

// Obtiene los botones para guardar/obtener objetos
const botonGuardarObjeto = document.getElementById("botonGuardarObjeto");
const botonObtenerObjeto = document.getElementById("botonObtenerObjeto");

botonGuardarObjeto.addEventListener("click", () => {
  const movieObject = {
    title: "Star Wars",
    year: 1977,
    genres: ["action", "sci-fi", "futuristic"],
  };
  // NO se puede guardar el objeto directamente
  //   localStorage.setItem("movie", movieObject);

  // Convierte el objeto en una cadena JSON
  const cadena = JSON.stringify(movieObject);

  // Guarda la cadena JSON en localStorage
  localStorage.setItem("movie", cadena);
});
botonObtenerObjeto.addEventListener("click", () => {
  // Obtiene el item de localStorage con el key requerido
  const cadena = localStorage.getItem("movie");
  console.log(cadena);
  // Convierte un string en JSON object
  const movieJSON = JSON.parse(cadena);
  console.log(movieJSON);
  console.log(`El año de la pelicula es ${movieJSON.year}`);
});
