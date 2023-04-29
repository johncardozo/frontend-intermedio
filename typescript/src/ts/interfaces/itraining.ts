export interface ITraining {
  date: string;
  type: string;
  distance: number;
  format(): string;
}
