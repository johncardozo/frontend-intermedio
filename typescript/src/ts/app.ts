import { ITraining } from "./interfaces/itraining.js";
import { Intervals } from "./classes/intervals.js";
import { LongRun } from "./classes/longRun.js";
import { TrainingRun } from "./classes/trainingRun.js";

// Obtiene los elementos del formulario
const form = document.querySelector("form")!;
const inputDate = document.querySelector("#inputDate") as HTMLInputElement;
const selectType = document.getElementById("selectType") as HTMLSelectElement;
const inputDistance = document.querySelector(
  "#inputDistance"
) as HTMLInputElement;
const tbody = document.querySelector("tbody") as HTMLTableSectionElement;

// Definición de constantes de tipo de entrenamiento
const TRAINING_RUN = 1;
const INTERVALS = 2;
const LONG_RUN = 3;

const trainings: ITraining[] = [];

form.addEventListener("submit", (evento: SubmitEvent) => {
  // Evita enviar info al servidor
  evento.preventDefault();

  // Obtiene los datos del usuario
  const date = inputDate.value;
  const type = parseInt(selectType.value);
  const distance = inputDistance.valueAsNumber;

  let newTraining: ITraining;
  switch (type) {
    case TRAINING_RUN:
      newTraining = new TrainingRun(date, distance);
      break;
    case INTERVALS:
      newTraining = new Intervals(date, distance);
      break;
    case LONG_RUN:
      newTraining = new LongRun(date, distance);
      break;
  }
  // Agrega el nuevo entrenamiento a la lista
  trainings.push(newTraining!);

  // Muestra los entrenamientos
  showTrainings();
});

function showTrainings() {
  // Limpia tbody
  tbody.innerHTML = "";

  // Recorre los entreanmientos
  trainings.forEach((training) => {
    const tr = training.getHTMLRow();
    tbody.appendChild(tr);
  });
}
