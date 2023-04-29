export class Intervals {
    constructor(date, distance) {
        this.date = date;
        this.distance = distance;
        this.type = "Intervals";
    }
    format() {
        return `INTERVALS: I ran ${this.distance}k on ${this.date}`;
    }
}
