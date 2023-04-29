"use strict";
const form = document.querySelector("form");
const inputDate = document.querySelector("#inputDate");
const selectType = document.getElementById("selectType");
const inputDistance = document.querySelector("#inputDistance");
form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const date = inputDate.value;
    const type = selectType.value;
    const distance = inputDistance.valueAsNumber;
    console.log(date, typeof date);
    console.log(type, typeof type);
    console.log(distance, typeof distance);
});
