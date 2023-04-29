export class LongRun {
    constructor(date, distance) {
        this.date = date;
        this.distance = distance;
        this.type = "Long Run";
    }
    format() {
        return `LONG RUN: I ran ${this.distance}k on ${this.date}`;
    }
}
