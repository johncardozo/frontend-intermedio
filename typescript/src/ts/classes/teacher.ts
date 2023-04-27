import { Person } from "./person.js";

export class Teacher extends Person {
  constructor(
    firstName: string,
    lastName: string,
    private document: string = ""
  ) {
    super(firstName, lastName);
    this.document = document;
  }
}
