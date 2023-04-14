function alerta() {
  alert("Hello");
}

// Obtiene el elemento HTML
const tituloJavascript = document.getElementById("tituloJavascript");

function mostrarFecha() {
  const fechaActual = new Date();
  console.log(fechaActual);
}

// Asocia un evento a un elemento
// NO SE ESCRIBEN LOS PARÉNTESIS DE LA FUNCIÓN
tituloJavascript.onclick = mostrarFecha;

// Obtiene una referencia al elemento
const tituloFecha = document.getElementById("tituloFecha");

// El elemento escucha el evento click
tituloFecha.addEventListener("click", mostrarFecha);
tituloFecha.addEventListener("click", function () {
  console.log("Hello 1");
});
tituloFecha.addEventListener("click", () => {
  // Obtiene la fecha actual
  const fecha = new Date();
  // Obtiene el día actual
  const day = fecha.getDate();
  // Muestra el día actual
  tituloFecha.textContent = day;
  // Verifica si el dia de hoy está en la primera o segunda quincena
  if (day >= 1 && day <= 15) {
    tituloFecha.classList.add("primera-quincena");
  } else {
    tituloFecha.classList.add("segunda-quincena");
  }
});
