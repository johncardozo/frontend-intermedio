import { Intervals } from "./classes/intervals.js";
import { LongRun } from "./classes/longRun.js";
import { TrainingRun } from "./classes/trainingRun.js";
const form = document.querySelector("form");
const inputDate = document.querySelector("#inputDate");
const selectType = document.getElementById("selectType");
const inputDistance = document.querySelector("#inputDistance");
const tbody = document.querySelector("tbody");
const TRAINING_RUN = 1;
const INTERVALS = 2;
const LONG_RUN = 3;
const trainings = [];
form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const date = inputDate.value;
    const type = parseInt(selectType.value);
    const distance = inputDistance.valueAsNumber;
    let newTraining;
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
    trainings.push(newTraining);
    showTrainings();
});
function showTrainings() {
    tbody.innerHTML = "";
    trainings.forEach((training) => {
        const tr = training.getHTMLRow();
        tbody.appendChild(tr);
    });
}
