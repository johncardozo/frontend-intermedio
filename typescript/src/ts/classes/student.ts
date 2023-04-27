import { Person } from "./person.js";

export class Student extends Person {
  constructor(firstName: string, lastName: string, public average: number = 3) {
    super(firstName, lastName);
  }
}
