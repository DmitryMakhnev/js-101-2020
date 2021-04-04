import { makeObservable, observable } from 'mobx'
import { TodoItemModel } from './todo-item-model';
import { TodosFilterVales } from './todos-filter-vales';

export type TodoDataModel = {
  id: string;
  text: string;
  isDone: boolean;
}

export class TodoListModel {
  items: TodoItemModel[] = [];

  isLoading: boolean = false;
  error: string|null = null;

  currentFilterId: TodosFilterVales = TodosFilterVales.All;

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

  storeInitialItems = (todoItemDataModels: TodoDataModel[]): void => {
    this.items = todoItemDataModels.map(todoItemDataModel => new TodoItemModel(
      todoItemDataModel.id,
      todoItemDataModel.text,
      todoItemDataModel.isDone
    ));
  };

  addItem = (id: string, text: string): TodoItemModel  => {
    const newItem = new TodoItemModel(id, text);
    this.items.push(newItem);
    return newItem;
  }

  removeItem = (id: string): void => {
    this.items = this.items.filter(item => item.id !== id);
  }

  clearCompleted = (): void => {
    this.items = this.items.filter(item => !item.isReady);
  }

  markAllAsReady = (): void => {
    this.items.forEach(item => {
      item.isReady = true;
    });
  }
}
