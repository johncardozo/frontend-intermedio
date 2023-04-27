import { Person } from "./person.js";
export class Student extends Person {
    constructor(firstName, lastName, average = 3) {
        super(firstName, lastName);
        this.average = average;
    }
}
