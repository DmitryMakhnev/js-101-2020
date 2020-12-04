import { makeObservable, observable } from 'mobx';

export class TodoItemModel {
  id;
  isReady;
  text;

  constructor(id, text) {
    makeObservable(
      this,
      {
        isReady: observable
      }
    );
    this.id = id;
    this.isReady = false;
    this.text = text;
  }
}
