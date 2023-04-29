export class TrainingRun {
    constructor(date, distance) {
        this.date = date;
        this.distance = distance;
        this.type = "Training Run";
    }
    format() {
        return `I ran ${this.distance}k on ${this.date}`;
    }
}
