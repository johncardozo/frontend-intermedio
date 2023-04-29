import { ITraining } from "../interfaces/itraining.js";

export class LongRun implements ITraining {
  type: string;
  constructor(public date: string, public distance: number) {
    this.type = "Long Run";
  }

  format(): string {
    return `LONG RUN: I ran ${this.distance}k on ${this.date}`;
  }
}
