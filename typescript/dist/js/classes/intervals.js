export class Intervals {
    constructor(date, distance) {
        this.date = date;
        this.distance = distance;
        this.type = "Intervals";
    }
    format() {
        return `INTERVALS: I ran ${this.distance}k on ${this.date}`;
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
}
