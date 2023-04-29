// Obtiene los elementos del formulario
const form = document.querySelector("form")!;
const inputDate = document.querySelector("#inputDate") as HTMLInputElement;
const selectType = document.getElementById("selectType") as HTMLSelectElement;
const inputDistance = document.querySelector(
  "#inputDistance"
) as HTMLInputElement;

form.addEventListener("submit", (evento: SubmitEvent) => {
  // Evita enviar info al servidor
  evento.preventDefault();

  // Obtiene los datos del usuario
  const date = inputDate.value;
  const type = selectType.value;
  const distance = inputDistance.valueAsNumber;

  console.log(date, typeof date);
  console.log(type, typeof type);
  console.log(distance, typeof distance);
});
