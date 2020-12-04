import { makeObservable, observable } from 'mobx'
import { TodoItemModel } from './todo-item-model';

let idIdCounter = 0;

export class TodoListModel {
  /**
   * @type {TodoItemModel[]}
   */
  items = [];

  currentFilterId = 'All';

  constructor() {
    makeObservable(
      this,
      {
        items: observable.shallow,
        currentFilterId: observable,
      }
    );
  }

  addItem(text) {
    this.items.push(
      new TodoItemModel(idIdCounter++, text)
    );
  }

  removeItem(id) {
    this.items = this.items.filter(item => item.id !== id);
  }

  clearCompleted() {
    this.items = this.items.filter(item => !item.isReady);
  }

  markAllAsReady() {
    this.items.forEach(item => {
      item.isReady = true;
    });
  }
}
