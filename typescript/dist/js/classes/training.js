export class Training {
    constructor(type, distance, date, comments = "") {
        this.type = type;
        this.distance = distance;
        this.date = date;
        this.comments = comments;
    }
}
