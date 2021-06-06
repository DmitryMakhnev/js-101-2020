import { Component } from '@angular/core';
import { TodosService } from '../../../services/todos.service';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

enum Filters {
  All = 'All',
  Done = 'Done',
  Undone = 'Undone'
}

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.scss']
})
export class TodosPageComponent {

  constructor(
    public todosService: TodosService,
    private authService: AuthService,
    private router: Router,
  ) {}

  newTodoText: string = '';

  currentFilter = Filters.All;
  filters = Object.keys(Filters);

  onAdd() {
    const newTodoText = this.newTodoText.trim();
    this.newTodoText = '';
    if (newTodoText) {
      this.todosService.addTodo(newTodoText);
    }
  }

  chooseFilter(filter: string) {
    this.currentFilter = Filters[filter as Filters];
  }

  get filteredTodos() {
    return this.todosService.todos.filter(todo => {
      switch (this.currentFilter) {
        case Filters.All:
          return true;
        case Filters.Done:
          return todo.isDone;
        case Filters.Undone:
          return !todo.isDone;
      }
    });
  }

  get undoneItemsCount(): number {
    return this.todosService
      .todos
      .reduce(
        (result, todo) => result + (todo.isDone ? 0 : 1),
        0
      );
  }

  logout() {
    this.authService.logout()
      .then(() => {
        this.router.navigateByUrl('/auth');
      });
  }
}
