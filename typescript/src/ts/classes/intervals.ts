import { ITraining } from "../interfaces/itraining";

export class Intervals implements ITraining {
  type: string;
  constructor(public date: string, public distance: number) {
    this.type = "Intervals";
  }

  format(): string {
    return `INTERVALS: I ran ${this.distance}k on ${this.date}`;
  }
}
