export default class TodoModel {
  constructor(
    public id: number,
    public title: string,
    public complete?: boolean
  ) {
    this.complete = this.complete || false;
  }
}
