import { ITraining } from "../interfaces/itraining.js";

export class TrainingRun implements ITraining {
  type: string;
  constructor(public date: string, public distance: number) {
    this.type = "Training Run";
  }
  getHTMLRow(): HTMLTableRowElement {
    // Crea el <tr>
    const tr = document.createElement("tr");
    // Crea las celdas <td>
    const tdDate = document.createElement("td");
    tdDate.textContent = this.date;
    const tdType = document.createElement("td");
    tdType.textContent = this.type;
    const tdDistance = document.createElement("td");
    tdDistance.textContent = `${this.distance}k`;
    // Agrega las celdas <td> al <tr>
    tr.append(tdDate, tdType, tdDistance);
    return tr;
  }

  format(): string {
    return `TRAINING RUN: I ran ${this.distance}k on ${this.date}`;
  }
}
