import { makeObservable, observable } from 'mobx';

export class TodoItemModel {

  constructor(id, text, isReady) {
    this.id = id;
    this.isReady = isReady;
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
