"use strict";
class Training {
    constructor(type = "Training run", distance = 0, date = "today") {
        this.type = type;
        this.distance = distance;
        this.date = date;
    }
}
const t1 = new Training("Long run", 21, "2023-04-20");
const t2 = new Training("Intervals", 8, "2023-04-21");
const t3 = new Training("Long run", 10, "2023-04-22");
const t4 = new Training("Long run", 10);
const t5 = new Training("Intervals");
const t6 = new Training();
console.log(t1);
console.log(t2);
console.log(t3);
console.log(t4);
console.log(t5);
console.log(t6);
