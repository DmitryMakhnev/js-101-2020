import { makeObservable, observable } from 'mobx';

export class TodoItemModel {

  constructor(
    public id: string,
    public text: string,
    public isReady: boolean = false,
  ) {
    makeObservable(
      this,
      {
        isReady: observable,
        text: observable
      }
    );
  }
}
