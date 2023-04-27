export class Person {
  constructor(private firstName: string, private lastName: string) {}

  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
