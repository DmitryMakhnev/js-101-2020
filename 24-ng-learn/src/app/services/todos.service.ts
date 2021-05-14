import { Injectable } from '@angular/core';

type TodoDataModel = {
  id: string;
  text: string;
  isDone: boolean;
}

let idIterator = 0;

@Injectable()
export class TodosService {

  todos: TodoDataModel[] = [];

  addTodo(text: string) {
    this.todos.push({
      id: (idIterator++).toString(32),
      text,
      isDone: false,
    });
  }

  removeTodo(todoId: string) {
    this.todos = this.todos.filter(todo => todo.id !== todoId);
  }

  markAllAsDone() {
    this.todos.forEach(todo => todo.isDone = true);
  }

}
