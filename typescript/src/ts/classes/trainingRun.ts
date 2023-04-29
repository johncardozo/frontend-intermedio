import { ITraining } from "../interfaces/itraining.js";

export class TrainingRun implements ITraining {
  type: string;
  constructor(public date: string, public distance: number) {
    this.type = "Training Run";
  }

  format(): string {
    return `I ran ${this.distance}k on ${this.date}`;
  }
}
