export class TrainingRun {
    constructor(date, distance) {
        this.date = date;
        this.distance = distance;
        this.type = "Training Run";
    }
    getHTMLRow() {
        const tr = document.createElement("tr");
        const tdDate = document.createElement("td");
        tdDate.textContent = this.date;
        const tdType = document.createElement("td");
        tdType.textContent = this.type;
        const tdDistance = document.createElement("td");
        tdDistance.textContent = `${this.distance}k`;
        tr.append(tdDate, tdType, tdDistance);
        return tr;
    }
    format() {
        return `TRAINING RUN: I ran ${this.distance}k on ${this.date}`;
    }
}
