"use strict";
class Training {
    constructor() {
        this.type = "";
        this.distance = 0;
        this.date = "";
    }
}
const t1 = new Training();
const t2 = new Training();
t1.distance = 10;
t2.distance = 21;
console.log(t1);
console.log(t2);
console.log(t1.distance);
