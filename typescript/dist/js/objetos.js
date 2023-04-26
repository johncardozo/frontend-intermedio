"use strict";
class Training {
    constructor(type = "Training run", distance = 0, date = "today") {
        this.type = type;
        this.distance = distance;
        this.date = date;
    }
    format() {
        return `On ${this.date} I did ${this.type} for ${this.distance} kms.`;
    }
}
const t1 = new Training("Long run", 21, "2023-04-20");
const t2 = new Training("Intervals", 8, "2023-04-21");
const t3 = new Training("Long run", 10, "2023-04-22");
const t4 = new Training("Long run", 10);
const t5 = new Training("Intervals");
const t6 = new Training();
console.log(t1.format());
let trainings = [];
trainings.push(t1);
trainings.push(t2);
trainings.push(t3);
trainings.push(t4);
trainings.push(t5);
trainings.push(t6);
trainings.push(new Training("Long run", 42, "2023-04-26"));
trainings.forEach((training) => console.log(training.format()));
