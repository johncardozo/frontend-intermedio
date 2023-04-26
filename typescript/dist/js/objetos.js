"use strict";
class Training {
    constructor(_type = "Training run", _distance = 0, _date = "today", _comments = "") {
        this._type = _type;
        this._distance = _distance;
        this._date = _date;
        this._comments = _comments;
    }
    get comments() {
        return this._comments;
    }
    set comments(newComment) {
        this._comments = newComment;
    }
    format() {
        return `On ${this._date} I did ${this._type} for ${this._distance} kms -> ${this._comments}`;
    }
}
const t1 = new Training("Long run", 21, "2023-04-20");
const t2 = new Training("Intervals", 8, "2023-04-21");
const t3 = new Training("Long run", 10, "2023-04-22");
const t4 = new Training("Long run", 10);
const t5 = new Training("Intervals");
const t6 = new Training();
t6._date = "2024-01-01";
console.log(t1);
console.log(t1._distance);
t1.comments = "The race was wonderful";
console.log(t1.comments);
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
