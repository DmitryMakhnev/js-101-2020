import { makeObservable, observable } from 'mobx'
import { TodoItemModel } from './todo-item-model';

export class TodoListModel {
  /**
   * @type {TodoItemModel[]}
   */
  items = [];

  isLoading = false;
  error = null;

  currentFilterId = 'All';

  constructor() {
    makeObservable(
      this,
      {
        items: observable.shallow,
        currentFilterId: observable,
        isLoading: observable,
        error: observable
      }
    );
  }

  storeInitialItems = todoItemDataModels => {
    this.items = todoItemDataModels.map(todoItemDataModel => new TodoItemModel(
      todoItemDataModel.id,
      todoItemDataModel.text,
      todoItemDataModel.isDone
    ));
  };

  addItem = (id, text) => {
    const newItem = new TodoItemModel(id, text);
    this.items.push(newItem);
    return newItem;
  }

  removeItem = id => {
    this.items = this.items.filter(item => item.id !== id);
  }

  clearCompleted = () => {
    this.items = this.items.filter(item => !item.isReady);
  }

  markAllAsReady = () => {
    this.items.forEach(item => {
      item.isReady = true;
    });
  }
}
