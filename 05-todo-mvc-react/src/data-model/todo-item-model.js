import { makeObservable, observable } from 'mobx';

export class TodoItemModel {

  constructor(id, text) {
    this.id = id;
    this.isReady = false;
    this.text = text;

    makeObservable(
      this,
      {
        isReady: observable,
        text: observable
      }
    );
  }
}
